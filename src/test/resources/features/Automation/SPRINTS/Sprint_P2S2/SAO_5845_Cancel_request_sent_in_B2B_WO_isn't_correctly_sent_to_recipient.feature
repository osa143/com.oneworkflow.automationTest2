@SAO_5845

Feature: SAO-5845 - Cancel request sent in B2B WO isn't correctly sent to recipient

  Scenario: SAO-5845 - Cancel request sent in B2B WO isn't correctly sent to recipient

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create work order
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "test SAO-5845" in Title field
    And user selects request type as "Maintenance" in work order page
    And user enters description as "Test SAO-5845"
    And user selects priority as "Major"
    And user clicks on save button
    And user clicks on Diagnosis tab
    Then user adds CI "SE_UMTSCell_8888882" to the ticket
    And user clicks on apply BtwoB button
    And user waits 4 secs
    #Then user clicks on assignment under sections
    And user should see assigned profile as "Transtema2 - FS - SE - B2B"
    Then user selects SLA class as "14 Day Repair Time"
    And user validates estimated ready time is updated
    When user clicks "B2B Dispatch" tab
    Then user enters header value as "Test"
    And user enters message value as "Test"
    Then user clicks save button
    When user clicks "B2B Dispatch" tab
    And user clicks on outbound events refresh button
    Then user should see "Assignment" notification in outbound in row 1
    And user waits 15 secs
    When user clicks on inbound events refresh button
    And user should see "BTA:OrderAcknowledgmentBySupplier" notification in inbound in row "1"
    Then user clicks on ticket refresh button
    When user clicks "B2B Dispatch" tab
    Then user should see WFM ticket ID
    And user validates Contact Name as ""
    And user validates Contact Telephone Number is present
    And user validates Contact Mail Address as ""
    When user selects dispatch status as "Cancel Requested"
    And user enters Cancel Requested Reason as "TEST"
    And user clicks on save button
    When user clicks on outbound events refresh button
    Then user should see "Withdrawn" notification in outbound in row 2
    And user waits 15 secs
    When user clicks on inbound events refresh button
    Then user should see "BTA:OrderCancellation" notification in inbound in row "<CancelRowNum>"
    And user clicks on ticket refresh button
    Then user validates ticket status as "Withdrawn"

