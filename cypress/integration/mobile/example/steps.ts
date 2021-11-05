
import { Given, And, Then} from "cypress-cucumber-preprocessor/steps";

Given(
    'Se abre la pagina de prueba en {}',
    (size : any) => {
        //debugger
        if (String(size).includes('[')) {
            let pixels = size.replace('[', '').replace(']', '').split(",").map(Number);
            cy.viewport(pixels[0], pixels[1])
          } else {
            cy.viewport(size);
        }
        cy.visit('/')
});

Then(
    'Entramos al menu',
    () => {
        cy.get('button[id="devsite-hamburger-menu"]', {timeout: 4000}).should('be.visible').click();
        cy.wait(2000)
});

And(
    'Salimos del menu',
    () => {
        cy.get('button[id="devsite-close-nav"]', {timeout: 4000}).should('be.visible').click();
        cy.wait(2000)
});

And(
    'Visitamos la sección de Andoid',
    () => {
        cy.get(':nth-child(1) > .devsite-footer-sites-link', {timeout: 4000}).should('be.visible').focus().wait(2000).click()
        cy.wait(2000)
});