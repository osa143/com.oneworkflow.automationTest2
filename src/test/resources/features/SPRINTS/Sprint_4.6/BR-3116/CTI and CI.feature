@CTI_and_CI

Feature:  Today in the customer operations interface,
          when a create incident message is sent to one workflow with both the CTI values and a CI,
          then the incident is created with the CTI values first (and assignment rules trigger)
          but then the CTI values get updated based on the CI attached.
          It is requested that if a customer operations send CTI values that they do not get overwritten.

  Scenario: Create work order when CO system sends CTI and CI

  Given user is on the Plaza login page
  When user enters username "testauto" and password as "test123" and clicks on login
  Then user should see the plaza home page
  Then user clicks on plaza portal
  When user clicks on Products & Services
  And user clicks on IT Infrastructure dropdown
  And user clicks on "Cloud" under IT Infrastructure
  When user clicks on "Skypoint - private cloud" pebble
  Then user should see "Skypoint - private cloud" form
  Then user selects nimbus system name in haiti as "Other"
  When user selects role dropdown as "Application Operation Engineer"
  And user selects service request name as "Add/Modify/Remove CPU/Memory/Disk to VM"
  And user enters nimbus request as "Test1 Nimbus/Request"
  Then user selects nimbus CI as "cc100cgas001"
  And user selects nimbus type as "CPU"
  And user enters nimbus mandatory description as "Test1 Nimbus/Description"
  And user enters additional comments as "Test1 Nimbus/AC"
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
  And user validates nimbus add modify remove description same as plaza
  When user clicks on owner under sections
  And user clicks on assignment under sections
  And user clicks on CTI details under sections
  Then user validates owner profile as "PLAZA"
  And user validates owner as "PLAZA"
  And user should see assigned profile as "IT Cloud"
  And user validates Category as "IT"
  And user validates type as "Cloud Infrastructure"
  And user validates item as "Nimbus/TSVP"



#Given user have access to CO system and Ow
#When user sends create incident message with CTI and CI details
#Then incident should be created in OW
#And incident assignment rules should be triggered based on the CTI details
#And incident status should be assigned
#And CI should be present in OW under Diagnsois
#And CTI details should not be updated based on CI

