@CRImp-Pending
  #Test Requires an API ticket in Implementation State
Feature:  Validate Incorrect Status changes cant be made
  Scenario:  Validate Incorrect Status changes cant be made

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user enters ticket id as ""
    Then user should see change record ticket
    And user validates ticket status as "Implementation"
    And user validates other status options available as "Implementation;Completed;(Clear)"
    And user validates "Pending" isnt a status option
