@01.09_Add_attachments_to_field_named_Internal_attachments @Incident

  Feature: Adding of Attachments to incident ticket
    Scenario: user is able to add an attachment to incident ticket

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
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
      And  user adds attachment and verifies under "internal"
        | summary   | description | fullFilePath                                                                   | attachments |
        | Test JPEG | Test JPEG   | C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test JPEG FILE.jpg | 1           |
        | Test PNG  | Test PNG    | C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test PNG FILE.png  | 2           |
        | Test PDF  | Test PDF    | C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test PDF FILE.pdf  | 3           |
        | Test WORD | Test WORD   | C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test WORD FILE.docx| 4           |
        | Test EXCEL| Test EXCEL  | C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test XLS FILE.xls  | 5           |
        | Test PPT  | Test PPT    | C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test PPT FILE.pptx  | 6           |

      Then user clicks on save button




#      And user clicks on add button under internal
#      Then user switches to frame
#      #Then user clicks on save button on attachment window
#      #And an error message should appear: "Check for Mandatory fields - Summary,Description,Attachment,Visibility (ARERR 13034)"
#      When user enters attachment summary as "Test JPEG"
#      And user enters attachment description as "Test JPEG"
#      Then user clicks on add button in attachment window
#      And user clicks on choose file button
#      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test JPEG FILE.jpg" attachment and adds it
#      Then user clicks on attachment ok button
#      And user switches to frame
#      #And user clicks on save button on attachment window
#      #And an error message should appear: "Check for Mandatory fields - Visibility (ARERR 13034)"
#      #Then user clicks on warning ok button
#      And user selects attachment visibility as Internal
#      Then user clicks on save button on attachment window
#      And user validates 1 attachment visibility under internal
#
#      And user clicks on add button under internal
#      Then user switches to frame
#      When user enters attachment summary as "Test PNG"
#      And user enters attachment description as "Test PNG"
#      Then user clicks on add button in attachment window
#      And user clicks on choose file button
#      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test PNG FILE.png" attachment and adds it
#      Then user clicks on attachment ok button
#      And user switches to frame
#      And user selects attachment visibility as Internal
#      Then user clicks on save button on attachment window
#      And user validates 2 attachment visibility under internal
#      And user clicks on add button under internal
#      Then user switches to frame
#      When user enters attachment summary as "Test PDF"
#      And user enters attachment description as "Test PDF"
#      Then user clicks on add button in attachment window
#      And user clicks on choose file button
#      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test PDF FILE.pdf" attachment and adds it
#      And user waits 2 secs
#      Then user clicks on attachment ok button
#      And user switches to frame
#      And user selects attachment visibility as Internal
#      Then user clicks on save button on attachment window
#      And user validates 3 attachment visibility under internal
#      And user clicks on add button under internal
#      Then user switches to frame
#      When user enters attachment summary as "Test WORD"
#      And user enters attachment description as "Test WORD"
#      Then user clicks on add button in attachment window
#      And user clicks on choose file button
#      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test WORD FILE.pdf" attachment and adds it
#      And user waits 2 secs
#      Then user clicks on attachment ok button
#      And user switches to frame
#      And user selects attachment visibility as Internal
#      Then user clicks on save button on attachment window
#      And user validates 4 attachment visibility under internal
#      And user clicks on add button under internal
#      Then user switches to frame
#      When user enters attachment summary as "Test EXCEL"
#      And user enters attachment description as "Test EXCEL"
#      Then user clicks on add button in attachment window
#      And user clicks on choose file button
#      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test XLS FILE.xls" attachment and adds it
#      And user waits 2 secs
#      Then user clicks on attachment ok button
#      And user switches to frame
#      And user selects attachment visibility as Internal
#      Then user clicks on save button on attachment window
#      And user validates 5 attachment visibility under internal
#      And user clicks on add button under internal
#      Then user switches to frame
#      When user enters attachment summary as "Test PPT"
#      And user enters attachment description as "Test PPT"
#      Then user clicks on add button in attachment window
#      And user clicks on choose file button
#      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test PPT FILE.ppt" attachment and adds it
#      And user waits 2 secs
#      Then user clicks on attachment ok button
#      And user switches to frame
#      And user selects attachment visibility as Internal
#      Then user clicks on save button on attachment window
#      And user validates 6 attachment visibility under internal
#      Then user clicks on save button

