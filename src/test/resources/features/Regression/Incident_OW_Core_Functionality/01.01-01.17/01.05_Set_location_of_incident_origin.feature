@01.05_Set_location_of_incident_origin @Incident
Feature: Setting of incident start time

  Scenario: Incident start time is set when creating the ticket

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
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
    And user highlights location "SE_Site_SE M1"
    Then user clicks on ok button on location search
    #Location ID+, Location Name, Region ID, Region Name, Latitude, Longitude
    Then user validates location details are updated

