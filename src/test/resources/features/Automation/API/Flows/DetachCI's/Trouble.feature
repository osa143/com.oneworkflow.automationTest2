@DetachCIsTrouble
  #Test requires API created ticket with CI's
Feature: user can detach CI's on API created ticket
  Scenario: user can detach CI's on API created ticket

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Trouble Event"
    And user enters ticket id as ""
    Then user should see problem ticket
    When user clicks on Diagnosis tab
    Then user validates CI availability
    And user right clicks on secondary CI and selects "Detach"
    And user closes warning message
    Then user validates CI availability
