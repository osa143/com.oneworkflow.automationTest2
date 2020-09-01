$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/Regression/Change/E2E_Standard_Change_(Internal Initiator).feature");
formatter.feature({
  "name": "E2E standard change internal initiator",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@E2E_Standard_Change_Internal_Initiator"
    },
    {
      "name": "@Change"
    }
  ]
});
formatter.scenario({
  "name": "E2E standard change internal initiator",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@E2E_Standard_Change_Internal_Initiator"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//img[@alt\u003d\u0027Menu for Create\u0027]/..\"}\n  (Session info: chrome\u003d84.0.4147.135)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-I92010A\u0027, ip: \u0027192.168.0.228\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.135, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\h_smi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50435}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 39cc9dd84300d94ea1e53060c552af30\n*** Element info: {Using\u003dxpath, value\u003d//img[@alt\u003d\u0027Menu for Create\u0027]/..}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pageObjects.BasePage.selectMainMenu(BasePage.java:192)\r\n\tat pageObjects.OWF_AgentConsolePage.clickCreateMenu(OWF_AgentConsolePage.java:484)\r\n\tat steps.OWF_AgentConsolePageSteps.userClicksOnCreateChangeRecord(OWF_AgentConsolePageSteps.java:191)\r\n\tat ✽.user clicks on create change record(features/Automation/Regression/Change/E2E_Standard_Change_(Internal Initiator).feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks save button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error message should display as \"Please fill up all the mandatory fields in the Details Panel to create a Change Request. (ARERR 10000)\" on change record page",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.errorMessageShouldDisplayAsOnChangeRecordPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects request type as \"Standard Change\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsRequestTypeAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates \"Template*\" is mandatory",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesIsMandatory(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects template as \"All:IT:Other:TEST TEMPLATE [UAT] - Standard Change\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsTemplateAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Title is readonly",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesTitleIsReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Request Category is readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesRequestCategoryIsReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Description* isn\u0027t readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesDescriptionIsnTReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Reason is readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesReasonIsReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Priority is readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesPriorityIsReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Implementation is readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesImplementationIsReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Test Plan is readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesTestPlanIsReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Rollback is readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesRollbackIsReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks save button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "multiple error messages should appear with red boarder around fields",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.multipleErrorMessagesShouldAppearWithRedBoarderAroundFields()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"CI B2\" in the change builder field",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersInTheChangeBuilderField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates \"Change Builder\" button is present",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters start time as 10 minutes fast from current sweden time",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersStartTimeAsMinutesFastFromCurrentSwedenTime(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters end time as 16 minutes fast from current sweden time",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersEndTimeAsMinutesFastFromRequestStartTime(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters impact duration as \"5\" minutes",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersImpactDurationAsMinutes(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters description as \"Regression - Change Management Process\"",
  "keyword": "Then "
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
  "name": "user waits 5 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"Ticket Priority is set to Info. Request Status is set to New. \" on row 2",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAsOnRow(String,int)"
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
  "name": "an error message should appear: \"Please select at least one country of impact for this change. (ARERR 10000)\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.anErrorMessageShouldAppear(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on norway checkbox under affected BU\u0027s",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnNorwayCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Send button and closes warning message",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSendButtonAndClosesWarningMessage()"
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
  "name": "user adds CI \"SE_STN_100042_S_S_M3\" to change ticket with impact level \"No Impact\"",
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
  "name": "user clicks \"Interested Parties\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksTab(String)"
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
  "name": "user should see new email \"Test123xxx@Test123xxx.com\" added in \"Email Address\" in row 2",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userShouldSeeNewEmailAddedInInRow(String,String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on send button and clicks yes on warning window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSendButtonAndClicksYesOnWarningWindow()"
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
  "name": "user validates owner as \"Change Manager\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesOwnerAs(String)"
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
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Request Status has changed from Assigned to Scheduled. \" on row 1",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAsOnRow(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user waits for 1 minutes",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userWaitsForMinutes(int)"
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
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Actual Start has changed from  UTC to 2019-09-05 10:15:00 UTC. Request Status has changed from Scheduled to Implementation.\" on row 2",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAsOnRow(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Description* isn\u0027t readonly",
  "keyword": "And "
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
  "name": "user clicks on ticket refresh button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnTicketRefreshButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user waits 3 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates send button is disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesSendButtonIsDisabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user tries to Ack the ticket but its shouldn\u0027t allow",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userTriesAckTheTicketButItsShouldnTAllow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates ack button is disabled",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesAckButtonIsDisabled()"
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
  "name": "user validates CI Search is disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesCISearchIsDisabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates save is enabled",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesSaveIsEnabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user waits for 5 minutes",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userWaitsForMinutes(int)"
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
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Actual Impact has changed from  to No Impact. Actual End has changed from  UTC to 2019-09-05 10:21:00 UTC. Completed Code has changed from  to Successful. Request Status has changed from Implementation to Completed. \" on row 2",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAsOnRow(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user waits for 5 minutes",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userWaitsForMinutes(int)"
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
  "name": "user clicks on timeline tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnTimelineTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Completed Code has changed from Successful to Completed Successfully. Request Status has changed from Completed to Closed. \" on row 1",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAsOnRow(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});