@changes @Title_Field_Structure_Validation
  #passed
  Feature: Validation of change Title field structure
    Scenario: Validation of change Title field structure
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
      Then user switches to window 1
      Then change record page should be opened and Change form is displayed
      And User selects "Title" as dropdownValue and should see values for "notreadonly"




      | DropdownValue | DropdownValuesToBePresent|
      |IT:BSS         |Examples                  |
#      |IT:Carrier     |IT \| Carrier               |
      |IT:CIO:Data & Information Management         |IT \| CIO \| Data & Information Management             |




