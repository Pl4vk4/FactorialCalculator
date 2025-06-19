class HomePage {
  
  mainTitle() {
    return cy.get('.col-md-6 > .margin-base-vertical');
  }

  inputField() {
    return cy.get('#number');
  }

  calculateButton() {
    return cy.get('#getFactorial');
  }

  resultText() {
    return cy.get('#resultDiv');
  }


}

export const homePage = new HomePage();