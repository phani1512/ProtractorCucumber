Feature: Login
    Inorder to perform successful Login
    As a user
    I want to enter correct username and password
    Background:
        Given user navigates to Transportal website
        When user validates the home page Title

    Scenario Outline: Inorder to verify Login Transportal

        Then user enters "<username>" username
        Then user enters "<password>" password
        Then user should "<loginstatus>" successfully logged in

        Examples:
            | username | password | loginstatus |
            | Valid    | Valid    | be          |
            | Invalid  | Invalid  | not         |

