@PBUnderInvestigation-Closed
  #Test Requires API created problem ticket with status as under investigation
Feature:  Validate Incorrect Status changes cant be made
  Scenario:  Validate Incorrect Status changes cant be made

    Given user is on the OneWorkflow login page
    When user logs in with valid username "frvi96_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Problem Record"
    And user enters ticket id as ""
    Then user should see problem ticket
    And user validates ticket status as "Under investigation"
    And user validates other status options available as "Pending:Under Investigation:Investigation Complete:(Clear)"
    Then user validates "Closed" is not an option
