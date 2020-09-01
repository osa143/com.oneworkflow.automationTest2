@B2B_WO_ERT

  Feature: B2B - Work order

    Scenario Outline: Estimated Ready Time verification for past and future dates

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
      And user clicks on save button
      And user validates ticket status as "Assigned"
      When user enters estimated ready as event start time plus -1 days on trouble event page
      And user clicks on save button
      Then error message should display as "Estimated Ready Time cannot be earlier than Event Start Time (ARERR 10000)" on change record page
      Then user verifies estimated ready field is available
      When user enters estimated ready as event start time plus 8 days on trouble event page
      And user clicks on save button
      Then estimated ready time should be saved correctly on trouble event page



      Examples:
         |               title                 |           Description            |         CIName        |    AssignmentProfile    |Manufacturer|               SLA Class                              |
#        |B2B Automated Test - Sweden Transtema|B2B Automation, Sweden, Transtema |SE_LTECell_100895010   |Transtema2 - FS - SE - B2B|Ericsson   | 118 Hour 5 days Cleanup correction time workdays        |
#        |B2B Automated Test - Sweden Eltel    |B2B Automation, Sweden, Eltel     |SE_LTECell_103392011   |Eltel - FS - SE - B2B    |Nokia      |118 Hour 5 days Cleanup correction time workdays          |
        |B2B Automated Test - Finland Eltel   |B2B Automation, Finland, Eltel    |FI_LTECell_Valpe4H     |Eltel - FS - FIN - B2B   |Nokia      |118 Hour 5 days Cleanup correction time workdays (FI=A3) |
#        |B2B Automated Test - Finland Empower |B2B Automation, Finland, Empower  |FI_LTECell_Hauci1L     |Empower - FS - FI - B2B  |Nokia      |118 Hour 5 days Cleanup correction time workdays (FI=A3) |
#        |B2B Automated Test - Norway Oneco    |B2B Automation, Norway, Oneco     |NO_LTECell_TLM150_L18-1|Oneco2 - FS - NO - B2B    |Huawei     |118 Hour 5 days Cleanup correction time workdays        |
#        |B2B Automated Test - Lithuania Eltel |B2B Automation, Lithuania, Eltel  |LT_LTECell_2C16B011    |Eltel - FS - LT - B2B    |Huawei     |118 Hour 5 days Cleanup correction time workdays        |
#        |B2B Automated Test - Estonia Boftel  |B2B Automation, Estonia, Boftel   |EE_LTECell_AABLAK2     |Boftel - FS - EE - B2B   |Ericsson   |118 Hour 5 days Cleanup correction time workdays        |





