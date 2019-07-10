@02.14_Find_Newly_Created_Or_Implemented_Changes @Incident

  Feature: Searching for change tickets
    Scenario: user can search for newly created or implemented changes

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects "change record" under all tickets
      When user clicks on more filters button
      And user switches to frame
      Then user clicks on core tab
      And user validates "Details" is visible
      And user validates "Title" is visible
      And user validates "Request Type" is visible
      And user validates "Ticket Priority" is visible
      And user validates "Status" is visible
      And user validates "CTI Details" is visible
      And user validates "Category" is visible
      And user validates "Type" is visible
      And user validates "Item" is visible
      And user validates "Technology" is visible
      And user validates "Manufacturer" is visible
      When user clicks on status dropdown
      Then user validates "New" is listed
      And user validates "Draft" is listed
      And user validates "Assigned" is listed
      And user validates "Analysis" is listed
      And user validates "Approval Requested" is listed
      And user validates "Approved" is listed
      And user validates "Schedule Requested" is listed
      And user validates "Scheduled" is listed
      And user validates "Implementation" is listed
      And user validates "Work In Progress" is listed
      And user validates "Under Investigation" is listed
      And user validates "Pending" is listed
      And user validates "Completed" is listed
      And user validates "Cleared" is listed
      And user validates "Investigation Complete" is listed
      And user validates "Published" is listed
      And user validates "(clear)" is listed
      When user selects status as "New"
      And user clicks on filter apply button
      And user switches to window 0
      Then user should only see change tickets with status of "New"
      When user clicks on more filters button
      And user switches to frame
      Then user clicks on core tab
      When user selects status as "Assigned"
      And user clicks on filter apply button
      And user switches to window 0
      Then user should only see change tickets with status of "Assigned"
      When user clicks on more filters button
      And user switches to frame
      Then user clicks on core tab
      When user selects status as "Implementation"
      And user clicks on filter apply button
      Then user should only see change tickets with status of "Implementation"
      When user clicks on more filters button
      And user switches to frame
      Then user clicks on core tab
      When user selects status as "Completed"
      And user clicks on filter apply button
      Then user should only see change tickets with status of "Completed"



