import loginPage from '../../support/pageObjects/loginPage';
import homePage from '../../support/pageObjects/homePage';

describe('Pesquisa de produto', () => {
  const email = `user_${Date.now()}@test.com`;
  const senha = 'teste123';

  before(() => {
    cy.request('POST', 'https://serverest.dev/usuarios', {
      nome: 'Usuário Pesquisa',
      email,
      password: senha,
      administrador: 'false'
    }).then((res) => {
      expect(res.status).to.eq(201);
    });
  });

  it('Deve exibir produto ao realizar pesquisa', () => {
    loginPage.visitar();
    loginPage.fazerLogin(email, senha);

    const nomeProduto = 'Mouse';
    homePage.pesquisarProduto(nomeProduto);
    homePage.verificarProdutoNaLista(nomeProduto);
  });
});
