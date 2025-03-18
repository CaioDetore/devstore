describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://rocketseat.com.br')

    cy.contains('Ver detalhes', {
      matchCase: false,
    })
  })
})
