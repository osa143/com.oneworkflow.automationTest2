@ServiceRequestIBSOrderVirtualServerToDDC
  Feature: Service Request - IBS - Order virtual server to DDC plaza test
    Scenario: Service Request - IBS - Order virtual server to DDC plaza test

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on Products & Services
      And user clicks on IT Infrastructure dropdown
      And user clicks on "Application" under IT Infrastructure
      Then user clicks on "IBS" pebble
      And user should see "IBS" form
      Then user selects role dropdown as "Application Operation Engineer"
      And user selects service request name as "Order virtual server to DDC"
      Then user enters ibs request as "Test Request"
      And user selects ddc site as "Haninge (Default, non DR  servers)"
      Then user selects system dropdown as "cc100 - Callguide-Windows (P1-02118-01040, Hid100003938)"
      And user selects server type as "cc100cgas - CCS-Callguide-Core (Windows)"
      Then user selects vlan as "IBS-DDC"
      Then user enters description as "Test Description"
      And user enters additional comments as "Test A/C"
      Then user clicks on "Submit"
      And an error message should appear: "Some fields are incomplete: No of servers"
      Then user selects number of servers as "1"
      And user clicks on "Submit"
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
      Then user validates title field as ""
      And user validates request type as ""
      And user validates ibs customer or server activcation description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as ""
      And user validates owner as ""
      Then user should see assigned profile as ""
      And user clicks on "Interested Parties" tab
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
      And user clicks on main page refresh
      Then user validates plaza request has completed
