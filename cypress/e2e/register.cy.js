///<reference types="cypress"/>

describe("register", () => {
    it('access register screen', () => {

        cy.visit('/').get('.header-logo')
        cy.get('.fa-lock').click()
        cy.get('.account_form h3')
            .then((element) => {
                expect(element.text()).eq('Cadastro de usuário')
                expect(element).to.be.visible
                expect(element).not.disabled
            })
    });

    it('validate register field', () => {
        cy.visit('/').get('.header-logo')
        cy.get('.fa-lock').click()
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
})