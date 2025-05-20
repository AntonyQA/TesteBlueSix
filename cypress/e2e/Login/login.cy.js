import loginPage from '../../support/pageObjects/loginPage';

describe('Login de usuário', () => {
  it('Deve realizar login com sucesso com credenciais válidas', () => {
    loginPage.visitar();
    loginPage.fazerLogin('fulano@qa.com', 'teste');
  });

  it('Deve exibir erro ao tentar logar com senha inválida', () => {
    loginPage.visitar();
    loginPage.fazerLogin('fulano@qa.com', 'senhaerrada');
    loginPage.verificarMensagemErro('Email e/ou senha inválidos');
  });
});
