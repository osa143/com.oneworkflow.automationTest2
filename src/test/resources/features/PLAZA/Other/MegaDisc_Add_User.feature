@MegaDisc_Add_User_other @PLAZA
  Feature: MegaDisc Add User PLAZA form test
    Scenario:user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on "Facility Management"
      And user clicks on order
      And user clicks on IT Infrastructure dropdown
      And user clicks on "Application"
      When user clicks on "MegaDisc (Account Management)" pebble
      Then user should see "MegaDisc (Account Management)" form
      Then user selects system name in haiti as "Other"
      When user selects role dropdown as "Application Operation Engineer"
      And user enters MegaDisc request as "Test1 MegaDisc/Request"
      Then user selects choose option as "Add User"
      And user enters megadisc account name as "Test1234"
      Then user enters megadisc select group as "App_Megadisc_Admin"
      Then user selects requested person as "Anders Englund"
      And user enters megadisc description as "Test1 MegaDisc/Description"
      And user enters additional comments as "Test1 Megadisc/AC"
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
      And user validates title field as "Service Request | MegaDisc (Account Management)"
      And user validates request type as "Service Request | PLAZA"
     #Not sure about description validation outside of a table
      And user validates megadisc add user description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Enterprise"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on Ack button
      And user changes status to "Cleared" on work order page
      And user selects completed code as "Success"
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
