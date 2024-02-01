///<reference types="cypress"/>

describe('Interações', () => {
    it('Digitar em um campo', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.form-control')
            .type('eduardo.fintti@qazando.com')
    })

    it('Click', () => {
        cy.visit('/')
            .get('.header-logo')

        // cy.get('.fa-user')
        //     .click() //doubleClick //rightClick

        cy.get('.form-control')
            .type('eduardo.fintti@qazando.com {enter}')
    })

    it('Select', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.footer_one_widget')
            .contains('Checkout View Two')
            .click()

        cy.get('#country')
            .select('Colombia')
    })
})