@Non_B2B-To_B2B_Equipment

  Feature: convert a non B2B WO to B2B WO

    Scenario:check possibility of converting a non B2B WO to B2B WO and verify SLA is read only after
      ticket is assigned for SLA class Mast-xxh


      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create work order
#      When user clicks on agent console create problem record
#      When user clicks on agent console create work order
      Then user switches to window 1
      When user enters title as "Non-B2B to B2B"
      And user selects request type as "Maintenance" on work order page
      And user enters description as "Non-B2B to B2B Test"
      And user selects priority as "Info"
      Then user clicks on save button
      And user waits 5 secs
      And user selects assigned profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core WEST"
      And user enters "Change_Automation_7" in assignee
      Then user clicks on save button
      When user adds CI "SE_LTECell_100895010" to the ticket with impact level "Degradation of Service"
      And user clicks on apply BtwoB button
      Then user should see assigned profile as "Transtema2 - FS - SE - B2B"
      When user selects SLA class as "Mast:10h repair time"
      And user clicks on "B2B Dispatch" tab
      And user enters header value as "Test"
      And user enters message value as "Automated Test"
      And user clicks on save button
      And user validates ticket status as "Assigned"
      Then user validates SLA class as read only





