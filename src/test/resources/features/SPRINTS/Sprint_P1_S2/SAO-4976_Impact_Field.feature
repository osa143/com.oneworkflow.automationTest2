@SAO-4976_Impact_Field

  Feature: user validates you cant edit impact field to have any value
    Scenario: user validates you cant edit impact field to have any value

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case SAO-4976 - Impact Field" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case SAO-4976 - Impact Field"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      Then user validates Impact as "No"
      #Text below might not be able to be entered after fix is applied, if that's the case, test is successful as field should not be editable outside of enum values
      When user enters "NotValid" into "Impact" field
      And user clicks save button
      And user validates Impact as "No"
