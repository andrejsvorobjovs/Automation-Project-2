describe('Issue delete', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.url().should('eq', `${Cypress.env('baseUrl')}project`).then((url) => {
        cy.visit(url + '/board');
        cy.get('[data-testid="list-issue"]').first().click();
        cy.get('[data-testid="modal:issue-details"]').should('be.visible');
      });
    });


      //Assignment #3
  
    it('DELETE (Test 1)', () => {
   
      cy.get('[data-testid="icon:trash"]').should('be.visible').click();

      // Assert that the confirm modal is visible
      cy.get('[data-testid="modal:confirm"]').contains('Are you sure you want to delete this issue?').should('be.visible');

      //Confirm "delete issue"
      cy.get('[data-testid="modal:confirm"]').contains('button', 'Delete issue').click();

      //Assert that the confirm modal is no longer visible
      cy.get('[data-testid="modal:confirm"]').should('not.exist');

      //Assert that the issue is deleted
      cy.get('[data-testid="board-list:backlog"]').contains('This is an issue of type: Task.').should('not.exist');

      // Reload the page (It is not asked)
      cy.reload();
    });


    it('DELETE (Test 2)', () => {
   
        cy.get('[data-testid="icon:trash"]').should('be.visible').click();
  
        // Assert that the confirm modal is visible
        cy.get('[data-testid="modal:confirm"]').contains('Are you sure you want to delete this issue?').should('be.visible');
  
        //Cancel "delete issue"
        cy.get('[data-testid="modal:confirm"]').contains('button', 'Cancel').click();

        //Assert that the confirm modal is no longer visible
        cy.get('[data-testid="modal:confirm"]').should('not.exist');

        //Close the issue
        cy.get('[data-testid="icon:close"]').first().click();

        //Assert that the issue is deleted
        cy.get('[data-testid="board-list:backlog"]').contains('This is an issue of type: Task.').should('be.visible');
  
        // Reload the page (It is not asked)
        cy.reload();
    });
  }); 
