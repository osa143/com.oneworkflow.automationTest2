@Add_CI_In_OW
#OS3:WO:Request:IF:Interface:SubmitAttachCIValidateCIName

Feature: Adding CI in OW

  Scenario: Adding CI in OW

    Given user is on the Plaza login page
    When user enters username "testauto" and password as "test123" and clicks on login
    Then user should see the plaza home page
    Then user clicks on plaza portal
    When user clicks on Products & Services
    And user clicks on IT Infrastructure dropdown
    And user clicks on application under IT Infrastructure dropdown
    And user clicks on show more button
    And user waits 2 secs
    And user clicks on show more button
    When user clicks on "WEB TAB" pebble
    Then user should see "WEB TAB" form
      #Then user selects system name in haiti as "Other"
    When user selects role dropdown as "Application Operation Engineer"
    And user enters web tab request as "Test1 Web Tab/Request"
    And user enters web tab CI as "cc100cgas001"
    Then user enters web tab description as "Test1 Web Tab/Description"
    And user enters additional comments as "Test1 Web Tab/AC"
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
    And user validates title field as "Service Request | WEB TAB"
    And user validates request type as "Service Request | PLAZA"
    And user validates web tab description same as plaza
    Then user clicks on owner under sections
    And user clicks on assignment under sections
    Then user validates owner profile as "PLAZA"
    And user validates owner as "PLAZA"
    And user should see assigned profile as "Enterprise"
    Then user clicks on "Interested Parties" tab
    And user validates "PLAZA" is listed as an interested party
    #When user adds CI "One Workflow" to the ticket
    When user adds CI "One Workflow" to the ticket with impact level "No Impact"
    #When user add ci "" to the ticket with impact level "No Impact"
    Then user validates CI "cc100cgas001" is listed
    And user validates CI "One Workflow" is listed in row 2
