@SAO_117
#Test requires user to get TeMIP created ticket - started in ALM from step 11
  Feature: SLA class wrongly calculated
    Scenario: user creates a B2B work order and checks SLA class

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      Then trouble record form should appear in new tab
      And user switches to window 1


      When user clicks on "Diagnosis" tab
      And user clicks on CI search button
      Then user switches to frame
      And user clicks on clear button
      When user enters "FI_LTECell%" in name field


      When user clicks on work order tab
      And user clicks on create from ticket
      When user switches to window 2
      And user validates ticket status as "New"
      And user validates parent ticket id availability
      Then user clicks on save button on the problem form
      And user validates ticket status as "New"
      And user validates child ticket details are same as parent ticket
      Then user clicks on save button on the problem form
      When user switches to window 1
      And clicks on ticket refresh button
      Then user clicks on work order tab
      And user validates child WorkOrder availability
      And user validates WorkOrder status as "OPEN"
      When user switches to window 2

