@4931
   Feature: SAO-4931
    Scenario: Time zone visibility harmonization
     #By default Timezone set to the users browser/system time
     #(when timezone set to empty in my account)


     Given user is on the OneWorkflow login page
     When user logs in with valid username "frvi96_auto" and password as "Test@1234"
     Then user successfully logged in to OneWorkflow and agent console should be displayed
     And user should see specified Timezone as "Etc/UTC" top right under username
     When user selects "Console" menu as "SID Console"
     And user switches to window 1
     Then user should see specified Timezone as "Etc/UTC" top right under username
     And user closes current tab
     And user switches to window 0
     When user selects "Console" menu as "Alert Console"
     And user switches to window 1
     Then user should see specified Timezone as "Etc/UTC" top right under username
     And user closes current tab
     And user switches to window 0
     When user selects "Create" menu as "Change Record/Project/Freeze"
     And user switches to window 1
     Then user should see specified Timezone as "Etc/UTC" top right under username
     And user closes current tab
     And user switches to window 0
     When user selects "Create" menu as "Problem Record"
     And user switches to window 1
     Then user should see specified Timezone as "Etc/UTC" top right under username
     And user closes current tab
     And user switches to window 0
     When user selects "Create" menu as "Trouble Event"
     And user switches to window 1
     Then user should see specified Timezone as "Etc/UTC" top right under username
     And user closes current tab
     And user switches to window 0
     When user selects "Create" menu as "Work Order"
     And user switches to window 1
     Then user should see specified Timezone as "Etc/UTC" top right under username
     And user closes current tab
     And user switches to window 0
     When user selects "Create" menu as "Known Error"
     And user switches to window 1
     Then user should see specified Timezone as "Etc/UTC" top right under username
     And user closes current tab
     And user switches to window 0
     When user selects "Nav-Username" as "My Account"
     And user enters Time Zone as "GMT+00:00 - Europe/London"
     And user clicks save button on my account window
     And user should see confirmation message and clicks ok button and close the my account window
     When user logsOut
     Then user goes back to login page
     When user logs in with valid username "frvi96_auto" and password as "Test@1234"
     Then user should see specified Timezone as "GMT+00:00 - Europe/London" top right under username
     When user selects "Console" menu as "SID Console"
     And user switches to window 1
     Then user should see specified Timezone as "GMT+00:00 - Europe/London" top right under username
     And user closes current tab
     And user switches to window 0
     When user selects "Console" menu as "Alert Console"
     And user switches to window 1
     Then user should see specified Timezone as "GMT+00:00 - Europe/London" top right under username
     And user closes current tab
     And user switches to window 0
     When user selects "Create" menu as "Change Record/Project/Freeze"
     And user switches to window 1
     Then user should see specified Timezone as "GMT+00:00 - Europe/London" top right under username
     And user closes current tab
     And user switches to window 0
     When user selects "Create" menu as "Problem Record"
     And user switches to window 1
     Then user should see specified Timezone as "GMT+00:00 - Europe/London" top right under username
     And user closes current tab
     And user switches to window 0
     When user selects "Create" menu as "Trouble Event"
     And user switches to window 1
     Then user should see specified Timezone as "GMT+00:00 - Europe/London" top right under username
     And user closes current tab
     And user switches to window 0
     When user selects "Create" menu as "Work Order"
     And user switches to window 1
     Then user should see specified Timezone as "GMT+00:00 - Europe/London" top right under username
     And user closes current tab
     And user switches to window 0
     When user selects "Create" menu as "Known Error"
     And user switches to window 1
     Then user should see specified Timezone as "GMT+00:00 - Europe/London" top right under username
     And user closes current tab
     And user switches to window 0
     When user selects "Nav-Username" as "My Account"
     And user enters Time Zone as ""
     And user clicks save button on my account window
     And user should see confirmation message and clicks ok button and close the my account window

