#@5203
#
#Feature: SAO-5203_Affected organisation
#
# Background:
#  Given user is on the OneWorkflow login page
#  When user logs in with valid username "frvi96_auto" and password as "Test@1234"
#  Then user successfully logged in to OneWorkflow and agent console should be displayed
#  When user clicks on create problem record
#  And user switches to window 1
#  Then problem record form should appear in new tab
#  When user creates problem ticket with following details
#   |Title                         |RequestType |Description   |ImpactType      |Urgency|AccountableOrg|AffectedOrg|
#   |SAO-5196 Accountable_Orgs Test|CPS:IT:Other|UAT Test close|Moderate/Limited|Low    |CA_Infra      |CA_IT      |
#  Then ticket should be created and status should be assigned
#
# @5203_1
# Scenario: Affected Organisation drop down should be mandatory in problem form
# for statuses except withdrawn and editable in all statuses including closed
#
##  Then  user should see affected organisation dropdown as mandatory
##  And  "<drop down values>" should be present in affected organisation
#  Then user clicks on Ack button
#  And problem ticket status should be under investigation
##  Then  user should see affected organisation dropdown as mandatory
##  And  "<drop down values>" should be present in affected organisation
#  Then user changes status to investigation complete
#  And user selects root cause code as Technical:HW error under route cause
#  And user enters route cause details as "Bad Management"
#  And user enters RC found date as current date
#  And user clicks on save button
#  And change should also be reflected in the timeline as "STATUS MODIFIED. Status has changed from Under  Investigation to Investigation Complete. "
#  When user changes status to closed
#  And user clicks on save button
#  And ticket status should be closed
#  Then  user should see affected organisation dropdown as mandatory
#  And  "<drop down values>" should be present in affected organisation
#  And user accountable organisation is not read only
#
# @5203_2
# Scenario: Accountable Organisation drop down should not be mandatory
# in problem form for withdrawn status
#
#  When user changes status to "Withdrawn" on problem record page
#  Then  user should see affected organisation dropdown as not mandatory
#  And  "<drop down values>" should be present in affected organisation
#  And user clicks save button
#  Then user validates ticket status as "Withdrawn"
#  Then  user should see affected organisation dropdown as not mandatory
#  And  "<drop down values>" should be present in affected organisation
#
# @5203_3
# Scenario: Accountable Organisation drop down should be mandatory
# in problem form for pending status
#
#
#  When user changes status to "Pending" on problem record page
#  And user enters date value as 2 minutes in the future
#  And user selects reason dropdown as "Incident ongoing"
#  Then  user should see accountable organisation dropdown as mandatory
#  And  "<drop down values>" should be present in affected organisation
#  And user clicks on save button on the problem form
#  Then user validates ticket status as "Pending"
#  Then  user should see accountable organisation dropdown as mandatory
#  And  "<drop down values>" should be present in affected organisation