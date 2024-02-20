///<reference types="cypress"/>

Cypress.Commands.add('saveRegister', () => {
    cy.get('#btnRegister').click()
})

Cypress.Commands.add('fillEmail', (email) => {
    cy.get('#email').type(email)
})

Cypress.Commands.add('fillName', (name) => {
    cy.get('#user').type(name)
})

Cypress.Commands.add('fillPassword', (password) => {
    cy.get('#password').type(password)
})

Cypress.Commands.add('checkMessage', (message) => {
    cy.get('#errorMessageFirstName')
        .should('be.visible')
        .should('have.text', message)
})

Cypress.Commands.add('checkModalMessage', (modalMessage) => {
    cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text', 'Cadastro realizado!')
    cy.get('#swal2-html-container')
        .should('be.visible')
        .should('have.text', `Bem-vindo ${modalMessage}`)
})