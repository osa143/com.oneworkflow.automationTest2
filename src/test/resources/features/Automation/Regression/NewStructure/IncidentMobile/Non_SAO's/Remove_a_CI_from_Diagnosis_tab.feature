@06.09 @Remove_a_CI_from_Diagnosis_tab @Incident @Trouble1 @HelixRegression @Incident_NonSAO @Rerun
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
        |Remove a CI from Diagnosis|Customer   |Test case 05.01 Manually close an incident|
      Then ticket should be created and status should be assigned
      And user gets trouble ticket value
      Then user adds CI "SE_EPG_FREEPG1" to the ticket with impact level "No Impact"
      Then user adds CI "SE_EPG_HYEPG1" to the ticket with impact level "No Impact"
      Then user adds CI "SE_EPG_LDHEPG1" to the ticket with impact level "No Impact"
      And user clicks on "Diagnosis" tab
#      Then user validates "Business Hours" is available
#      When user clicks on Remove Column under preferences
#      Then user validates "Business Hours" is available
      And user gets number of CI's
      When user right clicks on CI "SE_EPG_LDHEPG1" and selects "Detach"
      And user clicks on save button
      Then CI should be detached from ticket
