describe('Geração de pedido', () => {

    beforeEach(() => {
        //acessa o site
        cy.visit('https://homolog1.segurospromo.com.br/site/pesquisa/brasil/2022-07-18/2022-07-23/');
    });

    it('Gerar pedido com pagamento PIX', () => {

        //selecionar seguro
        cy.selecionarSeguro();

        cy.contains('span', 'Identificação dos').should('be.visible');

        //fechando as propagandas
        cy.fecharPropaganda();

        //identificação dos seguros
        cy.idenficicacaoSeguros(Cypress.env('nome'), Cypress.env('dataAniversario'), Cypress.env('CPF'));

        //selecionar PIX
        cy.selecionarPix();

        //dados do pagador
        cy.dadosPagador(Cypress.env('nome'), Cypress.env('CPF'));

        //dados do contato da compra
        cy.dadosContato(Cypress.env('nome'), Cypress.env('email'), Cypress.env('telefone'), Cypress.env('CEP'), Cypress.env('endereco'), Cypress.env('numero'),
            Cypress.env('complemento'), Cypress.env('bairro'), Cypress.env('cidade'));

        //Pegas todas opções de select e pegar o comprimento das opções
        cy.regiao();

        //cy.get('.finish-payment').click();

        //cy.wait(50000);

        //cy.contains('h1','Pedido recebido com sucesso!').should('be.visible');

    });

    it('Pedido de compra já realizado por PIX', () => {
        //selecionar seguro
        cy.selecionarSeguro();

        cy.contains('span', 'Identificação dos').should('be.visible');

        //fechando as propagandas
        cy.fecharPropaganda();

        //identificação dos seguros
        cy.idenficicacaoSeguros(Cypress.env('nome'), Cypress.env('dataAniversario'), Cypress.env('CPF'));

        //selecionar PIX
        cy.selecionarPix();

        //dados do pagador
        cy.dadosPagador(Cypress.env('nome'), Cypress.env('CPF'));

        //dados do contato da compra
        cy.dadosContato(Cypress.env('nome'), Cypress.env('email'), Cypress.env('telefone'), Cypress.env('CEP'), Cypress.env('endereco'), Cypress.env('numero'),
            Cypress.env('complemento'), Cypress.env('bairro'), Cypress.env('cidade'));

        //Pegas todas opções de select e pegar o comprimento das opções
        cy.regiao();

        cy.get('.finish-payment').click();

        cy.contains('Pedido duplicado:').should('be.visible');

        cy.get('.close-btn').click();
    });

    it('Gerar pedido com pagamento cartão de crédito', () => {

        //selecionar seguro
        cy.selecionarSeguro();

        cy.contains('span', 'Identificação dos').should('be.visible');

        //fechando as propagandas
        cy.fecharPropaganda();

        //identificação dos seguros
        cy.idenficicacaoSeguros(Cypress.env('nome'), Cypress.env('dataAniversario'), Cypress.env('CPF'));

        //selecionar cartão de crédito
        cy.selecionarCartaoCredito();

        //selecionar bandeira
        cy.selecionarBandeira();

        //dados cartão de crédito
        cy.dadosCartao(Cypress.env('numeroCartao'), Cypress.env('nomeCartao'), Cypress.env('CPFCartao'), Cypress.env('CVVCartao'));

        //dados do contato da compra
        cy.dadosContato(Cypress.env('nome'), Cypress.env('email'), Cypress.env('telefone'), Cypress.env('CEP'), Cypress.env('endereco'), Cypress.env('numero'),
            Cypress.env('complemento'), Cypress.env('bairro'), Cypress.env('cidade'));

        //Pegas todas opções de select e pegar o comprimento das opções
        cy.regiao();

        //cy.get('.finish-payment').click();

        //cy.wait(50000);

        //cy.contains('h1','Pedido recebido com sucesso!').should('be.visible');
    });

    it('Pedido de compra já realizado por cartão de crédito', () => {
        //selecionar seguro
        cy.selecionarSeguro();

        cy.contains('span', 'Identificação dos').should('be.visible');

        //fechando as propagandas
        cy.fecharPropaganda();

        //identificação dos seguros
        cy.idenficicacaoSeguros(Cypress.env('nome'), Cypress.env('dataAniversario'), Cypress.env('CPF'));

        //selecionar cartão de crédito
        cy.selecionarCartaoCredito();

        //selecionar bandeira
        cy.selecionarBandeira();

        //dados cartão de crédito
        cy.dadosCartao(Cypress.env('numeroCartao'), Cypress.env('nomeCartao'), Cypress.env('CPFCartao'), Cypress.env('CVVCartao'));

        //dados do contato da compra
        cy.dadosContato(Cypress.env('nome'), Cypress.env('email'), Cypress.env('telefone'), Cypress.env('CEP'), Cypress.env('endereco'), Cypress.env('numero'),
            Cypress.env('complemento'), Cypress.env('bairro'), Cypress.env('cidade'));

        //Pegas todas opções de select e pegar o comprimento das opções
        cy.regiao();

        cy.get('.finish-payment').click();

        cy.contains('Pedido duplicado:').should('be.visible');

        cy.get('.close-btn').click();
    });

    it('Gerar pedido com ultimo produto listado na tela de pesquisa com PIX', () => {

        //selecionar seguro ultimo produto
        cy.selecionarUltimoProduto();

        cy.contains('span', 'Identificação dos').should('be.visible');

        //fechando as propagandas
        cy.fecharPropaganda();

        //identificação dos seguros
        cy.idenficicacaoSeguros(Cypress.env('nome'), Cypress.env('dataAniversario'), Cypress.env('CPF'));

        //selecionar PIX
        cy.selecionarPix();

        //dados do pagador
        cy.dadosPagador(Cypress.env('nome'), Cypress.env('CPF'));

        //dados do contato da compra
        cy.dadosContato(Cypress.env('nome'), Cypress.env('email'), Cypress.env('telefone'), Cypress.env('CEP'), Cypress.env('endereco'), Cypress.env('numero'),
            Cypress.env('complemento'), Cypress.env('bairro'), Cypress.env('cidade'));

        //Pegas todas opções de select e pegar o comprimento das opções
        cy.regiao();

        //cy.get('.finish-payment').click();

    });

    it('Gerar pedido com ultimo produto listado na tela de pesquisa com Boleto', () => {

        //selecionar seguro ultimo produto
        cy.selecionarUltimoProduto();

        cy.contains('span', 'Identificação dos').should('be.visible');

        //fechando as propagandas
        cy.fecharPropaganda();

        //identificação dos seguros
        cy.idenficicacaoSeguros(Cypress.env('nome'), Cypress.env('dataAniversario'), Cypress.env('CPF'));

        //selecionar Boleto
        cy.selecionarBoleto();

        //dados do contato da compra
        cy.dadosContato(Cypress.env('nome'), Cypress.env('email'), Cypress.env('telefone'), Cypress.env('CEP'), Cypress.env('endereco'), Cypress.env('numero'),
            Cypress.env('complemento'), Cypress.env('bairro'), Cypress.env('cidade'));

        //Pegas todas opções de select e pegar o comprimento das opções
        cy.regiao();

        //cy.get('.finish-payment').click();

        //cy.wait(50000);

        //cy.contains('h1','Pedido recebido com sucesso!').should('be.visible');

    });

    it('Gerar pedido com ultimo produto listado na tela de pesquisa com Transferência', () => {

        //selecionar seguro ultimo produto
        cy.selecionarUltimoProduto();

        cy.contains('span', 'Identificação dos').should('be.visible');

        //fechando as propagandas
        cy.fecharPropaganda();

        //identificação dos seguros
        cy.idenficicacaoSeguros(Cypress.env('nome'), Cypress.env('dataAniversario'), Cypress.env('CPF'));

        //selecionar Transferência
        cy.selecionarTransferencia();

        //dados do contato da compra
        cy.dadosContato(Cypress.env('nome'), Cypress.env('email'), Cypress.env('telefone'), Cypress.env('CEP'), Cypress.env('endereco'), Cypress.env('numero'),
            Cypress.env('complemento'), Cypress.env('bairro'), Cypress.env('cidade'));

        //Pegas todas opções de select e pegar o comprimento das opções
        cy.regiao();

        //cy.get('.finish-payment').click();

        //cy.wait(50000);

        //cy.contains('h1','Pedido recebido com sucesso!').should('be.visible');

    });

    it('Gerar pedido com ultimo produto listado na tela de pesquisa com cartão de crédito', () => {

        //selecionar seguro ultimo produto
        cy.selecionarUltimoProduto();

        cy.contains('span', 'Identificação dos').should('be.visible');

        //fechando as propagandas
        cy.fecharPropaganda();

        //identificação dos seguros
        cy.idenficicacaoSeguros(Cypress.env('nome'), Cypress.env('dataAniversario'), Cypress.env('CPF'));

        //selecionar cartão de crédito
        cy.selecionarCartaoCredito();

        //selecionar bandeira
        cy.selecionarBandeira();

        //dados cartão de crédito
        cy.dadosCartao(Cypress.env('numeroCartao'), Cypress.env('nomeCartao'), Cypress.env('CPFCartao'), Cypress.env('CVVCartao'));

        //dados do contato da compra
        cy.dadosContato(Cypress.env('nome'), Cypress.env('email'), Cypress.env('telefone'), Cypress.env('CEP'), Cypress.env('endereco'), Cypress.env('numero'),
            Cypress.env('complemento'), Cypress.env('bairro'), Cypress.env('cidade'));

        //Pegas todas opções de select e pegar o comprimento das opções
        cy.regiao();

        //cy.get('.finish-payment').click();

        //cy.wait(50000);

        //cy.contains('h1','Pedido recebido com sucesso!').should('be.visible');
    });

    it('Insersão de cupom de desconto PIX', () => {

        //selecionar seguro
        cy.selecionarSeguro();

        cy.contains('span', 'Identificação dos').should('be.visible');

        //fechando as propagandas
        cy.fecharPropaganda();

        //identificação dos seguros
        cy.idenficicacaoSeguros(Cypress.env('nome'), Cypress.env('dataAniversario'), Cypress.env('CPF'));

        //selecionar PIX
        cy.selecionarPix();

        //dados do pagador
        cy.dadosPagador(Cypress.env('nome'), Cypress.env('CPF'));

        //dados do contato da compra
        cy.dadosContato(Cypress.env('nome'), Cypress.env('email'), Cypress.env('telefone'), Cypress.env('CEP'), Cypress.env('endereco'), Cypress.env('numero'),
            Cypress.env('complemento'), Cypress.env('bairro'), Cypress.env('cidade'));

        //Pegas todas opções de select e pegar o comprimento das opções
        cy.regiao();

        //Preenche cupom e aplica
        cy.preencherCupomDesconto(Cypress.env('cupom'));

        cy.contains('b', 'Erro: Cupom Inválido ou expirado').should('be.visible');

        //cy.get('.finish-payment').click();

        //cy.wait(50000);

        //cy.contains('h1','Pedido recebido com sucesso!').should('be.visible');

    });

    it('Insersão de cupom de desconto com Boleto', () => {

        //selecionar seguro
        cy.selecionarSeguro();

        cy.contains('span', 'Identificação dos').should('be.visible');

        //fechando as propagandas
        cy.fecharPropaganda();

        //identificação dos seguros
        cy.idenficicacaoSeguros(Cypress.env('nome'), Cypress.env('dataAniversario'), Cypress.env('CPF'));

        //selecionar Boleto
        cy.selecionarBoleto();

        //dados do contato da compra
        cy.dadosContato(Cypress.env('nome'), Cypress.env('email'), Cypress.env('telefone'), Cypress.env('CEP'), Cypress.env('endereco'), Cypress.env('numero'),
            Cypress.env('complemento'), Cypress.env('bairro'), Cypress.env('cidade'));

        //Pegas todas opções de select e pegar o comprimento das opções
        cy.regiao();

        //Preenche cupom e aplica
        cy.preencherCupomDesconto(Cypress.env('cupom'));

        cy.contains('b', 'Erro: Cupom Inválido ou expirado').should('be.visible');

        //cy.get('.finish-payment').click();

        //cy.wait(50000);

        //cy.contains('h1','Pedido recebido com sucesso!').should('be.visible');
    });

    it('Insersão de cupom de desconto com Transferência', () => {

        //selecionar seguro
        cy.selecionarSeguro();

        cy.contains('span', 'Identificação dos').should('be.visible');

        //fechando as propagandas
        cy.fecharPropaganda();

        //identificação dos seguros
        cy.idenficicacaoSeguros(Cypress.env('nome'), Cypress.env('dataAniversario'), Cypress.env('CPF'));

        //selecionar Transferência
        cy.selecionarTransferencia();

        //dados do contato da compra
        cy.dadosContato(Cypress.env('nome'), Cypress.env('email'), Cypress.env('telefone'), Cypress.env('CEP'), Cypress.env('endereco'), Cypress.env('numero'),
            Cypress.env('complemento'), Cypress.env('bairro'), Cypress.env('cidade'));

        //Pegas todas opções de select e pegar o comprimento das opções
        cy.regiao();

        //Preenche cupom e aplica
        cy.preencherCupomDesconto(Cypress.env('cupom'));

        cy.contains('b', 'Erro: Cupom Inválido ou expirado').should('be.visible');

        //cy.get('.finish-payment').click();

        //cy.wait(50000);

        //cy.contains('h1','Pedido recebido com sucesso!').should('be.visible');

    });

    it('Insersão de cupom de desconto com cartão de crédito', () => {

        //selecionar seguro
        cy.selecionarSeguro();

        cy.contains('span', 'Identificação dos').should('be.visible');

        //fechando as propagandas
        cy.fecharPropaganda();

        //identificação dos seguros
        cy.idenficicacaoSeguros(Cypress.env('nome'), Cypress.env('dataAniversario'), Cypress.env('CPF'));

        //selecionar cartão de crédito
        cy.selecionarCartaoCredito();

        //selecionar bandeira
        cy.selecionarBandeira();

        //dados cartão de crédito
        cy.dadosCartao(Cypress.env('numeroCartao'), Cypress.env('nomeCartao'), Cypress.env('CPFCartao'), Cypress.env('CVVCartao'));

        //dados do contato da compra
        cy.dadosContato(Cypress.env('nome'), Cypress.env('email'), Cypress.env('telefone'), Cypress.env('CEP'), Cypress.env('endereco'), Cypress.env('numero'),
            Cypress.env('complemento'), Cypress.env('bairro'), Cypress.env('cidade'));

        //Pegas todas opções de select e pegar o comprimento das opções
        cy.regiao();

        //Preenche cupom e aplica
        cy.preencherCupomDesconto(Cypress.env('cupom'));

        cy.contains('b', 'Erro: Cupom Inválido ou expirado').should('be.visible');

        //cy.get('.finish-payment').click();

        //cy.wait(50000);

        //cy.contains('h1','Pedido recebido com sucesso!').should('be.visible');
    });
});