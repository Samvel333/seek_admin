/// <reference types="cypress" />

import { login, loginCookie, loremIspum } from "../utils/1.Global";
import { clickOnDeleteIcon, clickOnSaveButton, createBanner, createImageTypeBanner, deleteBanner, dragAndDrop, fillSubtitleField, fillTitleField, uploadFile } from "../utils/banners"
import '@testing-library/cypress/add-commands'
import 'cypress-wait-until'

describe('Banners Category Test Cases', () => {
    beforeEach(() => {
        // cy.signIn()  --  // Simple Login with UI
        // login('admin_infinity@gmail.com', 'asdfgA!123')  // Login with UI & Session (faster)
        loginCookie('art') // Login With Cookies & Session
        cy.visit('/dashboard/web-pages/banners');
        cy.get('.primary-button:eq(0)').click().should('exist').and('be.visible')
    });

    it('Verify if clicking on the "Add new" button a new banner rectangle appears', () => {
        cy.get('.cdk-drag-disabled > app-banner-item > .banner-item').should('be.visible')
    });

    it('Verify if a new banner rectangle appears when not saving the previous added one', () => {
        cy.get('.primary-button').should('be.disabled')
    });

    it('Verify if by default the  "Image banner" radiobutton is selected', () => {
        cy.get('.cdk-drag-disabled > app-banner-item > .banner-item').should('be.visible')
        cy.get('.ant-radio-wrapper-checked > .ant-radio > .ant-radio-input').should('be.checked')
    });

    context('Image Upload', () => {
        describe('Red border Color', () => {
            beforeEach(() => {
                cy.contains('Save').click({ force: true })
            });
            it('Verify if the "Image upload" section border line becomes red when clicking on the "Save" button without uploading an image', () => {
                cy.get('.ant-upload-btn').should('exist').and('have.css', 'border-color', 'rgb(255, 77, 79)');
            });
            it('Verify if the "Image upload" rectangle red border line disappears when uploading a file with a required extension', () => {
                cy.get('.ant-upload-btn').attachFile('image.jpg', { subjectType: 'drag-n-drop' })
                cy.get('.ant-upload-btn').should('not.exist')
            });
        });

        it('Verify if the selected image uploads with a drag and drop function', () => {
            dragAndDrop('image.jpg')
            cy.get('.cdk-drag-disabled > app-banner-item > .banner-item > .mb-lg-0 > .banner-image')
                .should('exist').and('be.visible')
        });

        it('Verify if an error appears when uploading a file with a wrong extension', () => {
            uploadFile('example.json')
            cy.contains('File extension is not allowed').should('be.visible')
        });
    });

    context('"Banner visibilty"', () => {
        it('Verify if by default visibility of the banner is turned on', () => {
            cy.get('.cdk-drag-disabled > app-banner-item > .banner-item').find('svg[data-icon="eye"]')
                .should('be.visible')
            cy.get('.cdk-drag-disabled > app-banner-item > .banner-item')
                .find('svg[data-icon="eye-invisible"]').should('not.exist')
        });
        it('Verify if the banner visibility changes when clicking on the "Visibility" icon', () => {
            cy.get('.cdk-drag-disabled > app-banner-item > .banner-item').find('svg[data-icon="eye"]:eq(0)')
                .click().then(
                    icon => { cy.wrap(icon).should('not.exist') }
                )
            cy.get('.cdk-drag-disabled > app-banner-item > .banner-item').find('svg[data-icon="eye-invisible"]:eq(0)')
                .should('exist').and('be.visible')
        });
        it('Verify if the existing banner visibility changes when clicking on the "Visibility" icon', () => {
            cy.get(('svg[data-icon="eye"]:eq(0)')).click().then(visibility => {
                expect(visibility).to.not.exist
            })
        });
    });

    context('"Title" field of banner image', () => {
        describe('Filling More Than Required Characters', () => {
            beforeEach(() => {
                fillTitleField(loremIspum)
            });
            it('Verify if the validation message of the "Title" filed appears when filling with characters more than required', () => {
                cy.get('.ant-form-item-explain').should('be.visible').
                    and('contain.text', 'Max count of characters is 80')
            });
            it('Verify if the validation message of the "Title" field disappears when filling with characters less than max count', () => {
                cy.get('@titleField').
                    type('{backspace}').then(title => {
                        expect(title).to.have.value(loremIspum.slice(0, -1))
                    })
                cy.get('.ant-form-item-explain').should('not.exist')
            });

            it('Verify if the validation message of the "Title" field disappears when removing the input of the "Title" field', () => {
                cy.get('@titleField').clear().then(title => {
                    expect(title).to.have.value('')
                });
                cy.get('.ant-form-item-explain').should('not.exist')
            });
        });

        it('Verify if the system trims spaces of the "Title" field input', () => {
            //Make new contex of maked banner , then put it to that cntx
        });
        it('Verify if the "Title" field becomes blank when removing the input of the field', () => {
            //Make new contex of maked banner , then put it to that cntx
        });
        it('Verify if the system keeps the input of the "Title" field ', () => {
            //Make new contex of maked banner , then put it to that cntx
        });
        it('Verify if the edited input of the "Title" field remains', () => {
            //Make new contex of maked banner , then put it to that cntx
        });
    });
    context('"Subtitle" field of banner image', () => {
        beforeEach(() => {
            fillSubtitleField(loremIspum)
        });
        it('Verify if the validation message of the "Subtitle" filed appears when filling with characters more than required', () => {
            cy.get('.ant-form-item-explain').should('be.visible').
                and('contain.text', 'Max count of characters is 80')
        });
        it('Verify if the validation message of the "Subtitle" field disappears when filling with characters less than max count', () => {
            cy.get('@subtitleField').
                type('{backspace}').then(subtitle => {
                    expect(subtitle).to.have.value(loremIspum.slice(0, -1))
                })
            cy.get('.ant-form-item-explain').should('not.exist')
        });

        it('Verify if the validation message of the "Subtitle" field disappears when removing the input of the "Subtitle" field', () => {
            cy.get('@subtitleField').clear().then(subtitle => {
                expect(subtitle).to.have.value('')
            });
            cy.get('.ant-form-item-explain').should('not.exist')
        });
    });

    //VIDEO 
    describe('Video Type', () => {
        beforeEach(() => {
            cy.get('[nzvalue="video"] > .ant-radio > .ant-radio-input').check().should('exist')
        });
        it('Verify if the user redirects to the "Video banner" section when selecting the "Video banner" radiobutton', () => {
            cy.get('input[formcontrolname="video_url"]').should('exist').and('be.visible');
        });
        context('Video URL', () => {
            it('Verify if the required message of the "Video URL" field appears when clicking on the "Add banner" button leaving field blank', () => {
                clickOnSaveButton()
                cy.get('.ant-form-item-explain').should('exist')
                    .and('contain.text', 'Field is required')
            });

            describe('Filling Valid Url', () => {
                beforeEach(() => {
                    const validUrl = 'https://www.youtube.com/watch?v=NJMW2app0VI'
                    cy.get('input[formcontrolname="video_url"]:eq(0)').type(validUrl).then(input => {
                        expect(input).to.have.value(validUrl)
                    })
                    clickOnSaveButton()
                });
                it('Verify if the main thumbnail of the video appears when filling the "Video URL" field with a valid URL', () => {
                    cy.get('.youtube-player').should('exist').and('be.visible')
                });
                it('Verify if the "Video URL" field becomes disable when saving the video banner', () => {
                    cy.get('input[formcontrolname="video_url"]:eq(1)').should('be.disabled')
                });
                it('Verify if an error appears when filling the "Video URL" field with an existing banner`s video URL', () => {
                    cy.get('.ant-form-item-explain').should('exist').and('contain.text', 'Video id must be unique.')
                });
            });
            it('Verify if an error appears when filling the "Video URL" field with an invalid URL', () => {
                cy.get('input[formcontrolname="video_url"]:eq(0)').type('invalid URL').should('exist')
                clickOnSaveButton()
                cy.get('input[formcontrolname="video_url"]:eq(0)').should('be.disabled')
                    .and('have.value', 'https://youtube.com/embed/null')
            });
        });
        context('"Title" field of video banner', () => {
            describe('Filling More Than Required Characters', () => {
                beforeEach(() => {
                    fillTitleField(loremIspum)
                });
                it('Verify if the validation message of the "Title" filed appears when filling with characters more than required', () => {
                    cy.get('.ant-form-item-explain').should('be.visible').
                        and('contain.text', 'Max count of characters is 80')
                });
                it('Verify if the validation message of the "Title" field disappears when filling with characters less than max count', () => {
                    cy.get('@titleField').
                        type('{backspace}').then(title => {
                            expect(title).to.have.value(loremIspum.slice(0, -1))
                        })
                    cy.get('.ant-form-item-explain').should('not.exist')
                });

                it('Verify if the validation message of the "Title" field disappears when removing the input of the "Title" field', () => {
                    cy.get('@titleField').clear().then(title => {
                        expect(title).to.have.value('')
                    });
                    cy.get('.ant-form-item-explain').should('not.exist')
                });
            });
        });
        context('"Subtitle" field of video banner', () => {
            beforeEach(() => {
                fillSubtitleField(loremIspum)
            });
            it('Verify if the validation message of the "Subtitle" filed appears when filling with characters more than required', () => {
                cy.get('.ant-form-item-explain').should('be.visible').
                    and('contain.text', 'Max count of characters is 80')
            });
            it('Verify if the validation message of the "Subtitle" field disappears when filling with characters less than max count', () => {
                cy.get('@subtitleField').
                    type('{backspace}').then(subtitle => {
                        expect(subtitle).to.have.value(loremIspum.slice(0, -1))
                    })
                cy.get('.ant-form-item-explain').should('not.exist')
            });

            it('Verify if the validation message of the "Subtitle" field disappears when removing the input of the "Subtitle" field', () => {
                cy.get('@subtitleField').clear().then(subtitle => {
                    expect(subtitle).to.have.value('')
                });
                cy.get('.ant-form-item-explain').should('not.exist')
            });
        });
        context('"Autoplay" switch icon', () => {
            it(`Verify if the "Autoplay" switch icon is turned off by default &
            Verify if the "Autoplay" switch icon is turnes on when clicking on the "Switch" icon`, () => {
                cy.get('.ant-switch-checked:first').should('not.exist')
                cy.get('.ant-switch:first').click({ force: true }).should('exist')
                cy.get('.ant-switch-checked:first').should('be.visible')
            });
            it('Verify if the existing video banner "Autoplay" switch icon turnes on when clicking on it', () => {
                const validUrl = 'https://www.youtube.com/watch?v=NJMW2app0VI'
                cy.get('input[formcontrolname="video_url"]:eq(0)').type(validUrl).then(input => {
                    expect(input).to.have.value(validUrl)
                })
                clickOnSaveButton()
                cy.get('.ant-switch:first').click({ force: true }).should('exist')
                cy.get('.ant-switch-checked:first').should('be.visible').click({force:true})
                cy.get('.ant-switch-checked:first').should('not.exist')
            });
        });
        context('"Show controls" switch icon', () => {
            it(`Verify if the "Show controls" switch icon is turned off by default &
            Verify if the "Show controls" switch icon is turnes on when clicking on the "Switch" icon`, () => {
                cy.get('.ant-switch-checked:first').should('not.exist')
                cy.get('.ant-switch:eq(1)').click({ force: true }).should('exist')
                cy.get('.ant-switch-checked:first').should('be.visible')
            });
            it('Verify if the existing video banner "Show controls" switch icon turnes off when clicking on it', () => {
                const validUrl = 'https://www.youtube.com/watch?v=NJMW2app0VI'
                cy.get('input[formcontrolname="video_url"]:eq(0)').type(validUrl).then(input => {
                    expect(input).to.have.value(validUrl)
                })
                clickOnSaveButton()
                cy.get('.ant-switch:eq(1)').click({ force: true }).should('exist')
                cy.get('.ant-switch-checked:eq(0)').should('be.visible').click({force:true})
                cy.get('.ant-switch-checked:eq(0)').should('not.exist')
            });
        });
    });
    // CREATED BANNER TESTS
    describe('Created banner`s test cases', () => {
        beforeEach(() => {
            createImageTypeBanner()
        });
        // afterEach(() => {
        //     deleteBanner()
        // });
        it.only('fgtr', () => {

        });
    });
});