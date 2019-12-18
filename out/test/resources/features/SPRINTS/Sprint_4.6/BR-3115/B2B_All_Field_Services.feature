@BR-3115
Feature: Automatic assignment of work orders Ericsson based on CI
  In order to efficiently solve incidents and meet customer service level agreements
  As an incident manager
  I need to be able to assign work orders to Ericsson
#Below scenarios covers all 8 ALM test cases for BR-3115

  Scenario Outline: Creating a work order from an incident
    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    When user creates an incident with following details
      |Title           |RequestType|Description     |
      |BR-3115-B2B Test|Customer   |BR-3115-B2B Test|
    And user adds CI "<CIName>" to the ticket
    And user creates a work order from the incident
    And user clicks on apply BtwoB button
    Then user should see assigned profile as "<AssignedProfile>"
    Then user enters estimated ready as event start time plus 1 days
    And user selects SLA class as "118 Hour 5 days Cleanup correction time workdays"
    When user clicks on "B2B Dispatch" tab
    And user enters header value as "Test"
    And user enters message value as "Automated Test"
    Then user clicks on save button
    When user clicks on "B2B Dispatch" tab
    When user clicks on outbound events refresh button
    Then user should see "Assignment" notification in outbound in row 1
    When user clicks on inbound events refresh button
    And user should see "BTA:OrderAcknowledgmentBySupplier" notification in inbound in row 1
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
    When user clicks on inbound events refresh button
    Then user should see "BTA:OrderCancellation" notification in inbound in row 2
    When user clicks on ticket refresh button
    Then user validates ticket status as "Withdrawn"

    Examples:
     |CIName                 |AssignedProfile           |ContactName                            |ContactMailAddress       |
     |SE_UMTSCell_8888882    |Transtema2 - FS - SE - B2B|Transtema SOC                          |support.tns@transtema.com|
#    |NO_LTECell_OSL894_L7-27|Oneco2 - FS - NO - B2B    |OneCo SPOC (Single Point Of Contact)   |spoc@oneco.no            |
#    |SE_LTECell_100895010   |Transtema - FS - SE - B2B |OneCo SPOC (Single Point Of Contact)   |telecom.spoc@oneco.no    |                                    |                     |
#    |NO_LTECell_TLM150_L18-1|Oneco - FS - NO - B2B     |OneCo SPOC (Single Point Of Contact)   |telecom.spoc@oneco.no    |



#  For Ericsson               SE_Site_K M13                 SE_LTECell_100895010    Transtema – FS – SE – B2B
#  For Transtema              SE_Site_REF SW01              SE_UMTSCell_8888882     Transtema2 – FS – SE – B2B
#  For Rejlers                NO_Site_TLM150                NO_LTECell_TLM150_L18-1  Oneco – FS – NO – B2B
#  For OneCo                  NO_Site_REF NO01              NO_LTECell_OSL894_L7-27  Oneco2 – FS – NO – B2B
