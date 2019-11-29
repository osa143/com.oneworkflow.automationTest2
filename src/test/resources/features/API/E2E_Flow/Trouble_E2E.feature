@API_Trouble_E2E
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
    And change should also be reflected in the timeline as "Test Update - Public"
    And user enters "Test Update - Public" in the timeline text box
    And user clicks on private radio button
    Then user clicks on add button on timeline
    And change should also be reflected in the timeline as "Test Update - Private"
    When user enters "New Title" in Title field
    And user clicks on save button
    Then change should also be reflected in the timeline as ""
    When user selects request type as "Customer"
    And user clicks on save button
    Then change should also be reflected in the timeline as ""
    When user enters description as "New Description"
    And user clicks on save button
    Then change should also be reflected in the timeline as ""
    When user enters event start time as 5 mins past
    And user clicks on save button
    Then change should also be reflected in the timeline as ""
    When user unticks all affected BU
    And user clicks on sweden checkbox under affected BU's
    Then change should also be reflected in the timeline as ""
    And  user adds attachment and verifies under "internal"
      | summary   | description | FileType           | attachments |
      | Test JPEG | Test JPEG   | Test JPEG FILE.jpg | 1           |
      | Test PNG  | Test PNG    | Test PNG FILE.png  | 2           |
      | Test PDF  | Test PDF    | Test PDF FILE.pdf  | 3           |
      | Test WORD | Test WORD   | Test WORD FILE.docx| 4           |
      | Test EXCEL| Test EXCEL  | Test XLS FILE.xls  | 5           |
      | Test PPT  | Test PPT    | Test PPT FILE.pptx | 6           |
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
    Then change should also be reflected in the timeline as "Impact record created for SE_AP_tylosand-first-camp-ap10b2"
    When user clicks on CTI details under sections
    And user clicks on location under sections
    Then user validates Category as "Access"
    And user validates type as "WLAN"
    And user validates item as "AP"
    And user validates model as "AIR-AP1242AG-E-K9"
    #think the below step needs implementing
    And user validates location details are updated
    When user clicks on "Interested Parties" tab
    And user enters "Change_Automation_1" in login name plus field
    And user clicks on add email button
    Then user validates "Change_Automation_1" is listed as an interested party
    When user clicks on timeline tab
    Then change should also be reflected in the timeline as "The User   has been added as interested parties."
    When user clicks on linked items tab
    And user selects target application first dropdown as "OS3 - Change"
    And user selects target application second dropdown as "Caused by"
    Then user clicks on link button
    And user switches to frame
    When user clicks on clear button
    And user selects Category as "Access"
    And user clicks on the search button on select target request
    Then user clicks on accept button
    And user switches to window 1
    Then user clicks on timeline tab
    And change should also be reflected in the timeline as ""
    When user clicks on linked items tab
    And user selects target application first dropdown as "OS3 - Operations"
    And user selects target application second dropdown as "Is related to"
    Then user clicks on link button
    And user switches to frame
    When user clicks on clear button
    And user selects Category as "Access"
    And user clicks on the search button on select target request
    Then user clicks on accept button
    And user switches to window 1
    Then user clicks on timeline tab
    And change should also be reflected in the timeline as ""
    When user clicks on linked items tab
    And user selects target application first dropdown as "OS3 - Work Order"
    And user selects target application second dropdown as "Caused by"
    Then user clicks on link button
    And user switches to frame
    When user clicks on clear button
    And user selects Category as "Access"
    And user clicks on the search button on select target request
    Then user clicks on accept button
    And user switches to window 1
    Then user clicks on timeline tab
    And change should also be reflected in the timeline as ""
    When user clicks on linked items tab
    And user selects target application first dropdown as "OS3 - Problem"
    And user selects target application second dropdown as "Fixed by"
    Then user clicks on link button
    And user switches to frame
    When user clicks on clear button
    And user selects Category as "Access"
    And user clicks on the search button on select target request
    Then user clicks on accept button
    And user switches to window 1
    Then user clicks on timeline tab
    And change should also be reflected in the timeline as ""
    When user clicks on linked items tab
    And user selects target application first dropdown as "OS3 - Known Error"
    And user selects target application second dropdown as "Has workaround"
    Then user clicks on link button
    And user switches to frame
    When user clicks on clear button
    And user selects Category as "Access"
    And user clicks on the search button on select target request
    Then user clicks on accept button
    And user switches to window 1
    Then user clicks on timeline tab
    And change should also be reflected in the timeline as ""
    When user selects importance as "Critical"
    And user selects impact as "Critical" on trouble event page
    And user clicks on save button
    And user validates hierarchic escalation level as "Escalation manager (EM)"
    Then change should also be reflected in the timeline as "The Ticket Priority has been updated to :  Emergency"
    And change should also be reflected in the timeline as "The Ticket has been escalated to Escalation manager (EM). Related Child WorkOrder is WO-000000044201"
    And change should also be reflected in the timeline as "Child WorkOrder WO-000000044201 created for OP-000000632483"
    Then user clicks on Ack button
    And user validates ticket status as "Work In Progress"
    And change should also be reflected in the timeline as "STATUS MODIFIED.  The trouble Status has changed: Assigned >> Work In Progress."
    When user clicks on assignment under sections
    And user selects assigned profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core WEST"
    And user enters "Change_Automation_1" in assignee
    Then user clicks on save button
    And change should also be reflected in the timeline as "ASSIGNMENT.  Trouble has been reassigned from user  >> Change_Automation_1"
    And change should also be reflected in the timeline as "STATUS MODIFIED.  The trouble Status has changed: Work In Progress >> Assigned."
    When user changes status to "Cleared"
    And user clicks save button
    Then user changes status to closed
    And user clicks save button

