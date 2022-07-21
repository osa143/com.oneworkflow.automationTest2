@SAO-427-BR2430_CI_not_found_prompt_for_CI_Search_trouble @SAO-427 @other_trouble
  #passed
Feature: checking of bulk loading CI not found prompt for CI search
  Scenario: checking of bulk loading CI not found prompt for CI search

    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
#    When user clicks on create trouble event
    When user clicks on agent console create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on OP sweden checkbox under affected BU's
#    When user clicks on sweden checkbox under affected BU's
    And user enters "SAO-427 Test Bulk Loading CI not found Prompt" in Title field
    And user selects request type as "Event" on trouble event page
    And user enters description as "SAO-427 Test Bulk Loading CI not found Prompt"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    When user clicks on Diagnosis tab
    And user clicks on Add Bulk Import button
    And user switches to frame
    Then user should see bulk ci loading window
    And user validates "Impact Type*" is visible on bulk CI loading window tagname "label"
    And user validates "Category*" is visible on bulk CI loading window tagname "label"
    And user validates "Level*" is visible on bulk CI loading window tagname "label"
    And user validates "From*" is visible on bulk CI loading window tagname "label"
    And user validates "To+" is visible on bulk CI loading window tagname "label"
    And user validates "Ignore Duplicate CIs" is visible on bulk CI loading window tagname "label"
    And user validates "Upload File" is visible on bulk CI loading window tagname "label"
    And user validates "Manual Input" is visible on bulk CI loading window tagname "label"
    And user validates "Download File Template" is visible on bulk CI loading window tagname "label"
    And user validates "Upload Import File" is visible on bulk CI loading window tagname "div"
    And user validates Save is visible on bulk CI loading window
    And user validates Close is visible on bulk CI loading window
    When user clicks on Manual Input radio button
    And user selects impact level as "Degradation of Service"
    And user enters "abcdefghijklmnopqrstuvwxyz" in manual CI search box
    Then user clicks on save button under bulk import
    And first error message should display as "The manually identified CIs are now being processed..." on bulk ci window
    And second error message should display as "Please Check for the progress of this process in \"Show Bulk Import\". (ARNOTE 10000)" on bulk ci window
    When user clicks on Show Bulk Import button
    Then user switches to frame
    And user validates related jobs has 1 entry
    Then user clicks on "Related CIs" tab
    And user validates "Warning/Error Messages" as "No CI named 'abcdefghijklmnopqrstuvwxyz' was found!" in row 1
    And user validates "Status" as "With Warnings" in row 1
    Then user clicks on bulk loading close button





