@02.05_Acknowledge_the_functional_escalation_to_you_aka_incident_assignment @Incident
  Feature: user can ack ticket assigned to them
    Scenario: user acknowledges ticket that's been assigned to them

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "02:05 Acknowledge The Functional Escalation To You AKA Incident Assignment" in Title field in Trouble event
      And user selects request type as "Customer"
      And user enters description as "02:05 Acknowledge The Functional Escalation To You AKA Incident Assignment"
      And user clicks on save button on the problem form
      Then ticket should be created and status should be assigned
      And user validates "Timeline" tab is visible
      And user validates "Diagnosis" tab is visible
      And user validates "Interested Parties" tab is visible
      And user validates "Notification" tab is visible
      And user validates "Linked Items" tab is visible
      And user validates "Work Orders" tab is visible
      And user validates "Service Level" tab is visible
      And user validates "Alarms" tab is visible
      And user validates "Recurring Incidents" tab is visible
      And user validates "Service Info" tab is visible
      When user clicks on Ack button
      And user clicks on assignment under sections
      And user validates last ack by field has data present
      #assignee needs to be the same as the user who last ack'd ticket (in this case will be ticket creator)
      Then user selects assignee as "Change_Automation_1" by using alphabet "C" key up 0 times
      And user clicks on save button on the problem form
      Then user validates assignee is "Change_Automation_1"










