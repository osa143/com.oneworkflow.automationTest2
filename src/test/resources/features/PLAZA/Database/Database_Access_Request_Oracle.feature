@Database_Access_Request_Oracle @PLAZA
  Feature: Database Access Request Oracle plaza form test
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      When user clicks on "Facility Management"
      And user clicks on order
      And user clicks on IT Infrastructure dropdown
      And user clicks "Database"
      When user clicks on "Database Request" pebble
      Then user should see "Database Request" form
      When user selects role dropdown as "Application Operation Engineer"
      And user selects service request name as "Access/Request"
      And user enters Database Access request as "Test2 Database AccessOracle/Request"
      And user selects Database Type as "Oracle"
      Then user enters CI as "cc001cgas001"
      And user enters Database CI as "TEST"
      Then user enters enters Database name as "Test name"
      Then user enters Default tablespace as "Test tablespace"
      Then user selects Account Type as "SQL Server"
      And user selects New/Existing Account as "New"
      Then user enters Account Name as "Test account name"
      And user enters Permissions as "Test permissions"
      Then user enters Database Access Request Oracle description as "Test2 Database Access Oracle/Description"
      And user enters additional comments as "Database Oracle - Test2/AC"
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
      And user validates title field as "Service Request | Database Request"
      And user validates request type as "Service Request | PLAZA"
     #Not sure about description validation outside of a table
      And user validates description contains DescValidation
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Oracle/MSSQL/MySQL/PostgreSQL"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on diagnosis tab
      And user validates CI "cc100cgas001" is listed
      And user validates CI "TEST" is listed
      And user selects all CI's and selects "Impact:Update
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