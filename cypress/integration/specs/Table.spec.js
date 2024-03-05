/// <reference types="cypress" />

describe('MyTestSuite', function() {
    it('Table Test', function(){
        cy.visit('https://testautomationpractice.blogspot.com/')

        //1) Check Value presence anywhere in the table

        cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible')

        //2) Check Value presence in specific row & column 

        // #HTML1 > div.widget-content > table > tbody > tr:nth-child(5) > td:nth-child(3)
        cy.get('table[name=BookTable] > tbody > tr:nth-child(5) > td:nth-child(3)').contains('Selenium').should('be.visible')

        //verify the book name "Master In Java" whose author is Amod

        cy.get('table[name=BookTable]>tbody > tr td:nth-child(2)').each(($e1, index, $list) => {
            const text = $e1.text()
            if(text.includes("Amod"))
            {
                cy.get("table[name=BookTable]>tbody > tr td:nth-child(1)").eq(index).then(function(bname)
                {
                    const bookName = bname.text()
                    expect(bookName).to.equal("Master In Java")
                })
            }
        })


    })
})



// html source for Table //

{/* <table name="BookTable">
  <tbody><tr>
    <th>BookName</th>
    <th>Author</th>
    <th>Subject</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>Learn Selenium</td>
    <td>Amit</td>
    <td>Selenium</td>
    <td>300</td>
  </tr>
  <tr>
    <td>Learn Java</td>
    <td>Mukesh</td>
    <td>Java</td>
    <td>500</td>
  </tr>
  <tr>
    <td>Learn JS</td>
    <td>Animesh</td>
    <td>Javascript</td>
    <td>300</td>
  </tr>
  <tr>
    <td>Master In Selenium</td>
    <td>Mukesh</td>
    <td>Selenium</td>
    <td>3000</td>
  </tr>
  <tr>
    <td>Master In Java</td>
    <td>Amod</td>
    <td>JAVA</td>
    <td>2000</td>
  </tr>
  <tr>
    <td>Master In JS</td>
    <td>Amit</td>
    <td>Javascript</td>
    <td>1000</td>
  </tr>
</tbody></table> */}