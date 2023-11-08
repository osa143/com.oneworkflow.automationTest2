$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/Regression/NewStructure/B2B/B2B_Test_Cases.feature");
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
  "name": "user waits 40 secs",
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
        "B2B Automated Test - Sweden Eltel",
        "B2B Automation, Sweden, Eltel",
        "SE_LTECell_103392011",
        "Transtema2 - FS - SE - B2B",
        "Nokia",
        "Team Sundsvall Serv",
        "NMC-MESSAGES@eltelnetworks.se",
        "118 Hour 5 days Cleanup correction time workdays",
        "1",
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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 114\nCurrent browser version is 117.0.5938.92 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-6FQK1D6\u0027, ip: \u002710.85.242.215\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x007DA813+48355]\n\t(No symbol) [0x0076C4B1]\n\t(No symbol) [0x00675358]\n\t(No symbol) [0x006961AC]\n\t(No symbol) [0x00691EF3]\n\t(No symbol) [0x00690579]\n\t(No symbol) [0x006C0C55]\n\t(No symbol) [0x006C093C]\n\t(No symbol) [0x006BA536]\n\t(No symbol) [0x006982DC]\n\t(No symbol) [0x006993DD]\n\tGetHandleVerifier [0x00A3AABD+2539405]\n\tGetHandleVerifier [0x00A7A78F+2800735]\n\tGetHandleVerifier [0x00A7456C+2775612]\n\tGetHandleVerifier [0x008651E0+616112]\n\t(No symbol) [0x00775F8C]\n\t(No symbol) [0x00772328]\n\t(No symbol) [0x0077240B]\n\t(No symbol) [0x00764FF7]\n\tBaseThreadInitThunk [0x772B7BA9+25]\n\tRtlInitializeExceptionChain [0x77C8B79B+107]\n\tRtlClearBits [0x77C8B71F+191]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat driver.factory.DriverFactory.getDriver(DriverFactory.java:59)\r\n\tat pageObjects.BasePage.\u003cinit\u003e(BasePage.java:21)\r\n\tat pageObjects.OWF_LoginPage.\u003cinit\u003e(OWF_LoginPage.java:10)\r\n\tat steps.OWF_LoginPageSteps.\u003cinit\u003e(OWF_LoginPageSteps.java:14)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:73)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n\tat ✽.user is on the OneWorkflow login page(features/Automation/Regression/NewStructure/B2B/B2B_Test_Cases.feature:8)\r\n",
  "status": "failed"
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
  "name": "user enters title as \"B2B Automated Test - Sweden Eltel\"",
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
  "name": "user enters description as \"B2B Automation, Sweden, Eltel\"",
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
  "name": "user adds CI \"SE_LTECell_103392011\" to the ticket with impact level \"Degradation of Service\"",
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
  "name": "user validates manufacturer as \"Nokia\"",
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
  "name": "user waits 40 secs",
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
  "name": "user validates Contact Name as \"Team Sundsvall Serv\"",
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
  "name": "user validates Contact Mail Address as \"NMC-MESSAGES@eltelnetworks.se\"",
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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 114\nCurrent browser version is 117.0.5938.92 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-6FQK1D6\u0027, ip: \u002710.85.242.215\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x007DA813+48355]\n\t(No symbol) [0x0076C4B1]\n\t(No symbol) [0x00675358]\n\t(No symbol) [0x006961AC]\n\t(No symbol) [0x00691EF3]\n\t(No symbol) [0x00690579]\n\t(No symbol) [0x006C0C55]\n\t(No symbol) [0x006C093C]\n\t(No symbol) [0x006BA536]\n\t(No symbol) [0x006982DC]\n\t(No symbol) [0x006993DD]\n\tGetHandleVerifier [0x00A3AABD+2539405]\n\tGetHandleVerifier [0x00A7A78F+2800735]\n\tGetHandleVerifier [0x00A7456C+2775612]\n\tGetHandleVerifier [0x008651E0+616112]\n\t(No symbol) [0x00775F8C]\n\t(No symbol) [0x00772328]\n\t(No symbol) [0x0077240B]\n\t(No symbol) [0x00764FF7]\n\tBaseThreadInitThunk [0x772B7BA9+25]\n\tRtlInitializeExceptionChain [0x77C8B79B+107]\n\tRtlClearBits [0x77C8B71F+191]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat driver.factory.DriverFactory.getDriver(DriverFactory.java:59)\r\n\tat pageObjects.BasePage.\u003cinit\u003e(BasePage.java:21)\r\n\tat pageObjects.BaseRecordPage.\u003cinit\u003e(BaseRecordPage.java:16)\r\n\tat pageObjects.OWF_AgentConsolePage.\u003cinit\u003e(OWF_AgentConsolePage.java:13)\r\n\tat cucumberHooks.Hooks.\u003cinit\u003e(Hooks.java:20)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:73)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
});
});