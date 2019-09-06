@PLAZA @CRM
Feature: Plaza CRM form test
  Scenario Outline: user validates information sent to OW from Plaza

    Given user is on the Plaza login page
    When user enters username "testauto" and password as "test123" and clicks on login
    Then user should see the plaza home page
    When user clicks on "Order Something" button
    And user clicks "IT Infrastructure" button
    And user clicks "Application" button
    Then user should see "Application" IT Pebbles
    When user clicks on "CRM" pebble
    Then user should see "CRM" form
    When user selects Role dropdown as "Application Operation Engineer"
    And user selects service request name as <SRName>
    And user enters CRM request as <Request>
    And user enters CRM system as <System>
    And user enters CRM planned start date as current date
    And user enters CRM planned end date as current date
    And user enters CRM description as <Description>
    And user enters additional comments as <AdditionalComments>
    Then user clicks on submit button
    And user gets plaza request id
    And user clicks on plaza request id
    Then user should see service request form
    When user opens another window
    And user enters OW URL
    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_7" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Work Order"
    And user switches to window 2
    Then user enters plaza request id in the source id field
    And user clicks Search on ticket search
    Then user should see plaza ticket
    And user validates source field as "PLAZA"
    And user validates title field as "Service Request | CRM"
    And user validates description contains: <DescValidation>
    Then user clicks on owner under sections
    And user clicks on assignment under sections
    Then user validates owner profile as ""
    And user validates owner as ""
    And user validates assignee is ""
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







    Examples:

    |SRName         |Request          |System|Description          |AdditionalComments|DescValidation|
    |General Request|Test2 CRM/Request|1B    |Test2 CRM/Description|Test2 CRM/AC      |              |
