// /// <reference types="cypress" />

// const { login, loginCookie } = require("../utils/1.Global");
// import {
//     typeLongText, fillTitleField,
//     typeValidText,
//     uploadImage, fillDescriptionField,
//     selectDate, clickOnSaveButton, dragAndDrop
// } from '../utils/blog';
// import 'cypress-wait-until';

// describe('Blog Test Cases', () => {
//     beforeEach(() => {
//         // login('admin_infinity@gmail.com', 'asdfgA!123')
//         loginCookie('art')
//     });
//     it('Verify if the user redirects to the "Blog detail" page when clicking on the "Add new" button', () => {
//         cy.visit('/dashboard/web-pages/banners');
//         cy.get('.menu-trigger-btn-image').click({ force: true });
//         cy.contains('Web Content').click()
//         cy.contains('Blog').click()
//         cy.waitUntil(() => cy.url().should('contain', 'blogs'))
//         cy.contains('Add New').click()
//         cy.url().should('contain', 'create')
//     });
//     it('Verify if the system keeps the edited input of the "Title" field & Verify if the spaces of the "Title" field trims', () => {
//         const inputText = '   This is Text with spaces   '
//         cy.visit('/dashboard/web-pages/blogs/create');
//         fillTitleField(inputText)
//         uploadImage('Image.jpg')
//         fillDescriptionField('Some Text')
//         selectDate('January 14, 2021')
//         clickOnSaveButton()
//         cy.waitUntil(() => cy.url().should('include', '/dashboard/web-pages/blogs'))
//         cy.contains(inputText.trim()).should('exist').click({ force: true })
//         cy.get('.ant-input').invoke('val').then(text => {
//             expect(text).to.equal(text.trim())
//         })
//         cy.log(cy.get('.ant-input').invoke('val'))
//     });

//     it('Verify if the system keeps the edited input of the "Title" field', () => {
//         cy.visit('/dashboard/web-pages/blogs/create');
//         fillTitleField('inputText')
//         uploadImage('Image.jpg')
//         fillDescriptionField('Some Text')
//         selectDate('January 14, 2021')
//         clickOnSaveButton()
//     });

//     // TITLE FIELD
//     context('Title field', () => {
//         it('Verify if the required message of the "Title" field appears when clicking on the "Save" button, leaving the field blank', () => {
//             cy.visit('/dashboard/web-pages/blogs/create');
//             clickOnSaveButton()
//             cy.contains('Field is required').should('exist').and('be.visible')
//         });
//         it('Verify if the validation message of the "Title" field disappears when filling with characters less than max count', () => {
//             cy.visit('/dashboard/web-pages/blogs/create');
//             clickOnSaveButton()
//             fillTitleField('Some text')
//             cy.get('.ant-form-item-explain > .ng-tns-c154-0').should('not.exist')
//         });

//         describe('Fill input', () => {
//             beforeEach(() => {
//                 typeLongText()
//                 cy.contains('Max length is 80 characters').should('exist').and('be.visible')
//             });

//             it('Verify if the validation message of the "Title" field appears when filling with characters more than required', () => {
//                 cy.log('Everything is fine!');
//             });

//             it('Verify if the validation message of the "Title" field disappears when filling with characters less than max count', () => {
//                 cy.get('.ant-input').invoke('val').then(text => {
//                     expect(text).to.have.length(81)
//                     cy.get('.ant-input').type('{backspace}')
//                     cy.contains('Max length is 80 characters').should('not.exist')
//                 })
//             });
//         });

//         it('Verify if the required message of the "Title" field appears when removing the input of the "Title" field of a not created blog', () => {
//             cy.visit('/dashboard/web-pages/blogs/create');
//             fillTitleField('This is Text...')
//             cy.get('.ant-form-item-explain > .ng-tns-c154-0').should('not.exist')
//             cy.get('.ant-input').clear()
//             cy.get('.ant-form-item-explain > .ng-tns-c154-0').should('exist').and('be.visible')
//         });

//         it('Verify if the required message of the "Title" field remains when filling it only with spaces', () => {
//             cy.visit('/dashboard/web-pages/blogs/create');
//             cy.contains('Field is required').should('not.exist')
//             fillTitleField('     ')
//             cy.contains('Field is required').should('exist').and('be.visible')
//         });
//     });

