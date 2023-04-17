describe('Home page', function () {
  it('Home page e2e', function () {
    cy.visit('/');

    cy.getByTestId('title').should('contain.text', 'count is 0');

    cy.getByTestId('increment').click();
    cy.getByTestId('title').should('contain.text', 'count is 2');

    cy.getByTestId('increment').click();
    cy.getByTestId('title').should('contain.text', 'count is 4');

    cy.getByTestId('reduce').click();
    cy.getByTestId('title').should('contain.text', 'count is 2');
  });
});
