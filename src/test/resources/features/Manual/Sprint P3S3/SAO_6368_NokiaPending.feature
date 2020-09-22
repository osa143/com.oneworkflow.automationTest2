@SAO-6368

  Feature: Inbound pending notification from nokia
    Scenario: Inbound pending notification from nokia

      Given user has access to Nokia
      When user creates an OP request from Nokia and functionally escalates to OW
      Then user logs into OW with a valid username/password
      And user validates Nokia OP Reqeust information
      Then user triggers pending update from Nokia towards OW
      And user validates ticket status as pending
      Then user waits for on hold time to pass
      And user triggers an update message from Nokia towards OW
      And user validates update is received successfully and no errors are shown