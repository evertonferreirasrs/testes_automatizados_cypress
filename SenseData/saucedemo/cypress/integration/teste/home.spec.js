describe('Ordenar produto e Adicionar ao carrinho', () => {

    beforeEach(() => {
        //acessa o site
        cy.visit('https://www.saucedemo.com/');
    });

    it('Ordenar os produtos pelo valor (low to high)', () => {
        //chamando a função login para logar no site
        cy.login('standard_user', 'secret_sauce');

        //verifica se depoir de logar possui um título 
        cy.contains('span', 'Products').should('be.visible');

        //Pegas todas opções de select e pegar o comprimento das opções
        cy.get('select option').its('length').then(n => {
            //função para selecionar a opção desejada
            cy.get('select option')
            const opcaoSelecionada = "Price (low to high)"
            cy.get('select').select(opcaoSelecionada)
        });

        //Verifica se foi ordenado corretamente
        cy.contains('Price (low to high)').should('be.visible');

        //deslogar
        cy.logout();

        //verificar que deslogou do sistema
        cy.contains('h4', 'Accepted usernames are:').should('be.visible');

    });

    it('Adicionar produtos ao carrinho', () => {
        //chamando a função login para logar no site
        cy.login('standard_user', 'secret_sauce');

        //verifica se depoir de logar possui um título 
        cy.contains('span', 'Products').should('be.visible');

        //adicionar produto ao carrinho
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();

        cy.contains('span', '2').should('be.visible');

        //limpar o carrinho
        cy.clean();
        //deslogar
        cy.logout();

        //verificar que deslogou do sistema
        cy.contains('h4', 'Accepted usernames are:').should('be.visible');

    });

    it('Remover produtos do carrinho', () => {
        //chamando a função login para logar no site
        cy.login('standard_user', 'secret_sauce');

        //verifica se depoir de logar possui um título 
        cy.contains('span', 'Products').should('be.visible');

        //adicionar produto ao carrinho
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        //verificar se possui 4 produtos no carrinho
        cy.contains('span', '4').should('be.visible');
        
        //remover 2 produtos do carrinho
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
        //verificar se possui 2 produtos no carrinho
        cy.contains('span', '2').should('be.visible');


        //limpar o carrinho
        cy.clean();
        //deslogar
        cy.logout();

        //verificar que deslogou do sistema
        cy.contains('h4', 'Accepted usernames are:').should('be.visible');

    });

});
