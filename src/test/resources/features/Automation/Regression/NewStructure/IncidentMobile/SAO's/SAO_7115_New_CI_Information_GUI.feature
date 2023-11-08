@SAO_7115_2 @Incident_SAO

Feature: SAO-7115 - New CI Information GUI

  Scenario: SAO-7115 - New CI Information GUI

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
#    When user clicks on agent console create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    When user clicks on OP sweden checkbox under affected BU's
    And user enters "Test SAO-6737" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Test SAO-6737"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    When user adds below CI's to the ticket

    |CIs|
    |SE_AAA_AAA98SE|
    |SE_AAA_AAA99SE|
    |test          |

    And user clicks on Diagnosis tab
    Then user right clicks on CI "SE_AAA_AAA98SE" and selects "Show:CI Details"
    When user clicks manage my template cog button
    Then user validates CI details template window is opened
    When user clicks create my template button
    Then user should see use my template button is read only
    When user clicks create new section button
    And user enters section label as "Test"
    And user clicks create section save button
    Then user validates "Test" section is displayed
    When user clicks on test section
    And user clicks edit section button
    And user enters section label as "New Test Name"
    And user clicks edit section save button
    Then user validates "New Test Name" section is displayed
    When user selects "Notes" section
    And user clicks delete selected section button
    And user clicks delete section
    Then user validates "Notes" section is no longer displayed
    When user selects "New Test Name" section
    And user clicks section arrow up button
    Then "New Test Name" should be moved to order 4
    When user clicks section arrow down button
    Then "New Test Name" should be moved to order 5
    When user clicks add attribute button
    And user selects class as "BMC_BaseElement"
    And user enters attribute+ as "Account ID"
    And user clicks apply filter button
    Then user validates "Account ID" attribute is displayed
    When user clicks clear attribute search button
    Then user validates results have been cleared
    When user selects class as "BMC_BaseElement"
    And user enters attribute+ as "Account ID"
    And user clicks apply filter button
    And user selects "Account ID" in attribute search
    And user clicks save field to section button
    Then user validates "Account ID" label is displayed
    When user selects "Account ID" label
    And user clicks edit attribute button
    And user enters field label as "Test Label"
    And user clicks edit attribute save button
    Then user validates "Test Label" is displayed
    When user selects "Status" label
    And user clicks edit attribute button
    And user clicks show label checkbox
    And user clicks edit attribute save button
    Then user validates "Status" show label as ""
    When user selects "Name" label
    And user clicks delete attribute button
    And user clicks delete attribute second button
    Then user validates "Name" is no longer displayed
    When user selects "Category" label
    And user clicks attribute arrow up button
    Then "Category" should be moved to order 3
    When user clicks attribute arrow down button
    Then "Category" should be moved to order 4
    When user clicks on close CI details template window and CI details window
    And user right clicks on CI "SE_AAA_AAA98SE" and selects "Show:CI Details"
    Then user validates template as "Custom"



