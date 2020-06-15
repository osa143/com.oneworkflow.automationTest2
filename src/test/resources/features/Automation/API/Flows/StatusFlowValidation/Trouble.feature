@TroubleStatusFlow
  #Need API Created Ticket
Feature: user validates status changes
  Scenario: user validates status changes

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Trouble Event"
    And user enters ticket id as ""
    Then user should see trouble ticket
    And user validates ticket status as "Assigned"
    Then user validates other status options available as "Assigned:Cleared:Pending:Withdrawn:(Clear)"
    When user clicks on Ack button
    Then user validates ticket status as "Work In Progress"
    Then user validates other status options available as "Cleared:Pending:Withdrawn:Work In Progress:(Clear)"
    When user changes status to "Pending"
    And user enters on hold to date 2 minutes in the future
    Then user enters reason field as "Waiting for Customer Info"
    And user clicks on save button
    Then user validates ticket status as "Pending"
    And user verifies status is read only
    Then user waits for 2 minutes
    And user clicks on ticket refresh button
    And user validates ticket status as "Work In Progress"
    Then change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Pending to Assigned."
    When user changes status to "Cleared" on trouble event page
    And user selects fault position as "N/A:N/A" on trouble event page
    And user selects cause as "N/A:N/A:N/A" on trouble event page
    And user selects action dropdown as "N/A:N/A" on trouble event page
    And user enters closure info as "Test Ticket"
    Then user enters event end time as current time
    And user clicks on save button
    Then user validates ticket status as "Cleared"
    And user validates other status options available as "Assigned:Cleared:Closed:Work In Progress:(Clear)"
    Then user changes status to "Work In Progress"
    And user clicks on save button
    Then user validates ticket status as "Work In Progress"
    And user validates other status options available as "Cleared:Pending:Withdrawn:Work In Progress:(Clear)"
    When user changes status to "Cleared" on trouble event page
    And user clicks on save button
    Then user validates ticket status as "Cleared"
    And user validates other status options available as "Assigned:Cleared:Closed:Work In Progress:(Clear)"
    And user validates "Pending" is not a valid status at this stage
    When user changes status to "Closed" on trouble event page second time
    And user clicks on save button
    Then user validates ticket status as "Closed"
    Then user verifies status is read only
