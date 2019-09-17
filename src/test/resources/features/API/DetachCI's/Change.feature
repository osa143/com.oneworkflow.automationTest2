@DetachCIsChange
  #Test requires API created ticket with CI's
Feature: user can detach CI's on API created ticket
  Scenario: user can detach CI's on API created ticket

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user enters ticket id as ""
    Then user should see change record ticket
    When user clicks on Diagnosis tab
    Then user validates CI's are listed
    And user right clicks on secondary CI and selects "Detach"
    And user closes warning message
    Then user validates CI gets removed from list

