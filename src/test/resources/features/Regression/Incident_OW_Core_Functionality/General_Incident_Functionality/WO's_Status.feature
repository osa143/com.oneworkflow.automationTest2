@WO's_Status @Incident
  Feature: validation of WO's status'
    Scenario: user validates different work order status'

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case WO Status" in Title field in Trouble event
      And user selects request type as "Customer"
      And user enters description as "Test case WO Status"
      And user clicks on save button on the problem form
      Then ticket should be created and status should be assigned
      And user validates WO's Status is empty
      When user clicks on work order tab
      And user clicks on create from ticket
      Then user switches to window 2
      Then user clicks on save button on the problem form
      And ticket should be created and status should be assigned
      Then user switches to window 1
      And user validates WO's Status is present
      When user clicks on work order tab
      And user clicks on create from ticket
      Then user switches to window 3
      Then user clicks on save button on the problem form
      And ticket should be created and status should be assigned
      Then user switches to window 2
      And user changes status to "Cleared"
      And user selects completion code as "Success"
      Then user clicks on schedule tab
      And user enters schedule end as current date
      Then user clicks on save button on the problem form
      When user changes status to "Closed"
      And user clicks on save button on the problem form
      Then user validates ticket status as "Closed"
      When user switches to window 1
      Then user validates WO's Status is "Open"
      When user switches to window 3
      And user changes status to "Cleared"
      And user selects completion code as "Success"
      Then user clicks on schedule tab
      And user enters schedule end as current date
      Then user clicks on save button on the problem form
      When user switches to window 1
      Then user validates WO's Status is "Open"
      When user switches to window 3
      And user changes status to "Closed"
      And user clicks on save button on the problem form
      Then user validates ticket status as "Closed"
      When user switches to window 1
      Then user validates WO's Status is "Closed"


