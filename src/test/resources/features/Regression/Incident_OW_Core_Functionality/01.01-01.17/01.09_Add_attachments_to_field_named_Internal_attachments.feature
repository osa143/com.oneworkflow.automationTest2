@01.09_Add_attachments_to_field_named_Internal_attachments #@Incident
#Add Attachment can't do at the movement
  Feature: Adding of Attachments to incident ticket
    Scenario: user is able to add an attachment to incident ticket

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Telia@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test Case 01.09 Add attachments" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test Case 01.09 Add attachments"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user clicks on attachments under sections
      And user clicks on add button under internal
      Then user switches to frame
      #Then user clicks on save button on attachment window
      #And an error message should appear: "Check for Mandatory fields - Summary,Description,Attachment,Visibility (ARERR 13034)"
      When user enters attachment summary as "Test JPEG"
      And user enters attachment description as "Test JPEG"
      Then user clicks on add button in attachment window
      And user clicks on choose file button
      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test JPEG FILE" attachment and adds it
      And user waits 2 secs
      Then user clicks on attachment ok button
      And user switches to frame
      #And user clicks on save button on attachment window
      #And an error message should appear: "Check for Mandatory fields - Visibility (ARERR 13034)"
      #Then user clicks on warning ok button
      And user selects attachment visibility as Internal
      Then user clicks on save button on attachment window
      And user validates 1 attachment visibility under internal
      And user clicks on add button under internal
      Then user switches to frame
      When user enters attachment summary as "Test PNG"
      And user enters attachment description as "Test PNG"
      Then user clicks on add button in attachment window
      And user clicks on choose file button
      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test PNG FILE" attachment and adds it
      And user waits 2 secs
      Then user clicks on attachment ok button
      And user switches to frame
      And user selects attachment visibility as Internal
      Then user clicks on save button on attachment window
      And user validates 2 attachment visibility under internal
      And user clicks on add button under internal
      Then user switches to frame
      When user enters attachment summary as "Test PDF"
      And user enters attachment description as "Test PDF"
      Then user clicks on add button in attachment window
      And user clicks on choose file button
      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test PDF FILE" attachment and adds it
      And user waits 2 secs
      Then user clicks on attachment ok button
      And user switches to frame
      And user selects attachment visibility as Internal
      Then user clicks on save button on attachment window
      And user validates 3 attachment visibility under internal
      And user clicks on add button under internal
      Then user switches to frame
      When user enters attachment summary as "Test WORD"
      And user enters attachment description as "Test WORD"
      Then user clicks on add button in attachment window
      And user clicks on choose file button
      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test WORD FILE" attachment and adds it
      And user waits 2 secs
      Then user clicks on attachment ok button
      And user switches to frame
      And user selects attachment visibility as Internal
      Then user clicks on save button on attachment window
      And user validates 4 attachment visibility under internal
      And user clicks on add button under internal
      Then user switches to frame
      When user enters attachment summary as "Test EXCEL"
      And user enters attachment description as "Test EXCEL"
      Then user clicks on add button in attachment window
      And user clicks on choose file button
      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test XLS FILE" attachment and adds it
      And user waits 2 secs
      Then user clicks on attachment ok button
      And user switches to frame
      And user selects attachment visibility as Internal
      Then user clicks on save button on attachment window
      And user validates 5 attachment visibility under internal
      And user clicks on add button under internal
      Then user switches to frame
      When user enters attachment summary as "Test PPT"
      And user enters attachment description as "Test PPT"
      Then user clicks on add button in attachment window
      And user clicks on choose file button
      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test PPT FILE" attachment and adds it
      And user waits 2 secs
      Then user clicks on attachment ok button
      And user switches to frame
      And user selects attachment visibility as Internal
      Then user clicks on save button on attachment window
      And user validates 6 attachment visibility under internal
#      Then user clicks on save button

