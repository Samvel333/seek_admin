import { loremIspum } from "./1.Global";

export function typeValidText() {
    cy.get('.ant-input').type('This is text')
}

export function typeLongText() {
    cy.visit('/dashboard/web-pages/blogs/create');
    cy.contains('Max length is 80 characters').should('not.exist')
    cy.waitUntil(() => cy.get('.ant-input').type(loremIspum))
}

export function fillTitleField(text) {
    cy.get('.ant-input').type(text)
}

export function uploadImage(fixture) {
    cy.get('.ant-upload-drag-container').attachFile(fixture, { force: true });
}

export function dragAndDrop(fixture) {
    cy.get('.ant-upload-drag-container').attachFile(fixture, { subjectType: 'drag-n-drop' }, { force: true });
}

export function fillDescriptionField(text) {
    cy.get('.fr-element').type(text)
}

export function selectDate(date) {
    cy.get('.ant-picker-input').type(`${date}{enter}`)
}

export function clickOnSaveButton() {
    cy.contains('Save').click({ force: true })
}

export function createNewBlog(params) {

}