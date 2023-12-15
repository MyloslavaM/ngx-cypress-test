describe('login', ()=> {
    it('login to the sustem', ()=>{
        cy.visit('auth/login')
        cy.get('[name="email"]').click().type('malina@mailinator.com')
        cy.get('[name="password"]').click().type('QWE123qwe!!')
        cy.get('[type="checkbox"]').eq(0).check({ force: true })
        cy.get('button').click()
        
        cy.url().should('include', "/pages")
    } )

})