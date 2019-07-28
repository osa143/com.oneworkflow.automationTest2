@02.12_Check_Old_Tickets_And_Create_Problem_Candidate @Incident
  #Passed
  Feature: create a problem ticket from older incident
    Scenario: user is able to create a problem ticket from a past incident

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test Case 02:12 Create a problem candidate" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test Case 02:12 Create a problem candidate"
      Then user clicks on save button
      And user gets trouble ticket value
      When user clicks on Diagnosis tab
      And user clicks on CI search button
      Then user switches to frame
      And user selects Category as "CORE"
      And user selects Type as "Mobile PS Core Network"
      And user selects Item as "SGSN"
      And user clicks on search button on CI search window
      When user enters "SE_SGSN_FREMME2" in name field
      And user clicks on search button on CI search window
      And user selects a CI from list
      Then user selects impact level as "Degradation of Service"
      And user clicks on relate CI
      And error message should display as "Please verify that there are no impacted CI's in other tickets by using Show CR Matching (ARWARN 10000)"
      And user clicks on clear button
      When user enters "SE_SGSN_HYMME2" in name field
      And user clicks on search button on CI search window
      And user selects a CI from list
      Then user selects impact level as "Degradation of Service"
      And user clicks on relate CI
      Then user closes warning message
      And user clicks on clear button
      When user enters "SE_SGSN_LDHMME1" in name field
      And user clicks on search button on CI search window
      And user selects a CI from list
      Then user selects impact level as "Degradation of Service"
      And user clicks on relate CI
      Then user closes warning message
      And user clicks on clear button
      When user enters "SE_SGSN_VRRMME1" in name field
      And user clicks on search button on CI search window
      And user selects a CI from list
      Then user selects impact level as "Degradation of Service"
      And user clicks on relate CI
      Then user closes warning message
      And user clicks on close button on CI search window
      And user switches to window 1
      And CI should be listed and displayed under the Diagnosis tab
      Then user clicks on save button
      When user clicks on linked items tab
      And user selects target application first dropdown as "OS3 - Problem"
      And user selects target application second dropdown as "Investigates"
      And user clicks on create button
      Then user switches to window 2
      When user clicks on save button on the problem form
      Then multiple error messages should appear with red boarder around fields
      When user selects request type as "Product Services & Solutions:Mobile Data Platforms" in problem form
      And user selects impact as "Significant/Large"
      And user selects urgency as "Medium"
      Then user clicks on save button on the problem form
      And ticket should be created and status should be assigned
      And user gets ticket value
      When user clicks on Diagnosis tab
      Then user should see CI's "SE_SGSN_FREMME2", "SE_SGSN_HYMME2", "SE_SGSN_LDHMME1", "SE_SGSN_VRRMME1"
      When user clicks on linked items tab
      Then user validates 1 linked ticket availability
      Then change should also be reflected in the timeline as "Correlation to ticket " for OP ticket
      When user switches to window 1
      Then change should also be reflected in the timeline as "Correlation to ticket " for PB ticket





