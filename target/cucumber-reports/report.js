$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/SAO_191_SiteNameDetails.feature");
formatter.feature({
  "name": "Sitename details search Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SAO_191"
    }
  ]
});
formatter.scenario({
  "name": "Verify Site Name details available for all CI\u0027s",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SAO_191"
    }
  ]
});
formatter.step({
  "name": "User is on the OneWorkflow login page",
  "keyword": "Given "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userIsOnTheOneWorkflowLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logins with valid user credentials",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userLoginsWithValidUserCredentials()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-P3NRUGT\u0027, ip: \u002710.85.242.32\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\MAHESH~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:51952}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.169, webStorageEnabled: true}\nSession ID: d32610b40c5dd5fcfb6911e2d2f2b60e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageObjects.OWF_LoginPage.clickLogin(OWF_LoginPage.java:29)\r\n\tat pageObjects.OWF_LoginPage.doLogin(OWF_LoginPage.java:35)\r\n\tat steps.OWF_LoginPageSteps.userLoginsWithValidUserCredentials(OWF_LoginPageSteps.java:31)\r\n\tat ✽.user logins with valid user credentials(features/SAO_191_SiteNameDetails.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user successfully logged in to oneworkflow and agent console should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSuccessfullyLoggedInToOneworkflowAndAgentConsoleShouldBeDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects SID console from agent console",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsSIDConsoleFromAgentConsole()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "SID console page should be opened",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.sidConsolePageShouldBeOpened()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects Category as Access",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.userSelectsCategoryAsAccess()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects Type as Radio Access Network",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.userSelectsTypeAsRadioAccessNetwork()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects Item as GSMCell",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.userSelectsItemAsGSMCell()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Search",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.userClicksOnSearch()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "ci details should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.ciDetailsShouldBeDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies Site Name details avilable for all CI\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.userVerifiesSiteNameDetailsAvilableForAllCIS()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Site name should be displayed for all CI CTI search details",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.siteNameShouldBeDisplayedForAllCICTISearchDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logouts and closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userLogoutsAndCloseTheBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});