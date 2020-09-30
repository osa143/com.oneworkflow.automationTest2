@ServiceRequestIBSCustomerOrServerActivation
  Feature: Service Request - IBS - Customer or Server activation
    Scenario: Service Request - IBS - Customer or Server activation

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on Products & Services
      And user clicks on IT Infrastructure dropdown
      And user clicks on "Application" under IT Infrastructure
      Then user clicks on "IBS" pebble
      And user should see "IBS" form
      Then user selects role dropdown as "Application Operation Engineer"
      And user selects ibs service request name as "Customer/Server activiation"
      Then user enters ibs request as "Test Request"
      And user enters Customer ID name as "Test customer id name"
      Then user selects service level management as "Mo-Fri 7:00-18:00"
      And user selects patch window as "MW - Last Saturday 01:00-04:00"
      Then user selects microsoft security patching as "app_wsus_maintenance (patch info only)"
      And user enters monitoring in appwatch as "Test Monitoring"
      And user enters ibs CI as "cc100cgas001"
      And user enters vcpu and ram as "Test cpu"
      Then user enters ibs description as "Test Description"
      And user enters additional comments as "Test Additional Comments"
      Then user clicks on "Submit"
      Then error message should display as "Some fields are incomplete: CSM-Monitoring"
      And user selects csm monitoring as "N/A"
      Then user clicks on "Submit"
      And user gets plaza request id
      And user clicks on plaza request id
      Then user should see service request form
      And user opens new tab
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Work Order"
      And user switches to window 2
      Then user enters plaza request id in the source id field
      And user clicks Search on ticket search
      Then user should see plaza ticket
      And user validates source field as "PLAZA"
      Then user validates title field as "Service Request | IBS"
      And user validates request type as "Service Request | PLAZA"
#      And user validates ibs customer or server activation description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      Then user should see assigned profile as "VAS MAS Windows"
      And user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      Then user clicks on Diagnosis tab
      And user validates CI "cc100cgas001" is listed
      And user right clicks on CI "cc100cgas001" and selects "Impact:Update"
      Then user switches to frame
      And user enters impact from time as past on impact details bulk update window
      And user enters impact to time as past on impact details bulk update window
      Then user clicks confirm checkbox
      And user clicks on bulk update save button
      And user right clicks on CI "cc100cgas001" and clears impact
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