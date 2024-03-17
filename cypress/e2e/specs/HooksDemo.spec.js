/// <reference types="cypress" />

describe('MyTestSuite', function(){

    before(function() {
        // runs once before all tests in the block\
        cy.log('********** This is SETUP block **********')
    })

    after(function() {
        // runs once after all tests in the block
        cy.log('********** This is TEAR DOWN block **********')
    })

    beforeEach(function() {
        // runs before each test in the block
        cy.log('********** This is LOGIN block **********')
    })

    afterEach(function() {
        // runs after each test in the block
        cy.log('********** This is LOGOUT block **********')
    })

    it('searching', function(){
        cy.log('********** This is Searching Test **********')
    })

    it('advanced searching', function(){
        cy.log('********** This is Searching Test **********')
    })

    it('listing Products', function(){
        cy.log('********** This is Searching Test **********')
    })
})