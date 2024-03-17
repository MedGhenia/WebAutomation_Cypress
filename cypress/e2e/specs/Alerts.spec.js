/// <reference types="cypress" />


describe('test suite ', function(){

    it('Alerts', function(){
        // cy.visit("https://mail.rediff.com/cgi-bin/login.cgi")
        // cy.get('input[type=submit]').click()
        // cy.on('window:alert',(str)=>
        // {
        //     expect(str).to.equal('Please enter a valid user name')
        // })


        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#HTML9 > div.widget-content > button:nth-child(1)").click()
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('Press a button!')
        })

    })

})