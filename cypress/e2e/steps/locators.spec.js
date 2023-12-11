describe('steps page', ()=>{

  it('Should show walid title on each step', ()=>{
    cy.visit("/pages/layout/stepper")
    const containerSelector = 'nb-stepper[orientation="horizontal"]'

    cy.get(`${containerSelector} h3`).should('have.text', "Step content #1")
    cy.get(`${containerSelector}`).contains('next').click()

    cy.get(`${containerSelector} h3`).should('have.text', "Step content #2")
    cy.get(`${containerSelector}`).contains('next').click()

    cy.get(`${containerSelector} h3`).should('have.text', "Step content #3")
    cy.get(`${containerSelector}`).contains('next').click()

    cy.get(`${containerSelector} h3`).should('have.text', "Step content #4")
    cy.get(`${containerSelector}`).contains('next').should('be.disabled')
   })
  
  it('Modal window verification ', ()=>{
    cy.visit('/pages/modal-overlays/dialog')
    cy.get('nb-card').eq(4).get('button').contains("Enter Name").click()

    const popUp = 'nb-dialog-container'
   // не знаю як перевірита саме наявність popUp
    cy.get(`${popUp}`)
    cy.get(`${popUp} nb-card-header`).should('have.text', "Enter your name")

    cy.get(`${popUp} input`).should('be.visible')
    cy.get(`${popUp} button[status="danger"]`).should('have.text', "Cancel")
    cy.get(`${popUp} button[status="success"]`).should('have.text', "Submit")
  })
})