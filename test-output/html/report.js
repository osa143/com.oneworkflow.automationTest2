$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automation/API/SecurityConsole/E2E_Security_Console.feature");
formatter.feature({
  "name": "E2E verification of the API security console",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@E2E_Security_Console"
    }
  ]
});
formatter.scenario({
  "name": "E2E verification of the API security console",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@E2E_Security_Console"
    }
  ]
});
formatter.step({
  "name": "user is on the OneWorkflow login page for security console",
  "keyword": "Given "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userIsOnTheOneWorkflowLoginPageForSecurityConsole()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid username \"apitester1\" and password as \"badger\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userLogsInWithValidUsernameAndPasswordAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates security console is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesSecurityConsoleIsDisplayed()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [BMC Remedy Mid Tier 9.1 - Error page] but found [API:SYS:ADM:SecurityConsole (Search)]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat steps.OWF_LoginPageSteps.userValidatesSecurityConsoleIsDisplayed(OWF_LoginPageSteps.java:52)\r\n\tat ✽.user validates security console is displayed(features/Automation/API/SecurityConsole/E2E_Security_Console.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on create new client button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userClicksOnCreateNewClientButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters client name as \"Test Client Name\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userEntersClientNameAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user opens and selects \"- oneworkflow-userautomaint\" from \"User\" dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userOpensAndSelectsFromDropdown(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates chosen name \"f12023\" is in the user field",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesChosenNameIsInTheUserField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user opens and selects \"- Roberta-F11925\" from \"User\" dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userOpensAndSelectsFromDropdown(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates old user value is cleared and new value \"f11925\" is set",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesOldUserValueIsClearedAndNewValueIsSet(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clears value in field and enters user as \"api\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userClearsValueInFieldAndEntersUserAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates user list is shown and selects user \"apitester1\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesUserListIsShownAndSelectsUser(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters summary as \"Test Client Summary\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userEntersSummaryAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userClicksOnSubmitButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks close on confirmation window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userClicksCloseOnConfirmationWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates created user \"Test Client Name\" is present under \"Client Name\" dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesCreatedUserIsPresentUnderDropdown(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks create new operation button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userClicksCreateNewOperationButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters operation name as \"Test Operation Name30\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userEntersOperationNameAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userClicksOnSubmitButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks close on confirmation window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userClicksCloseOnConfirmationWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates created operation \"Test Operation Name30\" is present under \"Operation\" dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesCreatedOperationIsPresentUnderDropdown(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects \"Client Name\" as \"Test Client Name\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsAs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates that \"apitester1New\" is present under user and readonly",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesThatApitesterIsPresentUnderUserAndReadonly(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks the pencil icon",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userClicksThePencilIcon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates client name is readonly",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesClientNameIsReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates operation is readonly",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesOperationIsReadonly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates user is editable and not read only",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesUserIsEditableAndNotReadOnly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters user as \"apitester1New\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userEntersUserAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the confirm button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userClicksOnTheConfirmButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates user as \"apitester1New\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesUserAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects \"Operation\" as \"Test Operation Name\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsAs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the enable button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userClicksOnTheEnableButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates \"Test Operation Name\" is present under the request table in row 1",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesIsPresentUnderTheRequestTable(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects \"Operation\" as \"Attach CI\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsAs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the enable button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userClicksOnTheEnableButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates \"Attach CI\" is present under the request table in row 2",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesIsPresentUnderTheRequestTable(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects \"Operation\" as \"Create Change Request\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsAs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the enable button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userClicksOnTheEnableButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates \"Create Change Request\" is present under the request table in row 3",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesIsPresentUnderTheRequestTable(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects \"Operation\" as \"Create Problem\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsAs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the enable button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userClicksOnTheEnableButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates \"Create Problem\" is present under the request table in row 4",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesIsPresentUnderTheRequestTable(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects \"Test Operation Name\" request in the table",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userSelectsRequestInTheTable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the Edit GUID button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userClicksOnTheEditGUIDButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters new GUID ID as \"New Test GUID17\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userEntersNewGUIDIDAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userClicksOnSubmitButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks close on confirmation window",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userClicksCloseOnConfirmationWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the Edit GUID button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userClicksOnTheEditGUIDButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates new GUID is shown as \"New Test GUID17\"",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesNewGUIDIsShownAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user closes Edit GUID window",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userClosesEditGUIDWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects \"Test Operation Name\" request in the table",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userSelectsRequestInTheTable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the disable button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userClicksOnTheDisableButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates \"New Test GUID\" request isnt present in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesRequestIsntPresentInTheTable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the reset button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userClicksOnTheResetButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "all entries should be cleared from the table",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.allEntriesShouldBeClearedFromTheTable()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects the preferences as \"Remove Column:API Client Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userSelectsThePreferencesAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates \"API Client Name\" column is not present",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesColumnIsNotPresent(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects the preferences as \"Remove Column:API Operation\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userSelectsThePreferencesAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates \"API Operation\" column is not present",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesColumnIsNotPresent(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects the preferences as \"Remove Column:OperationStatus\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userSelectsThePreferencesAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates \"Operation Status\" column is not present",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesColumnIsNotPresent(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects the preferences as \"Reset\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userSelectsThePreferencesAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates \"API Client Name\" column is present",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesColumnIsPresent(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates \"Status\" column is present",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesColumnIsPresent(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates \"API Operation\" column is present",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesColumnIsPresent(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates \"OperationStatus\" column is present",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesColumnIsPresent(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects \"Client Name\" as \"Test Client Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsAs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on remove client button",
  "keyword": "And "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userClicksOnRemoveClientButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates \"Test Client Name\" isnt present under the \"Client Name\" drop down",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesIsntPresentUnderTheDropDown(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects \"Operation\" as \"Test Operation Name\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSelectsAs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on removal operation button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userClicksOnRemovalOperationButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates \"Test Operation\" isnt present under the \"Operation\" drop down",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesIsntPresentUnderTheDropDown(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on home button",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userClicksOnHomeButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates agent console is displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userValidatesAgentConsoleIsDisplayedCorrectly()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logsOut",
  "keyword": "When "
});
formatter.match({
  "location": "OWF_AgentConsolePageSteps.userLogsOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user switches to window 0",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_ProblemRecordPageSteps.userSwitchesToWindow(int)"
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
  "name": "user validates the OW login page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "OWF_LoginPageSteps.userValidatesTheOWLoginPageIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});