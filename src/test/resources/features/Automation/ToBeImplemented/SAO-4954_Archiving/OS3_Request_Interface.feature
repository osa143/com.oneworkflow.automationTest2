@SAO-4954 @OS3:Request:Interface
  #Tests below will cover:
  #OS3:OP/CM/WO/PB:Request:Interface
  #TS:OP/CM/WO/PB:Request:InterfaceOUT


  Feature: To verify records are archived succesfully based on archive critera set - Request Interface
    Scenario Outline: To verify records are archived succesfully based on archive critera set - Request Interface

      Given user is on the OneWorkflow login page
      When user enters valid admin username and password and clicks the login button
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      Then user opens new tab
      And user navigates to the "<Request Form>" form
      And user enters "%" in the request ID field
      Then user clicks on form search button
      And user stores amount of records shown
      Then user clicks on form refresh button
      #Records should decrease as they are being archived
      And user validates new amount of records
      Then user opens new tab
      And user navigates to the "<Archive Form>" form
      And user enters "%" in the request ID field
      Then user clicks on form search button
      And user stores amount of records shown
      Then user clicks on form refresh button
      #Records should increase as they are being archived
      And user validates new amount of records

      Examples:
      |Request Form              |Archive Form                      |
      |OS3:OP:Request:Interface  |OS3:OP:Request:Interface_Archive  |
      |OS3:PB:Request:Interface  |OS3:PB:Request:Interface_Archive  |
      |OS3:WO:Request:Interface  |OS3:WO:Request:Interface_Archive  |
      |OS3:CM:Request:Interface  |OS3:CM:Request:Interface_Archive  |
      |TS:OP:Request:InterfaceOUT|TS:OP:Request:InterfaceOUT_Archive|
      |TS:PB:Request:InterfaceOUT|TS:PB:Request:InterfaceOUT_Archive|
      |TS:WO:Request:InterfaceOUT|TS:WO:Request:InterfaceOUT_Archive|
      |TS:CM:Request:InterfaceOUT|TS:CM:Request:InterfaceOUT_Archive|
