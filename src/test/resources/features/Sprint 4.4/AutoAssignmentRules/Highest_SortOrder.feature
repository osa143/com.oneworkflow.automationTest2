@Highest_SortOrder  @AutoAssignment

Feature: Incidents that meet the conditions of many assignment rules will use the one with the highest priority sort order value for assignment
  In order to more efficiently respond to incidents and provide a good customer service
  As an Incident Manager
  I want to have incidents automatically assigned to an appropriate support groups

  Background:
    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed

  Scenario: When there are multiple assignment rules that match a manually created incident the one with the highest priority sort order value will be used for assignment
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Functional Test" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Auto Assignment to Highest Sort order"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    And there are multiple assignment rules that match the incident details
    And the Assignment Profile is set based on the assignment rule with the highest priority sort order value
    And user clicks on assignment under sections
    And user should see assigned profile as "Mobile Services-DS"
    And user validates assignee is "alex00"

  Scenario: Work order
    When user clicks on create work order
    And user switches to window 1
    Then work order form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Functional Test1" in Title field
    And user selects request type as "Analysis" in work order page
    And user enters description as "Auto Assignment to Highest Sort order"
    And user selects priority as "Info"
    Then user clicks on save button
    Then ticket should be created and status should be assigned
    And there are multiple assignment rules that match the incident details
    And the Assignment Profile is set based on the assignment rule with the highest priority sort order value
    And user clicks on assignment under sections
    And user should see assigned profile as "Mobile Services-DS"
    And user validates assignee is "alex00"


  Scenario: Known Error
    When user clicks on create known error
    And user switches to window 3
    Then known error form should appear in new tab
    And user enters "Functional Test2" in Title field
    And user selects request type as "Rejected:Ticket Rejected" on known error page
    And user enters description as "A known error Auto Assignment to Highest Sort order"
    And user selects priority as "Minor"
    And user clicks on save button
    Then user validates ticket status as "Draft"
    And there are multiple assignment rules that match the incident details
    And the Assignment Profile is set based on the assignment rule with the highest priority sort order value
    And user clicks on assignment under sections
    And user should see assigned profile as "Mobile Services-DS"
    And user validates assignee is "alex00"

  Scenario: Problem Ticket
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    When user enters "Problem test3" in Title field
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Auto Assignment to Highest Sort order"
    And user clicks on save button
    And user gets ticket value
    Then ticket should be created and status should be assigned
    And there are multiple assignment rules that match the incident details
    And the Assignment Profile is set based on the assignment rule with the highest priority sort order value
    And user clicks on assignment under sections
    And user should see assigned profile as "Mobile Services-DS"
    And user validates assignee is "alex00"


  Scenario: Change Ticket
    When user clicks on change record from agent console
    And user switches to window 2
    Then change record form should open in a new tab
    When user clicks on sweden checkbox under affected BU's
    And user selects request type as "Normal Change"
    And user selects title as "IT:Mobile:Billing" on Change record page
    And user selects request category as "Cable splicing" on change record page
    And user enters description as "Correcting error"
    And user enters reason field as "none"
    And user selects priority as "Major"
    And user enters "Problem initiator" in the change builder field
    And user enters "New implementation" in the implementation field
    And user enters "Yes" in the test plan field
    And user enters "Not possible" in the rollback field
    And user enters "Comm plan" in the communication plan field
    And user enters "Not possible" in the ver of functionality field
    And user enters "No Risk" in the risk description field
    Then user clicks on "Schedule" tab
    And user enters as "Test ticket no impact" in service and customer impact
    And user enters start time as 10 minutes fast from current sweden time
    And user enters end time as 20 minutes fast from current sweden time
    And user enters impact duration as "5" minutes
    And user selects estimated impact as "No Impact"
    And user clicks on save button
    Then user clicks on Risk tab
    And user answers all risk questions as below
    And user selects answer as "Impact to other systems/technologies are unclear"
    And user selects answer as "No"
    And user selects answer as "Tested succesfully, this is a pilot"
    And user selects answer as "Yes (outcome of the change can be instantly verified)"
    And user selects answer as "Yes"
    And user selects answer as "Simple"
    And user selects last answer as "No"
    And user clicks on save button
    Then user clicks on Diagnosis tab
    And user clicks on CI search button
    And user switches to frame
    And user selects search for as "All CIs"
    And  user enters "SE_CPE_FRECPE5" in name field
    And user clicks on search button on CI search window
    And user selects a CI from list
    And user selects impact level as "No Impact"
    And user clicks on relate CI
    And user closes warning message
    And user clicks on close button on CI search window
    Then CI should be listed and displayed under the Diagnosis tab
    When user clicks on Send button
    Then ticket should be created and status should be assigned
    And there are multiple assignment rules that match the incident details
    And the Assignment Profile is set based on the assignment rule with the highest priority sort order value
    And user clicks on assignment under sections
    And user should see assigned profile as "Mobile Services-DS"
    And user validates assignee is "alex00"





  #External system can't do automation

#  Scenario: When there are multiple assignment rules that match an external system created incident the one with the highest priority sort order value will be used for assignment
#    Given there an incident has not been created yet
#    And there are many assignment rules configured
#    When a create incident message is received from another system
#    And the message is a functional escalation
#    And there are no errors
#    And the title field of the newly created incident matches many assignment rules
#    Then the incident is saved to the database
#    And the 'Status' is 'Assigned'
#    And the 'Assignment Profile' is set based on the 'Assignment Profile' of the assignment rule with the highest priority sort order value



