/// <reference types="cypress" />


describe('Suite Name', function(){
    it('Hobbies check boxes', function (){

        cy.visit("https://testautomationpractice.blogspot.com/")

        // cy.get("#RESULT_RadioButton-3").scrollIntoView().should('be.visible')

        // cy.scrollTo('bottom')
        // cy.scrollTo('center')
        cy.scrollTo(0, 1200)
        cy.scrollTo(0, -1200)

    })
})