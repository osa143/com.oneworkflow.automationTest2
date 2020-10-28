@Automation_OW_Attach_remove_attached_files
#Automation - OW - Attach remove attached files

Feature: Automation - OW - Attach remove attached files

  Scenario: Automation - OW - Attach remove attached files

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And user opens OP ticket
    And user switches to window 1
    When user clicks attachments under sections
    Then  user adds attachment and verifies under "internal"
      | summary   | description | fullFilePath       | attachments |
      | Test Text | Test Text   | attachement.doc | 1           |
    When user clicks on the attachment listed
    And user clicks open attachment
    Then user validates attached document is visible
    And user closes the attachment window
    When user clicks on the attachment listed
    And user clicks on the delete button under internal
    Then attachment should no longer be visible
