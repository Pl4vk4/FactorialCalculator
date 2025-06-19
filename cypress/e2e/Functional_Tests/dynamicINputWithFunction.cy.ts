import { URLs } from '../../fixtures/environments/env';
import { homePage } from '../../support/pageObject/homePage';
import { calculateFactorial } from '../../fixtures/functions/functions';


describe('Validation of dynamic input', () => {
 
  it('should validate the factorial works', () => {
    const input = 6;
    const expectedResult = calculateFactorial(input);

    cy.visit(URLs.base);

    homePage.inputField().clear().type(input.toString());
    homePage.calculateButton().click();

    homePage.resultText()
      .should('exist')
      .and('contain.text', `The factorial of ${input} is: ${expectedResult}`);
  });
});


