$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/Regression/E2E/RAN/E2E_RAN_Test_Cases.feature");
formatter.feature({
  "name": "E2E Scenarios",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@E2E_Test_RAN"
    },
    {
      "name": "@E2E"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "E2E Scenarios for trouble event",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the OneWorkflow login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user logs in with valid user and password",
  "keyword": "When "
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
  "name": "user validates BU availability",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on \"\u003cCheckedBU1\u003e\" checkbox under affected BU\u0027s",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on \"\u003cCheckedBU2\u003e\" checkbox under affected BU\u0027s",
  "keyword": "And "
});
formatter.step({
  "name": "user validates \"\u003cTickedBU1\u003e\" and \"\u003cTickedBU2\u003e\" checkboxes are selected",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on CTI details under sections",
  "keyword": "When "
});
formatter.step({
  "name": "user validates availability of category dropdown",
  "keyword": "And "
});
formatter.step({
  "name": "user selects Category as \"Access\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates availability of type dropdown",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects Type as \"Radio Access Network\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user validates availability of item dropdown",
  "keyword": "When "
});
formatter.step({
  "name": "user selects Item as \"LTECell\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates event start time is present",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on location under sections",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"\u003cLocation\u003e\" within the location ID+ field",
  "keyword": "And "
});
formatter.step({
  "name": "user switches to frame",
  "keyword": "And "
});
formatter.step({
  "name": "user should see list of CI\u0027s related to \"\u003cLocation\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user highlights location \"\u003cLocation Name\u003e\" and clicks ok and validates location details",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cTitle\u003e\" in Title field in Trouble event",
  "keyword": "When "
});
formatter.step({
  "name": "user selects request type as \"Customer\" on trouble event page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters description as \"\u003cDescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "name": "ticket should be created and status should be assigned",
  "keyword": "And "
});
formatter.step({
  "name": "user validates availability of tabs \"Timeline:Diagnosis:Interested Parties:Notifications:Linked Items:Work Orders:Service Level:Alarms:Ticket Matching:Service Info\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on \"Diagnosis\" tab",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on CI search button",
  "keyword": "And "
});
formatter.step({
  "name": "user switches to frame",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on clear button",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cCI Name1\u003e\" in name field",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on search button on CI search window",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects CI \"\u003cCI Name1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "multiple statuses \"Degradation of Service:Loss of Service:No Impact:(clear)\" should be available in \"Level*\" dropdown",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects impact level as \"Degradation of Service\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on relate CI",
  "keyword": "Then "
});
formatter.step({
  "name": "user closes warning message",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cCI Name2\u003e\" in name field",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on search button on CI search window",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects CI \"\u003cCI Name2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on relate CI",
  "keyword": "Then "
});
formatter.step({
  "name": "user closes warning message",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cCI Name3\u003e\" in name field",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on search button on CI search window",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects CI \"\u003cCI Name3\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on relate CI",
  "keyword": "Then "
});
formatter.step({
  "name": "user closes warning message",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on close button on CI search window",
  "keyword": "And "
});
formatter.step({
  "name": "CI should be listed and displayed under the Diagnosis tab",
  "keyword": "And "
});
formatter.step({
  "name": "user validates CI \"Impact Status\" is \"Active\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user validates \"Primary\" CI is equal to \"\u003cCI name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "name": "user validates \"\u003cBU Name\u003e\" BU is added automatically",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on attachments under sections",
  "keyword": "When "
});
formatter.step({
  "name": "user adds attachment and verifies under \"internal\"",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "summary",
        "description",
        "fullFilePath",
        "attachments"
      ]
    },
    {
      "cells": [
        "Test JPEG",
        "Test JPEG",
        "Test JPEG FILE.jpg",
        "1"
      ]
    },
    {
      "cells": [
        "Test PNG",
        "Test PNG",
        "Test PNG FILE.png",
        "2"
      ]
    },
    {
      "cells": [
        "Test PDF",
        "Test PDF",
        "Test PDF FILE.pdf",
        "3"
      ]
    },
    {
      "cells": [
        "Test WORD",
        "Test WORD",
        "Test WORD FILE.docx",
        "4"
      ]
    },
    {
      "cells": [
        "Test EXCEL",
        "Test EXCEL",
        "Test XLS FILE.xls",
        "5"
      ]
    },
    {
      "cells": [
        "Test PPT",
        "Test PPT",
        "Test PPT FILE.pptx",
        "6"
      ]
    }
  ]
});
formatter.step({
  "name": "user adds attachment and verifies under \"external\"",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "summary",
        "description",
        "fullFilePath",
        "attachments"
      ]
    },
    {
      "cells": [
        "Test JPEG",
        "Test JPEG",
        "Test JPEG FILE.jpg",
        "7"
      ]
    },
    {
      "cells": [
        "Test PNG",
        "Test PNG",
        "Test PNG FILE.png",
        "8"
      ]
    },
    {
      "cells": [
        "Test PDF",
        "Test PDF",
        "Test PDF FILE.pdf",
        "9"
      ]
    },
    {
      "cells": [
        "Test WORD",
        "Test WORD",
        "Test WORD FILE.docx",
        "10"
      ]
    },
    {
      "cells": [
        "Test EXCEL",
        "Test EXCEL",
        "Test XLS FILE.xls",
        "11"
      ]
    },
    {
      "cells": [
        "Test PPT",
        "Test PPT",
        "Test PPT FILE.pptx",
        "12"
      ]
    }
  ]
});
formatter.step({
  "name": "user clicks on \"Timeline\" tab",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"Test Update - Public\" in the timeline text box",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on public radio button",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on add button",
  "keyword": "And "
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"Test Update - Public\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Ack button",
  "keyword": "When "
});
formatter.step({
  "name": "user changes status to \"Cleared\" on trouble event page",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters \"Test Resolution Result\" in the timeline text box",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on add button",
  "keyword": "And "
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"Test Resolution Result\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on root cause under sections",
  "keyword": "When "
});
formatter.step({
  "name": "user enters root cause description as \"Test Resolution\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters event end time as current time",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "name": "multiple error messages should appear with red boarder around fields",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects fault position as \"N/A:N/A\" on trouble event page",
  "keyword": "When "
});
formatter.step({
  "name": "user selects cause as \"Test Ticket:N/A:N/A\" on trouble event page",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on \"Diagnosis\" tab",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks radio button to select all CIs and right clicks on \"\u003cCI name\u003e\" and clear all CIs impact",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "name": "user validates ticket status as \"Cleared\"",
  "keyword": "And "
});
formatter.step({
  "name": "user changes status to \"Closed\" on trouble event page",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "an error message should appear: \"Required field (without a default) not specified : Closure Info (ARERR 9424)\"",
  "keyword": "Then "
});
formatter.step({
  "name": "an error message should appear: \"Required field (without a default) not specified : Action (ARERR 9424)\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects action dropdown as \"N/A:N/A\" on trouble event page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters closure info as \"Test Ticket\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "user validates ticket status as \"Closed\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "CI Name1",
        "CI Name2",
        "CI Name3",
        "CheckedBU1",
        "CheckedBU2",
        "TickedBU1",
        "TickedBU2",
        "Location",
        "Location Name",
        "Title",
        "Description",
        "CI Name1",
        "CI Name2",
        "CI Name3",
        "CI name",
        "BU Name"
      ]
    },
    {
      "cells": [
        "SE_SGSN_VRRMME1",
        "SE_SGSN_LDHMME1",
        "DK_SGSN_AMBMME1",
        "Sweden",
        "Finland",
        "Sweden",
        "Finland",
        "SE_",
        "SE_Site_SE M1",
        "Test case MT004 Sweden E2E",
        "Test case MT004 Sweden E2E",
        "SE_SGSN_VRRMME1",
        "SE_SGSN_LDHMME1",
        "DK_SGSN_AMBMME1",
        "SE_SGSN_VRRMME1",
        "Denmark"
      ]
    },
    {
      "cells": [
        "NO_SGSN_AKH902MME2",
        "NO_SGSN_NO-CSGN01MME",
        "DK_SGSN_AMBMME1",
        "Norway",
        "Finland",
        "Norway",
        "Finland",
        "NO_",
        "NO_Site_VSF087",
        "Test case MT004 Norway E2E",
        "Test case MT004 Norway E2E",
        "NO_SGSN_AKH902MME2",
        "NO_SGSN_NO-CSGN01MME",
        "DK_SGSN_AMBMME1",
        "NO_SGSN_AKH902MME2",
        "Norway"
      ]
    },
    {
      "cells": [
        "LT_SGSN_LT-CSGN01MME",
        "LT_SGSN_LT-CSGN02MME",
        "SE_SGSN_LDHMME1",
        "Lithuania",
        "Denmark",
        "Lithuania",
        "Denmark",
        "LT_",
        "LT_Site_888",
        "Test case MT004 Lithuania E2E",
        "Test case MT004 Lithuania E2E",
        "LT_SGSN_LT-CSGN01MME",
        "LT_SGSN_LT-CSGN02MME",
        "SE_SGSN_AKH902MME",
        "LT_SGSN_LT-CSGN01MME",
        "Sweden"
      ]
    },
    {
      "cells": [
        "FI_SGSN_FI-CSGN01MME",
        "FI_SGSN_FI-CSGN02MME",
        "LT_SGSN_LT-CSGN01MME",
        "Finland",
        "Denmark",
        "Finland",
        "Denmark",
        "FI_",
        "FI_Site_sampi",
        "Test case MT004 Finland E2E",
        "Test case MT004 Finland E2E",
        "FI_SGSN_FI-CSGN01MME",
        "FI_SGSN_FI-CSGN02MME",
        "LT_SGSN_LT-CSGN01MME",
        "FI_SGSN_FI-CSGN01MME",
        "Lithuania"
      ]
    },
    {
      "cells": [
        "EE_SGSN_EE-CSGN01MME",
        "EE_SGSN_EE-CSGN02MME",
        "FI_SGSN_FI-CSGN01MME",
        "Estonia",
        "Sweden",
        "Estonia",
        "Sweden",
        "EE_",
        "EE_Site_KARDL",
        "Test case MT004 Estonia E2E",
        "Test case MT004 Estonia E2E",
        "EE_SGSN_EE-CSGN01MME",
        "EE_SGSN_EE-CSGN02MME",
        "FI_SGSN_FI-CSGN01MME",
        "EE_SGSN_EE-CSGN01MME",
        "Finland"
      ]
    },
    {
      "cells": [
        "DK_SGSN_AMBMME1",
        "DK_SGSN_DK-CSGN01MME",
        "FI_SGSN_FI-CSGN01MME",
        "Denmark",
        "Sweden",
        "Denmark",
        "Sweden",
        "DK_",
        "DK_Site_S0001",
        "Test case MT004 Denmark E2E",
        "Test case MT004 Denmark E2E",
        "DK_SGSN_AMBMME1",
        "DK_SGSN_DK-CSGN01MME",
        "FI_SGSN_FI-CSGN01MME",
        "DK_SGSN_AMBMME1",
        "Finland"
      ]
    }
  ]
});
formatter.scenario({
  "name": "E2E Scenarios for trouble event",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2E_Test_RAN"
    },
    {
      "name": "@E2E"
    },
    {
      "name": "@Regression"
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
  "name": "user validates BU availability",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesBUAvailability()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Sweden\" checkbox under affected BU\u0027s",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCheckboxUnderAffectedBUS(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Finland\" checkbox under affected BU\u0027s",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCheckboxUnderAffectedBUS(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Sweden\" and \"Finland\" checkboxes are selected",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAndCheckboxesAreSelected(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on CTI details under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCTIDetailsUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of category dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAvailabilityOfCategoryDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects Category as \"Access\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.userSelectsCategoryAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of type dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAvailabilityOfTypeDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects Type as \"Radio Access Network\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.userSelectsTypeAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of item dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAvailabilityOfItemDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects Item as \"LTECell\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.userSelectsItemAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates event start time is present",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesEventStartTimeIsPresent()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on location under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnLocationUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SE_\" within the location ID+ field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersWithinTheLocationIDField(String)"
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
  "name": "user should see list of CI\u0027s related to \"SE_\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userShouldSeeListOfCISRelatedTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user highlights location \"SE_Site_SE M1\" and clicks ok and validates location details",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userHighlightsLocationClicksOkAndValidatesLocationDetails(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Test case MT004 Sweden E2E\" in Title field in Trouble event",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersInTitleFieldInTroubleEvent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Customer\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"Test case MT004 Sweden E2E\"",
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ticket should be created and status should be assigned",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.ticketShouldBeCreatedAndStatusShouldBeAssigned()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of tabs \"Timeline:Diagnosis:Interested Parties:Notifications:Linked Items:Work Orders:Service Level:Alarms:Ticket Matching:Service Info\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesAvailabilityOfTabs(String)"
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
  "name": "user clicks on CI search button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnCISearchButton()"
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
  "name": "user clicks on clear button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnClearButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SE_SGSN_VRRMME1\" in name field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInNameField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on search button on CI search window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSearchButtonOnCiSearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects CI \"SE_SGSN_VRRMME1\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsCI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple statuses \"Degradation of Service:Loss of Service:No Impact:(clear)\" should be available in \"Level*\" dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.multipleStatusesShouldBeAvailableInDropdown(String,String)"
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
  "name": "user clicks on relate CI",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRelateCI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes warning message",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClosesWarningMessageAndClicksOnCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SE_SGSN_LDHMME1\" in name field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInNameField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on search button on CI search window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSearchButtonOnCiSearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects CI \"SE_SGSN_LDHMME1\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsCI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on relate CI",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRelateCI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes warning message",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClosesWarningMessageAndClicksOnCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"DK_SGSN_AMBMME1\" in name field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInNameField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on search button on CI search window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSearchButtonOnCiSearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects CI \"DK_SGSN_AMBMME1\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsCI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on relate CI",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRelateCI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes warning message",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClosesWarningMessageAndClicksOnCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on close button on CI search window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnCloseButtonOnCISearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "CI should be listed and displayed under the Diagnosis tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.ciShouldBeListedAndDisplayedUnderTheDiagnosisTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates CI \"Impact Status\" is \"Active\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesCIImpactStatusIs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Primary\" CI is equal to \"SE_SGSN_VRRMME1\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesCIIsEqualTo(String,String)"
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
  "name": "user validates \"Denmark\" BU is added automatically",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesBUIsAddedAutomatically(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on attachments under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAttachmentsUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds attachment and verifies under \"internal\"",
  "rows": [
    {
      "cells": [
        "summary",
        "description",
        "fullFilePath",
        "attachments"
      ]
    },
    {
      "cells": [
        "Test JPEG",
        "Test JPEG",
        "Test JPEG FILE.jpg",
        "1"
      ]
    },
    {
      "cells": [
        "Test PNG",
        "Test PNG",
        "Test PNG FILE.png",
        "2"
      ]
    },
    {
      "cells": [
        "Test PDF",
        "Test PDF",
        "Test PDF FILE.pdf",
        "3"
      ]
    },
    {
      "cells": [
        "Test WORD",
        "Test WORD",
        "Test WORD FILE.docx",
        "4"
      ]
    },
    {
      "cells": [
        "Test EXCEL",
        "Test EXCEL",
        "Test XLS FILE.xls",
        "5"
      ]
    },
    {
      "cells": [
        "Test PPT",
        "Test PPT",
        "Test PPT FILE.pptx",
        "6"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userAddsAttachmentAndVerifies(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds attachment and verifies under \"external\"",
  "rows": [
    {
      "cells": [
        "summary",
        "description",
        "fullFilePath",
        "attachments"
      ]
    },
    {
      "cells": [
        "Test JPEG",
        "Test JPEG",
        "Test JPEG FILE.jpg",
        "7"
      ]
    },
    {
      "cells": [
        "Test PNG",
        "Test PNG",
        "Test PNG FILE.png",
        "8"
      ]
    },
    {
      "cells": [
        "Test PDF",
        "Test PDF",
        "Test PDF FILE.pdf",
        "9"
      ]
    },
    {
      "cells": [
        "Test WORD",
        "Test WORD",
        "Test WORD FILE.docx",
        "10"
      ]
    },
    {
      "cells": [
        "Test EXCEL",
        "Test EXCEL",
        "Test XLS FILE.xls",
        "11"
      ]
    },
    {
      "cells": [
        "Test PPT",
        "Test PPT",
        "Test PPT FILE.pptx",
        "12"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userAddsAttachmentAndVerifies(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Timeline\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Test Update - Public\" in the timeline text box",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersInTheTimelineTextBox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on public radio button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnPublicRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on add button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAddButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"Test Update - Public\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Ack button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAckButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user changes status to \"Cleared\" on trouble event page",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userChangesStatusToOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Test Resolution Result\" in the timeline text box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersInTheTimelineTextBox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on add button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAddButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"Test Resolution Result\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on root cause under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnRootCauseUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters root cause description as \"Test Resolution\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersRootCauseDescriptionAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters event end time as current time",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersEventEndTimeAsCurrentTime()"
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
  "name": "multiple error messages should appear with red boarder around fields",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.multipleErrorMessagesShouldAppearWithRedBoarderAroundFields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects fault position as \"N/A:N/A\" on trouble event page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsFaultPositionAsOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects cause as \"Test Ticket:N/A:N/A\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsCauseAsOnTroubleEventPage(String)"
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
  "name": "user clicks radio button to select all CIs and right clicks on \"SE_SGSN_VRRMME1\" and clear all CIs impact",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksRadioButtonToSelectAllCIsAndRightClicksOnAndClearAllCIsImpact(String)"
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
  "name": "user validates ticket status as \"Cleared\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
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
  "name": "an error message should appear: \"Required field (without a default) not specified : Closure Info (ARERR 9424)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.anErrorMessageShouldAppear(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an error message should appear: \"Required field (without a default) not specified : Action (ARERR 9424)\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.anErrorMessageShouldAppear(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects action dropdown as \"N/A:N/A\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsActionDropdownAsOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters closure info as \"Test Ticket\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersClosureInfoAs(String)"
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
  "name": "user validates ticket status as \"Closed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "E2E Scenarios for trouble event",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2E_Test_RAN"
    },
    {
      "name": "@E2E"
    },
    {
      "name": "@Regression"
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
  "name": "user validates BU availability",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesBUAvailability()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Norway\" checkbox under affected BU\u0027s",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCheckboxUnderAffectedBUS(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Finland\" checkbox under affected BU\u0027s",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCheckboxUnderAffectedBUS(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Norway\" and \"Finland\" checkboxes are selected",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAndCheckboxesAreSelected(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on CTI details under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCTIDetailsUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of category dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAvailabilityOfCategoryDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects Category as \"Access\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.userSelectsCategoryAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of type dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAvailabilityOfTypeDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects Type as \"Radio Access Network\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.userSelectsTypeAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of item dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAvailabilityOfItemDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects Item as \"LTECell\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.userSelectsItemAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates event start time is present",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesEventStartTimeIsPresent()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on location under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnLocationUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"NO_\" within the location ID+ field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersWithinTheLocationIDField(String)"
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
  "name": "user should see list of CI\u0027s related to \"NO_\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userShouldSeeListOfCISRelatedTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user highlights location \"NO_Site_VSF087\" and clicks ok and validates location details",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userHighlightsLocationClicksOkAndValidatesLocationDetails(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Test case MT004 Norway E2E\" in Title field in Trouble event",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersInTitleFieldInTroubleEvent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Customer\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"Test case MT004 Norway E2E\"",
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ticket should be created and status should be assigned",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.ticketShouldBeCreatedAndStatusShouldBeAssigned()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of tabs \"Timeline:Diagnosis:Interested Parties:Notifications:Linked Items:Work Orders:Service Level:Alarms:Ticket Matching:Service Info\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesAvailabilityOfTabs(String)"
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
  "name": "user clicks on CI search button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnCISearchButton()"
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
  "name": "user clicks on clear button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnClearButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"NO_SGSN_AKH902MME2\" in name field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInNameField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on search button on CI search window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSearchButtonOnCiSearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects CI \"NO_SGSN_AKH902MME2\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsCI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple statuses \"Degradation of Service:Loss of Service:No Impact:(clear)\" should be available in \"Level*\" dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.multipleStatusesShouldBeAvailableInDropdown(String,String)"
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
  "name": "user clicks on relate CI",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRelateCI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes warning message",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClosesWarningMessageAndClicksOnCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"NO_SGSN_NO-CSGN01MME\" in name field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInNameField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on search button on CI search window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSearchButtonOnCiSearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects CI \"NO_SGSN_NO-CSGN01MME\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsCI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on relate CI",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRelateCI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes warning message",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClosesWarningMessageAndClicksOnCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"DK_SGSN_AMBMME1\" in name field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInNameField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on search button on CI search window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSearchButtonOnCiSearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects CI \"DK_SGSN_AMBMME1\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsCI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on relate CI",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRelateCI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes warning message",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClosesWarningMessageAndClicksOnCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on close button on CI search window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnCloseButtonOnCISearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "CI should be listed and displayed under the Diagnosis tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.ciShouldBeListedAndDisplayedUnderTheDiagnosisTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates CI \"Impact Status\" is \"Active\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesCIImpactStatusIs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Primary\" CI is equal to \"NO_SGSN_AKH902MME2\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesCIIsEqualTo(String,String)"
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
  "name": "user validates \"Norway\" BU is added automatically",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesBUIsAddedAutomatically(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on attachments under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAttachmentsUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds attachment and verifies under \"internal\"",
  "rows": [
    {
      "cells": [
        "summary",
        "description",
        "fullFilePath",
        "attachments"
      ]
    },
    {
      "cells": [
        "Test JPEG",
        "Test JPEG",
        "Test JPEG FILE.jpg",
        "1"
      ]
    },
    {
      "cells": [
        "Test PNG",
        "Test PNG",
        "Test PNG FILE.png",
        "2"
      ]
    },
    {
      "cells": [
        "Test PDF",
        "Test PDF",
        "Test PDF FILE.pdf",
        "3"
      ]
    },
    {
      "cells": [
        "Test WORD",
        "Test WORD",
        "Test WORD FILE.docx",
        "4"
      ]
    },
    {
      "cells": [
        "Test EXCEL",
        "Test EXCEL",
        "Test XLS FILE.xls",
        "5"
      ]
    },
    {
      "cells": [
        "Test PPT",
        "Test PPT",
        "Test PPT FILE.pptx",
        "6"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userAddsAttachmentAndVerifies(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds attachment and verifies under \"external\"",
  "rows": [
    {
      "cells": [
        "summary",
        "description",
        "fullFilePath",
        "attachments"
      ]
    },
    {
      "cells": [
        "Test JPEG",
        "Test JPEG",
        "Test JPEG FILE.jpg",
        "7"
      ]
    },
    {
      "cells": [
        "Test PNG",
        "Test PNG",
        "Test PNG FILE.png",
        "8"
      ]
    },
    {
      "cells": [
        "Test PDF",
        "Test PDF",
        "Test PDF FILE.pdf",
        "9"
      ]
    },
    {
      "cells": [
        "Test WORD",
        "Test WORD",
        "Test WORD FILE.docx",
        "10"
      ]
    },
    {
      "cells": [
        "Test EXCEL",
        "Test EXCEL",
        "Test XLS FILE.xls",
        "11"
      ]
    },
    {
      "cells": [
        "Test PPT",
        "Test PPT",
        "Test PPT FILE.pptx",
        "12"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userAddsAttachmentAndVerifies(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Timeline\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Test Update - Public\" in the timeline text box",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersInTheTimelineTextBox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on public radio button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnPublicRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on add button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAddButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"Test Update - Public\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Ack button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAckButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user changes status to \"Cleared\" on trouble event page",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userChangesStatusToOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Test Resolution Result\" in the timeline text box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersInTheTimelineTextBox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on add button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAddButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"Test Resolution Result\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on root cause under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnRootCauseUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters root cause description as \"Test Resolution\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersRootCauseDescriptionAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters event end time as current time",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersEventEndTimeAsCurrentTime()"
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
  "name": "multiple error messages should appear with red boarder around fields",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.multipleErrorMessagesShouldAppearWithRedBoarderAroundFields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects fault position as \"N/A:N/A\" on trouble event page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsFaultPositionAsOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects cause as \"Test Ticket:N/A:N/A\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsCauseAsOnTroubleEventPage(String)"
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
  "name": "user clicks radio button to select all CIs and right clicks on \"NO_SGSN_AKH902MME2\" and clear all CIs impact",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksRadioButtonToSelectAllCIsAndRightClicksOnAndClearAllCIsImpact(String)"
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
  "name": "user validates ticket status as \"Cleared\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
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
  "name": "an error message should appear: \"Required field (without a default) not specified : Closure Info (ARERR 9424)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.anErrorMessageShouldAppear(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an error message should appear: \"Required field (without a default) not specified : Action (ARERR 9424)\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.anErrorMessageShouldAppear(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects action dropdown as \"N/A:N/A\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsActionDropdownAsOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters closure info as \"Test Ticket\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersClosureInfoAs(String)"
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
  "name": "user validates ticket status as \"Closed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "E2E Scenarios for trouble event",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2E_Test_RAN"
    },
    {
      "name": "@E2E"
    },
    {
      "name": "@Regression"
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
  "name": "user validates BU availability",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesBUAvailability()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Lithuania\" checkbox under affected BU\u0027s",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCheckboxUnderAffectedBUS(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Denmark\" checkbox under affected BU\u0027s",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCheckboxUnderAffectedBUS(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Lithuania\" and \"Denmark\" checkboxes are selected",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAndCheckboxesAreSelected(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on CTI details under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCTIDetailsUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of category dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAvailabilityOfCategoryDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects Category as \"Access\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.userSelectsCategoryAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of type dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAvailabilityOfTypeDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects Type as \"Radio Access Network\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.userSelectsTypeAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of item dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAvailabilityOfItemDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects Item as \"LTECell\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.userSelectsItemAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates event start time is present",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesEventStartTimeIsPresent()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on location under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnLocationUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"LT_\" within the location ID+ field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersWithinTheLocationIDField(String)"
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
  "name": "user should see list of CI\u0027s related to \"LT_\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userShouldSeeListOfCISRelatedTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user highlights location \"LT_Site_888\" and clicks ok and validates location details",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userHighlightsLocationClicksOkAndValidatesLocationDetails(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Test case MT004 Lithuania E2E\" in Title field in Trouble event",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersInTitleFieldInTroubleEvent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Customer\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"Test case MT004 Lithuania E2E\"",
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ticket should be created and status should be assigned",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.ticketShouldBeCreatedAndStatusShouldBeAssigned()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of tabs \"Timeline:Diagnosis:Interested Parties:Notifications:Linked Items:Work Orders:Service Level:Alarms:Ticket Matching:Service Info\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesAvailabilityOfTabs(String)"
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
  "name": "user clicks on CI search button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnCISearchButton()"
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
  "name": "user clicks on clear button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnClearButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"LT_SGSN_LT-CSGN01MME\" in name field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInNameField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on search button on CI search window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSearchButtonOnCiSearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects CI \"LT_SGSN_LT-CSGN01MME\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsCI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple statuses \"Degradation of Service:Loss of Service:No Impact:(clear)\" should be available in \"Level*\" dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.multipleStatusesShouldBeAvailableInDropdown(String,String)"
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
  "name": "user clicks on relate CI",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRelateCI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes warning message",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClosesWarningMessageAndClicksOnCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"LT_SGSN_LT-CSGN02MME\" in name field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInNameField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on search button on CI search window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSearchButtonOnCiSearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects CI \"LT_SGSN_LT-CSGN02MME\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsCI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on relate CI",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRelateCI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes warning message",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClosesWarningMessageAndClicksOnCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"SE_SGSN_LDHMME1\" in name field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInNameField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on search button on CI search window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSearchButtonOnCiSearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects CI \"SE_SGSN_LDHMME1\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsCI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on relate CI",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRelateCI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes warning message",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClosesWarningMessageAndClicksOnCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on close button on CI search window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnCloseButtonOnCISearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "CI should be listed and displayed under the Diagnosis tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.ciShouldBeListedAndDisplayedUnderTheDiagnosisTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates CI \"Impact Status\" is \"Active\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesCIImpactStatusIs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Primary\" CI is equal to \"LT_SGSN_LT-CSGN01MME\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesCIIsEqualTo(String,String)"
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
  "name": "user validates \"Sweden\" BU is added automatically",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesBUIsAddedAutomatically(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on attachments under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAttachmentsUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds attachment and verifies under \"internal\"",
  "rows": [
    {
      "cells": [
        "summary",
        "description",
        "fullFilePath",
        "attachments"
      ]
    },
    {
      "cells": [
        "Test JPEG",
        "Test JPEG",
        "Test JPEG FILE.jpg",
        "1"
      ]
    },
    {
      "cells": [
        "Test PNG",
        "Test PNG",
        "Test PNG FILE.png",
        "2"
      ]
    },
    {
      "cells": [
        "Test PDF",
        "Test PDF",
        "Test PDF FILE.pdf",
        "3"
      ]
    },
    {
      "cells": [
        "Test WORD",
        "Test WORD",
        "Test WORD FILE.docx",
        "4"
      ]
    },
    {
      "cells": [
        "Test EXCEL",
        "Test EXCEL",
        "Test XLS FILE.xls",
        "5"
      ]
    },
    {
      "cells": [
        "Test PPT",
        "Test PPT",
        "Test PPT FILE.pptx",
        "6"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userAddsAttachmentAndVerifies(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds attachment and verifies under \"external\"",
  "rows": [
    {
      "cells": [
        "summary",
        "description",
        "fullFilePath",
        "attachments"
      ]
    },
    {
      "cells": [
        "Test JPEG",
        "Test JPEG",
        "Test JPEG FILE.jpg",
        "7"
      ]
    },
    {
      "cells": [
        "Test PNG",
        "Test PNG",
        "Test PNG FILE.png",
        "8"
      ]
    },
    {
      "cells": [
        "Test PDF",
        "Test PDF",
        "Test PDF FILE.pdf",
        "9"
      ]
    },
    {
      "cells": [
        "Test WORD",
        "Test WORD",
        "Test WORD FILE.docx",
        "10"
      ]
    },
    {
      "cells": [
        "Test EXCEL",
        "Test EXCEL",
        "Test XLS FILE.xls",
        "11"
      ]
    },
    {
      "cells": [
        "Test PPT",
        "Test PPT",
        "Test PPT FILE.pptx",
        "12"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userAddsAttachmentAndVerifies(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Timeline\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Test Update - Public\" in the timeline text box",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersInTheTimelineTextBox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on public radio button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnPublicRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on add button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAddButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"Test Update - Public\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Ack button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAckButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user changes status to \"Cleared\" on trouble event page",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userChangesStatusToOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Test Resolution Result\" in the timeline text box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersInTheTimelineTextBox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on add button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAddButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"Test Resolution Result\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on root cause under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnRootCauseUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters root cause description as \"Test Resolution\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersRootCauseDescriptionAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters event end time as current time",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersEventEndTimeAsCurrentTime()"
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
  "name": "multiple error messages should appear with red boarder around fields",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.multipleErrorMessagesShouldAppearWithRedBoarderAroundFields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects fault position as \"N/A:N/A\" on trouble event page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsFaultPositionAsOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects cause as \"Test Ticket:N/A:N/A\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsCauseAsOnTroubleEventPage(String)"
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
  "name": "user clicks radio button to select all CIs and right clicks on \"LT_SGSN_LT-CSGN01MME\" and clear all CIs impact",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksRadioButtonToSelectAllCIsAndRightClicksOnAndClearAllCIsImpact(String)"
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
  "name": "user validates ticket status as \"Cleared\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
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
  "name": "an error message should appear: \"Required field (without a default) not specified : Closure Info (ARERR 9424)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.anErrorMessageShouldAppear(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an error message should appear: \"Required field (without a default) not specified : Action (ARERR 9424)\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.anErrorMessageShouldAppear(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects action dropdown as \"N/A:N/A\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsActionDropdownAsOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters closure info as \"Test Ticket\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersClosureInfoAs(String)"
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
  "name": "user validates ticket status as \"Closed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "E2E Scenarios for trouble event",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2E_Test_RAN"
    },
    {
      "name": "@E2E"
    },
    {
      "name": "@Regression"
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
  "name": "user validates BU availability",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesBUAvailability()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Finland\" checkbox under affected BU\u0027s",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCheckboxUnderAffectedBUS(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Denmark\" checkbox under affected BU\u0027s",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCheckboxUnderAffectedBUS(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Finland\" and \"Denmark\" checkboxes are selected",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAndCheckboxesAreSelected(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on CTI details under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCTIDetailsUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of category dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAvailabilityOfCategoryDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects Category as \"Access\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.userSelectsCategoryAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of type dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAvailabilityOfTypeDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects Type as \"Radio Access Network\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.userSelectsTypeAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of item dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAvailabilityOfItemDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects Item as \"LTECell\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.userSelectsItemAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates event start time is present",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesEventStartTimeIsPresent()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on location under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnLocationUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"FI_\" within the location ID+ field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersWithinTheLocationIDField(String)"
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
  "name": "user should see list of CI\u0027s related to \"FI_\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userShouldSeeListOfCISRelatedTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user highlights location \"FI_Site_sampi\" and clicks ok and validates location details",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userHighlightsLocationClicksOkAndValidatesLocationDetails(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Test case MT004 Finland E2E\" in Title field in Trouble event",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersInTitleFieldInTroubleEvent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Customer\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"Test case MT004 Finland E2E\"",
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ticket should be created and status should be assigned",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.ticketShouldBeCreatedAndStatusShouldBeAssigned()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of tabs \"Timeline:Diagnosis:Interested Parties:Notifications:Linked Items:Work Orders:Service Level:Alarms:Ticket Matching:Service Info\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesAvailabilityOfTabs(String)"
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
  "name": "user clicks on CI search button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnCISearchButton()"
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
  "name": "user clicks on clear button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnClearButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"FI_SGSN_FI-CSGN01MME\" in name field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInNameField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on search button on CI search window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSearchButtonOnCiSearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects CI \"FI_SGSN_FI-CSGN01MME\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsCI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple statuses \"Degradation of Service:Loss of Service:No Impact:(clear)\" should be available in \"Level*\" dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.multipleStatusesShouldBeAvailableInDropdown(String,String)"
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
  "name": "user clicks on relate CI",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRelateCI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes warning message",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClosesWarningMessageAndClicksOnCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"FI_SGSN_FI-CSGN02MME\" in name field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInNameField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on search button on CI search window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSearchButtonOnCiSearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects CI \"FI_SGSN_FI-CSGN02MME\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsCI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on relate CI",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRelateCI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes warning message",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClosesWarningMessageAndClicksOnCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"LT_SGSN_LT-CSGN01MME\" in name field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInNameField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on search button on CI search window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSearchButtonOnCiSearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects CI \"LT_SGSN_LT-CSGN01MME\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsCI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on relate CI",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRelateCI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes warning message",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClosesWarningMessageAndClicksOnCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on close button on CI search window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnCloseButtonOnCISearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "CI should be listed and displayed under the Diagnosis tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.ciShouldBeListedAndDisplayedUnderTheDiagnosisTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates CI \"Impact Status\" is \"Active\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesCIImpactStatusIs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Primary\" CI is equal to \"FI_SGSN_FI-CSGN01MME\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesCIIsEqualTo(String,String)"
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
  "name": "user validates \"Lithuania\" BU is added automatically",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesBUIsAddedAutomatically(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat steps.OWF_TroubleEventPageSteps.userValidatesBUIsAddedAutomatically(OWF_TroubleEventPageSteps.java:753)\r\n\tat ✽.user validates \"Lithuania\" BU is added automatically(features/Automation/Regression/E2E/RAN/E2E_RAN_Test_Cases.feature:68)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on attachments under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAttachmentsUnderSections()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user adds attachment and verifies under \"internal\"",
  "rows": [
    {
      "cells": [
        "summary",
        "description",
        "fullFilePath",
        "attachments"
      ]
    },
    {
      "cells": [
        "Test JPEG",
        "Test JPEG",
        "Test JPEG FILE.jpg",
        "1"
      ]
    },
    {
      "cells": [
        "Test PNG",
        "Test PNG",
        "Test PNG FILE.png",
        "2"
      ]
    },
    {
      "cells": [
        "Test PDF",
        "Test PDF",
        "Test PDF FILE.pdf",
        "3"
      ]
    },
    {
      "cells": [
        "Test WORD",
        "Test WORD",
        "Test WORD FILE.docx",
        "4"
      ]
    },
    {
      "cells": [
        "Test EXCEL",
        "Test EXCEL",
        "Test XLS FILE.xls",
        "5"
      ]
    },
    {
      "cells": [
        "Test PPT",
        "Test PPT",
        "Test PPT FILE.pptx",
        "6"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userAddsAttachmentAndVerifies(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user adds attachment and verifies under \"external\"",
  "rows": [
    {
      "cells": [
        "summary",
        "description",
        "fullFilePath",
        "attachments"
      ]
    },
    {
      "cells": [
        "Test JPEG",
        "Test JPEG",
        "Test JPEG FILE.jpg",
        "7"
      ]
    },
    {
      "cells": [
        "Test PNG",
        "Test PNG",
        "Test PNG FILE.png",
        "8"
      ]
    },
    {
      "cells": [
        "Test PDF",
        "Test PDF",
        "Test PDF FILE.pdf",
        "9"
      ]
    },
    {
      "cells": [
        "Test WORD",
        "Test WORD",
        "Test WORD FILE.docx",
        "10"
      ]
    },
    {
      "cells": [
        "Test EXCEL",
        "Test EXCEL",
        "Test XLS FILE.xls",
        "11"
      ]
    },
    {
      "cells": [
        "Test PPT",
        "Test PPT",
        "Test PPT FILE.pptx",
        "12"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userAddsAttachmentAndVerifies(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Timeline\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"Test Update - Public\" in the timeline text box",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersInTheTimelineTextBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on public radio button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnPublicRadioButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on add button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"Test Update - Public\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Ack button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAckButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user changes status to \"Cleared\" on trouble event page",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userChangesStatusToOnTroubleEventPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"Test Resolution Result\" in the timeline text box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersInTheTimelineTextBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on add button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"Test Resolution Result\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on root cause under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnRootCauseUnderSections()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters root cause description as \"Test Resolution\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersRootCauseDescriptionAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters event end time as current time",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersEventEndTimeAsCurrentTime()"
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
  "name": "multiple error messages should appear with red boarder around fields",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.multipleErrorMessagesShouldAppearWithRedBoarderAroundFields()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects fault position as \"N/A:N/A\" on trouble event page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsFaultPositionAsOnTroubleEventPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects cause as \"Test Ticket:N/A:N/A\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsCauseAsOnTroubleEventPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Diagnosis\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks radio button to select all CIs and right clicks on \"FI_SGSN_FI-CSGN01MME\" and clear all CIs impact",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksRadioButtonToSelectAllCIsAndRightClicksOnAndClearAllCIsImpact(String)"
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
  "name": "user validates ticket status as \"Cleared\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user changes status to \"Closed\" on trouble event page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userChangesStatusToOnTroubleEventPage(String)"
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
  "name": "an error message should appear: \"Required field (without a default) not specified : Closure Info (ARERR 9424)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.anErrorMessageShouldAppear(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "an error message should appear: \"Required field (without a default) not specified : Action (ARERR 9424)\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.anErrorMessageShouldAppear(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects action dropdown as \"N/A:N/A\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsActionDropdownAsOnTroubleEventPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters closure info as \"Test Ticket\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersClosureInfoAs(String)"
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
  "name": "user validates ticket status as \"Closed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "E2E Scenarios for trouble event",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2E_Test_RAN"
    },
    {
      "name": "@E2E"
    },
    {
      "name": "@Regression"
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
  "name": "user validates BU availability",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesBUAvailability()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Estonia\" checkbox under affected BU\u0027s",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCheckboxUnderAffectedBUS(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Sweden\" checkbox under affected BU\u0027s",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCheckboxUnderAffectedBUS(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Estonia\" and \"Sweden\" checkboxes are selected",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAndCheckboxesAreSelected(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on CTI details under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCTIDetailsUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of category dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAvailabilityOfCategoryDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects Category as \"Access\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.userSelectsCategoryAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of type dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAvailabilityOfTypeDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects Type as \"Radio Access Network\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.userSelectsTypeAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of item dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAvailabilityOfItemDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects Item as \"LTECell\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.userSelectsItemAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates event start time is present",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesEventStartTimeIsPresent()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on location under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnLocationUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"EE_\" within the location ID+ field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersWithinTheLocationIDField(String)"
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
  "name": "user should see list of CI\u0027s related to \"EE_\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userShouldSeeListOfCISRelatedTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user highlights location \"EE_Site_KARDL\" and clicks ok and validates location details",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userHighlightsLocationClicksOkAndValidatesLocationDetails(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Test case MT004 Estonia E2E\" in Title field in Trouble event",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersInTitleFieldInTroubleEvent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Customer\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"Test case MT004 Estonia E2E\"",
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ticket should be created and status should be assigned",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.ticketShouldBeCreatedAndStatusShouldBeAssigned()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of tabs \"Timeline:Diagnosis:Interested Parties:Notifications:Linked Items:Work Orders:Service Level:Alarms:Ticket Matching:Service Info\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesAvailabilityOfTabs(String)"
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
  "name": "user clicks on CI search button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnCISearchButton()"
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
  "name": "user clicks on clear button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnClearButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"EE_SGSN_EE-CSGN01MME\" in name field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInNameField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on search button on CI search window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSearchButtonOnCiSearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects CI \"EE_SGSN_EE-CSGN01MME\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsCI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple statuses \"Degradation of Service:Loss of Service:No Impact:(clear)\" should be available in \"Level*\" dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.multipleStatusesShouldBeAvailableInDropdown(String,String)"
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
  "name": "user clicks on relate CI",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRelateCI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes warning message",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClosesWarningMessageAndClicksOnCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"EE_SGSN_EE-CSGN02MME\" in name field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInNameField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on search button on CI search window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSearchButtonOnCiSearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects CI \"EE_SGSN_EE-CSGN02MME\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsCI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on relate CI",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRelateCI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes warning message",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClosesWarningMessageAndClicksOnCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"FI_SGSN_FI-CSGN01MME\" in name field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInNameField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on search button on CI search window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSearchButtonOnCiSearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects CI \"FI_SGSN_FI-CSGN01MME\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsCI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on relate CI",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRelateCI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes warning message",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClosesWarningMessageAndClicksOnCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on close button on CI search window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnCloseButtonOnCISearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "CI should be listed and displayed under the Diagnosis tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.ciShouldBeListedAndDisplayedUnderTheDiagnosisTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates CI \"Impact Status\" is \"Active\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesCIImpactStatusIs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Primary\" CI is equal to \"EE_SGSN_EE-CSGN01MME\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesCIIsEqualTo(String,String)"
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
  "name": "user validates \"Finland\" BU is added automatically",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesBUIsAddedAutomatically(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on attachments under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAttachmentsUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds attachment and verifies under \"internal\"",
  "rows": [
    {
      "cells": [
        "summary",
        "description",
        "fullFilePath",
        "attachments"
      ]
    },
    {
      "cells": [
        "Test JPEG",
        "Test JPEG",
        "Test JPEG FILE.jpg",
        "1"
      ]
    },
    {
      "cells": [
        "Test PNG",
        "Test PNG",
        "Test PNG FILE.png",
        "2"
      ]
    },
    {
      "cells": [
        "Test PDF",
        "Test PDF",
        "Test PDF FILE.pdf",
        "3"
      ]
    },
    {
      "cells": [
        "Test WORD",
        "Test WORD",
        "Test WORD FILE.docx",
        "4"
      ]
    },
    {
      "cells": [
        "Test EXCEL",
        "Test EXCEL",
        "Test XLS FILE.xls",
        "5"
      ]
    },
    {
      "cells": [
        "Test PPT",
        "Test PPT",
        "Test PPT FILE.pptx",
        "6"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userAddsAttachmentAndVerifies(String,DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.id: WIN_0_rc0id600001901 (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat pageObjects.BasePage.clickElement(BasePage.java:102)\r\n\tat pageObjects.BaseRecordPage.clickInternalRadioButton(BaseRecordPage.java:1192)\r\n\tat pageObjects.OWF_ProblemRecordPage.addAttachmentsAndVerify(OWF_ProblemRecordPage.java:568)\r\n\tat steps.OWF_ProblemRecordPageSteps.userAddsAttachmentAndVerifies(OWF_ProblemRecordPageSteps.java:1056)\r\n\tat ✽.user adds attachment and verifies under \"internal\"(features/Automation/Regression/E2E/RAN/E2E_RAN_Test_Cases.feature:70)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#WIN_0_rc0id600001901\"}\n  (Session info: chrome\u003d88.0.4324.104)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-P3NRUGT\u0027, ip: \u002710.85.242.152\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.104, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\MAHESH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:62328}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a11d3ecee0efcdefadfbbd711f30605c\n*** Element info: {Using\u003did, value\u003dWIN_0_rc0id600001901}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:641)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:638)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat pageObjects.BasePage.clickElement(BasePage.java:102)\r\n\tat pageObjects.BaseRecordPage.clickInternalRadioButton(BaseRecordPage.java:1192)\r\n\tat pageObjects.OWF_ProblemRecordPage.addAttachmentsAndVerify(OWF_ProblemRecordPage.java:568)\r\n\tat steps.OWF_ProblemRecordPageSteps.userAddsAttachmentAndVerifies(OWF_ProblemRecordPageSteps.java:1056)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:73)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user adds attachment and verifies under \"external\"",
  "rows": [
    {
      "cells": [
        "summary",
        "description",
        "fullFilePath",
        "attachments"
      ]
    },
    {
      "cells": [
        "Test JPEG",
        "Test JPEG",
        "Test JPEG FILE.jpg",
        "7"
      ]
    },
    {
      "cells": [
        "Test PNG",
        "Test PNG",
        "Test PNG FILE.png",
        "8"
      ]
    },
    {
      "cells": [
        "Test PDF",
        "Test PDF",
        "Test PDF FILE.pdf",
        "9"
      ]
    },
    {
      "cells": [
        "Test WORD",
        "Test WORD",
        "Test WORD FILE.docx",
        "10"
      ]
    },
    {
      "cells": [
        "Test EXCEL",
        "Test EXCEL",
        "Test XLS FILE.xls",
        "11"
      ]
    },
    {
      "cells": [
        "Test PPT",
        "Test PPT",
        "Test PPT FILE.pptx",
        "12"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userAddsAttachmentAndVerifies(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Timeline\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"Test Update - Public\" in the timeline text box",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersInTheTimelineTextBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on public radio button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnPublicRadioButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on add button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"Test Update - Public\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Ack button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAckButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user changes status to \"Cleared\" on trouble event page",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userChangesStatusToOnTroubleEventPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"Test Resolution Result\" in the timeline text box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersInTheTimelineTextBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on add button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"Test Resolution Result\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on root cause under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnRootCauseUnderSections()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters root cause description as \"Test Resolution\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersRootCauseDescriptionAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters event end time as current time",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersEventEndTimeAsCurrentTime()"
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
  "name": "multiple error messages should appear with red boarder around fields",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.multipleErrorMessagesShouldAppearWithRedBoarderAroundFields()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects fault position as \"N/A:N/A\" on trouble event page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsFaultPositionAsOnTroubleEventPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects cause as \"Test Ticket:N/A:N/A\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsCauseAsOnTroubleEventPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Diagnosis\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks radio button to select all CIs and right clicks on \"EE_SGSN_EE-CSGN01MME\" and clear all CIs impact",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksRadioButtonToSelectAllCIsAndRightClicksOnAndClearAllCIsImpact(String)"
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
  "name": "user validates ticket status as \"Cleared\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user changes status to \"Closed\" on trouble event page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userChangesStatusToOnTroubleEventPage(String)"
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
  "name": "an error message should appear: \"Required field (without a default) not specified : Closure Info (ARERR 9424)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.anErrorMessageShouldAppear(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "an error message should appear: \"Required field (without a default) not specified : Action (ARERR 9424)\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.anErrorMessageShouldAppear(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects action dropdown as \"N/A:N/A\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsActionDropdownAsOnTroubleEventPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters closure info as \"Test Ticket\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersClosureInfoAs(String)"
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
  "name": "user validates ticket status as \"Closed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "E2E Scenarios for trouble event",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2E_Test_RAN"
    },
    {
      "name": "@E2E"
    },
    {
      "name": "@Regression"
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
  "name": "user validates BU availability",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesBUAvailability()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Denmark\" checkbox under affected BU\u0027s",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCheckboxUnderAffectedBUS(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Sweden\" checkbox under affected BU\u0027s",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCheckboxUnderAffectedBUS(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Denmark\" and \"Sweden\" checkboxes are selected",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAndCheckboxesAreSelected(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on CTI details under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnCTIDetailsUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of category dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAvailabilityOfCategoryDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects Category as \"Access\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.userSelectsCategoryAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of type dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAvailabilityOfTypeDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects Type as \"Radio Access Network\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.userSelectsTypeAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of item dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAvailabilityOfItemDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects Item as \"LTECell\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_SIDConsolePageSteps.userSelectsItemAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates event start time is present",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesEventStartTimeIsPresent()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on location under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnLocationUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"DK_\" within the location ID+ field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersWithinTheLocationIDField(String)"
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
  "name": "user should see list of CI\u0027s related to \"DK_\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userShouldSeeListOfCISRelatedTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user highlights location \"DK_Site_S0001\" and clicks ok and validates location details",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userHighlightsLocationClicksOkAndValidatesLocationDetails(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Test case MT004 Denmark E2E\" in Title field in Trouble event",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersInTitleFieldInTroubleEvent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects request type as \"Customer\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsRequestTypeAsStringOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters description as \"Test case MT004 Denmark E2E\"",
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
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ticket should be created and status should be assigned",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.ticketShouldBeCreatedAndStatusShouldBeAssigned()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates availability of tabs \"Timeline:Diagnosis:Interested Parties:Notifications:Linked Items:Work Orders:Service Level:Alarms:Ticket Matching:Service Info\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesAvailabilityOfTabs(String)"
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
  "name": "user clicks on CI search button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userClicksOnCISearchButton()"
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
  "name": "user clicks on clear button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnClearButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"DK_SGSN_AMBMME1\" in name field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInNameField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on search button on CI search window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSearchButtonOnCiSearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects CI \"DK_SGSN_AMBMME1\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsCI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple statuses \"Degradation of Service:Loss of Service:No Impact:(clear)\" should be available in \"Level*\" dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.multipleStatusesShouldBeAvailableInDropdown(String,String)"
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
  "name": "user clicks on relate CI",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRelateCI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes warning message",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClosesWarningMessageAndClicksOnCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"DK_SGSN_DK-CSGN01MME\" in name field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInNameField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on search button on CI search window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSearchButtonOnCiSearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects CI \"DK_SGSN_DK-CSGN01MME\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsCI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on relate CI",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRelateCI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes warning message",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClosesWarningMessageAndClicksOnCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"FI_SGSN_FI-CSGN01MME\" in name field",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userEntersInNameField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on search button on CI search window",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnSearchButtonOnCiSearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects CI \"FI_SGSN_FI-CSGN01MME\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userSelectsCI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on relate CI",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnRelateCI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes warning message",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClosesWarningMessageAndClicksOnCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on close button on CI search window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.userClicksOnCloseButtonOnCISearchWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "CI should be listed and displayed under the Diagnosis tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_CiSearchPageSteps.ciShouldBeListedAndDisplayedUnderTheDiagnosisTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates CI \"Impact Status\" is \"Active\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesCIImpactStatusIs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates \"Primary\" CI is equal to \"DK_SGSN_AMBMME1\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesCIIsEqualTo(String,String)"
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
  "name": "user validates \"Finland\" BU is added automatically",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesBUIsAddedAutomatically(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on attachments under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAttachmentsUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds attachment and verifies under \"internal\"",
  "rows": [
    {
      "cells": [
        "summary",
        "description",
        "fullFilePath",
        "attachments"
      ]
    },
    {
      "cells": [
        "Test JPEG",
        "Test JPEG",
        "Test JPEG FILE.jpg",
        "1"
      ]
    },
    {
      "cells": [
        "Test PNG",
        "Test PNG",
        "Test PNG FILE.png",
        "2"
      ]
    },
    {
      "cells": [
        "Test PDF",
        "Test PDF",
        "Test PDF FILE.pdf",
        "3"
      ]
    },
    {
      "cells": [
        "Test WORD",
        "Test WORD",
        "Test WORD FILE.docx",
        "4"
      ]
    },
    {
      "cells": [
        "Test EXCEL",
        "Test EXCEL",
        "Test XLS FILE.xls",
        "5"
      ]
    },
    {
      "cells": [
        "Test PPT",
        "Test PPT",
        "Test PPT FILE.pptx",
        "6"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userAddsAttachmentAndVerifies(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds attachment and verifies under \"external\"",
  "rows": [
    {
      "cells": [
        "summary",
        "description",
        "fullFilePath",
        "attachments"
      ]
    },
    {
      "cells": [
        "Test JPEG",
        "Test JPEG",
        "Test JPEG FILE.jpg",
        "7"
      ]
    },
    {
      "cells": [
        "Test PNG",
        "Test PNG",
        "Test PNG FILE.png",
        "8"
      ]
    },
    {
      "cells": [
        "Test PDF",
        "Test PDF",
        "Test PDF FILE.pdf",
        "9"
      ]
    },
    {
      "cells": [
        "Test WORD",
        "Test WORD",
        "Test WORD FILE.docx",
        "10"
      ]
    },
    {
      "cells": [
        "Test EXCEL",
        "Test EXCEL",
        "Test XLS FILE.xls",
        "11"
      ]
    },
    {
      "cells": [
        "Test PPT",
        "Test PPT",
        "Test PPT FILE.pptx",
        "12"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userAddsAttachmentAndVerifies(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Timeline\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userClicksOnAlarmTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Test Update - Public\" in the timeline text box",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersInTheTimelineTextBox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on public radio button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnPublicRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on add button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAddButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"Test Update - Public\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Ack button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAckButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user changes status to \"Cleared\" on trouble event page",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userChangesStatusToOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Test Resolution Result\" in the timeline text box",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersInTheTimelineTextBox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on add button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAddButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"Test Resolution Result\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on root cause under sections",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnRootCauseUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters root cause description as \"Test Resolution\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersRootCauseDescriptionAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters event end time as current time",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersEventEndTimeAsCurrentTime()"
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
  "name": "multiple error messages should appear with red boarder around fields",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.multipleErrorMessagesShouldAppearWithRedBoarderAroundFields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects fault position as \"N/A:N/A\" on trouble event page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsFaultPositionAsOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects cause as \"Test Ticket:N/A:N/A\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsCauseAsOnTroubleEventPage(String)"
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
  "name": "user clicks radio button to select all CIs and right clicks on \"DK_SGSN_AMBMME1\" and clear all CIs impact",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksRadioButtonToSelectAllCIsAndRightClicksOnAndClearAllCIsImpact(String)"
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
  "name": "user validates ticket status as \"Cleared\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
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
  "name": "an error message should appear: \"Required field (without a default) not specified : Closure Info (ARERR 9424)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.anErrorMessageShouldAppear(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an error message should appear: \"Required field (without a default) not specified : Action (ARERR 9424)\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.anErrorMessageShouldAppear(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects action dropdown as \"N/A:N/A\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsActionDropdownAsOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters closure info as \"Test Ticket\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersClosureInfoAs(String)"
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
  "name": "user validates ticket status as \"Closed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});