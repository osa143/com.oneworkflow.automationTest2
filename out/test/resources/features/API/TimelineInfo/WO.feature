@TimelineInfoWO
Feature: user validates timeline information/timeline entries can be made
  Scenario: user validates timeline information/timeline entries can be made

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Work Order"
    And user enters ticket id as ""
    Then user should see trouble ticket
    And user validates ticket status as "New"
    Then user validates Timeline Text entry isn't readonly
    And user enters "Test Update" in the timeline text box
    Then user clicks on add button on timeline
    And change should also be reflected in the timeline as ""
