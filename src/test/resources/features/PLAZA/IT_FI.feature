@IT_FI @PLAZA
  Feature: IT FI form test
    Scenario:  user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      When user clicks on "Facility Management" button
      And user clicks on "Order" button
      And user clicks "Application" button
      Then user should see "Application" IT Pebbles
      When user clicks on "IT FI Services" pebble
      Then user should see "IT FI" form
      When user selects Role dropdown as "Application Operation Engineer"
      Then user clicks on the contact textbox
      And user then clicks on the name not found textbox
      And user enters name field as "Test1234"
      Then user enters email address field as "Test@Test.com
      Then user enters phone field as "123456789"
      And user enters IT FI request as "Test1 IT FI/Request"
      Then user enters IT FI description as "Test1 IT FI/Description"
      And user enters additional comments as "Test1 IT FI/AC"
      Then user clicks on submit button
      Then user selects system dropdown as "AIDA"
      And user selects system dropdown as "APM"
      And user selects system dropdown as "ASOP2"
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
      And user validates title field as "Service Request | IT FI Services"
      And user validates request type as "Service Request | PLAZA"
        #Not sure about description validation outside of a table
      And user validates description contains DescValidation
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Middleware"
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

