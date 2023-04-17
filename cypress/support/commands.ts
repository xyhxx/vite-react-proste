/// <reference types="cypress" />

/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

Cypress.Commands.add('getByTestId' as any, function (value) {
  return cy.get(`[data-testid="${value}"]`);
});
