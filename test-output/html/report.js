$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/SPRINTS/Sprint _4.4/PDB_E2E/PLAZA_PDB_E2E_Incident.feature");
formatter.feature({
  "name": "Plaza PDB",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@PLAZA_PDB_E2E_Incident"
    },
    {
      "name": "@PLAZA_Incident_Flow"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Plaza PDB create, update, cleared and closed E2E",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Plaza login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters username \"testauto\" and password as \"test123\" and clicks on login",
  "keyword": "When "
});
formatter.step({
  "name": "user should see the plaza home page",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on plaza portal",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks support on plaza homepage",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on \"SUBMIT A TICKET\"",
  "keyword": "And "
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "And "
});
formatter.step({
  "name": "user validates PDB submit form opens",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects service area as \"Security\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects service as \"Personal Data Breach\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters PDB date and time as current date and time",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects PDB effected country \"\u003cPDB Affected Country\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects nature and content as \"Address\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects affected persons as \"\u003cNumber of Persons\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects plaza affected persons as other",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"Test Data\" under Affected persons name and unique id",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on submit button on plaza form",
  "keyword": "And "
});
formatter.step({
  "name": "user gets plaza request id",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on plaza request id",
  "keyword": "And "
});
formatter.step({
  "name": "user validates internal case management form opens",
  "keyword": "And "
});
formatter.step({
  "name": "user waits 40 secs",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on main page refresh",
  "keyword": "And "
});
formatter.step({
  "name": "user should see incident ticket update in plaza",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters \"Test Update\" in the ticket timeline",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on plaza send button",
  "keyword": "And "
});
formatter.step({
  "name": "user opens new tab",
  "keyword": "Then "
});
formatter.step({
  "name": "user switches to window 2",
  "keyword": "And "
});
formatter.step({
  "name": "user is on the OneWorkflow login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user logs in with valid username \"PlazaTest\" and password as \"Test@1234\"",
  "keyword": "When "
});
formatter.step({
  "name": "user successfully logged in to OneWorkflow and agent console should be displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects search menu as \"Open Search Form:Trouble Event\"",
  "keyword": "When "
});
formatter.step({
  "name": "user switches to window 3",
  "keyword": "And "
});
formatter.step({
  "name": "user should see blank trouble search form",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters plaza incident ticket",
  "keyword": "When "
});
formatter.step({
  "name": "user should see plaza incident ticket",
  "keyword": "And "
});
formatter.step({
  "name": "user validates source field as \"PLAZA\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates source ID field contains ICM number",
  "keyword": "And "
});
formatter.step({
  "name": "user validates service provider as \"Data Breach\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates \"\u003cPDB Affected Country\u003e\" BU is added automatically",
  "keyword": "And "
});
formatter.step({
  "name": "user validates PDB title field as \"\u003cTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates PDB description same as Plaza",
  "keyword": "And "
});
formatter.step({
  "name": "user validates ticket priority as \"\u003cPriority\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates plaza pdb impact as \"\u003cImpact\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates plaza pdb importance as \"\u003cImportance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"Test Update\" on row 1",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on assignment under sections",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on owner under sections",
  "keyword": "And "
});
formatter.step({
  "name": "user should see assigned profile as \"\u003cAssignedProfile\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"Test OW Update\" in the timeline text box",
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
  "name": "change should also be reflected in the timeline as \"Test OW Update\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "And "
});
formatter.step({
  "name": "user waits 6 secs",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on main page refresh",
  "keyword": "And "
});
formatter.step({
  "name": "user should see OW manual notification in plaza ticket as \"Test OW Update\"",
  "keyword": "And "
});
formatter.step({
  "name": "user switches to window 3",
  "keyword": "And "
});
formatter.step({
  "name": "user selects assignment profile dropdown as \"External:ANS:OW_ANS\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters \"fhr501\" in assignee",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "name": "user validates assignee is \"fhr501\"",
  "keyword": "And "
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "Then "
});
formatter.step({
  "name": "user waits 6 secs",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on main page refresh",
  "keyword": "And "
});
formatter.step({
  "name": "user should see OW manual notification in plaza ticket as \"OW_ANS\"",
  "keyword": "And "
});
formatter.step({
  "name": "user switches to window 3",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Ack button",
  "keyword": "When "
});
formatter.step({
  "name": "user validates ticket status as \"Work In Progress\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "Then "
});
formatter.step({
  "name": "user waits 6 secs",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on main page refresh",
  "keyword": "And "
});
formatter.step({
  "name": "user should see OW manual notification in plaza ticket as \"The Incident State has been moved to Work In Progress in OWF\"",
  "keyword": "And "
});
formatter.step({
  "name": "user switches to window 3",
  "keyword": "Then "
});
formatter.step({
  "name": "user changes status to \"Cleared\" on trouble event page",
  "keyword": "When "
});
formatter.step({
  "name": "user selects fault position as \"N/A:N/A\" on trouble event page",
  "keyword": "And "
});
formatter.step({
  "name": "user selects cause as \"N/A:N/A:N/A\" on trouble event page",
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
  "name": "user enters event end time as current time",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "user validates ticket status as \"Cleared\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "Then "
});
formatter.step({
  "name": "user waits 6 secs",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on main page refresh",
  "keyword": "And "
});
formatter.step({
  "name": "user should see OW manual notification in plaza ticket as \"Order has been completed\"",
  "keyword": "And "
});
formatter.step({
  "name": "user switches to window 3",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on ticket refresh button",
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
        "PDB Affected Country",
        "Number of Persons",
        "Title",
        "Priority",
        "Impact",
        "Importance",
        "AssignedProfile"
      ]
    },
    {
      "cells": [
        "Lithuania",
        "No",
        "Personal Data Breach | Lithuania",
        "Minor",
        "Minor",
        "Low",
        "PDB LT"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Plaza PDB create, update, cleared and closed E2E",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PLAZA_PDB_E2E_Incident"
    },
    {
      "name": "@PLAZA_Incident_Flow"
    }
  ]
});
formatter.step({
  "name": "user is on the Plaza login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Plaza_LoginPageSteps.userIsOnThePlazaLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username \"testauto\" and password as \"test123\" and clicks on login",
  "keyword": "When "
});
formatter.match({
  "location": "Plaza_LoginPageSteps.userEntersUsernameAndPasswordAsAndClicksOnLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the plaza home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userShouldSeeThePlazaHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on plaza portal",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnPlazaPortal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks support on plaza homepage",
  "keyword": "When "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksSupportOnPlazaHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"SUBMIT A TICKET\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnButton(String)"
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
  "name": "user validates PDB submit form opens",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userValidatesPDBSubmitFormOpens()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects service area as \"Security\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userSelectsServiceAreaAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects service as \"Personal Data Breach\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userSelectsServiceAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters PDB date and time as current date and time",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userEntersPDBDateAndTimeAsCurrentDateAndTime()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects PDB effected country \"Lithuania\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userSelectsPDBEffectedCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects nature and content as \"Address\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userSelectsNatureAndContentAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects affected persons as \"No\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userSelectsAffectedPersonsAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects plaza affected persons as other",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userSelectsPlazaAffectedPersonsAsOther()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Test Data\" under Affected persons name and unique id",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userEntersUnderAffectedPersonsNameAndUniqueId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on submit button on plaza form",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnSubmitButtonOnPlazaForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets plaza request id",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userGetsPlazaRequestId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on plaza request id",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnPlazaRequestId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates internal case management form opens",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userValidatesInternalCaseManagementFormOpens()"
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
  "name": "user should see incident ticket update in plaza",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userShouldSeeIncidentIdUpdateInPlazaTicket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Test Update\" in the ticket timeline",
  "keyword": "When "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userEntersInTheTicketTimeline(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on plaza send button",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnPlazaSendButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens new tab",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userOpensNewTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user switches to window 2",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "passed"
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
  "name": "user logs in with valid username \"PlazaTest\" and password as \"Test@1234\"",
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
  "name": "user switches to window 3",
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
  "name": "user enters plaza incident ticket",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersPlazaIncidentTicket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see plaza incident ticket",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userShouldSeePlazaIncidentTicket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates source field as \"PLAZA\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesSourceFieldAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates source ID field contains ICM number",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesSourceIDFieldContainsICMNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates service provider as \"Data Breach\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesServiceProviderAs(String)"
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
  "status": "passed"
});
formatter.step({
  "name": "user validates PDB title field as \"Personal Data Breach | Lithuania\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTitleFieldAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates PDB description same as Plaza",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesPDBDescriptionSameAsPlaza()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates ticket priority as \"Minor\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesTicketPriorityAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates plaza pdb impact as \"Minor\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesPlazaPdbImpactAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates plaza pdb importance as \"Low\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userValidatesPlazaPdbImportanceAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "change should also be reflected in the timeline as \"Test Update\" on row 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAsOnRow(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on assignment under sections",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userClicksOnAssignmentUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on owner under sections",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userClicksOnOwnerUnderSections()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see assigned profile as \"PDB LT\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userShouldSeeAssignedProfileAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Test OW Update\" in the timeline text box",
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
  "name": "change should also be reflected in the timeline as \"Test OW Update\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.changeShouldAlsoBeReflectedInTheTimelineAs(String)"
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
  "name": "user waits 6 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
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
  "name": "user should see OW manual notification in plaza ticket as \"Test OW Update\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userShouldSeeOWManualNotificationInPlazaTicketAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user switches to window 3",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects assignment profile dropdown as \"External:ANS:OW_ANS\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsAssignmentProfileDropdownAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"fhr501\" in assignee",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userEntersInAssignee(String)"
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
  "name": "user validates assignee is \"fhr501\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userValidatesAssigneeIs(String)"
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
  "name": "user waits 6 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
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
  "name": "user should see OW manual notification in plaza ticket as \"OW_ANS\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userShouldSeeOWManualNotificationInPlazaTicketAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user switches to window 3",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
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
  "name": "user validates ticket status as \"Work In Progress\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
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
  "name": "user waits 6 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
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
  "name": "user should see OW manual notification in plaza ticket as \"The Incident State has been moved to Work In Progress in OWF\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userShouldSeeOWManualNotificationInPlazaTicketAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user switches to window 3",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user changes status to \"Cleared\" on trouble event page",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userChangesStatusToOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects fault position as \"N/A:N/A\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsFaultPositionAsOnTroubleEventPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects cause as \"N/A:N/A:N/A\" on trouble event page",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userSelectsCauseAsOnTroubleEventPage(String)"
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
  "name": "user enters event end time as current time",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersEventEndTimeAsCurrentTime()"
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
  "name": "user validates ticket status as \"Cleared\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
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
  "name": "user waits 6 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
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
  "name": "user should see OW manual notification in plaza ticket as \"Order has been completed\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userShouldSeeOWManualNotificationInPlazaTicketAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user switches to window 3",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
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
formatter.scenarioOutline({
  "name": "Plaza PDB Pending",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PlazaPDBPending"
    }
  ]
});
formatter.step({
  "name": "user is on the Plaza login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters username \"testauto\" and password as \"test123\" and clicks on login",
  "keyword": "When "
});
formatter.step({
  "name": "user should see the plaza home page",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on plaza portal",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks support on plaza homepage",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on \"SUBMIT A TICKET\"",
  "keyword": "And "
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "And "
});
formatter.step({
  "name": "user validates PDB submit form opens",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects service area as \"Security\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects service as \"Personal Data Breach\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters PDB date and time as current date and time",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects PDB effected country \"\u003cPDB Affected Country\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects nature and content as \"Address\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects affected persons as \"\u003cNumber of Persons\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects plaza affected persons as other",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"Test Data\" under Affected persons name and unique id",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on submit button on plaza form",
  "keyword": "And "
});
formatter.step({
  "name": "user gets plaza request id",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on plaza request id",
  "keyword": "And "
});
formatter.step({
  "name": "user validates internal case management form opens",
  "keyword": "And "
});
formatter.step({
  "name": "user waits 40 secs",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on main page refresh",
  "keyword": "And "
});
formatter.step({
  "name": "user should see incident ticket update in plaza",
  "keyword": "Then "
});
formatter.step({
  "name": "user opens new tab",
  "keyword": "Then "
});
formatter.step({
  "name": "user switches to window 2",
  "keyword": "And "
});
formatter.step({
  "name": "user is on the OneWorkflow login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user logs in with valid username \"PlazaTest\" and password as \"Test@1234\"",
  "keyword": "When "
});
formatter.step({
  "name": "user successfully logged in to OneWorkflow and agent console should be displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects search menu as \"Open Search Form:Trouble Event\"",
  "keyword": "When "
});
formatter.step({
  "name": "user switches to window 3",
  "keyword": "And "
});
formatter.step({
  "name": "user should see blank trouble search form",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters plaza incident ticket",
  "keyword": "When "
});
formatter.step({
  "name": "user should see plaza incident ticket",
  "keyword": "And "
});
formatter.step({
  "name": "user changes status to \"Pending\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters on hold to date 2 minutes in the future",
  "keyword": "And "
});
formatter.step({
  "name": "user selects on hold reason as \"Waiting for Customer Info\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "name": "user validates ticket status as \"Pending\"",
  "keyword": "And "
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "And "
});
formatter.step({
  "name": "user waits 6 secs",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on main page refresh",
  "keyword": "And "
});
formatter.step({
  "name": "user should see OW manual notification in plaza ticket as \"Waiting for Customer Info\"",
  "keyword": "And "
});
formatter.step({
  "name": "user switches to window 3",
  "keyword": "And "
});
formatter.step({
  "name": "user waits for 9 minutes",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on ticket refresh button",
  "keyword": "And "
});
formatter.step({
  "name": "user validates ticket status as \"Assigned\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "PDB Affected Country",
        "Number of Persons",
        "Title",
        "Priority",
        "Impact",
        "Importance",
        "AssignedProfile"
      ]
    },
    {
      "cells": [
        "Sweden",
        "No",
        "Personal Data Breach | Sweden",
        "Minor",
        "Minor",
        "Low",
        "PDB SE"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Plaza PDB Pending",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PLAZA_PDB_E2E_Incident"
    },
    {
      "name": "@PLAZA_Incident_Flow"
    },
    {
      "name": "@PlazaPDBPending"
    }
  ]
});
formatter.step({
  "name": "user is on the Plaza login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Plaza_LoginPageSteps.userIsOnThePlazaLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username \"testauto\" and password as \"test123\" and clicks on login",
  "keyword": "When "
});
formatter.match({
  "location": "Plaza_LoginPageSteps.userEntersUsernameAndPasswordAsAndClicksOnLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the plaza home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userShouldSeeThePlazaHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on plaza portal",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnPlazaPortal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks support on plaza homepage",
  "keyword": "When "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksSupportOnPlazaHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"SUBMIT A TICKET\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnButton(String)"
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
  "name": "user validates PDB submit form opens",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userValidatesPDBSubmitFormOpens()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects service area as \"Security\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userSelectsServiceAreaAs(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.id: s2id_sp_formfield_service_area (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat pageObjects.BasePage.clickElement(BasePage.java:106)\r\n\tat pageObjects.plaza.Plaza_HomePage.selectDropdownByUsingClickAndSendKeys(Plaza_HomePage.java:798)\r\n\tat pageObjects.plaza.Plaza_HomePage.selectServiceAs(Plaza_HomePage.java:822)\r\n\tat steps.plaza_steps.Plaza_HomePageSteps.userSelectsServiceAreaAs(Plaza_HomePageSteps.java:2292)\r\n\tat ✽.user selects service area as \"Security\"(features/Automation/SPRINTS/Sprint _4.4/PDB_E2E/PLAZA_PDB_E2E_Incident.feature:141)\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d89.0.4389.114)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-6FQK1D6\u0027, ip: \u002710.85.242.157\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.114, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\jlm97\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54904}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e628755b604991a2d547f06ed04153b0\n*** Element info: {Using\u003did, value\u003ds2id_sp_formfield_service_area}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:641)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:638)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat pageObjects.BasePage.clickElement(BasePage.java:106)\r\n\tat pageObjects.plaza.Plaza_HomePage.selectDropdownByUsingClickAndSendKeys(Plaza_HomePage.java:798)\r\n\tat pageObjects.plaza.Plaza_HomePage.selectServiceAs(Plaza_HomePage.java:822)\r\n\tat steps.plaza_steps.Plaza_HomePageSteps.userSelectsServiceAreaAs(Plaza_HomePageSteps.java:2292)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:73)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user selects service as \"Personal Data Breach\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userSelectsServiceAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters PDB date and time as current date and time",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userEntersPDBDateAndTimeAsCurrentDateAndTime()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects PDB effected country \"Sweden\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userSelectsPDBEffectedCountry(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects nature and content as \"Address\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userSelectsNatureAndContentAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects affected persons as \"No\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userSelectsAffectedPersonsAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects plaza affected persons as other",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userSelectsPlazaAffectedPersonsAsOther()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"Test Data\" under Affected persons name and unique id",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userEntersUnderAffectedPersonsNameAndUniqueId(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on submit button on plaza form",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnSubmitButtonOnPlazaForm()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user gets plaza request id",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userGetsPlazaRequestId()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on plaza request id",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userClicksOnPlazaRequestId()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates internal case management form opens",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userValidatesInternalCaseManagementFormOpens()"
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
  "name": "user should see incident ticket update in plaza",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userShouldSeeIncidentIdUpdateInPlazaTicket()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user opens new tab",
  "keyword": "Then "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userOpensNewTab()"
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
  "name": "user is on the OneWorkflow login page",
  "keyword": "Given "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userIsOnTheOneWorkflowLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs in with valid username \"PlazaTest\" and password as \"Test@1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userLogsInWithValidUsernameAndPasswordAs(String,String)"
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
  "name": "user selects search menu as \"Open Search Form:Trouble Event\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userSelectsSearchMenuAs(String)"
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
  "name": "user should see blank trouble search form",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userShouldSeeBlankTroubleSearchForm()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters plaza incident ticket",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersPlazaIncidentTicket()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see plaza incident ticket",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userShouldSeePlazaIncidentTicket()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user changes status to \"Pending\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ChangeRecordPageSteps.userChangeStatusTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters on hold to date 2 minutes in the future",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersOnHoldToDateMinutesInTheFuture(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects on hold reason as \"Waiting for Customer Info\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_TroubleEventPageSteps.userEntersOnHoldReasonAs(String)"
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
  "name": "user validates ticket status as \"Pending\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userValidatesTicketStatusAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user switches to window 1",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user waits 6 secs",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_WorkOrderPageSteps.userWaitsSecs(int)"
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
  "name": "user should see OW manual notification in plaza ticket as \"Waiting for Customer Info\"",
  "keyword": "And "
});
formatter.match({
  "location": "Plaza_HomePageSteps.userShouldSeeOWManualNotificationInPlazaTicketAs(String)"
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
  "name": "user waits for 9 minutes",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userWaitsForMinutes(int)"
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
  "name": "user validates ticket status as \"Assigned\"",
  "keyword": "And "
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
});