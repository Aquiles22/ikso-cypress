 @full @API
 Feature: Pokemon GET
    Scenario: Fetch data for a pokemon using API and verify it
        Given As a user I want to execute Pokemon GET api for Pokemon "pikachu"
        Then Verify '@get_pokemon_data' response status code is 200
        And Verify response details for Pokemon "pikachu"
 
    Scenario: Fetch data for an invalid pokemon using API and verify it
        Given As a user I want to execute Pokemon GET api for Pokemon "doraemon"
        Then Verify '@get_pokemon_data' response status code is 202