@WO's_Status @Incident @Trouble1
  #passed
  Feature: WO's status
    Scenario: WO's status

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
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
      When user clicks on "Work Orders" tab
      And user clicks on create from ticket
      Then user switches to window 2
      Then user clicks on save button
      And user validates ticket status as "New"
      Then user switches to window 1
      And user validates WO's Status is present
      When user clicks on "Work Orders" tab
      And user clicks on create from ticket
      Then user switches to window 3
      Then user clicks on save button
      And user validates ticket status as "New"
      Then user switches to window 2
      And user waits 2 secs
      And user selects assigned profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core WEST"
      And user enters "Change_Automation_1" in assignee
      Then user clicks on save button
      And user validates ticket status as "Assigned"
      Then user clicks on Ack button
      And user validates ticket status as "Work In Progress"
      And user changes status to "Cleared" on work order page
      And user selects completion code as "Success"
      Then user clicks on "Schedule" tab
      And user enters schedule end as current date
      Then user clicks on save button
      When user changes status to "Closed" on work order page
      And user clicks on save button
      Then user validates ticket status as "Closed"
      When user switches to window 1
      And user clicks on ticket refresh button
      Then user validates WO's Status is "OPEN"
      When user switches to window 3
      And user selects assigned profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core WEST"
      And user enters "Change_Automation_1" in assignee
      Then user clicks on save button
      And user validates ticket status as "Assigned"
      Then user clicks on Ack button
      And user validates ticket status as "Work In Progress"
      And user changes status to "Cleared" on work order page
      And user selects completion code as "Success"
      Then user clicks on "Schedule" tab
      And user enters schedule end as current date
      Then user clicks on save button
      When user switches to window 1
      And user clicks on ticket refresh button
      Then user validates WO's Status is "OPEN"
      When user switches to window 3
      And user changes status to "Closed" on work order page
      And user clicks on save button
      Then user validates ticket status as "Closed"
      When user switches to window 1
      And user clicks on ticket refresh button
      Then user validates WO's Status is "CLOSED"


