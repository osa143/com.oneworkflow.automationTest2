@OS3_SID_CI_History

Feature: To verify records are archived succesfully based on archive critera set - OS3:SID:CI:History form
  Scenario: To verify records are archived succesfully based on archive critera set - OS3:SID:CI:History form

    Given user is on the OneWorkflow login page
    When user enters valid admin username and password and clicks the login button
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    Then user opens new tab
    And user navigates to the "OS3:SID:CI:History" form
    And user enters "%" in the "Request ID" field
    Then user clicks on form search button
    And user stores amount of records shown
    Then user clicks on form refresh button
      #Records should decrease as they are being archived
    And user validates new amount of records
    Then user opens new tab
    And user navigates to the "OS3:SID:CI:History_Archive" form
    And user enters "%" in the "Request ID" field
    Then user clicks on form search button
    And user stores amount of records shown
    Then user clicks on form refresh button
      #Records should increase as they are being archived
    And user validates new amount of records