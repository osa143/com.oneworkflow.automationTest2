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
        "B2B Automated Test - Sweden Eltel",
        "B2B Automation, Sweden, Eltel",
        "SE_LTECell_103392011",
        "Eltel - FS - SE - B2B",
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
  "name": "user clicks on create work order",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsCreateMenuAs()"
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
  "name": "user enters title as \"B2B Automated Test - Sweden Eltel\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userEntersTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Maintenance\" on work order page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userSelectsRequestTypeAsOnWorkOrderPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"B2B Automation, Sweden, Eltel\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects priority as \"Info\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsPriorityAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets ticket value",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userGetsTicketValue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds CI \"SE_LTECell_103392011\" to the ticket with impact level \"Degradation of Service\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userAddsCIToTheTicketWithImpactLevel(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnTicketRefreshButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on apply BtwoB button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userClicksOnApplyBBButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see assigned profile as \"Eltel - FS - SE - B2B\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeAssignedProfileAs(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [Eltel - FS - SE - B2B] but found [Transtema2 - FS - SE - B2B]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat steps.OWF_WorkOrderPageSteps.userShouldSeeAssignedProfileAs(OWF_WorkOrderPageSteps.java:88)\r\n\tat ✽.user should see assigned profile as \"Eltel - FS - SE - B2B\"(features/Automation/Regression/B2B/B2B_Test_Cases.feature:22)\r\n",
  "status": "failed"
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
  "status": "passed"
});
});