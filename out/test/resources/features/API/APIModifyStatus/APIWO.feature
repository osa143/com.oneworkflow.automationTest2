@E2EWOAPI
  #Need API created Ticket
  Feature: E2E flow for ticket created by API
    Scenario: E2E flow for ticket created by API

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Trouble Event"
      And user enters ticket id as ""
      Then user should see work order
      When user clicks on Diagnosis tab
      And user clicks on CI search button
      Then user switches to frame
      When user enters "SE_EPG_FREEPG1" in name field
      And user clicks on search button on CI search window
      And user selects a CI from list
      Then user selects impact level as "Degradation of Service"
      And user clicks on relate CI
      And error message should display as "Please verify that there are no impacted CI's in other tickets by using Show CR Matching (ARWARN 10000)"
      And user clicks on close button on CI search window
      And user clicks on Ack button
      Then user validates ticket status as "Work In Progress"
      When user changes status to "Cleared" on work order page
      And user selects completion code as "Success"
      And user clicks on "Schedule" tab
      And user enters schedule end as current date
      When user clicks on Diagnosis tab
      And user right clicks on primary CI and selects "Impact:Clear All"
      And user clicks on yes on CI warning window
      Then user validates ci impact is inactive
      Then user clicks on save button
      When user changes status to "Closed" on work order page
      And user clicks on save button
      Then user validates ticket status as "Closed"

