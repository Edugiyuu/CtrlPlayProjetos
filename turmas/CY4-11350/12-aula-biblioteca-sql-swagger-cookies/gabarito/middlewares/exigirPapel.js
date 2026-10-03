// Fabrica de middleware: exigirPapel('bibliotecario') DEVOLVE um middleware.
// Por isso o uso na rota tem parenteses, diferente do autenticar.
export default function exigirPapel(papelNecessario) {
  return (req, res, next) => {
    if (req.usuario.papel !== papelNecessario) {
      // 403: sabemos quem voce e, mas voce nao pode fazer isso.
      return res.status(403).json({ erro: 'sem permissao para essa acao' });
    }

    next();
  };
}
