///<reference types="cypress"/>

Cypress.Commands.add('saveRegister', () => {
    cy.get('#btnRegister').click()
})