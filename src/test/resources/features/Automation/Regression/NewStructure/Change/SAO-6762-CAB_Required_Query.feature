@6762

Feature: CAB Required Query
  Scenario: CAB Required Query

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    When user clicks save button
    Then error message should display as "Please fill up all the mandatory fields in the Details Panel to create a Change Request. (ARERR 10000)" on change record page
    When user enters "Regression - Change Management Process" in the implementation field
    And user enters "Regression - Change Management Process" in the test plan field
    And user enters "Regression - Change Management Process" in the rollback field
    And user enters "Regression - Change Management Process" in the communication plan field
    And user enters "Regression - Change Management Process" in the ver of functionality field
    And user enters "Regression - Change Management Process" in the risk description field
    When user clicks save button
    And multiple error messages should appear with red boarder around fields
    When user selects request type as "Urgent Change"
    Then user selects title as "Mobile:RAN NSN" on Change record page
    And user selects request category as "Software Installation" on change record page
    And user enters description as "TEST TICKET PLEASE IGNORE - Automated Test for Urgent Major Critical (Internal Initiator)"
    And user enters reason field as "Regression"
    And user validates change builder+ is mandatory
    And user selects priority as "Critical"
    And user enters "CI B2" in the change builder field
    And user enters as "Test Data - Ignore Ticket" in service and customer impact
    And user enters request start time 2 hours ahead of current date
    And user enters request end time 5 hours ahead of current date
    And user enters impact duration as "3" hours
    And user selects estimated impact dropdown as "Loss of Service"
    And user clicks on yes for CAB required
    And user clicks on save button
    Then user gets change ticket value
    When user switches to window 0
    And user selects "Changes Opened and with CAB Required" under all tickets
    Then user should see CAB required yes tickets
    And user selects "Changes Opened and without CAB Required" under all tickets
    Then user should see CAB required no tickets



