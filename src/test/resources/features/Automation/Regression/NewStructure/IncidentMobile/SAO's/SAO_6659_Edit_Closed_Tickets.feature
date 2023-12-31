@6659 @Incident_SAO
   Feature: SAO-6659

    Scenario:Validate user can edit the closure codes fields for closed Temip incidents
    with profile- Modify Closed  Tickets to Operations


     Given user is on the OneWorkflow login page
     When user logs in with valid username "Change_Automation_7" and password as "Test@1234"
     Then user successfully logged in to OneWorkflow and agent console should be displayed
     When user selects "Search" menu as "Open Search Form:Trouble Event"
#      And user clicks agent console search menu
#      And user selects agent console open search form
#      And user selects agent console search trouble event
     And user switches to window 1
#     And user selects status as "Closed"
#      And user changes status to "Closed"
#      And user changes status to "Closed" on trouble event page
      And user enters "Closed" in status
     And user enters "HPE Common Temip" in the source field
     And user clicks Search on ticket search
     And user waits 45 secs
     Then user validates ticket status as "Closed"
     And user validates source field as "HPE Common Temip"
     And user should see fault position, equipment, cause, action, closure info fields read only
     When user clicks on main page refresh
     And user selects status as "Closed"
     And user enters "HPE Common Temip" in the source field
     When user clicks on advanced search button
     ## In advance search we have to enter the date in correct format to search within age in days of source##
     And user enters "'Event Start Time' > \"2021-10-18\" AND 'Event End Time' != $NULL$" in the advanced search bar
     And user clicks Search on ticket search
     And user waits 15 secs
     When user selects fault position as "Other:Other" on trouble event page
     And user enters equipment as "Editing closed incident closure codes test"
     And user selects cause as "Other:Other:Other" on trouble event page
     And user selects action dropdown as "Other:Other" on trouble event page
     And user enters closure info as "Editing closed incident closure codes test"
     And user clicks on save button
     When user clicks on ticket refresh button
     Then user validates fault position as "Other | Other"
     And user validates equipment as "Editing closed incident closure codes test"
     And user validates cause as "Other | Other | Other"
     And user validates action field as "Other | Other"
     And user validates closure info as "Editing closed incident closure codes test"
     When user clicks on main page refresh
     And user selects status as "Closed"
     And user enters "TrueSight" in the source field
     And user clicks Search on ticket search
     And user waits 15 secs
     Then user validates ticket status as "Closed"
     And user validates source field as "TrueSight"
     And user should see fault position, equipment, cause, action, closure info fields read only


