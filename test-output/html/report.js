$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Change/Format/DuplicateCI\u0027s/AllFileTypes_Change.feature");
formatter.feature({
  "name": "checking of bulk loading format",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@duplicateCIs_change"
    },
    {
      "name": "@SAO-427"
    }
  ]
});
formatter.scenarioOutline({
  "name": "user checks the format of bulk loading format",
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
  "name": "user clicks on create change record",
  "keyword": "When "
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects request type as \"Normal Change\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects title as \"Mobile:CS Core (Voice)\" on Change record page",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects request category as \"Software Installation\" on change record page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Duplicate CI\u0027s\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters reason field as \"Regression\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects priority as \"Critical\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"Privacy Data: Just Testing\" in the change builder field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"Regression - Change Management Process\" in the implementation field",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"Regression - Change Management Process\" in the test plan field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"Regression - Change Management Process\" in the rollback field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"Regression - Change Management Process\" in the communication plan field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"Regression - Change Management Process\" in the ver of functionality field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"Regression - Change Management Process\" in the risk description field",
  "keyword": "And "
});
formatter.step({
  "name": "user enters as \"Test Data - Ignore Ticket\" in service and customer impact",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters start time as 24 hours fast from current sweden time in \"MM/dd/YYYY HH:mm:ss\" format",
  "keyword": "And "
});
formatter.step({
  "name": "user enters end time as 28 hours fast from current sweden time in \"MM/dd/YYYY HH:mm:ss\" format",
  "keyword": "And "
});
formatter.step({
  "name": "user enters impact duration as \"45\" minutes",
  "keyword": "And "
});
formatter.step({
  "name": "user selects estimated impact dropdown as \"Degradation of Service\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on \"Diagnosis\" tab",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on Add Bulk Import button",
  "keyword": "And "
});
formatter.step({
  "name": "user switches to frame",
  "keyword": "And "
});
formatter.step({
  "name": "user should see bulk ci loading window",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "And "
});
formatter.step({
  "name": "user searches for \"\u003cfileTypes\u003e\" attachment and adds it",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on attachment ok button",
  "keyword": "And "
});
formatter.step({
  "name": "user switches to frame",
  "keyword": "And "
});
formatter.step({
  "name": "user validates attached document is visible",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on save button under bulk import",
  "keyword": "Then "
});
formatter.step({
  "name": "first error message should display as \"The Uploaded File is now being processed...\" on bulk ci window",
  "keyword": "And "
});
formatter.step({
  "name": "second error message should display as \"Please Check for the progress of this process in \\\"Show Bulk Import\\\". (ARNOTE 10000)\" on bulk ci window",
  "keyword": "And "
});
formatter.step({
  "name": "user waits 60 secs",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on Show Bulk Import button",
  "keyword": "When "
});
formatter.step({
  "name": "user switches to frame",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on \"Related CIs\" tab",
  "keyword": "When "
});
formatter.step({
  "name": "user validates total rows as \"10\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Rows OK as \"5\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with errors as \"5\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with warnings as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates \"Status\" as \"With Errors\" in row 6",
  "keyword": "And "
});
formatter.step({
  "name": "user validates \"Status\" as \"With Errors\" in row 7",
  "keyword": "And "
});
formatter.step({
  "name": "user validates \"Status\" as \"With Errors\" in row 8",
  "keyword": "And "
});
formatter.step({
  "name": "user validates \"Status\" as \"With Errors\" in row 9",
  "keyword": "And "
});
formatter.step({
  "name": "user validates \"Status\" as \"With Errors\" in row 10",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "And "
});
formatter.step({
  "name": "user logsOut and closes the browser",
  "keyword": "And "
});
formatter.step({
  "name": "user switches to window 0",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fileTypes"
      ]
    },
    {
      "cells": [
        "Test Attachments\\5DuplicateCIs\\5CIsCSV.csv"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@duplicateCIs_change"
    },
    {
      "name": "@SAO-427"
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
  "name": "user selects request type as \"Normal Change\"",
  "keyword": "And "
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Duplicate CI\u0027s\"",
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
  "name": "user enters as \"Test Data - Ignore Ticket\" in service and customer impact",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersAsInServiceAndCustomerImpact(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters start time as 24 hours fast from current sweden time in \"MM/dd/YYYY HH:mm:ss\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersStartTimeAsHoursFastFromCurrentSwedenTimeInFormat(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters end time as 28 hours fast from current sweden time in \"MM/dd/YYYY HH:mm:ss\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersEndTimeAsHoursFastFromCurrentSwedenTimeInFormat(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters impact duration as \"45\" minutes",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersImpactDurationAsMinutes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects estimated impact dropdown as \"Degradation of Service\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userSelectsEstimatedImpactDropdownAsNoImpact(String)"
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
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Add Bulk Import button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnAddBulkImportButton()"
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
  "name": "user should see bulk ci loading window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userShouldSeeBulkCiLoadingWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\5DuplicateCIs\\5CIsCSV.csv\" attachment and adds it",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSearchesForAttachmentAndAddsIt(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on attachment ok button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAttachmentOkButton()"
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
  "name": "user validates attached document is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTxtDocIsVisible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button under bulk import",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSaveButtonUnderBulkImport()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "first error message should display as \"The Uploaded File is now being processed...\" on bulk ci window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.firstErrorMessageShouldDisplayAsOnBulkCiWindow(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "second error message should display as \"Please Check for the progress of this process in \\\"Show Bulk Import\\\". (ARNOTE 10000)\" on bulk ci window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.secondErrorMessageShouldDisplayAsOnBulkCiWindow(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user waits 60 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Show Bulk Import button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnShowBulkImportButton()"
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
  "name": "user clicks on \"Related CIs\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates total rows as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"5\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"5\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with warnings as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithWarningsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Errors\" in row 6",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Errors\" in row 7",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Errors\" in row 8",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Errors\" in row 9",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Errors\" in row 10",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logsOut and closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userLogsOutsAndCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user switches to window 0",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});