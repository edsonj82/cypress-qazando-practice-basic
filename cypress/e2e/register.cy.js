///<reference types="cypress"/>

describe("register", ()=>{
    it.only('access register screen', () => {
        
        cy.visit('/').get('.header-logo')
        cy.get('.fa-lock').click()
        cy.get('.account_form h3')
            .then((element) => {
                expect(element.text()).eq('Cadastro de usuário')
                expect(element).to.be.visible
                expect(element).not.disabled
            })
    });
})