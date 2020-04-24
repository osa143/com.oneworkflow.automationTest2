@SAO-5607

  #will retry 3 times, if finds alarms then success is given, if no ticket is found, then error is shown

  Feature: FM Integration Error
    Scenario: user validates FM Integration error is not shown and retry occurs

      Given user has access to FM system
      When user triggers a create alarm message into the FM system
      Then user should see alarm in FM system
      When user triggers an append alarm with for the same ticket and owf returns a timeout error
      Then retry operation should occur
      And a successful message should be returned


