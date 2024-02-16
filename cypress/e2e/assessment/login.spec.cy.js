let sel
describe('', () => {
  beforeEach(() => {
    cy.visit("/", {failOnStatusCode: false});
  });

  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    });
    cy.fixture('selectors').then((selectors) => {
      sel = selectors;
    });
  });

  it('allows a user to log in with valid credentials', () => {
      cy.get('sel.username').type('Admin')
      cy.get('sel.password').type('admin123')
      cy.get('sel.submitButton').click()

  })

  it('displays an error message for invalid credentials', () => {
    cy.get('sel.username').type('Admin')
      cy.get('sel.password').type('admin1237888')
      cy.get('sel.submitButton').click()
      cy.contains('Invalid credentials')
  });

  it('displays an error message when required fields are left blank', () => {
    cy.get('sel.submitButton').click()
    cy.contains('Required')
    cy.contains('Required')
  });

})