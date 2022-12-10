describe('Navigation', () => {
  it('can move from signup modal to login modal and vice versa', () => {
    // visit homepage
    // click on signup
    // click on login button in signup modal
    cy.visit('http://localhost:3000/');
    cy.findByRole('button', { name: /sign up/i }).click()
    cy.findByRole('button', { name: /already have an account\? login/i }).click()
    cy.findByRole('button', { name: /don't have an account\? sign up/i }).click()
  })
})