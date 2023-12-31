#From has been removed
 @Pollux_PROD

  #passed
  Feature: Pollux prod plaza form test
    Scenario Outline: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on Products & Services
      And user clicks on IT Infrastructure dropdown
      And user clicks on application under IT Infrastructure dropdown
      And user clicks on show more button
      And user waits 2 secs
      And user clicks on show more button
      When user clicks on "POLLUX" pebble
      Then user should see "POLLUX" form
      #Then user selects system name in haiti as "Other"
      When user selects role dropdown as "Application Operation Engineer"
      And user enters Pollux request as "<Request>"
      And user selects select request "Configuration"
      And user selects environment field as "App - Prod"
      And user selects environment field as "App/DB - AT"
      And user selects environment field as "DB -Prod"
      Then user enters Pollux description as "<Description>"
      And user enters Pollux WBS Code field as "P100-000-000"
      And user enters additional comments as "<Additional Comments>"
      Then user clicks on "Submit"
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
      And user validates title field as "Service Request | POLLUX"
      And user validates request type as "Service Request | PLAZA"
      And user validates pollux prod description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Billing"
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


      Examples:

        |Request                   |Description                   |Additional Comments  |
        |Pollux-PROD - Test/Request|Pollux-PROD - Test/Description|Pollux-PROD - Test/AC|
        |Pollux-AT - Test/Request  |Pollux-AT - Test/Description  |Pollux-AT - Test/AC  |
      
