@Helix_IsPrimary

  Feature: Validation of IsPrimary field
    Scenario: user validates new primary CI can be added

      Given user has access to Helix
      When user generates an alarm towards Helix
      Then Helix should be able to process alarm(s) and create an incident towards OW
      And user stores ticket ID from Helix
      Then user logs in with valid user and password to OW
      And user opens the ticket with alarms from Helix
      And user validates alarm information is correct
      And user validates CI appended is Primary
      Then user triggers an append message from Helix that has isPrimary tag set as "Yes"
      And user validates new alarm is appended successfully
      And user validates new appended CI is primary
      And user validates timeline entry is created related to primary/secondary change
      And user validates CTI details are updated (if applicable)
      Then user triggers an append message from Helix that has isPrimary tag set as "No"
      And user validates new alarm is appended successfully
      And user validates new appended CI is Secondary
      And user validates primary CI hasnt changed
      When user triggers an update message from Helix that has isPrimary tag set to "Yes" on a previously created alarm that is secondary
      Then user validates updated CI/alarm has tag of "Primary"
      When user triggers an update message from Helix that has isPrimary tag set to "No" on a previously created alarm that is secondary
      Then user validates updated CI/alarm has tag of "Secondary"

