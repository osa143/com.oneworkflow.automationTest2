@Nimbus_Extend_Disk_Windows @Nimbus #@PLAZA
  Feature: Nimbus Extend Disk Windows plaza form test
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on Products & Services
      And user clicks on IT Infrastructure dropdown
      And user waits 2 secs
      And user clicks on cloud under IT Infrastructure dropdown
      When user clicks on "Skypoint - private cloud" pebble
      Then user should see "Skypoint - private cloud" form
      Then user selects nimbus system name in haiti as "AAA"
      When user selects role dropdown as "Application Operation Engineer"
      And user selects service request name as "Extend disk on VM - Windows"
      And user selects nimbus extend disk CI as "cc100cgas001"
      And user enters volumes drives as "Test Drive"
      And user enters additional comments as "Test5 Nimbus/AC"
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
      And user validates title field as "Service Request | Skypoint - private cloud"
#      And user validates nimbus extend disk windows description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Windows L2"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on "Diagnosis" tab
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
      And user waits 5 secs
      And user clicks on main page refresh
      Then user validates plaza request has completed
