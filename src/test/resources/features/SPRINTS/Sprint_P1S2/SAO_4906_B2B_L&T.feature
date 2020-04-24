@4906

#We must use a CI from either of these two sites: SE_site_KLIN M1, SE_Site_K M13

   Feature: SAO-4906
   Scenario: Reach third party through Workorders using the B2B channel to L&T instead of email


     Given user is on the OneWorkflow login page
     And user logs in with valid user and password
     Then user successfully logged in to OneWorkflow and agent console should be displayed
     When user clicks on create work order
     Then user switches to window 1
     When user enters title as "B2B Test: SAO-4906"
     And user selects request type as "Maintenance" on work order page
     And user enters description as "B2B Test: SAO-4906"
     And user selects priority as "Info"
     Then user clicks on save button
     When user adds CI "SE_Site_K M13" to the ticket with impact level "Degradation of Service"
     And user selects assigned profile dropdown as "FieldSerive:Mobile(B2B):L-T – FS – SE – B2B"
     Then multiple statuses "14 Day Repair Time:2 Day Repair:24 Hours Repair Time:6 Hours Repair Time" should be available in "SLA Class" dropdown
     And user selects SLA class as "14 Day Repair Time"
     Then user validates estimated ready time is updated
     When user clicks on CTI details under sections
     Then user validates manufacturer as ""
     When user clicks on "B2B Dispatch" tab
     And user enters header value as "Test"
     And user enters message value as "Automated Test"
     Then user clicks on save button
     When user clicks on "B2B Dispatch" tab
     When user clicks on outbound events refresh button
     Then user should see "Assignment" notification in outbound in row 1
     And user waits 15 secs
     When user clicks on inbound events refresh button
     And user should see "BTA:OrderAcknowledgmentBySupplier" notification in inbound in row "1"
     Then user clicks on ticket refresh button
     When user clicks on "B2B Dispatch" tab
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
     Then user should see "BTA:OrderCancellation" notification in inbound in row "2"
     When user clicks on ticket refresh button
     Then user validates ticket status as "Withdrawn"
