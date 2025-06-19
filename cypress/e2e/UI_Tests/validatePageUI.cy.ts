import { URLs } from '../../fixtures/environments/env';
import { homePage } from '../../support/pageObject/homePage';

describe('UI Validation', () => {
  it('should validate the existence of elements on the page', () => {
    
    cy.visit(URLs.base);

    //Validate title
    homePage.mainTitle().should('be.visible').and('contain.text', 'The greatest factorial calculator!');
   
    // Validate input field
    cy.get('#number').should('exist');

    // Validate Calculate button
    cy.get('#getFactorial').should('exist');

    // Validate links
    cy.contains('About').should('exist');
    cy.contains('Terms').should('exist');
    cy.contains('Privacy').should('exist');

    // Validate copyright section link
    cy.get('.wor_copyright').should('exist');
  });
});