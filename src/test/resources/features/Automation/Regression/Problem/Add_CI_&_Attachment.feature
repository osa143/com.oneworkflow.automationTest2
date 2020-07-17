@Add_CI_&_Attachment  @Reg_Problem
  Feature: User is able to add a CI and attachment to a problem ticket
    Scenario: user can create a problem record and add a CI and attachment to it

      Given user is on the OneWorkflow login page
      When user logs in with valid username "frvi96_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create problem record
      And user switches to window 1
      Then problem record form should appear in new tab
      When user creates problem ticket with below details
        |Title                                  |RequestType |Description   |ImpactType      |Urgency|
        |proactive investigation of: frvi96_auto|CPS:IT:Other|UAT Test close|Moderate/Limited|Low    |
      Then ticket should be created and status should be assigned
      Then user enters description as "-More information"
      And user clicks on save button on the problem form
      #And change should also be reflected in the timeline as "Ticket Description has changed from \"UAT Test 3 Add CI and attachment\" to \"-More information"
      When user adds below CI's to the ticket
        |   CI Name     |
        |SE_CPE_FRECPE5 |
      Then user clicks on Diagnosis tab
      Then CI should be listed and displayed under the Diagnosis tab
      And  user adds attachment and verifies under ""
        | summary   | description | fullFilePath       | attachments |
        | Test JPEG | Test JPEG   | attachement.doc.txt | 1          |
      Then user clicks save button
      #And change should also be reflected in the timeline as "Attachment has been added. File Name - attachment.doc"
      When user clicks on the added attachment
      And user clicks on open button
      Then attachment form should open in new tab
      When user clicks on the attachment listed
      And clicks on display button
      Then a new window should open with the attachment shown
      When user closes the attachment window
      And closes the attachment tab
      And user switches to window 1
      When user clicks on the added attachment
      And user clicks on the delete button under internal
      #And change should also be reflected in the timeline as "Attachment has been removed. File Name - attachment.doc"
      Then attachment should no longer be visible



