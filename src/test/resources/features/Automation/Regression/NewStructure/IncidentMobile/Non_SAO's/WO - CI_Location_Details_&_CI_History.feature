@WO_CI_Location_History

  Feature: Work Order - CI Location Details & CI History
    Scenario: Work Order - CI Location Details & CI History

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects create menu as "Work Order"
      Then work order form should appear in new tab
      And user switches to window 1
      When user enters "Testing" in Title field
      Then user selects request type as "Analysis" in work order page
      And user enters description as "Testing"
      Then user selects priority as "Major"
      And user selects assigned profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core WEST"
      And user clicks save button
      Then ticket should be created and status should be assigned
      And user clicks on ticket refresh button
      When user adds CI "SE_CPE_FRECPE5" to the ticket with impact level "Degradation of Service" with extra delay
      When user clicks on "Diagnosis" tab
      And user right clicks on CI "SE_CPE_FRECPE5" and selects "Show:Location Details"
      Then user validates Location Details are shown
      Then user clicks on the close button on location details window
      And user switches to default
      Then user switches to window 0
      When user selects SID console from agent console
      And user waits 3 secs
      And user switches to window 2
      Then SID console page should be opened
      When user enters "SE_CPE_FRECPE5" in name field
      And user clicks on search button on CI search window
      And user clicks on show history
      Then user validates CI history is opened
