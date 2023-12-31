@5324 @ProblemRegression
   Feature: SAO-5324 Next Assessment date
    Scenario: SAO-5324 - verify when next assessment date less than 5 days in the future should send email notification

     Given user is on the OneWorkflow login page
     When user logs in with valid username "syvaptu1_auto" and password as "Test@1234"
     Then user successfully logged in to OneWorkflow and agent console should be displayed
     When user clicks on create known error
#      When user clicks on agent console create known error
     And user switches to window 1
     Then known error form should appear in new tab
     And user should see "Next Assessment Date" dropdown as optional
     And user enters "SAO-5324" in Title field
     And user selects request type as "CPS:IT:Other" on known error page
     And user enters description as "A known error"
     And user selects priority as "Minor"
     When user clicks on save button
     Then user validates ticket status as "Draft"
     And user should see "Next Assessment Date" dropdown as optional
     And user should see "Known Error Code" dropdown as optional
     And user should see "Accountable Org." dropdown as optional
     And user should see "Affected Orgs." dropdown as optional
     When user enters next assessment date as 3 days in the future
     And user clicks on save button
     #within 60 minutes
     Then user should see "" email update
     Then change should also be reflected in the timeline as "" on row 1
     When user changes status to "Published" on known error page
     And user should see "Known Error Code*" dropdown as mandatory
     And user should see "Accountable Org.*" dropdown as mandatory
     And user should see "Affected Orgs.*" dropdown as mandatory
     And dropdown values "Risk accepted:Awaiting solution implementation:Active investigation:Pending information/confirmation:(clear)" should be available in "Known Error Code" dropdown
     And user selects "Known Error Code" as "Risk accepted"
     And user selects affected organisation as "CA_Infra"
     And user selects accountable organisation as "CA_IT"
     And user clicks on save button
     Then known error ticket status should be "Published"
     Then change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Draft to Published. Known Error Code has changed from  to Risk accepted. Accountable Org. has changed from  to CA_IT. Affected Orgs. has changed from  to CA_Infra;." on row 1
     When user changes status to "Closed" on known error page
     And user should see known error code as read only
     And user should see accountable organisation as read only
     And user selects closure code as "Full Impact"
     And user clicks on save button
     Then change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Published to Closed." on row 1



#    @5324_2
#    Scenario: verify when Next assessment date more than 5 days in the future should not send email notification
#
#
#     Given user is on the OneWorkflow login page
#     When user logs in with valid username "frvi96_auto" and password as "Test@1234"
#     Then user successfully logged in to OneWorkflow and agent console should be displayed
#     When user clicks on create known error
#     And user switches to window 1
#     Then known error form should appear in new tab
#     And user should see "Next Assessment Date" dropdown as optional
#     And user enters "SAO-5324" in Title field
#     And user selects request type as "CPS:IT:Other" on known error page
#     And user enters description as "A known error"
#     And user selects priority as "Minor"
#     When user clicks on save button
#     Then user validates ticket status as "Draft"
#     And user should see "Next Assessment Date" dropdown as optional
#     And user should see "Known Error Code" dropdown as optional
#     And user should see "Accountable Org." dropdown as optional
#     And user should see "Affected Orgs." dropdown as optional
#     When user enters next assessment date as 7 days in the future
#     And user clicks on save button
#     Then no email notification should send within 60 minutes under notification tab
#     Then change should also be reflected in the timeline as "STATUS MODIFIED.  Status has changed from Draft to Withdrawn." on row 1