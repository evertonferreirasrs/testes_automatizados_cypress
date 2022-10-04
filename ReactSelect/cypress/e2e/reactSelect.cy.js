describe('React Select', () => {

    beforeEach(() => {
        cy.visit('https://react-select.com/home');
    });

    context('Single', () => {
        beforeEach(() => {
            cy.get('.basic-single').find('.select__clear-indicator').click();
        });
        it('select by searching for a color', () => {
            cy.get('.basic-single').find('input[type="text"]').type('Green{enter}');
            cy.get('.basic-single').find('.select__single-value').should('have.text', 'Green')
        });

        it('select a color via the dropdown list', () => {
            cy.get('.basic-single').find('.select__dropdown-indicator').click();
            cy.contains('.select__option','Yellow').click();
            cy.get('.basic-single').find('.select__single-value').should('have.text', 'Yellow')
        });
    });

    context('Multi', () => {
        beforeEach(() => {
            cy.get('.basic-multi-select').find('.select__clear-indicator').first().click();
        });

        it('selects multiple options', () => {
            cy.get('.basic-multi-select').as('multiSelect').find('input[type="text"]').first().type('Yellow{enter}');
            cy.get('@multiSelect').find('.select__dropdown-indicator').first().click();
            cy.contains('.select__option','Red').click();
            cy.get('@multiSelect').find('.select__value-container').should('contain', 'Yellow').and('contain', 'Red');

            cy.get('@multiSelect').find('.select__multi-value__remove').first().click();
            cy.get('@multiSelect').find('.select__value-container').should('contain', 'Red').and('not.contain', 'Yellow');
        });
    });

});
