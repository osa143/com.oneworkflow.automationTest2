@01.09_Add_attachments_to_field_named_Internal_attachments #@Incident
#Add Attachment can't do at the movement
  Feature: Adding of Attachments to incident ticket
    Scenario: user is able to add an attachment to incident ticket

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test Case 01.09 Add attachments" in Title field in Trouble event
      And user selects request type as "Customer"
      And user enters description as "Test Case 01.09 Add attachments"
      And user clicks on save button on the problem form
      Then ticket should be created and status should be assigned
      When user clicks on attachments under sections
      And user clicks on add button under internal
      Then user switches to frame
      And user clicks on add button
      Then user clicks on save button on attachment window
      And an error message should appear: "Check for Mandatory fields - Summary,Description,Attachment,Visibility (ARERR 13034)"
      Then user clicks on attachment ok button
      When user enters attachment summary as "Test JPEG"
      And user enters attachment description as "Test JPEG"
      Then user clicks on add button in attachment window
      And user clicks on browse button
      And user searches for a JPEG attachment and adds it
      Then user clicks on attachment ok button
      And user clicks on save button on attachment window
      And an error message should appear: "Check for Mandatory fields - Visibility (ARERR 13034)"
      Then user clicks on warning ok button
      And user selects attachment visibility as "Internal"
      Then user clicks on save button on attachment window
      And user switches to window 1
      And user validates attachment visibility under internal
      When user clicks on add button under internal
      Then user switches to frame
      And user clicks on add button
      And user enters attachment summary as "Test JPEG"
      And user enters attachment description as "Test JPEG"
      And user clicks on browse button
      Then user searches for a PNG attachment and adds it
      Then user clicks on attachment ok button
      And user selects attachment visibility as "Internal"
      Then user clicks on save button on attachment window
      And user switches to window 1
      And user validates attachment visibility under internal
      When user clicks on add button under internal
      Then user switches to frame
      And user clicks on add button
      And user enters attachment summary as "Test PDF"
      And user enters attachment description as "Test PDF"
      And user clicks on browse button
      Then user searches for a PDF attachment and adds it
      Then user clicks on attachment ok button
      And user selects attachment visibility as "Internal"
      Then user clicks on save button on attachment window
      And user switches to window 1
      And user validates attachment visibility under internal
      When user clicks on add button under internal
      Then user switches to frame
      And user clicks on add button
      And user enters attachment summary as "Test Word Doc"
      And user enters attachment description as "Test Word Doc"
      And user clicks on browse button
      Then user searches for a Word Doc attachment and adds it
      Then user clicks on attachment ok button
      And user selects attachment visibility as "Internal"
      Then user clicks on save button on attachment window
      And user switches to window 1
      And user validates attachment visibility under internal
      When user clicks on add button under internal
      Then user switches to frame
      And user clicks on add button
      And user enters attachment summary as "Test Excel"
      And user enters attachment description as "Test Excel"
      And user clicks on browse button
      Then user searches for a Excel attachment and adds it
      Then user clicks on attachment ok button
      And user selects attachment visibility as "Internal"
      Then user clicks on save button on attachment window
      And user switches to window 1
      And user validates attachment visibility under internal
      When user clicks on add button under internal
      Then user switches to frame
      And user clicks on add button
      And user enters attachment summary as "Test Powerpoint"
      And user enters attachment description as "Test PPTX"
      And user clicks on browse button
      Then user searches for a Powerpoint attachment and adds it
      Then user clicks on attachment ok button
      And user selects attachment visibility as "Internal"
      Then user clicks on save button on attachment window
      And user switches to window 1
      And user validates attachment visibility under internal
      Then user clicks on save button on the problem form

