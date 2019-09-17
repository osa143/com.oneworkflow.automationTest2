@BDL @PLAZA
  Feature: Plaza BDL form test
    Scenario Outline: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      When user clicks on "Facility Management"
      And user clicks on order
      And user clicks on IT Infrastructure dropdown
      And user clicks on "Application"
      When user clicks on "BDL" pebble
      Then user should see "BDL" form
      When user selects role dropdown as "Application Operation Engineer"
      And user enters BDL request as "<Request>"
      And user selects service request name as "Configuration"
      And user selects BCPP environment as "<Environment>"
      And user selects all CI's from AT1 field
      |CI Name          |
      |API              |
      |AT1              |
      |AT DB            |
      |AT1_Store        |
      |Databases        |
      |E2V              |
      #|eMessaging       |
      #|Proofing         |
      #|Netbill DB-loader|
      And user enters "P100-000-000" in the WBS Code field
      And user enters BDL description as "<Description>"
      And user enters additional comments as "<Additional Comments>"
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
      And user validates source field as "PLAZA"
      And user validates title field as "Service Request | BDL"
      And user validates request type as "Service Request | PLAZA"
      #Not sure about description validation outside of a table
      And user validates description as ""
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Billing"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on Ack button
      And user changes status to "Cleared" on work order page
      And user selects completed code as "Success"
      And user clicks on "Schedule" tab
      And user enters schedule end as current date
      Then user clicks on save button
      And user validates ticket status as "Cleared"
      When user changes status to "Closed" on work order page
      And user clicks on save button
      Then ticket status should be closed
      When user switches to window 0
      And user clicks on main page refresh
      Then user validates plaza request has completed

      Examples:

      |Request               |Environment|Description         |Additional Comments|Desc Validation|
      |BDL-AT1 - Test/Request|AT1        |BDL-AT1 - Test/Desc |BDL-AT1 - Test/AC  |               |
      |BDL-AT2- Test/Request |AT2        |BDL-AT2 - Test/Desc |BDL-AT2 - Test/AC  |               |
      |BDL-AT3- Test/Request |AT3        |BDL-AT3 - Test/Desc |BDL-AT3 - Test/AC  |               |
      |BDL-PROD- Test/Request|PROD       |BDL-PROD - Test/Desc|BDL-PROD - Test/AC |               |



