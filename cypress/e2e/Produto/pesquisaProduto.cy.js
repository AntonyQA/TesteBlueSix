import login from '../../support/pageObjects/loginPage';
import home from '../../support/pageObjects/homePage';

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
    login.visitar();
    login.fazerLogin(email, senha);

    const nomeProduto = 'Mouse';
    home.pesquisarProduto(nomeProduto);
    home.verificarProdutoNaLista(nomeProduto);
  });
});
