describe('Dashboard Element', () => {
      
    it('allows a user to log in with valid credentials', () => {
      cy.visit('/')
      cy.validLogin()
           
      cy.get('.oxd-userdropdown-name').should('be.visible').invoke('text').then((message)=>{
        cy.log(message)
      })
      cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text')
      .should('be.visible').invoke('text').then((message)=>{
        cy.log(message)
      })
      cy.get(':nth-child(2) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text')
      .should('be.visible').invoke('text').then((message)=>{
        cy.log(message)
      })
      cy.get(':nth-child(3) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text')
      .should('be.visible').invoke('text').then((message)=>{
        cy.log(message)
      })
      cy.get(':nth-child(4) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text')
      .should('be.visible').invoke('text').then((message)=>{
        cy.log(message)
      })
    
    
    }) 
    
})