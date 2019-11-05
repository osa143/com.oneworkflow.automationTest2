@Network_Security_Routing_New_Switching @PLAZA
  Feature: Network Security Routing Switching plaza form test
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on "Facility Management"
      And user clicks on order
      And user clicks on IT Infrastructure dropdown
      And user clicks on "Firewall & Network"
      When user clicks on Network Routing Switching pebble
      Then user should see "Network Routing Switching" form
      Then user selects network security firewall system name in haiti as "Other"
      When user selects role dropdown as "Application Operation Engineer"
      Then user selects New Switch Service Request Name as "New Switch - Configure"
      And user enters Network Security Routing New Switch request as "Test7 Network Security New Switch/Request"
      Then user selects Network CI as "apoteket-fnt-137263"
      And user enters DC-site as "Test site"
      And user enters Data Room as "Test room"
      Then user enters Rack as "Test rack"
      And user enters usage of the switch as "Testing usage"
      And user enter Terminal server as "Test server"
      Then user enters Network Security Routing Switching description as "Test7 Network Security/Description"
      And user enters additional comments as "Network Security - Test7/AC"
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
      And user validates title field as "Service Request | Network Routing/Switching"
      And user validates request type as "Service Request | PLAZA"
     #Not sure about description validation outside of a table
      And user validates network security new switch description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Routing/Switching L2"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on "Diagnosis" tab
      And user validates CI "apoteket-fnt-137263" is listed
      And user right clicks on CI "apoteket-fnt-137263" and selects "Impact:Update"
      Then user switches to frame
      And user enters impact from time as past on impact details bulk update window
      And user enters impact to time as past on impact details bulk update window
      Then user clicks confirm checkbox
      And user clicks on bulk update save button
      And user waits 60 secs
      And user clicks on "Diagnosis" tab
      And user waits 3 secs
      When user right clicks on CI "apoteket-fnt-137263" and selects "Impact:Clear"
      And user should see confirmation message and clicks on yes button
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