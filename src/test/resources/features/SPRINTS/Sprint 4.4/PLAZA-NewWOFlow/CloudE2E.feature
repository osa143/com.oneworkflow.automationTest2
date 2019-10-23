@CloudE2E @PlazaWONew
  #Have added ID's for the fields as well, should be correct

Feature: New WO flow Plaza
  Scenario: Cloud - New WO flow Plaza

    Given user is on the Plaza login page
    When user enters username "testauto" and password as "test123" and clicks on login
    Then user should see the plaza home page
    When user enters "Ask" in plaza search box
    And user opens internal case form
    Then user should see internal case form appear
    And user selects "IT Infrastructure" under Service area dropdown
    And user selects "Cloud" under Service area category dropdown
    And user selects service as "Skypoint - private cloud"
    And user enters "Test Request" in the plaza request field
    And user enters "cc100cgas001" in the plaza CI field
    And user enters "Test Description" in the plaza description field
    Then user clicks on submit button on plaza form
    And user gets plaza request id
    And user clicks on plaza request id
    And user validates internal case management form opens
    When user enters "Test Update" in the ticket timeline
    And user clicks on plaza send button
    Then user validates plaza ticket has update to timeline
    And user opens new tab
    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Work Order"
    And user switches to window 2
    Then user should see blank work order form
    When user enters plaza request id in the source id field
    And user clicks on the search button
    Then user should see plaza ticket


    And user validates source field as "PLAZA"
    And user validates source ID field contains ICM number
    And user validates service provider as "PLAZA"
    And user validates title field as "Service Request | Nimbus - General Inquiry"
    And user validates request type as "Service Request | PLAZA"
    And user validates WO description same as Plaza
    And user validates ticket priority as "Minor"

    Then user clicks on assignment under sections
    And user clicks on owner under sections
    And user validates owner profile as "PDB Control Center"
    And user validates owner as "PDBCC"
    And user validates assignee is "PDB Control Center"
    When user enters "Test Update" in the timeline text box
    And user clicks on add button
    And change should also be reflected in the timeline as "Test Update" on row 1
    And user switches to window 1
    And user clicks on main page refresh
    And user should see "Comments from OneWorkflow at 2019-10-21T10:49:44Z@dwk298: Test Update" timeline update in plaza ticket
    When user clicks on attachments under sections
    And user clicks on add button under internal
    And user switches to frame 2
    Then user selects summary dropdown as "Decision"
    And user enters attachment description as "A Document Attached"
    And user selects attachment visibility as external
    Then user clicks on add button in attachment window
    And user switches to frame 2
    When user clicks on choose file button
    Then user searches for attachment and adds attachment to ticket
    Then user clicks on attachment ok button
    And user clicks on save button on attachment window
    Then user clicks on save button
    And change should also be reflected in the timeline as "Attachment has been added. File Name - attachment.doc"
    Then user switches to window 1
    And user clicks on main page refresh
    And user should see attachment on plaza ticket
      #not sure what exact message is yet
    Then user should see "attachment" timeline update in plaza ticket
    And user switches to window 2
    When user changes status to "Pending"
    And user enters on hold to date 2 minutes in the future
    And user enters on hold reason as "Pending ticket test"
    Then user clicks on save button
    And user validates ticket status as "Pending"
    And user switches to window 1
    And user should see "pending" timeline update in plaza ticket
    And user switches to window 2
    Then user waits for 2 minutes
    And user clicks on ticket refresh button
    And user validates ticket status as "Assigned"
    Then user selects assignment profile dropdown as "Mobile:Mobile PS:MOB PS Core West"
    And user selects assignee as "Change_Automation_1" by using alphabet "C" key up 0 times
    Then user clicks on save button
    And user "MOB PS Core WEST" is listed as the assigned profile
    And user validates assignee is "Change_Automation_1"
    Then user switches to window 1
    And user clicks on main page refresh
      #need to get the exact timeline message
    And should see "Assignee update" timeline update in plaza ticket
    Then user switches to window 2
    When user clicks on Ack button
    Then user validates ticket status as "Work In Progress"
    Then user switches to window 1
    And user clicks on main page refresh
      #need to get the exact timeline message
    And should see "work in progress" timeline update in plaza ticket
    Then user switches to window 2
    When user changes status to "Cleared" on trouble event page
    And user selects fault position as "N/A:N/A" on trouble event page
    And user selects cause as "N/A:N/A:N/A" on trouble event page
    And user selects action dropdown as "N/A:N/A" on trouble event page
    And user enters closure info as "Test Ticket"
    Then user enters event end time as current time
    When user clicks on Diagnosis tab
    And user right clicks on primary CI and selects "Impact:Clear All"
    And user should see confirmation message for impact clear and clicks ok
    And user clicks on save button
    Then user validates ticket status as "Cleared"
    Then user switches to window 1
    And user clicks on main page refresh
      #need to get the exact timeline message (if applicable)
    And should see "cleared" timeline update in plaza ticket
    Then user switches to window 2
    When user changes status to "Closed" on trouble event page second time
    And user clicks on save button
    Then user validates ticket status as "Closed"

