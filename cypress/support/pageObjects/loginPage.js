class LoginPage {
  visitar() {
    cy.visit('https://front.serverest.dev/login');
  }

  preencherEmail(email) {
    cy.get('[data-testid=email]').type(email);
  }

 preencherSenha(senha) {
  cy.get('[data-testid=senha]').type(senha); 
}

  clicarEntrar() {
    cy.get('[data-testid=entrar]').click();
  }

  fazerLogin(email, senha) {
    this.preencherEmail(email);
    this.preencherSenha(senha);
    this.clicarEntrar();
  }

  verificarMensagemErro(mensagem) {
    cy.contains(mensagem).should('be.visible');
  }
}

export default new LoginPage();
