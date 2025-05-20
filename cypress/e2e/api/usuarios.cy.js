describe('API - Usuários', () => {
  it('Deve criar um novo usuário com sucesso', () => {
    const email = `api_user_${Date.now()}@test.com`;

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: 'Usuário API',
        email,
        password: 'teste123',
        administrador: 'true'
      }
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body.message).to.eq('Cadastro realizado com sucesso');
      expect(res.body).to.have.property('_id');
    });
  });
});
