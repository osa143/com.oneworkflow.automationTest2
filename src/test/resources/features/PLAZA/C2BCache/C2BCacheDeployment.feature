@C2BDeployment @PLAZA
Feature: Plaza C2B Cache form test
  Scenario Outline: user validates information sent to OW from Plaza

    Given user is on the Plaza login page
    When user enters username "testauto" and password as "test123" and clicks on login
    Then user should see the plaza home page
    Then user clicks on plaza portal
    When user clicks on "Facility Management"
    And user clicks on order
    And user clicks on IT Infrastructure dropdown
    And user clicks on "Application"
    When user clicks on "C2Bcache" pebble
    Then user should see "C2B Cache" form
    #Then user selects system name in haiti as "Other"
    When user selects role dropdown as "Application Operation Engineer"
    And user selects service request name as "Deployment"
    And user enters C2B request as "<Request>"
    And user selects C2B environment as "<Environment>"
    And user enters C2B description as "<Description>"
    And user enters additional comments as "<AdditionalComments>"
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
    And user waits 5 secs
    And user clicks Search on ticket search
    Then user should see plaza ticket
    And user validates source field as "PLAZA"
    And user validates title field as "Service Request | C2Bcache"
    And user validates C2B cache deployment description same as plaza
    Then user clicks on owner under sections
    And user clicks on assignment under sections
    Then user validates owner profile as "PLAZA"
    And user validates owner as "PLAZA"
    And user should see assigned profile as "Billing"
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
    And user clicks save button
    And user validates ticket status as "Closed"
    When user switches to window 0
    And user clicks on main page refresh
    Then user validates plaza request has completed


    Examples:
    |Request                |Environment|Description               |AdditionalComments|DescValidation|
    |Test1 C2BCache/Request |AT         |Test1 C2BCache/Description|Test1 C2BCache/AC |              |
#    |Test2 C2BCache/Request |DEV        |Test2 C2BCache/Description|Test2 C2BCache/AC |              |
#    |Test3 C2BCache/Request |MITE       |Test3 C2BCache/Description|Test3 C2BCache/AC |              |
#    |Test4 C2BCache/Request |Prod       |Test4 C2BCache/Description|Test4 C2BCache/AC |              |
#    |Test5 C2BCache/Request |RATM       |Test5 C2BCache/Description|Test5 C2BCache/AC |              |
#    |Test6 C2BCache/Request |SIT        |Test6 C2BCache/Description|Test6 C2BCache/AC |              |
#    |Test7 C2BCache/Request |ST         |Test7 C2BCache/Description|Test7 C2BCache/AC |              |


