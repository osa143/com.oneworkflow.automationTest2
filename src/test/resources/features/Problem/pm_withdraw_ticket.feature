
@Pm_Withdraw_Ticket
Feature: problem record

Scenario: problem manager withdraw ticket before Acknowledge

Given User is on the OneWorkflow login page
When user logs in with valid problem manager username "frvi96_auto" and password "Test@1234"
Then user successfully logged in to oneworkflow and agent console should be displayed
And user clicks on search and selects open search forms and problem record
And user enters Problem Ticket
And user clicks Search on ticket search
When user changes status to withdrawn
And user clicks on save button on the problem form
And user clicks on yes on warning window
Then an error message "Required field (without a default) not specified : Withdrawn Reason (ARERR 9424)	" should appear with red boarder around withdrawn reason
When user selects withdrawn reason as false alarm and clicks save
And user should see confirmation message and clicks on yes button
Then  problem ticket should be withdrawn
Then user logouts and closes the browser

