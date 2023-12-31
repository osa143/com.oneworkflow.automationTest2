@05.03  @Incident1 @05
  #passed
  Feature: Service restored date and time field is mandatory before a ticket can be closed
    Scenario: Service restored date and time field is mandatory before a ticket can be closed

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case 05.03 Event End Time" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case 05.03 Event End Time"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user changes status to "Cleared" on trouble event page
      And user selects fault position as "N/A:N/A" on trouble event page
      And user selects cause as "N/A:N/A:N/A" on trouble event page
      And user selects action dropdown as "N/A:N/A" on trouble event page
      And user enters closure info as "Test Ticket"
      Then user validates event end time is a mandatory field
      And user clicks on save button
      Then an error message should appear: "Required field (without a default) not specified : Event End Time (ARERR 9424)"
      When user enters event end time as current time
      And user clicks on save button
      Then user validates ticket status as "Cleared"
      And user clicks save button

