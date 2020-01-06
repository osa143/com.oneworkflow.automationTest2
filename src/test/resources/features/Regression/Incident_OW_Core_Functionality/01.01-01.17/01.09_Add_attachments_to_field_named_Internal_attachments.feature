@01.09
@Incident
@01

  Feature: Add Attachments to field named internal attachments
    Scenario: Add Attachments to field named internal attachments

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
      And user clicks save button
      Then ticket should be created and status should be assigned
      When user clicks on attachments under sections
      And  user adds attachment and verifies under "internal"
        | summary   | description | fullFilePath       | attachments |
        | Test JPEG | Test JPEG   | Test JPEG FILE.jpg | 1           |
        | Test PNG  | Test PNG    | Test PNG FILE.png  | 2           |
        | Test PDF  | Test PDF    | Test PDF FILE.pdf  | 3           |
        | Test WORD | Test WORD   | Test WORD FILE.docx| 4           |
        | Test EXCEL| Test EXCEL  | Test XLS FILE.xls  | 5           |
        | Test PPT  | Test PPT    | Test PPT FILE.pptx | 6           |
      Then user clicks save button



