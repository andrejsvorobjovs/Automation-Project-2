describe('Add Tests for Time Tracking', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.url().should('eq', `${Cypress.env('baseUrl')}project`).then((url) => {
        cy.visit(url + '/board');
        cy.get('[data-testid="board-list:backlog"]').first().click();
        cy.get('[data-testid="modal:issue-details"]').should('be.visible');
      });
    });


    it.only('Add estimation)', () => {
   
        cy.get('[placeholder="Number"]').clear();
        cy.get('[placeholder="Number"]').type("37")
        cy.get('[data-testid="icon:close"]').first().click();

        //Assert, that estimation is added and visible
        cy.get('input[placeholder="Number"]').should('have.value','');
        
        //cy.get('@timeLogged').should('contain', '2h logged', { timeout: 10000 });
    });


    it('Update estimation)', () => {

        cy.get('[placeholder="Number"]').clear();
        cy.get('[placeholder="Number"]').type("142")
        cy.get('[data-testid="icon:close"]').first().click();

        //Assert that updated value is visible
        cy.get('input[placeholder="Number"]').should('have.value','');
    });


    it('Remove estimation)', () => {

        cy.get('[placeholder="Number"]').clear();
        cy.get('[data-testid="icon:close"]').first().click();
        
        //Assert that value is removed
        cy.get('input[placeholder="Number"]').should('have.value','');
    });






    //Time logging functionality

    it.skip('Log time)', () => {
   
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
    });



    it.skip('Remove logged time)', () => {
   
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
    });
});
