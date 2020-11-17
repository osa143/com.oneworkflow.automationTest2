@Database_Backup_Or_Restore @PLAZA
  Feature: Database Backup or Restore plaza form test
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on Products & Services
      And user clicks on IT Infrastructure dropdown
      And user clicks on database under IT Infrastructure
      When user clicks on "Database Request" pebble
      Then user should see "Database Request" form
      Then user selects System name in haiti as "1B"
      When user selects role dropdown as "Application Operation Engineer"
      And user selects service request name as "Backup/Restore"
      And user enters Database request as "Test3 Database Backup/Request"
      And user selects database request Choose Action as "Backup"
      And user selects database request Database Type as "MSSQL"
      And user selects database request add server CI as "cc001cgas001"
      And user selects database request add Database CI as "TEST"
      And user enters database request Database Name as "Test name"
      And user selects Backup to standard location as "Yes"
      Then user enters Database Planned Start Date & Time as current date
      Then user enters Database Request description as "Test3 Backup Restore/Description"
      And user enters additional comments as "Database BR - Test3/AC"
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
      And user waits 10 secs
      Then user enters plaza request id in the source id field
      And user clicks Search on ticket search
      Then user should see plaza ticket
      And user validates source field as "PLAZA"
      And user validates title field as "Service Request | Database Request"
      And user validates request type as "Service Request | PLAZA"
     #Not sure about description validation outside of a table
      And user validates Database backup or restore description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "MSSQL L3"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on "Diagnosis" tab
      And user validates CI "TEST" is listed
      And user validates CI "cc001cgas001" is listed in row 2
      And user right clicks on CI "cc001cgas001" and selects "Impact:Update"
      Then user switches to frame
      And user enters impact from time as past on impact details bulk update window
      And user enters impact to time as past on impact details bulk update window
      Then user clicks confirm checkbox
      And user clicks on bulk update save button
      And user right clicks on CI "TEST" and selects "Impact:Update"
      Then user switches to frame
      And user enters impact from time as past on impact details bulk update window
      And user enters impact to time as past on impact details bulk update window
      Then user clicks confirm checkbox
      And user clicks on bulk update save button
      And user right clicks on CI "cc001cgas001" and clears impact for all CI's
      Then user should see confirmation message for impact clear and user clicks yes
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


