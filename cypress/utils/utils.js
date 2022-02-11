export function save() {
    cy.get('.primary-button').click()
    cy.intercept('PUT', '**/update-meta-data').as('update')
    cy.wait('@update')
}

export function isTrimmed(input, text) {
    cy.get(input).should('contain.value', text.trim())
}

export function isContain(input, text) {
    cy.get(input).should('contain.value', text)
}

export function isKeepInput(field) {
    const inputTxt = 'This is Text...'
    cy.get(field).type(inputTxt)
    save()
    cy.reload()
    isContain(field, inputTxt)
}

export function isTrimInput(field) {
    const inputTxt = '   This is Text...   '
    cy.get(field).type(inputTxt)
    save()
    cy.reload()
    isTrimmed(field, inputTxt)
}

// export class Utils {
//     save() {
//         cy.get('.primary-button').click()
//         cy.intercept('PUT', '**/update-meta-data').as('update')
//         cy.wait('@update', { timeout: 10000 })
//     };

//     isTrimmed(input, text) {
//         cy.get(input).should('contain.value', text.trim())
//     }

//     isContain(input, text) {
//         cy.get(input).should('contain.value', text)
//     }

//     keepInput(field) {
//         const inputTxt = 'This is Text...'
//         cy.get(field).type(inputTxt)
//         save()
//         cy.reload()
//         isContain(field, inputTxt)
//     }
// }
