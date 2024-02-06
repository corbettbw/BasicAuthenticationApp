describe('Home Page', () => {
  it('should have correct title', () => {
    cy.visit('http://127.0.0.1:3000')
    cy.title().should('eq', 'BasicAuthenticationApp')
  })
})