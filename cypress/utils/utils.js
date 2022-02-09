export function save(){
    cy.get('.primary-button').click()
    cy.intercept('POST', 'https://stagingadmin.seekunique.co/dashboard/settings/meta-data').as('post')
    cy.wait('@post', { timeout: 10000 })
}

export function isTrimmed(input, text) {
    cy.get(input).then($input => expect($input).to.contain(text.trim()))
}

export function isContain(input, text) {
    cy.get(input).then($input => expect($input).to.contain(text))
}