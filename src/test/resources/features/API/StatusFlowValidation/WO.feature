@WOStatusFlow
  #Need API Created Ticket
Feature: user validates status changes
  Scenario: user validates status changes

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Work Order"
    And user enters ticket id as ""
    Then user should see trouble ticket
    And user validates ticket status as "New"
    Then user validates other status options available as "New:Pending:Withdrawn:(Clear)"
    When user changes status to "Pending"
    And user enters on hold to date as current date
    Then user enters reason field as "Waiting for Customer Info"
    And user clicks on save button
    Then error message should display as "Please ensure that the On Hold Until To Date is a future date. (ARERR 999001260)"
    And user enters on hold to date 5 minutes ahead of current time
    And user clicks on save button
    Then user validates ticket status as "Pending"
    And user validates status cant be changed
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from New to Pending. "
    And change should also be reflected in the timeline as "PENDING INFORMATION: 2019-09-11 21:46:00 UTC - Waiting for Customer Info" on row 2
    When user clicks on release button
    Then user validates ticket status as "New"
    When user selects assigned profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core WEST"
    And user selects assignee as "Change_Automation_1" by using alphabet "C" key up 1 times
    Then user clicks on save button
    And user validates ticket status as "Assigned"
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from New to Assigned. "
    When user changes status to "Pending"
    And user enters on hold to date 2 minutes ahead of current time
    Then user enters reason field as "Waiting for Customer Info"
    And user clicks on save button
    Then user validates ticket status as "Pending"
    And user validates status cant be changed
    Then user waits for 2 minutes
    And user clicks on ticket refresh button
    And user validates ticket status as "Assigned"
    Then change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Pending to Assigned."
    Then user validates other status options available as "Assigned:Pending:Withdrawn:(Clear)"
    When user clicks on Ack button
    Then user validates ticket status as "Work In Progress"
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Assigned to Work In Progress."
    Then user validates other status options available as "Pending:Work In Progress:Cleared:Withdrawn:(Clear)"
    When user changes status to "Cleared" on work order page
    And user selects completion code as "Success"
    And user clicks on "Schedule" tab
    And user enters schedule end as current date
    Then user clicks on save button
    Then user validates ticket status as "Cleared"
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Work In Progress to Cleared."
    Then user validates other status options available as "Work In Progress:Cleared:Closed:(Clear)"
    And user validates "Assigned" is not a valid status at this stage
    When user changes status to "Closed" on work order page
    And user clicks on save button
    Then user validates ticket status as "Closed"
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Cleared to Closed. "
    Then user validates status cant be changed


















