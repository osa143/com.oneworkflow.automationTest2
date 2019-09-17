@TSPAN @PLAZA
  Feature: TSPAN AP Prod plaza form test
    Scenario Outline: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      When user clicks on "Facility Management"
      And user clicks on order
      And user clicks on IT Infrastructure dropdown
      And user clicks "Storage & Data Protection"
      When user clicks on "TSPAN" pebble
      Then user should see "TSPAN" form
      When user selects Role dropdown as "Application Operation Engineer"
      And user enters BDL request as "<Request>"
      And user selects "<Select Request>" in the select request field
      And user selects environment as "<Environment>"
      And user enters CI as "cc100cgas001"
      And user enters BDL description as "<Description>"
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
      And user validates title field as "Service Request | TSPAN"
      And user validates request type as "Service Request | PLAZA"
      #Not sure about description validation outside of a table
      And user validates description contains DescValidation
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Billing"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on diagnosis tab
      And user validates CI "cc100cgas001" is listed
      And user clicks on CI "cc100cgas001" and selects "Impact:Update
      Then user switches to frame
      And user enters impacted from date as date in past
      And user enters impacted to date as date in past
      Then user clicks confirm checkbox
      And user clicks the save button
      Then user switches to window 1
      When user selects CI present
      And user right clicks on CI "cc100cgas001" and selects "Impact:Clear All"
      Then user selects yes and closes warning message
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
      When user switches to window 0
      And user clicks on main page refresh
      Then user validates plaza request has completed

      Examples:

      |Request            |Select Request |Environment|Description            |Additional Comments|DescValidation|
      |Test1 TSPAN/Request|Acount/Password|Prod       |Test1 TSPAN/Description|Test1 TSPAN/AC     |              |
      |Test2 TSPAN/Request|Acount/Password|Test       |Test2 TSPAN/Description|Test2 TSPAN/AC     |              |
      |Test3 TSPAN/Request|Other          |Prod       |Test3 TSPAN/Description|Test3 TSPAN/AC     |              |
      |Test4 TSPAN/Request|Other          |Test       |Test4 TSPAN/Description|Test4 TSPAN/AC     |              |