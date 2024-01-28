describe('login',() =>{
    it('login successfully', ()=>{
        
        cy.visit('/')
            .get('.header-logo')//get() - selecionar elementos
        
        cy.get('#top_header')
            .as('cabecalho')//as() - alias
            .contains('Login')//contains() - contém um determinado elemento por texto e geralmente diminuimos o escopo usando o get

        cy.get('#top_header')
            .find('.fa-user')//find() - usamos para encontrar elementos e geralmente diminuimos o escopo com o uso do get()
            
        
        cy.get('@cabecalho')
            .find('.fa-user')
            
    })
})