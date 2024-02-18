let sel;

before(() => {
    cy.fixture('selectors').then((selectors) => {
      sel = selectors;
    });
  });

  Cypress.Commands.add('validUrl', () => {
   cy.url().should('include', 'orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','opensource-demo.orangehrmlive.com')
});
Cypress.Commands.add('validLogin', () => {
    cy.get(sel.username).type('Admin');
    cy.get(sel.password).type('admin123');
    cy.get(sel.submitButton).click();
 });

 Cypress.Commands.add('invalidLogin', () => {
    cy.get(sel.username).type('Admin');
    cy.get(sel.password).type('admin1237888');
    cy.get(sel.submitButton).click();
    cy.contains('Invalid credentials');
 });

 Cypress.Commands.add('blankLogin', () => {
    cy.get(sel.submitButton).click();
    cy.contains('Required');
    cy.contains('Required');
 })
 Cypress.Commands.add('forgotPassword', () => {
   cy.get('.oxd-text.oxd-text--p.orangehrm-login-forgot-header').click({force:true})
   cy.get('button[type="button"]') 
   .should('be.visible')
})
 
 