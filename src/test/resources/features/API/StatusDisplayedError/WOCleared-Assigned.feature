@WOCleared-Assigned
  #Test Requires API created Work Order with status as cleared
Feature:  Validate Incorrect Status changes cant be made
  Scenario:  Validate Incorrect Status changes cant be made

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Work Order"
    And user enters ticket id as ""
    Then user should see work order
    And user validates ticket status as "Cleared"
    Then user validates other status options available as "Work In Progress:Cleared:Closed:(Clear)"
    And user validates "Assigned" is not an option

