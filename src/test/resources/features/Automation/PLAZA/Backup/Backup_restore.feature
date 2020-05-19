@Backup_restore @PLAZA
  Feature: Backup restore plaza form test
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on Products & Services
      And user clicks on IT Infrastructure dropdown
      And user clicks on storage & data protection under IT Infrastructure
      When user clicks on "Restore from Backup" pebble
      Then user should see "Restore from Backup" form
      Then user selects system name in haiti as "1B"
      When user selects role dropdown as "Application Operation Engineer"
      And user enters Backup request as "Test1 Backup Restore/Request"
      And user enters back up date and as current date and time
      And user selects Add CI back up as "cc100cgas001"
      And user enters Backup UNC Local path as "\\TESTING\This"
      And user enters Backup restore files as "Test file"
      Then user enters Backup description as "Test1 Backup restore/Description"
      And user enters additional comments as "Test1 Backup Restore/AC"
      And user clicks on add attachment in plaza
      And user searches for "Test Attachments\other files\Test Image.png" attachment and adds it
      And user clicks on add attachment in plaza
      And user searches for "Test Attachments\other files\Test Image 2.png" attachment and adds it
      Then user clicks on "Submit"
      And user gets plaza request id
      And user clicks on plaza request id
      Then user should see service request form
      When user opens new tab
      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Work Order"
      And user switches to window 2
      Then user enters plaza request id in the source id field
      And user clicks Search on ticket search
      Then user should see plaza ticket
      And user validates source field as "PLAZA"
      And user validates title field as "Service Request | Restore from Backup"
      And user validates request type as "Service Request | PLAZA"
      #Not sure about description validation outside of a table
      And user validates back up restore description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      And user clicks on attachments under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Backup"
      And user validates 2 attachment visibility under external
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on "Diagnosis" tab
      And user validates CI "cc100cgas001" is listed
      And user right clicks on CI "cc100cgas001" and selects "Impact:Update"
      Then user switches to frame
      And user enters impact from time as past on impact details bulk update window
      And user enters impact to time as past on impact details bulk update window
      Then user clicks confirm checkbox
      And user clicks on bulk update save button
      When user right clicks on CI "cc100cgas001" and clears impact
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
