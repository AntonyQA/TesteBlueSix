import loginPage from '../../support/pageObjects/loginPage';
import carrinhoPage from '../../support/pageObjects/carrinhoPage';

describe('Carrinho de compras - fluxo completo', () => {
  const email = `user_${Date.now()}@test.com`;
  const senha = 'teste123';

  before(() => {
    cy.request('POST', 'https://serverest.dev/usuarios', {
      nome: 'Usuário Carrinho',
      email,
      password: senha,
      administrador: 'false'
    }).then((res) => {
      expect(res.status).to.eq(201);
    });
  });

  it('Deve adicionar e limpar produto do carrinho com sucesso', () => {
    loginPage.visitar();
    loginPage.fazerLogin(email, senha);
    carrinhoPage.clicarNoPrimeiroProdutoDetalhes();
    carrinhoPage.adicionarProdutoNaLista();
    carrinhoPage.limparListaDeCompra();
    carrinhoPage.voltarParaPaginaInicial();
  });
});
