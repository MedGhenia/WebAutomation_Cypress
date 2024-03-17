/// <reference types="cypress" />

class LoginPage {

visit(){
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
}

fillUserName(value){
    
    const textfield = cy.get("[name='username']")
    textfield.clear()
    textfield.type(value)
    return this
}

fillPassword(value){
    
    const textfield = cy.get("[name='password']")
    textfield.clear()
    textfield.type(value)
    return this
}

submit(){

    const button = cy.get(".orangehrm-login-button[type='submit']")
    button.click()
    return this
}

}

export default LoginPage