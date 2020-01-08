@MimerParentChildWorkFlow

  Feature: Parent-child workflow
    Scenario: Child Ticket Workflow

      Given I have a child incident
      When I change the parent ticket status to “Cleared”
      Then child ticket status should be updated to “Cleared”