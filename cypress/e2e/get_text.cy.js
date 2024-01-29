describe('Get Text', () => {
    it('Obter texto de um elemento', () => {
        cy.visit('/')
            .get('.header-logo')
        //Promoções especiais disponíveis.
        cy.get('.top_header_left p')
            .then((element) => {
                console.log(element.text())
                element.hide()
            })
    })
})