$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/Regression/NewStructure/PlazaOP_PDB/PLAZA_Reject_IncidentByOW.feature");
formatter.feature({
  "name": "Plaza creation of incident ticket - OW Rejects Incident",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@PLAZA_Reject_Incident"
    },
    {
      "name": "@PLAZA_Incident_Flow"
    }
  ]
});
formatter.scenario({
  "name": "user validates plaza incident ticket - OW Rejects Incident",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PLAZA_Reject_Incident"
    },
    {
      "name": "@PLAZA_Incident_Flow"
    }
  ]
});
formatter.step({
  "name": "user is on the Plaza login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Plaza_LoginPageSteps.userIsOnThePlazaLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username \"testauto\" and password as \"test123\" and clicks on login",
  "keyword": "When "
});
formatter.match({
  "location": "Plaza_LoginPageSteps.userEntersUsernameAndPasswordAsAndClicksOnLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the plaza home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userShouldSeeThePlazaHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on plaza portal",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnPlazaPortal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on support link",
  "keyword": "When "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnSupportLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"SUBMIT A TICKET\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnButton(String)"
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
  "name": "user selects \"Applications\" under Service area dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userSelectsUnderServiceAreaDropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects \"AlarmMap\" under plaza category dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userSelectsUnderPlazaCategoryDropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects \"Application Error\" under plaza type of issue",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userSelectsUnderPlazaTypeOfIssue(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Test OW OP Ticket\" in the plaza subject field",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userEntersInThePlazaSubjectField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Test OW OP Ticket\" in the plaza describe field",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userEntersInThePlazaDescribeField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on submit button on plaza form",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnSubmitButtonOnPlazaForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets plaza request id",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userGetsPlazaRequestId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on plaza request id",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnPlazaRequestId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets plaza OP ticket",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userGetsPlazaOPTicket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on main page refresh",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnMainPageRefresh()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user waits 30 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Test Update\" in the ticket timeline",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userEntersInTheTicketTimeline(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on plaza send button",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnPlazaSendButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens new tab",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userOpensNewTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user switches to window 2",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "passed"
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
  "name": "user logs in with valid user and password",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userLogsInWithValidUserAndPassword()"
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
  "name": "user selects search menu as \"Open Search Form:Trouble Event\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsSearchMenuAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user switches to window 3",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see blank trouble search form",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userShouldSeeBlankTroubleSearchForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters plaza incident ticket",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersPlazaIncidentTicket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see plaza incident ticket",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userShouldSeePlazaIncidentTicket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates title field as \"Test OW OP Ticket\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesPdbTitleFieldAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates request type as \"Customer\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesRequestTypeAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates ticket status as \"Assigned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates source field as \"PLAZA\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesSourceFieldAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates reassigned reason as \"Assigned for Plaza Escalation to 2nd Level\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesReassignedReasonAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"Test Update\" on row 1",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAsOnRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on assignment under sections",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAssignmentUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on owner under sections",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnOwnerUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on CTI details under sections",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCTIDetailsUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category as \"OSS\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesCategoryAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates type as \"Presentation\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesTypeAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates item as \"AlarmMap\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesItemAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates technology as \"Incident\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTechnologyAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates owner profile as \"PLAZA\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesOwnerProfileAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates owner as \"PLAZA\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesOwnerAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see assigned profile as \"OSS Tech Mahindra\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeAssignedProfileAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Reject\"",
  "keyword": "When "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters rejection reason as \"Testing\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersRejectionReasonAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnTicketRefreshButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies status is read only",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userVerifiesStatusIsReadOnly()"
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
  "name": "user clicks on main page refresh",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnMainPageRefresh()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user waits 5 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates plaza first timeline message as \"The incident has been rejected assignment from OneWorkflow due to the reason: Testing\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userValidatesPlazaTimelineMessageAs(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [The incident has been rejected assignment from OneWorkflow due to the reason: TestingICM0240386] but found [The incident has been rejected assignment from OneWorkflow due to the reason: Testing]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat steps.plaza_steps.Plaza_HomePageSteps.userValidatesPlazaTimelineMessageAs(Plaza_HomePageSteps.java:1973)\r\n\tat ✽.user validates plaza first timeline message as \"The incident has been rejected assignment from OneWorkflow due to the reason: Testing\"(features/Automation/Regression/NewStructure/PlazaOP_PDB/PLAZA_Reject_IncidentByOW.feature:63)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});