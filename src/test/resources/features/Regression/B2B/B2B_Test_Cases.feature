@B2B_Test_Cases

  Feature: B2B Cancel work order to field service before work is carried out

    Scenario Outline: user can cancel a work order sent to a field service before any work is carried out

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Telia@1234"
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
      When user clicks on outbound events refresh button
      Then user should see "Assignment" notification
      When user clicks on inbound events refresh button
      Then user should see "BTA:ExecutionStatusNotification" notification
      And user should see "BTA:OrderAcknowledgmentBySupplier" Notification
      Then user clicks on ticket refresh button
      When user clicks on "B2B Dispatch" tab
      Then user should see WFM ticket ID
      And user validates "Contact Name" is visible
      And user validates "Contact Telephone Number" is visible
      And user validates "Contact Mail Address" is visible
      When user selects dispatch status as "Cancel Requested"
      And user enters Cancel Requested Reason as "TEST"
      And user clicks on save button
      Then clicks on outbound events refresh button
      Then user should see "Withdrawn" notification
      When user clicks on inbound events refresh button
      Then user should see "BTA:OrderCancellation" notification
      When user clicks on ticket refresh button
      Then user validates ticket status as "Withdrawn"

      Examples:
        |title                                |Description                       |CIName                 |AssignmentProfile        |Manufacturer|
        |B2B Automated Test - Sweden Transtema|B2B Automation, Sweden, Transtema |SE_LTECell_100895010   |Transtema - FS - SE - B2B|Ericsson|
#        |B2B Automated Test - Sweden Eltel    |B2B Automation, Sweden, Eltel     |SE_LTECell_103392011   |Eltel - FS - SE - B2B    |Nokia   |
#        |B2B Automated Test - Finland Eltel   |B2B Automation, Finland, Eltel    |FI_LTECell_Valpe4H     |Eltel - FS - FIN - B2B   |Nokia   |
#        |B2B Automated Test - Finland Empower |B2B Automation, Finland, Empower  |FI_LTECell_Hauci1L     |Empower - FS - FI - B2B  |Nokia   |
#        |B2B Automated Test - Norway Oneco    |B2B Automation, Norway, Oneco     |NO_LTECell_TLM150_L18-1|Oneco - FS - NO - B2B    |Huawei  |
#        |B2B Automated Test - Lithuania Eltel |B2B Automation, Lithuania, Eltel  |LT_LTECell_2C16B011    |Eltel - FS - LT - B2B    |Huawei  |
#        |B2B Automated Test - Estonia Boftel  |B2B Automation, Estonia, Boftel   |EE_LTECell_AABLAK2     |Boftel - FS - EE - B2B   |Ericsson|
#
#
#



