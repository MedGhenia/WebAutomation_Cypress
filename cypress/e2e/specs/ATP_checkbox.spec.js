/// <reference types="cypress" />


describe('test suite : checkbox and dropDown list', function(){

    // checkBox test
    it('Days check boxes', function (){
        cy.log('checkBox test')
        cy.visit("https://testautomationpractice.blogspot.com/")
        // cy.scrollTo(0, 100)
        cy.get("#sunday").check().should('be.checked').and('have.value','sunday') // check the day checkbox and verify if he is checked and verify value
        cy.get("#monday").check().should('be.checked').and('have.value','monday') // check the day checkbox and verify if he is checked and verify value
        cy.get("#tuesday").check().should('be.checked').and('have.value','tuesday') // check the day checkbox and verify if he is checked and verify value
        cy.get("#wednesday").check().should('be.checked').and('have.value','wednesday') // check the day checkbox and verify if he is checked and verify value
        cy.get("#thursday").check().should('be.checked').and('have.value','thursday') // check the day checkbox and verify if he is checked and verify value
        cy.get("#friday").check().should('be.checked').and('have.value','friday') // check the day checkbox and verify if he is checked and verify value
        cy.get("#saturday").check().should('be.checked').and('have.value','saturday') // check the day checkbox and verify if he is checked and verify value

        cy.wait(3000)

        cy.get('#sunday').uncheck().should('not.be.checked') // uncheck the day and verify if he is unchecked 
        cy.get('#monday').uncheck().should('not.be.checked') // uncheck the day and verify if he is unchecked
        cy.get('#tuesday').uncheck().should('not.be.checked') // uncheck the day and verify if he is unchecked
        cy.get('#wednesday').uncheck().should('not.be.checked') // uncheck the day and verify if he is unchecked
        cy.get('#thursday').uncheck().should('not.be.checked') // uncheck the day and verify if he is unchecked
        cy.get('#friday').uncheck().should('not.be.checked') // uncheck the day and verify if he is unchecked
        cy.get('#saturday').uncheck().should('not.be.checked') // uncheck the day and verify if he is unchecked

        cy.wait(3000)

        cy.get('input[type=checkbox]').check(['sunday','monday','tuesday','wednesday','thursday','friday','saturday']) // check all days in same command 

        cy.log('checkBox Passed')
    })

})


//// html source for checkbox element ////

{/* <div class="form-group">
      <label for="days">Days:</label><br>
      <div class="form-check form-check-inline">
        <input class="form-check-input" id="sunday" type="checkbox" value="sunday">
        <label class="form-check-label" for="sunday">Sunday</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" id="monday" type="checkbox" value="monday">
        <label class="form-check-label" for="monday">Monday</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" id="tuesday" type="checkbox" value="tuesday">
        <label class="form-check-label" for="tuesday">Tuesday</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" id="wednesday" type="checkbox" value="wednesday">
        <label class="form-check-label" for="wednesday">Wednesday</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" id="thursday" type="checkbox" value="thursday">
        <label class="form-check-label" for="thursday">Thursday</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" id="friday" type="checkbox" value="friday">
        <label class="form-check-label" for="friday">Friday</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" id="saturday" type="checkbox" value="saturday">
        <label class="form-check-label" for="saturday">Saturday</label>
      </div>
    </div> */}