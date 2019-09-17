@Operating_System_Change_From_Manual @PLAZA
  Feature: Operating System change from manul
    Scenario Outline: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      When user clicks on "Facility Management"
      And user clicks on order
      And user clicks on IT Infrastructure dropdown
      And user clicks "Compute & Operating System"
      When user clicks on "Change OS Patching" pebble
      Then user should see "Change OS Patching" form
      When user selects Role dropdown as "Application Operation Engineer"
      And user enters Operating System request as "<Request>"
      And user selects Select Request as "<Select Request>"
      And user selects Operating System as "Windows"
      And user enters CI as "cc100cgas001"
      And user selects Service Window as "Patch-Week-1-Wednesday-2200-0100"
      And user enters Justification as "Test justification"
      And user enters Plan to enable Automatic monthly patching as "Test plan"
      And user clicks on the Commitment checkbox
      Then user enters Operating System description as "<Description>"
      And user enters additional comments as "<Additional Comments>"

      And user searches for "" attachment and adds it

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
      And user validates title field as "Service Request | Change OS Patching"
      And user validates request type as "Service Request | PLAZA"
     #Not sure about description validation outside of a table
      And user validates description contains DescValidation
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      And user clicks on attachments under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Windows L2"
      And user validates 1 attachment visibility under external
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on diagnosis tab
      And user validates CI "cc100cgas001" is listed
      And user clicks on CI "cc100cgas001" and selects "Impact:Update
      Then user switches to frame
      And user enters impacted from date as date in past
      And user enters impacted to date as date in past
      Then user clicks confirm checkbox
      And user clicks the save button
      Then user switches to window 1
      When user selects CI present
      And user right clicks on CI "cc100cgas001" and selects "Impact:Clear All"
      Then user selects yes and closes warning message
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

      Examples:

      |Request                              |Select Request                                |Description                       |Additional Comments      |Desc Validation|
      |Test1 Operating System Change/Request|Changing from Manual to Auto patching         |Test1 Operating System/Description|Test1 Operating System/AC|               |
      |Test2 Operating System Change/Request|Changing patch window for server in auto patch|Test2 Operating System/Description|Test2 Operating System/AC|               |