/// <reference types="cypress" />


describe('test suite : checkbox and dropDown list', function(){
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




//// html source for drop down list ////

{/* <select type="text" class="form-control ng-pristine ng-valid ng-touched" id="Skills" ng-model="Skill" ng-init="Skill=''">
    <option value="">Select Skills</option>
    <option value="Adobe InDesign">Adobe InDesign</option>
	<option value="Adobe Photoshop">Adobe Photoshop</option>
	<option value="Analytics">Analytics</option>
	<option value="Android">Android</option>
	<option value="APIs">APIs</option>
	<option value="Art Design">Art Design</option>
	<option value="AutoCAD">AutoCAD</option>
	<option value="Backup Management">Backup Management</option>
	<option value="C">C</option><option value="C++">C++</option>
	<option value="Certifications">Certifications</option>
	<option value="Client Server">Client Server</option>
	<option value="Client Support">Client Support</option>
	<option value="Configuration">Configuration</option>
	<option value="Content Managment">Content Managment</option>
	<option value="Content Management Systems (CMS)">Content Management Systems (CMS)</option>
	<option value="Corel Draw">Corel Draw</option>
	<option value="Corel Word Perfect">Corel Word Perfect</option>
	<option value="CSS">CSS</option>
	<option value="Data Analytics">Data Analytics</option>
	<option value="Desktop Publishing">Desktop Publishing</option>
	<option value="Design">Design</option>
	<option value="Diagnostics">Diagnostics</option>
	<option value="Documentation">Documentation</option>
	<option value="End User Support">End User Support</option>
	<option value="Email">Email</option>
	<option value="Engineering">Engineering</option>
	<option value="Excel">Excel</option>
	<option value="FileMaker Pro">FileMaker Pro</option>
	<option value="Fortran">Fortran</option>
	<option value="HTML">HTML</option>
	<option value="Implementation">Implementation</option>
	<option value="Installation">Installation</option>
	<option value="Internet">Internet</option>
	<option value="iOS">iOS</option>
	<option value="iPhone">iPhone</option>
	<option value="Linux">Linux</option>
	<option value="Java">Java</option>
	<option value="Javascript">Javascript</option>
	<option value="Mac">Mac</option>
	<option value="Matlab">Matlab</option>
	<option value="Maya">Maya</option>
	<option value="Microsoft Excel">Microsoft Excel</option>
	<option value="Microsoft Office">Microsoft Office</option>
	<option value="Microsoft Outlook">Microsoft Outlook</option>
	<option value="Microsoft Publisher">Microsoft Publisher</option>
	<option value="Microsoft Word">Microsoft Word</option>
	<option value="Microsoft Visual">Microsoft Visual</option>
	<option value="Mobile">Mobile</option>
	<option value="MySQL">MySQL</option>
	<option value="Networks">Networks</option>
	<option value="Open Source Software">Open Source Software</option>
	<option value="Oracle">Oracle</option>
	<option value="Perl">Perl</option>
	<option value="PHP">PHP</option>
	<option value="Presentations">Presentations</option>
	<option value="Processing">Processing</option>
	<option value="Programming">Programming</option>
	<option value="PT Modeler">PT Modeler</option>
	<option value="Python">Python</option>
	<option value="QuickBooks">QuickBooks</option>
	<option value="Ruby">Ruby</option>
	<option value="Shade">Shade</option>
	<option value="Software">Software</option>
	<option value="Spreadsheet">Spreadsheet</option>
	<option value="SQL">SQL</option>
	<option value="Support">Support</option>
	<option value="Systems Administration">Systems Administration</option>
	<option value="Tech Support">Tech Support</option>
	<option value="Troubleshooting">Troubleshooting</option>
	<option value="Unix">Unix</option>
	<option value="UI / UX">UI / UX</option>
	<option value="Web Page Design">Web Page Design</option>
	<option value="Windows">Windows</option>
	<option value="Word Processing">Word Processing</option>
	<option value="XML">XML</option>
	<option value="XHTML">XHTML</option></select>
</select> */}