///<reference types="cypress"/>

///Actions / Methods / Functions
Cypress.Commands.add('accessLoginPage', () => {
    cy.visit('/').get('.header-logo')
    cy.get('.fa-user').click() //doubleClick //rightClick
})

Cypress.Commands.add('loginUser', () => {
    cy.get('#btnLogin').click()
})

Cypress.Commands.add('fillEmailLogin', (emailLogin) => {
    cy.get('#user').type(emailLogin)
})

Cypress.Commands.add('fillPasswordLogin', (emailPassword) => {
    cy.get('#password').type(emailPassword)
})