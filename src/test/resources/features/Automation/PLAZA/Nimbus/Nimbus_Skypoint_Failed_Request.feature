@Nimbus_Skypoint_Failed_Request @Nimbus #@PLAZA
  Feature: Nimbus Skypoint Failed Request plaza form test
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on Products & Services
      And user clicks on IT Infrastructure dropdown
      And user waits 2 secs
      And user clicks on cloud under IT Infrastructure dropdown
#      And user clicks on show more button
      When user clicks on "Skypoint - private cloud" pebble
      Then user should see "Skypoint - private cloud" form
      Then user selects nimbus system name in haiti as "AAA"
      When user selects role dropdown as "Application Operation Engineer"
      And user selects service request name as "Skypoint -Failed request support"
      And user enters nimbus request as "Test11 Nimbus/Request"
      Then user enters skypoint request as "Test Skypoint"
      And user enters nimbus description as "Test11 Nimbus/Description"
      And user enters additional comments as "Test11 Nimbus/AC"
      Then user clicks on "Submit"
      And user gets plaza request id
      And user clicks on plaza request id
      Then user should see service request form
      When user opens new tab
      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Work Order"
      And user switches to window 2
      Then user enters plaza request id in the source id field
      And user clicks Search on ticket search
      Then user should see plaza ticket
      And user validates source field as "PLAZA"
      And user validates title field as "Service Request | Skypoint - private cloud"
#      And user validates nimbus skypoint failed request description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "IT Cloud"
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
      And user waits 5 secs
      And user clicks on main page refresh
      Then user validates plaza request has completed