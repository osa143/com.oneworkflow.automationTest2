@PLAZA_PDB_Create_Incident @PLAZA_Incident_Flow
  #Ticket ID to come from Plaza
  Feature: Plaza creation of incident ticket
    Scenario Outline: user validates plaza incident ticket

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      And user clicks on plaza portal
      When user clicks on "Security, Ethics & Compliance"
      And user clicks on "Report a Personal Data Breach"
      Then user validates PDB submit form opens
      And user validates Service area as "Security, Ethics and Compliance"
      And user validates Service as "Personal Data Breach"
      Then user enters PDB date and time as current date and time
      #And user selects "<Affected BU>"
      And user selects nature and content as "Address"
      And user selects affected persons as "Yes"
      And user enters "Test Data" under Affected persons name and unique id
      And user clicks on submit button on plaza form
      And user gets plaza request id
      And user clicks on plaza request id
      And user validates internal case management form opens
      And user waits 40 secs
      And user clicks on main page refresh
      Then user should see incident ticket update in plaza
      #And user should see "The incident has been successfully assigned in OneWorkflow" timeline update in plaza ticket
      When user enters "Test Update" in the ticket timeline
      And user clicks on plaza send button
      Then user opens new tab
      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Trouble Event"
      And user switches to window 2
      Then user should see blank trouble search form
      When user enters plaza incident ticket
      And user clicks on search
      And user should see plaza incident ticket
      And user validates source field as "PLAZA"
      And user validates source ID field contains ICM number
      And user validates service provider as "Data Breach"
      #And user validates "<Affected BU>"
      And user validates title field as "<Title>"
      #And user validates PDB description same as Plaza
      And user validates ticket priority as "<Priority>"
      And change should also be reflected in the timeline as "Test Timeline Update" on row 1
      Then user clicks on assignment under sections
      And user clicks on owner under sections
      And user validates owner profile as "PDB Control Center"
      And user validates owner as "PDBCC"
      And user validates assignee is "PDB Control Center"
      When user enters "Test Update" in the timeline text box
      And user clicks on add button
      Then change should also be reflected in the timeline as "Test Update"
      And user switches to window 1
      And user clicks on main page refresh
      And user should see "Test Update" timeline update in plaza ticket
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



      Examples:
      |Affected BU                     |Number of Persons|Affected Person|Title                             |Priority|
      |Other (or more than one country)|No               |               |                                  |Minor   |
#      |Telia Carrier                   |No               |               |                                  |Minor   |
#      |Sweden                          |No               |               |Personal Data Breach \|\ Sweden   |Minor   |
#      |Finland (Enterprise)            |No               |               |Personal Data Breach \|\ Finland  |Minor   |
#      |Finland (Consumer)              |No               |               |Personal Data Breach \|\ Finland  |Minor   |
#      |Norway                          |No               |               |Personal Data Breach \|\ Norway   |Minor   |
#      |Denmark                         |No               |               |Personal Data Breach \|\ Denmark  |Minor   |
#      |Estonia                         |No               |               |Personal Data Breach \|\ Estonia  |Minor   |
#      |Lithuania                       |No               |               |Personal Data Breach \|\ Lithuania|Minor   |
#      |Other (or more than one country)|Yes              |               |                                  |Major   |
#      |Telia Carrier                   |Yes              |               |                                  |Major   |
#      |Sweden                          |Yes              |               |Personal Data Breach \|\ Sweden   |Major   |
#      |Finland (Enterprise)            |Yes              |               |Personal Data Breach \|\ Finland  |Major   |
#      |Finland (Consumer)              |Yes              |               |Personal Data Breach \|\ Finland  |Major   |
#      |Norway                          |Yes              |               |Personal Data Breach \|\ Norway   |Major   |
#      |Denmark                         |Yes              |               |Personal Data Breach \|\ Denmark  |Major   |
#      |Estonia                         |Yes              |               |Personal Data Breach \|\ Estonia  |Major   |
#      |Lithuania                       |Yes              |               |Personal Data Breach \|\ Lithuania|Major   |










