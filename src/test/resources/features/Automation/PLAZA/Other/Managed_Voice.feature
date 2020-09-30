@ManagedVoice @PLAZA
  #passed
  Feature:Managed Voice plaza form test
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      #Then user clicks on plaza portal
      When user clicks on Products & Services
      And user clicks on IT Infrastructure dropdown
      And user clicks on application under IT Infrastructure dropdown
      And user clicks on show more button
      And user waits 2 secs
      And user clicks on show more button
      When user clicks on "Managed Voice (HCS)" pebble
      Then user should see "Managed Voice (HCS)" form
      #Then user selects system name in haiti as "Other"
      When user selects role dropdown as "Application Operation Engineer"
      Then user clicks on the contact checkbox
      And user then clicks on the name not found checkbox
      And user enters name field as "Test1234"
      Then user enters email address field as "Test@Test.com"
      Then user enters phone field as "123456789"
      And user enters managed voice request as "Test1 ManagedVoice/Request"
      Then user enters managed voice description as "Test1 ManagedVoice/Description"
      And user enters additional comments as "Test1 ManagedVoice/AC"
      Then user clicks on "Submit"
      Then user enters managed voice delivery date as current date
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
      And user validates title field as "Service Request | Managed Voice (HCS)"
      And user validates request type as "Service Request | PLAZA"
      And user validates managed voice description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "IT-Application-OSS"
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