@PLAZA_PDB_Create_Incident @PLAZA_Incident_Flow
  #Ticket ID to come from Plaza
  Feature: Plaza creation of incident ticket
    Scenario: user validates plaza incident ticket

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      When user clicks on "Security, Ethics & Compliance"
      And user clicks on "Report a Personal Data Breach"
      Then user validates PDB submit form opens
      And user validates "*Service Area" as "Security, Ethics and Compliance"
      And user validates "*Service" as "Personal Data Breach"
      Then user enters date and time as current date and time
      And user enters "Nature and content" as ""
      And user selects "Yes" under "affected persons"
      And user enters "" under Affected persons name and unique id





      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Trouble Event"
      And user switches to window 1
      Then user should see blank trouble search form
      When user enters ticket id as ""
      Then user should see plaza incident ticket
      #will need to get the information plaza is sending to validate if its correct
      And user validates ticket information
      When user enters "Test Update" in the timeline text box
      And user clicks on add button
      Then change should also be reflected in the timeline as "Test Update"
      #Plaza should also see this timeline update
      When user clicks on attachments under sections
      And user clicks on add button under external
      And user switches to frame 2
      Then user selects summary dropdown as "Decision"
      And user enters attachment description as "A Document Attached"
      Then user clicks on add button in attachment window
      And user switches to frame 2
      When user clicks on choose file button
      Then user searches for attachment and adds attachment to ticket
      Then user clicks on attachment ok button
      And user clicks on save button on attachment window
      Then user clicks on save button
      And change should also be reflected in the timeline as "Attachment has been added. File Name - attachment.doc"
      #Plaza should also see the attachment their side
      When user clicks on Ack button
      Then user validates ticket status as "Work In Progress"
      #Plaza should receive this update as well
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
      When user changes status to "Closed" on trouble event page second time
      And user clicks on save button
      Then user validates ticket status as "Closed"







