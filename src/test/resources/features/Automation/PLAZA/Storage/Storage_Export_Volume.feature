@Storage_Export_Volume @PLAZA
  Feature: Storage Export Volume plaza form test
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on Products & Services
      And user clicks on IT Infrastructure dropdown
      And user waits 2 secs
      And user clicks on "Storage & Data Protection"
      When user clicks on "Export volume Snapshot to Host" pebble
      Then user should see "Export volume Snapshot to Host" form
      Then user selects system name in haiti as "AAA"
      When user selects role dropdown as "Application Operation Engineer"
      And user enters Storage export request as "Test2 Storage/Request"
      And user selects storage export CI as "cc100cgas002"
      And user enters Source WWN as "Test WWN"
      And user enters date time of snapshot as current date and time
      And user enters Target CI as "cc100cgas001"
      And user enters Storage export description as "Test2 Storage Export Volume/Description"
      And user enters additional comments as "Test2 Storage Export Volume/AC"
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
      And user validates title field as "Service Request | Export volume Snapshot to Host"
      And user validates request type as "Service Request | PLAZA"
#      And user validates storage export volume description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Storage"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on "Diagnosis" tab
      And user validates CI "cc100cgas001" is listed in row 2
      And user validates CI "cc100cgas002" is listed in row 1
      And user right clicks on CI "cc100cgas001" and update impact from as past time
      And user right clicks on primary CI and clears impact for all CIs
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
