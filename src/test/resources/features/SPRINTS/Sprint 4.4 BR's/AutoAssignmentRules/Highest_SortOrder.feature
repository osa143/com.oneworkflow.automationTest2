@Highest_SortOrder  @AutoAssignment

  ## Auto assignment Rules created in SIT Env ##

Feature: Incidents that meet the conditions of many assignment rules will use the one with the highest priority sort order value for assignment
  In order to more efficiently respond to incidents and provide a good customer service
  As an Incident Manager
  I want to have incidents automatically assigned to an appropriate support groups

  Background:
    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed

#  Scenario: When there are multiple assignment rules that match a manually created incident the one with the highest priority sort order value will be used for assignment
#    When user clicks on create trouble event
#    And user switches to window 1
#    Then trouble record form should appear in new tab
#    When user clicks on sweden checkbox under affected BU's
#    And user enters "Auto Assignment to Highest sort order" in Title field in Trouble event
#    And user selects request type as "Customer" on trouble event page
#    And user enters description as "Trouble event Auto Assignment to Highest Sort order"
#    And user clicks on save button
#    Then ticket should be created and status should be assigned
#    And there are multiple assignment rules that match the incident details
#    And the Assignment Profile is set based on the assignment rule with the highest priority sort order value
#    And user clicks on assignment under sections
#    And user should see assigned profile as "Mob PS Core WEST"
#    And user validates assignee is "Change_Automation_2"
#    And user logsOut and closes the browser
#    And user switches to window 0
#
#  Scenario: Work order
#    When user clicks on create work order
#    And user switches to window 1
#    Then work order form should appear in new tab
#    When user clicks on sweden checkbox under affected BU's
#    And user enters "WO Auto Assignment to Highest sort order" in Title field
#    And user selects request type as "Analysis" in work order page
#    And user enters description as " Work order Auto Assignment to Highest Sort order"
#    And user selects priority as "Info"
#    Then user clicks on save button
#    Then ticket should be created and status should be assigned
#    And there are multiple assignment rules that match the incident details
#    And the Assignment Profile is set based on the assignment rule with the highest priority sort order value
#    And user clicks on assignment under sections
#  #############################################################################
##    And user should see assigned profile as "Core Production-Common"
##    And user validates assignee is "Change_Automation_4"
# ##############################################################################
#    And user should see assigned profile as "Acc Mob RAN Ericsson-SE"
#    And user validates assignee is "anbl04"
#    And user logsOut and closes the browser
#    And user switches to window 0

#
#  Scenario: Known Error
#    Given user is on the OneWorkflow login page
#    And user logs in with valid username "frvi96_auto" and password as "Test@1234"
#    When user clicks on create known error
#    And user switches to window 1
#    Then known error form should appear in new tab
#    And user enters "KE Auto Assignment Highest sort order" in Title field
#    And user selects request type as "Rejected:Ticket Rejected" on known error page
#    And user enters description as "A known error Auto Assignment to Highest Sort order"
#    And user selects priority as "Minor"
#    And user clicks on save button
#    Then user validates ticket status as "Assigned"
#    And there are multiple assignment rules that match the incident details
#    And the Assignment Profile is set based on the assignment rule with the highest priority sort order value
#    And user clicks on assignment under sections
#    #################################################################
##    And user should see assigned profile as "IT CC"
##    And user validates assignee is "tvb913"
#    ###################################################################
#    And user should see assigned profile as "IT Cloud"
#    And user validates assignee is "bjkn03"
#    And user logsOut and closes the browser
#    And user switches to window 0


### Enable this Rule before test run for change ####
#  Scenario: Change Ticket
#
#    When user clicks on change record from agent console
#    And user switches to window 1
#    Then change record form should open in a new tab
#    When user clicks on sweden checkbox under affected BU's
#    And user selects request type as "Normal Change"
#    And user selects title as "IT:EE:Billing" on Change record page
#    And user selects request category as "Cable splicing" on change record page
#    And user enters description as "Change Record Auto Assignment to Highest Sort order"
#    And user enters reason field as "none"
#    And user selects priority as "Major"
#    And user enters "Problem initiator" in the change builder field
#    And user enters "New implementation" in the implementation field
#    And user enters "Yes" in the test plan field
#    And user enters "Not possible" in the rollback field
#    And user enters "Comm plan" in the communication plan field
#    And user enters "Not possible" in the ver of functionality field
#    And user enters "No Risk" in the risk description field
#    Then user clicks on "Schedule" tab
#    And user enters as "Test ticket no impact" in service and customer impact
#    And user enters start time as some minutes fast from current sweden time
#    And user enters Request End time as some minutes fast from request start time
#    And user enters impact duration as "6" minutes
#    And user selects estimated impact as "No Impact"
#    And user clicks on save button
#    Then user clicks on Risk tab
#    And user answers all risk questions as below
#    And user selects answer as "Impact to other systems/technologies are unclear"
#    And user selects answer as "No"
#    And user selects answer as "Tested succesfully, this is a pilot"
#    And user selects answer as "Yes (outcome of the change can be instantly verified)"
#    And user selects answer as "Yes"
#    And user selects answer as "Simple"
#    And user selects last answer as "No"
#    And user clicks on save button
#    Then user clicks on Diagnosis tab
#    And user clicks on CI search button
#    And user switches to frame
#    And user selects search for as "All CIs"
#    And  user enters "SE_CPE_FRECPE5" in name field
#    And user clicks on search button on CI search window
#    And user selects a CI from list
#    And user selects impact level as "No Impact"
#    And user clicks on relate CI
#    And user closes warning message
#    And user clicks on close button on CI search window
#    When user clicks on Send button
#    Then ticket should be created and status should be assigned
#    And there are multiple assignment rules that match the incident details
#    And the Assignment Profile is set based on the assignment rule with the highest priority sort order value
#    And user clicks on assignment under sections
#  ###########################################################################################
##    And user should see assigned profile as "Change Process Manager"
##    And user validates assignee is "pdr145"
#  ###########################################################################################
#    And user should see assigned profile as "DC CS Core (Voice)"
#    And user validates assignee is "DC CS Core (Voice)_auto"
#
#
#
#  Scenario: Problem Ticket
#    And user clicks on create problem record
#    And user switches to window 1
#    Then trouble record form should appear in new tab
#    When user clicks on sweden checkbox under affected BU's
#    When user enters "Functional Test3" in Title field
#    And user selects request type as "Access Networks:RAN Optimization" on Problem record page
#    And user enters description as " Problem Ticket Auto Assignment to Highest Sort order"
#    And user selects impact type as moderate:limited
#    And user selects urgency as low
#    And user clicks on save button
#    Then ticket should be created and status should be assigned
#    And there are multiple assignment rules that match the incident details
#    And the Assignment Profile is set based on the assignment rule with the highest priority sort order value
#    And user clicks on assignment under sections
#  ################################################################################
##    And user should see assigned profile as "Problem Manager"
##    And user validates assignee is "frvi96_auto"
#  ##################################################################################
#    And user should see assigned profile as "IT-Application-OSS"
#    And user validates assignee is "dano17"
#    And user logsOut and closes the browser
#    And user switches to window 0

######################################
#  External system can't do automation
######################################

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



