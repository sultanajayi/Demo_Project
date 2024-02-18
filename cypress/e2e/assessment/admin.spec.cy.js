describe('Search Functionality', () => {
      
    it('allows a user to log in with valid credentials', () => {
      cy.visit('/')
      cy.validLogin()
      cy.get('[href="/web/index.php/admin/viewAdminModule"]').click()
      cy.get(':nth-child(2) > .oxd-input').should('exist').type('Admin')
      cy.get('button[type="submit"]').should('be.visible').click()
    
    }) 
    
})