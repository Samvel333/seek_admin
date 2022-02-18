export function dragAndDrop(fixture){
    cy.get('.ant-upload-btn').attachFile(fixture, {subjectType:'drag-n-drop'})
}

export function uploadFile(fixture){
    cy.get('.ant-upload-btn').click().attachFile(fixture, {subjectType:'drag-n-drop'})
}

export function clickOnSaveButton(){
    cy.contains('Save').click({Force:true})
}

export function createImageTypeBanner() {
    dragAndDrop('picture.png')
    cy.get('textarea[formcontrolname="title"]:eq(0)').as('titleField').should('exist')
    cy.get('@titleField').type('   Text   ').should('exist')
    cy.get('textarea[formcontrolname="subtitle"]').first().as('subtitleField').should('exist')
    cy.get('@subtitleField').type('   Subtitle   ').should('exist');
    clickOnSaveButton()
}

export function fillTitleField(text){
    cy.get('textarea[formcontrolname="title"]:first').as('titleField')
    cy.get('@titleField').type(text);
}

export function fillSubtitleField(text) {
    cy.get('textarea[formcontrolname="subtitle"]:first').as('subtitleField')
    cy.get('@subtitleField').type(text);
}
export function clickOnDeleteIcon() {
    // cy.get('[data-icon="delete"]:eq(0)').should('be.visible').click({force:true})
    // cy.contains('Permanently delete this banner?').should('be.visible')
}

export function deleteBanner(){
    cy.get('.remove').first()
    .click({force:true}).should('exist')
    cy.get('.ant-popover-inner-content').submit().should('exist');
}
// export class Banners{
//     dragAndDrop
// }