describe('login', () => {
    it('access login screen', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-user')
            .click() //doubleClick //rightClick

        cy.get('.account_form h3')
            .then((element) => {
                expect(element.text()).eq('Login')
                expect(element).to.be.visible
                expect(element).not.disabled
            })
    })
})