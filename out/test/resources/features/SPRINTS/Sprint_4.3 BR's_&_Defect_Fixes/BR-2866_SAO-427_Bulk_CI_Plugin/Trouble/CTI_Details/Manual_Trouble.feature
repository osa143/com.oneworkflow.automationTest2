@Manual_Bulk_Loading_CTI_Details_trouble @SAO-427
  #passed
Feature: checking of bulk loading CTI details
  Scenario: user checks the bulk loading CTI details

    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "SAO-427 Test Bulk Loading  CTI Details" in Title field
    And user selects request type as "Event" on trouble event page
    And user enters description as "SAO-427 Test Bulk Loading  CTI Details"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    When user clicks on Diagnosis tab
    And user clicks on Add Bulk Import button
    And user switches to frame
    Then user should see bulk ci loading window
    And user validates Impact Type default value is "Un-Planned"
    And user validates Category default value is "Actual"
    #Blank default value for level
    And user validates Level default value is ""
    Then user selects impact level as "No Impact"
    When user clicks on Manual Input radio button
    And user enters "One Workflow" in manual CI search box
    Then user clicks on save button under bulk import
    And first error message should display as "The manually identified CIs are now being processed..." on bulk ci window
    And second error message should display as "Please Check for the progress of this process in \"Show Bulk Import\". (ARNOTE 10000)" on bulk ci window
    And user waits 5 secs
    When user clicks on ticket refresh button
    When user clicks on CTI details under sections
    Then user validates Category as "Service"
    And user validates type as "Data Center"
    And user validates item as "Business Service"




