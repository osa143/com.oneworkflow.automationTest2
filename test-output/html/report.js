$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/Regression/OW/IncidentITVAS/(CC 83)_Due_date_information_is_missing_in_Agent_Console.feature");
formatter.feature({
  "name": "Automation - OP-000000438117( CC 83) - Due date information is missing in Agent Console for Event tickets[s]",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CC83_Due_date_information_is_missing_in_Agent_Console"
    }
  ]
});
formatter.scenario({
  "name": "Automation - OP-000000438117( CC 83) - Due date information is missing in Agent Console for Event tickets[s]",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CC83_Due_date_information_is_missing_in_Agent_Console"
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
  "name": "user clicks on add column from preferences and selects OP next due date",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAddColumnFromPreferencesAndSelectsOPNextDueDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "OP next due date column within agent console should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.opNextDueDateColumnWithinAgentConsoleShouldBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on create trouble event",
  "keyword": "When "
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
  "name": "user enters \"Test\" in Title field in Trouble event",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersInTitleFieldInTroubleEvent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Customer\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"Test\"",
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
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets trouble ticket value",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userGetsTroubleTicketValue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets estimated ready time",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userGetsEstimatedReadyTime()"
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
  "name": "user enters ticket previously created and searches in agent console and highlights",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userEntersTicketPreviouslyCreatedAndSearchesInAgentConsole()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates OP next due date is same as estimated ready",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userValidatesOPNextDueDateIsSameAsEstimatedReady()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Ack button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAckButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates ticket status as \"Work In Progress\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user changes status to \"Cleared\" on trouble event page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userChangesStatusToOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects fault position as \"N/A:N/A\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsFaultPositionAsOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects cause as \"N/A:N/A:N/A\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsCauseAsOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters event end time as current time",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersEventEndTimeAsCurrentTime()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks save button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates ticket status as \"Cleared\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user changes status to \"Closed\" on trouble event page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userChangesStatusToOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects action dropdown as \"N/A:N/A\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsActionDropdownAsOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters closure info as \"Test Info\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersClosureInfoAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks save button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates ticket status as \"Closed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});