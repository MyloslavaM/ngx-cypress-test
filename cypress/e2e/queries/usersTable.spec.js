describe('Users Table verification', ()=>{
  //add new user
  it('create new user', ()=> {
    cy.visit('pages/tables/smart-table')
    const table = 'table'
    cy.get(`${table} .nb-plus`).click()
    cy.get('[placeholder="ID"]').eq(1).type('77')
    cy.get('[placeholder="First Name"]').eq(1).type('Mila')
    cy.get('[placeholder="Last Name"]').eq(1).type('Martynova')
    cy.get('[placeholder="Username"]').eq(1).type('malina')
    cy.get('[placeholder="E-mail"]').eq(1).type('malia@mailinator.com')
    cy.get('[placeholder="Age"]').eq(1).type('18')
    cy.get('.nb-checkmark').click()

    //verify that user was created 
    const userRowBySequency = 'tr[ng-reflect-klass="ng2-smart-row"] .ng-star-inserted div.ng-star-inserted'

    cy.get(`${userRowBySequency}`).eq(0).should('have.text', "77")
    cy.get(`${userRowBySequency}`).eq(1).should('have.text', "Mila")
    cy.get(`${userRowBySequency}`).eq(2).should('have.text', "Martynova")
    cy.get(`${userRowBySequency}`).eq(3).should('have.text', "malina")
    cy.get(`${userRowBySequency}`).eq(4).should('have.text', "malia@mailinator.com")
    cy.get(`${userRowBySequency}`).eq(5).should('have.text', "18")

    //update user
    cy.get('.nb-edit').eq(0).click()
    cy.get('[placeholder="ID"]').eq(1).click().clear().type('7')
    cy.get('[placeholder="First Name"]').eq(1).click().clear().type('Myloslava')
    cy.get('[placeholder="Last Name"]').eq(1).click().clear().type('Martina')
    cy.get('[placeholder="Username"]').eq(1).click().clear().type('malinka')
    cy.get('[placeholder="E-mail"]').eq(1).click().clear().type('malinka@mailinator.com')
    cy.get('[placeholder="Age"]').eq(1).click().clear().type('19')
    cy.get('.nb-checkmark').click()

    //verify apdated data
    cy.get(`${userRowBySequency}`).eq(0).should('have.text', "7")
    cy.get(`${userRowBySequency}`).eq(1).should('have.text', "Myloslava")
    cy.get(`${userRowBySequency}`).eq(2).should('have.text', "Martina")
    cy.get(`${userRowBySequency}`).eq(3).should('have.text', "malinka")
    cy.get(`${userRowBySequency}`).eq(4).should('have.text', "malinka@mailinator.com")
    cy.get(`${userRowBySequency}`).eq(5).should('have.text', "19")
  })
})