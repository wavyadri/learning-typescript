describe('Todo List', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have an empty active tasks column', () => {
    cy.get('.todos__heading').first().should('have.text', 'Active Tasks');
    cy.get('.todos__single').should('not.exist');
  });

  it('should have an empty completed tasks column', () => {
    cy.get('.todos__heading').last().should('have.text', 'Completed Tasks');
    cy.get('.todos__single').should('not.exist');
  });

  it('should display a newly added active task', () => {});

  it('should display a newly completed task', () => {});
});
