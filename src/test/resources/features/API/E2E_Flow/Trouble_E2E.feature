@APITrouble
Feature: E2E Validation of API created trouble ticket
  Scenario: user validates all information on API ticket and processes ticket E2E
    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Trouble Event"
    And user enters ticket id as ""
    Then user should see trouble ticket
    And user validates ticket status as "Assigned"
    When user enters "Test Update - Public" in the timeline text box
    And user clicks on public radio button
    Then user clicks on add button on timeline
    And change should also be reflected in the timeline as "Test Update - Public" for trouble ticket in row 1
    And user enters "Test Update - Public" in the timeline text box
    And user clicks on private radio button
    Then user clicks on add button on timeline
    And change should also be reflected in the timeline as "Test Update - Private" for trouble ticket in row 1
    When user enters "New Title" in Title field
    And user clicks on save button
    Then change should also be reflected in the timeline as "" for trouble ticket in row 1
    When user selects request type as "Customer"
    And user clicks on save button
    Then change should also be reflected in the timeline as "" for trouble ticket in row 1
    When user enters description as "New Description"
    And user clicks on save button
    Then change should also be reflected in the timeline as "" for trouble ticket in row 1
    When user enters event start time as 5 mins past
    And user clicks on save button
    Then change should also be reflected in the timeline as "" for trouble ticket in row 1
    When user unticks all affected BU's
    And user clicks on sweden checkbox under affected BU's
    Then change should also be reflected in the timeline as "" for trouble ticket in row 1
    When user clicks on attachments under sections
    And user clicks on add button under internal
    Then user switches to frame
    And user enters attachment summary as "Test Attachment"
    And user enters attachment description as "Test Attachment"
    Then user adds attachment "attachement.doc"
    And user selects attachment visibility as Internal
    And user clicks on save button on attachment window
    And user switches to window 1
    Then change should also be reflected in the timeline as "Attachment has been added. File Name - attachement.doc.txt" for trouble ticket in row 1
    And user clicks on add button under internal
    Then user switches to frame
    And user enters attachment summary as "Test Attachment"
    And user enters attachment description as "Test Attachment"
    Then user adds attachment "attachement.doc"
    And user selects attachment visibility as external
    And user clicks on save button on attachment window
    And user switches to window 1
    Then change should also be reflected in the timeline as "Attachment has been added. File Name - attachement.doc.txt" for trouble ticket in row 1
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user switches to frame
    And user enters CI as "SE_AP_tylosand-first-camp-ap10b2"
    And user clicks on CI search button
    Then user selects CI "SE_AP_tylosand-first-camp-ap10b2"
    And user selects impact level as "No Impact"
    And user clicks on relate CI
    Then user clicks on close button on CI search window
    And user switches to window 1
    And CI should be listed and displayed under the Diagnosis tab
    When user clicks on "Timeline" tab
    Then change should also be reflected in the timeline as "Impact record created for SE_AP_tylosand-first-camp-ap10b2" for trouble ticket in row 1
    When user clicks on CTI details under sections
    And user clicks on location under sections
    Then user validates Category as "Access"
    And user validates type as "WLAN"
    And user validates item as "AP"
    And user validates model as "AIR-AP1242AG-E-K9"
    #think the below step needs implementing
    And user validates location details are updated
    When user clicks on "Interested Parties" tab
    And user enters "Change_Automation_1" under interested parties
    And user clicks on add email button
    Then user validates "Change_Automation_1" is listed as an interested party
    When user clicks on timeline tab
    Then change should also be reflected in the timeline as "The User   has been added as interested parties." for trouble ticket in row 1
    When user clicks on linked items tab
    And user selects target application first dropdown as "OS3 - Change"
    And user selects target application second dropdown as "Caused by"
    Then user clicks on link button
    And user switches to frame
    When user clicks on clear button
    And user selects Category as "Access"
    And user clicks on the search button on select target request
    And user highlights first ticket listed
    Then user clicks on accept button
    And user switches to window 1
    Then user clicks on timeline tab
    And change should also be reflected in the timeline as "" for trouble ticket in row 1
    When user clicks on linked items tab
    And user selects target application first dropdown as "OS3 - Operations"
    And user selects target application second dropdown as "Is related to"
    Then user clicks on link button
    And user switches to frame
    When user clicks on clear button
    And user selects Category as "Access"
    And user clicks on the search button on select target request
    And user highlights first ticket listed
    Then user clicks on accept button
    And user switches to window 1
    Then user clicks on timeline tab
    And change should also be reflected in the timeline as "" for trouble ticket in row 1
    When user clicks on linked items tab
    And user selects target application first dropdown as "OS3 - Work Order"
    And user selects target application second dropdown as "Caused by"
    Then user clicks on link button
    And user switches to frame
    When user clicks on clear button
    And user selects Category as "Access"
    And user clicks on the search button on select target request
    And user highlights first ticket listed
    Then user clicks on accept button
    And user switches to window 1
    Then user clicks on timeline tab
    And change should also be reflected in the timeline as "" for trouble ticket in row 1
    When user clicks on linked items tab
    And user selects target application first dropdown as "OS3 - Problem"
    And user selects target application second dropdown as "Fixed by"
    Then user clicks on link button
    And user switches to frame
    When user clicks on clear button
    And user selects Category as "Access"
    And user clicks on the search button on select target request
    And user highlights first ticket listed
    Then user clicks on accept button
    And user switches to window 1
    Then user clicks on timeline tab
    And change should also be reflected in the timeline as "" for trouble ticket in row 1
    When user clicks on linked items tab
    And user selects target application first dropdown as "OS3 - Known Error"
    And user selects target application second dropdown as "Has workaround"
    Then user clicks on link button
    And user switches to frame
    When user clicks on clear button
    And user selects Category as "Access"
    And user clicks on the search button on select target request
    And user highlights first ticket listed
    Then user clicks on accept button
    And user switches to window 1
    Then user clicks on timeline tab
    And change should also be reflected in the timeline as "" for trouble ticket in row 1
    When user selects importance as "Critical"
    And user selects impact as "Critical" on trouble event page
    And user clicks on save button
    And user validates hierachic escalation level as "Escalation manager (EM)"
    Then change should also be reflected in the timeline as "The Ticket Priority has been updated to :  Emergency" for trouble ticket in row 3
    And change should also be reflected in the timeline as "The Ticket has been escalated to Escalation manager (EM). Related Child WorkOrder is WO-000000044201" for trouble ticket in row 2
    And change should also be reflected in the timeline as "Child WorkOrder WO-000000044201 created for OP-000000632483" for trouble ticket in row 1
    Then user clicks on Ack button
    And user validates ticket status as "Work In Progress"
    And change should also be reflected in the timeline as "STATUS MODIFIED.  The trouble Status has changed: Assigned >> Work In Progress." for trouble ticket in row 1
    When user clicks on assignment under sections
    And user selects assigned profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core WEST"
    And user selects assignee as "Change_Automation_1" by using alphabet "c" key up 0 times
    Then user clicks on save button
    And change should also be reflected in the timeline as "ASSIGNMENT.  Trouble has been reassigned from user  >> Change_Automation_1" for trouble ticket in row 2
    And change should also be reflected in the timeline as "STATUS MODIFIED.  The trouble Status has changed: Work In Progress >> Assigned." for trouble ticket in row 1
    When user changes status to "Cleared"
