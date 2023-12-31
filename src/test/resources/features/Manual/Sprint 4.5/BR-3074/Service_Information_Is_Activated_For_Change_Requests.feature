@BR_3074
Feature: Service information activation for change requests
  In order to improve brand reputation and satisfy local regulation
  As a Change Manager
  I want customers and authorities to be notified of service affecting changes
  #Test requires us to check that service info is activated for all change types (test cases available)

  @BR_3074_Urgent_Change
  Scenario Outline: Service information is activated for urgent change request
##    Given 'Request Type' is 'Urgent'
##    And 'Estimated Impact' is 'Loss of Service' Or 'Estimated Impact' is 'Degradation of Service'
##    And 'Priority' is 'Critical' Or 'Priority' is 'Major'
##    When I change the 'Status' from 'Analysis' to 'Approval Requested'
##    Then 'Service Information' is 'Activated'

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    When user selects request type as "<RequestType>"
    Then user selects title as "Mobile:RAN NSN" on Change record page
    And user selects request category as "Cable splicing" on change record page
    And user enters description as "TEST TICKET PLEASE IGNORE - Automated Test for Urgent Major Critical (Internal Initiator)"
    And user enters reason field as "Regression"
    And user selects priority as "<Priority>"
    And user enters "CI B2" in the change builder field
    When user enters "Regression - Change Management Process" in the implementation field
    And user enters "Regression - Change Management Process" in the test plan field
    And user enters "Regression - Change Management Process" in the rollback field
    And user enters "Regression - Change Management Process" in the communication plan field
    And user enters "Regression - Change Management Process" in the ver of functionality field
    And user enters "Regression - Change Management Process" in the risk description field
    And user enters as "Test Data - Ignore Ticket" in service and customer impact
    #And user enters start time as 30 minutes fast from current sweden time
    #And user enters end time as 45 hours fast from current sweden time
    And user enters start time as 20 minutes fast from current sweden time
    And user enters end time as 30 minutes fast from current sweden time
    And user enters impact duration as "3" minutes
    And user selects estimated impact dropdown as "<EstimatedImpact>"
    And user clicks on save button
    When user clicks on Risk tab
    And user gets current risk score value
    When user answers all risk questions as below
    And user gets current risk score value
    When user answers all risk questions as below
    And user selects answer as "A. No"
    And user selects answer as "B. Impact to other systems/technologies are unclear!"
    And user selects answer as "A. High number of SLA customers."
    And user selects answer as "A. Yes"
    And user selects answer as "B. No"
    And user selects answer as "A. Yes (outcome of the Change can be instantly verified)"
    And user selects answer as "B. No"
    And user selects answer as "A. No"
    And user selects last answer as "A. No"
    And user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user switches to frame
    And CI search tab should be opened
    And user clicks on clear button
    And user enters "FI_Site_stenhaga" in location field
    Then user clicks on search button on CI search window
    And user selects a CI from list
    And user selects impact level as "Loss of Service"
    And user clicks on relate CI
    Then user closes warning message
    And user clicks on close button on CI search window
    And CI should be listed and displayed under the Diagnosis tab
    When user clicks on Send button
    Then user validates ticket status as "Assigned"
    When user clicks on Ack button
    Then user validates ticket status as "Analysis"
    When user changes status to "Approval Requested"
    And user clicks on save button
    Then user validates ticket status as "Approval Requested"
    When user clicks on "Service Info" tab
    Then Service Information should be Activated
    And timeline should updated for service info activation
    When user clicks on disable on service info
    Then timeline should be updated for service info deactivation

 Examples:
  |RequestType  |Priority|EstimatedImpact       |
  |Urgent Change|Critical|Degradation of Service|
#  |Urgent Change|Critical|Loss of Service       |
#  |Urgent Change|Major   |Degradation of Service|
#  |Urgent Change|Major   |Loss of Service       |

  @BR_3074_Normal_Change
  Scenario Outline: Service information is activated for normal change request
#    Given 'Request Type' is 'Normal'
#    And 'Estimated Impact' is 'Loss of Service' Or 'Estimated Impact' is 'Degradation of Service'
#    And 'Priority' is 'Critical' Or 'Priority' is 'Major'
#    When I change the 'Status' from 'Analysis' to 'Approval Requested'
#    Then 'Service Information' is 'Activated'

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    When user selects request type as "<RequestType>"
    Then user selects title as "Mobile:RAN NSN" on Change record page
    And user selects request category as "Cable splicing" on change record page
    And user enters description as "TEST TICKET PLEASE IGNORE - Automated Test for Urgent Major Critical (Internal Initiator)"
    And user enters reason field as "Regression"
    And user selects priority as "<Priority>"
    And user enters "CI B2" in the change builder field
    When user enters "Regression - Change Management Process" in the implementation field
    And user enters "Regression - Change Management Process" in the test plan field
    And user enters "Regression - Change Management Process" in the rollback field
    And user enters "Regression - Change Management Process" in the communication plan field
    And user enters "Regression - Change Management Process" in the ver of functionality field
    And user enters "Regression - Change Management Process" in the risk description field
    And user enters as "Test Data - Ignore Ticket" in service and customer impact
