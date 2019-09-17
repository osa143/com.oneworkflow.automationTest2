@Network_Security_Proxy_Reverse_Proxy @PLAZA
  Feature: Network Security Proxy Reverse Proxy form test
    Scenario: user validates information sent to OW from Plaza
      #not checked in ow

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      When user clicks on "Facility Management"
      And user clicks on order
      And user clicks on IT Infrastructure dropdown
      And user clicks "Firewall & Network"
      When user clicks on "Proxy" pebble
      Then user should see "Proxy" form
      When user selects role dropdown as "Application Operation Engineer"
      And user selects Service Request as "Reverse Proxy"
      And user enters Network Security Proxy Resource request as "Test1 Network Security Proxy/Request"
      Then user enters Source IP as "Test 192.168.1.1"
      And user enters Reverseproxy DNS name as "Test.teliacompany.net"
      And user enters Reverseproxy Protocol/Port as "https/447.test"
      And user enters Certificate as "Test certificate"
      Then user enters Webserver address as "Test webserver"

      And user selects High Availability as "Yes"

      And user selects Load balancing Method as ""

      Then user enters Network Security Proxy Resource description as "Test1 Network Security/Description"
      And user enters additional comments as "Network Security - Test/AC"
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
      And user validates description contains DescValidation
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Proxy L2"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on Ack button
      And user changes status to "Cleared"
      And user selects completed code as "Success"
      And user clicks on "Schedule" tab
      And user enters schedule end as current date
      Then user clicks on save button
      And user validates ticket status as "Cleared"
      When user changes status to "Closed"
      And user clicks on save button
      Then ticket status should be closed
      When user switches to window 0
      And user clicks on main page refresh
      Then user validates plaza request has completed