$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/Regression/OW/ChangeITVAS/Copy_to_New_02_(CIs).feature");
formatter.feature({
  "name": "Copy to New 02 (CIs) [aR]",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Copy_to_New_02_CI"
    }
  ]
});
formatter.scenario({
  "name": "Copy to New 02 (CIs) [aR]",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Copy_to_New_02_CI"
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
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters expected alarms as \"Test Expected Alarms\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersExpectedAlarmsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters project code as \"Test Project Code\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersProjectCodeAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user creates change ticket with following details",
  "rows": [
    {
      "cells": [
        "RequestType",
        "Title",
        "RequestCategory",
        "Description",
        "Reason",
        "Priority",
        "ChangeBuilder",
        "Implementation",
        "TestPlan",
        "RollBack",
        "CommPlan",
        "VerOfFunctionality",
        "Risk",
        "ServiceCustomerImpact",
        "ImpactDuration",
        "EstimatedImpact"
      ]
    },
    {
      "cells": [
        "Normal Change",
        "IT:Mobile:Billing",
        "Cable splicing",
        "Correcting error",
        "none",
        "Major",
        "Closure from analysis",
        "New implementation",
        "Yes",
        "Not possible",
        "CommPlan",
        "Not possible",
        "No Risk",
        "Test ticket no impact",
        "5",
        "No Impact"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userCreatesChangeTicketWithFollowingDetails(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds CI \"One Workflow\" to change ticket with impact level \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userAddsCIToChangeTicketWithImpactLevel(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens copy to new option",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userOpensCopyToNewOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates confirmation for copy to new box is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesConfirmationForCopyToNewBoxIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes confirmation for copy to new by pressing x",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClosesConfirmationForCopyToNewByPressingX()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens copy to new option",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userOpensCopyToNewOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes confirmation for copy to new by pressing cancel button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClosesConfirmationForCopyToNewByPressingCancelButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens copy to new option",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userOpensCopyToNewOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click yes on copy to new popup",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClickYesOnCopyToNewPopup()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user waits 5 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
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
  "name": "user clicks on ticket refresh button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnTicketRefreshButton()"
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
  "name": "user switches to window 2",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on CTI details under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCTIDetailsUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on location under sections",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnLocationUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on owner under sections",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnOwnerUnderSections()"
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
  "name": "user clicks on On Hold under sections",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnOnHoldUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on vendor under sections",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnVendorUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks attachments under sections",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksAttachmentsUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on closure under sections",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnClosureUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates new CR ticket details are same as original CR ticket details",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesNewCRTicketDetailsAreSameAsOriginalCRTicketDetails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters request start time 24 hours ahead of current date",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersRequestStartTimeHoursAheadOfCurrentDate(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters request end time 192 hours ahead of current date",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersRequestEndTimeHoursAheadOfCurrentDate(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters impact duration as \"0\" Days",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersImpactDurationAsDays(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters impact duration as \"0\" hours",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersImpactDurationAsHours(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters impact duration as \"5\" minutes",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersImpactDurationAsMinutes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters impact duration as \"0\" seconds",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersImpactDurationAsSeconds(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters as \"Test\" in service and customer impact",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersAsInServiceAndCustomerImpact(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects estimated impact as \"No Impact\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsEstimatedImpactAs(String)"
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
  "name": "user validates primary ci as \"One Workflow\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesPrimaryCiAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates impact from time is same as request start time",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactFromTimeIsSameAsRequestStartTime()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.id: arid_WIN_0_700009083 (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat pageObjects.BasePage.findElement(BasePage.java:55)\r\n\tat pageObjects.BasePage.getAttributeValueById(BasePage.java:173)\r\n\tat pageObjects.OWF_CiSearchPage.getImpactFrom(OWF_CiSearchPage.java:399)\r\n\tat steps.OWF_CiSearchPageSteps.userValidatesImpactFromTimeIsSameAsRequestStartTime(OWF_CiSearchPageSteps.java:429)\r\n\tat ✽.user validates impact from time is same as request start time(features/Automation/Regression/OW/ChangeITVAS/Copy_to_New_02_(CIs).feature:50)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#arid_WIN_0_700009083\"}\n  (Session info: chrome\u003d88.0.4324.150)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-I92010A\u0027, ip: \u0027192.168.0.228\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.150, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\h_smi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61427}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ea942e61f7182992bec27547cf93f680\n*** Element info: {Using\u003did, value\u003darid_WIN_0_700009083}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat pageObjects.BasePage.findElement(BasePage.java:55)\r\n\tat pageObjects.BasePage.getAttributeValueById(BasePage.java:173)\r\n\tat pageObjects.OWF_CiSearchPage.getImpactFrom(OWF_CiSearchPage.java:399)\r\n\tat steps.OWF_CiSearchPageSteps.userValidatesImpactFromTimeIsSameAsRequestStartTime(OWF_CiSearchPageSteps.java:429)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:73)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user validates impact to time is same as request end time",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactToTimeIsSameAsEventEndTime()"
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
  "name": "user validates impact duration days as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesImpactDurationDaysAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates impact duration hours as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesImpactDurationHoursAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates impact duration minutes as \"5\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesImpactDurationMinutesAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates impact duration seconds as \"0\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesImpactDurationSecondsAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user opens copy to new option",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userOpensCopyToNewOption()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates confirmation message for copy to new is \"Change Request got one related CI\u0027s. Do you want to copy the CI across to the new request?\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesConfirmationMessageForCopyToNewIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user closes confirmation for copy to new by pressing cancel button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClosesConfirmationForCopyToNewByPressingCancelButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user opens copy to new option",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userOpensCopyToNewOption()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks no on copy to new popup",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksNoOnCopyToNewPopup()"
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
  "name": "user validates risk questions are not answered",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesRiskQuestionsAreNotAnswered()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Interested Parties\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates \"ChangeInitiatorInternal1\" is listed as an interested party",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesIsListedAsAnInterestedParty(String)"
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
  "name": "user validates version column has no entries",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesVersionColumnHasNoEntries()"
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
  "name": "user validates there are no sent notifications",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesThereAreNoSentNotifications()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on linked items tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnLinkedItemsTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Linked ID column as empty",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesColumnAs()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Work Orders\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Work Order column as empty",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesWorkOrderColumnAsEmpty()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Service Level\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates SLA Title column as empty",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesSLATITleColumnAsEmpty()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Related Project\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Change Project ID column as empty",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesChangeProjectIDColumnAsEmpty()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Service Info\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Channel column as empty",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesChannelColumnAsEmpty()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Telenor\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates ExternalTicketId Field as empty",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesExternalTicketIdFieldAsEmpty()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});