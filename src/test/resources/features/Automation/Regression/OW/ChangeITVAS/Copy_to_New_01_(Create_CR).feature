@Copy_to_New_01_Create_CR_test @OW_Change

Feature: Copy to New 01 (Create CR) [aR]

  Scenario: Copy to New 01 (Create CR) [aR]

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ow_basic2" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    When user selects request type as "Standard Change"
    And user selects template as "All:IT:Carrier:Telia Carrier UAT Changes"
    And user selects template as "(clear)"
    And user selects request type as "Normal Change"
    And user clicks on "Sweden" checkbox under affected BU's
    And user clicks on "Finland" checkbox under affected BU's
    And user clicks on "Denmark" checkbox under affected BU's
    And user clicks on "Estonia" checkbox under affected BU's
    And user clicks on "Lithuania" checkbox under affected BU's
    And user clicks on "Norway" checkbox under affected BU's
    And user clicks on "Telia Carrier" checkbox under affected BU's
    And user clicks on "Unknown" checkbox under affected BU's
    And user clicks on "Internal" checkbox under affected BU's
    And user enters "ow_basic2" in the change builder field
    And user enters as "Test" in service and customer impact
    And user enters request start time 24 hours ahead of current date
    And user enters request end time 48 hours ahead of current date
    And user enters impact duration as "5" minutes
    And user enters description as "Regression - Change Management Process"
    And user enters project code as "0123456789"
    And user clicks on vendor under sections
    And user enters onsite engineers as "Test Onsite Engineers"
    And user enters onsite contact as "Test Contact"
    When user clicks attachments under sections
    And  user adds attachment and verifies under "Internal"
      | summary   | description | fullFilePath       | attachments |
      | Test JPEG | Test JPEG   | attachement.doc.txt | 1          |
    And user clicks on save button
    When user adds CI "SE_RNC_AK1RU62" to change ticket with impact level "No Impact"
    Then CI should be listed and displayed under the Diagnosis tab
    When user adds CI "dummy" to change ticket with impact level "Degradation of Service"
    Then CI should be listed and displayed under the Diagnosis tab
    When user clicks on CTI details under sections
    And user clicks on location under sections
    #step15 and 16
    When user clicks on "Risk" tab
    And user gets current risk score value
    When user answers all risk questions as below
    And user selects answer as "Impact to other systems/technologies are unclear"
    And user selects answer as "No"
    And user selects answer as "Tested successfully, this is a pilot"
    And user selects answer as "Yes (outcome of the change can be instantly verified)"
    And user selects answer as "Yes"
    And user selects answer as "Simple"
    And user selects last answer as "Yes"
    Then user validates risk score gets updated
    When user clicks on linked items tab
    And user selects target application first dropdown as "OS3 - Operations"
    And user selects target application second dropdown as "Caused"
    Then user clicks on create button under linked items
    And user switches to window 2
    When user selects request type as "Event" on trouble event page
    Then user clicks save button
    And user switches to window 1
    When user clicks on "Work Orders" tab
    And user clicks on "Create From Ticket"
    And user switches to window 3
    And user selects request type as "Analysis" in work order page
    Then user clicks save button
    When user switches to window 1
    When user clicks on "Work Orders" tab
    Then user should see 1 work order listed under work order tab



