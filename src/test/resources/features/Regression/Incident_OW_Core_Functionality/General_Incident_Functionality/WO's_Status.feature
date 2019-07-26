@WO's_Status @Incident
  Feature: validation of WO's status'
    Scenario: user validates different work order status'

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_2" and password as "Telia@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case WO Status" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case WO Status"
      And user clicks on save button
      Then ticket should be created and status should be assigned
     #Empty status ("")
      And user validates WO's Status is ""
      When user clicks on work order tab
      And user clicks on create from ticket
      Then user switches to window 2
      Then user clicks on save button
      And user validates ticket status as "New"
      Then user switches to window 1
      And user validates WO's Status is present
      When user clicks on work order tab
      And user clicks on create from ticket
      Then user switches to window 3
      Then user clicks on save button
      And user validates ticket status as "New"
      Then user switches to window 2
      And user selects assigned profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core WEST"
      And user selects assignee as "Change_Automation_1" by using alphabet "C" key up 0 times
      Then user clicks on save button
      And user validates ticket status as "Assigned"
      Then user clicks on Ack button
      And user validates ticket status as "Work In Progress"
      And user changes status to "Cleared"
      And user selects completion code as "Success"
      Then user clicks on schedule tab
      And user enters schedule end as current date
      Then user clicks on save button
      When user changes status to "Closed"
      And user clicks on save button
      Then user validates ticket status as "Closed"
      When user switches to window 1
      Then user validates WO's Status is "Open"
      When user switches to window 3
      And user selects assigned profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core WEST"
      And user selects assignee as "Change_Automation_1" by using alphabet "C" key up 0 times
      Then user clicks on save button
      And user validates ticket status as "Assigned"
      Then user clicks on Ack button
      And user validates ticket status as "Work In Progress"
      And user changes status to "Cleared"
      And user selects completion code as "Success"
      Then user clicks on schedule tab
      And user enters schedule end as current date
      Then user clicks on save button
      When user switches to window 1
      Then user validates WO's Status is "Open"
      When user switches to window 3
      And user changes status to "Closed"
      And user clicks on save button
      Then user validates ticket status as "Closed"
      When user switches to window 1
      Then user validates WO's Status is "Closed"


