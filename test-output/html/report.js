$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/Regression/Problem/E2E problem and known error.feature");
formatter.feature({
  "name": "E2E problem and known error",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@E2E_problem_and_known_error"
    },
    {
      "name": "@problem"
    },
    {
      "name": "@Reg_Problem"
    },
    {
      "name": "@prob"
    }
  ]
});
formatter.scenario({
  "name": "E2E problem and known error",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@E2E_problem_and_known_error"
    },
    {
      "name": "@problem"
    },
    {
      "name": "@Reg_Problem"
    },
    {
      "name": "@prob"
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
  "name": "user logs in with valid username \"Tohall_copy\" and password as \"Test@1234\"",
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
  "name": "user clicks on create problem record",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnCreateProblemRecord()"
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
  "name": "problem record form should appear in new tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.problemRecordFormShouldAppearInNewTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates vendor section is not present",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesVendorSectionIsNotPresent()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user creates problem ticket with below details",
  "rows": [
    {
      "cells": [
        "Title",
        "RequestType",
        "Description",
        "ImpactType",
        "Urgency"
      ]
    },
    {
      "cells": [
        "proactive investigation of: frvi96_auto",
        "CPS:IT:Other",
        "UAT Test close",
        "Moderate/Limited",
        "Low"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userCreatesProblemTicketWithBelowDetails(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ticket should be created and status should be assigned",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.ticketShouldBeCreatedAndStatusShouldBeAssigned()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates vendor section is not present",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesVendorSectionIsNotPresent()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets ticket value",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userGetsTicketValue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logsOut",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userLogsOut()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user goes back to login page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userGoesBackToLoginPage()"
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
  "name": "user clicks on search and selects open search forms and problem record",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnSearchAndSelectsOpenSearchFormsAndProblemRecord()"
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
  "name": "user enters Problem Ticket",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersProblemTicket()"
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
  "name": "problem ticket status should be under investigation",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.problemTicketStatusShouldBeUnderInvestigation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates vendor section is not present",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesVendorSectionIsNotPresent()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Status has changed from Assigned to Under Investigation.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
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
  "name": "user selects assigned profile dropdown as \"Problem Management:Problem Initiator\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsAssignedProfileDropdownAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Tohall_copy\" in assignee",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInAssignee(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button on the problem form",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSaveButtonOnTheProblemForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "change should also be reflected in the timeline \"Request has been reassigned from Assignee user :frvi96_auto:Tohall_copy\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimeline(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logsOut",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userLogsOut()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user goes back to login page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userGoesBackToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid username \"Tohall_copy\" and password as \"Test@1234\"",
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
  "name": "user clicks on search and selects open search forms and problem record",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnSearchAndSelectsOpenSearchFormsAndProblemRecord()"
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
  "name": "user enters Problem Ticket",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersProblemTicket()"
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
  "name": "user changes status as Investigation Complete on problem record page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userChangesStatusAsInvestigationCompleteOnProblemRecordPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects root cause code as \"Technical:HW error\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsRootCauseCodeAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters route cause details as \"Bad management\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersRouteCauseDetailsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters RC found date as current date",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersRCFoundDateAsCurrentDate()"
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
  "name": "user validates ticket status as \"Investigation Complete\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates vendor section is not present",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesVendorSectionIsNotPresent()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Status has changed from Under Investigation to Investigation Complete.\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logsOut",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userLogsOut()"
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
  "name": "user goes back to login page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userGoesBackToLoginPage()"
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
  "name": "user clicks on search and selects open search forms and problem record",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnSearchAndSelectsOpenSearchFormsAndProblemRecord()"
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
  "name": "user enters Problem Ticket",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersProblemTicket()"
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
  "name": "user clicks on linked items tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnLinkedItemsTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects target application first dropdown as \"OS3 - Known Error\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsTargetApplicationFirstDropdownAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects target application second dropdown as \"Caused by\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsTargetApplicationSecondDropdownAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on create button under linked items",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnCreateButtonUnderLinkedItems()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user switches to window 4",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "known error ticket status should be \"New\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.knownErrorTicketStatusShouldBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates vendor section is not present",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesVendorSectionIsNotPresent()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets known error ticket",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.userGetsKnownErrorTicket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Test ticket\" in Title field",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
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
  "name": "known error ticket status should be \"Draft\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.knownErrorTicketStatusShouldBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates vendor section is not present",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesVendorSectionIsNotPresent()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logsOut",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userLogsOut()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user switches to window 4",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user goes back to login page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userGoesBackToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid username \"syvaptu1_auto\" and password as \"Test@1234\"",
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
  "name": "user clicks on search and selects open search forms and problem record",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnSearchAndSelectsOpenSearchFormsAndProblemRecord()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user switches to window 5",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Problem Ticket",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersProblemTicket()"
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
  "name": "user changes status to \"Closed\" on problem record page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userChangesStatusToOnProblemRecordPage(String)"
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
  "name": "mandatory fields should be indicated in bold",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.mandatoryFieldsShouldBeIndicatedInBold()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects solved under closure code",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsSolvedUnderClosureCode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters solution as \"A change in processes\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersSolutionAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters solution found date as current date",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersSolutionFoundDateAsCurrentDate()"
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates vendor section is not present",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesVendorSectionIsNotPresent()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Status has changed from Investigation Complete to Closed. \"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects search menu as \"Open Search Form:Known Error\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsSearchMenuAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user switches to window 6",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters known error ticket",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.userEntersKnownErrorTicket()"
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
  "name": "user selects accountable organisation as \"CA_Infra\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsAccountableOrganisationAs(String)"
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
  "name": "user validates ticket status as \"Published\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates vendor section is not present",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesVendorSectionIsNotPresent()"
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
  "name": "user selects closure code as \"Solved\"",
  "keyword": "When "
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
  "name": "user validates ticket status as \"Closed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates vendor section is not present",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesVendorSectionIsNotPresent()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates all fields are read only and not editable",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.userValidatesAllFieldsAreReadOnlyAndNotEditable()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});