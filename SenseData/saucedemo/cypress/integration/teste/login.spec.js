describe('Login usuário SauceDemo', () => {

    beforeEach(() => {
        //acessa o site
        cy.visit('https://www.saucedemo.com/');
    });

    it('Fazer Login com usuário válido', () => {
        //chamando a função login para logar no site
        cy.login('standard_user', 'secret_sauce');

        //verifica se depois de logar possui um título 
        cy.contains('span', 'Products').should('be.visible');

        //deslogar
        cy.logout();

        //verificar que deslogou do sistema
        cy.contains('h4', 'Accepted usernames are:').should('be.visible');
    });

    it('Fazer Login com usuário inválido', () => {
        //chamando a função login para logar no site
        cy.login('standard', 'secret');

        //verifica se aparece a mensagem de nome e usuário inválido
        cy.contains('h3', 'Epic sadface: Username and password do not match any user in this service').should('be.visible');
    });

    it('Verificar se os campos estão vazios', () => {
        //clica no botão login
        cy.get('input[data-test="login-button"]').click();

        //verifica se aparece a mensagem de nome e usuário inválido
        cy.contains('h3', 'Epic sadface: Username is required').should('be.visible');
    });

    it('Verificar se o campo senha está vazio', () => {
        //informa um login 
        cy.get('input[data-test="username"]').type('standard_user');
        //clica no botão login
        cy.get('input[data-test="login-button"]').click();

        //verifica se aparece a mensagem de nome e usuário inválido
        cy.contains('h3', 'Epic sadface: Password is required').should('be.visible');
    });
    
    it('Verificar se o usuário está bloqueado', () => {
        //chamando a função login para logar no site
        cy.login('locked_out_user', 'secret_sauce');

        //verifica se aparece a mensagem de nome e usuário inválido
        cy.contains('h3', 'Epic sadface: Sorry, this user has been locked out.').should('be.visible');
    });

    it('Verificar se o usuário está com problema', () => {
        //chamando a função login para logar no site
        cy.login('problem_user', 'secret_sauce');

        //verifica se depoir de logar possui um título 
        cy.contains('span', 'Products').should('be.visible');

        //adicionar produto ao carrinho
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();

        cy.contains('span', '1').should('be.visible');

        //remover produto do carrinho
        cy.get('[data-test="remove-sauce-labs-onesie"]')
        
        //verifica se possui a palavra remove confirmando o problema
        cy.contains('Remove').should('be.visible');

        //limpar o carrinho
        cy.clean();
        //deslogar
        cy.logout();
    });

    it('Verificar tempo que a página abre', () => {
        //chamando a função login para logar no site
        cy.login('performance_glitch_user', 'secret_sauce');

        //verifica se depois de logar possui um título 
        cy.contains('span', 'Products').should('be.visible');
        
        //deslogar
        cy.logout();
    });

    afterEach(() => {
        
    });

});
