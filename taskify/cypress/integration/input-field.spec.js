describe('Input Field', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have an unfocused input field', () => {
    cy.get('.input__box').should(($input) => {
      expect($input).not.to.be.focused;
    });
  });
});
