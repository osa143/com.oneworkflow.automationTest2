@04.04  @Incident1 @04
  #passed
  Feature: Create change from incident using create button in linked items tab
    Scenario: Create change from incident using create button in linked items tab

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case 04.04 create change from incident" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case 04.04 create change from incident"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user clicks on Ack button
      And user clicks on assignment under sections
      Then user selects assignment profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core EAST"
      And user clicks on save button
      Then user should see assigned profile as "Mob PS Core EAST"
      When user clicks on linked items tab
      And user selects target application first dropdown as "OS3 - Change"
      And user selects target application second dropdown as "Caused by"
      Then user clicks on create button under linked items
      And user switches to window 2
      When user selects change type as "Change Record"
      When user creates change ticket with following details
        |RequestType  |Title            |RequestCategory|Description     |Reason       |Priority|ChangeBuilder      |Implementation|TestPlan   |RollBack   |CommPlan   |VerOfFunctionality|Risk   |ServiceCustomerImpact|ImpactDuration|EstimatedImpact       |
        |Normal Change|IT:Other         |Cable splicing |Correcting error|Test Ticket  |Info    |Change_Automation_1|Test Ticket   |Test Ticket|Test Ticket|Test Ticket|Test Ticket       |No Risk|Test ticket no impact|      3       |Degradation of Service|
      And user gets trouble ticket value
      When user switches to window 1
      And user clicks on linked items tab
      Then user validates 1 linked ticket availability
      And change should also be reflected in the timeline as "Correlation to ticket;. Relationship Type: Caused" for trouble ticket in row 1


