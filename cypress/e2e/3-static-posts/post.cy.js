describe('view all posts', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000/')
  })

  it('all posts', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('.posts article').should('have.length', 3)

    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
    cy.get('.posts article h2').first().should('have.text', 'Post numero 1')
    cy.get('.posts article h2').last().should('have.text', 'Lorem ipsum 3')
  })


  
  it('next and prev posts', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('.button button').first().should('have.text', 'anterior')
    cy.get('.button button').last().should('have.text', 'siguiente')
    cy.get('.button button').last().click()

    cy.get('.posts article h2').first().should('have.text', 'Lorem ipsum 4')
    cy.get('.posts article h2').last().should('have.text', 'Lorem ipsum 6')
    
  })
})