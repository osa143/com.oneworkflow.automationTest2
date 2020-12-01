@Copy_to_New_02_(CI)

Feature: Copy to New 02 (CIs) [aR]

  Scenario: Copy to New 02 (CIs) [aR]

    Given user is on the OneWorkflow login page
    When user logs in with valid username "'ChangeInitiatorInternal1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user switches to window 1
    And user searches for ticket id ""
    Then ticket should be displayed
    When user clicks copy to new button
    Then user validates "Confirmation - Internet Explorer" is displayed
    When user clicks on create change record
    Then user switches to window 2
    And user opens "copy CR"
    And user expands all sections of "copy CR"
    #validate same fields are editable on both CR
  #validate same fields are read only on both CR
    And user validates change type as "Change Record"
    And user validates ticket status as "New"
    And user validates service provider as "Telia Company"
    And user validates source field as "One Workflow"
    Then user validates all affected BU are selected
    When user enters request start time 24 hours ahead of current date
    And user enters request end time 192 hours ahead of current date
    And user enters impact duration as "1" days
    And user enters impact duration as "1" hours
    And user enters impact duration as "1" minutes
    And user enters impact duration as "1" seconds
    And user enters as "Test" in service and customer impact
    Then user clicks save button
    When user clicks on Diagnosis tab
    When user clicks on Diagnosis tab
    And user validates primary ci as ""
    Then user validates CI "" is listed
    When user validates impact type as "Planned"
    And user validates impact category as "Actual"
    And user validates CI "" impact level is ""
    And user validates impact status as "Pending"
    And user validates impact from time is same as request start time
    And user validates impact to time is same as request end time
    And user validates D as ""
    And user validates H as ""
    And user validates M as ""
    Then user validates S as ""
    When user adds CI "dummy" to the ticket with impact level "Degradation of Service"
    Then CI should be listed and displayed under the Diagnosis tab
    When user clicks on timeline tab
    Then user validates timeline entry "" is present in row ""
    When user clicks on risk tab
    Then user validates risk questions are not answered
    When user clicks on "Interested Parties" tab
    Then user validates "" is listed as an interested party
    When user clicks on approval tab
    Then user validates version column as ""
    When user clicks on "Notifications" tab
    And user clicks on "Sent" tab
    Then user validates sent to as ""
    When user clicks on linked items tab
    And user clicks on radio button open
    Then user validates "Linked ID" column as ""
    When user clicks on radio button cleared
    Then user validates "Linked ID" column as ""
    When user clicks on radio button closed
    Then user validates "Linked ID" column as ""
    When user clicks on work order tab
    Then user validates "ID" column as ""
    When user clicks on "Service Level" tab
    And user validates "SLA Title" column as ""
    Then user validates "Title" column as ""
    When user clicks on "Related Project" tab
    Then user validates "Change Project ID" column as ""
    When user clicks on "Service Info" tab
    Then user validates "Channel" column as ""
    When user clicks on "Telenor" tab
    Then user validates "ExternalTicketId" column as ""
    #Verify buttons in the dialog window
  