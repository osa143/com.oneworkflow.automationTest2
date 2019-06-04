@Add_CI_&_Attachment
  Feature: User is able to add a CI and attachment to a problem ticket
    Scenario: user can create a problem record and add a CI and attachment to it

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Tohall_copy" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create problem record
      Then problem record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      When user enters "proactive investigation of Tohall_Copy" in Title field
      And user selects request type as Access Networks:RAN optimization
      And user enters description as "UAT Test 3 Add CI and attachment"
      And user selects impact type as moderate:limited
      And user selects urgency as low
      And user clicks on save button on the problem form
      Then ticket should be created and status should be assigned
      Then user enters description as "-More information"
      And user clicks on save button on the problem form
      And change should also be reflected in the timeline as ""
      Then user clicks on Diagnosis tab
      And CI search tab should be opened
      Then user clicks on CI search button
      And user enters "SE_CPE_FRECPE5" in name field
      And user selects a CI from list
      And user Choose impact level as no impact
      And user clicks on relate CI
      And user closes warning message and clicks on close button
      Then CI should be listed and displayed under the Diagnosis tab
      Then user clicks on attachments under sections
      And user clicks on add button under internal
      Then user selects decision under summary dropdown
      And user enters attachment description as "A Document Attached"
      Then user clicks on add button in attachment window
      When user clicks on browse button
      Then user searches for attachment to add
      And user adds attachment to ticket
      Then user clicks on attachment ok button
      And user clicks on save button on attachment window
      And change should also be reflected in the timeline as "Attachment has been added. File Name - attachment.doc"
      When user clicks on the added attachment
      And user clicks on open button
      Then attachment form should open in new tab
      When user clicks on the attachment listed
      And clicks on display button
      Then a new window should open with the attachment shown
      When user closes the attachment window
      And closes the attachment tab
      Then problem form should be displayed
      And user clicks on the attached document
      And user clicks on the delete button under internal
      And change should also be reflected in the timeline as "Attachment has been removed. File Name - attachment.doc"
      Then attachment should no longer be visible
      And user logsOut and closes the browser


