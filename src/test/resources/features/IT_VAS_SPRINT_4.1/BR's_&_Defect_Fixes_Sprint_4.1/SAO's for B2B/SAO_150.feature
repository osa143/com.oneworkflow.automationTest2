@SAO_150
  #Test requires ticket created from TeMIP - new one every time
  #need to add closure messages for both wo and op
  #Will only be able to do this with the B2B stub as WO needs to be closed by FS then we need to check we can close OP
Feature: WO not closed after receiving inbound event
  Scenario: user validates ticket gets closed after receiving inbound event

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Trouble Event"
    Then trouble record form should appear in new tab
    And user switches to window 1
    And user enters ticket id as ""
    Then trouble ticket should appear related to TeMIP
    When user clicks on work order tab
    And user clicks on create from ticket
    When user switches to window 2
    And user validates ticket status as "New"
    And user validates parent ticket id availability
    Then user clicks on save button on the problem form
    And user validates ticket status as "New"
    And user validates child ticket details are same as parent ticket
    Then user clicks on save button on the problem form
    When user clicks on assignment under sections
    And user clicks on apply B2B button
    #Assigned profile will depend on the TeMIP ticket - with the ticket i used its Eltel Sweden
    Then user should see assigned profile as "Eltel - FS - SE - B2B"
    When user selects SLA class as "10 Hours repair time"
    Then user validates estimated ready time is updated
    When user clicks on B2B dispatch tab
    And user enters header value as "Test"
    And user enters message value as "Automated Test"
    When user clicks on save button on the problem form
    And user clicks on outbound events refresh button
    And user clicks on inbound events refresh button
    Then user should see WFM ticket ID
    And user should see dispatch status as "Submitted"
    And user should see inbound acknowledgment event
    And user should see outbound assignment event
    Then user changes status to "Work In Progress"
    And user clicks on save button on the problem form
    Then user changes status to "Cleared"
    And user clicks on save button on the problem form
    Then user changes status to "Closed"
    And user clicks on save button on the problem form
    Then user validates ticket status as "Closed"
    When user clicks on B2B dispatch tab
    And user clicks on inbound events refresh button
    Then user validates inbound events have no errors
    When user switches to window 1
    And user changes status to "Cleared"
    Then user clicks on save button on the problem form
    Then user changes status to "Closed"
    And user clicks on save button on the problem form
    And user validates ticket status as "Closed"




