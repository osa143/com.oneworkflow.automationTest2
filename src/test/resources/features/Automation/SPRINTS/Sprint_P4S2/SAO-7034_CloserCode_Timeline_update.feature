
Feature: Verifying closure codes update in timeline
    @7034
    Scenario: Closure code timeline update

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "SAO-7034 Closer code Timeline update test" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "SAO-7034 Closer code Timeline update test"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      And user gets trouble ticket value
      When user clicks on Ack button
      Then user validates ticket status as "Work In Progress"
      When user changes status to "Cleared" on trouble event page
      And user selects fault position as "N/A:N/A" on trouble event page
      And user enters equipment as "Test Equipment"
      And user selects cause as "N/A:N/A:N/A" on trouble event page
      And user selects action dropdown as "N/A:N/A" on trouble event page
      And user enters closure info as "Test Ticket"
      And user enters event end time as current time
      And user clicks on save button
      Then user validates ticket status as "Cleared"
      And change should also be reflected in the timeline as "Closure Info added.Test Ticket" on row 3
      And change should also be reflected in the timeline as "Fault Position added. N/A | N/A" on row 4
      And change should also be reflected in the timeline as "Equipment added. Test Equipment" on row 5
      And change should also be reflected in the timeline as "Cause added. N/A | N/A | N/A" on row 6
      And change should also be reflected in the timeline as "Action added. N/A | N/A" on row 7
      When user selects fault position as "Other:Other" on trouble event page
      And user enters equipment as "Test Equipment-Update"
      And user selects cause as "Other:Other:Other" on trouble event page
      And user selects action dropdown as "Other:Other" on trouble event page
      And user enters closure info as "Test Ticket-Update"
      And user clicks on save button
      And change should also be reflected in the timeline as "Equipment modified. Test Equipment >>> Test Equipment-Update" on row 1
      And change should also be reflected in the timeline as "Cause modified. N/A | N/A | N/A >>> Other | Other | Other" on row 2
      And change should also be reflected in the timeline as "Closure Info modified.Test Ticket >>> Test Ticket-Update" on row 3
      And change should also be reflected in the timeline as "Fault Position modified. N/A | N/A >>> Other | Other" on row 4
      And change should also be reflected in the timeline as "Action modified. N/A | N/A >>> Other | Other" on row 5
      When user changes status to "Closed"
      And user clicks on save button
      Then user validates ticket status as "Closed"

    @7034_2
    Scenario: Verification of edit closure codes timeline update

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects "Search" menu as "Open Search Form:Trouble Event"
      And user switches to window 1
      And user selects status as "Closed"
      And user enters "HPE Common Temip" in the source field
      When user clicks on advanced search button
     ## In advance search we have to enter the date in correct format to search within age in days of source##
      And user enters "'3'>\"01/11/2020\"" in the advanced search bar
      And user clicks Search on ticket search
      And user waits 15 secs
      When user selects fault position as "Other:Other" on trouble event page
      And user enters equipment as "Editing closed incident closure codes test"
      And user selects cause as "Other:Other:Other" on trouble event page
      And user selects action dropdown as "Other:Other" on trouble event page
      And user enters closure info as "Editing closed incident closure codes test"
      And user clicks on save button
      Then user validates fault position as "Other | Other"
      And user validates equipment as "Editing closed incident closure codes test"
      And user validates cause as "Other | Other | Other"
      And user validates action field as "Other | Other"
      And user validates closure info as "Editing closed incident closure codes test"
      And change should also be reflected in the timeline as ">>> Other | Other | Other" on row 1
      And change should also be reflected in the timeline as ">>> Editing closed incident closure codes test" on row 2
      And change should also be reflected in the timeline as "Equipment added. Editing closed incident closure codes test" on row 3
      And change should also be reflected in the timeline as ">>> Other | Other" on row 4
      And change should also be reflected in the timeline as ">>> Other | Other" on row 5


