@Pollux-PROD @PLAZA
  Feature: Pollux prod plaza form test
    Scenario Outline: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      When user clicks on "Facility Management" button
      And user clicks on "Order" button
      And user clicks "Storage & Data Protection" button
      Then user should see "Storage & Data Protection" IT Pebbles
      When user clicks on "Pollux" pebble
      Then user should see "Pollux" form
      When user selects Role dropdown as "Application Operation Engineer"
      And user enters Pollux request as "<Request>"
      And user selects "Configuration" in the select request field
      And user selects "<App - Prod>" in the Environment field
      And user selects "<App/DB - AT>" in the Environment field
      And user selects "<DB -Prod>" in the Environment field
      Then user enters Pollux description as "<Description>"
      And user enters WBS Code field as "P100-000-000"
      And user enters additional comments as "<Additional Comments>"
      Then user clicks on submit button
      And user gets plaza request id
      And user clicks on plaza request id
      Then user should see service request form
      When user opens another window
      And user enters OW URL
      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_7" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Work Order"
      And user switches to window 2
      Then user enters plaza request id in the source id field
      And user clicks Search on ticket search
      Then user should see plaza ticket
      And user validates source field as "PLAZA"
      And user validates title field as "Service Request | POLLUX"
      And user validates request type as "Service Request | PLAZA"
      #Not sure about description validation outside of a table
      And user validates description contains DescValidation
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user validates assigned profile is "Billing"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on Ack button
      And user changes status to "Cleared"
      And user selects completed code as "Success"
      And user clicks on "Schedule" tab
      And user enters schedule end as current date
      Then user clicks on save button
      And user validates ticket status as "Cleared"
      When user changes status to "Closed"
      And user clicks on save button
      Then ticket status should be closed


      Examples:

        |Request                   |Description                   |Additional Comments  |Desc Validation|
        |Pollux-PROD - Test/Request|Pollux-PROD - Test/Description|Pollux-PROD - Test/AC|               |
        |Pollux-AT - Test/Request  |Pollux-AT - Test/Description  |Pollux-AT - Test/AC  |               |
      
