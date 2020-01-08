@Topcat2 @PLAZA
  Feature: Topcat plaza form test
    Scenario Outline: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on Products & Services
      And user clicks on IT Infrastructure dropdown
      And user clicks on "Application" under IT Infrastructure
      When user clicks on "Topcat" pebble
      Then user should see "Topcat" form
     # Then user selects system name in haiti as "Other"
      When user selects role dropdown as "Application Operation Engineer"
      And user selects Select service request name as "<Service Request Name>"
      And user enters Topcat request as "<Request>"
      And user enters topcat add CI as "aa789win01t"
      And user enters Topcat description as "<Description>"
      And user enters additional comments as "<Additional Comments>"
      Then user clicks on "Submit"
      And user gets plaza request id
      And user clicks on plaza request id
      Then user should see service request form
      And user opens new tab
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Work Order"
      And user switches to window 2
      Then user enters plaza request id in the source id field
      And user clicks Search on ticket search
      Then user should see plaza ticket
      And user validates source field as "PLAZA"
      And user validates title field as "Service Request | Topcat"
      And user validates request type as "Service Request | PLAZA"
      And user validates topcat description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Enterprise"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on "Diagnosis" tab
      And user validates CI "aa789win01t" is listed
      And user right clicks on CI "aa789win01t" and selects "Impact:Update"
      Then user switches to frame
      And user enters impact from time as past on impact details bulk update window
      And user enters impact to time as past on impact details bulk update window
      Then user clicks confirm checkbox
      And user clicks on bulk update save button
      When user right clicks on CI "aa789win01t" and clears impact
      When user clicks on Ack button
      And user changes status to "Cleared"
      And user selects completion code as "Success"
      And user clicks on "Schedule" tab
      And user enters schedule end as current date
      Then user clicks on save button
      And user validates ticket status as "Cleared"
      When user changes status to "Closed"
      And user clicks on save button
      And user validates ticket status as "Closed"
      When user switches to window 0
      And user clicks on main page refresh
      Then user validates plaza request has completed

      Examples:

      |Service Request Name       |Request             |Description             |Additional Comments|Desc Validation|
      |General Request            |Test2 Topcat/Request|Test2 Topcat/Description|Test2 Topcat/AC    |               |
      #|Restore Catalogue Database |Test1 Topcat/Request|Test1 Topcat/Description|Test1 Topcat/AC    |               |
