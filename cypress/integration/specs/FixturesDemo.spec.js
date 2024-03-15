/// <reference types="cypress" />

describe('MyTestSuite', function(){

    before(function() {
        // runs once before all tests in the block\
        cy.log('********** This is SETUP block **********')

        cy.fixture('example').then(function(data){
            
            this.data=data

        })

    })

    it('FixturesDemoTest', function(){
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("[name='username']").type(this.data.username) // username
        cy.get("[name='password']").type(this.data.password) // password
        cy.get(".orangehrm-login-button[type='submit']").click()
        cy.wait(2000)
        cy.log("TEST PASSED")
    })
})