//     // DESCRIPTION FIELD
//     context('Description field', () => {
//         it('Verify if the required message of the "Description" field appears when clicking on the "Save" button, leaving the field blank', () => {
//             cy.visit('/dashboard/web-pages/blogs/create');
//             clickOnSaveButton()
//             cy.get('.ant-form-item-explain > .ng-tns-c154-1').should('exist').and('be.visible')
//         });
//         it('Verify if the required message of the "Description" field disappears when filling the field', () => {
//             cy.visit('/dashboard/web-pages/blogs/create');
//             clickOnSaveButton()
//             fillDescriptionField('some text')
//             cy.get('.ant-form-item-explain > .ng-tns-c154-1').should('not.exist')
//         });
//     });

//     // PUBLISH DATE
//     context('Publish Date', () => {
//         it('Verify if the required message of the "Publish date" field appears when clicking on the "Save" button without selecting a date', () => {
//             cy.visit('/dashboard/web-pages/blogs/create');
//             clickOnSaveButton()
//             cy.get('.ant-form-item-explain > .ng-tns-c154-2').should('exist').and('be.visible')
//         });

//         it('Verify if the required message of the "Publish date" field disappears when selecting a date', () => {
//             cy.visit('/dashboard/web-pages/blogs/create');
//             clickOnSaveButton()
//             selectDate('February 14, 2022')
//             cy.get('.ant-form-item-explain > .ng-tns-c154-2').should('not.exist')
//         });

//         it('Verify if the calendar widget opens when clicking on the "Calendar" icon', () => {
//             cy.visit('/dashboard/web-pages/blogs/create');
//             // cy.get('.ant-layout-content').click();
//             cy.get('.ant-picker-input').click();
//             cy.get('.ant-picker-body').should('exist').and('be.visible')
//         });

//         it('Verify if the calendar widget opens when clicking on the "Publish date" field', () => {
//             cy.visit('/dashboard/web-pages/blogs/create');
//             cy.get('.ant-picker-input').click('right')
//             cy.get('.ant-picker-body').should('exist').and('be.visible')
//         });
        
//          // Should complete ↓↓↓
//         it('Verify if the "Publish date" field becomes blank when filling it with an invalid character', () => {
            
//         });

//     });

//     // IMAGE UPLOAD | DRAG AND DROP
//     context('Image Upload', () => {
//         it('Verify if the "Image upload" section border lines become red when clicking on the "Save" button without uploading an image', () => {
//             cy.visit('/dashboard/web-pages/blogs/create');
//             clickOnSaveButton()
//             cy.get('.ant-upload').should('have.css', 'border-color', 'rgb(255, 77, 79)');
//         });

//         it('Verify if the "Image upload" section border lines red color disappears when uploading an image', () => {
//             cy.visit('/dashboard/web-pages/blogs/create');
//             clickOnSaveButton()
//             uploadImage('image.jpg')
//             cy.get('.ant-upload').should('not.have.css', 'border-color', 'rgb(255, 77, 79)');
//         });
//         it('Verify if the selected image uploads with a drag and drop function', () => {
//             cy.visit('/dashboard/web-pages/blogs/create');
//             cy.get('.image-preview').should('not.exist')
//             dragAndDrop('picture.png')
//             cy.get('.image-preview').should('exist').and('be.visible')
//         });

//         it('Verify if an error appears when uploading a file with a wrong extension', () => {
//             cy.visit('/dashboard/web-pages/blogs/create');
//             uploadImage('image.txt')
//             cy.get('.image-preview').should('not.exist')
//         });
//         it('Verify if an error appears when drag and dropping a file with a wrong extension', () => {
//             cy.visit('/das9hboard/web-pages/blogs/create');
//             dragAndDrop('image.txt')
//             cy.contains('File extension is not allowed').should('be.visible')
//         });

//         // Should review ↓↓↓
//         it('Verify if it is possible to change the image of the not created blog ', () => {
//             cy.visit('/dashboard/web-pages/blogs/create');
//             dragAndDrop('image.jpg')
//             uploadImage('picture.png')
//             cy.get('.image-preview').find('img').should('have.attr', 'src')
//         });
//     });
// });