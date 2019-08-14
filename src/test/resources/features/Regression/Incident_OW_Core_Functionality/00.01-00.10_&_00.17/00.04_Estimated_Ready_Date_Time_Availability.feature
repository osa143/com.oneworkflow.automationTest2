@Estimated_Ready_Date_Time @Incident
#Passed
Feature: Incident
  Scenario: verify estimated ready date and time availability in incident record

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Telia@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    When user enters "Test case 00.04 Estimated Ready date and time" in Title field
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Test case 00.04 Estimated Ready date and time"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    And user gets ticket value
    When user selects search menu as "Open Search Form:Trouble Event"
    And user switches to window 2
    And user enters ticket previously created
    And user clicks Search on ticket search
    Then user verifies estimated ready field is available
    When user enters estimated ready as event start time plus 4 days on trouble event page
    And user clicks on save button
    Then estimated ready time should be saved correctly on trouble event page
    When user enters estimated ready as event start time plus -1 days on trouble event page
    And user clicks on save button
    Then error message should display as "Estimated Ready Time cannot be earlier than Event Start Time (ARERR 10000)" on change record page

