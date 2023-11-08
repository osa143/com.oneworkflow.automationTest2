@SAO_7423

  Feature: Workflow for adding timeline entries with attachments
    Scenario: Workflow for adding timeline entries with attachments

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
#      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test SAO-7423" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test SAO-7423"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user clicks attachments under sections
      And  user adds attachment and verifies under ""
        | summary   | description | fullFilePath       | attachments | type     |
        | Test JPEG | Test JPEG   | attachement.doc.txt | 1          | internal |
#      When user adds attachment "attachement.doc.txt"
#      When user selects attachment visibility as Internal
      And user selects attachment visibility as Internal
      Then user clicks save button
      And change should also be reflected in the timeline as "Attachment has been added. File Name - attachement.doc.txt"
#      When user right clicks on attachment timeline entry in row 1 and selects preview attachment