$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/SPRINTS/Sprint_P4S3/SAO_7281_Easy Access to Contacts in OW E-mails.feature");
formatter.feature({
  "name": "Ow Emails",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@7181"
    }
  ]
});
formatter.scenario({
  "name": "SAO-7281- Easy access to contacts",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@7181"
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
  "name": "user selects actions dropdown as \"Email \u003e Outgoing\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsActionsDropdownAs(String)"
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
  "name": "user clicks \"Add Person - free text\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters add person first name as \"Test\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userEntersAddPersonFirstNameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters add person last name as \"User\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userEntersAddPersonLastNameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters add person email address as \"testuser@test.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userEntersAddPersonEmailAddressAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks add button for add person",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksAddButtonForAddPerson()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "contact \"testuser@test.com\" should be added under \"Send Notification To\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.contactShouldBeAddedUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "dropdown values \"Test User [testuser@test.com]\" should be available in \"Select a Previously Used Contact (use Autofill or the Menu):\" dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.dropdownValuesShouldBeAvailableInDropdown(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat steps.OWF_AgentConsolePageSteps.dropdownValuesShouldBeAvailableInDropdown(OWF_AgentConsolePageSteps.java:673)\r\n\tat ✽.dropdown values \"Test User [testuser@test.com]\" should be available in \"Select a Previously Used Contact (use Autofill or the Menu):\" dropdown(features/Automation/SPRINTS/Sprint_P4S3/SAO_7281_Easy Access to Contacts in OW E-mails.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks cancel button on new notification window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksCancelButtonOnNewNotificationWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});