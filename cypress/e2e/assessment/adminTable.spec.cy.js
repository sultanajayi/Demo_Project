describe('Table Data', () => {
      
    it('allows a user to log in with valid credentials', () => {
      cy.visit('/')
      cy.validLogin()
      cy.get('[href="/web/index.php/admin/viewAdminModule"]').click()
      cy.get('.orangehrm-container')
      .should('be.visible').invoke('text').then((message)=>{
        cy.log(message)
      })
      cy.get('input[type="checkbox"]')
      .first().check({force: true})
      .should('be.checked')
      cy.contains('Records Selected').should('be.visible')
      cy.contains('Delete Selected').should('be.visible')
      //cy.get('.orangehrm-container').first().click()
    }) 
    
})