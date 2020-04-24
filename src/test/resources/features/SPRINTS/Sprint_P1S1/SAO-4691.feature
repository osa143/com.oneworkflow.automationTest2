@SAO-4691_WOStatus_AC

  Feature: One Workflow, Agent Console, Error in filter function
    Scenario Outline: One Workflow, Agent Console, Error in filter function

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects "Trouble Ticket" under all tickets
      Then user clicks on more filters button
      And user clicks on "Core" tab
      Then user selects "<Option>" under WO proposal dropdown
      And user selects "<WOStatus>" under WO Status dropdown
      Then user clicks on apply button on user more filters window
      And user validates WO status table shows only "<ValidationStatus>" work orders

      |Option|WOStatus|ValidationStatus|
      |Show  |OPEN    |OPEN            |
      |Show  |CLOSED  |CLOSED          |
      |Show  |NULL    |NULL            |
      |Hide  |OPEN    |CLOSED/NULL     |
      |Hide  |CLOSED  |OPEN/NULL       |
      |Hide  |NULL    |OPEN/CLOSED     |



