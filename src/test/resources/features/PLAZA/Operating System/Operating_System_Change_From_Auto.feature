@Operating_System_Change_From_Auto @PLAZA
  Feature: Operating System Change OS Patching plaza form test
    Scenario: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on "Facility Management"
      And user clicks on order
      And user clicks on IT Infrastructure dropdown
      And user clicks on "Compute & Operating System"
      When user clicks on Change OS Patching
      Then user should see "Change OS Patching" form
      #Then user selects "System Name in Haiti" as "Other"
      When user selects role dropdown as "Application Operation Engineer"
      And user enters operating system change from auto request as "Test3 Operating System Account/Request"
      And user selects select request "Changing from Auto to Manual patching"
      And user selects operating system as "Windows"
      And user selects Add CI as "cc100cgas001"
      And user enters operating system justification as "Test justification"
      And user enters plan to enable automatic monthly patching as "Test plan"
      And user clicks on the commitment checkbox
      Then user enters operating system change from auto description as "Test3 Operating System/Description"
      And user enters additional comments as "Test3 Operating System/AC"
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
      And user validates title field as "Service Request | Change OS Patching"
      And user validates request type as "Service Request | PLAZA"
     #Not sure about description validation outside of a table
      And user validates operating system change from auto description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Windows L2"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on "Diagnosis" tab
      And user validates CI "cc100cgas001" is listed
      And user right clicks on CI "cc100cgas001" and selects "Impact:Update"
      Then user switches to frame
      And user enters impact from time as past on impact details bulk update window
      And user enters impact to time as past on impact details bulk update window
      Then user clicks confirm checkbox
      And user clicks on bulk update save button
      And user right clicks on CI "cc100cgas001" and selects "Impact:Clear All"
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