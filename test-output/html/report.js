$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/SPRINTS/Sprint_P4S1/SAO_6830_PrimaryCI_Column_In_LinkedItemsTab.feature");
formatter.feature({
  "name": "Incident",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@6830"
    }
  ]
});
formatter.scenario({
  "name": "verify primary CI column and CI for linked ticket",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@6830"
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
  "name": "user enters \"Parent ticket\" in Title field in Trouble event",
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
  "name": "user enters description as \"Link to child ticket\"",
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
  "name": "user adds CI \"SE_LTECell_220184024\" to the ticket",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userAddsToTheTicket(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "CI should be listed and displayed under the Diagnosis tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.ciShouldBeListedAndDisplayedUnderTheDiagnosisTab()"
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
  "name": "user enters \"Child ticket\" in Title field in Trouble event",
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
  "name": "user enters description as \"Link to Master ticket\"",
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
  "name": "user gets trouble ticket value",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userGetsTroubleTicketValue()"
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
  "name": "user selects target application first dropdown as \"OS3 - Operations\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsTargetApplicationFirstDropdownAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects target application second dropdown as \"Is master of\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsTargetApplicationSecondDropdownAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on link button under linked items tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnLinkButtonUnderLinkedItemsTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user switches to frame",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToFrame()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters ticket in ticket ID+ field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersTicketInTicketIDField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the search button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on accept button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnAcceptButton()"
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
  "name": "user adds CI \"SE_GSM-AHS\" to the ticket",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userAddsToTheTicket(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "CI should be listed and displayed under the Diagnosis tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.ciShouldBeListedAndDisplayedUnderTheDiagnosisTab()"
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
  "name": "user should see \"Primary CI\" as \"SE_LTECell_220184024\" for linked ticket",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userShouldSeeAsForLinkedTicket(String,String)"
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
  "name": "user validates linked ticket availability under linked items",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesLinkedTicketAvailabilityUnderLinkedItems()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Primary CI\" as \"SE_GSM-AHS\" for linked ticket",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userShouldSeeAsForLinkedTicket(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});