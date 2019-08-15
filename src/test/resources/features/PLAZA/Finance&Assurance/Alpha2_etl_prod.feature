@Alpha2_etl_prod @Plaza
  Feature: Plaza Alpha ETL Prod form test
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      When user clicks on "Order Something" button
      And user clicks "IT Infrastructure" button
      And user clicks "Application" button
      Then user should see "Application" IT Pebbles
      When user clicks on "Finance & Assurance" pebble
      Then user should see "Finance & Assurance" form
      When user selects Role dropdown as "Application Operation Engineer"
      And user enters "" in the request field
      And user selects system dropdown as "alpha2 etl prod"
      And user enters planned start time as current time
      And user enters planned end time as current time
      And user enters plaza description as ""
      And user enters additional comments as ""
      Then user clicks on submit button
      And user gets plaza request id
      And user clicks on plaza request id
      Then user should see service request form
      When user opens another window
      And user enters OW URL
      Given user is on the OneWorkflow login page
      When user logs in with valid username "frvi96_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Work Order"
      And user switches to window 2
      Then user enters plaza request id in the source id field
      And user clicks Search on ticket search
      Then user should see plaza ticket
      And user validates source field as "PLAZA"
      And user validates title field as "Service Request | Finance & Assurance"
      And user validates description contains: ""
#