#    And user enters start time as 30 minutes fast from current sweden time
#    And user enters end time as 45 hours fast from current sweden time
    And user enters start time as 20 minutes fast from current sweden time
    And user enters end time as 30 minutes fast from current sweden time
    And user enters impact duration as "5" minutes
    And user selects estimated impact dropdown as "<EstimatedImpact>"
    And user clicks on save button
    When user clicks on Risk tab
    And user gets current risk score value
    When user answers all risk questions as below
    And user gets current risk score value
    When user answers all risk questions as below
    And user selects answer as "A. Impact to other systems/technologies are unclear"
    And user selects answer as "B. No"
    And user selects answer as "A. Change is a common change that has been implemented successfully many times"
    And user selects answer as "A. Yes (outcome of the Change can be instantly verified)"
    And user selects answer as "B. No"
    And user selects answer as "A. Highly complex"
    And user selects last answer as "A. No"
    And user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user switches to frame
    And CI search tab should be opened
    And user clicks on clear button
    And user selects Category as ""
    And user enters "FI_Site_stenhaga" in location field
    Then user clicks on search button on CI search window
    And user selects a CI from list
    And user selects impact level as "Loss of Service"
    And user clicks on relate CI
    And user closes warning message on CI search window
    Then user closes warning message
    And user clicks on close button on CI search window
    And CI should be listed and displayed under the Diagnosis tab
    When user clicks on Send button
    Then user validates ticket status as "Assigned"
    When user clicks on Ack button
    Then user validates ticket status as "Analysis"
    When user changes status to "Approval Requested"
    And user clicks on save button
    Then user validates ticket status as "Approval Requested"
    When user clicks on "Service Info" tab
    Then Service Information should be Activated
    And timeline should updated for service info activation
    When user clicks on disable on service info
    Then timeline should be updated for service info deactivation

    Examples:
      |RequestType  |Priority|EstimatedImpact       |
  |Normal Change|Critical|Degradation of Service|
#  |Normal Change|Critical|Loss of Service       |
#  |Normal Change|Major   |Degradation of Service|
#  |Normal Change|Major   |Loss of Service       |

   @BR-3074_Standard_change
  Scenario Outline: Service information is activated for Standard change request
#    Given 'Request Type' is 'Urgent'
#    And 'Estimated Impact' is 'Loss of Service' Or 'Estimated Impact' is 'Degradation of Service'
#    And 'Priority' is 'Critical' Or 'Priority' is 'Major'
#    When I change the 'Status' from 'Analysis' to 'Approval Requested'
#    Then 'Service Information' is 'Activated'
    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    And user clicks on norway checkbox under affected BU's
    When user selects request type as "Standard Change"
    And user selects template as "All:Mobile:RAN - Externals:RAN Swap"
    When user enters "CI B2" in the change builder field
    Then user enters description as "Regression - Change Management Process"
#    And user enters start time as 30 minutes fast from current sweden time
#    And user enters end time as 45 hours fast from current sweden time
     And user enters start time as 20 minutes fast from current sweden time
     And user enters end time as 30 minutes fast from current sweden time
    And user enters impact duration as "5" minutes
    And user selects estimated impact dropdown as "<estimatedImpact>"
    And user clicks on save button
    And user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user switches to frame
    And CI search tab should be opened
    And user clicks on clear button
    And user enters "FI_Site_stenhaga" in location field
    Then user clicks on search button on CI search window
    And user selects a CI from list
    And user selects impact level as "Loss of Service"
    And user clicks on relate CI
    Then user closes warning message
    And user clicks ok on CI window pop up
    And user clicks on close button on CI search window
    And CI should be listed and displayed under the Diagnosis tab
    When user clicks on Send button
    Then user validates ticket status as "Assigned"
    When user clicks on Ack button
    Then user validates ticket status as "Analysis"
    When user changes status to "Approval Requested"
    And user clicks on save button
    Then user validates ticket status as "Approval Requested"
    When user clicks on "Service Info" tab
    Then Service Information should be Activated
    And timeline should updated for service info activation
    When user clicks on disable on service info
    Then timeline should be updated for service info deactivation
    Examples:
      | estimatedImpact        |
      | Loss of Service        |
      #| Degradation of Service |
