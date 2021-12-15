$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/Regression/NewStructure/Problem/Profile_Permissions_Part_1.feature");
formatter.feature({
  "name": "profile permissions part 1",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Profile_Permissions_Part_1"
    },
    {
      "name": "@ProblemRegression"
    }
  ]
});
formatter.scenario({
  "name": "profile permissions part 1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Profile_Permissions_Part_1"
    },
    {
      "name": "@ProblemRegression"
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
  "name": "user logs in with valid username \"syvaptu1_auto\" and password as \"Test@1234\"",
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
        "Proactive investigation of frvi96_auto",
        "XX_Test:Functional Test",
        "UAT Profile Permissions test",
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
  "name": "user clicks on \"Interested Parties\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on add button under interested parties",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.userClicksOnAddButtonUnderInterestedParties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user switches to frame 2",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSwitchesToFrame(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects type as \"Additional Access\" under interested parties",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.userSelectsTypeAsUnderInterestedParties(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on radio button user",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.userClicksOnRadioButtonUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Tohall_copy\" in login name plus field",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.userEntersInLoginNamePlusField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on search under add interested party",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.userClicksOnSearchUnderAddInterestedParty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user highlights present user under add interested party",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userHighlightsPresentUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects access radio button as read and write",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.userSelectsAccessRadioButtonAsReadAndWrite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects auto notify radio button as yes",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_KnownErrorPageSteps.userSelectsAutoNotifyRadioButtonAsYes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button under interested parties frame",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSaveButtonUnderInterestedPartiesFrame()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "problem initiator user should be listed under interested parties tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.problemInitiatorUserShouldBeListedUnderInterestedPartiesTab()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#T705002015\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-6FQK1D6\u0027, ip: \u002710.85.242.198\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\jlm97\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54168}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6f83989956d63b6573b26dbb6032e9d6\n*** Element info: {Using\u003did, value\u003dT705002015}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pageObjects.BasePage.getTableRows(BasePage.java:647)\r\n\tat pageObjects.BaseRecordPage.verifyUserListedUnderInterestedParty(BaseRecordPage.java:767)\r\n\tat steps.OWF_ProblemRecordPageSteps.problemInitiatorUserShouldBeListedUnderInterestedPartiesTab(OWF_ProblemRecordPageSteps.java:707)\r\n\tat ✽.problem initiator user should be listed under interested parties tab(features/Automation/Regression/NewStructure/Problem/Profile_Permissions_Part_1.feature:30)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on \"Additional Info\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"Tohall_copy\" in the analysis team member one field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTheAnalysisTeamMemberOneField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on save button on the problem form",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSaveButtonOnTheProblemForm()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see problem initiator listed as analysis team member one as \"Tohall_copy\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userShouldSeeProblemInitiatorListedAsAnalysisTeamMemberOneAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Restricted Info\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"Restricted info\" in the information field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTheInformationField(String)"
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
  "name": "user gets ticket value",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userGetsTicketValue()"
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
  "name": "user navigates back to login page using URL",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userNavigatesBackToLoginPageUsingURL()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs in with valid username \"mina09_auto\" and password as \"Test@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userLogsInWithValidUsernameAndPasswordAs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on search and selects open search forms and problem record",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnSearchAndSelectsOpenSearchFormsAndProblemRecord()"
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
  "name": "user enters Problem Ticket",
  "keyword": "Then "
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
  "name": "user changes status to \"Under Investigation\" on problem record page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userChangesStatusToOnProblemRecordPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on save button on the problem form",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSaveButtonOnTheProblemForm()"
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
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Status has changed from Assigned to Under Investigation. \"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Restricted Info\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"More Restricted info\" in the information field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTheInformationField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on save button on the problem form",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSaveButtonOnTheProblemForm()"
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
  "name": "user navigates back to login page using URL",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userNavigatesBackToLoginPageUsingURL()"
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
  "name": "user clicks on search and selects open search forms and problem record",
  "keyword": "Then "
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
  "keyword": "Then "
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
  "name": "user changes status to \"Investigation Complete\" on problem record page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userChangesStatusToOnProblemRecordPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects root cause code as Technical:HW error under route cause",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsRootCauseCodeAsTechnicalHWErrorUnderRouteCause()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters route cause details as \"Lacking information and RC found date\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersRouteCauseDetailsAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters RC found date as current date",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersRCFoundDateAsCurrentDate()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on save button on the problem form",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSaveButtonOnTheProblemForm()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates ticket status as \"Investigation Complete\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"STATUS MODIFIED.  Status has changed from Under Investigation to Investigation Complete. \"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Restricted Info\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates text availability within information field",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesTextAvailabilityWithinInformationField()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"Even more Restricted info\" in the information field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTheInformationField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on save button on the problem form",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSaveButtonOnTheProblemForm()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters description as \"More information on problem ticket\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on save button on the problem form",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSaveButtonOnTheProblemForm()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "change should be reflected in the timeline \"Ticket Description has changed from |UAT Profile Permissions test| to |More information on problem ticket|\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldBeReflectedInTheTimeline(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});