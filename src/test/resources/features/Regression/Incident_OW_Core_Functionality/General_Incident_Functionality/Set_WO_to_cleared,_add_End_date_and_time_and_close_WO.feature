@Set_WO_to_cleared_add_End_date_and_time_and_close_WO @Incident
  #passed
Feature: Work order closure
  Scenario: user can manually close a Work order ticket

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create work order
    And user switches to window 1
    Then work order form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "Test case close work order" in Title field
    And user selects request type as "Analysis" in work order page
    And user enters description as "Test case set WO to cleared, add end date and time and close"
    And user selects priority as "Info"
    Then user clicks on save button
    When user selects assigned profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core WEST"
    And user selects assignee as "Change_Automation_1" by using alphabet "C" key up 0 times
    Then user clicks on save button
    And user clicks on Ack button
    Then user validates ticket status as "Work In Progress"
    When user changes status to "Cleared"
    And user selects completion code as "Success"
    And user clicks on "Schedule" tab
    And user enters schedule end as current date
    Then user clicks on save button
    When user changes status to "Closed"
    And user clicks on save button
    Then user validates ticket status as "Closed"


