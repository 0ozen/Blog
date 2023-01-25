describe('view all posts', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000/')
  })

  it('search post 1 and check suggestion', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('.react-autosuggest__input').click().type('post')

    cy.get('.sugerencia div').should('have.text', 'Post numero 1')
    cy.get('.sugerencia small').should('have.text', 'Adipisci atque dolorem, fugit blanditiis corporis inventore')
  })
})