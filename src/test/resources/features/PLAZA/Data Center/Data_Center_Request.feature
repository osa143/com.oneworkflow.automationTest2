@Data_Center_Request @PLAZA
  Feature: Data Center Request plaza form test
   #not checked in ow
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      When user clicks on "Facility Management" button
      And user clicks on "Order" button
      And user clicks "Data Center" button
      Then user should see "Data Center" IT Pebbles
      When user clicks on "Datacenter Request" pebble
      Then user should see "Datacenter Request" form
      When user selects role dropdown as "Application Operation Engineer"
      And user enters Data Center Request as "Test1 Data Center/Request"
      And user enters DC-site or address as "Test address"
      And user enters Room as "Test room"
      And user clicks the calendar and selects current date and time
      And user enters WBS Code field as "P100-000-000"
      And user enters additional comments as "Data Center - Test/AC"
      Then user clicks on "Submit"
      Then user enters Data Center Request description as "Test1 Data Center/Description"
      Then user clicks on "Submit"
      And user gets plaza request id
      And user clicks on plaza request id
      Then user should see service request form
      When user opens new tab
      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_7" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Work Order"
      And user switches to window 2
      Then user enters plaza request id in the source id field
      And user clicks Search on ticket search
      Then user should see plaza ticket
      And user validates source field as "PLAZA"
      And user validates title field as "Service Request | Data Center"
      And user validates request type as "Service Request | PLAZA"
     #Not sure about description validation outside of a table
      And user validates description contains DescValidation
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as ""
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
