@Network_Security_Slow_Surfing @PLAZA @Network_Security
  #passed
  Feature: Network Security proxy surf proxy slow surfing
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on Products & Services
      And user clicks on IT Infrastructure dropdown
      And user clicks on firewall & network under IT Infrastructure dropdown
      And user clicks on show more button
      When user clicks on Proxy pebble
      Then user should see "Proxy" form
      Then user selects proxy general inquiry system name in haiti as "1B"
      When user selects role dropdown as "Application Operation Engineer"
      Then user selects service request name as "Surf proxy/URL filter"
      And user enters network security proxy request as "Test6 Network Security Proxy/Request"
      Then user selects SurfProxy url filter as "Slow surfing"
      And user enters user IP as "Test user IP"
      And user enters proxy date and time when tests performed as current date and time
      Then user selects internal external sites as "Yes"
      Then user enters network security proxy description as "Test6 Network Security Proxy/Description"
      And user enters additional comments as "Network Security Proxy - Test6/AC"
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
      And user validates title field as "Service Request | Proxy"
      And user validates request type as "Service Request | PLAZA"
      And user validates network security proxy surf proxy slow surfing description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Proxy L2"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
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