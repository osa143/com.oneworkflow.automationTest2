@Nimbus_Onboard_To_Skypoint
  Feature: Nimbus Onboard To Skypoint plaza form test
    Scenario: user validates information sent to OW from Plaza
      #not checked in ow

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      When user clicks on "Facility Management"
      And user clicks on order
      And user clicks on IT Infrastructure dropdown
      And user clicks "Cloud"
      When user clicks on "Skypoint - private cloud" pebble
      Then user should see "Skypoint - private cloud" form
      When user selects role dropdown as "Application Operation Engineer"
      And user selects Service Request Name as "Onboard to Skypoint"
      And user enters Nimbus Onboard To Skypoint request as "Test9 Nimbus/Request"

      Then user selects Cloud Services as ""
      Then user selects Target countries for System Cloud Services as ""
      And user selects Dual-site services as ""

      Then user enters Approver Account(s) as "Test approver"
      And user enters User Account(s) as "Test user"
      Then user enters CMDB, Assigned to Application Team as "Test Application"
      Then user enters CMDB, Local responsible Application as "Test Local"
      And user enters H2 (Name/Hid) as "Test H2"
      And user enters Nimbus description as "Test9 Nimbus/Description"
      And user enters additional comments as "Test9 Nimbus/AC"
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
      And user validates title field as "Service Request | Skypoint - private cloud"
      And user validates description as "<DescValidation>"
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Nimbus/TSVP"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on Ack button
      And user changes status to "Cleared" on work order page
      And user selects completed code as "Success"
      And user clicks on "Schedule" tab
      And user enters schedule end as current date
      Then user clicks on save button
      And user validates ticket status as "Cleared"
      When user changes status to "Closed" on work order page
      And user clicks on save button
      Then ticket status should be closed
