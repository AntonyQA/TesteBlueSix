class HomePage {
  pesquisarProduto(nomeDoProduto) {
    cy.get('[data-testid=pesquisar]').clear().type(nomeDoProduto);
  }

  verificarProdutoNaLista(nomeDoProduto) {
    cy.contains(nomeDoProduto).should('be.visible');
  }
}

export default new HomePage();
