@TCFP_Remove_User @PLAZA
  #passed
  Feature: TCFP Remove User plaza form test
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on "Facility Management"
      And user clicks on order
      And user clicks on IT Infrastructure dropdown
      And user clicks on "Application"
      When user clicks on "TCFP (Account Management)" pebble
      Then user should see "TCFP (Account Management)" form
      #Then user selects "System Name in Haiti" as "Other"
      When user selects role dropdown as "Application Operation Engineer"
      And user selects service request name as "Account Management"
      And user enters TCFP request as "Test2 TCFP Remove User/Request"
      Then user selects TCFP choose option as "Remove User"
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
      And user enters TCFP description as "Test2 TCFP/Description"
      And user enters additional comments as "Test2 TCFP/AC"
      Then user clicks on "Submit"
      And user gets plaza request id
      And user clicks on plaza request id
      Then user should see service request form
      And user opens new tab
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Work Order"
      And user switches to window 2
      Then user enters plaza request id in the source id field
      And user clicks Search on ticket search
      Then user should see plaza ticket
      And user validates source field as "PLAZA"
      And user validates title field as "Service Request | TCFP (Account Management)"
      And user validates request type as "Service Request | PLAZA"
         #Not sure about description validation outside of a table
      And user validates tcfp remove user description same as plaza
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