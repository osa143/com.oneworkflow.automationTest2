@Database_Access_Request_MSSQL @PLAZA
  Feature: Database Access Request MSSQL plaza form test
    #not checked in ow
    Scenario Outline: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      When user clicks on "Facility Management" button
      And user clicks on "Order" button
      And user clicks "Database" button
      Then user should see "Database" IT Pebbles
      When user clicks on "Database Request" pebble
      Then user should see "Database Request" form
      When user selects role dropdown as "Application Operation Engineer"
      And user selects service request name as "Access/Request"
      And user enters Database Access request as "<Request>"
      And user selects Database Type as "<Database Type>"
      And user enters CI as "cc100cgas001"
      And user enters Database CI as "TEST"
      And user enters Database Name as "Test name"
      And user enters DNS/IP address as "Test address"
      And user selects Account Type as "SQL"


      Then user enters Database Access Request description as "<Description>"
      And user enters additional comments as "<Additional Comments>"
      Then user selects Account Name as "New"
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
      And user validates title field as "Service Request | Database"
      And user validates request type as "Service Request | PLAZA"
     #Not sure about description validation outside of a table
      And user validates description contains DescValidation
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as ""
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

      Examples:

      |Request                      |Database Type|Description                      |Additional Comments  |Account Type|Desc Validation|
      |Test1 Database Access/Request|MSSQL        |Test1 Database Access/Description|Database - Test1/AC  |SQL         |
      |Test2 Database Access/Request|MySQL        |Test2 Database Access/Description|Database - Test2/AC  |SQL         |
      |Test3 Database Access/Request|Oracle       |Test3 Database Access/Description|Database - Test3/AC  |SQL         |
      |Test4 Database Access/Request|PostgreSQL   |Test4 Database Access/Description|Database - Test4/AC  |SQL         |



