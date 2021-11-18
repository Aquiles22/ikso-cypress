import { Given, And, Then} from "cypress-cucumber-preprocessor/steps";
import { LoginPageWeb } from "../../pages/LoginPageWeb";
var loginPageWeb = new LoginPageWeb();

Given(
    'Se abre la pagina de prueba',
    () => {
        cy.visit('/')
});

Then(
    'Entramos a la sección 4',
    () => {
        //debugg solo con chorme con la interfaz de cypres('open')
        loginPageWeb.openSectionFour();
});

And(
    'Regresamos a la seccion 6',
    () => {
        loginPageWeb.openSectionSix();
});
