import '@4tw/cypress-drag-drop';

describe('Single Todo', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get("[type='input']").type('buy oat milk');
    cy.get("[type='submit']").click();
  });

  it('should dragndrop', () => {
    cy.get('[data-rbd-draggable-context-id="1"]').drag(
      '[data-rbd-droppable-context-id="1"]'
    );
  });

  // it('should add item to completed tasks when drag and droped over', () => {});
});
