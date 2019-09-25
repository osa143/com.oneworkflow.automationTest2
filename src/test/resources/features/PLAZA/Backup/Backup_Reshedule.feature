@Backup_Re_Schedule @PLAZA
  Feature:Backup (Re)Schedule plaza form test
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      When user clicks on "Facility Management"
      And user clicks on order
      And user clicks on IT Infrastructure dropdown
      And user clicks on "Storage & Data Protection"
      When user clicks on "Re/Schedule Backup" pebble
      Then user should see "Re/Schedule Backup" form
      When user selects role dropdown as "Application Operation Engineer"
      Then user clicks on the contact checkbox
      And user then clicks on the name not found checkbox
      And user enters name field as "Test1234"
      Then user enters email address field as "Test@Test.com"
      Then user enters phone field as "123456789"
      And user enters Backup request as "Test1 Backup (Re)Schedule/Request"
      And user enters Backup (Re)Schedule schedule as "Test Schedule"
      And user enters Backup (Re)Schedule UNC Local path as "\\TESTING\This"
      Then user enters Backup description as "Test1 Backup (Re)Schedule/Description"
      And user enters additional comments as "Test1 Backup (Re)Schedule/AC"
      And user selects Add CI back up as "cc100cgas001"
      And user clicks on add attachment in plaza
      And user searches for "Test Attachments\other files\Test WORD FILE.docx" attachment and adds it
      Then user clicks on "Submit"
      And user gets plaza request id
      And user clicks on plaza request id
      Then user should see service request form
      When user opens new tab
      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_3" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Work Order"
      And user switches to window 2
      Then user enters plaza request id in the source id field
      And user clicks Search on ticket search
      Then user should see plaza ticket
      And user validates source field as "PLAZA"
      And user validates title field as "Service Request | Re/Schedule Backup"
      And user validates request type as "Service Request | PLAZA"
      #Not sure about description validation outside of a table
      And user validates back up Reschedule description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      And user clicks on attachments under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Backup"
      And user validates 1 attachment visibility under external
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on "Diagnosis" tab
      And user validates CI "cc100cgas001" is listed
      And user right clicks on CI "cc100cgas001" and selects "Impact:Update"
      Then user switches to frame 3
      And user enters impact from time as past on impact details bulk update window
      And user enters impact to time as past on impact details bulk update window
      Then user clicks confirm checkbox
      And user clicks on bulk update save button
      When user right clicks on CI "cc100cgas001" and selects "Impact:Clear All"
      And user should see confirmation message and clicks on yes button
      When user clicks on Ack button
      And user changes status to "Cleared" on work order page
      And user selects completed code as "Success"
      And user clicks on "Schedule" tab
      And user enters schedule end as current date
      Then user clicks on save button
      And user validates ticket status as "Cleared"
      When user changes status to "Closed" on work order page
      And user clicks on save button and closes warning messages
      Then ticket status should be closed
      When user switches to window 0
      And user clicks on main page refresh
      Then user validates plaza request has completed