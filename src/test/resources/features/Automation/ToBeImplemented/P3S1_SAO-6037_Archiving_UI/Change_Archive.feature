@Archive_Change
    #Need to add attachments into here, not sure how it will be done yet
  #Only 1 withdrawn change record in Dev (not in archive form)

  Feature: Change Archive Form
    Scenario: User validates archive UI

      Given user is on the OneWorkflow login page
      And user logs in with valid admin user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Search Archive Form:Change Record/Project/Freeze"
      And user validates "Change" search archive form is opened
      When user selects change type as "Change Project"
      And user enters "Closed" in the "Status" field
      And user clicks on the search button
      Then user validates "Closed" archived "Change Project" tickets are shown
      And user validates archived criteria is met
      And user clicks on the new search button
      When user selects change type as "Change Record"
      And user enters "Closed" in the "Status" field
      And user clicks on the search button
      Then user validates "Closed" archived "Change Record" tickets are shown
      And user validates archived criteria is met
      And user clicks on the new search button
      When user selects change type as "Change Freeze"
      And user enters "Closed" in the "Status" field
      And user clicks on the search button
      Then user validates "Closed" archived "Change Freeze" tickets are shown
      And user validates archived criteria is met
      And user clicks on the new search button
      And user clicks on sweden checkbox under affected BU's
      And user clicks on the search button
      Then user validates "Sweden" archived tickets are shown
      When user clicks on the new search button
      And user enters "%" in the "Title" field
      And user clicks on the search button
      Then user validates archived Change tickets are shown
      When user clicks on the new search button
      And user selects request category as "Cable splicing" on change record page
      And user clicks on the search button
      Then user validates archived "Cable Splicing" Change tickets are shown
      When user clicks on the new search button
      And user clicks on closure under sections
      And user enters "%" in the "Resolved Group" field
      And user clicks on the search button
      Then user validates closed archived Change tickets are shown
      When user clicks on the new search button
      And user clicks on closure under sections
      And user enters "%" in the "Closure Code" field
      And user clicks on the search button
      Then user validates closed archived Change tickets are shown
      When user clicks on the new search button
      And user clicks on closure under sections
      And user enters "%" in the "Failure Code" field
      And user clicks on the search button
      Then user validates closed archived Change tickets are shown
      When user clicks on the new search button
      And user clicks on assignment under sections
      Then user selects valid assigned profile
      And user clicks on the search button
      And user validates tickets shown relate to selected assigned profile
      When user clicks on the new search button
      And user clicks on owner under sections
      Then user selects valid owner profile
      And user clicks on the search button
      And user validates tickets shown relate to selected owner profile
      When user clicks on the new search button
      And user enters ticket id as "%"
      And user clicks on the search button
      Then user validates archived Problem tickets are shown
      And user clicks on "Timeline" tab
      Then user validates archived timeline data is present
      And user clicks on "Diagnosis" tab
      Then user validates archived CI data is present
      And user clicks on "Risk" tab
      Then user validates archived risk question data is present
      And user clicks on "Schedule" tab
      Then user validates archived email data is present
      And user clicks on "Interested Parties" tab
      Then user validates archived linked items data is present
      And user clicks on "Approval" tab
      Then user validates archived approval data is present
      And user clicks on "Notifications" tab
      Then user validates archived email data is present
      And user clicks on "Linked Items" tab
      Then user validates archived linked items data is present
      And user clicks on "Work Orders" tab
      Then user validates archived Work Order data is present
      And user clicks on "Record" tab
      Then user validates archived Work Order data is present
      And user clicks on "Related Project" tab
      Then user validates archived Work Order data is present
      When user clicks on CTI details under sections
      And user clicks on location under sections
      And user clicks on owner under sections
      And user clicks on assignment under sections
      And user clicks on details under sections
      And user clicks on On Hold under sections
      And user clicks on vendor under sections
      And user clicks on attachments under sections
      And user clicks on closure under sections
      Then user validates data is present and matches archive criteria (if applicable)




