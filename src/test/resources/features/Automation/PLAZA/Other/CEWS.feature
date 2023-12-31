@CEWS_Plaza @PLAZA
  #SAO-5808 included
  Feature: CEWS plaza form test
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      And user waits 5 secs
      When user clicks on Products & Services
      And user clicks on IT Infrastructure dropdown
      And user waits 2 secs
      And user clicks on application under IT Infrastructure dropdown
      And user clicks on show more button
      When user clicks on "CEWS" pebble
      Then user should see "CEWS" form
      #Then user selects system name in haiti as "Other"
      When user selects role dropdown as "Application Operation Engineer"
#      Then user clicks on the contact checkbox
#      And user then clicks on the name not found checkbox
#      And user enters name field as "Test1234"
#      And user enters email address field as "Test@Test.com"
#      Then user enters phone field as "123456789"
      And user enters CEWS request as "Test1 CEWS/Request"
#      And user selects any cews CI
      And user waits 60 secs
      Then user enters CEWS description as "Test1 CEWS/Description"
      And user enters additional comments as "Test1 CEWS/AC"
      Then user clicks on "Submit"
      And user gets plaza request id
      And user clicks on plaza request id
      Then user should see service request form
      When user opens new tab
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Work Order"
#      And user clicks agent console search menu
#      And user selects agent console open search form
#      And user selects agent console search work order
      And user switches to window 2
      Then user enters plaza request id in the source id field
      And user clicks Search on ticket search
      And user waits 30 secs
      Then user should see plaza ticket
      When user clicks on Ack button
      And user clicks on ticket refresh button
      And user validates source field as "PLAZA"
      And user validates title field as "Service Request | CEWS"
      And user validates request type as "Service Request | PLAZA"
#      And user validates cews description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Billing"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on "Diagnosis" tab
      And user right clicks on primary CI and selects "Impact:Update"
      Then user switches to frame
      And user enters impact from time as past on impact details bulk update window
      And user enters impact to time as past on impact details bulk update window
      Then user clicks confirm checkbox
      And user clicks on bulk update save button
      And user clicks on save button
      And user right clicks on primary CI and clears impact
      And user should see confirmation message for impact clear and user clicks yes
      And user changes status to "Cleared" on work order page
      And user selects completion code as "Success"
      And user clicks on "Schedule" tab
      And user enters schedule end as current date
      Then user clicks on save button
      And user validates ticket status as "Cleared"
      When user changes status to "Closed" on work order page
      And user clicks on save button
      And user validates ticket status as "Closed"
      And user validates event start time as read only
      And user validates Priority is readonly
      When user switches to window 0
      And user clicks on main page refresh
      Then user validates plaza request has completed




