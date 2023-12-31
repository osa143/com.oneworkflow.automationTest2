@SAO_106
  #need to run in UAT unless Temip is pointed to SIT
Feature: clearing of alarms within OW
  Scenario: user is able to clear alarms that have come from a FM system

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Trouble Event"
    And user switches to window 1
    Then trouble record form should appear in new tab
    And user enters ticket id as "OP-000000899303"
    Then trouble ticket should appear related to TeMIP
    When user changes status to "Cleared" on trouble event page
    And user clicks on save button
    Then an error message should appear: "Required field (without a default) not specified : Event End Time (ARERR 9424)"
    And an error message should appear: "Required field (without a default) not specified : Fault Position (ARERR 9424)"
    And an error message should appear: "Required field (without a default) not specified : Cause (ARERR 9424)"
    When user clicks on "Diagnosis" tab
    #rightclick and select dropdown
    And user right clicks on primary CI and selects "Impact:Clear All"
    And user clicks on yes button on warning window not in frame
    And user validates CI "Impact Status" is "Inactive"
    Then user enters event end time as current time
    And user selects fault position as "N/A:N/A"
    And user selects cause as "N/A:N/A:N/A"
    Then user clicks on save button
    #And user clicks on yes button on warning window not in frame
    When user clicks on "Alarms" tab
    And user clicks on all alarm checkbox
    And user clicks on terminate
    Then user clicks refresh button on alarm tab
    Then user should see alarm status as "Cleared"
    Then user changes status to "Closed"
    And user clicks on save button
    Then an error message should appear: "Required field (without a default) not specified : Closure Info (ARERR 9424)"
    And an error message should appear: "Required field (without a default) not specified : Action (ARERR 9424)"
    Then user selects action dropdown as "N/A:N/A"
    Then user enters closure info as "Test Ticket"
    And user clicks on save button
    Then ticket status should be closed
