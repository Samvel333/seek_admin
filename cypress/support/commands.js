Cypress.Commands.add('signIn', () => {
    cy.visit('https://stagingadmin.seekunique.co/auth/sign-in');
    cy.get('[placeholder="Company Name"]').type('art');
    cy.get('[placeholder="E-Mail"]').type('admin_infinity@gmail.com');
    cy.get('[placeholder="Password"]').type('asdfgA!123');
    cy.get('.primary-button').click();
    // cy.url().should('contain', 'dashboard')
})