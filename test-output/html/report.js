$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/Regression/B2B/B2B_Test_Cases.feature");
formatter.feature({
  "name": "B2B Cancel work order to field service before work is carried out",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@B2B_Test_Cases"
    }
  ]
});
formatter.scenarioOutline({
  "name": "user can cancel a work order sent to a field service before any work is carried out",
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
  "name": "user gets ticket value",
  "keyword": "And "
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
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on CTI details under sections",
  "keyword": "When "
});
formatter.step({
  "name": "user validates manufacturer as \"\u003cManufacturer\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on \"B2B Dispatch\" tab",
  "keyword": "When "
});
formatter.step({
  "name": "user enters header value as \"Test\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters message value as \"Automated Test\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on \"B2B Dispatch\" tab",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on outbound events refresh button",
  "keyword": "When "
});
formatter.step({
  "name": "user should see \"Assignment\" notification in outbound in row 1",
  "keyword": "Then "
});
formatter.step({
  "name": "user waits 59 secs",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on inbound events refresh button",
  "keyword": "When "
});
formatter.step({
  "name": "user should see \"BTA:OrderAcknowledgmentBySupplier\" notification in inbound in row \"\u003cAckRowNum\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on \"B2B Dispatch\" tab",
  "keyword": "When "
});
formatter.step({
  "name": "user should see WFM ticket ID",
  "keyword": "Then "
});
formatter.step({
  "name": "user validates Contact Name as \"\u003cContactName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Contact Telephone Number is present",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Contact Mail Address as \"\u003cContactMailAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects dispatch status as \"Cancel Requested\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters Cancel Requested Reason as \"TEST\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on outbound events refresh button",
  "keyword": "When "
});
formatter.step({
  "name": "user should see \"Withdrawn\" notification in outbound in row 2",
  "keyword": "Then "
});
formatter.step({
  "name": "user waits 59 secs",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on inbound events refresh button",
  "keyword": "When "
});
formatter.step({
  "name": "user should see \"BTA:OrderCancellation\" notification in inbound in row \"\u003cCancelRowNum\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "When "
});
formatter.step({
  "name": "user validates ticket status as \"Withdrawn\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on \"B2B Dispatch\" tab",
  "keyword": "When "
});
formatter.step({
  "name": "user double clicks and open withdrawn message",
  "keyword": "When "
});
formatter.step({
  "name": "new interface window should be opened",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on custom field tab and clicks on message field and opens it",
  "keyword": "And "
});
formatter.step({
  "name": "user should see message and withdrawn reason in message text field",
  "keyword": "Then "
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "When "
});
formatter.step({
  "name": "user validates all fields are read only and not editable",
  "keyword": "Then "
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
        "ContactName",
        "ContactMailAddress",
        "SLA Class",
        "AckRowNum",
        "CancelRowNum"
      ]
    },
    {
      "cells": [
        "B2B Automated Test - Sweden Transtema",
        "B2B Automation, Sweden, Transtema",
        "SE_LTECell_100895010",
        "Transtema2 - FS - SE - B2B",
        "Ericsson",
        "Transtema SOC",
        "support.tns@transtema.com",
        "118 Hour 5 days Cleanup correction time workdays",
        "2",
        "3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user can cancel a work order sent to a field service before any work is carried out",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@B2B_Test_Cases"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#username\\-id\"}\n  (Session info: chrome\u003d94.0.4606.61)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-6FQK1D6\u0027, ip: \u002710.85.242.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 94.0.4606.61, chrome: {chromedriverVersion: 94.0.4606.61 (418b78f5838ed..., userDataDir: C:\\Users\\jlm97\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61428}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 580ee632527b14c4900d5cec57f793df\n*** Element info: {Using\u003did, value\u003dusername-id}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pageObjects.OWF_LoginPage.enterUsername(OWF_LoginPage.java:13)\r\n\tat pageObjects.OWF_LoginPage.doLogin(OWF_LoginPage.java:26)\r\n\tat steps.OWF_LoginPageSteps.userLogsInWithValidUserAndPassword(OWF_LoginPageSteps.java:42)\r\n\tat ✽.user logs in with valid user and password(features/Automation/Regression/B2B/B2B_Test_Cases.feature:10)\r\n",
  "status": "failed"
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
  "name": "user clicks on create work order",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsCreateMenuAs()"
});
formatter.result({
  "status": "skipped"
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
  "name": "user enters title as \"B2B Automated Test - Sweden Transtema\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userEntersTitle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects request type as \"Maintenance\" on work order page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userSelectsRequestTypeAsOnWorkOrderPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters description as \"B2B Automation, Sweden, Transtema\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects priority as \"Info\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsPriorityAs(String)"
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
  "name": "user adds CI \"SE_LTECell_100895010\" to the ticket with impact level \"Degradation of Service\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userAddsCIToTheTicketWithImpactLevel(String,String)"
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
  "name": "user clicks on apply BtwoB button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userClicksOnApplyBBButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see assigned profile as \"Transtema2 - FS - SE - B2B\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeAssignedProfileAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects SLA class as \"118 Hour 5 days Cleanup correction time workdays\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userSelectsSLAClassAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on CTI details under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCTIDetailsUnderSections()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates manufacturer as \"Ericsson\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesManufacturerAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"B2B Dispatch\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters header value as \"Test\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userEntersHeaderValueAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters message value as \"Automated Test\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userEntersMessageValueAs(String)"
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
  "name": "user clicks on \"B2B Dispatch\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on outbound events refresh button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userClicksOnOutboundEventsRefreshButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Assignment\" notification in outbound in row 1",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeNotification(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user waits 59 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on inbound events refresh button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userClicksOnInboundEventsRefreshButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"BTA:OrderAcknowledgmentBySupplier\" notification in inbound in row \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeNotificationInInboundInRow(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnTicketRefreshButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"B2B Dispatch\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see WFM ticket ID",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeWFMTicketID()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Contact Name as \"Transtema SOC\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesContactNameAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Contact Telephone Number is present",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesContactTelephoneNumberIsPresent()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Contact Mail Address as \"support.tns@transtema.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesContactMailAddressAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects dispatch status as \"Cancel Requested\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userSelectsDispatchStatusAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters Cancel Requested Reason as \"TEST\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userEntersCancelRequestedReasonAs(String)"
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
  "name": "user clicks on outbound events refresh button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userClicksOnOutboundEventsRefreshButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Withdrawn\" notification in outbound in row 2",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeNotification(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user waits 59 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on inbound events refresh button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userClicksOnInboundEventsRefreshButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"BTA:OrderCancellation\" notification in inbound in row \"3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeNotificationInInboundInRow(String,String)"
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
  "name": "user validates ticket status as \"Withdrawn\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"B2B Dispatch\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user double clicks and open withdrawn message",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userDoubleClicksAndOpenWithdrawnMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "new interface window should be opened",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.newInterfaceWindowShouldBeOpened()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on custom field tab and clicks on message field and opens it",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userClicksOnCustomFieldTabAndClicksOnMessageFieldAndOpensIt()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see message and withdrawn reason in message text field",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeMessageAndWithdrawnReasonInMessageTextField()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates all fields are read only and not editable",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.userValidatesAllFieldsAreReadOnlyAndNotEditable()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/Regression/NewStructure/B2B/B2B_Test_Cases.feature");
formatter.feature({
  "name": "B2B Cancel work order to field service before work is carried out",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@B2B_Test_Cases"
    }
  ]
});
formatter.scenarioOutline({
  "name": "user can cancel a work order sent to a field service before any work is carried out",
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
  "name": "user gets ticket value",
  "keyword": "And "
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
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on CTI details under sections",
  "keyword": "When "
});
formatter.step({
  "name": "user validates manufacturer as \"\u003cManufacturer\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on \"B2B Dispatch\" tab",
  "keyword": "When "
});
formatter.step({
  "name": "user enters header value as \"Test\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters message value as \"Automated Test\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on \"B2B Dispatch\" tab",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on outbound events refresh button",
  "keyword": "When "
});
formatter.step({
  "name": "user should see \"Assignment\" notification in outbound in row 1",
  "keyword": "Then "
});
formatter.step({
  "name": "user waits 59 secs",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on inbound events refresh button",
  "keyword": "When "
});
formatter.step({
  "name": "user should see \"BTA:OrderAcknowledgmentBySupplier\" notification in inbound in row \"\u003cAckRowNum\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on \"B2B Dispatch\" tab",
  "keyword": "When "
});
formatter.step({
  "name": "user should see WFM ticket ID",
  "keyword": "Then "
});
formatter.step({
  "name": "user validates Contact Name as \"\u003cContactName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Contact Telephone Number is present",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Contact Mail Address as \"\u003cContactMailAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects dispatch status as \"Cancel Requested\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters Cancel Requested Reason as \"TEST\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on outbound events refresh button",
  "keyword": "When "
});
formatter.step({
  "name": "user should see \"Withdrawn\" notification in outbound in row 2",
  "keyword": "Then "
});
formatter.step({
  "name": "user waits 59 secs",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on inbound events refresh button",
  "keyword": "When "
});
formatter.step({
  "name": "user should see \"BTA:OrderCancellation\" notification in inbound in row \"\u003cCancelRowNum\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "When "
});
formatter.step({
  "name": "user validates ticket status as \"Withdrawn\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on \"B2B Dispatch\" tab",
  "keyword": "When "
});
formatter.step({
  "name": "user double clicks and open withdrawn message",
  "keyword": "When "
});
formatter.step({
  "name": "new interface window should be opened",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on custom field tab and clicks on message field and opens it",
  "keyword": "And "
});
formatter.step({
  "name": "user should see message and withdrawn reason in message text field",
  "keyword": "Then "
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "When "
});
formatter.step({
  "name": "user validates all fields are read only and not editable",
  "keyword": "Then "
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
        "ContactName",
        "ContactMailAddress",
        "SLA Class",
        "AckRowNum",
        "CancelRowNum"
      ]
    },
    {
      "cells": [
        "B2B Automated Test - Norway Oneco",
        "B2B Automation, Norway, Oneco",
        "NO_LTECell_TLM150_L18-1",
        "Oneco2 - FS - NO - B2B",
        "Huawei",
        "OneCo SPOC (Single Point Of Contact)",
        "spoc@oneco.no",
        "118 Hour 5 days Cleanup correction time workdays",
        "1",
        "2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user can cancel a work order sent to a field service before any work is carried out",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@B2B_Test_Cases"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#username\\-id\"}\n  (Session info: chrome\u003d94.0.4606.61)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-6FQK1D6\u0027, ip: \u002710.85.242.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 94.0.4606.61, chrome: {chromedriverVersion: 94.0.4606.61 (418b78f5838ed..., userDataDir: C:\\Users\\jlm97\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61428}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 580ee632527b14c4900d5cec57f793df\n*** Element info: {Using\u003did, value\u003dusername-id}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pageObjects.OWF_LoginPage.enterUsername(OWF_LoginPage.java:13)\r\n\tat pageObjects.OWF_LoginPage.doLogin(OWF_LoginPage.java:26)\r\n\tat steps.OWF_LoginPageSteps.userLogsInWithValidUserAndPassword(OWF_LoginPageSteps.java:42)\r\n\tat ✽.user logs in with valid user and password(features/Automation/Regression/NewStructure/B2B/B2B_Test_Cases.feature:9)\r\n",
  "status": "failed"
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
  "name": "user clicks on create work order",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsCreateMenuAs()"
});
formatter.result({
  "status": "skipped"
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
  "name": "user enters title as \"B2B Automated Test - Norway Oneco\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userEntersTitle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects request type as \"Maintenance\" on work order page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userSelectsRequestTypeAsOnWorkOrderPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters description as \"B2B Automation, Norway, Oneco\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects priority as \"Info\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsPriorityAs(String)"
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
  "name": "user adds CI \"NO_LTECell_TLM150_L18-1\" to the ticket with impact level \"Degradation of Service\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userAddsCIToTheTicketWithImpactLevel(String,String)"
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
  "name": "user clicks on apply BtwoB button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userClicksOnApplyBBButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see assigned profile as \"Oneco2 - FS - NO - B2B\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeAssignedProfileAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects SLA class as \"118 Hour 5 days Cleanup correction time workdays\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userSelectsSLAClassAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on CTI details under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCTIDetailsUnderSections()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates manufacturer as \"Huawei\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesManufacturerAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"B2B Dispatch\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters header value as \"Test\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userEntersHeaderValueAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters message value as \"Automated Test\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userEntersMessageValueAs(String)"
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
  "name": "user clicks on \"B2B Dispatch\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on outbound events refresh button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userClicksOnOutboundEventsRefreshButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Assignment\" notification in outbound in row 1",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeNotification(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user waits 59 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on inbound events refresh button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userClicksOnInboundEventsRefreshButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"BTA:OrderAcknowledgmentBySupplier\" notification in inbound in row \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeNotificationInInboundInRow(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnTicketRefreshButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"B2B Dispatch\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see WFM ticket ID",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeWFMTicketID()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Contact Name as \"OneCo SPOC (Single Point Of Contact)\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesContactNameAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Contact Telephone Number is present",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesContactTelephoneNumberIsPresent()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates Contact Mail Address as \"spoc@oneco.no\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesContactMailAddressAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects dispatch status as \"Cancel Requested\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userSelectsDispatchStatusAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters Cancel Requested Reason as \"TEST\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userEntersCancelRequestedReasonAs(String)"
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
  "name": "user clicks on outbound events refresh button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userClicksOnOutboundEventsRefreshButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Withdrawn\" notification in outbound in row 2",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeNotification(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user waits 59 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on inbound events refresh button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userClicksOnInboundEventsRefreshButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"BTA:OrderCancellation\" notification in inbound in row \"2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeNotificationInInboundInRow(String,String)"
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
  "name": "user validates ticket status as \"Withdrawn\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"B2B Dispatch\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user double clicks and open withdrawn message",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userDoubleClicksAndOpenWithdrawnMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "new interface window should be opened",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.newInterfaceWindowShouldBeOpened()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on custom field tab and clicks on message field and opens it",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userClicksOnCustomFieldTabAndClicksOnMessageFieldAndOpensIt()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see message and withdrawn reason in message text field",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeMessageAndWithdrawnReasonInMessageTextField()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates all fields are read only and not editable",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.userValidatesAllFieldsAreReadOnlyAndNotEditable()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});