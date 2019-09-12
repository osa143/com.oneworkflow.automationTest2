@Cloud_One_Time_Snap @PLAZA
  Feature: Cloud one time snap plaza form test
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      When user clicks on "Facility Management" button
      And user clicks on "Order" button
      And user clicks "Application" button
      Then user should see "Application" IT Pebbles
      When user clicks on "Order one-time Snapshot of VM" pebble
      Then user should see "Order one-time Snapshot of VM" form
      When user selects role dropdown as "Application Operation Engineer"
      Then user clicks on the contact checkbox
      And user then clicks on the name not found checkbox
      And user enters name field as "Test1234"
      Then user enters email address field as "Test@Test.com"
      Then user enters phone field as "123456789"
      And user enters Cloud one time snapshot request as "Test1 Cloud one time snapshot/Request"
      And user enters CI as "cc100cgas001"
      Then user enters Cloud one time snapshot description as "Test1 Cloud one time snapshot/Description"
      And user clicks the calendar and selects current date and time
      And user enters additional comments as "Test1 Cloud one time snapshot/AC"
      And user And searches for {string} attachment and adds it
      Then user clicks on "Submit"
      And user gets plaza request id
      And user clicks on plaza request id
      Then user should see service request form
      When user opens new tab
      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_7" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Work Order"
      And user switches to window 2
      Then user enters plaza request id in the source id field
      And user clicks Search on ticket search
      Then user should see plaza ticket

