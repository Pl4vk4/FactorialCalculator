import { URLs } from '../../fixtures/environments/env';
import { homePage } from '../../support/pageObject/homePage';
import { Warnings } from '../../fixtures/textValidations/texts';

describe('Validation of text as input', () => {
  it('should validate proper warning is shown', () => {
    
    cy.visit(URLs.base);

    homePage.inputField().clear().type('#!^');

    homePage.calculateButton().click();

    homePage.resultText().should('exist').and('contain.text', Warnings.invalidInputWarning);
  });
});
