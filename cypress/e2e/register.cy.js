///<reference types="cypress"/>
import { faker } from '@faker-js/faker';
import home_page from '../support/pages/home_page';
import register_page from '../support/pages/register_page';

const user_data = require('../fixtures/register_user_create.json')

describe("register", () => {
    // const user_name = 'Eduardo Finotti'
    // const user_email = 'eduardo.finotti@qazando.com'
    // const user_password = '123456'
    beforeEach('accessing the registration page', () => {
        // cy.visit('/').get('.header-logo')
        // cy.get('.fa-lock').click() //doubleClick //rightClick
        // cy.accessRegisterPage()
        home_page.accessRegisterPage()
    })

    it('should register user in successfully', () => {
        // cy.visit('/').get('.header-logo')
        // cy.get('.fa-lock').click() //doubleClick //rightClick
        // cy.get('#user').type(faker.person.fullName())//.type(user_data.user_name)
        register_page.fillName(user_data.user_name)
        // cy.get('#email').type(user_data.user_email)
        register_page.fillEmail(user_data.user_email)
        // cy.get('#password').type(user_data.user_password)
        register_page.fillPassword(user_data.user_password)

        // cy.get('#btnRegister').click()
        register_page.saveRegister()
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')
            cy.get('.swal2-confirm').click()
    });

    it('access register screen', () => {

        // cy.visit('/').get('.header-logo')
        // cy.get('.fa-lock').click()
        cy.get('.account_form h3')
            .then((element) => {
                expect(element.text()).eq('Cadastro de usuário')
                expect(element).to.be.visible
                expect(element).not.disabled
            })
    });

    it('validate register field', () => {
        // cy.visit('/').get('.header-logo')
        // cy.get('.fa-lock').click()
        cy.get('.account_form h3')
            .should('contain', 'Cadastro de usuário')
            .should('have.text', 'Cadastro de usuário')
            cy.get('.default-form-box label')
            .should('contain', 'Nome')
            .should('be.visible')
            cy.get('#user')
            .then((element) => {
                expect(element).to.be.visible
                expect(element).not.disabled
            })
            cy.get('.default-form-box label')
            .should('contain', 'E-mail')
            .should('be.visible')
            cy.get('#email')
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
    });

    it('blank name field', () => {
        // cy.visit('/').get('.header-logo')
        // cy.get('.fa-lock').click() //doubleClick //rightClick
        // cy.get('#email').type(user_data.user_email)
        register_page.fillEmail(user_data.user_email)
        // cy.get('#password').type(user_data.user_password)
        register_page.fillPassword(user_data.user_password)
        // cy.get('#btnRegister').click()
        register_page.saveRegister()
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo nome deve ser prenchido')
    })

    it('blank e-mail field', () => {
        // cy.visit('/').get('.header-logo')
        // cy.get('.fa-lock').click() //doubleClick //rightClick
        // cy.get('#user').type(user_data.user_name)
        register_page.fillName(user_data.user_name)
        // cy.get('#password').type(user_data.user_password)
        register_page.fillPassword(user_data.user_password)
        // cy.get('#btnRegister').click()
        register_page.saveRegister()
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    })

    it('blank password field', () => {
        // cy.visit('/').get('.header-logo')
        // cy.get('.fa-lock').click() //doubleClick //rightClick
        // cy.get('#user').type(user_data.user_name)
        register_page.fillName(user_data.user_name)
        // cy.get('#email').type(user_data.user_email)
        register_page.fillEmail(user_data.user_email)
        // cy.get('#btnRegister').click()
        register_page.saveRegister()
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    })

    it('invalid e-mail', () => {
        // cy.visit('/').get('.header-logo')
        // cy.get('.fa-lock').click() //doubleClick //rightClick
        // cy.get('#user').type(user_data.user_name)
        register_page.fillName(user_data.user_name)
        cy.get('#email').type('username@teste')
        // cy.get('#password').type(user_data.user_password)
        register_page.fillPassword(user_data.user_password)
        // cy.get('#btnRegister').click()
        register_page.saveRegister()
        // cy.get('#errorMessageFirstName')
        //     .should('be.visible')
        //     .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
        register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it('blank password field', () => {
        // cy.visit('/').get('.header-logo')
        // cy.get('.fa-lock').click() //doubleClick //rightClick
        // cy.get('#user').type(user_data.user_name)
        register_page.fillName(user_data.user_name)
        // cy.get('#email').type(user_data.user_email)
        register_page.fillEmail(user_data.user_email)
        cy.get('#password').type('pass@')
        // cy.get('#btnRegister').click()
        register_page.saveRegister()
        // cy.get('#errorMessageFirstName')
        //     .should('be.visible')
        //     .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
        register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('validating register modal successfully', () => {
        // const name = faker.person.fullName()
        // const email = faker.internet.email()

        // cy.visit('/').get('.header-logo')
        // cy.get('.fa-lock').click() //doubleClick //rightClick
        // cy.get('#user').type(name)
        register_page.fillName(user_data.user_name)
        // cy.get('#email').type(email)
        register_page.fillEmail(user_data.user_email)
        // cy.get('#password').type(user_data.user_password)
        register_page.fillPassword(user_data.user_password)
        // cy.get('#btnRegister').click()
        register_page.saveRegister()
        // cy.get('#swal2-title')
        //     .should('be.visible')
        //     .should('have.text', 'Cadastro realizado!')
        // cy.get('#swal2-html-container')
        //     .should('be.visible')
        //     .should('have.text', `Bem-vindo ${user_data.user_name}`)
        register_page.checkModalMessage(user_data.user_name)
        cy.get('.swal2-confirm')
            .should('be.visible')
            .should('have.text', 'OK')
            .click()
    });
})