Feature: initator create ticket and withdraw


  Scenario user should be able to create a problem ticket and withdraw it

    Given User is on the OneWorkflow login page
    When user logs in with valid problem initiator credentials
    Then user successfully logged in to oneworkflow and agent console should be displayed
    When user clicks on create problem record
    Then problem record form should appear in new tab
    When user clicks on save button on the problem form
    Then an error message should appear: "please select one country of impact for this change"
    When user clicks on sweden checkbox under affected BU's and selects save button
    Then Mulitple error messages should appear with red boarder around fields
    When user enters "proactive investigation of Tohall_Copy" in Title field
    And user selects request type as Access Networks:RAN optimization
    And user enters description as "UAT Test1"
    And user selects impact type as moderate/limited
    And selects urgency as low and clicks on save button
    Then ticket should be created and status should be asigned
    When user chnage status to withdrawn and clicks save button
    And user clicks on yes on warning window
    Then an error message should appear with red boarder around withdrawn reason
    When user selects withdrawn reason as false alarm and clicks save
    And user should see confirmation message and clicks on yes button
    Then  problem ticket should be withdrawn



