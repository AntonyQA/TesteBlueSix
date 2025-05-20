class CadastroPage {
  visitar() {
    cy.visit('https://front.serverest.dev/cadastrarusuarios');
  }

  preencherNome(nome) {
    cy.get('[data-testid=nome]').type(nome);
  }

  preencherEmail(email) {
    cy.get('[data-testid=email]').type(email);
  }

  preencherSenha(senha) {
  cy.get('[data-testid=password]').type(senha);
}


  marcarAdministrador() {
    cy.get('[data-testid=checkbox]').check();
  }

  clicarCadastrar() {
    cy.get('[data-testid=cadastrar]').click();
  }

  cadastrarUsuario(nome, email, senha, admin = true) {
    this.preencherNome(nome);
    this.preencherEmail(email);
    this.preencherSenha(senha);
    if (admin) this.marcarAdministrador();
    this.clicarCadastrar();
  }

  verificarMensagemSucesso() {
    cy.contains('Cadastro realizado com sucesso').should('be.visible');
  }
}

export default new CadastroPage();
