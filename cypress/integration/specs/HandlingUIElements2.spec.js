/// <reference types="cypress" />

const { contains } = require("cypress/types/jquery")


describe('Suite Name', function(){

    //CheckBox
    it('Hobbies check boxes', function (){

        cy.visit("https://demo.automationtesting.in/Register.html")

        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket') // cocher Cricket checkbox et verifier qui'il est cohee et nverifier value
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked') // decocher Cricket checkbox et verifier qui'il est NON cohee
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        cy.get('input[type=checkbox]').check(['Cricket','Hockey']) // cocher plusieurs cases au meme temps

    })

    //DropDown List
    it('Skills DropDown', function (){

        cy.get('#Skills').select('Android').should('have.value','Android')
    })


    it('Langages Multi Select', function (){

        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Japanese').click()
    })


    it('Select countries searchable drop down', function (){

        cy.get('[role=combobox]').click({force: true})
        cy.get('.select2-search__field').type('Ind')
        cy.get('.select2-search__field').type('{enter}')
    })



})