@SAO-4973-Diagnosis_Columns
#Will add to this test case to include all options that should be there, this is a placeholder
  Feature: user validates column options under diagnosis tab
    Scenario: user validates column options under diagnosis tab

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case SAO-4973 - Diagnosis Columns" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case SAO-4973 - Diagnosis Columns"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user clicks on Diagnosis tab
      Then user validates "Business Hours" is available
      When user clicks on Remove Column under preferences
      Then user validates "Business Hours" is available