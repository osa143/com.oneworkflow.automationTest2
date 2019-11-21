@Br3074
Feature: Service information activation for change requests
  In order to improve brand reputation and satisfy local regulation
  As a Change Manager
  I want customers and authorities to be notified of service affecting changes
  #Test requires us to check that service info is activated for all change types (test cases available)

  Scenario: Service information is activated for urgent change request
#    Given 'Request Type' is 'Urgent'
#    And 'Estimated Impact' is 'Loss of Service' Or 'Estimated Impact' is 'Degradation of Service'
#    And 'Priority' is 'Critical' Or 'Priority' is 'Major'
#    When I change the 'Status' from 'Analysis' to 'Approval Requested'
#    Then 'Service Information' is 'Activated'

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeInitiatorInternal1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    When user selects request type as "Urgent Change"
    Then user selects title as "Mobile:RAN NSN" on Change record page
    And user selects request category as "Cable splicing" on change record page
    And user enters description as "TEST TICKET PLEASE IGNORE - Automated Test for Urgent Major Critical (Internal Initiator)"
    And user enters reason field as "Regression"
    And user selects priority as "Critical"
    And user enters "CI B2" in the change builder field
    When user enters "Regression - Change Management Process" in the implementation field
    And user enters "Regression - Change Management Process" in the test plan field
    And user enters "Regression - Change Management Process" in the rollback field
    And user enters "Regression - Change Management Process" in the communication plan field
    And user enters "Regression - Change Management Process" in the ver of functionality field
    And user enters "Regression - Change Management Process" in the risk description field
    And user enters as "Test Data - Ignore Ticket" in service and customer impact
    And user enters start time as 30 minutes fast from current sweden time
    And user enters end time as 45 hours fast from current sweden time
    And user enters impact duration as "10" minutes
    And user selects estimated impact dropdown as "Loss of Service"
    And user enters as "Regression - Change Management Process" in service and customer impact
    And user clicks on save button
    And user waits
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
    And user clicks ok on CI window pop up
    And user clicks on close button on CI search window
    And CI should be listed and displayed under the Diagnosis tab
    When user clicks on Send button
    Then user validates ticket status as "Assigned"
    When user clicks on Ack button
    Then user validates ticket status as "Analysis"
#    Then user enters "EscalationManager1" in assignee
#    And user clicks on save button
    When user changes status to "Approval Requested"
    And user clicks on save button
    Then user validates ticket status as "Approval Requested"
    When user clicks on "Service Info" tab
    Then Service Information is should be Activated











  Scenario Outline: Service information is activated for Standard change request
#    Given 'Request Type' is 'Urgent'
#    And 'Estimated Impact' is 'Loss of Service' Or 'Estimated Impact' is 'Degradation of Service'
#    And 'Priority' is 'Critical' Or 'Priority' is 'Major'
#    When I change the 'Status' from 'Analysis' to 'Approval Requested'
#    Then 'Service Information' is 'Activated'

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeInitiator/Builder1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    When user selects request type as "Standard Change"
    And user validates "Template*" is mandatory
    And user selects template as "All::Mobile:RAN - Externals"
    And user clicks on norway checkbox under affected BU's
    When user enters "CI B2" in the change builder field
    And user enters start time as 30 minutes fast from current sweden time
    And user enters end time as 45 hours fast from current sweden time
    And user enters impact duration as "10" minutes
    Then user enters description as "Regression - Change Management Process"
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
      | Degradation of Service |










#  Scenario: Service information is activated for normal change request
#    Given 'Request Type' is 'Normal'
#    And 'Estimated Impact' is 'Loss of Service' Or 'Estimated Impact' is 'Degradation of Service'
#    And 'Priority' is 'Critical' Or 'Priority' is 'Major'
#    When I change the 'Status' from 'Analysis' to 'Approval Requested'
#    Then 'Service Information' is 'Activated'
#

