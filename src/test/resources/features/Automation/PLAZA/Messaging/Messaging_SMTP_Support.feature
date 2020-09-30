@Messaging_SMTP_Support @PLAZA
  Feature: Messaging SMTP Support plaza form test
   #passed
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      #Then user clicks on plaza portal
      When user clicks on Products & Services
      And user clicks on IT Infrastructure dropdown
      And user clicks on messaging under IT Infrastructure dropdown
      When user clicks on "SMTP Support" pebble
      Then user should see "SMTP Support" form
      #Then user selects system name in haiti as "Other"
      When user selects role dropdown as "Application Operation Engineer"
      Then user clicks on the contact checkbox
      And user then clicks on the name not found checkbox
      And user enters name field as "Test1234"
      Then user enters email address field as "Test@Test.com"
      Then user enters phone field as "123456789"
      And user enters messaging request as "Test4 Messaging Mail/Request"
      And user enters messaging Customer ID Name as "Test name"
      And user selects messaging Issue as "Configuration change"
      And user date and time when tests performed as current date and time
      And user enters messaging Sender email address as "Sender@Test.com"
      And user enters messaging Sender DNS IP Address as "Test IP Address"
      And user selects messaging SMTP relay as "applmail.rokki.sonera.fi (UPM)"
      And user enters messaging Receiver email address as "Reciever@Test.com"
      Then user enters messaging description as "Test4 Messaging/Description"
      And user enters additional comments as "Messaging - Test4/AC"
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
      And user validates title field as "Service Request | SMTP Support"
      And user validates request type as "Service Request | PLAZA"
      And user validates messaging smtp support description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Application Services"
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

