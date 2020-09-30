$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/Regression/Change/E2E_Normal_Change_(Internal Initiator).feature");
formatter.feature({
  "name": "Internal Normal Change E2E",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@E2E_Normal_Change_Internal_Initiator"
    },
    {
      "name": "@Change"
    }
  ]
});
formatter.scenario({
  "name": "Internal user processes a normal change ticket",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@E2E_Normal_Change_Internal_Initiator"
    },
    {
      "name": "@Change"
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks save button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message should display as \"Please fill up all the mandatory fields in the Details Panel to create a Change Request. (ARERR 10000)\" on change record page",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.errorMessageShouldDisplayAsOnChangeRecordPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Regression - Change Management Process\" in the implementation field",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersInTheImplementationField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Regression - Change Management Process\" in the test plan field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersInTheTestPlanField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Regression - Change Management Process\" in the rollback field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersInTheRollbackField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Regression - Change Management Process\" in the communication plan field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersInTheCommunicationPlanField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Regression - Change Management Process\" in the ver of functionality field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersInTheVerOfFunctionalityField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Regression - Change Management Process\" in the risk description field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersInTheRiskDescriptionField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks save button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple error messages should appear with red boarder around fields",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.multipleErrorMessagesShouldAppearWithRedBoarderAroundFields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Normal Change\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsRequestTypeAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects title as \"Mobile:CS Core (Voice)\" on Change record page",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsTitleAsOnChangeRecordPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request category as \"Software Installation\" on change record page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsRequestCategoryAsOnChangeRecordPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - Automated Test for Normal Change (Internal Initiator)\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters reason field as \"Regression\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersReasonFieldAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects priority as \"Critical\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsPriorityAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Privacy Data: Just Testing\" in the change builder field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersInTheChangeBuilderField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates change builder button is present",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesButtonIsPresent()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.id: //img[@alt\u003d\u0027Editor for Change Builder+*\u0027] (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat pageObjects.BasePage.findElement(BasePage.java:55)\r\n\tat pageObjects.BasePage.verifyElementIsDisplayed(BasePage.java:59)\r\n\tat pageObjects.OWF_ChangeRecordPage.verifyChangeBuilderButtonIsDisplayed(OWF_ChangeRecordPage.java:173)\r\n\tat steps.OWF_ChangeRecordPageSteps.userValidatesButtonIsPresent(OWF_ChangeRecordPageSteps.java:984)\r\n\tat ✽.user validates change builder button is present(features/Automation/Regression/Change/E2E_Normal_Change_(Internal Initiator).feature:42)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#\\/\\/img\\[\\@alt\\\u003d\\\u0027Editor\\ for\\ Change\\ Builder\\+\\*\\\u0027\\]\"}\n  (Session info: chrome\u003d85.0.4183.121)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-P3NRUGT\u0027, ip: \u002710.85.241.69\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\MAHESH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:55768}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 03f9fcebc0f403512afae5752df1bb89\n*** Element info: {Using\u003did, value\u003d//img[@alt\u003d\u0027Editor for Change Builder+*\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat pageObjects.BasePage.findElement(BasePage.java:55)\r\n\tat pageObjects.BasePage.verifyElementIsDisplayed(BasePage.java:59)\r\n\tat pageObjects.OWF_ChangeRecordPage.verifyChangeBuilderButtonIsDisplayed(OWF_ChangeRecordPage.java:173)\r\n\tat steps.OWF_ChangeRecordPageSteps.userValidatesButtonIsPresent(OWF_ChangeRecordPageSteps.java:984)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:73)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters as \"Test Data - Ignore Ticket\" in service and customer impact",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersAsInServiceAndCustomerImpact(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters start time as 24 hours fast from current sweden time in \"MM/dd/yyyy HH:mm:ss\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersStartTimeAsHoursFastFromCurrentSwedenTimeInFormat(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters end time as 28 hours fast from current sweden time in \"MM/dd/yyyy HH:mm:ss\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersEndTimeAsHoursFastFromCurrentSwedenTimeInFormat(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters impact duration as \"45\" minutes",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersImpactDurationAsMinutes(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects estimated impact dropdown as \"Degradation of Service\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsEstimatedImpactDropdownAsNoImpact(String)"
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
  "name": "user waits",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userWaits()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates availability of tabs \"Timeline:Diagnosis:Risk:Schedule:Interested Parties:Approval:Notifications:Linked Items:Work Orders:Service Level:Related Project:Service Info:Telenor\" on change record page",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesAvailabilityOfTabsOnChangeRecordPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on owner under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnOwnerUnderSections()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates owner profile as \"Change Initiator-Internal\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesOwnerProfileAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates owner as \"ChangeInitiatorInternal1\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesOwnerAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Send button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSendButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error message should display as \"You must provide an answer to all the risk question outlined in the Risk tab before Send (ARERR 10000)\" on change record page",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.errorMessageShouldDisplayAsOnChangeRecordPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Risk tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRiskTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user gets current risk score value",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userGetsCurrentRiskScoreValue()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user answers all risk questions as below",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userAnswersAllRiskQuestionsAsBelow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects answer as \"Impact to other systems/technologies are unclear\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsAnswerAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects answer as \"No\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsAnswerAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects answer as \"Tested successfully, this is a pilot\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsAnswerAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects answer as \"Yes (outcome of the change can be instantly verified)\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsAnswerAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects answer as \"Yes\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsAnswerAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects answer as \"Simple\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsAnswerAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects last answer as \"No\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsLastAnswerAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates risk score gets updated",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesRiskScoreGetsUpdated()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Send button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSendButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "an error message should appear: \"Please select at least one country of impact for this change. (ARERR 10000)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.anErrorMessageShouldAppear(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on estonia checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnEstoniaCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Send button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSendButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error message should display as \"You must select at least one CI in the Diagnosis Tab (ARERR 10000)\" on change record page",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.errorMessageShouldDisplayAsOnChangeRecordPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Diagnosis\" tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user adds CI \"FI_MGW_SMG03TRE\" to change ticket with impact level \"Loss of Service\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userAddsCIToChangeTicketWithImpactLevel(String,String)"
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
  "name": "user switches to default",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSwitchesToDefault()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "CI should be listed and displayed under the Diagnosis tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.ciShouldBeListedAndDisplayedUnderTheDiagnosisTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user right clicks on CI \"FI_MGW_SMG03TRE\" and selects \"Show:Location Details\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userRightClicksOnCIAndSelects(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Location Details are shown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesLocationDetailsAreShown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates availability of tabs \"Details:Relationships\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesAvailabilityOfTabs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Relationships\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on refresh button under related CIs",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnRefreshButtonUnderRelatedCIs()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates CIs are shown under related CI table",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesCIsAreShownUnderRelatedCITable()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the close button on location details window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnTheCloseButtonOnLocationDetailsWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Show CR Matching button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnShowCRMatchingButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see Show CR Matching table appear",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userShouldSeeShowCRMatchingTableAppear()"
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
  "name": "user enters email address as \"Test123xxx@Test123xxx.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersEmailAddressAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on add email button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnAddEmailButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see new email \"Test123xxx@Test123xxx.com\" added in \"Email Address\" in row 1",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userShouldSeeNewEmailAddedInInRow(String,String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on add button under interested parties",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.userClicksOnAddButtonUnderInterestedParties()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user switches to frame",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToFrame()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates add interested parties form is shown",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesAddInterestedPartiesFormIsShown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects type as \"Additional Access\" under interested parties",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.userSelectsTypeAsUnderInterestedParties(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on radio button user",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.userClicksOnRadioButtonUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters organization name plus as \"ANS\" and searches",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersOrganizationNamePlusAsAndSearches(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects Agile Network Systems and clicks use button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsAndClicksUseButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates organization as \"Agile Network Systems\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesOrganizationAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on cancel button on interested parties window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnCancelButtonOnInterestedPartiesWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates finland as affected BU",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesFinlandAsAffectedBU()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Send button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSendButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates ticket status as \"Assigned\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
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
  "name": "user should see assigned profile as \"DC CS Core (Voice)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeAssignedProfileAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates owner profile as \"Change Manager\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesOwnerProfileAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates owner as \"ChangeManager\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesOwnerAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Timeline\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Description* isn\u0027t readonly",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesDescriptionIsnTReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Project Code isn\u0027t readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesProjectCodeIsnTReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Change Builder+* isn\u0027t readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesChangeBuilderIsnTReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Communication Plan* isn\u0027t readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesCommunicationPlanIsnTReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Ver of Functionality* isn\u0027t readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesVerOfFunctionalityIsnTReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Risk Description* isn\u0027t readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesRiskDescriptionIsnTReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Timeline Text entry isn\u0027t readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesTimelineTextEntryIsnTReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Assignee Profile has changed from  to DC CS Core (Voice). Request Status has changed from New to Assigned.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user gets ticket value",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userGetsTicketValue()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user waits 60 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
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
  "name": "user should see \"Assignment-Profile\" email update",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userShouldSeeEmailUpdate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logsOut from One workflow",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userLogsOutFromOneWorkflow()"
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
  "name": "user logs in with valid username \"DC CS Core (Voice)_auto\" and password as \"Test@1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userLogsInWithValidUsernameAndPasswordAs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user successfully logged in to OneWorkflow and agent console should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSuccessfullyLoggedInToOneworkflowAndAgentConsoleShouldBeDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on more filters button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnMoreFiltersButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Core\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters title as \"Mobile | CS Core (Voice)\" on more filter window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userEntersTitleAsOnMoreFilterWindow(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects status as \"Assigned\" on user more filters window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsStatusAsOnUserMoreFiltersWindow(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on apply button on user more filters window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnApplyButtonOnUserMoreFiltersWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"CR\" tickets with \"Status\" of \"Assigned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userShouldSeeTicketsWithOf(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects search menu as \"Open Search Form:Change Record/Project/Freeze\"",
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
  "name": "user enters ticket previously created and searches",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersTicketPreviouslyCreatedAndSearches()"
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
  "name": "user validates ticket status as \"Analysis\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates last ack by field has data present",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesLastAckByFieldHasDataPresent()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"DC CS Core (Voice)_auto\" in assignee",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInAssignee(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Show CR Matching button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnShowCRMatchingButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see Show CR Matching table appear",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userShouldSeeShowCRMatchingTableAppear()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters description as \"- Additional Information\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters reason field as \"New Reason\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersReasonFieldAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on details under sections",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDetailsUnderSections()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"New Communication plan\" in the communication plan field",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersInTheCommunicationPlanField(String)"
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
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Description has changed from TEST TICKET PLEASE IGNORE - Automated Test for Normal Change (Internal Initiator) to - Additional Information. \"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
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
  "name": "user enters start time as 168 hours fast from current sweden time",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersStartTimeAsHoursFastFromCurrentSwedenTime(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters end time as 172 hours fast from current sweden time",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersEndTimeAsHoursFastFromCurrentSwedenTime(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters request start time 168 hours ahead of current date",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersRequestStartTimeHoursAheadOfCurrentDate(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters request end time 172 hours ahead of current date",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersRequestEndTimeHoursAheadOfCurrentDate(int)"
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
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Requested Start has changed\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Schedule\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user gets the schedule time values",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userGetsTheScheduleTimeValues()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user right clicks on primary CI and selects \"Impact:Update\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userRightClicksOnPrimaryCIAndSelects(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user switches to frame",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToFrame()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters impact from time as same value as request start time on impact details bulk update window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersImpactFromTimeAsSameValueAsRequestStartTimeOnImpactDetailsBulkUpdateWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters impact to time as same value as request end time on impact details bulk update window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersImpactToTimeAsSameValueAsRequestEndTimeOnImpactDetailsBulkUpdateWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks confirm checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksConfirmCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on bulk update save button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnBulkUpdateSaveButton()"
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
  "name": "user enters email address as \"Test2@Test2.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersEmailAddressAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on add email button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnAddEmailButton()"
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
  "name": "user should see \"Acknowledged\" email update",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userShouldSeeEmailUpdate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user changes status to \"Approval Requested\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userChangeStatusTo(String)"
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
  "name": "user validates ticket status as \"Approval Requested\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates availability of tabs \"Approval\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesAvailabilityOfTabs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user waits 2 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logsOut from One workflow",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userLogsOutFromOneWorkflow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
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
  "name": "user logs in with valid username \"ChangeManager1_Automation\" and password as \"Test@1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userLogsInWithValidUsernameAndPasswordAs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user successfully logged in to OneWorkflow and agent console should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSuccessfullyLoggedInToOneworkflowAndAgentConsoleShouldBeDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on more filters button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnMoreFiltersButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Core\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects status as \"Approval Requested\" on user more filters window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsStatusAsOnUserMoreFiltersWindow(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on apply button on user more filters window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnApplyButtonOnUserMoreFiltersWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"CR\" tickets with \"Status\" of \"Approval Requested\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userShouldSeeTicketsWithOf(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects search menu as \"Open Search Form:Change Record/Project/Freeze\"",
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
  "name": "user enters ticket previously created and searches",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersTicketPreviouslyCreatedAndSearches()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on owner under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnOwnerUnderSections()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates owner profile as \"Change Manager\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesOwnerProfileAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects owner as \"ChangeManager1_Automation\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsOwnerAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Show CR Matching button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnShowCRMatchingButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see Show CR Matching table appear",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userShouldSeeShowCRMatchingTableAppear()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user changes status to \"Analysis\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userChangeStatusTo(String)"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - New Description\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "change should also be reflected in the timeline as \"Description has changed from TEST TICKET PLEASE IGNORE - Automated Test for Normal Change (Internal Initiator) - Additional info to TEST TICKET PLEASE IGNORE - New Description.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
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
  "name": "user clicks on last risk question selects last answer as \"Yes\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnLastRiskQuestionSelectsLastAnswerAs(String)"
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
  "name": "user changes status to \"Approval Requested\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userChangeStatusTo(String)"
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
  "name": "user clicks on request thats pending approval",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnRequestThatsPendingApproval()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on view button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnViewButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user switches to frame",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToFrame()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"Change can be approved right away\" in comments field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersInCommentsField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on approve button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnApproveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user switches to window 2",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnTicketRefreshButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates ticket status as \"Approved\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
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
  "name": "user should see \"Approved Change-Builder\" email update",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userShouldSeeEmailUpdate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"Ticket approved by ChangeManager1_Automation in date: \"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user changes status to \"Schedule Requested\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userChangeStatusTo(String)"
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
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Request Status has changed from Approved to Schedule Requested.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates ticket status as \"Scheduled\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on assignment under sections",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAssignmentUnderSections()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see assigned profile as \"Change Implementation Control\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeAssignedProfileAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"ChangeImplementationControl1\" in assignee",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInAssignee(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on owner under sections",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnOwnerUnderSections()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates owner profile as \"Change Manager\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesOwnerProfileAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates owner as \"ChangeManager1_Automation\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesOwnerAs(String)"
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
  "name": "user should see \"Assignment-user\" email update",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userShouldSeeEmailUpdate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logsOut",
  "keyword": "And "
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
  "name": "user logs in with valid username \"ChangeImplementationControl1\" and password as \"Telia@1234\"",
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
  "name": "user clicks on more filters button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnMoreFiltersButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Core\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects status as \"Scheduled\" on user more filters window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsStatusAsOnUserMoreFiltersWindow(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on apply button on user more filters window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnApplyButtonOnUserMoreFiltersWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"CR\" tickets with \"Status\" of \"Scheduled\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userShouldSeeTicketsWithOf(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects search menu as \"Open Search Form:Change Record/Project/Freeze\"",
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
  "name": "user enters ticket previously created and searches",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersTicketPreviouslyCreatedAndSearches()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user changes status to \"Implementation\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userChangeStatusTo(String)"
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
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Actual Start has changed from  UTC to 2019-07-26 13:09:51 UTC. Request Status has changed from Scheduled to Implementation. \"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
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
  "name": "user validates actual start time is updated",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesActualStartTimeIsUpdated()"
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
  "name": "user should see \"Implementation\" email update",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userShouldSeeEmailUpdate(String)"
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
  "name": "user enters \"Successful - no issues during implementation\" in the timeline text box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersInTheTimelineTextBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on add button on timeline",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnAddButtonOnTimeline()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user changes status to \"Completed\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userChangeStatusTo(String)"
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
  "name": "error message should display as \"Required field (without a default) not specified : Actual Impact (ARERR 9424)\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.errorMessageShouldDisplayAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error message should display as \"Required field (without a default) not specified : Completed Code (ARERR 9424)\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.errorMessageShouldDisplayAs(String)"
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
  "name": "user validates actual end time is updated",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesActualEndTimeIsUpdated()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects actual impact as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsActualImpactAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects completed code as \"Successful\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsCompletedCodeAs(String)"
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
  "name": "error message should display as \"There are still outstanding active or pending impact records. Please clear them before clearing the request. (ARERR 999001210)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.errorMessageShouldDisplayAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user gets CI impact from time and impact to time",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userGetsCIImpactFromTimeAndImpactToTime()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user right clicks on primary CI and selects \"Impact:Clear\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userRightClicksOnPrimaryCIAndSelects(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on yes on CI warning window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnYesOnCIWarningWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates CI \"Impact Status\" is \"Inactive\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesCIImpactStatusIs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates CI impact from time and impact to time is updated",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesCIImpactFromTimeAndImpactToTimeIsUpdated()"
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
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Actual Impact has changed from  to No Impact. Actual End has changed from  UTC to 2019-07-26 13:23:51 UTC. Completed Code has changed from  to Successful. Request Status has changed from Implementation to Completed. \"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logsOut",
  "keyword": "And "
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
  "name": "user logs in with valid username \"ChangeManager1_Automation\" and password as \"Test@1234\"",
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
  "name": "user clicks on more filters button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnMoreFiltersButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Core\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects status as \"Completed\" on user more filters window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsStatusAsOnUserMoreFiltersWindow(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on apply button on user more filters window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnApplyButtonOnUserMoreFiltersWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"CR\" tickets with \"Status\" of \"Completed\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userShouldSeeTicketsWithOf(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects search menu as \"Open Search Form:Change Record/Project/Freeze\"",
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
  "name": "user enters ticket previously created and searches",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersTicketPreviouslyCreatedAndSearches()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user changes status to \"Closed\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userChangeStatusTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects resolved group as \"Change Manager\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsResolvedGroupAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects resolved person as \"ChangeManager1_Automation\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsResolvedPersonAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters review details as \"Random Notes\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersReviewDetailsAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects closure code as \"Test Ticket\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsClosureCodeAs(String)"
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
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Request Status has changed from Completed to Closed.\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "error_message": "cucumber.runtime.CucumberException: java.io.IOException: Failed to create directory C:\\Users\\mahesh%20vaddegani\\Documents\\oneworkflow-automation\\ExtentReports\\Screenshots\\Screenshots_20200930_152122\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter.createReportFileOutputStream(ExtentCucumberAdapter.java:225)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter.writeBytesToURL(ExtentCucumberAdapter.java:213)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter.handleEmbed(ExtentCucumberAdapter.java:197)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter.access$400(ExtentCucumberAdapter.java:37)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter$6.receive(ExtentCucumberAdapter.java:97)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter$6.receive(ExtentCucumberAdapter.java:94)\r\n\tat cucumber.runner.AbstractEventPublisher.send(AbstractEventPublisher.java:45)\r\n\tat cucumber.runner.AbstractEventBus.send(AbstractEventBus.java:9)\r\n\tat cucumber.runner.TimeServiceEventBus.send(TimeServiceEventBus.java:3)\r\n\tat cucumber.runner.ThreadLocalRunnerSupplier$SynchronizedEventBus.send(ThreadLocalRunnerSupplier.java:90)\r\n\tat cucumber.runner.ThreadLocalRunnerSupplier$LocalEventBus.send(ThreadLocalRunnerSupplier.java:63)\r\n\tat cucumber.runner.Scenario.embed(Scenario.java:58)\r\n\tat cucumberHooks.Hooks.Teardown(Hooks.java:28)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:73)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\nCaused by: java.io.IOException: Failed to create directory C:\\Users\\mahesh%20vaddegani\\Documents\\oneworkflow-automation\\ExtentReports\\Screenshots\\Screenshots_20200930_152122\r\n\tat extentreports.cucumber.adapter.URLOutputStream.ensureParentDirExists(URLOutputStream.java:56)\r\n\tat extentreports.cucumber.adapter.URLOutputStream.\u003cinit\u003e(URLOutputStream.java:36)\r\n\tat extentreports.cucumber.adapter.URLOutputStream.\u003cinit\u003e(URLOutputStream.java:26)\r\n\tat extentreports.cucumber.adapter.ExtentCucumberAdapter.createReportFileOutputStream(ExtentCucumberAdapter.java:223)\r\n\t... 51 more\r\n",
  "status": "failed"
});
});