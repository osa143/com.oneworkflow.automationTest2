$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/Trouble/Incident_Functionality/Search_for_open_and_closed_incident.feature");
formatter.feature({
  "name": "Search for open and closed incidents",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Search_for_open_and_closed_incidents"
    }
  ]
});
formatter.scenario({
  "name": "Search for open and closed incidents",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Search_for_open_and_closed_incidents"
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
  "name": "user selects search menu as \"Open Search Form:Trouble Event\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsSearchMenuAs(String)"
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
  "name": "user should see blank trouble search form",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userShouldSeeBlankTroubleSearchForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user changes status to \"Closed\" on trouble event page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userChangesStatusToOnTroubleEventPage(String)"
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
  "name": "user enters \"SE_\" within the location ID+",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersWithinTheLocationID(String)"
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
  "name": "user should see \"Closed\" \"SE\" tickets",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userShouldSeeTickets(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on main page refresh",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnMainPageRefresh()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user changes status to \"Closed\" on trouble event page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userChangesStatusToOnTroubleEventPage(String)"
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
  "name": "user enters \"FI_\" within the location ID+",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersWithinTheLocationID(String)"
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
  "name": "user should see \"Closed\" \"FI\" tickets",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userShouldSeeTickets(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on main page refresh",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnMainPageRefresh()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user changes status to \"Closed\" on trouble event page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userChangesStatusToOnTroubleEventPage(String)"
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
  "name": "user enters \"LT_\" within the location ID+",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersWithinTheLocationID(String)"
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
  "name": "user should see \"Closed\" \"LT\" tickets",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userShouldSeeTickets(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on main page refresh",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnMainPageRefresh()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user changes status to \"Closed\" on trouble event page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userChangesStatusToOnTroubleEventPage(String)"
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
  "name": "user enters \"NO_\" within the location ID+",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersWithinTheLocationID(String)"
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
  "name": "user should see \"Closed\" \"NO\" tickets",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userShouldSeeTickets(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on main page refresh",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnMainPageRefresh()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user changes status to \"Closed\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userChangesStatusToOnTroubleEventPage(String)"
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
  "name": "user enters \"DK_\" within the location ID+",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersWithinTheLocationID(String)"
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
  "name": "user should see \"Closed\" \"DK\" tickets",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userShouldSeeTickets(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on main page refresh",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnMainPageRefresh()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user changes status to \"Closed\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userChangesStatusToOnTroubleEventPage(String)"
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
  "name": "user enters \"EE_\" within the location ID+",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersWithinTheLocationID(String)"
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
  "name": "user should see \"Closed\" \"EE\" tickets",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userShouldSeeTickets(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user changes status to \"Assigned\" on trouble event page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userChangesStatusToOnTroubleEventPage(String)"
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
  "name": "user enters \"SE_\" within the location ID+",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersWithinTheLocationID(String)"
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
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d84.0.4147.89)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-6FQK1D6\u0027, ip: \u002710.85.240.158\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\jlm97\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64513}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a5824c82f2c1122603d9d66a58e50b25\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageObjects.OWF_ProblemRecordPage.clickSearchButton(OWF_ProblemRecordPage.java:614)\r\n\tat steps.OWF_ProblemRecordPageSteps.userClicksSearchOnTicketSearch(OWF_ProblemRecordPageSteps.java:118)\r\n\tat ✽.user clicks Search on ticket search(features/Automation/Trouble/Incident_Functionality/Search_for_open_and_closed_incident.feature:51)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should see \"Assigned\" \"SE\" tickets",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userShouldSeeTickets(String,String)"
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
  "name": "user changes status to \"Assigned\" on trouble event page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userChangesStatusToOnTroubleEventPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on location under sections",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnLocationUnderSections()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"FI_\" within the location ID+",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersWithinTheLocationID(String)"
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
  "name": "user should see \"Assigned\" \"FI\" tickets",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userShouldSeeTickets(String,String)"
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
  "name": "user changes status to \"Assigned\" on trouble event page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userChangesStatusToOnTroubleEventPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on location under sections",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnLocationUnderSections()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"LT_\" within the location ID+",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersWithinTheLocationID(String)"
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
  "name": "user should see \"Assigned\" \"LT\" tickets",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userShouldSeeTickets(String,String)"
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
  "name": "user changes status to \"Assigned\" on trouble event page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userChangesStatusToOnTroubleEventPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on location under sections",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnLocationUnderSections()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"NO_\" within the location ID+",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersWithinTheLocationID(String)"
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
  "name": "user should see \"Assigned\" \"NO\" tickets",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userShouldSeeTickets(String,String)"
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
  "name": "user changes status to \"Assigned\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userChangesStatusToOnTroubleEventPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on location under sections",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnLocationUnderSections()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"DK_\" within the location ID+",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersWithinTheLocationID(String)"
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
  "name": "user should see \"Assigned\" \"DK\" tickets",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userShouldSeeTickets(String,String)"
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
  "name": "user changes status to \"Assigned\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userChangesStatusToOnTroubleEventPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on location under sections",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnLocationUnderSections()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"EE_\" within the location ID+",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersWithinTheLocationID(String)"
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
  "name": "user should see \"Assigned\" \"EE\" tickets",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userShouldSeeTickets(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});