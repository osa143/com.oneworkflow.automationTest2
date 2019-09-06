@E2E_Standard_Change_External_Initiator @Change

Feature: E2E standard change external initiator
  Scenario: E2E standard change external initiator

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeInitiator/Builder1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    When user clicks save button
    Then error message should display as "Please fill up all the mandatory fields in the Details Panel to create a Change Request. (ARERR 10000)" on change record page
    When user selects request type as "Standard Change"
    And user validates "Template*" is mandatory
    And user selects template as "All:IT:Other:TEST TEMPLATE [UAT] - Standard Change"
    Then user validates Title is readonly
    And user validates Request Category is readonly
    And user validates Description* isn't readonly
    And user validates Reason is readonly
    And user validates Priority is readonly
    And user validates Implementation is readonly
    And user validates Test Plan is readonly
    And user validates Rollback is readonly
    When user clicks save button
    And multiple error messages should appear with red boarder around fields
    When user enters "CI B2" in the change builder field
    And user enters start time as 10 minutes fast from current sweden time
    And user enters end time as 16 minutes fast from current sweden time
    And user enters impact duration as "5" minutes
    Then user enters description as "Regression - Change Management Process"
    #Then user adds "Regression - Change Management Process" to current description
    And user clicks on save button
    And user waits 5 secs
    And user clicks on "Timeline" tab
    Then change should also be reflected in the timeline as "Ticket Priority is set to Info. Request Status is set to New. " on row 2
    When user clicks on Send button
    And an error message should appear: "Please select at least one country of impact for this change. (ARERR 10000)"
    And user clicks on norway checkbox under affected BU's
    Then user clicks on Send button and closes warning message
    When user clicks on "Diagnosis" tab
    And user clicks on CI search button
    Then user switches to frame
    And user enters "NO_NAT_GiBigIP0%" in the name+ field
    And user clicks on search button on CI search window
    Then user selects all CI's that appear
    And user selects impact level as "No Impact"
    And user clicks on relate CI
    Then user closes warning message
    And user clicks on close button on CI search window
    And CI should be listed and displayed under the Diagnosis tab
    When user clicks "Interested Parties" tab
    And user enters email address as "Test123xxx@Test123xxx.com"
    And user clicks on add email button
    Then user should see new email "Test123xxx@Test123xxx.com" added in "Email Address" in row 2
    And user waits 30 secs
    #When user clicks on Send button and closes warning message
    Then user validates ticket status as "Assigned"
    And user clicks on owner under sections
    And user clicks on assignment under sections
    And user validates owner profile as "Change Manager"
    And user validates owner as "Change Manager"
    And user should see assigned profile as "Change Implementation Control"
    And user waits 30 secs
    Then change should also be reflected in the timeline as "STATUS MODIFIED.  Request Status has changed from Assigned to Scheduled. " on row 1
    And user waits for 2 minutes
    And user clicks on ticket refresh button
    And user clicks on "Timeline" tab
    And change should also be reflected in the timeline as "STATUS MODIFIED.  Actual Start has changed from  UTC to 2019-09-05 10:15:00 UTC. Request Status has changed from Scheduled to Implementation." on row 2
    And user validates Description* isn't readonly
    And user validates Project Code isn't readonly
    And user validates Change Builder+* isn't readonly
    And user validates Timeline Text entry isn't readonly
    When user clicks on ticket refresh button
    And user clicks on Send button
    Then user validates send button is disabled
    And user validates ack button is disabled
    When user clicks on "Diagnosis" tab
    Then user validates CI Search is disabled
    And user validates save is enabled
    When user waits for 5 minutes
    And user clicks on ticket refresh button
    Then change should also be reflected in the timeline as "STATUS MODIFIED.  Actual Impact has changed from  to No Impact. Actual End has changed from  UTC to 2019-09-05 10:21:00 UTC. Completed Code has changed from  to Successful. Request Status has changed from Implementation to Completed. " on row 2
    When user waits for 5 minutes
    And user clicks on ticket refresh button
    And user validates ticket status as "Closed"
    And user clicks on timeline tab
    Then change should also be reflected in the timeline as "STATUS MODIFIED.  Completed Code has changed from Successful to Completed Successfully. Request Status has changed from Completed to Closed. " on row 1

