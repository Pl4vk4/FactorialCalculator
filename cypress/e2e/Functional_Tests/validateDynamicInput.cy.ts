import { URLs } from '../../fixtures/environments/env';
import { homePage } from '../../support/pageObject/homePage';

describe('Validation of dynamic input', () => {
  
  const calculateFactorial = (num: number): number => {

    if (num === 0 || num === 1) return 1;
    return num * calculateFactorial(num - 1);
  };
  
  
  it('should validate the factorial works', () => {
    
    const testNumber = 5;
    const expectedResult = calculateFactorial(testNumber);
    
    cy.visit(URLs.base);

    homePage.inputField().clear().type(testNumber.toString());
    homePage.calculateButton().click();

    homePage.resultText()
      .should('exist')
      .and('contain.text', `The factorial of ${testNumber} is: ${expectedResult}`);
  });
});
