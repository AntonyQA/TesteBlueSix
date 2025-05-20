describe('API - Login', () => {
  const email = `login_user_${Date.now()}@test.com`;
  const senha = 'senha123';

  before(() => {
    cy.request('POST', 'https://serverest.dev/usuarios', {
      nome: 'Login API',
      email,
      password: senha,
      administrador: 'false'
    });
  });

  it('Deve realizar login com sucesso e retornar token', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        email,
        password: senha
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('authorization');
      cy.log('Token JWT:', res.body.authorization);
    });
  });
});
