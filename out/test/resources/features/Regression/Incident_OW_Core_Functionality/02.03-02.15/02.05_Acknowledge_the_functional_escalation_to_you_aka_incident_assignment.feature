@02.05 @Incident @02
  #passed
  Feature: user can acknowledge the functional escalation to you aka incident assignment
    Scenario: user can acknowledge the functional escalation to you aka incident assignment

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "02:05 Acknowledge The Functional Escalation To You AKA Incident Assignment" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "02:05 Acknowledge The Functional Escalation To You AKA Incident Assignment"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      Then user validates availability of tabs "Timeline:Diagnosis:Interested Parties:Notifications:Linked Items:Work Orders:Service Level:Alarms:Recurring Incidents:Service Info"
      When user clicks on Ack button
      And user clicks on assignment under sections
      Then user validates last ack by field has data present
      When user selects assignment profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core WEST"
      #assignee needs to be the same as the user who last ack'd ticket (in this case will be ticket creator)
      Then user enters "Change_Automation_1" in assignee
      And user clicks on save button
      When user clicks on assignment under sections
      Then user validates assignee is "Change_Automation_1"










