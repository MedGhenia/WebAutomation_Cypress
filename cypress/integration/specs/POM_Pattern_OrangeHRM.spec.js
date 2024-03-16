/// <reference types="cypress" />

import LoginPage from "../PageObjects/OrangeHRM/LoginPage"

describe('Page Object Model - Orange HRM', function(){

    it('Valid Login Test', function(){
        const lp = new LoginPage()
        lp.visit()
        cy.title().should('be.equal','OrangeHRM')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        lp.fillUserName("Admin")
        lp.fillPassword("admin123")
        lp.submit()
        cy.wait(2000)
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.log("Test Passed")
    })
})