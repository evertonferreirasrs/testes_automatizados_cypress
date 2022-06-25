Cypress.Commands.add('login', (nome, senha) => {
      //informa um login válido
      cy.get('input[data-test="username"]').type(nome);
      //informa uma senha válida
      cy.get('input[data-test="password"]').type(senha, { log: false });
      //clica no botão login
      cy.get('input[data-test="login-button"]').click();
})

Cypress.Commands.add('logout', () => {
      cy.get('button[id="react-burger-menu-btn"]').click();
      cy.get('a[id="logout_sidebar_link"]').click();
})

Cypress.Commands.add('clean', () => {
      cy.get('button[id="react-burger-menu-btn"]').click();
      cy.get('a[id="reset_sidebar_link"]').click();
      cy.get('button[id="react-burger-cross-btn"]').click();
})



