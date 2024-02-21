///<reference types="cypress"/>

///Elements
const elements = {
    buttons: {
        btnLogin: '#btnLogin'
    },
    fields: {
        name: '#user',
        email: '#email',
        password: '#password'
    },
    messages: {
        error: '#errorMessageFirstName',
        successTitle: '#swal2-title',
        successSubTitle: '#swal2-html-container'
    }
}

///Actions / Methods / Functions
Cypress.Commands.add('accessLoginPage', () => {
    cy.visit('/').get('.header-logo')
    cy.get('.fa-user').click() //doubleClick //rightClick
})

Cypress.Commands.add('loginUser', () => {
    cy.get(elements.buttons.btnLogin).click()
})

Cypress.Commands.add('fillEmailLogin', (emailLogin) => {
    cy.get(elements.fields.name).type(emailLogin)
})

Cypress.Commands.add('fillPasswordLogin', (emailPassword) => {
    cy.get(elements.fields.password).type(emailPassword)
})

Cypress.Commands.add('checkMessageLogin', (message) => {
    cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text', message)
})

Cypress.Commands.add('checkModalMessageLogin', (modalMessageLogin) => {
    cy.get(elements.messages.successTitle)
        .should('be.visible')
        .should('have.text', 'Login realizado')
    cy.get(elements.messages.successSubTitle)
        .should('be.visible')
        .should('have.text', `Olá, ${modalMessageLogin}`)
})