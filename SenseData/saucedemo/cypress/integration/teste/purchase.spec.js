describe('Realizar uma compra', () => {

    beforeEach(() => {
        //acessa o site
        cy.visit('https://www.saucedemo.com/');
    });

    it('Fazer a compra de 2 produtos', () => {
        //chamando a função login para logar no site
        cy.login('standard_user', 'secret_sauce');

        //verifica se depoir de logar possui um título 
        cy.contains('span', 'Products').should('be.visible');

        //adicionar produto ao carrinho
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        //verificar se contém 2 produtos adicionados ao carrinho
        cy.contains('span', '2').should('be.visible');

        //clicar no carrinho
        cy.get('.shopping_cart_link').click();

        //verificar se contem os produtos dentro do carrinho
        cy.contains('div', 'Sauce Labs Onesie').should('be.visible');
        cy.contains('div', '7.99').should('be.visible');
        cy.contains('div', 'Test.allTheThings() T-Shirt (Red)').should('be.visible');
        cy.contains('div', '15.99').should('be.visible');

        cy.get('[data-test="checkout"]').click();

        //verificar se estamos na página para inserir dados de compra
        cy.contains('span', 'Checkout: Your Information').should('be.visible');

        //inserir os dados para realizar a compra
        cy.get('[data-test="firstName"]').type('Everton');
        cy.get('[data-test="lastName"]').type('Ferreira');
        cy.get('[data-test="postalCode"]').type('37540-000');
        cy.get('[data-test="continue"]').click();

        //verificar se estamos na pagina para finalizar a compra
        cy.contains('span', 'Checkout: Overview').should('be.visible');

        //verificar se contem os produtos da compra
        cy.contains('div', 'Sauce Labs Onesie').should('be.visible');
        cy.contains('div', '7.99').should('be.visible');
        cy.contains('div', 'Test.allTheThings() T-Shirt (Red)').should('be.visible');
        cy.contains('div', '15.99').should('be.visible');

        cy.get('[data-test="finish"]').click();

        //verificar se a compra foi finalizada e voltar a tela home
        cy.contains('span', 'Checkout: Complete!').should('be.visible');
        cy.get('[data-test="back-to-products"]').click();

        //deslogar
        cy.logout();

        //verificar que deslogou do sistema
        cy.contains('h4', 'Accepted usernames are:').should('be.visible');
    });

});
