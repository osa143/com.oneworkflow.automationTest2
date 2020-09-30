$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/Regression/Change/Admin/AutoAssignLocationSearch.feature");
formatter.feature({
  "name": "Location search on auto assignment form",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AdminChangeLocationSearch"
    }
  ]
});
formatter.scenario({
  "name": "Location search on auto assignment form",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AdminChangeLocationSearch"
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
  "name": "user logs in with valid username \"fhr501\" and password as \"C0vidbadger\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userLogsInWithValidUsernameAndPasswordAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects administration menu as \"All Requests:Auto Assignment Rules\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsAdministrationMenuAs(String)"
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
  "name": "user should see auto assignment rules window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userShouldSeeAutoAssignmentRulesWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks the new button on assignment rule window",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksTheNewButtonOnAssignmentRuleWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SE_\" in the Location Name+ field and searches",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersInTheLocationNameFieldAndSearches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates locations related to \"SE\" are shown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesLocationsRelatedToAreShown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on cancel button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCancelButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"NO_\" within the location ID+ field and searches",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersWithinTheLocationIDFieldAndSearches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates locations related to \"NO\" are shown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesLocationsRelatedToAreShown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on cancel button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCancelButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SWE\" within the RegionName+ field and searches",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersWithinTheRegionNameFieldAndSearches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates locations related to \"SE\" are shown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesLocationsRelatedToAreShown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on cancel button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCancelButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});