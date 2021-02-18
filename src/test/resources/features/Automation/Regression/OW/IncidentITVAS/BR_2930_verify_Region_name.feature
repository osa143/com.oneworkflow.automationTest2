@BR_2930_verify_Region_name @OW_Incident
Feature: BR-2930 - verify Region name

  Scenario: BR-2930 - verify Region name

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Verify Region name test" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Verify Region name test"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    When user adds CI "SE_eNodeB_Snuggtaskeberg" to the ticket
    And user clicks on Diagnosis tab
    And user right clicks on CI "SE_eNodeB_Snuggtaskeberg" and selects "Show:CI Details"
    And user switches to frame
    Then user validates region name as "VÄSTERNORRLAND"
    When user switches to window 0
    When user sets the preferences under the agent console as "Add Column:Region Name"
    Then "Region Name" column within agent console should be displayed
    And user validates "Region Name" column is filled with correct information from ticket as "VÄSTERNORRLAND"


