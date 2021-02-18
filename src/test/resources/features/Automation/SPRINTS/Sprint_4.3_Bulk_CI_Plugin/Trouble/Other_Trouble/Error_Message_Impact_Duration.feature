@Bulk_Loading_Error_Message_Impact_Duration @SAO-427 @other_trouble
  #passed
Feature: checking of bulk loading error message impact duration for trouble ticket
  Scenario: user checks the impact duration message of bulk loading error

    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "SAO-427 Test Bulk Loading Error Message - Impact Duration" in Title field
    And user selects request type as "Event" on trouble event page
    And user enters description as "SAO-427 Test Bulk Loading Error Message - Impact Duration"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    When user clicks on Diagnosis tab
    And user clicks on Add Bulk Import button
    And user switches to frame
    Then user should see bulk ci loading window
    When user selects impact level as "No Impact"
    And user enters bulk ci impact from date as 72 hours in "MM/dd/YYYY HH:mm:ss" format
    And user enters bulk ci impact to date as 96 hours in "MM/dd/YYYY HH:mm:ss" format
    And user clicks on Manual Input radio button
    And user enters "One Workflow" in manual CI search box
    Then user clicks on save button under bulk import
    And user should see error message of "(300825): From date cannot be in the future for un-planned impact record." on bulk cI window
    And user should see error message of "To date cannot be in the future for un-planned impact record." on bulk cI window and clicks ok
    And user switches to frame
    And user enters bulk ci impact to date as 12 hours in "MM/dd/YYYY HH:mm:ss" format
    And user clicks on save button under bulk import
    Then user should see error message of "(300825): From date cannot be in the future for un-planned impact record." on bulk cI window
    And user should see error message of "Impact From date must be before Impact To date." on bulk cI window and clicks ok
    And user switches to frame
    And user enters bulk ci impact from date as 48 hours in "MM/dd/YYYY HH:mm:ss" format
    And user enters bulk ci impact to date as 24 hours in "MM/dd/YYYY HH:mm:ss" format
    And user clicks on save button under bulk import
    Then user should see error message of "Impact From date must be before Impact To date." on bulk cI window
    And user should see error message of "Impact From date must be before Impact To date." on bulk cI window and clicks ok
    And user switches to frame
    And user clears manual CI text field
    And user clicks on save button under bulk import
    Then user should see error message of "Please type in or paste the list of CIs you you want to relate. (ARERR 10000)" on bulk cI window
    And user should see error message of "Please type in or paste the list of CIs you you want to relate. (ARERR 10000)" on bulk cI window and clicks ok
    And user switches to frame
    And user clicks on bulk loading close button

