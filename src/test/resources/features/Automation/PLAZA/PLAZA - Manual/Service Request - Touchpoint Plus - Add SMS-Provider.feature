@ServiceRequestAddSMS_Provider
  Feature: Service Request - Touchpoint Plus - Add SMS-Provider test
    Scenario: Service Request - Touchpoint Plus - Add SMS-Provider test

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on Products & Services
      And user clicks on IT Infrastructure dropdown
      And user clicks on "Application" under IT Infrastructure
      Then user clicks on "Touchpoint Plus" pebble
      Then user should see "Touchpoint Plus" form
      And user selects role dropdown as "Application Operation Engineer"
      And user clicks on the contact checkbox
      Then user then clicks on the name not found checkbox
      And user enters name field as "Test Name"
      Then user enters email address field as "Test@Test.com"
      And user enters phone field as "0123456789"
      And user selects service request name as "Add SMS Provider"
      And user enters touchpoint plus sms provider request as "Test Req"
      Then user enters organisation name as "Test Organisation"
      And user enters touchpoint user id as "Test user id"
      Then user enters service id as "Test service id"
      Then user enters additional comments as "Test Additional Comments"
      Then user clicks on "Submit"
      #Then an error message should appear: "Some fields are incomplete: Description"
      Then user enters touchpoint description as "Test description"
      And user clicks on "Submit"
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
      Then user validates title field as "Service Request | Touchpoint Plus"
      And user validates request type as "Service Request | PLAZA"
#      Then user validates touchpoint plus add sms provider same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      Then user should see assigned profile as "VAS MAS Linux"
      And user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on Ack button
      And user changes status to "Cleared" on work order page
      Then user selects completion code as "Success"
      And user clicks on "Schedule" tab
      And user enters schedule end as current date
      Then user clicks on save button
      And user validates ticket status as "Cleared"
      When user changes status to "Closed" on work order page
      And user clicks save button
      And user validates ticket status as "Closed"
      Then user switches to window 0
      And user clicks on main page refresh
      Then user validates plaza request has completed
