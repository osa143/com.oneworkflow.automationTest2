@SAO-3833

Feature: user validates limit on table actions
  Scenario: user validates limit on table actions

    #Scenario 1; Diagnosis Tab - All rows

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeInitiatorInternal1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    And user validates change builder button is present next to change builder field
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
    When user selects request type as "Normal Change"
    Then user selects title as "Mobile:CS Core (Voice)" on Change record page
    And user selects request category as "Software Installation" on change record page
    And user enters description as "TEST TICKET PLEASE IGNORE - Automated Test for Normal Change (Internal Initiator)"
    And user enters reason field as "Regression"And user selects priority as "Critical"
    And user enters "Privacy Data: Just Testing" in the change builder field
    Then user enters as "Test Data - Ignore Ticket" in service and customer impact
    And user enters start time as 24 hours fast from current sweden time
    And user enters end time as 28 hours fast from current sweden time
    And user enters impact duration as "45" minutes
    And user selects estimated impact dropdown as "Degradation of Service"
    And user clicks on save button
    And user waits
    Then user validates availability of tabs "Timeline:Diagnosis:Risk:Schedule:Interested Parties:Approval:Notifications:Linked Items:Work Orders:Service Level:Related Project:Service Info:Telenor" on change record page
    When user clicks on diagnosis tab
    And user searches for any relative CI's
    Given user selects at least one CI
    And user selects impact dropdown value
    And user clicks relate CI button
    Then user validates pop up shows with radio buttons for "selected rows" and "all rows"
    And user selects "All rows"
    And user validates all rows of CI's shown are appending to the ticket

    #Scenario2: Diagnosis Tab - selected Rows

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeInitiatorInternal1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    And user validates change builder button is present next to change builder field
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
    When user selects request type as "Normal Change"
    Then user selects title as "Mobile:CS Core (Voice)" on Change record page
    And user selects request category as "Software Installation" on change record page
    And user enters description as "TEST TICKET PLEASE IGNORE - Automated Test for Normal Change (Internal Initiator)"
    And user enters reason field as "Regression"
    And user selects priority as "Critical"
    And user enters "Privacy Data: Just Testing" in the change builder field
    Then user enters as "Test Data - Ignore Ticket" in service and customer impact
    And user enters start time as 24 hours fast from current sweden time
    And user enters end time as 28 hours fast from current sweden time
    And user enters impact duration as "45" minutes
    And user selects estimated impact dropdown as "Degradation of Service"
    And user clicks on save button
    And user waits
    Then user validates availability of tabs "Timeline:Diagnosis:Risk:Schedule:Interested Parties:Approval:Notifications:Linked Items:Work Orders:Service Level:Related Project:Service Info:Telenor" on change record page
    When user clicks on diagnosis tab
    And user searches for any relative CI's
    Given user selects at least one CI
    And user selects impact dropdown value
    And user clicks on relate CI
    And user validates only selected rows of CI's shown are appending to the ticket

    #Scenario 3: linked items - all rows

    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Test case SAO-3833 - Table actions limiting issue" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Test case SAO-3833 - Table actions limiting issue"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    When user clicks on "Linked Items" tab
    And user selects target application first dropdown as "OS3 - Operations"
    And user selects target application second dropdown as "Is related to"
    And user clicks on link button
    Then user switches to frame
    And user selects Category as "Access"
    And user selects Type as "WLAN"
    And user validates over 100 tickets are shown
    Then user selects all tickets checkbox
    And user clicks accept button
    And user validates all/selected rows pop up shows
    And user selects all rows option
    Then user clicks on accept button
    And user waits 30 secs
    And user validates over 100 tickets are shown under the linked items tab
    Then user selects all tickets checkbox
    And user clicks unlink button
    Then user validates all/selected rows pop up shows
    And user selects all rows option
    And user clicks accept button
    Then user validates no tickets are present under linked items tab

        #Scenario 4: linked items - selected rows

    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Test case SAO-3833 - Table actions limiting issue" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Test case SAO-3833 - Table actions limiting issue"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    When user clicks on "Linked Items" tab
    And user selects target application first dropdown as "OS3 - Operations"
    And user selects target application second dropdown as "Is related to"
    And user clicks on link button
    Then user switches to frame
    And user selects Category as "Access"
    And user selects Type as "WLAN"
    And user validates over 100 tickets are shown
    Then user selects 5 tickets
    Then user clicks on accept button
    And user waits 10 secs
    And user clicks on ticket refresh button
    Then user clicks on "Linked Items" tab
    And user validates only selected tickets are linked
    Then user selects all ticket checkboxes
    And user clicks unlink button
    And user waits 10 secs
    And user clicks on ticket refresh button
    Then user clicks on "Linked Items" tab
    Then user validates no tickets are present under linked items tab

