Feature: Today in the customer operations interface,
  when a create incident message is sent to one workflow with both the CTI values and a CI,
  then the incident is created with the CTI values first (and assignment rules trigger)
  but then the CTI values get updated based on the CI attached.
  It is requested that if a customer operations send CTI values that they do not get overwritten.

  @CTI_and_No_CI @CTI_Validation
Scenario: Create work order when CO system sends CTI and No CI
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
    Then user selects system name in haiti as "118 redagavimo sistema"
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
#    When user selects search menu as "Open Search Form:Work Order"
    And user clicks agent console search menu
    And user selects agent console open search form
    And user selects agent console search trouble event
    And user switches to window 2
    Then user enters plaza request id in the source id field
    And user clicks Search on ticket search
    Then user should see plaza ticket
    And user validates source field as "PLAZA"
    And user validates title field as "Service Request | Cabling - New"
    And user validates request type as "Service Request | PLAZA"
    And user validates Data center cabling new description same as plaza
    Then user clicks on owner under sections
    And user clicks on assignment under sections
    And user clicks on CTI details under sections
    Then user validates owner profile as "PLAZA"
    And user validates owner as "PLAZA"
    And user should see assigned profile as "DC Sweden"
    And user validates Category as "IT"
    And user validates type as "DataCenter"
    And user validates item as "DC Sweden"
      Then user clicks on save button



#Given user have access to CO system and Ow
#When user sends create incident message with CTI and No CI details
#Then incident should be created in OW
#And incident status should be assigned
#And incident assignment rules should be triggered based on the CTI details
#And CTI detilas should be same CO system CTI