$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/SAO_191_SiteNameDetails.feature");
formatter.feature({
  "name": "Sitename details search Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SAO_191"
    }
  ]
});
formatter.scenario({
  "name": "Verify Site Name details available for all CI\u0027s",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SAO_191"
    }
  ]
});
formatter.step({
  "name": "User is on the OneWorkflow login page",
  "keyword": "Given "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userIsOnTheOneWorkflowLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logins with valid user credentials",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userLoginsWithValidUserCredentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully logged in to oneworkflow and agent console should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSuccessfullyLoggedInToOneworkflowAndAgentConsoleShouldBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logouts and closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userLogoutsAndCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});