@CRM @PLAZA
Feature: Plaza CRM form test
  Scenario Outline: user validates information sent to OW from Plaza

    Given user is on the Plaza login page
    When user enters username "testauto" and password as "test123" and clicks on login
    Then user should see the plaza home page
#    Then user clicks on plaza portal
    When user clicks on Products & Services
    And user clicks on IT Infrastructure dropdown
    And user clicks on application under IT Infrastructure dropdown
    And user clicks on show more button
    When user clicks on "CRM" pebble
    Then user should see CRM form
   # Then user selects system name in haiti as "Other"
    When user selects role dropdown as "Application Operation Engineer"
    And user selects service request name as "General Request"
    And user enters CRM request as "<Request>"
    And user selects CRM system as "<System>"
    And user enters CRM planned start date as current date
    And user enters CRM planned end date as current date
    And user enters CRM description as "<Description>"
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
    And user clicks Search on ticket search
    Then user should see plaza ticket
    And user validates source field as "PLAZA"
    And user validates title field as "Service Request | CRM"
    And user validates CRM description same as plaza
    Then user clicks on owner under sections
    And user clicks on assignment under sections
    Then user validates owner profile as "PLAZA"
    And user validates owner as "PLAZA"
    And user should see assigned profile as "CRM"
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

    Examples:

    |Request           |System       |Description           |AdditionalComments|
#    |Test2 CRM/Request |1B           |Test2 CRM/Description |Test2 CRM/AC      |
#    |Test3 CRM/Request |ALPHA1       |Test3 CRM/Description |Test3 CRM/AC      |
#    |Test4 CRM/Request |ALPHA2       |Test4 CRM/Description |Test4 CRM/AC      |
#    |Test5 CRM/Request |EMU          |Test5 CRM/Description |Test5 CRM/AC      |
#    |Test6 CRM/Request |FLOWVIEW     |Test6 CRM/Description |Test6 CRM/AC      |
#    |Test7 CRM/Request |GESB-AIPL    |Test7 CRM/Description |Test7 CRM/AC      |
#    |Test8 CRM/Request |GESB-B2BEBXML|Test8 CRM/Description |Test8 CRM/AC      |
#    |Test9 CRM/Request |GESB-B2BLight|Test9 CRM/Description |Test9 CRM/AC      |
#    |Test10 CRM/Request|GESB-B2BSOAP |Test10 CRM/Description|Test10 CRM/AC     |
#    |Test11 CRM/Request|GESB-DK      |Test11 CRM/Description|Test11 CRM/AC     |
#    |Test12 CRM/Request|GESB-EMS     |Test12 CRM/Description|Test12 CRM/AC     |
#    |Test13 CRM/Request|GESB-MBA     |Test13 CRM/Description|Test13 CRM/AC     |
#    |Test14 CRM/Request|GESB-TSSESB  |Test14 CRM/Description|Test14 CRM/AC     |
#    |Test15 CRM/Request|HERKULES     |Test15 CRM/Description|Test15 CRM/AC     |
#    |Test16 CRM/Request|MFT          |Test16 CRM/Description|Test16 CRM/AC     |
    |Test17 CRM/Request|MIT/UAD      |Test17 CRM/Description|Test17 CRM/AC     |
#    |Test18 CRM/Request|MULTIBELLA   |Test18 CRM/Description|Test18 CRM/AC     |
#    |Test19 CRM/Request|ONEVIEW      |Test19 CRM/Description|Test19 CRM/AC     |
#    |Test20 CRM/Request|POTS         |Test20 CRM/Description|Test20 CRM/AC     |
#    |Test21 CRM/Request|RODOD        |Test21 CRM/Description|Test21 CRM/AC     |
#    |Test22 CRM/Request|SVN          |Test22 CRM/Description|Test22 CRM/AC     |
#    |Test23 CRM/Request|TRIWIA       |Test23 CRM/Description|Test23 CRM/AC     |
#    |Test24 CRM/Request|WEBTAB       |Test24 CRM/Description|Test24 CRM/AC     |
#    |Test25 CRM/Request|WOW          |Test25 CRM/Description|Test25 CRM/AC     |

