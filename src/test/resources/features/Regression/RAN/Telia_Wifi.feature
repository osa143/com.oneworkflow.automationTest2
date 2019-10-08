@Telia_Wifi @Regression
  Feature: Telia Wifi regression test
    Scenario: Telia Wifi

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      Then user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test Telia Wifi" in Title field
      Then user selects request type as "Event" on trouble event page
      And user enters description as "Test WO"
      Then user clicks on save button
      Then user validates ticket status as "Assigned"
      When user clicks on Diagnosis tab
      Then user clicks on CI search button
      And CI search tab should be opened
      And user enters "TLÖ WLAN4" in the Location ID+ field
      Then user clicks on CI search button
      Then user selects the first 3 entries
      And user selects impact level as "Degradation of Service"
      And user clicks on "Relate CI"
      And user clicks ok on CI window pop up
      Then user clicks on close button
      Then user clicks on save button
      When user clicks on work order tab
      And user clicks on create from ticket
      Then user switches to window 2
      Then user validates ticket information is same as parent ticket
      Then user clicks on save button
      Then user enters description as "Test WO send by email"
      And user selects assigned profile dropdown as "WLAN Coverage"
      Then user selects SLA class as "Default-3"
      And user clicks on save button
      Then user validates ticket status as "Assigned"
      And user waits 180 secs
      Then user clicks on notification tab
      Then user clicks on Sent button
      And user validates email notification is sent



      






      


