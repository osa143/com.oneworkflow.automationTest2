@OW_Attach_remove_attached_files @OW_Incident

Feature: Automation - OW - Attach remove attached files

  Scenario: Automation - OW - Attach remove attached files

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "OW attach remove attach files" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "OW attach remove attach files"
    And user clicks on save button
    When user clicks attachments under sections
    Then  user adds attachment and verifies under "internal"
      | summary   | description | fullFilePath        | attachments |
      | Test Text | Test Text   | attachement.doc.txt | 1           |
    Then user clicks save button
    And change should also be reflected in the timeline as "Attachment has been added. File Name - attachement.doc.txt" on row 2
    When user clicks on attachments under sections
    And user clicks on the added attachment
    And user clicks attachment open button
    Then attachment form should open in new tab
    When user clicks on the attachment listed
    And clicks on display button
#    Then a new window should open with the attachment shown
#    When user closes the attachment window
#    And closes the attachment tab
    And user switches to window 1
    When user clicks on the added attachment
    And user clicks on the delete button under internal
    Then change should also be reflected in the timeline as "Attachment has been removed. File Name - attachement.doc.txt"

