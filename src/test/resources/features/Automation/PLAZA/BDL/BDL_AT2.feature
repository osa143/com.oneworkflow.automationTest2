@BDL_AT2 @PLAZA
  Feature: Plaza BDL form test
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
    #  Then user clicks on plaza portal
      When user clicks on Products & Services
      And user clicks on IT Infrastructure dropdown
      And user clicks on application under IT Infrastructure dropdown
      When user clicks on "BDL" pebble
      Then user should see "BDL" form
      #Then user selects system name in haiti as "Other"
      When user selects role dropdown as "Application Operation Engineer"
      And user enters BDL request as "BDL-AT2- Test/Request"
      And user selects service request name as "Configuration"
      And user selects BCPP environment as "AT2"
      And user selects BDL AT2 CI as "API"
      And user selects BDL AT2 CI as "AT2"
      And user selects BDL AT2 CI as "AT DB"
      And user selects BDL AT2 CI as "AT2_Store"
      And user selects BDL AT2 CI as "Databases"
      And user selects BDL AT2 CI as "E2V"
      And user selects BDL AT2 CI as "eMessaging"
      And user selects BDL AT2 CI as "Proofing"
      And user selects BDL AT2 CI as "Netbill DB-loader"
      And user enters "P100-000-000" in the AT2 WBS Code field
      And user enters BDL description as "BDL-AT2 - Test/Desc"
      And user enters additional comments as "BDL-AT2 - Test/AC"
      Then user clicks on "Submit"
      And user gets plaza request id
      And user clicks on plaza request id
      Then user should see service request form
      When user opens new tab
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Work Order"
      And user switches to window 2
      Then user enters plaza request id in the source id field
      And user clicks Search on ticket search
      Then user should see plaza ticket
      And user validates source field as "PLAZA"
      And user validates title field as "Service Request | BDL"
      And user validates request type as "Service Request | PLAZA"
#      And user validates BDL description same as plaza description
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Billing"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on Ack button
      And user changes status to "Cleared" on work order page
      And user enters AM status details as "Test"
      And user selects completion code as "Success"
      And user clicks on "Schedule" tab
      And user enters schedule end as current date
      Then user clicks on save button
      And user validates ticket status as "Cleared"
      When user changes status to "Closed" on work order page
      And user enters AM status details as " Test2"
      And user clicks on save button
      And user validates ticket status as "Closed"
      And user logsOut
      When user switches to window 1
      And user closes current tab
      When user switches to window 0
      And user clicks on main page refresh
      Then user validates plaza request has completed

