@02.15_Search_for_Known_Errors_using_quick_search_based_on_Category_Type_and_Item @Incident

  Feature: known error searches
    Scenario: user can search for known erros using quick search

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test Case 01.11 Add CI's" in Title field in Trouble event
      And user selects request type as "Customer"
      And user enters description as "Test Case 01.11 Add CI's"
      And user clicks on save button on the problem form
      Then ticket should be created and status should be assigned
      When user clicks on Diagnosis tab
      And user clicks on CI search button
      Then user switches to frame
      When user clicks on clear button
      And user enters "SE_SGSN_VRRMME1" in name field
      Then user clicks on search button on CI search window
      And user selects a CI from list
      And user selects impact level as "Degradation of Service"
      Then user clicks on relate CI
      And user closes warning message and clicks on close button
      Then user switches to window 1
      Then CI should be listed and displayed under the Diagnosis tab
      When user clicks on CTI details under sections
      And user selects Category as "Core"
      And user selects Type as "Other"
      And user selects Item as "BR"
      Then user clicks on save button on the problem form
      When user clicks on linked items tab
      And user selects target application first dropdown as "OS3 - Known Error"
      And user selects target application second dropdown as "Has workaround"
      Then user switches to frame
      And user selects target category as "Core"
      And user selects target type as "Other"
      And user selects target item as "BR"
      Then user clicks on linked item search
      And user should see known error ticket listed








