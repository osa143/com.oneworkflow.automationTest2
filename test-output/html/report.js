$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/PLAZA/Other/SAO-5957.feature");
formatter.feature({
  "name": "SAO-5957",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SAO-5957"
    },
    {
      "name": "@PLAZA"
    }
  ]
});
formatter.scenario({
  "name": "OP-000002113472 - Acknowledgment Not being sent even after creating reference",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SAO-5957"
    },
    {
      "name": "@PLAZA"
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
  "name": "user clicks on compute \u0026 operating system under IT Infrastructure dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnComputeOperatingSystemUnderITInfrastructureDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Join Server to TCAD\" pebble",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnPebble(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Exclusion from Endpoint Protection (SCEP) Antivirus\" form",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userShouldSeeForm(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects system name in haiti as \"1B\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userSelectsSystemNameInHaitiAs(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.id: s2id_sp_formfield_h2_name (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat pageObjects.BasePage.clickElement(BasePage.java:92)\r\n\tat pageObjects.plaza.Plaza_HomePage.selectSystemNameInHaiti(Plaza_HomePage.java:1152)\r\n\tat steps.plaza_steps.Plaza_HomePageSteps.userSelectsSystemNameInHaitiAs(Plaza_HomePageSteps.java:1928)\r\n\tat ✽.user selects system name in haiti as \"1B\"(features/Automation/PLAZA/Other/SAO-5957.feature:14)\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d85.0.4183.121)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-P3NRUGT\u0027, ip: \u002710.85.241.69\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\MAHESH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53643}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 44e7a1b577e63c2af556b50216df736b\n*** Element info: {Using\u003did, value\u003ds2id_sp_formfield_h2_name}\r\n\tat sun.reflect.GeneratedConstructorAccessor16.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:641)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:638)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat pageObjects.BasePage.clickElement(BasePage.java:92)\r\n\tat pageObjects.plaza.Plaza_HomePage.selectSystemNameInHaiti(Plaza_HomePage.java:1152)\r\n\tat steps.plaza_steps.Plaza_HomePageSteps.userSelectsSystemNameInHaitiAs(Plaza_HomePageSteps.java:1928)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:73)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user selects role dropdown as \"Application Operation Engineer\"",
  "keyword": "When "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userSelectsRoleDropdownAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters list of files and folders as \"Testing\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters list of file types as \"Test file types\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters list of processes as \"Test Processes\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user attaches any CI",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters additional comments as \"Test A/C\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userEntersAdditionalCommentsAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Submit\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user gets plaza request id",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userGetsPlazaRequestId()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on plaza request id",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnPlazaRequestId()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see service request form",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userShouldSeeServiceRequestForm()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user opens new tab",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userOpensNewTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on the OneWorkflow login page",
  "keyword": "Given "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userIsOnTheOneWorkflowLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs in with valid user and password",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userLogsInWithValidUserAndPassword()"
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
  "name": "user selects search menu as \"Open Search Form:Work Order\"",
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
  "name": "user enters plaza request id in the source id field",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userEntersPlazaRequestIdInTheSourceIdField()"
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
  "name": "user should see plaza ticket",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeePlazaTicket()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates source field as \"PLAZA\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesSourceFieldAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on CTI details under sections",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCTIDetailsUnderSections()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see incorrect CTI details",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d85.0.4183.121)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-P3NRUGT\u0027, ip: \u002710.85.241.69\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\MAHESH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53643}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 44e7a1b577e63c2af556b50216df736b\r\n\tat sun.reflect.GeneratedConstructorAccessor16.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat pageObjects.BasePage.takeScreenShotAsByteArray(BasePage.java:810)\r\n\tat cucumberHooks.Hooks.Teardown(Hooks.java:24)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:73)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
});
});