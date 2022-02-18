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


export const login = (email, password) => {
    cy.session([email, password], () => {
        cy.visit('/auth/sign-in');
        cy.get('[placeholder="Company Name"]').type('art');
        cy.get('[placeholder="E-Mail"]').type(email);
        cy.get('[placeholder="Password"]').type(password);
        cy.get('.primary-button').click();
        cy.url().should('contain', 'dashboard')
    })
}

export const loginCookie = (art) => {
    cy.session([art], () => {
        cy.setCookie('c_route', art);
        cy.setCookie('company_name', 'infinity')
        cy.setCookie('c_id', '373f64b6sadasd9123874bc225c443')
        cy.setCookie('theme', 'infinity')
        cy.setCookie('token', '77ef434c-5193-4d3d-9501-c4bc9ec16b83')
    })
}

export const loremIspum = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.`
