Cypress.Commands.add('idenficicacaoSeguros', (nome, dataAniversario, CPF) => {
    cy.get('.row-segurados > :nth-child(1) > input').type(nome);
    cy.get('.row-segurados > :nth-child(2) > input').type(dataAniversario);
    cy.get('.row-segurados > :nth-child(3) > input').type(CPF);
})

Cypress.Commands.add('dadosPagador', (nome, CPF) => {
    cy.get('.flex > :nth-child(1) > input').type(nome);
    cy.get('.flex > :nth-child(2) > input').type(CPF);
})

Cypress.Commands.add('dadosContato', (nome, email, telefone, CEP, endereco, numero, complemento, bairro, cidade) => {
    cy.get('.gcontato > input').type(nome);
    cy.get('.gemail > .desktop').type(email);
    cy.get('.g-telefone > input').type(telefone);
    cy.get('.gcep > input').type(CEP);
    cy.get('.gendereco > input').type(endereco);
    cy.get('.gnumero > input').type(numero);
    cy.get('.gcomplemento > input').type(complemento);
    cy.get('.gbairro > input').type(bairro);
    cy.get('.gcdade > input').type(cidade);
})

Cypress.Commands.add('regiao', () => {
    cy.get('.selectstate').select('Minas Gerais');
})

Cypress.Commands.add('dadosCartao', (numeroCartao, nomeCartao, CPFCartao, mesCartao, anoCartao, CVVCartao) => {
    cy.get('#cc-number').type(numeroCartao);
    cy.get('#cc-holder-name').type(nomeCartao);
    cy.get('#cc-holder-cpf').type(CPFCartao);
    cy.get('#cc-expiry-month').select((mesCartao));
    cy.get('#cc-expiry-year').select((anoCartao));
    cy.get('#cc-verfication-code').type(CVVCartao);
})

Cypress.Commands.add('fecharPropaganda', () => {
    cy.wait(5000);
    cy.get('#Layer_1').click();
    cy.get('.tsG0HQh7bcmTha7pyanx-btn-close').click();
    cy.get('#Layer_1').click();
})

Cypress.Commands.add('selecionarPix', () => {
    cy.get(':nth-child(1) > .text-method-payment > label > .container-infos-payment > :nth-child(1) > h4').click();
})

Cypress.Commands.add('selecionarBoleto', () => {
    cy.get(':nth-child(2) > .text-method-payment > label > h4').click();
})

Cypress.Commands.add('selecionarTransferencia', () => {
    cy.get('.container-infos-payment > label > h4').click();
})

Cypress.Commands.add('selecionarCartaoCredito', () => {
    cy.get(':nth-child(3) > .text-method-payment > label > h4').click();
})

Cypress.Commands.add('selecionarBandeiraAmericanExpress', () => {
    cy.get('.lista-cartoes > :nth-child(1) > label').click();
})

Cypress.Commands.add('selecionarBandeiraVisa', () => {
    cy.get('.lista-cartoes > :nth-child(2) > label').click();
})

Cypress.Commands.add('selecionarBandeiraMasterCard', () => {
    cy.get('.lista-cartoes > :nth-child(3) > label').click();
})

Cypress.Commands.add('selecionarBandeiraElo', () => {
    cy.get('.lista-cartoes > :nth-child(4) > label').click();
})

Cypress.Commands.add('selecionarBandeiraDiners', () => {
    cy.get('.lista-cartoes > :nth-child(5) > label').click();
})

Cypress.Commands.add('selecionarSeguro', () => {
    cy.get(':nth-child(2) > .box-plans > .box-footer-plans > .box-plans-container > :nth-child(2) > .box-plans-row > .select-button').click();
})

Cypress.Commands.add('selecionarUltimoProduto', () => {
    cy.get('.tb-resultado-filtro div:last-child a').last().click();
})

Cypress.Commands.add('preencherCupomDesconto', (cupom) => {
    cy.get('#cupom').type(cupom);
    cy.get('.cupom-desconto > button').click();
})