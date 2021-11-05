@full @mobile
Feature: Flujo de prueba mobile                                                               
  Scenario Outline: Scenario Outline name: Se realiza una prueba mobile
    Given Se abre la pagina de prueba en <device>
    Then Entramos al menu
    And Salimos del menu
    And Visitamos la sección de Andoid
    Examples:
        | device        |
        | samsung-s10   |
        | iphone-6      |
        | [414, 896]    |
