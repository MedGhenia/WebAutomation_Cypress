/// <reference types="cypress" />

describe('Locating Elements', function()
{
    it('Verify types of locators',function()
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") // Opens the URL
        cy.title().should('eq', 'OrangeHRM')
        cy.get(".orangehrm-login-title").should("exist")    // title should be displayed
        cy.log("tile LOGIN is displayed")



        // Failed Login
        cy.get("[name='username']").type("WrongUserName")
        cy.get("[name='password']").type("WrongPassword")
        cy.get(".orangehrm-login-button[type='submit']").click()  // click login button
        cy.wait(2000)
        cy.get(".oxd-alert-content-text").should("exist")  // verifier la presence de msg d'erreur
        cy.log("Login Failed")

        // Success Login
        cy.get("[name='username']").type("Admin")
        cy.get("[name='password']").type("admin123")
        cy.get(".orangehrm-login-button[type='submit']").click()  // click login button

        cy.wait(1000)
        cy.get(".oxd-alert-content-text").should("not.exist")  // verifier la presence de msg d'erreur
        cy.log("Login Successful")

        cy.wait(2000)

        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.get(".oxd-topbar-header-breadcrumb-module").should("exist")

        cy.log("TEST PASSED")

    })
})