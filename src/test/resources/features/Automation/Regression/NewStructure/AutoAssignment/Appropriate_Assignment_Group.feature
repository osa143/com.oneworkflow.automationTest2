@Auto_Assignment_For_Appropriate_Assignment_Group  @AutoAssignment

#Can't test for problem as they are auto assigning based on the request type rule

Feature: Incidents that match an assignment rule will be assigned to the appropriate assignment group
  In order to more efficiently respond to incidents and provide a good customer service
  As an Incident Manager
  I want to have incidents automatically assigned to an appropriate support groups

#
  Background:
    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed


# An assignment rule with EQUAL condition on title field that matches title field on manually created incidents will be used to assign the incident

 Scenario: Trouble Event
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "OP EQUAL Condition Auto Assignment Automation Test" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Trouble event Auto Assignment to Appropriate Group"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    And there are multiple assignment rules that match the incident details
    And the Assignment Profile is set based on the assignment rule with the highest priority sort order value
    And user clicks on assignment under sections
    And user should see assigned profile as "Mob PS Core WEST"
    And user validates assignee is "Change_Automation_1"
    And user logsOut and closes the browser
    And user switches to window 0

  Scenario: Work order
    When user clicks on create work order
    And user switches to window 1
    Then work order form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "WO EQUAL Condition Auto Assignment Automation Test" in Title field
    And user selects request type as "Analysis" in work order page
    And user enters description as " Work order Auto Assignment Test"
    And user selects priority as "Info"
    Then user clicks on save button
    Then ticket should be created and status should be assigned
    And there are multiple assignment rules that match the incident details
    And the Assignment Profile is set based on the assignment rule with the highest priority sort order value
    And user clicks on assignment under sections
  ##########################################################################
    And user should see assigned profile as "OSS Distribution-Common"
    And user validates assignee is "jeer05"
  ###########################################################################
    And user should see assigned profile as "OSS CGI"
    And user validates assignee is "josj17"
    And user logsOut and closes the browser
    And user switches to window 0


  Scenario: Known Error
    Given user is on the OneWorkflow login page
    And user logs in with valid username "frvi96_auto" and password as "Test@1234"
    When user clicks on create known error
    And user switches to window 1
    Then known error form should appear in new tab
    And user enters "KE EQUAL Condition Auto Assignment Automation Test" in Title field
    And user selects request type as "Rejected:Ticket Rejected" on known error page
    And user enters description as "A known error Auto Assignment Test"
    And user selects priority as "Minor"
    And user clicks on save button
    Then user validates ticket status as "Assigned"
    And there are multiple assignment rules that match the incident details
    And the Assignment Profile is set based on the assignment rule with the highest priority sort order value
    And user clicks on assignment under sections
   #############################################################
    And user should see assigned profile as "SOC-Common-L1"
    And user validates assignee is "ieg961"
   #############################################################

   And user should see assigned profile as "Billing"
    And user validates assignee is "eros10"
    And user logsOut and closes the browser
    And user switches to window 0

  Scenario: Change Ticket
    When user clicks on change record from agent console
    And user switches to window 1
    Then change record form should open in a new tab
    When user clicks on sweden checkbox under affected BU's
    And user selects request type as "Normal Change"
    And user selects title as "Mobile:IMS Core" on Change record page
    And user selects request category as "Cable splicing" on change record page
    And user enters description as "Change Record Auto Assignment Test"
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
    And user enters start time as some minutes fast from current sweden time
    And user enters Request End time as some minutes fast from request start time
    And user enters impact duration as "6" minutes
    And user selects estimated impact as "No Impact"
    And user clicks on save button
    Then user clicks on Risk tab
    And user answers all risk questions as below
    And user selects answer as "Impact to other systems/technologies are unclear"
    And user selects answer as "No"
    And user selects answer as "Tested successfully, this is a pilot"
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
    When user clicks on Send button
    Then ticket should be created and status should be assigned
    And there are multiple assignment rules that match the incident details
    And the Assignment Profile is set based on the assignment rule with the highest priority sort order value
    And user clicks on assignment under sections
    And user should see assigned profile as "DC Billing"
    And user validates assignee is "andmal"



###########################################################################################################################################################
 # An assignment rule with LIKE condition on title field that matches part of title field on manually created incidents will be used to assign the incident
