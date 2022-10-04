import signupPage from '../../pages/SignupPage'
import signupFactory from '../../factories/SignupFactory'
describe('Signup', () => {
    // beforeEach(function () {
    //     cy.fixture('deliver').then((d) => {
    //         this.deliver = d
    //     })
    // });
    it('User should be deliver', () => {
        var deliver = signupFactory.deliver()

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()

        const expectMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expectMessage)

        cy.get('.swal2-container .swal2-confirm').click()
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    });

    it('Incorrect document', () => {
        var deliver = signupFactory.deliver()
        deliver.cpf = 'XXX000000AA'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! CPF inválido')
    });

    it('Incorrect email', () => {
        var deliver = signupFactory.deliver()
        deliver.email = 'teste.com.br'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! Email com formato inválido.')
    });

    context('Required fields', () => {
        const messages = [
            {field: 'name', output: 'É necessário informar o nome'},
            {fiels: 'cpf', output: 'É necessário informar o CPF'},
            {fiels: 'email', output: 'É necessário informar o email'},
            {fiels: 'postalcode', output: 'É necessário informar o CEP'},
            {fiels: 'number', output: 'É necessário informar o número do endereço'},
            {fiels: 'delivery_method', output: 'Selecione o método de entrega'},
            {fiels: 'cnh', output: 'Adicione uma foto da sua CNH'},
        ]

        before(() => {
            signupPage.go()
            signupPage.submit()
        })

        messages.forEach((msg)=>{
            it(`${msg.field} is required`, ()=>{
                signupPage.alertMessageShouldBe(msg.output)
            })
        })
    });

    // it('Required fields', () => {
    //     signupPage.go()
    //     signupPage.submit()
    //     signupPage.alertMessageShouldBe('É necessário informar o nome')
    //     signupPage.alertMessageShouldBe('É necessário informar o CPF')
    //     signupPage.alertMessageShouldBe('É necessário informar o email')
    //     signupPage.alertMessageShouldBe('É necessário informar o número do endereço')
    //     signupPage.alertMessageShouldBe('Selecione o método de entrega')
    //     signupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')        
    // });
});