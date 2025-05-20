import cadastroPage from '../../support/pageObjects/cadastroPage';

describe('Cadastro de usuário', () => {
  it('Deve cadastrar um novo usuário com sucesso', () => {
    const emailUnico = `user_${Date.now()}@test.com`;

    cadastroPage.visitar();
    cadastroPage.cadastrarUsuario('Usuário de Teste', emailUnico, 'teste123');
    cadastroPage.verificarMensagemSucesso();
  });
});
