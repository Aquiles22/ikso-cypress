export class LoginPageMobile {
    
    HAMBURGER_MENU = 'button[id="devsite-hamburger-menu"]';
    CLOSE_NAV = 'button[id="devsite-close-nav"]';
    DIV_ANDROID = ':nth-child(1) > .devsite-footer-sites-link';

    openHamburgerMenu(){
        cy.get(this.HAMBURGER_MENU, {timeout: 4000}).should('be.visible').click();
        cy.wait(2000)
    }

    closeNav(){
        cy.get(this.CLOSE_NAV, {timeout: 4000}).should('be.visible').click();
        cy.wait(2000)
    }

    openAndroidLink(){
        cy.get(this.DIV_ANDROID, {timeout: 4000}).should('be.visible').focus().wait(2000).click()
        cy.wait(2000)
    }
}