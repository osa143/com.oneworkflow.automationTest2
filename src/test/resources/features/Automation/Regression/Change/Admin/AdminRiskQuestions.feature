@AdminChangeRiskQuestions

  Feature: user can configure risk questions on the system (Create, Update, Delete)
    Scenario: risk questions configuration

      Given user is on the OneWorkflow login page
      When user logs in with valid username "fhr501" and password as "C0vidbadger"
      And user selects administration menu as "Change:Risk Questions"
      And user validates Risk questions forms is displayed
      When user clicks on the "New" button
      And user switches to frame
      Then user validates CM Risk Manangement Questions form is displayed
      When user enters "Test" in the customer+ field and searches
      Then user validates




