@OPCleared-Assigned
#Test Requires API created trouble ticket with status as Cleared
Feature:  Validate Incorrect Status changes cant be made
  Scenario:  Validate Incorrect Status changes cant be made

    Given user is on the OneWorkflow login page
    When user logs in with valid username "frvi96_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Trouble Event"
    And user enters ticket id as ""
    Then user should see trouble ticket
    And user validates ticket status as "Cleared"
    Then user validates other status options available as "Cleared:Pending:Withdrawn:Work In Progress:(Clear)"
    And user validates "Assigned" isnt a status option
