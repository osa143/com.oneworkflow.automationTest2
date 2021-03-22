$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/PLAZA/CRM/CRM_ResourceRequest.feature");
formatter.feature({
  "name": "Plaza CRM form test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CRM_ResourceRequest"
    }
  ]
});
formatter.scenario({
  "name": "user validates information sent to OW from Plaza",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CRM_ResourceRequest"
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
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnPlazaPortal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Products \u0026 Services",
  "keyword": "When "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnProductsServices()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on IT Infrastructure dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnITInfrastructureDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on application under IT Infrastructure dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnApplicationUnderITInfrastructureDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on show more button",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnShowMoreButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"CRM\" pebble",
  "keyword": "When "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnPebble(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see CRM form",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userShouldSeeCRMForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects role dropdown as \"Application Operation Engineer\"",
  "keyword": "When "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userSelectsRoleDropdownAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects service request name as \"Resource Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userSelectsServiceRequestNameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters CRM resource request as \"Test26 CRM/Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userEntersCRMResourceRequestAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters CRM  resource request planned start date as current date",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userEntersCRMResourceRequestPlannedStartDateAsCurrentDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters CRM resource request planned end date as current date",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userEntersCRMResourceRequestPlannedEndDateAsCurrentDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters CRM resource request description as \"Test26 CRM/Description\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userEntersCRMResourceRequestDescriptionAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters additional comments as \"Test26 CRM/AC\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userEntersAdditionalCommentsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Submit\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnButton(String)"
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
  "name": "user should see service request form",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userShouldSeeServiceRequestForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens new tab",
  "keyword": "When "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userOpensNewTab()"
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
  "keyword": "And "
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
  "name": "user selects search menu as \"Open Search Form:Work Order\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsSearchMenuAs(String)"
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
  "name": "user enters plaza request id in the source id field",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userEntersPlazaRequestIdInTheSourceIdField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks Search on ticket search",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksSearchOnTicketSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see plaza ticket",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeePlazaTicket()"
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
  "error_message": "java.lang.AssertionError: expected [PLAZA] but found []\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat steps.OWF_WorkOrderPageSteps.userValidatesSourceFieldAs(OWF_WorkOrderPageSteps.java:253)\r\n\tat ✽.user validates source field as \"PLAZA\"(features/Automation/PLAZA/CRM/CRM_ResourceRequest.feature:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user validates title field as \"Service Request | CRM\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesPdbTitleFieldAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates CRM description same as plaza",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesCRMDescriptionSameAsPlaza()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on owner under sections",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnOwnerUnderSections()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on assignment under sections",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAssignmentUnderSections()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates owner profile as \"PLAZA\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesOwnerProfileAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates owner as \"PLAZA\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesOwnerAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see assigned profile as \"CRM\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeAssignedProfileAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Interested Parties\" tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates \"PLAZA\" is listed as an interested party",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesIsListedAsAnInterestedParty(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Ack button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAckButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user changes status to \"Cleared\" on work order page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userChangesStatusToOnWorkOrderPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects completion code as \"Success\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userSelectsCompletionCodeAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Schedule\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters schedule end as current date",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userEntersScheduleEndAsCurrentDate()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates ticket status as \"Cleared\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user changes status to \"Closed\" on work order page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userChangesStatusToOnWorkOrderPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates ticket status as \"Closed\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user switches to window 0",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on main page refresh",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnMainPageRefresh()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates plaza request has completed",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userValidatesPlazaRequestHasCompleted()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});