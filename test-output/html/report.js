$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/PLAZA/CRM/CRM_ResourceRequest.feature");
formatter.feature({
  "name": "Plaza CRM form test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CRM_ResourceRequest"
    }
  ]
});
formatter.scenario({
  "name": "user validates information sent to OW from Plaza",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CRM_ResourceRequest"
    }
  ]
});
formatter.step({
  "name": "user is on the Plaza login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Plaza_LoginPageSteps.userIsOnThePlazaLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username \"testauto\" and password as \"test123\" and clicks on login",
  "keyword": "When "
});
formatter.match({
  "location": "Plaza_LoginPageSteps.userEntersUsernameAndPasswordAsAndClicksOnLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the plaza home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userShouldSeeThePlazaHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on plaza portal",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnPlazaPortal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Products \u0026 Services",
  "keyword": "When "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnProductsServices()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on IT Infrastructure dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnITInfrastructureDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on application under IT Infrastructure dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnApplicationUnderITInfrastructureDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on show more button",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnShowMoreButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"CRM\" pebble",
  "keyword": "When "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnPebble(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see CRM form",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userShouldSeeCRMForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects role dropdown as \"Application Operation Engineer\"",
  "keyword": "When "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userSelectsRoleDropdownAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects service request name as \"Resource Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userSelectsServiceRequestNameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters CRM resource request as \"Test26 CRM/Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userEntersCRMResourceRequestAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters CRM  resource request planned start date as current date",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userEntersCRMResourceRequestPlannedStartDateAsCurrentDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters CRM resource request planned end date as current date",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userEntersCRMResourceRequestPlannedEndDateAsCurrentDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters CRM resource request description as \"Test26 CRM/Description\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userEntersCRMResourceRequestDescriptionAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters additional comments as \"Test26 CRM/AC\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userEntersAdditionalCommentsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Submit\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets plaza request id",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userGetsPlazaRequestId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on plaza request id",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnPlazaRequestId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see service request form",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userShouldSeeServiceRequestForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens new tab",
  "keyword": "When "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userOpensNewTab()"
});
formatter.result({
  "status": "passed"
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
  "name": "user selects search menu as \"Open Search Form:Work Order\"",
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
  "name": "user enters plaza request id in the source id field",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userEntersPlazaRequestIdInTheSourceIdField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks Search on ticket search",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksSearchOnTicketSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see plaza ticket",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeePlazaTicket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates source field as \"PLAZA\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesSourceFieldAs(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [PLAZA] but found []\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat steps.OWF_WorkOrderPageSteps.userValidatesSourceFieldAs(OWF_WorkOrderPageSteps.java:253)\r\n\tat ✽.user validates source field as \"PLAZA\"(features/Automation/PLAZA/CRM/CRM_ResourceRequest.feature:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user validates title field as \"Service Request | CRM\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesPdbTitleFieldAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates CRM description same as plaza",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesCRMDescriptionSameAsPlaza()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on owner under sections",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnOwnerUnderSections()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on assignment under sections",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAssignmentUnderSections()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates owner profile as \"PLAZA\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesOwnerProfileAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates owner as \"PLAZA\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesOwnerAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see assigned profile as \"CRM\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeAssignedProfileAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Interested Parties\" tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates \"PLAZA\" is listed as an interested party",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesIsListedAsAnInterestedParty(String)"
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
  "name": "user changes status to \"Cleared\" on work order page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userChangesStatusToOnWorkOrderPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects completion code as \"Success\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userSelectsCompletionCodeAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Schedule\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters schedule end as current date",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userEntersScheduleEndAsCurrentDate()"
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
  "name": "user validates ticket status as \"Cleared\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user changes status to \"Closed\" on work order page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userChangesStatusToOnWorkOrderPage(String)"
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
  "name": "user validates ticket status as \"Closed\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user switches to window 0",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on main page refresh",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnMainPageRefresh()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates plaza request has completed",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userValidatesPlazaRequestHasCompleted()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//img[@alt\u003d\u0027Menu for Nav-Username\u0027]/..\"}\n  (Session info: chrome\u003d89.0.4389.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-P3NRUGT\u0027, ip: \u002710.85.242.87\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\MAHESH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:59737}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9de63def0c3883bf66a92e7378653444\n*** Element info: {Using\u003dxpath, value\u003d//img[@alt\u003d\u0027Menu for Nav-Username\u0027]/..}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pageObjects.BasePage.selectMainMenu(BasePage.java:229)\r\n\tat pageObjects.OWF_AgentConsolePage.clickNavUserMenu(OWF_AgentConsolePage.java:674)\r\n\tat cucumberHooks.Hooks.Teardown(Hooks.java:37)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:73)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
});
});