@Network_Security_Proxy_Surf_Proxy @PLAZA
  Feature: Network Security Proxy Surf Proxy plaza form test
    Scenario Outline: user validates information sent to OW from Plaza
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
      And user selects Service Request as "Surf proxy/URL filter"
      And user enters Network Security Proxy Resource request as "<Request>"
      And user selects SurfProxy /URL filter as "<SurfProxy /URL filter>"
      And user clicks the calendar and selects current date and time
      And user enters Source IP address as "Test address"
      Then user enters URL as "Test.teliacompany.net"

      Then user selects Internal/External website as "Yes"
      Then user enters Error Message as "Test Error Message"
      And user enters Has it worked before as ""
      Then user enters When did the problem occure as ""
      And user enters What is your current proxy settings as "test proxy"
      Then user enters ticket number as "Test ticket"


      Then user enters Network Security Proxy Surf description as "<Description>"
      And user enters additional comments as "<Additional Comments>"
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

      Examples:

      |Request                             |SurfProxy /URL filter                      |Description                       |Additional Comments       |Desc Validation|
      |Test1 Network Security Proxy/Request|No one can reach a certain URL             |Test1 Network Security/Description|Network Security - Test/AC|               |
      |Test2 Network Security Proxy/Request|One or few users cannot reach a certain URL|Test2 Network Security/Description|Network Security - Test/AC|               |