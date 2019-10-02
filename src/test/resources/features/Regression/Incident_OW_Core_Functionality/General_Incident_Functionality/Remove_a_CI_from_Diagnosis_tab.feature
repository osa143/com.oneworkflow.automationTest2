@Remove_a_CI_from_Diagnosis_tab @Incident
  #passed
  Feature: Removal of CI from diagnosis tab
    Scenario: user can remove a CI from the diagnosis tab

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case 05.01 Manually close an incident" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case 05.01 Manually close an incident"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user clicks on Diagnosis tab
      And user clicks on CI search button
      Then user switches to frame
      When user enters "SE_EPG_FREEPG1" in name field
      And user clicks on search button on CI search window
      And user selects a CI from list
      Then user selects impact level as "Degradation of Service"
      And user clicks on relate CI
      #And an error message should appear: "Please verify that there are no impacted CI's in other tickets by using Show CR Matching (ARWARN 10000)"
      Then user closes warning message
      When user clicks on clear button
      And user enters "SE_EPG_HYEPG1" in name field
      And user clicks on search button on CI search window
      And user selects a CI from list
      Then user selects impact level as "Degradation of Service"
      And user clicks on relate CI
      Then user closes warning message
      And user clicks on clear button
      When user enters "SE_EPG_LDHEPG1" in name field
      And user clicks on search button on CI search window
      And user selects a CI from list
      Then user selects impact level as "Degradation of Service"
      And user clicks on relate CI
      Then user closes warning message
      And user clicks on close button on CI search window
      And user gets number of CI's
      When user right clicks on CI "SE_EPG_LDHEPG1" and selects "Detach"
      And user clicks on save button and closes warning messages
      Then CI should be detached from ticket
