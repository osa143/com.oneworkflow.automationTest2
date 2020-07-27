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
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Diagnosis\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates CI columns \"Business Hours\" availability",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesCIColumnAvailability(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets number of CI\u0027s",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userGetsNumberOfCIS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user right clicks on CI \"SE_EPG_LDHEPG1\" and selects \"Detach\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userRightClicksOnCIAndSelects(String,String)"
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
  "name": "CI should be detached from ticket",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.ciShouldBeDetachedFromTicket()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});