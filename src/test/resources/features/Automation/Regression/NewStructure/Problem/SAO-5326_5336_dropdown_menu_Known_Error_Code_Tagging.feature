@5326_53362 @ProblemRegression

    Feature: SAO-5326 dropdown menu Known Error Code and SAO-5336 dropdown menu Tagging(Accountable and affected Org)
    Scenario: SAO-5326 - verify dropdown menu Known Error Code and accountable and affected dropdown menus

     Given user is on the OneWorkflow login page
     When user logs in with valid username "syvaptu1_auto" and password as "Test@1234"
     Then user successfully logged in to OneWorkflow and agent console should be displayed
     When user clicks on create known error
#      When user clicks on agent console create known error
     And user switches to window 1
     Then known error form should appear in new tab
     And user enters "SAO-5326, SAO-5336" in Title field
     And user selects request type as "CPS:IT:Other" on known error page
     And user enters description as "A known error"
     And user selects priority as "Minor"
     When user clicks on save button
     Then user validates ticket status as "Draft"
     And user should see "Known Error Code" dropdown as optional
     And user should see "Accountable Org." dropdown as optional
     And user should see "Affected Orgs." dropdown as optional
     And dropdown values "Active investigation:Awaiting solution implementation:Pending solution verification:Risk accepted:Pending more data:(clear)" should be available in "Known Error Code" dropdown
     When user changes status to "Published" on known error page
     And user should see "Known Error Code*" dropdown as mandatory
     And user should see "Accountable Org.*" dropdown as mandatory
     And user should see "Affected Orgs.*" dropdown as mandatory
     And dropdown values "Active investigation:Awaiting solution implementation:Pending solution verification:Risk accepted:Pending more data:(clear)" should be available in "Known Error Code" dropdown
     And user selects "Known Error Code" as "Risk accepted"
     And user selects affected organisation as "DivX"
     And user selects accountable organisation as "DivX"
     And user clicks on save button
     Then known error ticket status should be "Published"
     Then change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Draft to Published. Known Error Code has changed from  to Risk accepted. Accountable Org. has changed from  to CA_IT. Affected Orgs. has changed from  to CA_Infra;." on row 1
     When user changes status to "Closed" on known error page
     And user should see known error code as read only
     And user should see accountable organisation as read only
     And user selects closure code as "Solved"
     And user clicks on save button
     Then change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Published to Closed." on row 1



    @5326_5336_withdrawn
    Scenario: verify dropdown menu Known Error Code and accountable and affected dropdown menus

     Given user is on the OneWorkflow login page
     When user logs in with valid username "syvaptu1_auto" and password as "Test@1234"
     Then user successfully logged in to OneWorkflow and agent console should be displayed
#     When user clicks on create known error
      When user clicks on agent console create known error
     And user switches to window 1
     Then known error form should appear in new tab
     And user enters "SAO-5326, SAO-5336" in Title field
     And user selects request type as "CPS:IT:Other" on known error page
     And user enters description as "A known error"
     And user selects priority as "Minor"
     When user clicks on save button
     Then user validates ticket status as "Draft"
     And user should see "Known Error Code" dropdown as optional
     And user should see "Accountable Org." dropdown as optional
     And user should see "Affected Orgs." dropdown as optional
     And dropdown values "Active investigation:Awaiting solution implementation:Pending solution verification:Risk accepted:Pending more data:(clear)" should be available in "Known Error Code" dropdown
     When user changes status to "Withdrawn" on known error page
     And user should see "Known Error Code" dropdown as optional
     And user should see known error code as read only
     And user should see accountable organisation as read only
     When user selects withdrawn reason as false alarm and clicks save
     And user should see confirmation message and clicks on yes button
     And user waits 3 secs
     Then change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Draft to Withdrawn." on row 1