#############################################################################################################################################################

 Scenario: Trouble Event
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "This ticket should be auto assigned to Auto Assignment SIT Rule" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Trouble event Auto Assignment to Appropriate Group"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    And there are multiple assignment rules that match the incident details
    And the Assignment Profile is set based on the assignment rule with the highest priority sort order value
    And user clicks on assignment under sections
    And user should see assigned profile as "Amdocs-DK"
    And user validates assignee is "aspa05"
    And user logsOut and closes the browser
    And user switches to window 0

  Scenario: Work order
    When user clicks on create work order
    And user switches to window 1
    Then work order form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "This ticket should be auto assigned to WO Auto Assignment SIT Rule" in Title field
    And user selects request type as "Analysis" in work order page
    And user enters description as " Work order Auto Assignment Test"
    And user selects priority as "Info"
    Then user clicks on save button
    Then ticket should be created and status should be assigned
    And there are multiple assignment rules that match the incident details
    And the Assignment Profile is set based on the assignment rule with the highest priority sort order value
    And user clicks on assignment under sections
    And user should see assigned profile as "RAN Ericsson NEMS-Common"
    And user validates assignee is "miik00"
    And user logsOut and closes the browser
    And user switches to window 0


  Scenario: Known Error
    Given user is on the OneWorkflow login page
    And user logs in with valid username "frvi96_auto" and password as "Test@1234"
    When user clicks on create known error
    And user switches to window 1
    Then known error form should appear in new tab
    And user enters "This ticket should be auto assigned to KE Auto" in Title field
    And user selects request type as "Rejected:Ticket Rejected" on known error page
    And user enters description as "A known error Auto Assignment Test"
    And user selects priority as "Minor"
    And user clicks on save button
    Then user validates ticket status as "Assigned"
    And there are multiple assignment rules that match the incident details
    And the Assignment Profile is set based on the assignment rule with the highest priority sort order value
    And user clicks on assignment under sections
    And user should see assigned profile as "DC CS Core (Voice)"
    And user validates assignee is "tompoh"
    And user logsOut and closes the browser
    And user switches to window 0

  Scenario: Change Ticket
    When user clicks on change record from agent console
    And user switches to window 1
    Then change record form should open in a new tab
    When user clicks on sweden checkbox under affected BU's
    And user selects request type as "Normal Change"
    And user selects title as "IT:Group:SEO:VAS Application Services" on Change record page
    And user selects request category as "Cable splicing" on change record page
    And user enters description as "Change Record Auto Assignment Test"
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
    And user enters start time as some minutes fast from current sweden time
    And user enters Request End time as some minutes fast from request start time
    And user enters impact duration as "5" minutes
    And user selects estimated impact as "No Impact"
    And user clicks on save button
    Then user clicks on Risk tab
    And user answers all risk questions as below
    And user selects answer as "Impact to other systems/technologies are unclear"
    And user selects answer as "No"
    And user selects answer as "Tested successfully, this is a pilot"
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
    When user clicks on Send button
    Then ticket should be created and status should be assigned
    And there are multiple assignment rules that match the incident details
    And the Assignment Profile is set based on the assignment rule with the highest priority sort order value
    And user clicks on assignment under sections
    And user should see assigned profile as "CAB"
    And user validates assignee is "juniksa1"


  Scenario: Problem Ticket
    And user clicks on create problem record
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    When user enters "This ticket should be auto assigned to PB Auto Assignment LIKE Condition Automation Test Rule" in Title field
    And user selects request type as "Access Networks:RAN Optimization" on Problem record page
    And user enters description as "Problem Ticket Auto Assignment Test"
    And user selects impact type as moderate:limited
    And user selects urgency as low
    And user clicks on save button
    Then ticket should be created and status should be assigned
    And there are multiple assignment rules that match the incident details
    And the Assignment Profile is set based on the assignment rule with the highest priority sort order value
    And user clicks on assignment under sections
    And user should see assigned profile as "OSS Workflow Development"
    And user validates assignee is "scc223"
    And user logsOut and closes the browser
    And user switches to window 0

  Scenario: An assignment rule with EQUAL condition on title field that matches title field on manually created incidents will be used to assign the incident
    Given I am on the create incident screen
    And all mandatory information has been populated including the title field
    And there is an existing active assignment rule with an EQUAL condition on the title field that is equal to the title on the incident
    When I click the 'Save' button
    Then the incident is saved to the database
    And the 'Status' is 'Assigned'
    And the 'Assignment Profile' is set based on the 'Assignment Profile' of the matching assignment rule

  Scenario: An assignment rule with EQUAL condition on title field that matches title field on external system created incidents will be used to assign the incident
    Given there an incident has not been created yet
    And there is an existing active assignment rule with an EQUAL condition on the title field
    When a create incident message is received from another system
    And the message is a functional escalation
    And there are no errors
    And the title field of the newly created incident is equal to the title field on an assignment rule
    Then the incident is saved to the database
    And the 'Status' is 'Assigned'
    And the 'Assignment Profile' is set based on the 'Assignment Profile' of the matching assignment rule

  Scenario: An assignment rule with LIKE condition on title field that matches part of title field on manually created incidents will be used to assign the incident
    Given I am on the create incident screen
    And all mandatory information has been populated including the title field
    And there is an existing active assignment rule with a LIKE condition on the title field that matches part of the title on the incident
    When I click the 'Save' button
    Then the incident is saved to the database
    And the 'Status' is 'Assigned'
    And the 'Assignment Profile' is set based on the 'Assignment Profile' of the matching assignment rule

  Scenario: An assignment rule with LIKE condition on title field that matches part of title field on external system created incidents will be used to assign the incident
    Given there an incident has not been created yet
    And there is an existing active assignment rule with a LIKE condition on the title field
    When a create incident message is received from another system
    And the message is a functional escalation
    And there are no errors
    And part of the title field of the newly created incident matches the title field on an assignment rule
    Then the incident is saved to the database
    And the 'Status' is 'Assigned'
    And the 'Assignment Profile' is set based on the 'Assignment Profile' of the matching assignment rule

  Scenario: When no matching assignment rules exist then manually created incidents will not be automatically assigned
    Given I am on the create incident screen
    And all mandatory information has been populated including the title field
    And there are no assignment rules that should match based on the title field
    When I click the 'Save' button
    Then the incident is saved to the database
    And the 'Status' is 'New'
    And the 'Assignment Profile' is empty

  Scenario: When no matching assignment rules exist then external system created incidents will not be automatically assigned
    Given there an incident has not been created yet
    When a create incident message is received from another system
    And the message is a functional escalation
    And there are no errors
    And there are no assignment rules that should match based on the title field
    Then the incident is saved to the database
    And the 'Status' is 'New'
    And the 'Assignment Profile' is empty





