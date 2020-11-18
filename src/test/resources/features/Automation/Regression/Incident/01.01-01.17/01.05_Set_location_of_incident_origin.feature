
#Passed
Feature: Setting location of incident origin
  @01.05 @Incident  @01
  Scenario: Setting location of incident origin

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on location under sections
    #To search for the location details you need to press enter after the text
    And user enters "SE_" within the location ID+ field
    And user switches to frame
    Then user should see list of swedish sites
    When user clicks on the next chunk button
    #Location Name,Location ID+,Region Name, Region ID, Latitude, Longitude
    And user highlights location "SE_Site_SE M1" and clicks ok and validates location details




   Scenario: Quick search of location name+ in agent console

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user enters "NO_Site_OSL001" in the Location Name+ field
    Then tickets "NO_Site_OSL001" should be filtered "Location Name"
    When user enters "NO_Site_TLM151" in the Location Name+ field
    Then tickets "NO_Site_TLM151" should be filtered "Location Name"



