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
      When user clicks on Diagnosis tab
      And user clicks on CI search button
      And user switches to frame
      When user enters "<CIName>" in the name+ field
      And user clicks on search button on CI search window
      And user selects a CI from list
      And user waits 3 secs
      And user selects impact level as "Degradation of Service"
      Then user clicks on relate CI
      And user closes warning message
      And user clicks on close button on CI search window
      When user clicks on apply BtwoB button
      Then user should see assigned profile as "<AssignmentProfile>"
      Then user enters estimated ready as event start time plus 1 days
      And user selects SLA class as "118 Hour 5 days Cleanup correction time workdays"
      When user clicks on CTI details under sections
      Then user validates manufacturer as "<Manufacturer>"
      When user clicks on "B2B Dispatch" tab
      And user enters header value as "Test"
      And user enters message value as "Automated Test"
      Then user clicks on save button
      When user clicks on "B2B Dispatch" tab
      When user clicks on outbound events refresh button
      And user waits 3 secs
      Then user should see "Assignment" notification in outbound in row 1
      And user waits 30 secs
      When user clicks on inbound events refresh button
      Then user should see "BTA:ExecutionStatusNotification" notification in inbound in row 1
      And user should see "BTA:OrderAcknowledgmentBySupplier" notification in inbound in row 2
      Then user clicks on ticket refresh button
      And user waits 5 secs
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
      And user waits 5 secs
      When user clicks on inbound events refresh button
      Then user should see "BTA:OrderCancellation" notification in inbound in row 3
      When user clicks on ticket refresh button
      Then user validates ticket status as "Withdrawn"
      And user logsOut and closes the browser
      And user switches to window 0


      Examples:
         |title                                |Description                       |CIName                 |AssignmentProfile        |Manufacturer|ContactName            |ContactMailAddress           |
 #      |B2B Automated Test - Sweden Transtema|B2B Automation, Sweden, Transtema |SE_LTECell_100895010   |Transtema - FS - SE - B2B|Ericsson   |Transtema SOC          |support.tns@transtema.com    |
#        |B2B Automated Test - Sweden Eltel    |B2B Automation, Sweden, Eltel     |SE_LTECell_103392011   |Eltel - FS - SE - B2B    |Nokia      |Team Sundsvall Serv/Lev|NMC-MESSAGES@eltelnetworks.se|
#        |B2B Automated Test - Finland Eltel   |B2B Automation, Finland, Eltel    |FI_LTECell_Valpe4H     |Eltel - FS - FIN - B2B   |Nokia      |ELTEL ContactCenter    |nmc-messages@eltelnetworks.se|
#        |B2B Automated Test - Finland Empower |B2B Automation, Finland, Empower  |FI_LTECell_Hauci1L     |Empower - FS - FI - B2B  |Nokia      |Empower Switchboard    |SCTyonohjaus@empower.fi      |
#        |B2B Automated Test - Norway Oneco    |B2B Automation, Norway, Oneco     |NO_LTECell_TLM150_L18-1|Oneco - FS - NO - B2B    |Huawei     |                       |                             |
#       |B2B Automated Test - Lithuania Eltel |B2B Automation, Lithuania, Eltel  |LT_LTECell_2C16B011    |Eltel - FS - LT - B2B    |Huawei     |B2B Mobile Litauen     |lars.bergh@eltelnetworks.se  |
#        |B2B Automated Test - Estonia Boftel  |B2B Automation, Estonia, Boftel   |EE_LTECell_AABLAK2     |Boftel - FS - EE - B2B   |Ericsson   |Boftel Estonia NOC      |ee.noc@boftel.com            |






