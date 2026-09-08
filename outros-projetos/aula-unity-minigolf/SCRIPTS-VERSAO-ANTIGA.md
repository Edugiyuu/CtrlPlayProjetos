# Scripts do Minigolfe — versão compatível com Unity anterior à 6

Use este arquivo **somente se o aluno não conseguir instalar a Unity 6**
(6000.x). O guia original (`GUIA_FINAL_MINIGOLF_DO_ZERO.md` do repo
[minigolf-unity-aula](https://github.com/Edugiyuu/minigolf-unity-aula)) usa
`Rigidbody.linearVelocity` / `Rigidbody.angularVelocity`, que só existem a
partir da Unity 6. Em versões anteriores (2021/2022/2023 LTS) essas
propriedades chamam apenas `velocity` e `angularVelocity`.

Todo o resto do guia (hierarquia, materiais, template Universal 3D, Input
System) continua igual — só os dois scripts abaixo mudam.

## Assets/MiniGolf/Scripts/MiniGolfBolaSimples.cs

```csharp
using UnityEngine;
using UnityEngine.InputSystem;

// Controla a mira, a tacada e o reinicio da bola.
public class MiniGolfBolaSimples : MonoBehaviour
{
    // Referencias preenchidas no Inspector.
    public Rigidbody corpo;
    public Transform mira;

    // Valores que podem ser alterados sem mexer no codigo.
    public float forca = 7.5f;
    public float velocidadeDaMira = 85f;

    private Vector3 posicaoInicial;
    private Quaternion rotacaoInicialDaMira;
    private int tacadas;
    private bool venceu;

    // Start roda uma vez quando o jogo comeca.
    private void Start()
    {
        posicaoInicial = transform.position;
        rotacaoInicialDaMira = mira.rotation;
    }

    // Update roda uma vez por frame.
    private void Update()
    {
        Keyboard teclado = Keyboard.current;

        // Encerra o Update se nenhum teclado estiver conectado.
        if (teclado == null)
        {
            return;
        }

        // A mira acompanha a posicao da bola.
        mira.position = transform.position + Vector3.up * 0.08f;

        // A tecla R reinicia a partida.
        if (teclado.rKey.wasPressedThisFrame)
        {
            Reiniciar();
        }

        // Bloqueia novas tacadas depois da vitoria.
        if (venceu)
        {
            return;
        }

        // So permite mirar quando a bola estiver quase parada.
        bool bolaParada = corpo.velocity.magnitude < 0.12f;
        mira.gameObject.SetActive(bolaParada);

        if (!bolaParada)
        {
            return;
        }

        // Descobre a direcao escolhida pelo jogador.
        float direcao = 0f;

        if (teclado.aKey.isPressed || teclado.leftArrowKey.isPressed)
        {
            direcao = -1f;
        }

        if (teclado.dKey.isPressed || teclado.rightArrowKey.isPressed)
        {
            direcao = 1f;
        }

        // Gira a mira no eixo Y.
        mira.Rotate(0f, direcao * velocidadeDaMira * Time.deltaTime, 0f);

        // Espaco aplica um impulso na direcao da mira.
        if (teclado.spaceKey.wasPressedThisFrame)
        {
            corpo.AddForce(mira.forward * forca, ForceMode.Impulse);
            tacadas++;
            Debug.Log("Tacadas: " + tacadas);
        }
    }

    // O script do buraco chama este metodo quando o jogador vence.
    public void Vencer()
    {
        venceu = true;
        mira.gameObject.SetActive(false);
        corpo.velocity = Vector3.zero;
        corpo.angularVelocity = Vector3.zero;
        corpo.isKinematic = true;

        Debug.Log("Voce venceu com " + tacadas + " tacadas! Pressione R.");
    }

    // Devolve a bola e a mira ao estado inicial.
    private void Reiniciar()
    {
        venceu = false;
        tacadas = 0;
        corpo.isKinematic = false;
        corpo.velocity = Vector3.zero;
        corpo.angularVelocity = Vector3.zero;
        transform.position = posicaoInicial;
        mira.rotation = rotacaoInicialDaMira;

        Debug.Log("Jogo reiniciado.");
    }
}
```

## Assets/MiniGolf/Scripts/MiniGolfBuracoSimples.cs

Este script não muda — não usa `velocity`. Copie exatamente como está no
guia original:

```csharp
using UnityEngine;

// Este script deve ficar no objeto Buraco_Trigger.
public class MiniGolfBuracoSimples : MonoBehaviour
{
    // A Unity chama este metodo quando algo entra no trigger.
    private void OnTriggerEnter(Collider outro)
    {
        // Procura o script da bola no objeto que entrou.
        MiniGolfBolaSimples bola = outro.GetComponent<MiniGolfBolaSimples>();

        // Se encontrou a bola, termina a fase.
        if (bola != null)
        {
            bola.Vencer();
        }
    }
}
```

## O que verificar se ainda der erro

- **Template do projeto**: precisa ser `Universal 3D` (não `3D`), senão os
  materiais com shader `Universal Render Pipeline/Lit` ficam rosa/sem
  textura.
- **Input System**: `Window > Package Manager` → instalar `Input System`, e
  em `Edit > Project Settings > Player > Active Input Handling` selecionar
  `Input System Package (New)`. Isso funciona em qualquer versão recente da
  Unity, não só na 6.
- Se o erro for outro `CS1061` (membro não encontrado) em uma API diferente,
  é sinal de outra diferença de versão — anote a mensagem exata do Console e
  ajuste o script equivalente.
