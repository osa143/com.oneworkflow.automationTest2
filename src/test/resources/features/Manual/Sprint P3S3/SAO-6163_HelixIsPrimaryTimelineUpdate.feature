@HelixIsPrimaryTimelineUpdate

  Feature: user validates a timeline entry is made that contains title and description whenever a new primary CI is appended/updated
    Scenario: user validates a timeline entry is made that contains title and description whenever a new primary CI is appended/updated

      Given user has access to Helix
      When user generates an alarm towards Helix
      Then Helix should be able to process alarm(s) and create an incident towards OW
      And user stores ticket ID from Helix
      Then user logs in with valid user and password to OW
      And user opens the ticket with alarms from Helix
      And user validates alarm information is correct
      When user appends a new alarm towards the same ticket
      And user has the "Is Primary" tag set to "Yes"
      Then user validates that appended CI is primary
      And user validates timeline entry is made that includes title and description
      When user triggers an update to the secondary alarm
      And user has the "Is Primary" tag set to "Yes"
      Then user valdiates updated CI is now primary
      And user validates timeline entry is made that includes title and description

