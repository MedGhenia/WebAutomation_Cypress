/// <reference types="cypress" />

describe('Locating Elements', function()
{
    it('Verify types of locators',function()
    {
        cy.visit("https://demo.nopcommerce.com/") // Opens the URL
        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch") // tape "Apple MacBook Pro 13-inch" in search box
        cy.get("[type='submit']").click   // click on button search 
        cy.get(".product-box-add-to-cart-button[type='button']").click // click on Add to cart button
        cy.get(".qty-input[name='addtocart_4.EnteredQuantity']").clear().type('2')  // Quantity
        cy.get(".add-to-cart-button[type='button']").click  // Add to cqrt button qfter providing quantity 

        cy.wait(5000)

        cy.get("#topcartlink > a > span.cart-label").click // click on button shopping cart

        cy.wait(3000)

        cy.get("product-unit-price").contains('$1,800.00')  // validating point 


    })
})