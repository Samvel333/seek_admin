/// <reference types="cypress" />

describe('Banners Category Test Cases', () => {
    beforeEach(() => {
        cy.signIn()
    });

    describe('"Add new" button', () => {
        beforeEach(() => {
            cy.contains(' + Add New ').as('addNew')
            cy.get('@addNew').click()
        });
        it('Verify if clicking on the "Add new" button a new banner rectangle appears', () => {
            cy.get('.cdk-drag-disabled > app-banner-item > .banner-item').should('be.visible')
        });
    
        it('Verify if a new banner rectangle appears when not saving the previous added one', () => {
            cy.get('@addNew').should('be.disabled')
        });

        it('Verify if by default the  "Image banner" radiobutton is selected', () => {
            cy.get('.cdk-drag-disabled > app-banner-item > .banner-item').should('be.visible')
            cy.get('.ant-radio-wrapper-checked > .ant-radio > .ant-radio-input').should('be.checked')

        });

        // it('Verify if the "Image upload" section border line becomes red when clicking on the "Save" button without uploading an image', () => {
        //     cy.get('.ant-upload-drag-container').then(drag=>{
                
        //     }
        //     );
        // });
    });

    // describe('"Image banner" radiobutton', () => {
    //     beforeEach(() => {
    //         cy.contains(' + Add New ').as('addNew')
    //         cy.get('@addNew').click()
    //     });
    // });
    
});
