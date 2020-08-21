$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/Regression/B2B/B2B_Calculate_SLA.feature");
formatter.feature({
  "name": "B2B - Work order",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@B2B_WO_Calculate_SLA"
    }
  ]
});
formatter.scenarioOutline({
  "name": "calculate SLA for 10h and verify Estimated ready time",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the OneWorkflow login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user logs in with valid user and password",
  "keyword": "And "
});
formatter.step({
  "name": "user successfully logged in to OneWorkflow and agent console should be displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on create work order",
  "keyword": "When "
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters title as \"\u003ctitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user selects request type as \"Maintenance\" on work order page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters description as \"\u003cDescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects priority as \"Info\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "name": "user adds CI \"\u003cCIName\u003e\" to the ticket with impact level \"Degradation of Service\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on apply BtwoB button",
  "keyword": "When "
});
formatter.step({
  "name": "user should see assigned profile as \"\u003cAssignmentProfile\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects SLA class as \"\u003cSLA Class\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user validates estimated ready time is updated for 10 hours",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "title",
        "Description",
        "CIName",
        "AssignmentProfile",
        "Manufacturer",
        "SLA Class"
      ]
    },
    {
      "cells": [
        "B2B Automated Test - Finland Eltel",
        "B2B Automation, Finland, Eltel",
        "FI_LTECell_Valpe4H",
        "Eltel - FS - FIN - B2B",
        "Nokia",
        "10 Hours repair time (FI\u003dA1)"
      ]
    }
  ]
});
formatter.scenario({
  "name": "calculate SLA for 10h and verify Estimated ready time",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@B2B_WO_Calculate_SLA"
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
  "keyword": "And "
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
  "name": "user clicks on create work order",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsCreateMenuAs()"
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
  "name": "user enters title as \"B2B Automated Test - Finland Eltel\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userEntersTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Maintenance\" on work order page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userSelectsRequestTypeAsOnWorkOrderPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"B2B Automation, Finland, Eltel\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects priority as \"Info\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsPriorityAs(String)"
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
  "name": "user adds CI \"FI_LTECell_Valpe4H\" to the ticket with impact level \"Degradation of Service\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userAddsCIToTheTicketWithImpactLevel(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnTicketRefreshButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on apply BtwoB button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userClicksOnApplyBBButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see assigned profile as \"Eltel - FS - FIN - B2B\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeAssignedProfileAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects SLA class as \"10 Hours repair time (FI\u003dA1)\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userSelectsSLAClassAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates estimated ready time is updated for 10 hours",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesEstimatedReadyTimeIsUpdatedForHours(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [22/08/2020 01:44:36] but found [2020-08-22T01:44:36]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat steps.OWF_WorkOrderPageSteps.userValidatesEstimatedReadyTimeIsUpdatedForHours(OWF_WorkOrderPageSteps.java:122)\r\n\tat ✽.user validates estimated ready time is updated for 10 hours(features/Automation/Regression/B2B/B2B_Calculate_SLA.feature:22)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "error_message": "cucumber.runtime.CucumberException: java.io.IOException: Failed to create directory C:\\Users\\mahesh%20vaddegani\\Documents\\oneworkflow-automation\\ExtentReports\\Screenshots\\Screenshots_20200821_154346\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter.createReportFileOutputStream(ExtentCucumberAdapter.java:225)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter.writeBytesToURL(ExtentCucumberAdapter.java:213)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter.handleEmbed(ExtentCucumberAdapter.java:197)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter.access$400(ExtentCucumberAdapter.java:37)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter$6.receive(ExtentCucumberAdapter.java:97)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter$6.receive(ExtentCucumberAdapter.java:94)\r\n\tat cucumber.runner.AbstractEventPublisher.send(AbstractEventPublisher.java:45)\r\n\tat cucumber.runner.AbstractEventBus.send(AbstractEventBus.java:9)\r\n\tat cucumber.runner.TimeServiceEventBus.send(TimeServiceEventBus.java:3)\r\n\tat cucumber.runner.ThreadLocalRunnerSupplier$SynchronizedEventBus.send(ThreadLocalRunnerSupplier.java:90)\r\n\tat cucumber.runner.ThreadLocalRunnerSupplier$LocalEventBus.send(ThreadLocalRunnerSupplier.java:63)\r\n\tat cucumber.runner.Scenario.embed(Scenario.java:58)\r\n\tat cucumberHooks.Hooks.Teardown(Hooks.java:28)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:73)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\nCaused by: java.io.IOException: Failed to create directory C:\\Users\\mahesh%20vaddegani\\Documents\\oneworkflow-automation\\ExtentReports\\Screenshots\\Screenshots_20200821_154346\r\n\tat extentreports.cucumber.adapter.URLOutputStream.ensureParentDirExists(URLOutputStream.java:56)\r\n\tat extentreports.cucumber.adapter.URLOutputStream.\u003cinit\u003e(URLOutputStream.java:36)\r\n\tat extentreports.cucumber.adapter.URLOutputStream.\u003cinit\u003e(URLOutputStream.java:26)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter.createReportFileOutputStream(ExtentCucumberAdapter.java:223)\r\n\t... 51 more\r\n",
  "status": "failed"
});
});