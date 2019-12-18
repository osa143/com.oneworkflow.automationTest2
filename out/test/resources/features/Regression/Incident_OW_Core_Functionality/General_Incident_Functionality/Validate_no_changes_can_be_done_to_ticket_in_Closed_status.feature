@Validate_no_changes_can_be_done_to_ticket_in_Closed_status @Incident @Trouble1
  #passed
  #keep an eye while running this test whether all the buttons are disabled and grayed out
  Feature: Validate no changes can be done to ticket in closed status
    Scenario: Validate no changes can be done to ticket in closed status

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case validate no changes can be done to a ticket in closed status" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case validate no changes can be done to a ticket in closed status"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user changes status to "Cleared" on trouble event page
      And user selects fault position as "N/A:N/A" on trouble event page
      And user selects cause as "N/A:N/A:N/A" on trouble event page
      And user selects action dropdown as "N/A:N/A" on trouble event page
      And user enters closure info as "Test Ticket"
      And user enters event end time as current time
      And user clicks on save button
      Then user validates ticket status as "Cleared"
      When user changes status to "Closed" on trouble event page
      And user clicks on save button
      Then user validates ticket status as "Closed"
      And user clicks on CTI details under sections
      And user clicks on location under sections
      And user clicks on owner under sections
      And user clicks on assignment under sections
      And user clicks on On Hold under sections
      And user clicks on vendor under sections
      And user clicks on root cause under sections
      And user clicks attachments under sections
      #Then user tries to Ack the ticket but its shouldn't allow
      And user validates all text area fields are readonly
      And user validates Affected BU's area is read only
      #And user validates add is disabled
      #And user validates Add is disabled
      #And user validates Open is disabled
      #And user validates Delete is disabled
      #And user validates Save is disabled
      Then user validates no timeline entries can be made
      When user clicks on Diagnosis tab
      Then user validates CI Search is disabled
      When user clicks on "Interested Parties" tab
#      And user validates Add under interested parties is disabled
#      And user validates Remove is disabled
#      And user validates Bulk Update is disabled
#      And user validates Add Email is disabled
      When user clicks on "Notifications" tab
      And user validates Method is readonly
      And user validates Sent To is readonly
      And user validates Subject is readonly
      And user validates Body is readonly
      #And user validates "Preview" is disabled
      #When user clicks on "Sent/Received" tab
      #And user validates "Reply" is disabled
      When user clicks on "Linked Items" tab
      And user validates Target Application is readonly
#      And user validates Link is disabled
#      And user validates Unlink is disabled
#      And user validates Create is disabled
      When user clicks on "Work Orders" tab
      And user validates Create From Ticket is not visible
      And user validates Create From Template is not visible
      When user clicks on "Alarms" tab
#      And user validates Detach&Create is disabled
#      And user validates Refresh Status is disabled
#      And user validates Terminate Alarm is disabled
      And user validates Refresh Status Time is readonly
      When user clicks on "Service Info" tab
#      And user validates Insert is disabled
      And user validates Enable is not visible
      And user validates Disable is not visible
