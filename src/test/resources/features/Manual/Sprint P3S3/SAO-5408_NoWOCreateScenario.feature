@HelixNoWOCreate

  Feature: User cancels alarm before WO Rule is triggered
    Scenario: User cancels alarm before WO Rule is triggered

      Given Helix sends create incident message with tag wo_1 rule
      When OW creates an OP ticket
      Then user sends clear incident message before work order created (less than 2 mins)
      And no work order should be created in OW