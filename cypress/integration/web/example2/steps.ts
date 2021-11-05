import { Given, And, Then} from "cypress-cucumber-preprocessor/steps";

Given(
    'Se abre la pagina de prueba',
    () => {
        cy.visit('/')
});

Then(
    'Entramos a la sección 4',
    () => {
        //debugg solo con chorme con la interfaz de cypres('open')
        //cy.get('.devsite-tabs-wrapper > :nth-child(4) > .gc-analytics-event', {timeout: 4000}).debug().should('be.visible').click();
        cy.get('.devsite-tabs-wrapper > :nth-child(4) > .gc-analytics-event', {timeout: 4000}).should('be.visible').click();
        cy.wait(2000)
});

And(
    'Regresamos a la seccion 6',
    () => {
        cy.get('.devsite-tabs-wrapper > :nth-child(6) > .gc-analytics-event', {timeout: 4000}).should('be.visible').click();
});
