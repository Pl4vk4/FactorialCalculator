import { URLs } from '../../fixtures/environments/env';
import { homePage } from '../../support/pageObject/homePage';

describe('Validation of small number input', () => {
  it('should validate the factorial worls for small number', () => {
    
    cy.visit(URLs.base);

    homePage.inputField().clear().type('5');

    homePage.calculateButton().click();

    homePage.resultText().should('exist').and('contain.text', 'The factorial of 5 is: 120');;
  });
});

