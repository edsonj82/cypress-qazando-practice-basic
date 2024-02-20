///<reference types="cypress"/>

Cypress.Commands.add('saveRegister', () => {
    cy.get('#btnRegister').click()
})

Cypress.Commands.add('fillEmail', (email) => {
    cy.get('#email').type(email)
})
