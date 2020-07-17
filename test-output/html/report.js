$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/SPRINTS/Sprint_P2S1/SAO_5204_Linked_tickets_radio_buttons.feature");
formatter.feature({
  "name": "user testing linked ticket radio buttons",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SAO-5204"
    }
  ]
});
formatter.scenario({
  "name": "user testing linked ticket radio buttons",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SAO-5204"
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
  "name": "user enters \"Test SAO-5204 - Linked Tickets Radio Button\" in Title field in Trouble event",
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
  "name": "user enters description as \"Test SAO-5204 - Linked Tickets Radio Button\"",
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
  "name": "user clicks on linked items tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnLinkedItemsTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects target application first dropdown as \"OS3 - Work Order\"",
  "keyword": "Then "
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
  "name": "work order form should appear in new tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.workOrderFormShouldAppearInNewTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Analysis\" in work order page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userSelectsRequestTypeAsInWorkOrderPage(String)"
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
  "name": "user validates ticket status as \"New\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects assigned profile dropdown as \"Core:Mobile:Mobile PS:Mob PS Core WEST\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsAssignedProfileDropdownAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Change_Automation_3\" in assignee",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInAssignee(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks save button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksSaveButton()"
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
  "name": "user clicks on Ack button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAckButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates ticket status as \"Work In Progress\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user changes status to \"Cleared\" on work order page",
  "keyword": "Then "
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
  "name": "user clicks save button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksSaveButton()"
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
  "name": "user switches to window 1",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects target application first dropdown as \"(clear)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsTargetApplicationFirstDropdownAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks refresh button under linked items",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksRefreshButtonUnderLinkedItems()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates 1 linked ticket availability",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesLinkedTicketAvailability(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects target application first dropdown as \"OS3 - Problem\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsTargetApplicationFirstDropdownAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects target application second dropdown as \"Fixed by\"",
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnCreateButtonUnderLinkedItems()"
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
  "name": "user selects request type as \"CPS:IT:Other\" in problem form",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsRequestTypeAsInProblemForm(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact as \"Extensive/Widespread\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsImpactAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects urgency as \"High\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsUrgencyAs(String)"
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
  "name": "user selects affected organisation as \"CA_IT\"",
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
  "name": "problem ticket status should be assigned",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.problemTicketStatusShouldBeAssigned()"
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
  "name": "user selects target application first dropdown as \"(clear)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsTargetApplicationFirstDropdownAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks refresh button under linked items",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksRefreshButtonUnderLinkedItems()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates 2 linked ticket availability",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesLinkedTicketAvailability(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects target application first dropdown as \"OS3 - Operations\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsTargetApplicationFirstDropdownAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects target application second dropdown as \"Is child of\"",
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
  "keyword": "Then "
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
  "name": "trouble ticket should be created and status should be assigned",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.troubleTicketShouldBeCreatedAndStatusShouldBeAssigned()"
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
  "name": "user selects target application first dropdown as \"(clear)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsTargetApplicationFirstDropdownAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks refresh button under linked items",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksRefreshButtonUnderLinkedItems()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates 3 linked ticket availability",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesLinkedTicketAvailability(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects target application first dropdown as \"OS3 - Change\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsTargetApplicationFirstDropdownAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects target application second dropdown as \"Caused\"",
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnCreateButtonUnderLinkedItems()"
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
  "name": "change record form should open in a new tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.changeRecordFormShouldOpenInANewTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects change type as \"Change Record\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsChangeTypeAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Standard Change\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsRequestTypeAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects template as \"All:IT:Carrier:Telia Carrier UAT Changes\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsTemplateAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Test\" in the change builder field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersInTheChangeBuilderField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters request start time 24 hours ahead of current date",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersRequestStartTimeHoursAheadOfCurrentDate(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters request end time 48 hours ahead of current date",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersRequestEndTimeHoursAheadOfCurrentDate(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters impact duration as \"50\" minutes",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersImpactDurationAsMinutes(String)"
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
  "name": "user validates ticket status as \"New\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
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
  "name": "user selects target application first dropdown as \"(clear)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsTargetApplicationFirstDropdownAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks refresh button under linked items",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksRefreshButtonUnderLinkedItems()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates 4 linked ticket availability",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesLinkedTicketAvailability(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects target application first dropdown as \"OS3 - Work Order\"",
  "keyword": "Then "
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnCreateButtonUnderLinkedItems()"
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
  "name": "work order form should appear in new tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.workOrderFormShouldAppearInNewTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Analysis\" in work order page",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userSelectsRequestTypeAsInWorkOrderPage(String)"
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
  "name": "user validates ticket status as \"New\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects assigned profile dropdown as \"Core:Mobile:Mobile PS:Mob PS Core WEST\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsAssignedProfileDropdownAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Change_Automation_3\" in assignee",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInAssignee(String)"
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
  "keyword": "Then "
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
  "name": "user clicks save button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksSaveButton()"
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
  "keyword": "And "
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
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
  "name": "user selects target application first dropdown as \"(clear)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsTargetApplicationFirstDropdownAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks refresh button under linked items",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksRefreshButtonUnderLinkedItems()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates 5 linked ticket availability",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesLinkedTicketAvailability(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects target application first dropdown as \"OS3 - Work Order\"",
  "keyword": "When "
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnCreateButtonUnderLinkedItems()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user switches to window 7",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "work order form should appear in new tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.workOrderFormShouldAppearInNewTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Analysis\" in work order page",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userSelectsRequestTypeAsInWorkOrderPage(String)"
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
  "name": "user validates ticket status as \"New\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user changes status to \"Withdrawn\" on work order page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userChangesStatusToOnWorkOrderPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects withdrawn reason as \"Test Ticket\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsWithdrawnReasonAs(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [Test Ticket] but found []\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat steps.OWF_ChangeRecordPageSteps.userSelectsWithdrawnReasonAs(OWF_ChangeRecordPageSteps.java:700)\r\n\tat ✽.user selects withdrawn reason as \"Test Ticket\"(features/Automation/SPRINTS/Sprint_P2S1/SAO_5204_Linked_tickets_radio_buttons.feature:127)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should see confirmation message and clicks on yes button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userShouldSeeConfirmationMessageAndClicksOnYesButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates ticket status as \"Withdrawn\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects target application first dropdown as \"(clear)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsTargetApplicationFirstDropdownAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks refresh button under linked items",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksRefreshButtonUnderLinkedItems()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates 6 linked ticket availability",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesLinkedTicketAvailability(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects target application first dropdown as \"OS3 - Work Order\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsTargetApplicationFirstDropdownAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects target application second dropdown as \"Caused by\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsTargetApplicationSecondDropdownAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on create button under linked items",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnCreateButtonUnderLinkedItems()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user switches to window 8",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "work order form should appear in new tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.workOrderFormShouldAppearInNewTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects request type as \"Analysis\" in work order page",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userSelectsRequestTypeAsInWorkOrderPage(String)"
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
  "name": "user validates ticket status as \"New\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user changes status to \"Pending\" on work order page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userChangesStatusToOnWorkOrderPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters on hold to date 40 minutes in the future",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersOnHoldToDateMinutesInTheFuture(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects on hold reason as \"Other\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersOnHoldReasonAs(String)"
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
  "name": "user validates ticket status as \"Pending\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects target application first dropdown as \"(clear)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsTargetApplicationFirstDropdownAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks refresh button under linked items",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksRefreshButtonUnderLinkedItems()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates 7 linked ticket availability",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesLinkedTicketAvailability(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects target application first dropdown as \"(clear)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsTargetApplicationFirstDropdownAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates radio button open is selected",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user validates radio button cleared is selected",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user validates radio button closed is selected",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user validates ticket statuses \"New:Assigned:Work In Progress:Cleared:Closed:Pending:Withdrawn\" can be seen under linked items tab",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks on radio button cleared",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRadioButtonCleared()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on radio button closed",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRadioButtonClosed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates radio button open is selected",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user validates ticket statuses \"New:Assigned:Work In Progress:Pending\" can be seen under linked items tab",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks on radio button open",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRadioButtonOpen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on radio button cleared",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRadioButtonCleared()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates radio button cleared is selected",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user validates ticket statuses \"Cleared\" can be seen under linked items tab",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks on radio button cleared",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRadioButtonCleared()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on radio button closed",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRadioButtonClosed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates radio button cleared is selected",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user validates ticket statuses \"Closed:Withdrawn\" can be seen under linked items tab",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "error_message": "cucumber.runtime.CucumberException: java.io.IOException: Failed to create directory C:\\Users\\mahesh%20vaddegani\\Documents\\oneworkflow-automation\\ExtentReports\\Screenshots\\Screenshots_20200717_153155\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter.createReportFileOutputStream(ExtentCucumberAdapter.java:225)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter.writeBytesToURL(ExtentCucumberAdapter.java:213)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter.handleEmbed(ExtentCucumberAdapter.java:197)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter.access$400(ExtentCucumberAdapter.java:37)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter$6.receive(ExtentCucumberAdapter.java:97)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter$6.receive(ExtentCucumberAdapter.java:94)\r\n\tat cucumber.runner.AbstractEventPublisher.send(AbstractEventPublisher.java:45)\r\n\tat cucumber.runner.AbstractEventBus.send(AbstractEventBus.java:9)\r\n\tat cucumber.runner.TimeServiceEventBus.send(TimeServiceEventBus.java:3)\r\n\tat cucumber.runner.ThreadLocalRunnerSupplier$SynchronizedEventBus.send(ThreadLocalRunnerSupplier.java:90)\r\n\tat cucumber.runner.ThreadLocalRunnerSupplier$LocalEventBus.send(ThreadLocalRunnerSupplier.java:63)\r\n\tat cucumber.runner.Scenario.embed(Scenario.java:58)\r\n\tat cucumberHooks.Hooks.Teardown(Hooks.java:28)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:73)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\nCaused by: java.io.IOException: Failed to create directory C:\\Users\\mahesh%20vaddegani\\Documents\\oneworkflow-automation\\ExtentReports\\Screenshots\\Screenshots_20200717_153155\r\n\tat extentreports.cucumber.adapter.URLOutputStream.ensureParentDirExists(URLOutputStream.java:56)\r\n\tat extentreports.cucumber.adapter.URLOutputStream.\u003cinit\u003e(URLOutputStream.java:36)\r\n\tat extentreports.cucumber.adapter.URLOutputStream.\u003cinit\u003e(URLOutputStream.java:26)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter.createReportFileOutputStream(ExtentCucumberAdapter.java:223)\r\n\t... 51 more\r\n",
  "status": "failed"
});
});