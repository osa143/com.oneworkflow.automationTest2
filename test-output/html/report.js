$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/Regression/Change/SAO_453_Missing_Interested_Party_Types.feature");
formatter.feature({
  "name": "SAO-453 - Missing Interested Party Types (ISO, ISM...)",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SAO_453"
    }
  ]
});
formatter.scenario({
  "name": "SAO-453 - Missing Interested Party Types (ISO, ISM...)",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SAO_453"
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
  "name": "user logs in with valid username \"Change_Automation_8\" and password as \"Test@1234\"",
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
  "name": "user selects request type as \"Standard Change\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsRequestTypeAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects template as \"All:IT:Other:TEST TEMPLATE [UAT] - Standard Change\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsTemplateAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters as \"Automation Test\" in service and customer impact",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersAsInServiceAndCustomerImpact(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters request start time as 10 minutes past from \"Europe/London\" timezone \"MM/dd/yyyy HH:mm:ss\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersRequestStartTimeAsMinutesPastFromTimezoneFormat(int,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters request end time as 30 minutes past from \"Europe/London\" timezone \"MM/dd/yyyy HH:mm:ss\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersRequestEndTimeAsMinutesPastFromTimezoneFormat(int,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters impact duration as \"8\" minutes",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersImpactDurationAsMinutes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"Regression - Change Management Process\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Testing\" in the change builder field",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEnterInTheChangeBuilderField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Diagnosis\" tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds CI \"One Workflow\" to change ticket with impact level \"No Impact\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userAddsCIToChangeTicketWithImpactLevel(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "CI should be listed and displayed under the Diagnosis tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.ciShouldBeListedAndDisplayedUnderTheDiagnosisTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Send button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSendButton()"
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
  "name": "user enters as \"test\" in Change Builder field",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersAsInChangeBuilderField(String)"
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
  "name": "user waits 4 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates multiple options \"Additional Access:Change Builder:Change Initiator:Contact:Custom1:Custom2:Requested By:Requested For:Solution Manager:Solution Owner:Vendor:(clear)\" should be available in Type dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesMultipleOptionsShouldBeAvailableInTypeDropdown(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d85.0.4183.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-6FQK1D6\u0027, ip: \u002710.85.242.43\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\jlm97\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54639}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 214ccf2f9caccce6559e92c812a32848\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:166)\r\n\tat pageObjects.BasePage.getDropdownValues(BasePage.java:260)\r\n\tat pageObjects.BasePage.verifyDropdownValues(BasePage.java:902)\r\n\tat pageObjects.OWF_ChangeRecordPage.verifyInterestedPartiesTypes(OWF_ChangeRecordPage.java:103)\r\n\tat steps.OWF_ChangeRecordPageSteps.userValidatesMultipleOptionsShouldBeAvailableInTypeDropdown(OWF_ChangeRecordPageSteps.java:972)\r\n\tat ✽.user validates multiple options \"Additional Access:Change Builder:Change Initiator:Contact:Custom1:Custom2:Requested By:Requested For:Solution Manager:Solution Owner:Vendor:(clear)\" should be available in Type dropdown(features/Automation/Regression/Change/SAO_453_Missing_Interested_Party_Types.feature:30)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user selects type as \"Change Builder\" under interested parties",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.userSelectsTypeAsUnderInterestedParties(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user right clicks on CI \"\" and clears impact for all CI\u0027s",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userRightClicksOnCIAndClearsImpactForAllCIS(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"Change_Automation_3\" in login name plus field",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.userEntersInLoginNamePlusField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on search under add interested party",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.userClicksOnSearchUnderAddInterestedParty()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user highlights user \"Change_Automation_3\" under interested parties",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userHighlightsUserUnderInterestedParties(String)"
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
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});