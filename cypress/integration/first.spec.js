// /// <reference types="cypress" />

// import 'cypress-wait-until';


// describe('Admin test Cases', () => {
//     beforeEach(() => {
//         cy.waitUntil(() => cy.signIn())

//         // cy.signIn()
//         // cy.url().should('contain', 'dashboard')
//     });

//     // afterEach(() => {

//     // });

//     it('Should sign in', () => {
//         cy.log('Signed In !');
//     });

//     it.only('Verify if the system keeps the input of the "Description" field of the "Website" section', () => {

//         // cy.contains('Settings').select(0)
//         cy.get(':nth-child(5) > .ant-menu-submenu-title > .anticon').click()
//         cy.get('ul.ng-star-inserted').find(':nth-child(15)').click();
//         cy.url().should('contain', 'meta-data');

//         cy.get('textarea').first().type('1qqzsdwe3wr3r5465gbngyjuyi89')
//         cy.get('.primary-button').click()
//         cy.reload()
//         // cy.waitFor(cy.get('textarea').first())
//         cy.get('textarea').eq(0).then($input => expect($input).to.contain('1qqzsdwe3wr3r5465gbngyjuyi89'))
//     });

//     it('Verify if the system trims spaces of the "Description" field of the "Website" section', () => {

//     });
// });