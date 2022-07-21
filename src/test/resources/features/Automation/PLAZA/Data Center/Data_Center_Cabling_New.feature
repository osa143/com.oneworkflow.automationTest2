@Data_Center_Cabling_New #@PLAZA
  Feature: Data center plaza form test not found
  Scenario: user validates information sent to OW from Plaza


    Given user is on the Plaza login page
    When user enters username "testauto" and password as "test123" and clicks on login
    Then user should see the plaza home page
    Then user clicks on plaza portal
    When user clicks on Products & Services
    And user clicks on IT Infrastructure dropdown
    And user waits 2 secs
    And user clicks on data center under IT Infrastructure dropdown
    When user clicks on "Cabling - New" pebble
    Then user should see "Cabling - New" form
    Then user selects system name in haiti as "AAA"
    When user selects role dropdown as "Application Operation Engineer"
    And user enters Cabling - New request as "Test1 Cabling/Request"
    And user enters DC-site or address as "Test address"
    And user enters Room as "Test room"
    And user enters delivery date as current date
    Then user enters Data Center description as "Test1 Data Center/Description"
    And user enters WBS Code field as "P100-000-000"
    And user enters additional comments as "Data Center - Test1/AC"
    Then user clicks on "Submit"
    And user gets plaza request id
    And user clicks on plaza request id
    Then user should see service request form
    When user opens new tab
    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user clicks agent console search menu
    And user selects agent console open search form
    And user selects agent console search work order
    And user switches to window 2
    Then user enters plaza request id in the source id field
    And user clicks Search on ticket search
    Then user should see plaza ticket
    And user validates source field as "PLAZA"
    And user validates title field as "Service Request | Cabling - New"
    And user validates request type as "Service Request | PLAZA"
#    And user validates Data center cabling new description same as plaza
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
    And user waits 5 secs
    And user clicks on main page refresh
    Then user validates plaza request has completed