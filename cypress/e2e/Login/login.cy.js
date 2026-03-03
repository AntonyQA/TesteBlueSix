import login from '../../support/pageObjects/loginPage';

describe('Login de usuário', () => {
  it('Deve realizar login com sucesso com credenciais válidas', () => {
    login.visitar();
    login.fazerLogin('fulano@qa.com', 'teste');
  });

  it('Deve exibir erro ao tentar logar com senha inválida', () => {
    login.visitar();
    login.fazerLogin('fulano@qa.com', 'senhaerrada');
    login.verificarMensagemErro('Email e/ou senha inválidos');
  });
});
