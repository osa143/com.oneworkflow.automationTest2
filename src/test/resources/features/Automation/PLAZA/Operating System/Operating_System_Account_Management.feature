@Operating_System_Account_Management @OPS @PLAZA
  #retest
  Feature: Operating System Account Management plaza
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on Products & Services
      And user clicks on IT Infrastructure dropdown
      And user waits 2 secs
      And user clicks on compute & operating system under IT Infrastructure dropdown
      And user clicks on show more button
      When user clicks on account management and server form
      Then user should see "Account Management - Server" form
      Then user selects operating account management system name in haiti as "1B"
      When user selects role dropdown as "Application Operation Engineer"
      And user enters operating system account management request as "Test2 Operating System Account/Request"
      And user selects select request "Add Local Account"
      Then user selects operating system as "Windows"
#      And user selects any operating system account management server CI
      And user waits 50 secs
      Then user selects operating system account type as "SuperUser/Administrator"
      And user enters account name as "Test name"
      Then user enters operating system description as "Test2 Operating System/Description"
      And user enters additional comments as "Test2 Operating System/AC"
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
      And user validates source field as "PLAZA"
      And user validates title field as "Service Request | Account Management - Server"
      And user validates request type as "Service Request | PLAZA"
#      And user validates operating system account management description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Windows L2"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on "Diagnosis" tab
      And user validates CI "10 SOKETTI" is listed
      And user right clicks on CI "10 SOKETTI" and selects "Impact:Update"
      Then user switches to frame
      And user enters impact from time as past on impact details bulk update window
      And user enters impact to time as past on impact details bulk update window
      Then user clicks confirm checkbox
      And user clicks on bulk update save button
      And user right clicks on CI "10 SOKETTI" and clears impact
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
      And user waits 10 secs
      And user clicks on main page refresh
      Then user validates plaza request has completed