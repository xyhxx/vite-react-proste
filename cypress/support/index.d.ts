declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to select DOM element by id attribute.
     * @param {string} value - id
     * @example cy.getById('title')
     */
    getById(value: string): Chainable<JQuery<HTMLElement>>;
  }
}
