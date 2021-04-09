@SAO_3384

Feature: SAO-3384 - Workorder updates not sent to B2B

  Scenario: SAO-3384 - Workorder updates not sent to B2B

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
    Then user adds CI "SE_LTECell_100895010" to the ticket
    And user waits 2 secs
    And user clicks on apply BtwoB button
    Then user should see assigned profile as "Transtema2 - FS - SE - B2B"
    When user selects SLA class as "8 Hours repair time"
    Then user validates estimated ready time is updated
    When user clicks on "B2B Dispatch" tab
    When user enters header value as "Testing"
    And user enters message value as "Test"
    Then user clicks on save button
    When user clicks on "B2B Dispatch" tab
    When user clicks on outbound events refresh button
    Then user should see "Assignment" notification in outbound in row 1
    And user waits 15 secs
    When user clicks on inbound events refresh button
    #And user should see "BTA:OrderAcknowledgmentBySupplier" notification in inbound in row "1"
    And user waits 10 secs
    Then user clicks attachments under sections
    And  user adds attachment and verifies under ""
      | summary   | description | fullFilePath       | attachments |
      | Test JPEG | Test JPEG   | Test JPEG FILE.jpg | 1           |
    And user waits 2 secs
    Then user clicks on save button
    When user clicks on "B2B Dispatch" tab
    When user clicks on outbound events refresh button
    Then user should see "NewInfo" notification in outbound in row 2
    And user waits 15 secs
    When user clicks on inbound events refresh button
    And user should see "BTA:OrderUpdateAcknowledgmentByResponder" notification in inbound in row "2"