@EFS-BSS @PLAZA
Feature: Plaza EFS-BSS form test
  Scenario: user validates information sent to OW from Plaza

    Given user is on the Plaza login page
    When user enters username "testauto" and password as "test123" and clicks on login
    Then user should see the plaza home page
    Then user clicks on plaza portal
    When user clicks on "Facility Management"
    And user clicks on order
    And user clicks on IT Infrastructure dropdown
    And user clicks on "Application"
    When user clicks on "EFS-BSS" pebble
    Then user should see "EFS-BSS" form
    #Then user selects "System Name in Haiti" as "Other"
    When user selects role dropdown as "Application Operation Engineer"
    And user enters EFS-BSS request as "Test1 EFS/Request"
    And user enters CI as "ef002appp1"
    And user enters CI as "ef002appp2"
    And user enters CI as "ef002appp3"
    And user enters EFS description as "Test1 EFS/Description"
    And user enters additional comments as "Test1 EFS/AC"
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
    And user validates title field as "Service Request | EFS-BSS"
    And user validates request type as "Service Request | PLAZA"
     #Not sure about description validation outside of a table
    And user validates efs-bss description same as plaza
    Then user clicks on owner under sections
    And user clicks on assignment under sections
    Then user validates owner profile as "PLAZA"
    And user validates owner as "PLAZA"
    And user should see assigned profile as "Portal"
    Then user clicks on "Interested Parties" tab
    And user validates "PLAZA" is listed as an interested party
    When user clicks on "Diagnosis" tab
    And user validates CI "ef002appp1" is listed in row 3
    And user validates CI "ef002appp2" is listed in row 2
    And user validates CI "ef002appp3" is listed in row 1
    And user right clicks on CI "ef002appp1" and selects "Impact:Update"
    Then user switches to frame
    And user enters impacted from date as date in past
    And user enters impacted to date as date in past
    Then user clicks confirm checkbox
    And user clicks on bulk update save button
    Then user switches to window 1
    Then user selects all CI's that appear
    And user right clicks on CI "ef002appp1" and selects "Impact:Clear All"
    And user should see confirmation message for impact clear and user clicks yes
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

