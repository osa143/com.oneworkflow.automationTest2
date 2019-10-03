@Network_Security_Proxy_Surf_Proxy @PLAZA
  Feature: Network Security Proxy Surf Proxy plaza form test
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      When user clicks on "Facility Management"
      And user clicks on order
      And user clicks on IT Infrastructure dropdown
      And user clicks on "Firewall & Network"
      When user clicks on Proxy pebble
      Then user should see "Proxy" form
      When user selects role dropdown as "Application Operation Engineer"
      And user selects service request name as "Surf proxy/URL filter"
      And user enters network security proxy request as "Test4 Network Security Proxy/Request"
      And user selects SurfProxy url filter as "No one can reach a certain URL"
      And user enters proxy date and time when tests performed as current date and time
      And user enters proxy Source IP Address as "Test address"
      Then user enters URL as "Test.teliacompany.net"
      Then user selects internal external website as "Yes"
      Then user enters error message as "Test Error Message"
      And user enters has it worked before as "Test Work"
      Then user enters when did the problem occure as "Test occure"
      And user enters what is your current proxy settings as "test proxy"
      Then user enters ticket number as "Test ticket"
      Then user enters network security proxy description as "Test4 Network Security Proxy/Description"
      And user enters additional comments as "Network Security Proxy - Test4/AC"
      Then user clicks on "Submit"
      And user gets plaza request id
      And user clicks on plaza request id
      Then user should see service request form
      When user opens new tab
      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_7" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Work Order"
      And user switches to window 2
      Then user enters plaza request id in the source id field
      And user clicks Search on ticket search
      Then user should see plaza ticket
      And user validates source field as "PLAZA"
      And user validates title field as "Service Request | Proxy"
      And user validates request type as "Service Request | PLAZA"
     #Not sure about description validation outside of a table
      And user validates network security proxy surf proxy description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Proxy L2"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on Ack button
      And user changes status to "Cleared" on work order page
      And user selects completed code as "Success"
      And user clicks on "Schedule" tab
      And user enters schedule end as current date
      Then user clicks on save button
      And user validates ticket status as "Cleared"
      When user changes status to "Closed" on work order page
      And user clicks on save button
      Then ticket status should be closed
      When user switches to window 0
      And user clicks on main page refresh
      Then user validates plaza request has completed
