@APIWorkOrder
  Feature: E2E Validation of API created work order ticket
    Scenario: user validates all information on API ticket and processes ticket E2E

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Trouble Event"
      And user enters ticket id as ""
      Then user should see trouble ticket
      And user validates ticket status as "Assigned"






      When user clicks on Diagnosis tab
      And user clicks on CI search button
      Then user switches to frame
      And user enters CI as "SE_AP_tylosand-first-camp-ap10b2"
      And user clicks on CI search button
      Then user selects CI "SE_AP_tylosand-first-camp-ap10b2"
      And user selects impact level as "No Impact"
      And user clicks on relate CI
      Then user clicks on close button on CI search window
      And user switches to window 1
      And CI should be listed and displayed under the Diagnosis tab
      When user clicks on "Timeline" tab
      Then change should also be reflected in the timeline as "Impact record created for SE_AP_tylosand-first-camp-ap10b2" for trouble ticket in row 1



      When user clicks on "Interested Parties" tab
      And user enters "Change_Automation_1" under interested parties
      And user clicks on add email button
      Then user validates "Change_Automation_1" is listed as an interested party
      When user clicks on timeline tab
      Then change should also be reflected in the timeline as "The User   has been added as interested parties." for trouble ticket in row 1