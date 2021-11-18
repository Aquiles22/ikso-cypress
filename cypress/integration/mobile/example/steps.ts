import { Given, And, Then} from "cypress-cucumber-preprocessor/steps";
import { LoginPageMobile } from "../../pages/LoginPageMobile";

const loginPageMobile = new LoginPageMobile();

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
        loginPageMobile.openHamburgerMenu();
});

And(
    'Salimos del menu',
    () => {
        loginPageMobile.closeNav();
});

And(
    'Visitamos la sección de Andoid',
    () => {
        loginPageMobile.openAndroidLink();
});