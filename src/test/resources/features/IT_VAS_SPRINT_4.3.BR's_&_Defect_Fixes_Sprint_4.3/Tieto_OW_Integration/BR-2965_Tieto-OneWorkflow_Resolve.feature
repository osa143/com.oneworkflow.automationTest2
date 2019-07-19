@BR-2965_Tieto-OneWorkflow_Resolve @Tieto
  Feature: creation and sending of WO to Tieto - OW resolves
    Scenario: user is able to create and send a WO to Tieto - OW resolves

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Auto_Basic1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create work order
      And user switches to window 1
      Then blank work order form should appear in new tab
      When user enters "General | Support" in Title field
      And user selects request type as "SA Request:Support" in work order page
      And user enters description as "Tieto Test"
      And user selects priority as "Emergency"
      And user enters reason field as "Integration Testing"
      Then user clicks on save button
      When user clicks on Diagnosis tab
      And user clicks on CI search button
      Then user switches to frame
      And CI search panel should open
      When user clicks on clear button
      And user enters "td722ars35" in name field
      And user clicks on CI search button
      Then user selects a CI from list
      And user selects impact level as "Loss of Service"
      And user clicks on relate CI
      Then user closes warning message
      When user clicks on clear button
      And user selects Category as "Software"
      And user enters "One Workflow" in name field
      And user clicks on CI search button
      Then user selects a CI from list
      And user selects impact level as "Loss of Service"
      And user clicks on relate CI
      Then user closes warning message
      When user clicks on clear button
      And user enters "One Workflow UAT" in name field
      And user clicks on CI search button
      Then user selects a CI from list
      And user selects impact category as "Potential"
      And user selects impact level as "No Impact"
      And user clicks on relate CI
      Then user closes warning message
      When user clicks on clear button
      And user enters "One Workflow Training" in name field
      And user clicks on CI search button
      Then user selects a CI from list
      And user selects impact category as "Potential"
      And user selects impact level as "No Impact"
      And user clicks on relate CI
      Then user closes warning message
      When user clicks on clear button
      And user enters "One Workflow System Test" in name field
      And user clicks on CI search button
      Then user selects a CI from list
      And user selects impact category as "Potential"
      And user selects impact level as "No Impact"
      And user clicks on relate CI
      Then user closes warning message and clicks on close button
