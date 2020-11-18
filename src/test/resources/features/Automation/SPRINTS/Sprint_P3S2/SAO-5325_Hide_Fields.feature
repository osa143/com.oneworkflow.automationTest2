@prob
   Feature: SAO-5325 Hide fields
    @5325
    Scenario: verify fields are invisible

     Given user is on the OneWorkflow login page
     When user logs in with valid username "frvi96_auto" and password as "Test@1234"
     Then user successfully logged in to OneWorkflow and agent console should be displayed
     When user clicks on create known error
     And user switches to window 1
     Then known error form should appear in new tab
     Then "Workaround Available,Customer Effect,Cust. Effect Description,Work Around Initiation date,Work Around Accountable : TeliaID,Work Around Accountable : Name,Solution Proposal Category,Solution Proposal Reference ID #,Solution Proposal Status" shouldn't be visible
     And user enters "SAO-5325 Hide fields" in Title field
     And user selects request type as "CPS:IT:Other" on known error page
     And user enters description as "A known error"
     And user selects priority as "Minor"
     When user clicks on save button
     Then user validates ticket status as "Draft"
     Then "Workaround Available,Customer Effect,Cust. Effect Description,Work Around Initiation date,Work Around Accountable : TeliaID,Work Around Accountable : Name,Solution Proposal Category,Solution Proposal Reference ID #,Solution Proposal Status" shouldn't be visible
     And user should see "Next Assessment Date" dropdown as optional
     And user should see "Known Error Code" dropdown as optional
     And user should see "Accountable Org." dropdown as optional
     And user should see "Affected Orgs." dropdown as optional
     And user clicks on save button
     When user changes status to "Published" on known error page
     And user should see "Known Error Code*" dropdown as mandatory
     And user should see "Accountable Org.*" dropdown as mandatory
     And user should see "Affected Orgs.*" dropdown as mandatory
     And dropdown values "Active investigation:Awaiting solution implementation:Pending solution verification:Risk accepted:Pending more data:(clear)" should be available in "Known Error Code" dropdown
     And user selects "Known Error Code" as "Risk accepted"
     And user selects affected organisation as "CA_Infra"
     And user selects accountable organisation as "CA_IT"
     And user clicks on save button
     Then known error ticket status should be "Published"
     Then "Workaround Available,Customer Effect,Cust. Effect Description,Work Around Initiation date,Work Around Accountable : TeliaID,Work Around Accountable : Name,Solution Proposal Category,Solution Proposal Reference ID #,Solution Proposal Status" shouldn't be visible
     Then change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Draft to Published. Known Error Code has changed from  to Risk accepted. Accountable Org. has changed from  to CA_IT. Affected Orgs. has changed from  to CA_Infra;." on row 1
     When user changes status to "Closed" on known error page
     And user should see known error code as read only
     And user should see accountable organisation as read only
     And user selects closure code as "Solved"
     And user clicks on save button
     Then change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Published to Closed." on row 1
     Then "Workaround Available,Customer Effect,Cust. Effect Description,Work Around Initiation date,Work Around Accountable : TeliaID,Work Around Accountable : Name,Solution Proposal Category,Solution Proposal Reference ID #,Solution Proposal Status" shouldn't be visible


