@BR-2953

  Feature: TIKSU Mobile CIs not being attached

Scenario: TIKSU Matching CI is not present in OW


  Given user have access to TIKSU system
  When user creates a customer ticket in TIKSU system
  And user adds affected CI related to the created incident
  And Tiksu notifies One workflow regarding new ticket
  When there is no matching CI present in OW
  Then ticket is not assigned to OWF end but responsibility remains in Tiksu
  And there is no CI present under diagnosis tab



    Scenario: TIKSU Matching CI is present in OW

  Given user have access to TIKSU system
  When user creates a customer ticket in TIKSU system
  And user adds affected CI related to the created incident
  And Tiksu notifies One workflow regarding new ticket
  And TiKSU should be present in One workflow
  When there is a matching affected CI in OW as well
  Then TIKSU ticket should be assigned
  And ticket status should be assigned
  When user clicks on Diagnosis tab
  Then CI should be present under diagnosis tab







