$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/Regression/Change/E2E_Normal_Change_(Internal Initiator).feature");
formatter.feature({
  "name": "Internal Normal Change E2E",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@E2E_Normal_Change_Internal_Initiator"
    },
    {
      "name": "@Change"
    }
  ]
});
formatter.scenario({
  "name": "Internal user processes a normal change ticket",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@E2E_Normal_Change_Internal_Initiator"
    },
    {
      "name": "@Change"
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
  "name": "user logs in with valid username \"ChangeInitiatorInternal1\" and password as \"Test@1234\"",
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
  "name": "user clicks on create change record",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnCreateChangeRecord()"
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
  "name": "user clicks save button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message should display as \"Please fill up all the mandatory fields in the Details Panel to create a Change Request. (ARERR 10000)\" on change record page",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.errorMessageShouldDisplayAsOnChangeRecordPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Regression - Change Management Process\" in the implementation field",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersInTheImplementationField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Regression - Change Management Process\" in the test plan field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersInTheTestPlanField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Regression - Change Management Process\" in the rollback field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersInTheRollbackField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Regression - Change Management Process\" in the communication plan field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersInTheCommunicationPlanField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Regression - Change Management Process\" in the ver of functionality field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersInTheVerOfFunctionalityField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Regression - Change Management Process\" in the risk description field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersInTheRiskDescriptionField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks save button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple error messages should appear with red boarder around fields",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.multipleErrorMessagesShouldAppearWithRedBoarderAroundFields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Normal Change\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsRequestTypeAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects title as \"Mobile:CS Core (Voice)\" on Change record page",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsTitleAsOnChangeRecordPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request category as \"Software Installation\" on change record page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsRequestCategoryAsOnChangeRecordPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - Automated Test for Normal Change (Internal Initiator)\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters reason field as \"Regression\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersReasonFieldAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects priority as \"Critical\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsPriorityAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Privacy Data: Just Testing\" in the change builder field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersInTheChangeBuilderField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters as \"Test Data - Ignore Ticket\" in service and customer impact",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersAsInServiceAndCustomerImpact(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters start time as 24 hours fast from current sweden time in \"MM/dd/yyyy HH:mm:ss a\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersStartTimeAsHoursFastFromCurrentSwedenTimeInFormat(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters end time as 28 hours fast from current sweden time in \"MM/dd/yyyy HH:mm:ss a\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersEndTimeAsHoursFastFromCurrentSwedenTimeInFormat(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters impact duration as \"45\" minutes",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersImpactDurationAsMinutes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects estimated impact dropdown as \"Degradation of Service\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsEstimatedImpactDropdownAsNoImpact(String)"
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
  "name": "user waits",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userWaits()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of tabs \"Timeline:Diagnosis:Risk:Schedule:Interested Parties:Approval:Notifications:Linked Items:Work Orders:Service Level:Related Project:Service Info:Telenor\" on change record page",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesAvailabilityOfTabsOnChangeRecordPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on owner under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnOwnerUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates owner profile as \"Change Initiator-Internal\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesOwnerProfileAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates owner as \"ChangeInitiatorInternal1\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesOwnerAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Send button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSendButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message should display as \"You must provide an answer to all the risk question outlined in the Risk tab before Send (ARERR 10000)\" on change record page",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.errorMessageShouldDisplayAsOnChangeRecordPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Risk tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRiskTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets current risk score value",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userGetsCurrentRiskScoreValue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user answers all risk questions as below",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userAnswersAllRiskQuestionsAsBelow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects answer as \"Impact to other systems/technologies are unclear\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsAnswerAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects answer as \"No\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsAnswerAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects answer as \"Tested successfully, this is a pilot\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsAnswerAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects answer as \"Yes (outcome of the change can be instantly verified)\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsAnswerAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects answer as \"Yes\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsAnswerAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects answer as \"Simple\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsAnswerAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects last answer as \"No\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsLastAnswerAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates risk score gets updated",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesRiskScoreGetsUpdated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Send button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSendButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an error message should appear: \"Please select at least one country of impact for this change. (ARERR 10000)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.anErrorMessageShouldAppear(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on estonia checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnEstoniaCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Send button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSendButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message should display as \"You must select at least one CI in the Diagnosis Tab (ARERR 10000)\" on change record page",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.errorMessageShouldDisplayAsOnChangeRecordPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Diagnosis\" tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds CI \"FI_MGW_SMG03TRE\" to change ticket with impact level \"Loss of Service\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userAddsCIToChangeTicketWithImpactLevel(String,String)"
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
  "name": "user switches to default",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSwitchesToDefault()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "CI should be listed and displayed under the Diagnosis tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.ciShouldBeListedAndDisplayedUnderTheDiagnosisTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Show CR Matching button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnShowCRMatchingButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see Show CR Matching table appear",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userShouldSeeShowCRMatchingTableAppear()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Send button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSendButton()"
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
  "name": "user should see assigned profile as \"DC CS Core (Voice)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeAssignedProfileAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates owner profile as \"Change Manager\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesOwnerProfileAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates owner as \"ChangeManager\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesOwnerAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Timeline\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Description* isn\u0027t readonly",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesDescriptionIsnTReadonly()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Project Code isn\u0027t readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesProjectCodeIsnTReadonly()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Change Builder+* isn\u0027t readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesChangeBuilderIsnTReadonly()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Communication Plan* isn\u0027t readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesCommunicationPlanIsnTReadonly()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Ver of Functionality* isn\u0027t readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesVerOfFunctionalityIsnTReadonly()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Risk Description* isn\u0027t readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesRiskDescriptionIsnTReadonly()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Timeline Text entry isn\u0027t readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesTimelineTextEntryIsnTReadonly()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Assignee Profile has changed from  to DC CS Core (Voice). Request Status has changed from New to Assigned.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
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
  "name": "user waits 60 secs",
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
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Sent\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Assignment-Profile\" email update",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userShouldSeeEmailUpdate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logsOut from One workflow",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userLogsOutFromOneWorkflow()"
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
  "name": "user logs in with valid username \"DC CS Core (Voice)_auto\" and password as \"Test@1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userLogsInWithValidUsernameAndPasswordAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully logged in to OneWorkflow and agent console should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSuccessfullyLoggedInToOneworkflowAndAgentConsoleShouldBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on more filters button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnMoreFiltersButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Core\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters title as \"Mobile | CS Core (Voice)\" on more filter window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userEntersTitleAsOnMoreFilterWindow(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects status as \"Assigned\" on user more filters window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsStatusAsOnUserMoreFiltersWindow(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on apply button on user more filters window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnApplyButtonOnUserMoreFiltersWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"CR\" tickets with \"Status\" of \"Assigned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userShouldSeeTicketsWithOf(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects search menu as \"Open Search Form:Change Record/Project/Freeze\"",
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
  "name": "user enters ticket previously created and searches",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersTicketPreviouslyCreatedAndSearches()"
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
  "name": "user validates ticket status as \"Analysis\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates last ack by field has data present",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesLastAckByFieldHasDataPresent()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"DC CS Core (Voice)_auto\" in assignee",
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
  "name": "user clicks on Show CR Matching button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnShowCRMatchingButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see Show CR Matching table appear",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userShouldSeeShowCRMatchingTableAppear()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"- Additional Information\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters reason field as \"New Reason\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersReasonFieldAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on details under sections",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDetailsUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"New Communication plan\" in the communication plan field",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersInTheCommunicationPlanField(String)"
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
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Description has changed from TEST TICKET PLEASE IGNORE - Automated Test for Normal Change (Internal Initiator) to - Additional Information. \"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
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
  "name": "user enters start time as 168 hours fast from current sweden time",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersStartTimeAsHoursFastFromCurrentSwedenTime(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters end time as 172 hours fast from current sweden time",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersEndTimeAsHoursFastFromCurrentSwedenTime(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters request start time 168 hours ahead of current date",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersRequestStartTimeHoursAheadOfCurrentDate(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters request end time 172 hours ahead of current date",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersRequestEndTimeHoursAheadOfCurrentDate(int)"
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
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Requested Start has changed\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Schedule\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the schedule time values",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userGetsTheScheduleTimeValues()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user right clicks on primary CI and selects \"Impact:Update\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userRightClicksOnPrimaryCIAndSelects(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user switches to frame",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToFrame()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters impact from time as same value as request start time on impact details bulk update window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersImpactFromTimeAsSameValueAsRequestStartTimeOnImpactDetailsBulkUpdateWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters impact to time as same value as request end time on impact details bulk update window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersImpactToTimeAsSameValueAsRequestEndTimeOnImpactDetailsBulkUpdateWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks confirm checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksConfirmCheckbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk update save button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnBulkUpdateSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Interested Parties\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters email address as \"Test2@Test2.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersEmailAddressAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on add email button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnAddEmailButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see new email \"Test2@Test2.com\" added in \"Email Address\" in row 3",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userShouldSeeNewEmailAddedInInRow(String,String,int)"
});
formatter.result({
  "error_message": "java.lang.IndexOutOfBoundsException: Index: 3, Size: 3\r\n\tat java.util.ArrayList.rangeCheck(ArrayList.java:657)\r\n\tat java.util.ArrayList.get(ArrayList.java:433)\r\n\tat pageObjects.BasePage.getTableCellData(BasePage.java:675)\r\n\tat pageObjects.BaseRecordPage.getText(BaseRecordPage.java:587)\r\n\tat steps.OWF_ChangeRecordPageSteps.userShouldSeeNewEmailAddedInInRow(OWF_ChangeRecordPageSteps.java:377)\r\n\tat ✽.user should see new email \"Test2@Test2.com\" added in \"Email Address\" in row 3(features/Automation/Regression/Change/E2E_Normal_Change_(Internal Initiator).feature:148)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on \"Notifications\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Sent\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Acknowledged\" email update",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userShouldSeeEmailUpdate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user changes status to \"Approval Requested\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userChangeStatusTo(String)"
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
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Request Status has changed from Analysis to Approval Requested.\" on row 65",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAsOnRow(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates ticket status as \"Approval Requested\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates availability of tabs \"Approval\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesAvailabilityOfTabs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user waits 2 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logsOut from One workflow",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userLogsOutFromOneWorkflow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user goes back to login page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userGoesBackToLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs in with valid username \"ChangeManager1_Automation\" and password as \"Test@1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userLogsInWithValidUsernameAndPasswordAs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user successfully logged in to OneWorkflow and agent console should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSuccessfullyLoggedInToOneworkflowAndAgentConsoleShouldBeDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on more filters button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnMoreFiltersButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Core\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects status as \"Approval Requested\" on user more filters window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsStatusAsOnUserMoreFiltersWindow(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on apply button on user more filters window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnApplyButtonOnUserMoreFiltersWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"CR\" tickets with \"Status\" of \"Approval Requested\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userShouldSeeTicketsWithOf(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects search menu as \"Open Search Form:Change Record/Project/Freeze\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsSearchMenuAs(String)"
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
  "name": "user enters ticket previously created and searches",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersTicketPreviouslyCreatedAndSearches()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on owner under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnOwnerUnderSections()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates owner profile as \"Change Manager\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesOwnerProfileAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects owner as \"ChangeManager1_Automation\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsOwnerAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Show CR Matching button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnShowCRMatchingButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see Show CR Matching table appear",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userShouldSeeShowCRMatchingTableAppear()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user changes status to \"Analysis\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userChangeStatusTo(String)"
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
  "name": "user validates Title isn\u0027t readonly",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesTitleIsnTReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Request Category isn\u0027t readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesRequestCategoryIsnTReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Description* isn\u0027t readonly",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesDescriptionIsnTReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Reason isn\u0027t readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesReasonIsnTReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Priority isn\u0027t readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesPriorityIsnTReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Project Code isn\u0027t readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesProjectCodeIsnTReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Change Builder+* isn\u0027t readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesChangeBuilderIsnTReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Implementation isn\u0027t readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesImplementationIsnTReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Test Plan isn\u0027t readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesTestPlanIsnTReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Rollback isn\u0027t readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesRollbackIsnTReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Ver of Functionality* isn\u0027t readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesVerOfFunctionalityIsnTReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Timeline Text entry isn\u0027t readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesTimelineTextEntryIsnTReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - New Description\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "change should also be reflected in the timeline as \"Description has changed from TEST TICKET PLEASE IGNORE - Automated Test for Normal Change (Internal Initiator) - Additional info to TEST TICKET PLEASE IGNORE - New Description.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on risk tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnRiskTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on last risk question selects last answer as \"Yes\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnLastRiskQuestionSelectsLastAnswerAs(String)"
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
  "name": "user changes status to \"Approval Requested\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userChangeStatusTo(String)"
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
  "name": "user clicks on \"Approval\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on request thats pending approval",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnRequestThatsPendingApproval()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on view button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnViewButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user switches to frame",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToFrame()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"Change can be approved right away\" in comments field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersInCommentsField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on approve button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnApproveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user switches to window 2",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnTicketRefreshButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates ticket status as \"Approved\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Notifications\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Sent\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Approved Change-Builder\" email update",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userShouldSeeEmailUpdate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"Ticket approved by ChangeManager1_Automation in date: \"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user changes status to \"Schedule Requested\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userChangeStatusTo(String)"
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
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Request Status has changed from Approved to Schedule Requested.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates ticket status as \"Scheduled\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on assignment under sections",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAssignmentUnderSections()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see assigned profile as \"Change Implementation Control\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeAssignedProfileAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"ChangeImplementationControl1\" in assignee",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInAssignee(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on owner under sections",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnOwnerUnderSections()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates owner profile as \"Change Manager\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesOwnerProfileAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates owner as \"ChangeManager1_Automation\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesOwnerAs(String)"
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
  "name": "user clicks on \"Notifications\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Sent\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Assignment-user\" email update",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userShouldSeeEmailUpdate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logsOut",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userLogsOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user goes back to login page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userGoesBackToLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs in with valid username \"ChangeImplementationControl1\" and password as \"Telia@1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userLogsInWithValidUsernameAndPasswordAs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user successfully logged in to OneWorkflow and agent console should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSuccessfullyLoggedInToOneworkflowAndAgentConsoleShouldBeDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on more filters button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnMoreFiltersButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Core\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects status as \"Scheduled\" on user more filters window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsStatusAsOnUserMoreFiltersWindow(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on apply button on user more filters window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnApplyButtonOnUserMoreFiltersWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"CR\" tickets with \"Status\" of \"Scheduled\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userShouldSeeTicketsWithOf(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects search menu as \"Open Search Form:Change Record/Project/Freeze\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsSearchMenuAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user switches to window 2",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters ticket previously created and searches",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersTicketPreviouslyCreatedAndSearches()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user changes status to \"Implementation\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userChangeStatusTo(String)"
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
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Actual Start has changed from  UTC to 2019-07-26 13:09:51 UTC. Request Status has changed from Scheduled to Implementation. \"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Schedule\" tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates actual start time is updated",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesActualStartTimeIsUpdated()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Notifications\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Sent\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Implementation\" email update",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userShouldSeeEmailUpdate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on timeline tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnTimelineTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"Successful - no issues during implementation\" in the timeline text box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersInTheTimelineTextBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on add button on timeline",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnAddButtonOnTimeline()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user changes status to \"Completed\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userChangeStatusTo(String)"
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
  "name": "error message should display as \"Required field (without a default) not specified : Actual Impact (ARERR 9424)\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.errorMessageShouldDisplayAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error message should display as \"Required field (without a default) not specified : Completed Code (ARERR 9424)\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.errorMessageShouldDisplayAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Schedule\" tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates actual end time is updated",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesActualEndTimeIsUpdated()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects actual impact as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsActualImpactAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects completed code as \"Successful\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsCompletedCodeAs(String)"
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
  "name": "error message should display as \"There are still outstanding active or pending impact records. Please clear them before clearing the request. (ARERR 999001210)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.errorMessageShouldDisplayAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user gets CI impact from time and impact to time",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userGetsCIImpactFromTimeAndImpactToTime()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user right clicks on primary CI and selects \"Impact:Clear\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userRightClicksOnPrimaryCIAndSelects(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on yes on CI warning window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnYesOnCIWarningWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates CI \"Impact Status\" is \"Inactive\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesCIImpactStatusIs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates CI impact from time and impact to time is updated",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesCIImpactFromTimeAndImpactToTimeIsUpdated()"
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
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Actual Impact has changed from  to No Impact. Actual End has changed from  UTC to 2019-07-26 13:23:51 UTC. Completed Code has changed from  to Successful. Request Status has changed from Implementation to Completed. \"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logsOut",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userLogsOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user goes back to login page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userGoesBackToLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs in with valid username \"ChangeManager1_Automation\" and password as \"Test@1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userLogsInWithValidUsernameAndPasswordAs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user successfully logged in to OneWorkflow and agent console should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSuccessfullyLoggedInToOneworkflowAndAgentConsoleShouldBeDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on more filters button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnMoreFiltersButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Core\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects status as \"Completed\" on user more filters window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsStatusAsOnUserMoreFiltersWindow(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on apply button on user more filters window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnApplyButtonOnUserMoreFiltersWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"CR\" tickets with \"Status\" of \"Completed\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userShouldSeeTicketsWithOf(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects search menu as \"Open Search Form:Change Record/Project/Freeze\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsSearchMenuAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user switches to window 2",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters ticket previously created and searches",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersTicketPreviouslyCreatedAndSearches()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user changes status to \"Closed\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userChangeStatusTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects resolved group as \"Change Manager\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsResolvedGroupAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects resolved person as \"ChangeManager1_Automation\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsResolvedPersonAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters review details as \"Random Notes\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersReviewDetailsAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects closure code as \"Test Ticket\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsClosureCodeAs(String)"
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
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Request Status has changed from Completed to Closed.\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});