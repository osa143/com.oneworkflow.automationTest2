@BCPP_other @PLAZA
  Feature: Plaza BCPP form test
    Scenario Outline: user validates information sent to OW from Plaza


      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on "Facility Management"
      And user clicks on order
      And user clicks on IT Infrastructure dropdown
      And user clicks on "Application"
      When user clicks on "BCPP" pebble
      Then user should see "BCPP" form
      #Then user selects "System Name in Haiti" as "Other"
      When user selects role dropdown as "Application Operation Engineer"
      And user enters BCCP request as "<Request>"
      And user selects service request name as "Account/Password"
      And user selects BCPP environment as "<Environment>"
      And user selects BCCP Add ci as "aa187bcpp01"
      And user enters BCPP description as "<Description>"
      And user enters additional comments as "<Additional Comments>"
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
      And user validates title field as "Service Request | BCPP"
      And user validates request type as "Service Request | PLAZA"
      And user validates bccp description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Billing"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on "Diagnosis" tab
      And user validates CI "aa187bcpp01" is listed
      And user right clicks on CI "aa187bcpp01" and selects "Impact:Update"
      Then user switches to frame
      And user enters impacted from date as date in past
      And user enters impacted to date as date in past
      Then user clicks confirm checkbox
      And user clicks on bulk update save button
      Then user switches to window 1
      When user right clicks on CI "aa187bcpp01" and selects "Impact:Clear All"
      And user clicks on yes button on warning window
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

      Examples:

        |Request                |Environment|Description                |Additional Comments|DescValidation|
        |BCPP-Prod/Request      |Prod       |BCPP-Prod/Description      |BCPP-Prod/AC       |              |
#        |Test2-BCPP-Prod/Request|Prod       |Test2-BCPP-Prod/Description|Test2-BCPP-Prod/AC |              |
#        |BCPP-Test/Request      |TEST       |BCPP-Test/Description      |BCPP-Test/AC       |              |
#        |Test2-BCPP-Test/Request|Test       |Test2-BCPP-Test/Description|Test2-BCPP-Test/AC |              |