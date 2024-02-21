///<reference types="cypress"/>
const user_data = require('../fixtures/register_user_create.json')

describe('login', () => {

    // const user_email = 'eduardo.fintti@qazando.com'
    // const user_password = '123456'
    beforeEach('accessing the login page', () => {
        // cy.visit('/').get('.header-logo')
        // cy.get('.fa-user').click() //doubleClick //rightClick
        cy.accessLoginPage()
    })

    it('should log in successfully', () => {

        // cy.visit('/').get('.header-logo')
        // cy.get('.fa-user').click() //doubleClick //rightClick
        cy.get('#user').type(user_data.user_email)
        cy.get('#password').type(user_data.user_password)
        cy.get('#btnLogin').click()
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Login realizado')
        cy.get('.swal2-confirm').click()
    });

    it('access login screen', () => {
        // cy.visit('/').get('.header-logo')
        // cy.get('.fa-user').click() //doubleClick //rightClick
        cy.get('.account_form h3')
            .then((element) => {
                expect(element.text()).eq('Login')
                expect(element).to.be.visible
                expect(element).not.disabled
            })
    })

    it('validate login field', () => {

        // cy.visit('/').get('.header-logo')
        // cy.get('.fa-user').click() //doubleClick //rightClick
        cy.get('.account_form h3')
            .should('contain', 'Login')
            .should('have.text', 'Login')
        cy.get('.default-form-box label')
            .should('contain', 'E-mail')
            .should('be.visible')
        cy.get('#user')
            .then((element) => {
                expect(element).to.be.visible
                expect(element).not.disabled
            })
        cy.get('.default-form-box label')
            .should('contain', 'Senha')
            .should('be.visible')
        cy.get('#password')
            .then((element) => {
                expect(element).to.be.visible
                expect(element).not.disabled
            })
        cy.get('#btnLogin')
            .then((element) => {
                expect(element).to.be.visible
                expect(element).not.disabled
            })
    })

    it('blank username field', () => {
        // cy.visit('/').get('.header-logo')
        // cy.get('.fa-user').click() //doubleClick //rightClick
        cy.get('#password').type(user_data.user_password)
        cy.get('#btnLogin').click()
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', 'E-mail inválido.')
    })

    it('blank password field', () => {
        // cy.visit('/').get('.header-logo')
        // cy.get('.fa-user').click() //doubleClick //rightClick
        cy.get('#user').type(user_data.user_email)
        cy.get('#btnLogin').click()
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', 'Senha inválida.')
    })

    // --required password field
    it('invalid e-mail', () => {
        // cy.visit('/').get('.header-logo')
        // cy.get('.fa-user').click() //doubleClick //rightClick
        cy.get('#user').type('teste@123')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', 'E-mail inválido.')
    });

    it('invalid password', () => {
        // cy.visit('/').get('.header-logo')
        // cy.get('.fa-user').click() //doubleClick //rightClick
        cy.get('#user').type(user_data.user_email)
        cy.get('#password').type('12345')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', 'Senha inválida.')
    });

    it('validating login modal successfully', () => {
        // cy.visit('/').get('.header-logo')
        // cy.get('.fa-user').click() //doubleClick //rightClick
        cy.get('#user').type(user_data.user_email)
        cy.get('#password').type(user_data.user_password)
        cy.get('#btnLogin').click()
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Login realizado')
        // cy.get('.swal2-success-circular-line-right').should('be.visible')
        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Olá, ${user_data.user_email}`)
        cy.get('.swal2-confirm')
            .should('be.visible')
            .should('have.text', 'OK')
            .click()
    });
})