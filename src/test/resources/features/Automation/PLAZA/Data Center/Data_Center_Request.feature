@Data_Center_Request @PLAZA
  Feature: Data Center Request plaza form test
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on Products & Services
      And user clicks on IT Infrastructure dropdown
      And user clicks on data center under IT Infrastructure dropdown
      When user clicks on "Datacenter Request" pebble
      Then user should see "Datacenter Request" form
      Then user selects system name in haiti as "1B"
      When user selects role dropdown as "Application Operation Engineer"
      And user enters Data Center Request request as "Test6 Data Center/Request"
      And user enters Data Center Request DC-site or address as "Test address"
      And user enters Data Center Request Room as "Test room"
      And user enters Data Center Request delivery date as current date
      And user enters Data Center Request WBS Code field as "P100-000-000"
      And user enters additional comments as "Data Center - Test6/AC"
      Then user clicks on "Submit"
      And user should see pop window with info about missing field
      Then user enters Data Center Request description as "Test6 Data Center/Description"
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
      And user validates title field as "Service Request | Datacenter Request"
      And user validates request type as "Service Request | PLAZA"
      And user validates Data center request description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "DC Sweden"
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
      And user clicks on main page refresh
      Then user validates plaza request has completed

