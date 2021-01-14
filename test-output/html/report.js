$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/Regression/E2E/RAN_Telia_Wifi/Telia_Wifi.feature");
formatter.feature({
  "name": "Telia Wifi regression test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Telia_Wifi"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "Telia Wifi",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Telia_Wifi"
    },
    {
      "name": "@Regression"
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
  "name": "user clicks on create trouble event",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnCreateTroubleEvent()"
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
  "name": "trouble record form should appear in new tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.troubleRecordFormShouldAppearInNewTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Test Telia Wifi\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"Test WO\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user validates ticket status as \"Assigned\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on CI search button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnCISearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "CI search tab should be opened",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.ciSearchTabShouldBeOpened()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user switches to frame",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToFrame()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"TLÖ WLAN4\" in location field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInLocationField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on search button on CI search window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSearchButtonOnCiSearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the first three CI\u0027s",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsTheFirstThreeCIS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"Degradation of Service\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on relate CI",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRelateCI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes warning message",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClosesWarningMessageAndClicksOnCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on close button on CI search window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnCloseButtonOnCISearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Work Orders\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on create from ticket",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCreateFromTicket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user switches to window 2",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
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
  "name": "user enters description as \"Test WO send by email\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects assigned profile dropdown as \"Access Network:Mobile:WLAN:WLAN Agreement\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsAssignedProfileDropdownAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects SLA class as \"DEFAULT:3 weeks repair time\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userSelectsSLAClassAs(String)"
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
  "name": "user validates ticket status as \"Assigned\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user waits 90 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Notifications\" tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Sent/Received\" tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates email notification is sent",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesEmailNotificationIsSent()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});