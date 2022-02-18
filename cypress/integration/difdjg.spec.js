// /// <reference types="cypress" />

// import 'cypress-wait-until';
// import { isKeepInput, isTrimInput, login } from '../utils/utils'

// describe('Meta-Data Test cases', () => {
//     login('admin_infinity@gmail.com', 'asdfgA!123')
//     beforeEach(() => {
       
//         cy.visit('https://stagingadmin.seekunique.co/dashboard/web-pages/banners');
//         cy.get('.sider-menu').children().eq(4).click()
//         cy.get('ul.ng-star-inserted').children().eq(14).as('meta-data')
//         cy.get('@meta-data').click()
//         cy.url().should('contain', 'meta-data');

//         // aliases
        
       
        
//         cy.get('textarea').eq(3).as('featured_keywords')
//         cy.get('textarea').eq(4).as('latestArrivals_description')
//         cy.get('textarea').eq(5).as('latestArrivals_keywords')
//         cy.get('textarea').eq(6).as('viewAll_description')
//         cy.get('textarea').eq(7).as('viewAll_keywords')
//         cy.get('textarea').eq(8).as('archive_description')
//         cy.get('textarea').eq(9).as('archive_keywords')
//         cy.get('textarea').eq(10).as('artists_description')
//         cy.get('textarea').eq(11).as('artists_keywords')
//         cy.get('textarea').eq(12).as('blogs_description')
//         cy.get('textarea').eq(13).as('blogs_keywords')
//         cy.get('textarea').eq(14).as('events_description')
//         cy.get('textarea').eq(15).as('events_keywords')
//     });

//     //1
//     it('Verify if the system keeps the input of the "Description" field of the "Website" section', () => {
        
//         cy.get('textarea').first().as('website_description')
//        isKeepInput('@website_description')
//     });

//     //2
//     it('Verify if the system trims spaces of the "Description" field of the "Website" section', () => {

//         cy.get('textarea').first().as('website_description')
//         isTrimInput('@website_description')
//     });

//     //3
//     it('Verify if the system keeps the input of the "Keywords" field of the "Website" section', () => {
//         cy.get('textarea').eq(1).as('website_keywords')
//         isKeepInput('@website_keywords')
//     });

//     //4
//     it('Verify if the system trims spaces of the "Keywords" field of the "Website" section', () => {
//         cy.get('textarea').eq(1).as('website_keywords')
//         isTrimInput('@website_keywords')
//     });

//     //5
//     it('Verify if the system keeps the input of the "Description" field of the "Featured items page" section', () => {
//         cy.get('textarea').eq(2).as('featured_description')
//         isKeepInput('@featured_description')
//     });

//     //6
//     it('Verify if the system trims spaces of the "Description" field of the "Featured items page" section', () => {
//         cy.get('textarea').eq(2).as('featured_description')
//         isTrimInput('@featured_description')
//     });
//     //7
//     it('Verify if the system keeps the input of the "Keywords" field of the "Featured items page" section', () => {
//         isKeepInput('@featured_keywords')
//     });
//     //8
//     it('Verify if the system trims spaces of the "Keywords" field of the "Featured items page" section', () => {
//         isTrimInput('@featured_keywords')
//     });
//     //9
//     it('Verify if the system keeps the input of the "Description" field in the "Latest arrivals page" section', () => {
//         isKeeIpnput('@latestArrivals_description')
//     });
//     //10
//     it('Verify if the system trims spaces of the "Description" field of the "Latest arrivals page" section', () => {
//         isTrimInput('@latestArrivals_description')
//     });
//     //11
//     it('Verify if the system keeps the input of the "Keywords" field in the "Latest arrivals page" section', () => {
//         isKeepInput('@featured_keywords')
//     });
//     //12
//     it('Verify if the system trims spaces of the "Keywords" field in the "Latest arrivals page" section', () => {
//         isTrimInput('@latestArrivals_keywords')
//     });
//     //13
//     it('Verify if the system keeps the input of the "Description" field in the "View all items page" section', () => {
//         isKeepInput('@latestArrivals_keywords')
//     });
//     //14
//     it('Verify if the system trims spaces of the "Description" field of the "View all items page" section', () => {
//         isTrimInput('@viewAll_description')
//     });
//     //15
//     it('Verify if the system keeps the input of the "Keywords" field in the "View all items page" section', () => {
//         isKeepInput('@featured_keywords')
//     });
//     //16
//     it('Verify if the system trims spaces of the "Keywords" field in the "View all items page" section', () => {
//         isTrimInput('@featured_keywords')
//     });
//     //17
//     it('Verify if the system keeps the input of the "Description" field in the "Archive page" section', () => {
//         isKeepInput('@featured_keywords')
//     });
//     //18
//     it('Verify if the system trims spaces of the "Description" field in the "Archive" section', () => {
//         isTrimInput('@featured_keywords')
//     });
//     //19
//     it('Verify if the system keeps the input of the "Keywords" field in the "Archive page" section', () => {
//         isKeepInput('@featured_keywords')
//     });
//     //20
//     it('Verify if the system trims spaces of the "Keywords" field in the "Archive page" section', () => {
//         isTrimInput('@featured_keywords')
//     });
//     //21
//     it('Verify if the system keeps the input of the "Description" field in the "Artists list" section', () => {
//         isKeepInput('@featured_keywords')
//     });
//     //22
//     it('Verify if the system trims spaces of the "Description" field in the "Artists list" section', () => {
//         isTrimInput('@featured_keywords')
//     });
//     //23
//     it('Verify if the system keeps the input of the "Keywords" field in the "Artists list" section', () => {
//         isKeepInput('@featured_keywords')
//     });
//     //24
//     it('Verify if the system trims spaces of the "Keywords" field in the "Artists list" section', () => {
//         isTrimInput('@featured_keywords')
//     });
//     //25
//     it('Verify if the system keeps the input of the "Description" field in the "Blogs" section', () => {
//         isKeepInput('@featured_keywords')
//     });
//     //26
//     it('Verify if the system trims spaces of the "Description" field in the "Blogs" section', () => {
//         isTrimInput('@featured_keywords')
//     });
//     //27
//     it('Verify if the system keeps the input of the "Keywords" field in the "Blogs" section', () => {
//         isKeepInput('@featured_keywords')
//     });
//     //28
//     it('Verify if the system trims spaces of the "Keywords" field in the "Blogs" section', () => {
//         isTrimInput('@featured_keywords')
//     });
//     //29
//     it('Verify if the system keeps the input of the "Description" field in the "Events" section', () => {
//         isKeepInput('@featured_keywords')
//     });
//     //30
//     it('Verify if the system trims spaces of the "Description" field in the "Events" section', () => {
//         isTrimInput('@featured_keywords')
//     });
//     //31
//     it('Verify if the system keeps the input of the "Keywords" field in the "Events" section', () => {
//         isKeepInput('@featured_keywords')
//     });
//     //32
//     it('Verify if the system trims spaces of the "Keywords" field in the "Events" section', () => {
//         isTrimInput('@featured_keywords')
//     });


// });