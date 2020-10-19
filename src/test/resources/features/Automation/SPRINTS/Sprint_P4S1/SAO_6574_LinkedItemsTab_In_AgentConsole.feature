@SAO-5204
#To be changed
  Feature: user testing linked ticket radio buttons
    Scenario: user testing linked ticket radio buttons

      Given user is on the OneWorkflow login page
      When user logs in with valid username "frvi96_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test SAO-5204 - Linked Tickets Radio Button" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test SAO-5204 - Linked Tickets Radio Button"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      And user clicks on linked items tab
      Then user selects target application first dropdown as "OS3 - Work Order"
      And user selects target application second dropdown as "Caused by"
      And user clicks on create button under linked items
      And user switches to window 2
      Then work order form should appear in new tab
      And user selects request type as "Analysis" in work order page
      And user clicks save button
      Then user validates ticket status as "New"
      And user selects assigned profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core WEST"
      And user enters "Change_Automation_3" in assignee
      Then user clicks save button
      And user validates ticket status as "Assigned"
      Then user clicks on Ack button
      And user validates ticket status as "Work In Progress"
      Then user changes status to "Cleared" on work order page
      And user selects completion code as "Success"
      And user clicks on "Schedule" tab
      And user enters schedule end as current date
      Then user clicks save button
      And user validates ticket status as "Cleared"
      Then user switches to window 0
      Then user selects target application first dropdown as "(clear)"
      And user clicks refresh button under linked items
      And user validates 1 linked ticket availability
      Then user selects target application first dropdown as "OS3 - Problem"
      And user selects target application second dropdown as "Fixed by"
      Then user clicks on create button under linked items
      Then problem record form should appear in new tab
      And user switches to window 3
      And user selects request type as "CPS:IT:Other" in problem form
      Then user selects impact as "Extensive/Widespread"
      And user selects urgency as "High"
      And user selects accountable organisation as "CA_Infra"
      And user selects affected organisation as "CA_IT"
      And user clicks on save button
      Then problem ticket status should be assigned
      And user switches to window 1
      Then user selects target application first dropdown as "(clear)"
      Then user clicks refresh button under linked items
      And user validates 2 linked ticket availability
      When user selects target application first dropdown as "OS3 - Operations"
      And user selects target application second dropdown as "Is child of"
      Then user clicks on create button under linked items
      And user switches to window 4
      Then trouble record form should appear in new tab
      And user selects request type as "Customer" on trouble event page
      Then user clicks on save button
      Then trouble ticket should be created and status should be assigned
      And user clicks on Ack button
      Then user validates ticket status as "Work In Progress"
      And user switches to window 1
      Then user selects target application first dropdown as "(clear)"
      Then user clicks refresh button under linked items
      And user validates 3 linked ticket availability
      When user selects target application first dropdown as "OS3 - Change"
      And user selects target application second dropdown as "Caused"
      Then user clicks on create button under linked items
      And user switches to window 5
      Then change record form should open in a new tab
      And user selects change type as "Change Record"
      Then user selects request type as "Standard Change"
      And user selects template as "All:IT:Carrier:Telia Carrier UAT Changes"
      And user enters "Test" in the change builder field
      Then user enters request start time 24 hours ahead of current date
      And user enters request end time 48 hours ahead of current date
      Then user enters impact duration as "50" minutes
      And user clicks on save button
      Then user validates ticket status as "New"
      And user switches to window 1
      Then user selects target application first dropdown as "(clear)"
      Then user clicks refresh button under linked items
      And user validates 4 linked ticket availability
      Then user selects target application first dropdown as "OS3 - Work Order"
      And user selects target application second dropdown as "Caused by"
      Then user clicks on create button under linked items
      And user switches to window 6
      Then work order form should appear in new tab
      Then user selects request type as "Analysis" in work order page
      And user clicks on save button
      Then user validates ticket status as "New"
      And user selects assigned profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core WEST"
      Then user enters "Change_Automation_3" in assignee
      And user clicks on save button
      Then user validates ticket status as "Assigned"
      And user clicks on Ack button
      Then user validates ticket status as "Work In Progress"
      And user changes status to "Cleared" on work order page
      And user selects completion code as "Success"
      Then user clicks on "Schedule" tab
      And user enters schedule end as current date
      Then user clicks save button
      And user validates ticket status as "Cleared"
      And user changes status to "Closed" on work order page
      And user clicks on save button
      Then user validates ticket status as "Closed"
      And user switches to window 1
      Then user selects target application first dropdown as "(clear)"
      Then user clicks refresh button under linked items
      And user validates 5 linked ticket availability
      When user selects target application first dropdown as "OS3 - Work Order"
      And user selects target application second dropdown as "Caused by"
      Then user clicks on create button under linked items
      And user switches to window 7
      Then work order form should appear in new tab
      Then user selects request type as "Analysis" in work order page
      And user clicks on save button
      Then user validates ticket status as "New"
      When user changes status to "Withdrawn" on work order page
      And user selects withdrawn reason as false alarm and clicks save
      And user should see confirmation message and clicks on yes button
      Then user validates ticket status as "Withdrawn"
      And user switches to window 1
      Then user selects target application first dropdown as "(clear)"
      Then user clicks refresh button under linked items
      And user validates 6 linked ticket availability
      When user selects target application first dropdown as "OS3 - Work Order"
      And user selects target application second dropdown as "Caused by"
      Then user clicks on create button under linked items
      And user switches to window 8
      Then work order form should appear in new tab
      Then user selects request type as "Analysis" in work order page
      And user clicks on save button
      Then user validates ticket status as "New"
      When user changes status to "Pending" on work order page
      Then user enters on hold to date 40 minutes in the future
      And user selects on hold reason as "Other"
      Then user clicks on save button
      And user validates ticket status as "Pending"
      Then user switches to window 1
      Then user selects target application first dropdown as "(clear)"
      And user clicks refresh button under linked items
      And user validates 7 linked ticket availability
      Then user selects target application first dropdown as "(clear)"
      And user validates radio button open is selected
      And user validates radio button cleared is selected
      And user validates radio button closed is selected
      Then user validates ticket statuses "New:Assigned:Work In Progress:Cleared:Closed:Pending:Withdrawn" can be seen under linked items tab
      When user clicks on radio button cleared
      And user clicks on radio button closed
      And user validates radio button open is selected
      Then user validates ticket statuses "New:Assigned:Work In Progress:Pending" can be seen under linked items tab
      When user clicks on radio button cleared
      And user clicks on radio button open
      And user validates radio button cleared is selected
      Then user validates ticket statuses "Cleared" can be seen under linked items tab
      When user clicks on radio button closed
      And user clicks on radio button cleared
      And user validates radio button closed is selected
      Then user validates ticket statuses "Closed:Withdrawn" can be seen under linked items tab





      
      