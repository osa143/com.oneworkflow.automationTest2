@B2B_Test_Cases
#Only Transtema is present in SIT
  Feature: B2B Cancel work order to field service before work is carried out

    Scenario Outline: user can cancel a work order sent to a field service before any work is carried out

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
        |B2B Automated Test - Sweden Transtema|B2B Automation, Sweden, Transtema |SE_LTECell_100895010   |Transtema2 - FS - SE - B2B|Ericsson   |Transtema SOC                      |support.tns@transtema.com         |118 Hour 5 days Cleanup correction time workdays        |   2     |     3      |
#        |B2B Automated Test - Sweden Eltel    |B2B Automation, Sweden, Eltel     |SE_LTECell_103392011   |Eltel - FS - SE - B2B    |Nokia      |Team Sundsvall Serv                |NMC-MESSAGES@eltelnetworks.se   |118 Hour 5 days Cleanup correction time workdays          |   1     |     3      |
#        |B2B Automated Test - Finland Eltel   |B2B Automation, Finland, Eltel    |FI_LTECell_Valpe4H     |Eltel - FS - FIN - B2B   |Nokia      |ELTEL ContactCenter                |nmc-messages@eltelnetworks.se    |118 Hour 5 days Cleanup correction time workdays (FI=A3) |   1     |     2    |
#        |B2B Automated Test - Finland Empower |B2B Automation, Finland, Empower  |FI_LTECell_Hauci1L     |Empower - FS - FI - B2B  |Nokia      |Empower Switchboard                |SCTyonohjaus@empower.fi          |118 Hour 5 days Cleanup correction time workdays (FI=A3) |   1     |     2      |
#        |B2B Automated Test - Norway Oneco    |B2B Automation, Norway, Oneco     |NO_LTECell_TLM150_L18-1|Oneco2 - FS - NO - B2B    |Huawei     |OneCo SPOC (Single Point Of Contact)|spoc@oneco.no                   |118 Hour 5 days Cleanup correction time workdays        |   1     |     2      |
#        |B2B Automated Test - Lithuania Eltel |B2B Automation, Lithuania, Eltel  |LT_LTECell_2C16B011    |Eltel - FS - LT - B2B    |Huawei     |B2B Mobile Litauen                  |lars.bergh@eltelnetworks.se      |118 Hour 5 days Cleanup correction time workdays        |   1     |     1      |
#        |B2B Automated Test - Estonia Boftel  |B2B Automation, Estonia, Boftel   |EE_LTECell_AABLAK2     |Boftel - FS - EE - B2B   |Ericsson   |Boftel Estonia NOC                  |ee.noc@boftel.com                |118 Hour 5 days Cleanup correction time workdays        |   1     |     2      |





