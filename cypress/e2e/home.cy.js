describe('home', () => {
    it('webapp should be online', () => {
        cy.visit('/')
        cy.title().should('eq', 'QAZANDO Shop E-Commerce')
    })
})