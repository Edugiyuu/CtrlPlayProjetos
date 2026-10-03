// A chave que assina os tokens. Em projeto de verdade ela vem de um .env
// (que nao vai pro git); aqui tem um valor padrao so pra aula rodar sem setup.
export const JWT_SECRET = process.env.JWT_SECRET || 'segredo-da-aula-nao-use-em-producao';

// Quanto tempo o token vale. Depois disso, precisa logar de novo.
export const JWT_EXPIRACAO = '1h';
