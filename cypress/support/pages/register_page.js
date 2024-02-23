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

export default {
    ///Actions / Methods / Functions
    saveRegister() {
        cy.get(elements.buttons.btnRegister).click()
    },

    fillEmail(email) {
        cy.get(elements.fields.email).type(email)
    },

    fillName(name) {
        cy.get(elements.fields.name).type(name)
    },

    fillPassword(password) {
        cy.get(elements.fields.password).type(password)
    },

    checkMessage(message) {
        cy.get(elements.messages.error)
            .should('be.visible')
            .should('have.text', message)
    },

    checkModalMessage(modalMessage) {
        cy.get(elements.messages.successTitle)
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')
        cy.get(elements.messages.successSubTitle)
            .should('be.visible')
            .should('have.text', `Bem-vindo ${modalMessage}`)
    }
}