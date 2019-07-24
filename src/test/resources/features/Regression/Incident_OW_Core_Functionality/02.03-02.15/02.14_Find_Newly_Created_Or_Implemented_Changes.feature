@02.14_Find_Newly_Created_Or_Implemented_Changes @Incident

  Feature: Searching for change tickets
    Scenario: user can search for newly created or implemented changes

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on more filters button
      And user switches to frame
      And user clicks on "Core" tab
      When multiple statuses "New:Draft:Assigned:Analysis:Approval Requested:Approved:Schedule Requested:Scheduled:Implementation:Work In Progress:Under Investigation:Pending:Completed:Cleared:Investigation Complete:Published:(clear)" should be available in "Status" dropdown
      And user clicks on close button
      When user selects "Change Record" under all tickets
      When user clicks on more filters button
      And user switches to frame
      And user clicks on "Core" tab
      And user validates Details is present on user more filters window
      And user validates "Title" is present
      And user validates "Request Type" is present
      And user validates "Ticket Priority" is present
      And user validates "Status" is present
      And user validates CTI Details is present on user more filters window
      And user validates "Category" is present
      And user validates "Type" is present
      And user validates "Item" is present
      And user validates "Technology" is present
      And user validates "Manufacturer" is present
      When multiple statuses "New:Assigned:Analysis:Approval Requested:Approved:Schedule Requested:Scheduled:Implementation:Pending:Completed:(clear)" should be available in "Status" dropdown
#      Then user validates "New" is listed
#      And user validates "Draft" is listed
#      And user validates "Assigned" is listed
#      And user validates "Analysis" is listed
#      And user validates "Approval Requested" is listed
#      And user validates "Approved" is listed
#      And user validates "Schedule Requested" is listed
#      And user validates "Scheduled" is listed
#      And user validates "Implementation" is listed
#      And user validates "Work In Progress" is listed
#      And user validates "Under Investigation" is listed
#      And user validates "Pending" is listed
#      And user validates "Completed" is listed
#      And user validates "Cleared" is listed
#      And user validates "Investigation Complete" is listed
#      And user validates "Published" is listed
#      And user validates "(clear)" is listed
      When user selects status as "New" on user more filters window
      And user clicks on apply button on user more filters window
      Then user should only see change tickets with status of "New"
      When user clicks on more filters button
      And user switches to frame
      And user clicks on "Core" tab
      When user selects status as "Assigned" on user more filters window
      And user clicks on apply button on user more filters window
      And user switches to window 0
      Then user should only see change tickets with status of "Assigned"
      When user clicks on more filters button
      And user switches to frame
      And user clicks on "Core" tab
      When user selects status as "Implementation" on user more filters window
      And user clicks on apply button on user more filters window
      Then user should only see change tickets with status of "Implementation"
      When user clicks on more filters button
      And user switches to frame
      And user clicks on "Core" tab
      When user selects status as "Completed" on user more filters window
      And user clicks on apply button on user more filters window
      Then user should only see change tickets with status of "Completed"



