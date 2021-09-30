@SAO_4722_2

  #SE_Site_NICE_835319
  #SE_Site_NICE_835319|
  #Test Requires us to now go to the managed element form and then change a CI there to have the pipe symbol, then change back
  #https://td777lb-mtint.ddc.teliasonera.net/arsys/forms/td777lb-ars/SMIT.SID.COMMON%3AOS3_ManagedElement/ObjectStoreView/?cacheid=f51db0e9

Feature: SAO_4722 - CI Name that contains " | " does not get attached to Diagnosis tab

  Scenario: SAO_4722 - CI Name that contains pipe symbol does not get attached to Diagnosis tab

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    And user clicks on sweden checkbox under affected BU's
    Then user enters title as "Test"
    And user selects request type as "Event" on trouble event page
    Then user enters description as "Test Description"
    And user clicks save button
    And user waits 5 secs
    Then ticket should be created and status should be assigned
    And user adds CI "SE_STN_|100052_S_S_M71" to the ticket
    Then user clicks on Diagnosis tab
    And user validates CI "SE_STN_|100052_S_S_M71" is listed