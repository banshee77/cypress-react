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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// import { databaseSnapshot } from './const'

// // before(() => {
// //     cy.RestoreDatabase()
// // })


Cypress.Commands.add("RestoreDatabase", () => {
    const database = Cypress.env().db.options.database
    try {
        cy.sqlServer(`USE master alter database ${database} set single_user with rollback immediate RESTORE DATABASE ${database} from DATABASE_SNAPSHOT = '${databaseSnapshot}'`)
        cy.sqlServer(`USE master alter database ${database} set MULTI_USER`)
        cy.log('Database has been restored successfully!!')
    } catch (error) {
        cy.log(`Error occured while restoring database : ${error}`)
        cy.sqlServer(`USE master alter database ${database} set MULTI_USER`)
    }
})