$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Change/Format/50CI\u0027s/AllFileTypes_Change.feature");
formatter.feature({
  "name": "checking of bulk loading format",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Format_change_50CI\u0027s_1"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading 50 CI\u0027s \"",
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
  "name": "user validates Impact Type default value is \"Planned\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
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
  "name": "user waits 59 secs",
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
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Rows OK as \"50\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
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
        "Test Attachments\\50 CI\u0027s\\50CIsCSV.csv"
      ]
    },
    {
      "cells": [
        "Test Attachments\\50 CI\u0027s\\50CIsDOC.txt"
      ]
    },
    {
      "cells": [
        "Test Attachments\\50 CI\u0027s\\50CIsXLS.xls"
      ]
    },
    {
      "cells": [
        "Test Attachments\\50 CI\u0027s\\50CIsXLSX.xlsx"
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
      "name": "@Format_change_50CI\u0027s_1"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading 50 CI\u0027s \"",
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
  "name": "user validates Impact Type default value is \"Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\50 CI\u0027s\\50CIsCSV.csv\" attachment and adds it",
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
  "name": "user waits 59 secs",
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
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAtLeastOneCIHasUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Format_change_50CI\u0027s_1"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading 50 CI\u0027s \"",
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
  "name": "user validates Impact Type default value is \"Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\50 CI\u0027s\\50CIsDOC.txt\" attachment and adds it",
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
  "name": "user waits 59 secs",
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
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAtLeastOneCIHasUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Format_change_50CI\u0027s_1"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading 50 CI\u0027s \"",
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
  "name": "user validates Impact Type default value is \"Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\50 CI\u0027s\\50CIsXLS.xls\" attachment and adds it",
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
  "name": "user waits 59 secs",
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
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAtLeastOneCIHasUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Format_change_50CI\u0027s_1"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading 50 CI\u0027s \"",
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
  "name": "user validates Impact Type default value is \"Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\50 CI\u0027s\\50CIsXLSX.xlsx\" attachment and adds it",
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
  "name": "user waits 59 secs",
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
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAtLeastOneCIHasUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Change/Format/50CI\u0027s/Manual_Change.feature");
formatter.feature({
  "name": "checking of bulk loading format",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_change_50CIs_Manual"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading 50 CI\u0027s\"",
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
  "name": "user clicks on Diagnosis tab",
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
  "name": "user clicks on Manual Input radio button",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003c50CIs\u003e\" in manual CI search box",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button under bulk import",
  "keyword": "Then "
});
formatter.step({
  "name": "first error message should display as \"The manually identified CIs are now being processed...\" on bulk ci window",
  "keyword": "And "
});
formatter.step({
  "name": "second error message should display as \"Please Check for the progress of this process in \\\"Show Bulk Import\\\". (ARNOTE 10000)\" on bulk ci window",
  "keyword": "And "
});
formatter.step({
  "name": "user waits 59 secs",
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
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Rows OK as \"50\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with warnings as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "50CIs"
      ]
    },
    {
      "cells": [
        "SE_LTECell_103392011;SE_LTECell_100895010;FI_LTECell_Valpe4H;FI_LTECell_Hauci1L;NO_LTECell_TLM150_L18-1;SE_AFG_AFG01SE;EE_LTECell_AABLAK2;SE_UMTSCell_100021;DK_UMTSCell_B0001S11;FI_UMTSCell_3G Labra2A;EE_UMTSCell_AABLAW2;SE_AFG_AFG02SE;SE_AFG_AFG89FI;SE_SGSN_FREMME2;DK_SGSN_AMBMME1;FI_SGSN_HKIMME02;EE_SGSN_KOORTMME1;NO_SGSN_OSL800MME1;LT_SGSN_VLMMME02;SE_MSCSERVER_FRE1MS;DK_MSCSERVER_AMB3MSC;FI_MSS_SMS01HKI;SE_AFG_AFG98SE;NO_MSS_OSLMSS01;SE_AFG_AFG99SE;FI_GSMCell_Maunu1;SE_AFG_REFAFG;tiksu PROD;aa325;aa323iptvapp03;fre-rep-s3;aa243as01;aa243as02;aa243as03;aa245as01;aa687bias03;aa687bias04;aa687biast03;aa687bias06;aa687bias07;gai-dhcp11-sn91;mordo;SE_ALARMMAP_ALARMMAP;SE_ALE_hogalid-ale1;ingest8;SE_ALE_hogalid-ale2;lamba;SE_ALE_m-hyllie-ale1;fd100;mta2"
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
      "name": "@Bulk_Loading_Format_change_50CIs_Manual"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading 50 CI\u0027s\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user clicks on Manual Input radio button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnManualInputRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SE_LTECell_103392011;SE_LTECell_100895010;FI_LTECell_Valpe4H;FI_LTECell_Hauci1L;NO_LTECell_TLM150_L18-1;SE_AFG_AFG01SE;EE_LTECell_AABLAK2;SE_UMTSCell_100021;DK_UMTSCell_B0001S11;FI_UMTSCell_3G Labra2A;EE_UMTSCell_AABLAW2;SE_AFG_AFG02SE;SE_AFG_AFG89FI;SE_SGSN_FREMME2;DK_SGSN_AMBMME1;FI_SGSN_HKIMME02;EE_SGSN_KOORTMME1;NO_SGSN_OSL800MME1;LT_SGSN_VLMMME02;SE_MSCSERVER_FRE1MS;DK_MSCSERVER_AMB3MSC;FI_MSS_SMS01HKI;SE_AFG_AFG98SE;NO_MSS_OSLMSS01;SE_AFG_AFG99SE;FI_GSMCell_Maunu1;SE_AFG_REFAFG;tiksu PROD;aa325;aa323iptvapp03;fre-rep-s3;aa243as01;aa243as02;aa243as03;aa245as01;aa687bias03;aa687bias04;aa687biast03;aa687bias06;aa687bias07;gai-dhcp11-sn91;mordo;SE_ALARMMAP_ALARMMAP;SE_ALE_hogalid-ale1;ingest8;SE_ALE_hogalid-ale2;lamba;SE_ALE_m-hyllie-ale1;fd100;mta2\" in manual CI search box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInManualCISearchBox(String)"
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
  "name": "first error message should display as \"The manually identified CIs are now being processed...\" on bulk ci window",
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
  "name": "user waits 59 secs",
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
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAtLeastOneCIHasUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Change/Format/DuplicateCI\u0027s/AllFileTypes_Change.feature");
formatter.feature({
  "name": "checking of bulk loading format",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@duplicateCIs_change3"
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
    },
    {
      "cells": [
        "Test Attachments\\5DuplicateCIs\\5CIsTextDOC.txt"
      ]
    },
    {
      "cells": [
        "Test Attachments\\5DuplicateCIs\\5CIsXLS.xls"
      ]
    },
    {
      "cells": [
        "Test Attachments\\5DuplicateCIs\\5CIsXLSX.xlsx"
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
      "name": "@duplicateCIs_change3"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@duplicateCIs_change3"
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
  "name": "user searches for \"Test Attachments\\5DuplicateCIs\\5CIsTextDOC.txt\" attachment and adds it",
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@duplicateCIs_change3"
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
  "name": "user searches for \"Test Attachments\\5DuplicateCIs\\5CIsXLS.xls\" attachment and adds it",
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@duplicateCIs_change3"
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
  "name": "user searches for \"Test Attachments\\5DuplicateCIs\\5CIsXLSX.xlsx\" attachment and adds it",
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
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Change/Format/DuplicateCI\u0027s/Manual_DuplicateCI\u0027s_Change.feature");
formatter.feature({
  "name": "checking of bulk loading format",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Manual_Bulk_Loading_Format_duplicateCIs_change"
    },
    {
      "name": "@SAO-427"
    }
  ]
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Manual_Bulk_Loading_Format_duplicateCIs_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading Duplicate CI\u0027s\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Manual Input radio button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnManualInputRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Ignore Duplicate CIs checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnIgnoreDuplicateCIsCheckbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SE_AAA_AAA01SE;SE_AAA_AAA02SE;SE_AAA_AAA03SE;SE_AAA_AAA04SE;SE_AAA_AAA98SE;SE_AAA_AAA01SE;SE_AAA_AAA02SE;SE_AAA_AAA03SE;SE_AAA_AAA04SE;SE_AAA_AAA98SE\" in manual CI search box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInManualCISearchBox(String)"
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
  "name": "user waits 3 secs",
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
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Change/Format/IncorrectCINames/AllFileTypes_Change.feature");
formatter.feature({
  "name": "checking of bulk loading format",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CSV_TXT_XLS_XLSX_Bulk_Loading_Format_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading Incorrect CI names\"",
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
  "name": "user clicks on Diagnosis tab",
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
  "name": "user waits 5 secs",
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
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with warnings as \"10\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates warning message as \"No CI named \u0027_AP_alvesta-radmannen-ap1\u0027 was found!\" in row 1",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on bulk loading close button",
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
        "Test Attachments\\10 CI\u0027s - Incorrect Names\\CSV.csv"
      ]
    },
    {
      "cells": [
        "Test Attachments\\10 CI\u0027s - Incorrect Names\\TEXT.txt"
      ]
    },
    {
      "cells": [
        "Test Attachments\\10 CI\u0027s - Incorrect Names\\XLS.xls"
      ]
    },
    {
      "cells": [
        "Test Attachments\\10 CI\u0027s - Incorrect Names\\XLSX.xlsx"
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
      "name": "@CSV_TXT_XLS_XLSX_Bulk_Loading_Format_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading Incorrect CI names\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user searches for \"Test Attachments\\10 CI\u0027s - Incorrect Names\\CSV.csv\" attachment and adds it",
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
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with warnings as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithWarningsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"No CI named \u0027_AP_alvesta-radmannen-ap1\u0027 was found!\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CSV_TXT_XLS_XLSX_Bulk_Loading_Format_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading Incorrect CI names\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user searches for \"Test Attachments\\10 CI\u0027s - Incorrect Names\\TEXT.txt\" attachment and adds it",
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
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with warnings as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithWarningsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"No CI named \u0027_AP_alvesta-radmannen-ap1\u0027 was found!\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CSV_TXT_XLS_XLSX_Bulk_Loading_Format_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading Incorrect CI names\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user searches for \"Test Attachments\\10 CI\u0027s - Incorrect Names\\XLS.xls\" attachment and adds it",
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
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with warnings as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithWarningsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"No CI named \u0027_AP_alvesta-radmannen-ap1\u0027 was found!\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CSV_TXT_XLS_XLSX_Bulk_Loading_Format_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading Incorrect CI names\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user searches for \"Test Attachments\\10 CI\u0027s - Incorrect Names\\XLSX.xlsx\" attachment and adds it",
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
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with warnings as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithWarningsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"No CI named \u0027_AP_alvesta-radmannen-ap1\u0027 was found!\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
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
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Change/Format/IncorrectCINames/Manual_Change.feature");
formatter.feature({
  "name": "checking of bulk loading format",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Manual_Bulk_Loading_Format_IncorrectCIs_Change"
    },
    {
      "name": "@SAO-427"
    }
  ]
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Manual_Bulk_Loading_Format_IncorrectCIs_Change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading Incorrect CI names\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Manual Input radio button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnManualInputRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"_AP_alvesta-radmannen-ap1;_AP_alvesta-radmannen-ap2;_AP_alvesta-radmannen-ap3;_AP_alvesta-radmannen-ap4;_AP_alvesta-radmannen-ap5\" in manual CI search box",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInManualCISearchBox(String)"
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
  "name": "first error message should display as \"The manually identified CIs are now being processed...\" on bulk ci window",
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
  "name": "user validates total rows as \"5\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with warnings as \"5\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithWarningsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates at least one CI has \"With Warnings\" under \"Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAtLeastOneCIHasUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"No CI named \u0027_AP_alvesta-radmannen-ap1\u0027 was found!\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Change/Format/IncorrectDataLayout/Location/AllFileTypes_Change.feature");
formatter.feature({
  "name": "Bulk Loading Incorrect Data layout- Location",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_Location_change"
    },
    {
      "name": "@SAO-427"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Location-All files",
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading Incorrect Data Layout Location\"",
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
  "name": "user clicks on Diagnosis tab",
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
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
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
  "name": "user waits 20 secs",
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
  "name": "user validates total rows as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with warnings as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on bulk loading close button",
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
        "Test Attachments\\IncorrectFormatColumnLocation\\CSV.csv"
      ]
    },
    {
      "cells": [
        "Test Attachments\\IncorrectFormatColumnLocation\\BIR+Load+Template.xls"
      ]
    },
    {
      "cells": [
        "Test Attachments\\IncorrectFormatColumnLocation\\BIR+Load+Template.xlsx"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Location-All files",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_Location_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading Incorrect Data Layout Location\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\IncorrectFormatColumnLocation\\CSV.csv\" attachment and adds it",
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
  "name": "user waits 20 secs",
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
  "name": "user validates total rows as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user clicks on bulk loading close button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Location-All files",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_Location_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading Incorrect Data Layout Location\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\IncorrectFormatColumnLocation\\BIR+Load+Template.xls\" attachment and adds it",
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
  "name": "user waits 20 secs",
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
  "name": "user validates total rows as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user clicks on bulk loading close button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Location-All files",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_Location_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading Incorrect Data Layout Location\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\IncorrectFormatColumnLocation\\BIR+Load+Template.xlsx\" attachment and adds it",
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
  "name": "user waits 20 secs",
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
  "name": "user validates total rows as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user clicks on bulk loading close button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Change/Format/IncorrectDataLayout/Name/AllFileTypes_Change.feature");
formatter.feature({
  "name": "checking of bulk loading format",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_Incorrect_ColumnName_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading Format- Incorrect column name\"",
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
  "name": "user clicks on Diagnosis tab",
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
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
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
  "name": "user waits 50 secs",
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
  "name": "user validates Rows OK as \"10\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with warnings as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on bulk loading close button",
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
        "Test Attachments\\IncorrectFormatColumnName\\CSV.csv"
      ]
    },
    {
      "cells": [
        "Test Attachments\\IncorrectFormatColumnName\\TEXT.txt"
      ]
    },
    {
      "cells": [
        "Test Attachments\\IncorrectFormatColumnName\\XLS.xls"
      ]
    },
    {
      "cells": [
        "Test Attachments\\IncorrectFormatColumnName\\XLSX.xlsx"
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
      "name": "@Bulk_Loading_Format_Incorrect_ColumnName_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading Format- Incorrect column name\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\IncorrectFormatColumnName\\CSV.csv\" attachment and adds it",
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
  "name": "user waits 50 secs",
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
  "name": "user validates Rows OK as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user clicks on bulk loading close button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_Incorrect_ColumnName_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading Format- Incorrect column name\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\IncorrectFormatColumnName\\TEXT.txt\" attachment and adds it",
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
  "name": "user waits 50 secs",
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
  "name": "user validates Rows OK as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user clicks on bulk loading close button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_Incorrect_ColumnName_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading Format- Incorrect column name\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\IncorrectFormatColumnName\\XLS.xls\" attachment and adds it",
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
  "name": "user waits 50 secs",
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
  "name": "user validates Rows OK as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user clicks on bulk loading close button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_Incorrect_ColumnName_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading Format- Incorrect column name\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\IncorrectFormatColumnName\\XLSX.xlsx\" attachment and adds it",
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
  "name": "user waits 50 secs",
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
  "name": "user validates Rows OK as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user clicks on bulk loading close button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Change/IgnoreDuplicateCI\u0027s/AllFileTypes_Change.feature");
formatter.feature({
  "name": "Bulk Loading ignore duplicate CI\u0027s for change ticket",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@All_File_Types_Bulk_Loading_Ignore_Duplicate_CI\u0027s_change"
    },
    {
      "name": "@SAO-427"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Bulk Loading ignore duplicate CI\u0027s",
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading ignore duplicate CI\u0027s\"",
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
  "name": "user clicks on Diagnosis tab",
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
  "name": "user validates Impact Type default value is \"Planned\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Ignore Duplicate CIs checkbox",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
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
  "name": "user waits 30 secs",
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
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Rows OK as \"24\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with errors as \"24\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with warnings as \"2\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 12",
  "keyword": "And "
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 37",
  "keyword": "And "
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 12",
  "keyword": "And "
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 37",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
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
        "Test Attachments\\50 CI\u0027s (WithDuplicates)\\50CIsCSV.csv"
      ]
    },
    {
      "cells": [
        "Test Attachments\\50 CI\u0027s (WithDuplicates)\\50CIsTextDOC.txt"
      ]
    },
    {
      "cells": [
        "Test Attachments\\50 CI\u0027s (WithDuplicates)\\50CIsXLS.xls"
      ]
    },
    {
      "cells": [
        "Test Attachments\\50 CI\u0027s (WithDuplicates)\\50CIsXLSX.xlsx"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Bulk Loading ignore duplicate CI\u0027s",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@All_File_Types_Bulk_Loading_Ignore_Duplicate_CI\u0027s_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading ignore duplicate CI\u0027s\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Ignore Duplicate CIs checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnIgnoreDuplicateCIsCheckbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\50 CI\u0027s (WithDuplicates)\\50CIsCSV.csv\" attachment and adds it",
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
  "name": "user waits 30 secs",
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
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"24\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"24\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with warnings as \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithWarningsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 12",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 37",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 12",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 37",
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Bulk Loading ignore duplicate CI\u0027s",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@All_File_Types_Bulk_Loading_Ignore_Duplicate_CI\u0027s_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading ignore duplicate CI\u0027s\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Ignore Duplicate CIs checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnIgnoreDuplicateCIsCheckbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\50 CI\u0027s (WithDuplicates)\\50CIsTextDOC.txt\" attachment and adds it",
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
  "name": "user waits 30 secs",
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
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"24\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"24\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with warnings as \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithWarningsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 12",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 37",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 12",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 37",
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Bulk Loading ignore duplicate CI\u0027s",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@All_File_Types_Bulk_Loading_Ignore_Duplicate_CI\u0027s_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading ignore duplicate CI\u0027s\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Ignore Duplicate CIs checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnIgnoreDuplicateCIsCheckbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\50 CI\u0027s (WithDuplicates)\\50CIsXLS.xls\" attachment and adds it",
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
  "name": "user waits 30 secs",
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
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"24\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"24\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with warnings as \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithWarningsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 12",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 37",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 12",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 37",
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Bulk Loading ignore duplicate CI\u0027s",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@All_File_Types_Bulk_Loading_Ignore_Duplicate_CI\u0027s_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading ignore duplicate CI\u0027s\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Ignore Duplicate CIs checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnIgnoreDuplicateCIsCheckbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\50 CI\u0027s (WithDuplicates)\\50CIsXLSX.xlsx\" attachment and adds it",
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
  "name": "user waits 30 secs",
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
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"24\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"24\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with warnings as \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithWarningsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 12",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 37",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 12",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 37",
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Change/IgnoreDuplicateCI\u0027s/Manual_Change.feature");
formatter.feature({
  "name": "Bulk Loading ignore duplicate CI\u0027s",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Manual_Bulk_Loading_Ignore_Duplicate_CI\u0027s_change"
    },
    {
      "name": "@SAO-427"
    }
  ]
});
formatter.scenario({
  "name": "Bulk Loading ignore duplicate CI\u0027s",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Manual_Bulk_Loading_Ignore_Duplicate_CI\u0027s_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading CI not found Prompt Change\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user clicks on Manual Input radio button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnManualInputRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Ignore Duplicate CIs checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnIgnoreDuplicateCIsCheckbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"LT DNS SIP;LT DNS SIP;FI DNS Gi;FI DNS Gn;FI DNS ENUM\" in manual CI search box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInManualCISearchBox(String)"
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
  "name": "first error message should display as \"The manually identified CIs are now being processed...\" on bulk ci window",
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
  "name": "user waits 3 secs",
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
  "name": "user validates \"Dup. CIs\" as \"2\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates total rows as \"5\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with warnings as \"5\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithWarningsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 2",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027FI DNS Gi\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 3",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027FI DNS Gn\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 4",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027FI DNS ENUM\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 5",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 2",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 3",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 4",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 5",
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Change/Other_Change/Additional_Definitions_Default_Settings_Change.feature");
formatter.feature({
  "name": "checking of bulk loading additional definitions default settings",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Bulk_Loading_Additional_Definitions_Default_Settings_Change"
    },
    {
      "name": "@SAO-427"
    },
    {
      "name": "@other_change*"
    }
  ]
});
formatter.scenario({
  "name": "user checks the bulk loading additional definitions default settings",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Bulk_Loading_Additional_Definitions_Default_Settings_Change"
    },
    {
      "name": "@SAO-427"
    },
    {
      "name": "@other_change*"
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
  "name": "user clicks save button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message should display as \"Please fill up all the mandatory fields in the Details Panel to create a Change Request. (ARERR 10000)\" on change record page",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.errorMessageShouldDisplayAsOnChangeRecordPage(String)"
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
  "name": "user clicks save button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple error messages should appear with red boarder around fields",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.multipleErrorMessagesShouldAppearWithRedBoarderAroundFields()"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading CI not found Prompt Change\"",
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
  "name": "user enters start time as 24 hours fast from current sweden time in \"M/dd/YYYY HH:mm:ss\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersStartTimeAsHoursFastFromCurrentSwedenTimeInFormat(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters end time as 28 hours fast from current sweden time in \"M/dd/YYYY HH:mm:ss\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersEndTimeAsHoursFastFromCurrentSwedenTimeInFormat(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets request start and end time on change record page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userGetsRequestStartAndEndTimeOnChangeRecordPage()"
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
  "name": "user waits",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userWaits()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of tabs \"Timeline:Diagnosis:Risk:Schedule:Interested Parties:Approval:Notifications:Linked Items:Work Orders:Service Level:Related Project:Service Info:Telenor\" on change record page",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userValidatesAvailabilityOfTabsOnChangeRecordPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates \"Impact Type*\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Impact Type default value is \"Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple statuses \"Planned:Un-Planned:(clear)\" should be available in Impact Type dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.multipleStatusesShouldBeAvailableInImpactTypeDropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Category*\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple statuses \"Actual:Potential:(clear)\" should be available in \"Category*\" dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.multipleStatusesShouldBeAvailableInDropdown(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Level*\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"From*\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"To+\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Upload File\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Manual Input\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Ignore Duplicate CIs\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Change/Other_Change/CI_not_found_prompt_for_CI_Search_Change.feature");
formatter.feature({
  "name": "checking of bulk loading Location details",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CI_not_found_prompt_for_CI_Search_change"
    },
    {
      "name": "@SAO-427"
    },
    {
      "name": "@other_change*"
    }
  ]
});
formatter.scenario({
  "name": "user checks the bulk loading location details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CI_not_found_prompt_for_CI_Search_change"
    },
    {
      "name": "@SAO-427"
    },
    {
      "name": "@other_change*"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading CI not found Prompt Change\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates \"Impact Type*\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Category*\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Level*\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"From*\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"To+\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Ignore Duplicate CIs\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Upload File\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Manual Input\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Download File Template\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Upload Import File\" is visible on bulk CI loading window tagname \"div\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Save is visible on bulk CI loading window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesSaveIsVisibleOnBulkCILoadingWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Close is visible on bulk CI loading window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCloseIsVisibleOnBulkCILoadingWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Manual Input radio button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnManualInputRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"Degradation of Service\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"abcdefghijklmnopqrstuvwxyz\" in manual CI search box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInManualCISearchBox(String)"
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
  "name": "first error message should display as \"The manually identified CIs are now being processed...\" on bulk ci window",
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToFrame()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates related jobs has 1 entry",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRelatedJobsHasEntry(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Related CIs\" tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Warning/Error Messages\" as \"No CI named \u0027abcdefghijklmnopqrstuvwxyz\u0027 was found!\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 1",
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Change/Other_Change/Error_Message_Impact_Duration_Change.feature");
formatter.feature({
  "name": "checking of bulk loading error message impact duration for change ticket",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Bulk_Loading_Error_Message_impact_duration_Change"
    },
    {
      "name": "@SAO-427"
    },
    {
      "name": "@other_change*"
    }
  ]
});
formatter.scenario({
  "name": "user checks the impact duration message of bulk loading error",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Bulk_Loading_Error_Message_impact_duration_Change"
    },
    {
      "name": "@SAO-427"
    },
    {
      "name": "@other_change*"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading CI not found Prompt Change\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user selects impact type as \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsImpactTypeAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters bulk ci impact from date as 24 hours in \"MM/dd/YYYY HH:mm:ss\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersBulkCiImpactFromDateAsHoursInFormat(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters bulk ci impact to date as 30 hours in \"MM/dd/YYYY HH:mm:ss\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersBulkCiImpactToDateAsHoursInFormat(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Manual Input radio button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnManualInputRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"One Workflow\" in manual CI search box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInManualCISearchBox(String)"
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
  "name": "user should see error message of \"(300825): From date cannot be in the future for planned impact record.\" on bulk cI window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userShouldSeeErrorMessageOfOnBulkCIWindow(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see error message of \"To date cannot be in the future for un-planned impact record.\" on bulk cI window and clicks ok",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userShouldSeeErrorMessageOfOnBulkCIWindowAndClicksOk(String)"
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
  "name": "user enters bulk ci impact from date as -25 hours in \"MM/dd/YYYY HH:mm:ss\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersBulkCiImpactFromDateAsHoursInFormat(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters bulk ci impact to date as -30 hours in \"MM/dd/YYYY HH:mm:ss\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersBulkCiImpactToDateAsHoursInFormat(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button under bulk import",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSaveButtonUnderBulkImport()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see error message of \"\u0027Impact From\u0027 cannot be set in the past. (ARERR 10000)\" on bulk cI window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userShouldSeeErrorMessageOfOnBulkCIWindow(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see error message of \"\u0027Impact From\u0027 cannot be set in the past. (ARERR 10000)\" on bulk cI window and clicks ok",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userShouldSeeErrorMessageOfOnBulkCIWindowAndClicksOk(String)"
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
  "name": "user enters bulk ci impact from date as 48 hours in \"MM/dd/YYYY HH:mm:ss\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersBulkCiImpactFromDateAsHoursInFormat(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters bulk ci impact to date as 24 hours in \"MM/dd/YYYY HH:mm:ss\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersBulkCiImpactToDateAsHoursInFormat(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button under bulk import",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSaveButtonUnderBulkImport()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see error message of \"Impact From date must be before Impact To date.\" on bulk cI window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userShouldSeeErrorMessageOfOnBulkCIWindow(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see error message of \"Impact From date must be before Impact To date.\" on bulk cI window and clicks ok",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userShouldSeeErrorMessageOfOnBulkCIWindowAndClicksOk(String)"
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
  "name": "user enters \"\" in manual CI search box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInManualCISearchBox(String)"
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
  "name": "user should see error message of \"Please type in or paste the list of CIs you you want to relate. (ARERR 10000)\" on bulk cI window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userShouldSeeErrorMessageOfOnBulkCIWindow(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see error message of \"Please type in or paste the list of CIs you you want to relate. (ARERR 10000)\" on bulk cI window and clicks ok",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userShouldSeeErrorMessageOfOnBulkCIWindowAndClicksOk(String)"
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
  "name": "user clicks on bulk loading close button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Change/Other_Change/Error_Message_Structure_Change.feature");
formatter.feature({
  "name": "checking of bulk loading error message structure",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Bulk_Loading_Error_Message_Structure_Change"
    },
    {
      "name": "@SAO-427"
    },
    {
      "name": "@other_change*"
    }
  ]
});
formatter.scenario({
  "name": "user checks the message structure of bulk loading error",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Bulk_Loading_Error_Message_Structure_Change"
    },
    {
      "name": "@SAO-427"
    },
    {
      "name": "@other_change*"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading CI not found Prompt Change\"",
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
  "name": "user enters start time as 24 hours fast from current sweden time in \"MM/dd/yyyy HH:mm:ss\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userEntersStartTimeAsHoursFastFromCurrentSwedenTimeInFormat(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters end time as 28 hours fast from current sweden time in \"MM/dd/yyyy HH:mm:ss\" format",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user clicks on Manual Input radio button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnManualInputRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"Degradation of Service\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"One Workflow\" in manual CI search box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInManualCISearchBox(String)"
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
  "name": "first error message should display as \"The manually identified CIs are now being processed...\" on bulk ci window",
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
  "name": "user waits 20 secs",
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
  "name": "user validates bulk ci loading table contains columns \"Submitter:Import Type:Date:Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesBulkCiLoadingTableContainsColumn(String)"
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
  "name": "user validates \"CI Name\" as \"One Workflow\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"Completed\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Dup. CIs\" as \"2\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates total rows as \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Other Fields\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Request ID, BIR_GUID, Submitter, Create Date, Last Modified, Modified Date, import start time, import end time, import duration fields are updated",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRequestIDBIR_GUIDSubmitterCreateDateLastModifiedModifiedDateImportStartTimeImportEndTimeImportDurationFieldsAreUpdated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Submitter\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Import Description\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Add Bulk Import button",
  "keyword": "When "
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
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "Then "
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
  "name": "user searches for \"Test Attachments\\10 CI\u0027s - Incorrect Names\\TEXT.txt\" attachment and adds it",
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
  "name": "user waits 10 secs",
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
  "name": "user highlights \"TXT\" under \"Import Type\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userHighlightsUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates attached document is visible",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTxtDocIsVisible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Save Import File\" is visible on bulk CI loading window tagname \"div\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
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
  "name": "user validates at least one CI has \"With Warnings\" under \"Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAtLeastOneCIHasUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Other Fields\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "import Start Date and End date should be updated",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.importStartDateAndEndDateShouldBeUpdated()"
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
  "name": "user clicks on Add Bulk Import button",
  "keyword": "When "
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
  "name": "user clicks on Manual Input radio button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnManualInputRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"Degradation of Service\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"One Workflow\" in manual CI search box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInManualCISearchBox(String)"
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
  "name": "first error message should display as \"The manually identified CIs are now being processed...\" on bulk ci window",
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
  "name": "user waits 10 secs",
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
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user highlights Completed under Status in row three",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userHighlightsCompletedUnderStatusInRowThree()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"CI Name\" as \"One Workflow\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Errors\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Dup. CIs\" as \"2\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates total rows as \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Other Fields\" tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates import duration txt field is updated",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImportDurationTxtFieldIsUpdated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Change/PrimaryCICheck/AllFileTypes_Change.feature");
formatter.feature({
  "name": "checking of bulk loading additional definitions default settings",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Text_Bulk_Loading_Primary_CI_Default_Settings_change"
    },
    {
      "name": "@SAO-427"
    }
  ]
});
formatter.scenarioOutline({
  "name": "user checks the bulk loading additional definitions default settings",
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading Primary CI Check\"",
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
  "name": "user clicks on Diagnosis tab",
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
  "name": "user validates Impact Type default value is \"Planned\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
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
  "name": "user waits 30 secs",
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
  "keyword": "And "
});
formatter.step({
  "name": "user validates \"Dup. CIs\" as \"1\" in row 1",
  "keyword": "And "
});
formatter.step({
  "name": "user validates total rows as \"10\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Rows OK as \"10\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with warnings as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.step({
  "name": "user waits 10 secs",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
  "keyword": "And "
});
formatter.step({
  "name": "user validates primary ci as \"SE_AP_alvesta-radmannen-ap1\"",
  "keyword": "Then "
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
        "Test Attachments\\10 CI\u0027s - Correct Names\\CSV.csv"
      ]
    },
    {
      "cells": [
        "Test Attachments\\10 CI\u0027s - Correct Names\\FILE.xlsx"
      ]
    },
    {
      "cells": [
        "Test Attachments\\10 CI\u0027s - Correct Names\\XLS.xls"
      ]
    },
    {
      "cells": [
        "Test Attachments\\10 CI\u0027s - Correct Names\\TEXT.txt"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user checks the bulk loading additional definitions default settings",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Text_Bulk_Loading_Primary_CI_Default_Settings_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading Primary CI Check\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\10 CI\u0027s - Correct Names\\CSV.csv\" attachment and adds it",
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
  "name": "user waits 30 secs",
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
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Dup. CIs\" as \"1\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
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
  "name": "user validates Rows OK as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAtLeastOneCIHasUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user waits 10 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnTicketRefreshButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates primary ci as \"SE_AP_alvesta-radmannen-ap1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesPrimaryCiAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the bulk loading additional definitions default settings",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Text_Bulk_Loading_Primary_CI_Default_Settings_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading Primary CI Check\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\10 CI\u0027s - Correct Names\\FILE.xlsx\" attachment and adds it",
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
  "name": "user waits 30 secs",
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
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Dup. CIs\" as \"1\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
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
  "name": "user validates Rows OK as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAtLeastOneCIHasUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user waits 10 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnTicketRefreshButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates primary ci as \"SE_AP_alvesta-radmannen-ap1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesPrimaryCiAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the bulk loading additional definitions default settings",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Text_Bulk_Loading_Primary_CI_Default_Settings_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading Primary CI Check\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\10 CI\u0027s - Correct Names\\XLS.xls\" attachment and adds it",
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
  "name": "user waits 30 secs",
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
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Dup. CIs\" as \"1\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
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
  "name": "user validates Rows OK as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAtLeastOneCIHasUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user waits 10 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnTicketRefreshButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates primary ci as \"SE_AP_alvesta-radmannen-ap1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesPrimaryCiAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the bulk loading additional definitions default settings",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Text_Bulk_Loading_Primary_CI_Default_Settings_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading Primary CI Check\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\10 CI\u0027s - Correct Names\\TEXT.txt\" attachment and adds it",
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
  "name": "user waits 30 secs",
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
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Dup. CIs\" as \"1\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
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
  "name": "user validates Rows OK as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAtLeastOneCIHasUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user waits 10 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnTicketRefreshButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates primary ci as \"SE_AP_alvesta-radmannen-ap1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesPrimaryCiAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Change/PrimaryCICheck/Manual_Change.feature");
formatter.feature({
  "name": "checking of bulk loading additional definitions default settings",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Manual_Bulk_Loading_Primary_CI_Default_Settings_change"
    },
    {
      "name": "@SAO-427"
    }
  ]
});
formatter.scenario({
  "name": "user checks the bulk loading additional definitions default settings",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Manual_Bulk_Loading_Primary_CI_Default_Settings_change"
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
  "name": "user enters description as \"TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading CI not found Prompt Change\"",
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Manual Input radio button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnManualInputRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SE_AP_alvesta-radmannen-ap1;SE_AP_alvesta-radmannen-ap2;SE_AP_alvesta-radmannen-ap3;SE_AP_alvesta-radmannen-ap4;\" in manual CI search box",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInManualCISearchBox(String)"
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
  "name": "first error message should display as \"The manually identified CIs are now being processed...\" on bulk ci window",
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
  "name": "user waits 10 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnTicketRefreshButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates primary ci as \"SE_AP_alvesta-radmannen-ap1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesPrimaryCiAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Trouble/Format/50CI\u0027s/AllFileTypes_Trouble.feature");
formatter.feature({
  "name": "checking of bulk loading format",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_trouble_50CIS"
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
  "name": "user clicks on create trouble event",
  "keyword": "When "
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "And "
});
formatter.step({
  "name": "trouble record form should appear in new tab",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Format 50 CI\u0027s\" in Title field",
  "keyword": "And "
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Format 50 CI\u0027s\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "ticket should be created and status should be assigned",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
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
  "name": "user waits 50 secs",
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
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Rows OK as \"50\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
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
        "Test Attachments\\50 CI\u0027s\\50CIsCSV.csv"
      ]
    },
    {
      "cells": [
        "Test Attachments\\50 CI\u0027s\\50CIsDOC.txt"
      ]
    },
    {
      "cells": [
        "Test Attachments\\50 CI\u0027s\\50CIsXLS.xls"
      ]
    },
    {
      "cells": [
        "Test Attachments\\50 CI\u0027s\\50CIsXLSX.xlsx"
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
      "name": "@Bulk_Loading_Format_trouble_50CIS"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Format 50 CI\u0027s\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Format 50 CI\u0027s\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\50 CI\u0027s\\50CIsCSV.csv\" attachment and adds it",
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
  "name": "user waits 50 secs",
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
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAtLeastOneCIHasUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_trouble_50CIS"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Format 50 CI\u0027s\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Format 50 CI\u0027s\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\50 CI\u0027s\\50CIsDOC.txt\" attachment and adds it",
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
  "name": "user waits 50 secs",
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
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAtLeastOneCIHasUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_trouble_50CIS"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Format 50 CI\u0027s\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Format 50 CI\u0027s\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\50 CI\u0027s\\50CIsXLS.xls\" attachment and adds it",
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
  "name": "user waits 50 secs",
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
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAtLeastOneCIHasUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_trouble_50CIS"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Format 50 CI\u0027s\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Format 50 CI\u0027s\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\50 CI\u0027s\\50CIsXLSX.xlsx\" attachment and adds it",
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
  "name": "user waits 50 secs",
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
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAtLeastOneCIHasUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Trouble/Format/50CI\u0027s/Manual_Trouble.feature");
formatter.feature({
  "name": "checking of bulk loading format",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_Trouble_50CIs_Manual"
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
  "name": "user clicks on create trouble event",
  "keyword": "When "
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "And "
});
formatter.step({
  "name": "trouble record form should appear in new tab",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading 50 CI\u0027s\" in Title field",
  "keyword": "And "
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading 50 CI\u0027s\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "ticket should be created and status should be assigned",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
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
  "name": "user clicks on Manual Input radio button",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003c50CIs\u003e\" in manual CI search box",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button under bulk import",
  "keyword": "Then "
});
formatter.step({
  "name": "first error message should display as \"The manually identified CIs are now being processed...\" on bulk ci window",
  "keyword": "And "
});
formatter.step({
  "name": "second error message should display as \"Please Check for the progress of this process in \\\"Show Bulk Import\\\". (ARNOTE 10000)\" on bulk ci window",
  "keyword": "And "
});
formatter.step({
  "name": "user waits 50 secs",
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
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Rows OK as \"50\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with warnings as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "50CIs"
      ]
    },
    {
      "cells": [
        "SE_LTECell_103392011;SE_LTECell_100895010;FI_LTECell_Valpe4H;FI_LTECell_Hauci1L;NO_LTECell_TLM150_L18-1;SE_AFG_AFG01SE;EE_LTECell_AABLAK2;SE_UMTSCell_100021;DK_UMTSCell_B0001S11;FI_UMTSCell_3G Labra2A;EE_UMTSCell_AABLAW2;SE_AFG_AFG02SE;SE_AFG_AFG89FI;SE_SGSN_FREMME2;DK_SGSN_AMBMME1;FI_SGSN_HKIMME02;EE_SGSN_KOORTMME1;NO_SGSN_OSL800MME1;LT_SGSN_VLMMME02;SE_MSCSERVER_FRE1MS;DK_MSCSERVER_AMB3MSC;FI_MSS_SMS01HKI;SE_AFG_AFG98SE;NO_MSS_OSLMSS01;SE_AFG_AFG99SE;FI_GSMCell_Maunu1;SE_AFG_REFAFG;tiksu PROD;aa325;aa323iptvapp03;fre-rep-s3;aa243as01;aa243as02;aa243as03;aa245as01;aa687bias03;aa687bias04;aa687biast03;aa687bias06;aa687bias07;gai-dhcp11-sn91;mordo;SE_ALARMMAP_ALARMMAP;SE_ALE_hogalid-ale1;ingest8;SE_ALE_hogalid-ale2;lamba;SE_ALE_m-hyllie-ale1;fd100;mta2"
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
      "name": "@Bulk_Loading_Format_Trouble_50CIs_Manual"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading 50 CI\u0027s\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading 50 CI\u0027s\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user clicks on Manual Input radio button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnManualInputRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SE_LTECell_103392011;SE_LTECell_100895010;FI_LTECell_Valpe4H;FI_LTECell_Hauci1L;NO_LTECell_TLM150_L18-1;SE_AFG_AFG01SE;EE_LTECell_AABLAK2;SE_UMTSCell_100021;DK_UMTSCell_B0001S11;FI_UMTSCell_3G Labra2A;EE_UMTSCell_AABLAW2;SE_AFG_AFG02SE;SE_AFG_AFG89FI;SE_SGSN_FREMME2;DK_SGSN_AMBMME1;FI_SGSN_HKIMME02;EE_SGSN_KOORTMME1;NO_SGSN_OSL800MME1;LT_SGSN_VLMMME02;SE_MSCSERVER_FRE1MS;DK_MSCSERVER_AMB3MSC;FI_MSS_SMS01HKI;SE_AFG_AFG98SE;NO_MSS_OSLMSS01;SE_AFG_AFG99SE;FI_GSMCell_Maunu1;SE_AFG_REFAFG;tiksu PROD;aa325;aa323iptvapp03;fre-rep-s3;aa243as01;aa243as02;aa243as03;aa245as01;aa687bias03;aa687bias04;aa687biast03;aa687bias06;aa687bias07;gai-dhcp11-sn91;mordo;SE_ALARMMAP_ALARMMAP;SE_ALE_hogalid-ale1;ingest8;SE_ALE_hogalid-ale2;lamba;SE_ALE_m-hyllie-ale1;fd100;mta2\" in manual CI search box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInManualCISearchBox(String)"
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
  "name": "first error message should display as \"The manually identified CIs are now being processed...\" on bulk ci window",
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
  "name": "user waits 50 secs",
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
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAtLeastOneCIHasUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Trouble/Format/DuplicateCI\u0027s/AllFileTypes_Duplicate_CI\u0027s_Trouble.feature");
formatter.feature({
  "name": "checking of bulk loading format",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_5duplicateCIs_trouble_2"
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
  "name": "user clicks on create trouble event",
  "keyword": "When "
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "And "
});
formatter.step({
  "name": "trouble record form should appear in new tab",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Format Duplicate CI\u0027s\" in Title field",
  "keyword": "And "
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Format Duplicate CI\u0027s\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "ticket should be created and status should be assigned",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
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
  "name": "user waits 10 secs",
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
    },
    {
      "cells": [
        "Test Attachments\\5DuplicateCIs\\5CIsTextDOC.txt"
      ]
    },
    {
      "cells": [
        "Test Attachments\\5DuplicateCIs\\5CIsXLS.xls"
      ]
    },
    {
      "cells": [
        "Test Attachments\\5DuplicateCIs\\5CIsXLSX.xlsx"
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
      "name": "@Bulk_Loading_Format_5duplicateCIs_trouble_2"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Format Duplicate CI\u0027s\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Format Duplicate CI\u0027s\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
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
  "name": "user waits 10 secs",
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_5duplicateCIs_trouble_2"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Format Duplicate CI\u0027s\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Format Duplicate CI\u0027s\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\5DuplicateCIs\\5CIsTextDOC.txt\" attachment and adds it",
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
  "name": "user waits 10 secs",
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_5duplicateCIs_trouble_2"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Format Duplicate CI\u0027s\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Format Duplicate CI\u0027s\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\5DuplicateCIs\\5CIsXLS.xls\" attachment and adds it",
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
  "name": "user waits 10 secs",
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_5duplicateCIs_trouble_2"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Format Duplicate CI\u0027s\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Format Duplicate CI\u0027s\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\5DuplicateCIs\\5CIsXLSX.xlsx\" attachment and adds it",
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
  "name": "user waits 10 secs",
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
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Trouble/Format/DuplicateCI\u0027s/Manual_DuplicateCI\u0027s.feature");
formatter.feature({
  "name": "checking of bulk loading format",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Manual_Bulk_Loading_Format_duplicateCIs_trouble"
    },
    {
      "name": "@SAO-427"
    }
  ]
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Manual_Bulk_Loading_Format_duplicateCIs_trouble"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Duplicate CI\u0027s\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Duplicate CI\u0027s\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Manual Input radio button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnManualInputRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Ignore Duplicate CIs checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnIgnoreDuplicateCIsCheckbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SE_AAA_AAA01SE;SE_AAA_AAA02SE;SE_AAA_AAA03SE;SE_AAA_AAA04SE;SE_AAA_AAA98SE;SE_AAA_AAA01SE;SE_AAA_AAA02SE;SE_AAA_AAA03SE;SE_AAA_AAA04SE;SE_AAA_AAA98SE\" in manual CI search box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInManualCISearchBox(String)"
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
  "name": "user waits 3 secs",
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
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Trouble/Format/IncorrectCINames/AllFileTypes_Trouble.feature");
formatter.feature({
  "name": "checking of bulk loading format",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_Incorrect_CI_Names_trouble"
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
  "name": "user clicks on create trouble event",
  "keyword": "When "
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "And "
});
formatter.step({
  "name": "trouble record form should appear in new tab",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Format Incorrect CI names\" in Title field",
  "keyword": "And "
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Format Incorrect CI names\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "ticket should be created and status should be assigned",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
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
  "name": "user waits 3 secs",
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
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with warnings as \"10\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates warning message as \"No CI named \u0027_AP_alvesta-radmannen-ap1\u0027 was found!\" in row 1",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on bulk loading close button",
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
        "Test Attachments\\10 CI\u0027s - Incorrect Names\\CSV.csv"
      ]
    },
    {
      "cells": [
        "Test Attachments\\10 CI\u0027s - Incorrect Names\\TEXT.txt"
      ]
    },
    {
      "cells": [
        "Test Attachments\\10 CI\u0027s - Incorrect Names\\XLS.xls"
      ]
    },
    {
      "cells": [
        "Test Attachments\\10 CI\u0027s - Incorrect Names\\XLSX.xlsx"
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
      "name": "@Bulk_Loading_Format_Incorrect_CI_Names_trouble"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Format Incorrect CI names\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Format Incorrect CI names\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\10 CI\u0027s - Incorrect Names\\CSV.csv\" attachment and adds it",
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
  "name": "user waits 3 secs",
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
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with warnings as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithWarningsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"No CI named \u0027_AP_alvesta-radmannen-ap1\u0027 was found!\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_Incorrect_CI_Names_trouble"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Format Incorrect CI names\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Format Incorrect CI names\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\10 CI\u0027s - Incorrect Names\\TEXT.txt\" attachment and adds it",
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
  "name": "user waits 3 secs",
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
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with warnings as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithWarningsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"No CI named \u0027_AP_alvesta-radmannen-ap1\u0027 was found!\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_Incorrect_CI_Names_trouble"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Format Incorrect CI names\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Format Incorrect CI names\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\10 CI\u0027s - Incorrect Names\\XLS.xls\" attachment and adds it",
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
  "name": "user waits 3 secs",
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
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with warnings as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithWarningsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"No CI named \u0027_AP_alvesta-radmannen-ap1\u0027 was found!\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_Incorrect_CI_Names_trouble"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Format Incorrect CI names\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Format Incorrect CI names\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\10 CI\u0027s - Incorrect Names\\XLSX.xlsx\" attachment and adds it",
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
  "name": "user waits 3 secs",
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
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with warnings as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithWarningsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"No CI named \u0027_AP_alvesta-radmannen-ap1\u0027 was found!\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
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
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Trouble/Format/IncorrectCINames/Manual_Trouble.feature");
formatter.feature({
  "name": "checking of bulk loading format",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Manual_Bulk_Loading_Format_IncorrectCIs_trouble"
    },
    {
      "name": "@SAO-427"
    }
  ]
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Manual_Bulk_Loading_Format_IncorrectCIs_trouble"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Incorrect CI names\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Incorrect CI names\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user clicks on Manual Input radio button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnManualInputRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"_AP_alvesta-radmannen-ap1;_AP_alvesta-radmannen-ap2;_AP_alvesta-radmannen-ap3;_AP_alvesta-radmannen-ap4;_AP_alvesta-radmannen-ap5\" in manual CI search box",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInManualCISearchBox(String)"
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
  "name": "first error message should display as \"The manually identified CIs are now being processed...\" on bulk ci window",
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
  "name": "user validates total rows as \"5\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with warnings as \"5\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithWarningsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates at least one CI has \"With Warnings\" under \"Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAtLeastOneCIHasUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"No CI named \u0027_AP_alvesta-radmannen-ap1\u0027 was found!\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Trouble/Format/IncorrectDataLayout/Location/AllFileTypes_Trouble.feature");
formatter.feature({
  "name": "checking of bulk loading format",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_Location_Trouble"
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
  "name": "user clicks on create trouble event",
  "keyword": "When "
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "And "
});
formatter.step({
  "name": "trouble record form should appear in new tab",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Incorrect data layout location\" in Title field",
  "keyword": "And "
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Incorrect data layout location\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "ticket should be created and status should be assigned",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
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
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
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
  "name": "user waits 40 secs",
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
  "name": "user validates total rows as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with warnings as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on bulk loading close button",
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
        "Test Attachments\\IncorrectFormatColumnLocation\\CSV.csv"
      ]
    },
    {
      "cells": [
        "Test Attachments\\IncorrectFormatColumnLocation\\BIR+Load+Template.xls"
      ]
    },
    {
      "cells": [
        "Test Attachments\\IncorrectFormatColumnLocation\\BIR+Load+Template.xlsx"
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
      "name": "@Bulk_Loading_Format_Location_Trouble"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Incorrect data layout location\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Incorrect data layout location\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\IncorrectFormatColumnLocation\\CSV.csv\" attachment and adds it",
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
  "name": "user waits 40 secs",
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
  "name": "user validates total rows as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user clicks on bulk loading close button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_Location_Trouble"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Incorrect data layout location\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Incorrect data layout location\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\IncorrectFormatColumnLocation\\BIR+Load+Template.xls\" attachment and adds it",
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
  "name": "user waits 40 secs",
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
  "name": "user validates total rows as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user clicks on bulk loading close button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_Location_Trouble"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Incorrect data layout location\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Incorrect data layout location\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\IncorrectFormatColumnLocation\\BIR+Load+Template.xlsx\" attachment and adds it",
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
  "name": "user waits 40 secs",
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
  "name": "user validates total rows as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user clicks on bulk loading close button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Trouble/Format/IncorrectDataLayout/Name/AllFileTypes_Trouble.feature");
formatter.feature({
  "name": "checking of bulk loading format",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_IncorrectColumnName_Trouble"
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
  "name": "user clicks on create trouble event",
  "keyword": "When "
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "And "
});
formatter.step({
  "name": "trouble record form should appear in new tab",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Format- Incorrect column name\" in Title field",
  "keyword": "And "
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Format- Incorrect column name\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "ticket should be created and status should be assigned",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
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
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
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
  "name": "user waits 30 secs",
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
  "name": "user validates Rows OK as \"10\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with warnings as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on bulk loading close button",
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
        "Test Attachments\\IncorrectFormatColumnName\\CSV.csv"
      ]
    },
    {
      "cells": [
        "Test Attachments\\IncorrectFormatColumnName\\TEXT.txt"
      ]
    },
    {
      "cells": [
        "Test Attachments\\IncorrectFormatColumnName\\XLS.xls"
      ]
    },
    {
      "cells": [
        "Test Attachments\\IncorrectFormatColumnName\\XLSX.xlsx"
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
      "name": "@Bulk_Loading_Format_IncorrectColumnName_Trouble"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Format- Incorrect column name\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Format- Incorrect column name\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\IncorrectFormatColumnName\\CSV.csv\" attachment and adds it",
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
  "name": "user waits 30 secs",
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
  "name": "user validates Rows OK as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user clicks on bulk loading close button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_IncorrectColumnName_Trouble"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Format- Incorrect column name\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Format- Incorrect column name\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\IncorrectFormatColumnName\\TEXT.txt\" attachment and adds it",
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
  "name": "user waits 30 secs",
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
  "name": "user validates Rows OK as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user clicks on bulk loading close button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_IncorrectColumnName_Trouble"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Format- Incorrect column name\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Format- Incorrect column name\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\IncorrectFormatColumnName\\XLS.xls\" attachment and adds it",
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
  "name": "user waits 30 secs",
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
  "name": "user validates Rows OK as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user clicks on bulk loading close button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the format of bulk loading format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Format_IncorrectColumnName_Trouble"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Format- Incorrect column name\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Format- Incorrect column name\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\IncorrectFormatColumnName\\XLSX.xlsx\" attachment and adds it",
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
  "name": "user waits 30 secs",
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
  "name": "user validates Rows OK as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user clicks on bulk loading close button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Trouble/IgnoreDuplicateCI\u0027s/AllFileTypes_Trouble.feature");
formatter.feature({
  "name": "Bulk Loading ignore duplicate CI\u0027s for trouble ticket",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Bulk_Loading_Ignore_Duplicate_CI\u0027s_Trouble"
    },
    {
      "name": "@SAO-427"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Bulk Loading ignore duplicate CI\u0027s",
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
  "name": "user clicks on create trouble event",
  "keyword": "When "
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "And "
});
formatter.step({
  "name": "trouble record form should appear in new tab",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Ignore duplicate CIs\" in Title field",
  "keyword": "And "
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Ignore duplicate CIs\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "ticket should be created and status should be assigned",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Ignore Duplicate CIs checkbox",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
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
  "name": "user waits 30 secs",
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
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Rows OK as \"24\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with errors as \"24\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with warnings as \"2\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 12",
  "keyword": "And "
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 37",
  "keyword": "And "
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 12",
  "keyword": "And "
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 37",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
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
        "Test Attachments\\50 CI\u0027s (WithDuplicates)\\50CIsCSV.csv"
      ]
    },
    {
      "cells": [
        "Test Attachments\\50 CI\u0027s (WithDuplicates)\\50CIsTextDOC.txt"
      ]
    },
    {
      "cells": [
        "Test Attachments\\50 CI\u0027s (WithDuplicates)\\50CIsXLS.xls"
      ]
    },
    {
      "cells": [
        "Test Attachments\\50 CI\u0027s (WithDuplicates)\\50CIsXLSX.xlsx"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Bulk Loading ignore duplicate CI\u0027s",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Ignore_Duplicate_CI\u0027s_Trouble"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Ignore duplicate CIs\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Ignore duplicate CIs\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Ignore Duplicate CIs checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnIgnoreDuplicateCIsCheckbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\50 CI\u0027s (WithDuplicates)\\50CIsCSV.csv\" attachment and adds it",
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
  "name": "user waits 30 secs",
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
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"24\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"24\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with warnings as \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithWarningsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 12",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 37",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 12",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 37",
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Bulk Loading ignore duplicate CI\u0027s",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Ignore_Duplicate_CI\u0027s_Trouble"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Ignore duplicate CIs\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Ignore duplicate CIs\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Ignore Duplicate CIs checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnIgnoreDuplicateCIsCheckbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\50 CI\u0027s (WithDuplicates)\\50CIsTextDOC.txt\" attachment and adds it",
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
  "name": "user waits 30 secs",
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
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"24\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"24\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with warnings as \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithWarningsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 12",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 37",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 12",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 37",
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Bulk Loading ignore duplicate CI\u0027s",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Ignore_Duplicate_CI\u0027s_Trouble"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Ignore duplicate CIs\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Ignore duplicate CIs\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Ignore Duplicate CIs checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnIgnoreDuplicateCIsCheckbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\50 CI\u0027s (WithDuplicates)\\50CIsXLS.xls\" attachment and adds it",
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
  "name": "user waits 30 secs",
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
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"24\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"24\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with warnings as \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithWarningsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 12",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 37",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 12",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 37",
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Bulk Loading ignore duplicate CI\u0027s",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bulk_Loading_Ignore_Duplicate_CI\u0027s_Trouble"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Ignore duplicate CIs\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Ignore duplicate CIs\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Ignore Duplicate CIs checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnIgnoreDuplicateCIsCheckbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\50 CI\u0027s (WithDuplicates)\\50CIsXLSX.xlsx\" attachment and adds it",
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
  "name": "user waits 30 secs",
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
  "name": "user validates total rows as \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"24\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"24\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with warnings as \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithWarningsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 12",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 37",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 12",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 37",
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Trouble/IgnoreDuplicateCI\u0027s/Manual_Trouble.feature");
formatter.feature({
  "name": "Bulk Loading ignore duplicate CI\u0027s",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Bulk_Loading_Ignore_Duplicate_CI\u0027s_Trouble_Manual"
    },
    {
      "name": "@SAO-427"
    }
  ]
});
formatter.scenario({
  "name": "Bulk Loading ignore duplicate CI\u0027s",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Bulk_Loading_Ignore_Duplicate_CI\u0027s_Trouble_Manual"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading CI not found Prompt\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading CI not found Prompt\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user clicks on Manual Input radio button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnManualInputRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Ignore Duplicate CIs checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnIgnoreDuplicateCIsCheckbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"LT DNS SIP;LT DNS SIP;FI DNS Gi;FI DNS Gn;FI DNS ENUM\" in manual CI search box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInManualCISearchBox(String)"
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
  "name": "first error message should display as \"The manually identified CIs are now being processed...\" on bulk ci window",
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
  "name": "user validates \"Dup. CIs\" as \"2\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates at least one CI has \"With Warnings\" under \"Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAtLeastOneCIHasUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates total rows as \"5\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with warnings as \"5\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithWarningsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027LT DNS SIP\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 2",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027FI DNS Gi\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 3",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027FI DNS Gn\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 4",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates warning message as \"Multiple CIs named \u0027FI DNS ENUM\u0027 were found, and the import job is configured to Ignore Duplicate CIs!\" in row 5",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWarningMessageAsInRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 2",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 3",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 4",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 5",
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Trouble/Other_Trouble/Additional_Definitions_Default_Settings.feature");
formatter.feature({
  "name": "checking of bulk loading additional definitions default settings",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Bulk_Loading_Additional_Definitions_Default_Settings_Trouble"
    },
    {
      "name": "@SAO-427"
    },
    {
      "name": "@other_trouble"
    }
  ]
});
formatter.scenario({
  "name": "user checks the bulk loading additional definitions default settings",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Bulk_Loading_Additional_Definitions_Default_Settings_Trouble"
    },
    {
      "name": "@SAO-427"
    },
    {
      "name": "@other_trouble"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Error Message - Structure\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Error Message - Structure\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user gets event start time value",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userGetsEventStartTimeValue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates \"Impact Type*\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple statuses \"Planned:Un-Planned:(clear)\" should be available in Impact Type dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.multipleStatusesShouldBeAvailableInImpactTypeDropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Category*\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple statuses \"Actual:Potential:(clear)\" should be available in \"Category*\" dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.multipleStatusesShouldBeAvailableInDropdown(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Level*\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"From*\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates impact from time is same as event start time",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactFromTimeIsSameAsEventStartTime()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"To+\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Upload File\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Manual Input\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Ignore Duplicate CIs\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Trouble/Other_Trouble/CI_not_found_prompt_for_CI_Search.feature");
formatter.feature({
  "name": "checking of bulk loading CI not found prompt for CI search",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SAO-427-BR2430_CI_not_found_prompt_for_CI_Search_trouble"
    },
    {
      "name": "@SAO-427"
    },
    {
      "name": "@other_trouble"
    }
  ]
});
formatter.scenario({
  "name": "checking of bulk loading CI not found prompt for CI search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SAO-427-BR2430_CI_not_found_prompt_for_CI_Search_trouble"
    },
    {
      "name": "@SAO-427"
    },
    {
      "name": "@other_trouble"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading CI not found Prompt\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading CI not found Prompt\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates \"Impact Type*\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Category*\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Level*\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"From*\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"To+\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Ignore Duplicate CIs\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Upload File\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Manual Input\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Download File Template\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Upload Import File\" is visible on bulk CI loading window tagname \"div\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Save is visible on bulk CI loading window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesSaveIsVisibleOnBulkCILoadingWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Close is visible on bulk CI loading window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCloseIsVisibleOnBulkCILoadingWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Manual Input radio button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnManualInputRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"Degradation of Service\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"abcdefghijklmnopqrstuvwxyz\" in manual CI search box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInManualCISearchBox(String)"
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
  "name": "first error message should display as \"The manually identified CIs are now being processed...\" on bulk ci window",
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToFrame()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates related jobs has 1 entry",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRelatedJobsHasEntry(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Related CIs\" tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Warning/Error Messages\" as \"No CI named \u0027abcdefghijklmnopqrstuvwxyz\u0027 was found!\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Warnings\" in row 1",
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Trouble/Other_Trouble/Error_Message_Impact_Duration.feature");
formatter.feature({
  "name": "checking of bulk loading error message impact duration for trouble ticket",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Bulk_Loading_Error_Message_Impact_Duration"
    },
    {
      "name": "@SAO-427"
    },
    {
      "name": "@other_trouble"
    }
  ]
});
formatter.scenario({
  "name": "user checks the impact duration message of bulk loading error",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Bulk_Loading_Error_Message_Impact_Duration"
    },
    {
      "name": "@SAO-427"
    },
    {
      "name": "@other_trouble"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Error Message - Impact Duration\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Error Message - Impact Duration\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user enters bulk ci impact from date as 72 hours in \"MM/dd/YYYY HH:mm:ss\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersBulkCiImpactFromDateAsHoursInFormat(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters bulk ci impact to date as 96 hours in \"MM/dd/YYYY HH:mm:ss\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersBulkCiImpactToDateAsHoursInFormat(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Manual Input radio button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnManualInputRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"One Workflow\" in manual CI search box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInManualCISearchBox(String)"
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
  "name": "user should see error message of \"(300825): From date cannot be in the future for un-planned impact record.\" on bulk cI window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userShouldSeeErrorMessageOfOnBulkCIWindow(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see error message of \"To date cannot be in the future for un-planned impact record.\" on bulk cI window and clicks ok",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userShouldSeeErrorMessageOfOnBulkCIWindowAndClicksOk(String)"
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
  "name": "user enters bulk ci impact to date as 12 hours in \"MM/dd/YYYY HH:mm:ss\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersBulkCiImpactToDateAsHoursInFormat(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button under bulk import",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSaveButtonUnderBulkImport()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see error message of \"(300825): From date cannot be in the future for un-planned impact record.\" on bulk cI window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userShouldSeeErrorMessageOfOnBulkCIWindow(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see error message of \"Impact From date must be before Impact To date.\" on bulk cI window and clicks ok",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userShouldSeeErrorMessageOfOnBulkCIWindowAndClicksOk(String)"
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
  "name": "user enters bulk ci impact from date as 48 hours in \"MM/dd/YYYY HH:mm:ss\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersBulkCiImpactFromDateAsHoursInFormat(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters bulk ci impact to date as 24 hours in \"MM/dd/YYYY HH:mm:ss\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersBulkCiImpactToDateAsHoursInFormat(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button under bulk import",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSaveButtonUnderBulkImport()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see error message of \"Impact From date must be before Impact To date.\" on bulk cI window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userShouldSeeErrorMessageOfOnBulkCIWindow(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see error message of \"Impact From date must be before Impact To date.\" on bulk cI window and clicks ok",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userShouldSeeErrorMessageOfOnBulkCIWindowAndClicksOk(String)"
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
  "name": "user clears manual CI text field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClearsManualCITextField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button under bulk import",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSaveButtonUnderBulkImport()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see error message of \"Please type in or paste the list of CIs you you want to relate. (ARERR 10000)\" on bulk cI window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userShouldSeeErrorMessageOfOnBulkCIWindow(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see error message of \"Please type in or paste the list of CIs you you want to relate. (ARERR 10000)\" on bulk cI window and clicks ok",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userShouldSeeErrorMessageOfOnBulkCIWindowAndClicksOk(String)"
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
  "name": "user clicks on bulk loading close button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Trouble/Other_Trouble/Error_Message_Impact_Duration_Trouble.feature");
formatter.feature({
  "name": "checking of bulk loading error message impact duration",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Bulk_Loading_Error_Message_Impact_Duration_Trouble"
    },
    {
      "name": "@SAO-427"
    },
    {
      "name": "@other_trouble"
    }
  ]
});
formatter.scenario({
  "name": "user checks the impact duration message of bulk loading error",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Bulk_Loading_Error_Message_Impact_Duration_Trouble"
    },
    {
      "name": "@SAO-427"
    },
    {
      "name": "@other_trouble"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Error Message - Impact Duration\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Error Message - Impact Duration\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user enters bulk ci impact from date as 24 hours in \"MM/dd/YYYY HH:mm:ss\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersBulkCiImpactFromDateAsHoursInFormat(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters bulk ci impact to date as 30 hours in \"MM/dd/YYYY HH:mm:ss\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersBulkCiImpactToDateAsHoursInFormat(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Manual Input radio button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnManualInputRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"One Workflow\" in manual CI search box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInManualCISearchBox(String)"
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
  "name": "user should see error message of \"(300825): From date cannot be in the future for un-planned impact record.\" on bulk cI window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userShouldSeeErrorMessageOfOnBulkCIWindow(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see error message of \"To date cannot be in the future for un-planned impact record.\" on bulk cI window and clicks ok",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userShouldSeeErrorMessageOfOnBulkCIWindowAndClicksOk(String)"
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
  "name": "user enters bulk ci impact to date as 12 hours in \"MM/dd/YYYY HH:mm:ss\" format",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersBulkCiImpactToDateAsHoursInFormat(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button under bulk import",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSaveButtonUnderBulkImport()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see error message of \"(300825): From date cannot be in the future for un-planned impact record.\" on bulk cI window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userShouldSeeErrorMessageOfOnBulkCIWindow(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see error message of \"Impact From date must be before Impact To date.\" on bulk cI window and clicks ok",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userShouldSeeErrorMessageOfOnBulkCIWindowAndClicksOk(String)"
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
  "name": "user clears manual CI text field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClearsManualCITextField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button under bulk import",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSaveButtonUnderBulkImport()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see error message of \"Please type in or paste the list of CIs you you want to relate. (ARERR 10000)\" on bulk cI window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userShouldSeeErrorMessageOfOnBulkCIWindow(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see error message of \"Please type in or paste the list of CIs you you want to relate. (ARERR 10000)\" on bulk cI window and clicks ok",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userShouldSeeErrorMessageOfOnBulkCIWindowAndClicksOk(String)"
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
  "name": "user clicks on bulk loading close button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Trouble/Other_Trouble/Error_Message_Structure.feature");
formatter.feature({
  "name": "checking of bulk loading error message structure",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SAO-427-BR2862-Bulk_Loading_Error_Message_Structure_Trouble"
    },
    {
      "name": "@SAO-427"
    },
    {
      "name": "@other_trouble"
    }
  ]
});
formatter.scenario({
  "name": "user checks the message structure of bulk loading error",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SAO-427-BR2862-Bulk_Loading_Error_Message_Structure_Trouble"
    },
    {
      "name": "@SAO-427"
    },
    {
      "name": "@other_trouble"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Error Message - Structure\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Error Message - Structure\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user clicks on Manual Input radio button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnManualInputRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"Degradation of Service\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"One Workflow\" in manual CI search box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInManualCISearchBox(String)"
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
  "name": "first error message should display as \"The manually identified CIs are now being processed...\" on bulk ci window",
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
  "name": "user waits 10 secs",
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
  "name": "user validates bulk ci loading table contains columns \"Submitter:Import Type:Date:Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesBulkCiLoadingTableContainsColumn(String)"
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
  "name": "user validates \"CI Name\" as \"One Workflow\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"Completed\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Dup. CIs\" as \"2\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates total rows as \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Other Fields\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Request ID, BIR_GUID, Submitter, Create Date, Last Modified, Modified Date, import start time, import end time, import duration fields are updated",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRequestIDBIR_GUIDSubmitterCreateDateLastModifiedModifiedDateImportStartTimeImportEndTimeImportDurationFieldsAreUpdated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Submitter\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Import Description\" is visible on bulk CI loading window tagname \"label\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Add Bulk Import button",
  "keyword": "When "
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
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "Then "
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
  "name": "user searches for \"Test Attachments\\10 CI\u0027s - Incorrect Names\\TEXT.txt\" attachment and adds it",
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
  "name": "user waits 20 secs",
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
  "name": "user highlights \"TXT\" under \"Import Type\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userHighlightsUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates attached document is visible",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTxtDocIsVisible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Save Import File\" is visible on bulk CI loading window tagname \"div\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesIsVisibleOnBulkCILoadingWindowTagname(String,String)"
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
  "name": "user validates at least one CI has \"With Warnings\" under \"Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAtLeastOneCIHasUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Other Fields\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "import Start Date and End date should be updated",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.importStartDateAndEndDateShouldBeUpdated()"
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
  "name": "user clicks on Add Bulk Import button",
  "keyword": "When "
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
  "name": "user clicks on Manual Input radio button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnManualInputRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"Degradation of Service\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"One Workflow\" in manual CI search box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInManualCISearchBox(String)"
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
  "name": "first error message should display as \"The manually identified CIs are now being processed...\" on bulk ci window",
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
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user highlights Completed under Status in row three",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userHighlightsCompletedUnderStatusInRowThree()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"CI Name\" as \"One Workflow\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Status\" as \"With Errors\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Dup. CIs\" as \"2\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates total rows as \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesTotalRowsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Rows OK as \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesWithErrorsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Other Fields\" tab",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates import duration txt field is updated",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImportDurationTxtFieldIsUpdated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Trouble/PrimaryCICheck/AllFileTypes_Trouble.feature");
formatter.feature({
  "name": "checking of bulk loading additional definitions default settings",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AllFileTypes_Bulk_Loading_Primary_CI_Default_Settings"
    },
    {
      "name": "@SAO-427"
    }
  ]
});
formatter.scenarioOutline({
  "name": "user checks the bulk loading additional definitions default settings",
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
  "name": "user clicks on create trouble event",
  "keyword": "When "
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "And "
});
formatter.step({
  "name": "trouble record form should appear in new tab",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Primary CI Check\" in Title field",
  "keyword": "And "
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Primary CI Check\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "ticket should be created and status should be assigned",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.step({
  "name": "multiple statuses \"Planned:Un-Planned:(clear)\" should be available in Impact Type dropdown",
  "keyword": "Then "
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.step({
  "name": "multiple statuses \"Actual:Potential:(clear)\" should be available in \"Category*\" dropdown",
  "keyword": "Then "
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
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
  "name": "user waits 20 secs",
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
  "keyword": "And "
});
formatter.step({
  "name": "user validates \"Dup. CIs\" as \"1\" in row 1",
  "keyword": "And "
});
formatter.step({
  "name": "user validates total rows as \"10\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates Rows OK as \"10\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with errors as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates with warnings as \"0\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.step({
  "name": "user waits 10 secs",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
  "keyword": "And "
});
formatter.step({
  "name": "user validates primary ci as \"SE_AP_alvesta-radmannen-ap1\"",
  "keyword": "Then "
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
        "Test Attachments\\10 CI\u0027s - Correct Names\\CSV.csv"
      ]
    },
    {
      "cells": [
        "Test Attachments\\10 CI\u0027s - Correct Names\\FILE.xlsx"
      ]
    },
    {
      "cells": [
        "Test Attachments\\10 CI\u0027s - Correct Names\\XLS.xls"
      ]
    },
    {
      "cells": [
        "Test Attachments\\10 CI\u0027s - Correct Names\\TEXT.txt"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user checks the bulk loading additional definitions default settings",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AllFileTypes_Bulk_Loading_Primary_CI_Default_Settings"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Primary CI Check\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Primary CI Check\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple statuses \"Planned:Un-Planned:(clear)\" should be available in Impact Type dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.multipleStatusesShouldBeAvailableInImpactTypeDropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple statuses \"Actual:Potential:(clear)\" should be available in \"Category*\" dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.multipleStatusesShouldBeAvailableInDropdown(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\10 CI\u0027s - Correct Names\\CSV.csv\" attachment and adds it",
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
  "name": "user waits 20 secs",
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
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Dup. CIs\" as \"1\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
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
  "name": "user validates Rows OK as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAtLeastOneCIHasUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user waits 10 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnTicketRefreshButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates primary ci as \"SE_AP_alvesta-radmannen-ap1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesPrimaryCiAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the bulk loading additional definitions default settings",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AllFileTypes_Bulk_Loading_Primary_CI_Default_Settings"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Primary CI Check\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Primary CI Check\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple statuses \"Planned:Un-Planned:(clear)\" should be available in Impact Type dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.multipleStatusesShouldBeAvailableInImpactTypeDropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple statuses \"Actual:Potential:(clear)\" should be available in \"Category*\" dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.multipleStatusesShouldBeAvailableInDropdown(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\10 CI\u0027s - Correct Names\\FILE.xlsx\" attachment and adds it",
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
  "name": "user waits 20 secs",
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
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Dup. CIs\" as \"1\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
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
  "name": "user validates Rows OK as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAtLeastOneCIHasUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user waits 10 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnTicketRefreshButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates primary ci as \"SE_AP_alvesta-radmannen-ap1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesPrimaryCiAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the bulk loading additional definitions default settings",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AllFileTypes_Bulk_Loading_Primary_CI_Default_Settings"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Primary CI Check\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Primary CI Check\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple statuses \"Planned:Un-Planned:(clear)\" should be available in Impact Type dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.multipleStatusesShouldBeAvailableInImpactTypeDropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple statuses \"Actual:Potential:(clear)\" should be available in \"Category*\" dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.multipleStatusesShouldBeAvailableInDropdown(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\10 CI\u0027s - Correct Names\\XLS.xls\" attachment and adds it",
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
  "name": "user waits 20 secs",
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
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Dup. CIs\" as \"1\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
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
  "name": "user validates Rows OK as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAtLeastOneCIHasUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user waits 10 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnTicketRefreshButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates primary ci as \"SE_AP_alvesta-radmannen-ap1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesPrimaryCiAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user checks the bulk loading additional definitions default settings",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AllFileTypes_Bulk_Loading_Primary_CI_Default_Settings"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Primary CI Check\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Primary CI Check\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple statuses \"Planned:Un-Planned:(clear)\" should be available in Impact Type dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.multipleStatusesShouldBeAvailableInImpactTypeDropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple statuses \"Actual:Potential:(clear)\" should be available in \"Category*\" dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.multipleStatusesShouldBeAvailableInDropdown(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Upload Import File",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnUploadImportFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on choose file button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Test Attachments\\10 CI\u0027s - Correct Names\\TEXT.txt\" attachment and adds it",
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
  "name": "user waits 20 secs",
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
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Dup. CIs\" as \"1\" in row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAsInRow(String,String,int)"
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
  "name": "user validates Rows OK as \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesRowsOKAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates with errors as \"0\"",
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
  "name": "user validates at least one CI has \"Completed\" under \"Status\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesAtLeastOneCIHasUnder(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on bulk loading close button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnBulkLoadingCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user waits 10 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnTicketRefreshButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates primary ci as \"SE_AP_alvesta-radmannen-ap1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesPrimaryCiAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Automation/SPRINTS/Sprint_4.3_Bulk_CI_Plugin/Trouble/PrimaryCICheck/Manual_Trouble.feature");
formatter.feature({
  "name": "checking of bulk loading additional definitions default settings",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Manual_Bulk_Loading_Primary_CI_Default_Settings"
    },
    {
      "name": "@SAO-427"
    }
  ]
});
formatter.scenario({
  "name": "user checks the bulk loading additional definitions default settings",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Manual_Bulk_Loading_Primary_CI_Default_Settings"
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
  "name": "user clicks on sweden checkbox under affected BU\u0027s",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnSwedenCheckboxUnderAffectedBUS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SAO-427 Test Bulk Loading Error Message - Structure\" in Title field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInTitleField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Event\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"SAO-427 Test Bulk Loading Error Message - Structure\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersDescriptionAs(String)"
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
  "name": "user clicks on Diagnosis tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
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
  "name": "user validates Impact Type default value is \"Un-Planned\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesImpactTypeDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Category default value is \"Actual\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesCategoryDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates Level default value is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesLevelDefaultValueIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects impact level as \"No Impact\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsImpactLevelAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Manual Input radio button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnManualInputRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SE_AP_alvesta-radmannen-ap1;SE_AP_alvesta-radmannen-ap2;SE_AP_alvesta-radmannen-ap3;SE_AP_alvesta-radmannen-ap4;\" in manual CI search box",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInManualCISearchBox(String)"
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
  "name": "first error message should display as \"The manually identified CIs are now being processed...\" on bulk ci window",
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
  "name": "user clicks on ticket refresh button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnTicketRefreshButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Diagnosis tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnDiagnosisTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates primary ci as \"SE_AP_alvesta-radmannen-ap1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userValidatesPrimaryCiAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});