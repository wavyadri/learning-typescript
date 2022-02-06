describe('Todo List', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have an empty active tasks column', () => {
    cy.get('.todos__heading')
      .first()
      .should('have.text', 'Active Tasks')
      .children()
      .should('have.length', 0);
  });

  it('should have an empty completed tasks column', () => {
    cy.get('.todos__heading')
      .last()
      .should('have.text', 'Completed Tasks')
      .children()
      .should('have.length', 0);
  });

  it('should display a newly added active task', () => {});

  it('should display a newly completed task', () => {});
});
