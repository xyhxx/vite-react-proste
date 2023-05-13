declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to select DOM element by data-testid attribute.
     * @example cy.getById('title')
     */
    getById(value: string): Chainable<JQuery<HTMLElement>>;
  }
}
