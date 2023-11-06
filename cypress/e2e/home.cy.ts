describe('Home page', function () {
  it('Home page e2e', function () {
    cy.visit('/');

    cy.getById('title').should('contain.text', 'count is 0');

    cy.getById('inc_btn').click();
    cy.getById('title').should('contain.text', 'count is 2');

    cy.getById('inc_btn').click();
    cy.getById('title').should('contain.text', 'count is 4');

    cy.getById('dec_btn').click();
    cy.getById('title').should('contain.text', 'count is 2');
  });
});
