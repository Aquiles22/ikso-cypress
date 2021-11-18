export class LoginPageWeb {

    SECTION_4 = '.devsite-tabs-wrapper > :nth-child(4) > .gc-analytics-event';
    SECTION_6 = '.devsite-tabs-wrapper > :nth-child(6) > .gc-analytics-event';

    openSectionFour(){
        cy.get(this.SECTION_4, {timeout: 4000}).should('be.visible').click();
        cy.wait(2000)
    }

    openSectionSix(){
        cy.get(this.SECTION_6, {timeout: 4000}).should('be.visible').click();
    }
}