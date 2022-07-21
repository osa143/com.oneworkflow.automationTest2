$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/PLAZA/Other/WEB_TAB.feature");
formatter.feature({
  "name": "Web Tab plaza form test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@WEB_TAB"
    },
    {
      "name": "@PLAZA"
    }
  ]
});
formatter.scenario({
  "name": "user validates information sent to OW from Plaza",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@WEB_TAB"
    },
    {
      "name": "@PLAZA"
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
  "name": "user waits 2 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
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
  "name": "user waits 2 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
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
  "name": "user waits 2 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"WEB TAB\" pebble",
  "keyword": "When "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnPebble(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"WEB TAB\" form",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userShouldSeeForm(String)"
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
  "name": "user enters web tab request as \"Test1 Web Tab/Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userEntersWebTabRequestAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters web tab CI as \"cc100cgas001\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userEntersWebTabCIAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters web tab description as \"Test1 Web Tab/Description\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userEntersWebTabDescriptionAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters additional comments as \"Test1 Web Tab/AC\"",
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
  "name": "user clicks agent console search menu",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksAgentConsoleSearchMenuAs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects agent console open search form",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsAgentConsoleOpenSearchForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects agent console search work order",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsAgentConsoleSearchWorkOrder()"
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
  "name": "user clicks on Ack button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAckButton()"
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
  "name": "user validates title field as \"Service Request | WEB TAB\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesPdbTitleFieldAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates request type as \"Service Request | PLAZA\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesRequestTypeAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on owner under sections",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnOwnerUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on assignment under sections",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAssignmentUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates owner profile as \"PLAZA\"",
  "keyword": "Then "
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
  "name": "user should see assigned profile as \"Enterprise\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeAssignedProfileAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Interested Parties\" tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"PLAZA\" is listed as an interested party",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesIsListedAsAnInterestedParty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Diagnosis\"",
  "keyword": "When "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates CI \"cc100cgas001\" is listed",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCIIsListed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user right clicks on CI \"cc100cgas001\" and clears impact",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userRightClicksOnCIAndClearsImpact(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see confirmation message for impact clear and user clicks yes",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userShouldSeeConfirmationMessageForImpactClearAndUserClicksOk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user changes status to \"Cleared\" on work order page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userChangesStatusToOnWorkOrderPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects completion code as \"Success\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userSelectsCompletionCodeAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Schedule\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters schedule end as current date",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userEntersScheduleEndAsCurrentDate()"
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
  "name": "user validates ticket status as \"Cleared\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user changes status to \"Closed\" on work order page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userChangesStatusToOnWorkOrderPage(String)"
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
  "name": "user validates ticket status as \"Closed\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user switches to window 0",
  "keyword": "When "
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
  "name": "user validates plaza request has completed",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userValidatesPlazaRequestHasCompleted()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});