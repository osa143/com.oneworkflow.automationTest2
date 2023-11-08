@B2B_WO_From_OP
#Only Transtema is present in SIT
  Feature: Work order creation from incident

    Scenario Outline: create work order from OP ticket and send to B2B and cancel before work is carried out

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
#      When user clicks on agent console create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
#      When user clicks on OP sweden checkbox under affected BU's
      When user clicks on sweden checkbox under affected BU's
      And user enters "<title>" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "<Description>"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user adds CI "<CIName>" to the ticket with impact level "Degradation of Service"
      When user clicks on "Work Orders" tab
      And user clicks on create from ticket
      Then user switches to window 2
      Then user clicks on save button
      And user validates ticket status as "New"
      And user clicks on ticket refresh button
#      And user validates child WO ticket details are same as parent OP ticket
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
      And user waits 15 secs
      When user clicks on inbound events refresh button
      And user should see "BTA:OrderAcknowledgmentBySupplier" notification in inbound in row "<AckRowNum>"
      Then user clicks on ticket refresh button
      When user clicks on "B2B Dispatch" tab
      Then user should see WFM ticket ID
      And user validates Contact Name as "<ContactName>"
      And user validates Contact Telephone Number is present
      And user validates Contact Mail Address as "<ContactMailAddress>"
      When user selects dispatch status as "Cancel Requested"
      And user enters Cancel Requested Reason as "TEST"
      And user clicks on save button
      When user clicks on outbound events refresh button
      Then user should see "Withdrawn" notification in outbound in row 2
      And user waits 15 secs
      When user clicks on inbound events refresh button
      Then user should see "BTA:OrderCancellation" notification in inbound in row "<CancelRowNum>"
      When user clicks on ticket refresh button
      Then user validates ticket status as "Withdrawn"
#      And user validates all fields are read only and not editable
#      And user logsOut and closes the browser
#      And user switches to window 0


         Examples:
        |               title                 |           Description            |         CIName        |    AssignmentProfile    |Manufacturer|   ContactName                    |ContactMailAddress                |                 SLA Class                              |AckRowNum|CancelRowNum|
#        |B2B Automated Test - Sweden Transtema|B2B Automation, Sweden, Transtema |SE_LTECell_100895010   |Transtema2 - FS - SE - B2B|Ericsson   |Transtema SOC                      |support.tns@transtema.com         |118 Hour 5 days Cleanup correction time workdays        |   2     |     3      |
        |B2B Automated Test - Finland Eltel   |B2B Automation, Finland, Eltel    |FI_LTECell_Valpe4H     |Eltel - FS - FIN - B2B   |Nokia      |ELTEL ContactCenter                |nmc-messages@eltelnetworks.se    |118 Hour 5 days Cleanup correction time workdays (FI=A3) |   1     |     2    |
#        |B2B Automated Test - Finland Empower |B2B Automation, Finland, Empower  |FI_LTECell_Hauci1L     |Empower - FS - FI - B2B  |Nokia      |Empower Switchboard                |SCTyonohjaus@empower.fi          |118 Hour 5 days Cleanup correction time workdays (FI=A3) |   1     |     2      |
#        |B2B Automated Test - Sweden Eltel    |B2B Automation, Sweden, Eltel     |SE_LTECell_103392011    |Transtema2 - FS - SE - B2B|Nokia      |Team Sundsvall Serv                |NMC-MESSAGES@eltelnetworks.se   |118 Hour 5 days Cleanup correction time workdays          |   1     |     3      |









