$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/SPRINTS/Sprint_P3S1/SAO-5325_Hide_Fields.feature");
formatter.feature({
  "name": "SAO-5325 Hide fields",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "verify fields are invisible",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@5325"
    }
  ]
});
formatter.step({
  "name": "user is on the OneWorkflow login page",
  "keyword": "Given "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userIsOnTheOneWorkflowLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid username \"frvi96_auto\" and password as \"Test@1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userLogsInWithValidUsernameAndPasswordAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully logged in to OneWorkflow and agent console should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSuccessfullyLoggedInToOneworkflowAndAgentConsoleShouldBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on create known error",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnCreateKnownError()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "known error form should appear in new tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.knownErrorFormShouldAppearInNewTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Workaround Available,Customer Effect,Cust. Effect Description,Work Around Initiation date,Work Around Accountable : TeliaID,Work Around Accountable : Name,Solution Proposal Category,Solution Proposal Reference ID #,Solution Proposal Status\" shouldn\u0027t be visible",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.shouldnTBeVisible(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-5325 Hide fields\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"CPS:IT:Other\" on known error page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.userSelectsRequestTypeAsOnKnownErrorPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"A known error\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects priority as \"Minor\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsPriorityAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates ticket status as \"Draft\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Workaround Available,Customer Effect,Cust. Effect Description,Work Around Initiation date,Work Around Accountable : TeliaID,Work Around Accountable : Name,Solution Proposal Category,Solution Proposal Reference ID #,Solution Proposal Status\" shouldn\u0027t be visible",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.shouldnTBeVisible(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Next Assessment Date\" dropdown as optional",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userShouldSeeDropdownAsOptional(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Known Error Code\" dropdown as optional",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userShouldSeeDropdownAsOptional(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Accountable Org.\" dropdown as optional",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userShouldSeeDropdownAsOptional(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Affected Orgs.\" dropdown as optional",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userShouldSeeDropdownAsOptional(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user changes status to \"Published\" on known error page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userChangesStatusToOnKnownErrorPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Known Error Code*\" dropdown as mandatory",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userShouldSeeDropdownAsMandatory(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Accountable Org.*\" dropdown as mandatory",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userShouldSeeDropdownAsMandatory(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Affected Orgs.*\" dropdown as mandatory",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userShouldSeeDropdownAsMandatory(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "dropdown values \"Risk accepted:Awaiting solution implementation:Active investigation:Pending information/confirmation:(clear)\" should be available in \"Known Error Code\" dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.dropdownValuesShouldBeAvailableInDropdown(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects \"Known Error Code\" as \"Risk accepted\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects affected organisation as \"CA_Infra\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsAffectedOrganisationAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects accountable organisation as \"CA_IT\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsAccountableOrganisationAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "known error ticket status should be \"Published\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.knownErrorTicketStatusShouldBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Workaround Available,Customer Effect,Cust. Effect Description,Work Around Initiation date,Work Around Accountable : TeliaID,Work Around Accountable : Name,Solution Proposal Category,Solution Proposal Reference ID #,Solution Proposal Status\" shouldn\u0027t be visible",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.shouldnTBeVisible(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Status has changed from Draft to Published. Known Error Code has changed from  to Risk accepted. Accountable Org. has changed from  to CA_IT. Affected Orgs. has changed from  to CA_Infra;.\" on row 1",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAsOnRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user changes status to \"Closed\" on known error page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userChangesStatusToOnKnownErrorPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see known error code as read only",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.userShouldSeeKnownErrorCodeAsReadOnly()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see accountable organisation as read only",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userShouldSeeAccountableOrganisationAsReadOnly()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects closure code as \"Full Impact\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsClosureCodeAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Status has changed from Published to Closed.\" on row 1",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAsOnRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Workaround Available,Customer Effect,Cust. Effect Description,Work Around Initiation date,Work Around Accountable : TeliaID,Work Around Accountable : Name,Solution Proposal Category,Solution Proposal Reference ID #,Solution Proposal Status\" shouldn\u0027t be visible",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.shouldnTBeVisible(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});