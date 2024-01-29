///<reference types="cypress"/>

describe('Interações',() =>{
    it('Digitar em um campo', ()=>{
        cy.visit('/')
            .get('.header-logo')

        cy.get('.form-control')
            .type('eduardo.fintti@qazando.com')
    })
})