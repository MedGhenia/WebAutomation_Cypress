describe('MyTestSuite', function()
{
     it('Verify Title Of The Page', function()
	 {
	 cy.visit('https://www.youtube.com/')
	 cy.title().should('eq','YouTube')
	 })
	 
}) 