@TCFP_Add_User @PLAZA
  #passed
    Feature: TCFP Add User plaza form test
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on Products & Services
      And user clicks on IT Infrastructure dropdown
      And user waits 2 secs
      And user clicks on application under IT Infrastructure dropdown
      And user clicks on show more button
#      And user waits 2 secs
#      And user clicks on show more button
      When user clicks on "TCFP (Account Management)" pebble
      Then user should see "TCFP (Account Management)" form
     # Then user selects system name in haiti as "Other"
      When user selects role dropdown as "Application Operation Engineer"
      And user selects service request name as "Account Management"
      And user enters TCFP request as "Test1 TCFP/Request"
      Then user selects TCFP choose option as "Add User"
      And user enters TCFP Account Name as "tcfpuser"
      And user selects TCFP select group as "App_Navet_TS-Employed"
      And user selects TCFP select group as "App_Navet_TS-Finance_Consumer"
      And user selects TCFP select group as "App_Navet_TS-Finans_Appmgr"
      And user selects TCFP select group as "App_Navet_TS-Finans_Bomgr"
      And user selects TCFP select group as "App_Navet_TS-Finans_Credit"
      And user selects TCFP select group as "App_Navet_TS-Finans_Finance"
      And user selects TCFP select group as "App_Navet_TS-Finans_Handler"
      And user selects TCFP select group as "App_Navet_TS-Finans_Sales"
      And user selects TCFP select group as "App_Navet_TS-Finans_Superuser"
      And user enters TCFP description as "Test1 TCFP/Description"
      And user enters additional comments as "Test1 TCFP/AC"
      Then user clicks on "Submit"
      And user gets plaza request id
      And user clicks on plaza request id
      Then user should see service request form
      And user opens new tab
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
#      When user selects search menu as "Open Search Form:Work Order"
      And user waits 40 secs
      And user switches to window 2
      Then user enters plaza request id in the source id field
      And user clicks Search on ticket search
      Then user should see plaza ticket
      And user validates source field as "PLAZA"
      And user validates title field as "Service Request | TCFP (Account Management)"
      And user validates request type as "Service Request | PLAZA"
#      And user validates tcfp add user description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Enterprise"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on Ack button
      And user changes status to "Cleared" on work order page
      And user selects completion code as "Success"
      And user clicks on "Schedule" tab
      And user enters schedule end as current date
      Then user clicks on save button
      And user validates ticket status as "Cleared"
      When user changes status to "Closed" on work order page
      And user clicks on save button
      And user validates ticket status as "Closed"
      When user switches to window 0
      And user clicks on main page refresh
      Then user validates plaza request has completed




      #Then user selects TCFP add user select group as below
#      |select group Name            |
#      |App_Navet_TS-Employed        |
#      |App_Navet_TS-Finance_Consumer|
#      |App_Navet_TS-Finans_Appmgr   |
#      |App_Navet_TS-Finans_Bomgr    |
#      |App_Navet_TS-Finans_Credit   |
#      |App_Navet_TS-Finans_Finance  |
#      |App_Navet_TS-Finans_Handler  |
#      |App_Navet_TS-Finans_Sales    |
#      |App_Navet_TS-Finans_Superuser|