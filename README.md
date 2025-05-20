# 🧪 Testes Automatizados com Cypress – Serverest

Este projeto contém testes automatizados E2E e de API com Cypress, aplicados à aplicação [Serverest](https://front.serverest.dev/) e sua [API pública](https://serverest.dev/).  
Desenvolvido como parte de um desafio técnico.

## 🚀 Tecnologias

- [Cypress](https://www.cypress.io/) – Framework de testes
- JavaScript (ES6+)
- Node.js (v16+)

## 📦 Instalação
git clone https://github.com/AntonyQA/TesteBlueSix.git
cd TesteBlueSix
npm install

## ▶️ Executando os testes

### Abrir interface do Cypress (modo interativo)
npx cypress open
ou rodar no terminal npx cypress run

## ✅ Cenários cobertos

### Frontend (E2E)
- Login de usuário (válido e inválido)
- Cadastro de novo usuário
- Adição de produto ao carrinho (detalhes, adicionar, limpar, voltar)
- Pesquisa de produto

### API
- Criação de usuário (`POST /usuarios`)
- Login e extração de token (`POST /login`)
- Listagem de produtos (`GET /produtos`)
