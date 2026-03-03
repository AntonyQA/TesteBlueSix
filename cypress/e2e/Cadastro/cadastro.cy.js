import cadastro from '../../support/pageObjects/cadastroPage';

describe('Cadastro de usuário', () => {
  it('Deve cadastrar um novo usuário com sucesso', () => {
    const emailUnico = `user_${Date.now()}@test.com`;

    cadastro.visitar();
    cadastro.cadastrarUsuario('Usuário de Teste', emailUnico, 'teste123');
    cadastro.verificarMensagemSucesso();
  });
});
