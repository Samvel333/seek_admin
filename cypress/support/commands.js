Cypress.Commands.add('signIn', () => {
  // cy.pause()
  cy.visit('https://stagingadmin.seekunique.co/auth/sign-in');
  cy.get('[placeholder="Company Name"]').type('art');
  cy.get('[placeholder="E-Mail"]').type('admin_infinity@gmail.com');
  cy.get('[placeholder="Password"]').type('asdfgA!123');
  cy.get('.primary-button').click();
  // cy.url().should('contain', 'dashboard')

  cy.intercept('PUT', '**/bannernew/**').as('dashboard')
  cy.wait('@dashboard', { timeout: 10000 });
  cy.url().should('contain', 'dashboard')
})

Cypress.Commands.add('loggin', (username, password) => {
  cy.session([username, password], () => {
    cy.request({
      method: 'POST',
      url: '**/dashboard-login',
      body: { username, password },
    }).then(({ body }) => {
      window.localStorage.setItem('authToken', body.token)
    })
  })
})

import 'cypress-file-upload';
