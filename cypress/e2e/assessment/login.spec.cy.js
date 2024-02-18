describe('Login', () => {
  beforeEach(() => {
    cy.visit("/", {failOnStatusCode: false});
  });

  it('confirm url',()=>{
    cy.validUrl()
  })

  it('allows a user to log in with valid credentials', () => {
    cy.validLogin()
  });

  it('displays an error message for invalid credentials', () => {
    cy.invalidLogin()
  });

  it('displays an error message when required fields are left blank', () => {
    cy.blankLogin()
  });
  
  it('login Forgot your password link navigation is working', () => {
    cy.forgotPassword()
  })
});
