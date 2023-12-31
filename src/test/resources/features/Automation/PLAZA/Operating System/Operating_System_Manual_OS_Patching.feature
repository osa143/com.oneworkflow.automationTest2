@Operating_System_Manual_OS_Patching @OPS @PLAZA
  Feature: Operating System Manual OS Patching plaza form test
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
      When user clicks on Manual OS Patching
      Then user should see "Manual OS Patching" form
      Then user selects operating system name in haiti as "1B"
      When user selects role dropdown as "Application Operation Engineer"
      And user enters operating system manual os patching request as "Test6 Operating System Manual/Request"
#      And user selects any operating system manual OS patching CI
      And user waits 40 secs
      And user selects manual os patching Operating System as "Solaris"
      And user selects Server placed in Veha as "Yes"
      And user enters WBS Code as "P100-000-000"
      And user enters planned start date and time as current date and time
      And user enters planned end date and time as current date and time
      Then user enters manual os patching Plan to enable automatic monthly patching as "Test plan"
      And user enters H2 as "Test H2"
      Then user enters manual os patching operating system description as "Test6 Operating System Manual/Description"
      And user enters additional comments as "Test6 Operating System Manual/AC"
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
      And user validates title field as "Service Request | Manual OS Patching"
      And user validates request type as "Service Request | PLAZA"
#      And user validates operating system manual os patching description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Linux/Unix L2"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on "Diagnosis" tab
      And user right click on plaza primary CI and selects "Impact:Update"
      Then user switches to frame
      And user enters impact from time as past on impact details bulk update window
      And user enters impact to time as past on impact details bulk update window
      Then user clicks confirm checkbox
      And user clicks on bulk update save button
      And user right clicks on primary CI and clears impact
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

