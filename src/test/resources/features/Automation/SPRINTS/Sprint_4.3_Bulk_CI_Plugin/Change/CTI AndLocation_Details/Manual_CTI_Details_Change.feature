@Manual_Bulk_Loading_CTI_Details_change @SAO-427
Feature: checking of bulk loading CTI details and location details
  Scenario: user checks the bulk loading CTI details and location details

    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    And user selects request type as "Normal Change"
    Then user selects title as "Mobile:CS Core (Voice)" on Change record page
    And user selects request category as "Software Installation" on change record page
    And user enters description as "TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading  CTI Details"
    And user enters reason field as "Regression"
    And user selects priority as "Critical"
    And user enters "Privacy Data: Just Testing" in the change builder field
    When user enters "Regression - Change Management Process" in the implementation field
    And user enters "Regression - Change Management Process" in the test plan field
    And user enters "Regression - Change Management Process" in the rollback field
    And user enters "Regression - Change Management Process" in the communication plan field
    And user enters "Regression - Change Management Process" in the ver of functionality field
    And user enters "Regression - Change Management Process" in the risk description field
    Then user enters as "Test Data - Ignore Ticket" in service and customer impact
    And user enters start time as 24 hours fast from current sweden time in "MM/dd/YYYY HH:mm:ss" format
    And user enters end time as 28 hours fast from current sweden time in "MM/dd/YYYY HH:mm:ss" format
    And user enters impact duration as "45" minutes
    And user selects estimated impact dropdown as "Degradation of Service"
    And user clicks on save button
    When user clicks on Diagnosis tab
    And user clicks on Add Bulk Import button
    And user switches to frame
    Then user should see bulk ci loading window
    And user validates Impact Type default value is "Planned"
    And user validates Category default value is "Actual"
    #Blank default value for level
    And user validates Level default value is ""
    Then user selects impact level as "No Impact"
    When user clicks on Manual Input radio button
    And user enters "SE_AP_alvesta-radmannen-ap1" in manual CI search box
    Then user clicks on save button under bulk import
    And first error message should display as "The manually identified CIs are now being processed..." on bulk ci window
    And second error message should display as "Please Check for the progress of this process in \"Show Bulk Import\". (ARNOTE 10000)" on bulk ci window
    And user waits 10 secs
    When user clicks on ticket refresh button
    And user clicks on Diagnosis tab
    When user clicks on CTI details under sections
    Then user validates Category as "Access"
    And user validates type as "WLAN"
    And user validates item as "AP"
    When user clicks on location under sections
    Then user validates location id as "ALV WLAN11"
    And user validates location name as "SE_Site_ALV WLAN11"
    And user validates region id as "08"
    And user validates region name as "KALMAR"
    And user validates latitude as "56.675540"
    And user validates longitude as "16.285040"
    And user validates x degree as "0"
    And user validates y degree as "0"
