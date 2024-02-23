///<reference types="cypress"/>
const user_data = require('../fixtures/login_user_create.json')
import login_page from '../support/pages/login_page'

describe('login', () => {
    beforeEach('accessing the login page', () => {
        login_page.accessLoginPage()
    })

    it('should log in successfully', () => {
        login_page.fillEmailLogin(user_data.user_email)
        login_page.fillPasswordLogin(user_data.user_password)
        login_page.loginUser()
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Login realizado')
        cy.get('.swal2-confirm').click()
    });

    it('access login screen', () => {
        cy.get('.account_form h3')
            .then((element) => {
                expect(element.text()).eq('Login')
                expect(element).to.be.visible
                expect(element).not.disabled
            })
    })

    it('validate login field', () => {
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
        login_page.fillPasswordLogin(user_data.user_password)
        cy.get('#btnLogin').click()
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', 'E-mail inválido.')
    })

    it('blank password field', () => {
        login_page.fillEmailLogin(user_data.user_email)
        login_page.loginUser()
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', 'Senha inválida.')
    })

    // --required password field
    it('invalid e-mail', () => {
        cy.get('#user').type('teste@123')
        login_page.loginUser()
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', 'E-mail inválido.')
    });

    it('invalid password', () => {
        login_page.fillEmailLogin(user_data.user_email)
        cy.get('#password').type('12345')
        login_page.loginUser()
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', 'Senha inválida.')
    });

    it('validating login modal successfully', () => {
        login_page.fillEmailLogin(user_data.user_email)
        login_page.fillPasswordLogin(user_data.user_password)
        login_page.loginUser()
        login_page.checkModalMessageLogin(user_data.user_email)
        cy.get('.swal2-confirm')
            .should('be.visible')
            .should('have.text', 'OK')
            .click()
    });
})