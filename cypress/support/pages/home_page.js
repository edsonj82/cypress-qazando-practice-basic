///<reference types="cypress"/>

export default {
    accessRegisterPage() {
        cy.visit('/').get('.header-logo')
        cy.get('.fa-lock').click() //doubleClick //rightClick
        cy.get('#user').should('be.visible')
    }
}