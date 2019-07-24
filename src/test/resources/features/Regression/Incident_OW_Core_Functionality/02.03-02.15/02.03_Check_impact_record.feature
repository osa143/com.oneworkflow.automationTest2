@02.03_Check_impact_record @Incident
  Feature: checking of impact record
    Scenario: user checks impact record on CI

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "02:03 Check Impact Record" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "02:03 Check Impact Record"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user clicks on Diagnosis tab
      And user clicks on CI search button
      Then user switches to frame
      And user selects Category as "CORE"
      And user selects Type as "Mobile PS Core Network"
      And user selects Item as "SGSN"
      And user enters "SE_SGSN_FREMME2" in name field
      Then user clicks on search button on CI search window
      And user selects a CI from list
      And user selects impact level as "Degradation of Service"
      Then user clicks on relate CI
      And user closes warning message
      Then user clicks on clear button
      And user enters "SE_SGSN_HYMME2" in name field
      Then user clicks on search button on CI search window
      And user selects a CI from list
      And user selects impact level as "Degradation of Service"
      Then user clicks on relate CI
      And user closes warning message
      Then user clicks on clear button
      And user enters "SE_SGSN_LDHMME1" in name field
      Then user clicks on search button on CI search window
      And user selects a CI from list
      And user selects impact level as "Degradation of Service"
      Then user clicks on relate CI
      And user closes warning message
      Then user clicks on clear button
      And user enters "SE_SGSN_VRRMME1" in name field
      Then user clicks on search button on CI search window
      And user selects a CI from list
      And user selects impact level as "Degradation of Service"
      Then user clicks on relate CI
      And user closes warning message
      And user clicks on close button on CI search window
      #Category Type, Item, Site Name, Impact Type, Impact Category, Impact Level, Impact Status, Impact From, Impact To, CI Class Type,
      Then user validates CI column availability
      #Impact to and CI class type wont have data - this is fine (based on ALM test)
      And user validates columns have data present
      When user right clicks on CI "SE_SGSN_HYMME2" and selects "Impact:Update"
      #And user right clicks on primary CI and selects ""
      And user switches to frame
      And multiple statuses "Loss of Service, Degradation of Service, No Impact,(clear)" should be available in "Impact Name" dropdown
      Then user selects impact name as "Loss of Service"
      And user clicks confirm checkbox
      And user clicks on bulk update save button
      And user switches to window 1
      Then user validates CI "SE_SGSN_HYMME2" impact level is "Loss of Service"
      When user right clicks on CI "SE_SGSN_VRRMME1" and user selects "Impact:Update"
      Then user switches to frame
      And user selects impact from at least 1 day in the past
      And user clicks confirm checkbox
      Then user clicks on bulk update save button
      And user switches to window 1
      And user right clicks on CI "SE_SGSN_LDHMME1" and user selects "Impact:Clear"
      And user validates CI impact status is "Inactive"
