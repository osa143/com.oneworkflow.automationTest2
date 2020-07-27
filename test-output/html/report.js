$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/Regression/Problem/Problem_Manager_Withdraws_Ticket_After_Ack.feature");
formatter.feature({
  "name": "withdraw problem Ticket",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@PM_Withdraw_Ticket_After_Ack"
    },
    {
      "name": "@problem"
    },
    {
      "name": "@Reg_Problem"
    }
  ]
});
formatter.scenario({
  "name": "withdraw ticket after Acknowledge",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PM_Withdraw_Ticket_After_Ack"
    },
    {
      "name": "@problem"
    },
    {
      "name": "@Reg_Problem"
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
        "XX_Test:Functional Test",
        "PM withdraw ticket after Ack",
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
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : User is currently connected from another machine or incompatible session. (ARERR 9093)\n\nDo you wish to override?}\n  (Session info: chrome\u003d84.0.4147.89): User is currently connected from another machine or incompatible session. (ARERR 9093)\n\nDo you wish to override?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-P3NRUGT\u0027, ip: \u002710.85.240.67\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\MAHESH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52989}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 94bcb1d81041afc1ec1110c5b356ad93\n*** Element info: {Using\u003dxpath, value\u003d//img[@alt\u003d\u0027Menu for Search\u0027]/..}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pageObjects.BasePage.selectDropDownNameAndValue(BasePage.java:321)\r\n\tat pageObjects.OWF_AgentConsolePage.clickSearch_OpenSearch_ProblemRecord(OWF_AgentConsolePage.java:427)\r\n\tat steps.OWF_AgentConsolePageSteps.userClicksOnSearchAndSelectsOpenSearchFormsAndProblemRecord(OWF_AgentConsolePageSteps.java:168)\r\n\tat ✽.user clicks on search and selects open search forms and problem record(features/Automation/Regression/Problem/Problem_Manager_Withdraws_Ticket_After_Ack.feature:22)\r\n",
  "status": "failed"
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
  "name": "user enters Problem Ticket",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersProblemTicket()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks Search on ticket search",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksSearchOnTicketSearch()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Ack button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAckButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "problem ticket status should be under investigation",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.problemTicketStatusShouldBeUnderInvestigation()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Status has changed from Assigned to Under Investigation.\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user tries to change the status to \"Withdrawn\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userTriesToChangeTheStatusTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "problem ticket status should be under investigation",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.problemTicketStatusShouldBeUnderInvestigation()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logsOut",
  "keyword": "Then "
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
  "name": "user is on the OneWorkflow login page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userIsOnTheOneWorkflowLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs in with valid username \"Tohall_copy\" and password as \"Test@1234\"",
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
  "name": "user clicks on search and selects open search forms and problem record",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnSearchAndSelectsOpenSearchFormsAndProblemRecord()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user switches to window 3",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters Problem Ticket",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersProblemTicket()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks Search on ticket search",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksSearchOnTicketSearch()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies status is read only",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userVerifiesStatusIsReadOnly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "problem ticket status should be under investigation",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.problemTicketStatusShouldBeUnderInvestigation()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "error_message": "cucumber.runtime.CucumberException: java.io.IOException: Failed to create directory C:\\Users\\mahesh%20vaddegani\\Documents\\oneworkflow-automation\\ExtentReports\\Screenshots\\Screenshots_20200727_140009\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter.createReportFileOutputStream(ExtentCucumberAdapter.java:225)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter.writeBytesToURL(ExtentCucumberAdapter.java:213)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter.handleEmbed(ExtentCucumberAdapter.java:197)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter.access$400(ExtentCucumberAdapter.java:37)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter$6.receive(ExtentCucumberAdapter.java:97)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter$6.receive(ExtentCucumberAdapter.java:94)\r\n\tat cucumber.runner.AbstractEventPublisher.send(AbstractEventPublisher.java:45)\r\n\tat cucumber.runner.AbstractEventBus.send(AbstractEventBus.java:9)\r\n\tat cucumber.runner.TimeServiceEventBus.send(TimeServiceEventBus.java:3)\r\n\tat cucumber.runner.ThreadLocalRunnerSupplier$SynchronizedEventBus.send(ThreadLocalRunnerSupplier.java:90)\r\n\tat cucumber.runner.ThreadLocalRunnerSupplier$LocalEventBus.send(ThreadLocalRunnerSupplier.java:63)\r\n\tat cucumber.runner.Scenario.embed(Scenario.java:58)\r\n\tat cucumberHooks.Hooks.Teardown(Hooks.java:28)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:73)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\nCaused by: java.io.IOException: Failed to create directory C:\\Users\\mahesh%20vaddegani\\Documents\\oneworkflow-automation\\ExtentReports\\Screenshots\\Screenshots_20200727_140009\r\n\tat extentreports.cucumber.adapter.URLOutputStream.ensureParentDirExists(URLOutputStream.java:56)\r\n\tat extentreports.cucumber.adapter.URLOutputStream.\u003cinit\u003e(URLOutputStream.java:36)\r\n\tat extentreports.cucumber.adapter.URLOutputStream.\u003cinit\u003e(URLOutputStream.java:26)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter.createReportFileOutputStream(ExtentCucumberAdapter.java:223)\r\n\t... 51 more\r\n",
  "status": "failed"
});
});