@Database_Access_Request_MSSQL @PLAZA
  Feature: Database Access Request MSSQL plaza form test
    Scenario Outline: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on "Facility Management"
      And user clicks on order
      And user clicks on IT Infrastructure dropdown
      And user clicks on Database
      When user clicks on "Database Request" pebble
      Then user should see "Database Request" form
      Then user selects System name in haiti as "Other"
      When user selects role dropdown as "Application Operation Engineer"
      And user selects service request name as "Access Request"
      And user enters Database Access request as "<Request>"
      And user selects Database Type as "<Database Type>"
      And user selects add server CI as "cc100cgas001"
      And user selects add Database CI as "TEST"
      And user enters Database Name as "Test name"
      And user selects database Account Type as "<Account Type>"
      Then user selects New Existing Account as "New"
      And user enters database Account Name as "Test account"
      Then user enters database Permissions as "Test permission"
      Then user enters Database Access Request description as "<Description>"
      And user enters additional comments as "<Additional Comments>"
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
      And user validates title field as "Service Request | Database Request"
      And user validates request type as "Service Request | PLAZA"
      And user validates Database access request description same as plaza
      Then user clicks on owner under sections
      #And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Oracle/MSSQL/MySQL/PostgreSQL"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on "Diagnosis" tab
      And user validates CI "cc100cgas001" is listed
      And user validates CI "TEST" is listed
      And user selects all CI's that appear
      And user right clicks on CI "cc100cgas001" and selects "Impact:Update"
      Then user switches to frame
      And user enters impact from time as past on impact details bulk update window
      And user enters impact to time as past on impact details bulk update window
      Then user clicks confirm checkbox
      And user clicks on bulk update save button
      Then user switches to window 1
      When user selects all CI's that appear
      And user right clicks on CI "cc100cgas001" and selects "Impact:Clear All"
      And user should see confirmation message for impact clear and user clicks yes
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

      |Request                                |Database Type|Description                      |Additional Comments  |Account Type|
     # |Test1 Database AccessMSSQL/Request     |MSSQL        |Test1 Database Access/Description|Database - Test1/AC  |SQL Server  |
       |Test2 Database AccessMySQL/Request     |MySQL        |Test2 Database Access/Description|Database - Test2/AC  |SQL Server  |




