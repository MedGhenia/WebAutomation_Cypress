/// <reference types="cypress" />

describe('CustomSuite', function(){

    it('LoginTest', function(){

        // cy.visit("https://admin-demo.nopcommerce.com/login")
        // cy.get('input[name=Email]').clear().type("admin@yourstore.com")
        // cy.get('input[name=Password]').clear().type("admin")
        // cy.get(".login-button[type='submit']").click() 

        cy.login('admin@yourstore.com','admin') //valid
        cy.wait(2000)
        cy.title().should('be.equal','Dashboard / nopCommerce administration')

        cy.login('admin@yourstore.com','admin123') //invalid
        cy.wait(2000)
        cy.title().should('not.be.equal','Dashboard / nopCommerce administration')

        cy.login('admin@yourstore.com','admin') //valid
        cy.wait(2000)
        cy.title().should('be.equal','Dashboard / nopCommerce administration')

        //Script for Adding new customer
        cy.wait(2000)

    })

    it('Add customer', function(){
        //Login script
        // cy.visit("https://admin-demo.nopcommerce.com/login")
        // cy.get('input[name=Email]').clear().type("admin@yourstore.com")
        // cy.get('input[name=Password]').clear().type("admin")
        // cy.get(".login-button[type='submit']").click()  

        cy.login('admin@yourstore.com','admin')

        //Script for Adding new customer
        cy.log('Adding customer..........')
        cy.wait(2000)

    })

    it('Edit customer', function(){
        
        // cy.visit("https://admin-demo.nopcommerce.com/login")
        // cy.get('input[name=Email]').clear().type("admin@yourstore.com")
        // cy.get('input[name=Password]').clear().type("admin")
        // cy.get(".login-button[type='submit']").click() 

        cy.login('admin@yourstore.com','admin')

        //Script for Editing new customer
        cy.log('Editing customer..........')
        cy.wait(2000)

    })
})