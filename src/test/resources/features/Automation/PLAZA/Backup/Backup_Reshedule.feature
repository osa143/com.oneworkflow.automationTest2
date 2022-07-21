@Backup_Re_Schedule  @Back_up
  Feature:Backup (Re)Schedule plaza form test
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on Products & Services
      And user clicks on IT Infrastructure dropdown
      And user waits 2 secs
      And user clicks on storage & data protection under IT Infrastructure
      And user waits 5 secs
      When user clicks on "Re/Schedule Backup" pebble
      Then user should see "Re/Schedule Backup" form
      Then user selects system name in haiti as "AAA"
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
#      And user clicks on add attachment in plaza
      And user searches for plaza "Test Attachments\other files\Test WORD FILE.docx" attachment and adds it
      And user waits 10 secs
      Then user clicks on "Submit"
      And user gets plaza request id
      And user clicks on plaza request id
      Then user should see service request form
      When user opens new tab
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      And user clicks agent console search menu
      And user selects agent console open search form
      And user selects agent console search work order
      And user switches to window 2
      Then user enters plaza request id in the source id field
      And user clicks Search on ticket search
      Then user should see plaza ticket
      When user clicks on Ack button
      Then user clicks on ticket refresh button
      And user validates source field as "PLAZA"
      And user validates title field as "Service Request | Re/Schedule Backup"
      And user validates request type as "Service Request | PLAZA"
#      And user validates back up Reschedule description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      And user clicks on attachments under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Backup"
      And user validates 1 attachment visibility under external
#      When user clicks attachment open button
#      And user switches to window 3
#      Then user validates external is selected
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
      When user right clicks on primary CI and clears impact
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
      And user waits 4 secs
      And user clicks on main page refresh
      Then user validates plaza request has completed