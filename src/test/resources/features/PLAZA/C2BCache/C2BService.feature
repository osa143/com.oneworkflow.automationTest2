@PLAZA @C2B
Feature: Plaza C2B Cache form test
  Scenario Outline: user validates information sent to OW from Plaza

    Given user is on the Plaza login page
    When user enters username "testauto" and password as "test123" and clicks on login
    Then user should see the plaza home page
    When user clicks on "Order Something" button
    And user clicks "IT Infrastructure" button
    And user clicks "Application" button
    Then user should see "Application" IT Pebbles
    When user clicks on "C2B Service" pebble
    Then user should see "C2B Service" form
    When user selects Role dropdown as "Application Operation Engineer"
    And user enters C2B service request as "<Request>"
    And user enters C2B environment as "<Environment>"
    And user enters C2B description as "<Description>"
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


    Examples:
    |Request                 |Environment|Description                 |AdditionalComments |
    |Test1 C2BService/Request|AT         |Test1 C2BService/Description|Test1 C2BService/AC|
    |Test2 C2BService/Request|Prod       |Test2 C2BService/Description|Test1 C2BService/AC|



