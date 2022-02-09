// /// <reference types="cypress" />

// describe('Login without UI', () => {
//     it('Should able to login', () => {
//         cy.request({
//             method: 'POST',
//             url: 'https://staging.seekunique.co/api/dashboard-login',
//             body: { company_name: 'art', email: 'admin_infinity@gmail.com', password: 'asdfgA!123' }
//         }).its('body').then(res => localStorage.setItem('jwt', res.token));
//         cy.visit('https://stagingadmin.seekunique.co/dashboard/web-pages/banners')
//     });
// });