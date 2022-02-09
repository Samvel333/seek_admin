/// <reference types="cypress" />

import 'cypress-wait-until';
import { save, isTrimmed, isContain } from '../utils/utils'

describe('Admin test Cases', () => {
    beforeEach(() => {
        cy.signIn()
        cy.intercept('PUT', '/api/bannernew/102').as('dashboard')
        cy.wait('@dashboard', { timeout: 10000 });
        cy.url().should('contain', 'dashboard')
        cy.get('.sider-menu').children().eq(4).click()
        cy.get('ul.ng-star-inserted').children().eq(14).as('meta-data')
        cy.get('@meta-data').click()
        cy.url().should('contain', 'meta-data');

        // aliases
        cy.get('textarea').first().as('description')
        cy.get('textarea').eq(1).as('keywords')
    });

    it('Verify if the system keeps the input of the "Description" field of the "Website" section', () => {
        const inputTxt = 'This is Text...'
        cy.get('@description').type(inputTxt)
        save()
        cy.reload()
        isContain('@description', inputTxt)
    });

    it('Verify if the system trims spaces of the "Description" field of the "Website" section', () => {
        const inputTxt = '   This is Text...   '
        cy.get('@description').type(inputTxt)
        save()
        cy.reload()
        isTrimmed('@description', inputTxt)
    });

    it('Verify if the system keeps the input of the "Keywords" field of the "Website" section', () => {
        const inputTxt = 'This is Text...'
        cy.get('@keywords').type(inputTxt)
        save()
        cy.reload()
        isContain('@keywords', inputTxt)
    });

    it('Verify if the system trims spaces of the "Keywords" field of the "Website" section', () => {
        const inputTxt = '   This is Text...   '
        cy.get('@keywords').type(inputTxt)
        save()
        cy.reload()
        isTrimmed('@keywords', inputTxt)
    });
});