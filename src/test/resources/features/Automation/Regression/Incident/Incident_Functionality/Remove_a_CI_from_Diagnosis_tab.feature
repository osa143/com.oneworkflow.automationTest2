@06.09 @Remove_a_CI_from_Diagnosis_tab @Incident @Trouble1 @HelixRegr
  #passed
  Feature: Remove of CI from diagnosis tab
    Scenario: Remove of CI from diagnosis tab

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user creates an incident with following details
        |                Title     |RequestType|                 Description              |
        |Remove a CI from Diangosis|Customer   |Test case 05.01 Manually close an incident|
      Then ticket should be created and status should be assigned
      When user adds below CI's to the ticket
              |   CI Name     |
              |SE_EPG_FREEPG1 |
              |SE_EPG_HYEPG1  |
              |SE_EPG_LDHEPG1 |
      And user clicks on "Diagnosis" tab
#      Then user validates "Business Hours" is available
#      When user clicks on Remove Column under preferences
#      Then user validates "Business Hours" is available
      And user gets number of CI's
      When user right clicks on CI "SE_EPG_LDHEPG1" and selects "Detach"
      And user clicks on save button
      Then CI should be detached from ticket
