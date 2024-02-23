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
export default {
    accessLoginPage() {
        cy.visit('/').get('.header-logo')
        cy.get('.fa-user').click() //doubleClick //rightClick
    },

    loginUser() {
        cy.get(elements.buttons.btnLogin).click()
    },

    fillEmailLogin(emailLogin) {
        cy.get(elements.fields.name).type(emailLogin)
    },

    fillPasswordLogin(emailPassword) {
        cy.get(elements.fields.password).type(emailPassword)
    },

    checkMessageLogin(message) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', message)
    },

    checkModalMessageLogin(modalMessageLogin) {
        cy.get(elements.messages.successTitle)
            .should('be.visible')
            .should('have.text', 'Login realizado')
        cy.get(elements.messages.successSubTitle)
            .should('be.visible')
            .should('have.text', `Olá, ${modalMessageLogin}`)
    }
}