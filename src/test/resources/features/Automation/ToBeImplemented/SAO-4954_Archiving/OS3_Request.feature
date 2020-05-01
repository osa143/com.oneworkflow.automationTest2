@OS3_Request
   #Tests below will cover:
  #OS3:OP/CM/WO/PB:Request

Feature: To verify records are archived succesfully based on archive critera set - Request form
  Scenario Outline: To verify records are archived succesfully based on archive critera set - Request form

    Given user is on the OneWorkflow login page
    When user enters valid admin username and password and clicks the login button
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    Then user opens new tab
    And user navigates to the "<Request Form>" form
    And user enters "Closed" in the status field
    Then user clicks Search on ticket search
    And user stores amount of records shown
    Then user clicks on form refresh button
      #Records should decrease as they are being archived
    And user validates new amount of records
    Then user opens new tab
    And user navigates to the "<Archive Form>" form
    And user enters "Closed" in the status field
    Then user clicks Search on ticket search
    And user stores amount of records shown
    Then user clicks on form refresh button
      #Records should increase as they are being archived
    And user validates new amount of records
    Then user stores first shown ticket ID
    And user navigates back to "<Request Form>"
    Then user clicks refresh button
    And user enters ticket in ticket ID+ field
    And user validates no records are found

    Examples:
      |Request Form  |Archive Form          |
      |OS3:OP:Request|OS3:OP:Request_Archive|
      |OS3:PB:Request|OS3:PB:Request_Archive|
      |OS3:WO:Request|OS3:WO:Request_Archive|
      |OS3:CM:Request|OS3:CM:Request_Archive|
