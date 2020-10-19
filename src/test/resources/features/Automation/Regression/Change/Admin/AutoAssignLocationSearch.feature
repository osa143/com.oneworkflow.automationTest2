@AdminChangeLocationSearch

Feature: Location search on auto assignment form
  Scenario: Location search on auto assignment form

    Given user is on the OneWorkflow login page
    When user logs in with valid username "fhr501" and password as "C0vidbadger"
    And user selects administration menu as "All Requests:Auto Assignment Rules"
    And user switches to window 1
    Then user should see auto assignment rules window
    When user clicks the new button on assignment rule window
    And user enters "SE_" in the Location Name+ field and searches
    Then user validates locations related to "SE" are shown
    And user clicks on cancel button
    When user enters "NO_" within the location ID+ field and searches
    Then user validates locations related to "NO" are shown
    And user clicks on cancel button
    When user enters "SWE" within the RegionName+ field and searches
    Then user validates locations related to "SE" are shown
    And user clicks on cancel button
