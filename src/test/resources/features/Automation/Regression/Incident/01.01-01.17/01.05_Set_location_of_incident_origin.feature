@Incident  @01
#Passed
Feature: Setting location of incident origin
  @01.05
  Scenario: Setting location of incident origin

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on location under sections
    And user enters "SE_" within the location ID+ field
    And user switches to frame
    Then user should see list of swedish sites
    When user clicks on the next chunk button
    And user highlights location "SE_Site_SE M1" and clicks ok and validates location details
    When user clicks on sweden checkbox under affected BU's
    When user enters "01.05 set location of an incident" in Title field
    And user selects request type as "Customer" on trouble event page
    And user enters description as "set location of an incident"
    And user clicks on save button
    Then ticket should be created and status should be assigned



  Scenario: Quick search of location name+ in agent console

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user enters "NO_Site_OSL001" in the Location Name+ field
    Then tickets "NO_Site_OSL001" should be filtered "Location Name"
    When user enters "NO_Site_TLM151" in the Location Name+ field
    Then tickets "NO_Site_TLM151" should be filtered "Location Name"



