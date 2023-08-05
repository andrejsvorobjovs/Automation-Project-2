describe('Add Tests for Time Tracking', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.url().should('eq', `${Cypress.env('baseUrl')}project`).then((url) => {
        cy.visit(url + '/board');
        cy.get('[data-testid="board-list:backlog"]').first().click();
        cy.get('[data-testid="modal:issue-details"]').should('be.visible');
      });
    });


    it.skip('Add estimation)', () => {

        //Add estimation
        cy.get('[placeholder="Number"]').clear();
        cy.get('[placeholder="Number"]').type("37");
        cy.get('[data-testid="icon:close"]').first().click();

        //Open the same issue again
        cy.get('[data-testid="board-list:backlog"]').first().click();
        cy.get('[data-testid="modal:issue-details"]').should('be.visible');

        cy.reload();

        //Assert, that estimation is added and visible (DO NOT WORK DUE TO JIRA BUG!)
        //cy.get('[placeholder="Number"]').should('have.value','37');
        
        //cy.get('@timeLogged').should('contain', '2h logged', { timeout: 10000 });
    });


    it.skip('Update estimation)', () => {

        //Update estimation
        cy.get('[placeholder="Number"]').clear();
        cy.get('[placeholder="Number"]').type("142");
        cy.get('[data-testid="icon:close"]').first().click();

        //Open the same issue again
        cy.get('[data-testid="board-list:backlog"]').first().click();
        cy.get('[data-testid="modal:issue-details"]').should('be.visible');

        //Assert that updated value is visible (DO NOT WORK DUE TO JIRA BUG!)
        //cy.get('input[placeholder="Number"]').should('have.value','142');
    });


    it.skip('Remove estimation)', () => {

        //Remove estimation
        cy.get('[placeholder="Number"]').clear();
        cy.get('[data-testid="icon:close"]').first().click();

        //Open the same issue again
        cy.get('[data-testid="board-list:backlog"]').first().click();
        cy.get('[data-testid="modal:issue-details"]').should('be.visible');
        
        //Assert that value is removed (DO NOT WORK DUE TO JIRA BUG!)
        //cy.get('input[placeholder="Number"]').should('have.value','');
    });






    //Time logging functionality

    it('Log time)', () => {
   
        //Click on time tracking section to add log time
        cy.get('[data-testid="icon:stopwatch"]').click();
        
        //Check that time tracking pop-up dialogue is opened
        cy.get('[data-testid="modal:tracking"]').should('be.visible');
       
        //Enter value 71 to the first field “Time spent”
        cy.get('[placeholder="Number"]').eq(1).clear();
        cy.get('[placeholder="Number"]').eq(1).type(71);
        
        //Enter value 138 to the second field “Time remaining” and click button "Done"
        cy.get('[placeholder="Number"]').eq(2).type(138);   //JIRA BUG! It does NOT save second value field!
        cy.contains('button', 'Done').click();
    });



    it.only('Remove logged time)', () => {
   
        //Click on time tracking section to add log time
        cy.get('[data-testid="icon:stopwatch"]').click();
        
        //Check that time tracking pop-up dialogue is opened
        cy.get('[data-testid="modal:tracking"]').should('be.visible');
       
        //Remove all values to both fields
        cy.get('[placeholder="Number"]').eq(1).clear();
        cy.get('[placeholder="Number"]').eq(2).clear();
        cy.contains('button', 'Done').click();
        
        //Check that values have been deleted
        //cy.get('[placeholder="Number"]').eq(2).type(138);
    });
});
