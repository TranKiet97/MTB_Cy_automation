// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("parseXlsx", (inputFile) => {
    return cy.task('parseXlsx', { filePath: inputFile })
});
// Read data From Excel File
Cypress.Commands.add('Read_Exceldata', (Excelfile, Sheet_name, jsonfile) => {
    cy.task('readXlsx', { file: 'cypress/fixtures/' + Excelfile, sheet: Sheet_name }).then((rows) => {
        cy.writeFile("cypress/fixtures/" + jsonfile, { rows })
    });
});
// Visit to website
Cypress.Commands.add('Visit_to_Website', () => {
    cy.visit('https://mtb.dansolutions.vn/login')
});
// Login - Signout Commands
Cypress.Commands.add('Login', () => {
    cy.visit('https://mtb.dansolutions.vn/login');
    cy.get('[name="username"]').type('admin');
    cy.get('[name="password"]').type('12345678');
    cy.get('[class="euiButton__text"]').click()
});

Cypress.Commands.add('Signout', () => {
    cy.get('[title="AD"]').click();
    cy.get('[style="min-width: 160px;"]').click()
})