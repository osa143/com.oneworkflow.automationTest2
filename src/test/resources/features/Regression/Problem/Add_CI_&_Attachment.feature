@Add_CI_&_Attachment
  Feature: User is able to add a CI and attachment to a problem ticket
    Scenario: user can create a problem record and add a CI and attachment to it

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create problem record
      And user switches to window 1
      Then problem record form should appear in new tab
      When user creates problem ticket with following details
        |Title                                  |RequestType |Description                    |ImpactType      |Urgency|
        |proactive investigation of Tohall_Copy|CPS:IT:Other|UAT Test 3 Add CI and attachment|Moderate/Limited|Low    |
      Then ticket should be created and status should be assigned
      Then user enters description as "-More information"
      And user clicks on save button on the problem form
      And change should also be reflected in the timeline as "Ticket Description has changed from \"UAT Test 3 Add CI and attachment\" to \"-More information"
      Then user clicks on Diagnosis tab
      Then user clicks on CI search button
      And CI search tab should be opened
      And user switches to frame
      And user enters "SE_CPE_FRECPE5" in name field
      And user clicks on search button on CI search window
      And user selects a CI from list
      And user selects impact level as "No Impact"
      And user clicks on relate CI
      And user closes warning message
      And user clicks on close button on CI search window
      Then user clicks on Diagnosis tab
      Then CI should be listed and displayed under the Diagnosis tab
      And user clicks on add button under internal
      And user switches to frame 2
      Then user selects summary dropdown as "Decision"
      And user enters attachment description as "A Document Attached"
      When user clicks on choose file button
      Then user searches for attachment and adds attachment to ticket
      Then user clicks on attachment ok button
      And user clicks on save button on attachment window
      And change should also be reflected in the timeline as "Attachment has been added. File Name - attachment.doc"

  ##  Manual Run ##
#      When user clicks on the added attachment
#      And user clicks on open button
#      Then attachment form should open in new tab
#      When user clicks on the attachment listed
#      And clicks on display button
#      Then a new window should open with the attachment shown
#      When user closes the attachment window
#      And closes the attachment tab
#      Then problem form should be displayed
#      And user clicks on the attached document
#      And user clicks on the delete button under internal
#      And change should also be reflected in the timeline as "Attachment has been removed. File Name - attachment.doc"
#      Then attachment should no longer be visible



