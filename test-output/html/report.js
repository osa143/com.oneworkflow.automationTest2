$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/Regression/Incident/Incident_Functionality/Remove_a_CI_from_Diagnosis_tab.feature");
formatter.feature({
  "name": "Remove of CI from diagnosis tab",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@06.09"
    },
    {
      "name": "@Remove_a_CI_from_Diagnosis_tab"
    },
    {
      "name": "@Incident"
    },
    {
      "name": "@Trouble1"
    },
    {
      "name": "@HelixRegr"
    }
  ]
});
formatter.scenario({
  "name": "Remove of CI from diagnosis tab",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@06.09"
    },
    {
      "name": "@Remove_a_CI_from_Diagnosis_tab"
    },
    {
      "name": "@Incident"
    },
    {
      "name": "@Trouble1"
    },
    {
      "name": "@HelixRegr"
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
  "keyword": "When "
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
  "name": "user clicks on create trouble event",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnCreateTroubleEvent()"
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
  "name": "trouble record form should appear in new tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.troubleRecordFormShouldAppearInNewTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user creates an incident with following details",
  "rows": [
    {
      "cells": [
        "Title",
        "RequestType",
        "Description"
      ]
    },
    {
      "cells": [
        "Test case 05.01 Manually close an incident",
        "Customer",
        "Test case 05.01 Manually close an incident"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userCreatesAnIncidentWithFollowingDetails(DataTable)"
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
  "name": "user adds below CI\u0027s to the ticket",
  "rows": [
    {
      "cells": [
        "CI Name"
      ]
    },
    {
      "cells": [
        "SE_EPG_FREEPG1"
      ]
    },
    {
      "cells": [
        "SE_EPG_HYEPG1"
      ]
    },
    {
      "cells": [
        "SE_EPG_LDHEPG1"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userAddsBelowCISToTheTicket(DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ciframe style\u003d\"top:0px; left:0px; width:100%; height:100%;background-color: transparent;\" name\u003d\"VF999000183_1606474030338IF_0\" id\u003d\"VF999000183_1606474030338IF_0\" frameborder\u003d\"0\" scrolling\u003d\"no\" allowtransparency\u003d\"true\" arviewbordercolor\u003d\"#2188c9\" title\u003d\"View_CID\" src\u003d\"javascript:\u0026quot;\u003cHTML\u003e\u003c/HTML\u003e\u0026quot;\" onload\u003d\"F(0,999000183).ol()\" cd_frame_id_\u003d\"d3df23476e5bc2e8cefe09bd83661e2a\"\u003e...\u003c/iframe\u003e is not clickable at point (1310, 172). Other element would receive the click: \u003cimg style\u003d\"width:100%;height:100%\" src\u003d\"../../../../resources/images/transparent.gif\"\u003e\n  (Session info: chrome\u003d87.0.4280.66)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-6FQK1D6\u0027, ip: \u002710.85.241.232\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.66, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\jlm97\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57948}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 52317fb822fd5b5abb2f561e2f885683\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageObjects.OWF_CiSearchPage.clickClearButton(OWF_CiSearchPage.java:680)\r\n\tat pageObjects.OWF_CiSearchPage.addCIsToTicket(OWF_CiSearchPage.java:258)\r\n\tat steps.OWF_CiSearchPageSteps.userAddsBelowCISToTheTicket(OWF_CiSearchPageSteps.java:479)\r\n\tat ✽.user adds below CI\u0027s to the ticket(features/Automation/Regression/Incident/Incident_Functionality/Remove_a_CI_from_Diagnosis_tab.feature:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on \"Diagnosis\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user gets number of CI\u0027s",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userGetsNumberOfCIS()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user right clicks on CI \"SE_EPG_LDHEPG1\" and selects \"Detach\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userRightClicksOnCIAndSelects(String,String)"
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
  "name": "CI should be detached from ticket",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.ciShouldBeDetachedFromTicket()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});