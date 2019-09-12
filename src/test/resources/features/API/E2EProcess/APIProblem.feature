@E2EProblemAPI
  #Need API created Ticket
Feature: E2E flow for ticket created by API
  Scenario: E2E flow for ticket created by API

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Problem Record"
    And user enters ticket id as ""
    Then user should see problem ticket
    Then user clicks on Ack button
    And problem ticket status should be under investigation
    Then user changes status to investigation complete
    And user selects root cause code as Technical:HW error under route cause
    And user enters route cause details as "Bad Management"
    And user enters RC found date as current date
    And user clicks on save button
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Under Investigation to Investigation Complete. "
    When user changes status to closed
    And user clicks on save button
    Then an error message should appear: "Required field (without a default) not specified :Actual Finish (ARERR 9424)"
    And an error message should appear: "Required field (without a default) not specified :Closure Code (ARERR 9424)"
    And an error message should appear: "Required field (without a default) not specified :Decision Go/NoGo (ARERR 9424)"
    And an error message should appear: "Required field (without a default) not specified :Solution (ARERR 9424)"
    And an error message should appear: "Required field (without a default) not specified :Solution Found Date (ARERR 9424)"
    Then user enters actual finish as current date
    And user enters decision go no go as current date
    And user selects solved under closure code
    And user enters solution as "A change in processes"
    And user enters solution found date as current date
    Then user clicks on save button
    And user validates ticket status as "Closed"
    And change should also be reflected in the timeline as "Status has changed from Investigation Complete to Closed."
