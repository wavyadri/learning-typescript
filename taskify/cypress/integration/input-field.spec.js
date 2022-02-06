describe('Input Field', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have an unfocused input field on inital load', () => {
    cy.get("[type='input']").should(($input) => {
      expect($input).not.to.be.focused;
    });
  });

  it('should have a dark box shadow when focused', () => {
    cy.get("[type='input']")
      .focus()
      .should(
        'have.css',
        'box-shadow',
        'rgba(0, 0, 0, 0.5) 0px 0px 10px 1000px'
      );
  });

  it('should create new items in order to Active Task', () => {
    cy.get("[type='input']").type('buy oat milk');
    cy.get("[type='submit']").click();
    cy.get('.todos__single').first().contains('buy oat milk');

    cy.get("[type='input']").type('practice typescript');
    cy.get("[type='submit']").click();
    cy.get('.todos__single').last().contains('practice typescript');
  });

  it('should not create new item if input is blank', () => {
    cy.get("[type='submit']").click();
    cy.get('.todos__single').should('not.exist');
  });
});
