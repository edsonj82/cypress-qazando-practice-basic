///<reference types="cypress"/>

describe('Asserts', () => {
    it('DVerificar se está visível', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-user')
            .click() //doubleClick //rightClick

        cy.get('.account_form h3')
        .should('be.visible')

        cy.get('.account_form h3')
        .should('contain','Login')
        .should('have.text', 'Login')

        cy.get('.account_form h3')
        .then((element) =>{
            expect(element.text()).eq('Login')
        })
    })

})