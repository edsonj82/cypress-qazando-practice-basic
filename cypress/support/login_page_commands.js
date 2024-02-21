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

Cypress.Commands.add('checkMessageLogin', (message) => {
    cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text', message)
})

Cypress.Commands.add('checkModalMessageLogin', (modalMessageLogin) => {
    cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text', 'Login realizado')
    cy.get('#swal2-html-container')
        .should('be.visible')
        .should('have.text', `Olá, ${modalMessageLogin}`)
})