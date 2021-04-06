@7192

   Feature: B2B Transtema

    Scenario Outline: Change in setup for B2B Transtema

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create work order
      Then user switches to window 1
      When user enters title as "<title>"
      And user selects request type as "Maintenance" on work order page
      And user enters description as "<Description>"
      And user selects priority as "Info"
      Then user clicks on save button
      When user adds CI "<CIName>" to the ticket with impact level "Degradation of Service"
      And user clicks on ticket refresh button
      When user clicks on apply BtwoB button
      Then user should see assigned profile as "<AssignmentProfile>"
      And user selects SLA class as "<SLA Class>"
      When user clicks on CTI details under sections
      Then user validates manufacturer as "<Manufacturer>"
      When user clicks on "B2B Dispatch" tab
      And user enters header value as "Test"
      And user enters message value as "Automated Test"
      Then user clicks on save button
      When user clicks on "B2B Dispatch" tab
      When user clicks on outbound events refresh button
      Then user should see "Assignment" notification in outbound in row 1
      When user clicks on "B2B Dispatch" tab
      When user double clicks and open outbound message
      And new interface window should be opened
      And user clicks "Custom Field" tab
      Then user should see agreement contractor as "4800020552"
      And user validates customer ID contractor as "20552-M1"




      Examples:
        |               title                  |           Description            |         CIName        |    AssignmentProfile    |Manufacturer|                  SLA Class                     |
        |B2B Change in setup - Sweden Transtema|B2B Automation, Sweden, Transtema |SE_LTECell_100304011   |Transtema2 - FS - SE - B2B|Ericsson   |118 Hour 5 days Cleanup correction time workdays|





