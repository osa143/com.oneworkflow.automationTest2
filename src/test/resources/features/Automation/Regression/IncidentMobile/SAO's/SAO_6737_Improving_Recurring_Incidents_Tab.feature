@SAO_6737 @Incident_SAO
Feature: SAO-6737 - Improving Recurring Incidents Tab(Name Subject to Change)
  Scenario: SAO-6737 - Improving Recurring Incidents Tab(Name Subject to Change)
    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Test SAO-6737" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Test SAO-6737"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    When user adds CI "SE_AAA_AAA98SE" to the ticket with impact level "No Impact"
    Then CI should be listed and displayed under the Diagnosis tab
    When user clicks on create work order
    And user switches to window 2
    Then work order form should appear in new tab
    When user enters title as "Test SAO-6737"
    Then user selects request type as "Analysis" in work order page
    And user enters description as "Testing"
    Then user selects priority as "Major"
    And user clicks save button
    When user adds CI "SE_AAA_AAA98SE" to the ticket with impact level "No Impact"
    Then CI should be listed and displayed under the Diagnosis tab
    When user clicks on create change record
    And user switches to window 3
    When user selects request type as "Standard Change"
    And user selects template as "All:IT:Carrier:Telia Carrier UAT Changes"
    When user enters "CI B2" in the change builder field
    And user enters as "Automation Test" in service and customer impact
    And user enters request start time as 30 minutes past from "Europe/London" timezone "MM/dd/yyyy HH:mm:ss" format
    And user enters request end time as 55 minutes past from "Europe/London" timezone "MM/dd/yyyy HH:mm:ss" format
    And user enters impact duration as "20" minutes
    Then user enters description as "Regression - Change Management Process"
    And user clicks on save button
    And user adds CI "SE_AAA_AAA98SE" to change ticket with impact level "No Impact"
    Then CI should be listed and displayed under the Diagnosis tab
    And user switches to window 1
    When user clicks on "Ticket Matching" tab
    And user clicks ticket matching refresh button
#    Then tickets with matching location should appear
    When user clicks on ticket matching incident checkbox
    And user clicks on ticket matching work order checkbox
    And user clicks ticket matching refresh button
    Then "CR" tickets should only be displayed under ticket matching
    When user clicks on ticket matching change checkbox
    And user clicks on ticket matching incident checkbox
    And user clicks ticket matching refresh button
    Then "OP" tickets should only be displayed under ticket matching
    When user clicks on ticket matching work order checkbox
    And user clicks on ticket matching incident checkbox
    And user clicks ticket matching refresh button
    Then "WO" tickets should only be displayed under ticket matching
    And user clicks on ticket matching incident checkbox
    And user clicks on ticket matching change checkbox
    When user enters closed within days as "0"
    And user clicks on ticket matching cleared checkbox
    And user clicks ticket matching refresh button
    Then "New:Assigned:Approved:Approval Requested:Scheduled:Analysis:Implementation:Work In Progress" tickets should be displayed under ticket matching
    When user clicks on ticket matching open checkbox
    And user clicks on ticket matching cleared checkbox
    And user clicks ticket matching refresh button
    Then "Cleared:Completed" tickets should be displayed under ticket matching
    When user clicks on ticket matching cleared checkbox
    And user enters closed within days as "30"
    And user clicks ticket matching refresh button
    Then "Closed" tickets should be displayed under ticket matching
    When user clicks on ticket matching open checkbox
    And user clicks on ticket matching cleared checkbox
    And user clicks on ticket matching title checkbox
    And user clicks ticket matching refresh button
    Then user validates tickets with the same title "Test SAO-6737" are displayed
    When user selects match by dropdown as "CI"
    And user clicks on ticket matching title checkbox
    And user clicks ticket matching refresh button
    Then user validates tickets with same CI "SE_AAA_AAA98SE" are displayed
    And user switches to window 2
    When user clicks on "Ticket Matching" tab
    And user clicks ticket matching refresh button
#    Then tickets with matching location should appear
    When user clicks on ticket matching incident checkbox
    And user clicks on ticket matching work order checkbox
    And user clicks ticket matching refresh button
    Then "CR" tickets should only be displayed under ticket matching
    When user clicks on ticket matching change checkbox
    And user clicks on ticket matching incident checkbox
    And user clicks ticket matching refresh button
    Then "OP" tickets should only be displayed under ticket matching
    When user clicks on ticket matching work order checkbox
    And user clicks on ticket matching incident checkbox
    And user clicks ticket matching refresh button
    Then "WO" tickets should only be displayed under ticket matching
    And user clicks on ticket matching incident checkbox
    And user clicks on ticket matching change checkbox
    When user enters closed within days as "0"
    And user clicks on ticket matching cleared checkbox
    And user clicks ticket matching refresh button
    Then "New:Assigned:Approved:Approval Requested:Scheduled:Analysis:Implementation:Work In Progress" tickets should be displayed under ticket matching
    When user clicks on ticket matching open checkbox
    And user clicks on ticket matching cleared checkbox
    And user clicks ticket matching refresh button
    Then "Cleared:Completed" tickets should be displayed under ticket matching
    When user clicks on ticket matching cleared checkbox
    And user enters closed within days as "30"
    And user clicks ticket matching refresh button
    Then "Closed" tickets should be displayed under ticket matching
    When user clicks on ticket matching open checkbox
    And user clicks on ticket matching cleared checkbox
    And user clicks on ticket matching title checkbox
    And user clicks ticket matching refresh button
    Then user validates tickets with the same title "Test SAO-6737" are displayed
    When user selects match by dropdown as "CI"
    And user clicks on ticket matching title checkbox
    And user clicks ticket matching refresh button
    Then user validates tickets with same CI "SE_AAA_AAA98SE" are displayed





