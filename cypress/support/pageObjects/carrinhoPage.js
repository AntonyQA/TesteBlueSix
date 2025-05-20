class CarrinhoPage {
 clicarNoPrimeiroProdutoDetalhes() {
  cy.get('[data-testid=product-detail-link]').should('be.visible').first().click();
}


  adicionarProdutoNaLista() {
    cy.get('[data-testid=adicionarNaLista]').click();
  }

  limparListaDeCompra() {
    cy.get('[data-testid=limparLista]').click();
  }

  voltarParaPaginaInicial() {
    cy.get('[data-testid=paginaInicial]').click();
  }
}

export default new CarrinhoPage();
