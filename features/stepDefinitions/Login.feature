Feature: Login
    Inorder to perform successful Login
    As a user
    I want to enter correct username and password
    Background:
        Given I go to Transportal website "https://transportal.azurewebsites.net/"
        When user validates the home page Title "Trans-Portal"

    Scenario Outline: Inorder to verify Login Transportal

        Then user enters "<username>" username
        Then user enters "<password>" password
        Then user should "<loginButton>" click on login

        Examples:
            | username | password | loginstatus |
            |  Quality.Assurance    | admin@12    | be          |
            | Quality.Assuran  | Invalid  | not         |

