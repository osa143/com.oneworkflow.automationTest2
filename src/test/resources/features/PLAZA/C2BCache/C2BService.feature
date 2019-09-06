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
    Then user should see "C2B Cache" form
    When user selects Role dropdown as "Application Operation Engineer"
