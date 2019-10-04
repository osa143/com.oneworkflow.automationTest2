@Bulk_Loading_Additional_Definitions_Default_Settings_Trouble @SAO-427 @other_trouble
  #passed
Feature: checking of bulk loading additional definitions default settings
  Scenario: user checks the bulk loading additional definitions default settings

    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "SAO-427 Test Bulk Loading Error Message - Structure" in Title field
    And user selects request type as "Event" on trouble event page
    And user enters description as "SAO-427 Test Bulk Loading Error Message - Structure"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    And user gets event start time value
    When user clicks on Diagnosis tab
    And user clicks on Add Bulk Import button
    And user switches to frame
    Then user should see bulk ci loading window
    And user validates "Impact Type*" is visible on bulk CI loading window tagname "label"
    And user validates Impact Type default value is "Un-Planned"
    Then multiple statuses "Planned:Un-Planned:(clear)" should be available in Impact Type dropdown
    And user validates "Category*" is visible on bulk CI loading window tagname "label"
    And user validates Category default value is "Actual"
    Then multiple statuses "Actual:Potential:(clear)" should be available in "Category*" dropdown
    And user validates "Level*" is visible on bulk CI loading window tagname "label"
    #Blank default value for level
    And user validates Level default value is ""
    And user validates "From*" is visible on bulk CI loading window tagname "label"
    Then user validates impact from time is same as event start time
    And user validates "To+" is visible on bulk CI loading window tagname "label"
    And user validates "Upload File" is visible on bulk CI loading window tagname "label"
    And user validates "Manual Input" is visible on bulk CI loading window tagname "label"
    And user validates "Ignore Duplicate CIs" is visible on bulk CI loading window tagname "label"
    Then user clicks on bulk loading close button







