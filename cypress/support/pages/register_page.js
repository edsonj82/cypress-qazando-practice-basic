///<reference types="cypress"/>


///Elements
const elements = {
    buttons: {
        btnRegister: '#btnRegister'
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

export default{
    ///Actions / Methods / Functions
Cypress.Commands.add('saveRegister', () => {
    cy.get(elements.buttons.btnRegister).click()
})

Cypress.Commands.add('fillEmail', (email) => {
    cy.get(elements.fields.email).type(email)
})

Cypress.Commands.add('fillName', (name) => {
    cy.get(elements.fields.name).type(name)
})

Cypress.Commands.add('fillPassword', (password) => {
    cy.get(elements.fields.password).type(password)
})

Cypress.Commands.add('checkMessage', (message) => {
    cy.get(elements.messages.error)
        .should('be.visible')
        .should('have.text', message)
})

Cypress.Commands.add('checkModalMessage', (modalMessage) => {
    cy.get(elements.messages.successTitle)
        .should('be.visible')
        .should('have.text', 'Cadastro realizado!')
    cy.get(elements.messages.successSubTitle)
        .should('be.visible')
        .should('have.text', `Bem-vindo ${modalMessage}`)
})
}