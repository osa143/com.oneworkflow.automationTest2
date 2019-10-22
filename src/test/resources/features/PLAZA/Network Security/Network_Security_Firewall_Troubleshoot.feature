@Network_Security_Firewall_Troubleshoot @PLAZA
  Feature: Network Security Firewall Troubleshoot plaza form test
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on "Facility Management"
      And user clicks on order
      And user clicks on IT Infrastructure dropdown
      And user clicks on "Firewall & Network"
      When user clicks on Firewall Routing Request pebble
      Then user should see "Firewall Routing Request" form
      #Then user selects "System Name in Haiti" as "Other"
      When user selects role dropdown as "Application Operation Engineer"
      And user selects service request name as "Troubleshoot Firewall order"
      And user enters Network Security Firewall Troubleshoot request as "Test4 Network Security/Request"
      Then user enters FIRE Ticket number as "Test ticket"
      And user enters Source IP Address as "Test Source IP Address"
      And user enter Target IP Address as "Test Target IP Address"
      Then user selects Server connectivity verified as "Yes"
      And user enters date and time when tests performed as current date and time
      Then user selects Traffic return routing verified as "Yes"
      And user enters Network Security Troubleshoot description as "Test4 Network Security/Description"
      And user enters additional comments as "Test4 Network Security/AC"
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
      And user validates title field as "Service Request | Firewall Routing Request"
      And user validates request type as "Service Request | PLAZA"
     #Not sure about description validation outside of a table
      And user validates network security firewall troubleshoot description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Firewall L2"
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

