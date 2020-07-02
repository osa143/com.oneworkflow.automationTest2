$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/SPRINTS/Sprint_P2S1/P2S1_SAO-4555+SAO-4556_Trust_Principles.feature");
formatter.feature({
  "name": "User Profile Development - User forms and workflow",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SAO-4555_SAO-4556"
    }
  ]
});
formatter.scenario({
  "name": "Verify user Profile Development - User forms and workflow",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SAO-4555_SAO-4556"
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
  "name": "user logs in with valid username \"fhr501\" and password as \"2020B@dger\"",
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
  "name": "user selects \"Administration\" as \"People:Users\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsAs(String,String)"
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
  "name": "user console should be opened in new window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userConsoleShouldBeOpenedInNewWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects user \"adg862\" in user table",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnUserAndClicksOpen(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks open user button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOpenUserButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user information window should be opened",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userInformationWindowShouldBeOpened()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Trust Principles\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see available trust principles as countries \"Sweden:Finland:Denmark:Norway:Lithuania:Estonia\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userShouldSeeAvailableTrustPrinciplesAsCountries(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects country \"Denmark\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks add right button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksAddRightButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Denmark\" under selected trust principles",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userShouldSeeUnderSelectedTrustPrinciples(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes user information window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClosesUserInformationWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects user \"adg862\" in user table",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnUserAndClicksOpen(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks open user button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOpenUserButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Trust Principles\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Denmark\" under selected trust principles",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userShouldSeeUnderSelectedTrustPrinciples(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks remove left button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksRemoveLeftButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shouldn\u0027t see \"Denmark\" under selected trust principles",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userShouldnTSeeUnderSelectedTrustPrinciples(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes user information window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClosesUserInformationWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});