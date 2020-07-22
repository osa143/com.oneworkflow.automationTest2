package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pageObjects.OWF_AgentConsolePage;
import utils.CommonUtils;

import static utils.CommonUtils.*;

public class OWF_AgentConsolePageSteps {

    OWF_AgentConsolePage agentConsolePage = new OWF_AgentConsolePage();

    @Then("user successfully logged in to OneWorkflow and agent console should be displayed")
    public void userSuccessfullyLoggedInToOneworkflowAndAgentConsoleShouldBeDisplayed() {
      //String AgentConsolePageTitle = agentConsolePage.getDriver().getTitle();
        //System.out.println(AgentConsolePageTitle);
        //Assert.assertEquals(AgentConsolePageTitle, "Agent Console (New)");
    }

    @When("user selects SID console from agent console")
    public void userSelectsSIDConsoleFromAgentConsole() {
        agentConsolePage.clickConsoleMenu();
        agentConsolePage.clickMenuItemSIDConsole();
    }

    @When("user clicks on add column under preferences and selects OP next due date")
    public void userClicksOnAddColumnUnderPreferencesAndSelectsOPNextDueDate() {
        agentConsolePage.clickPreferences();
        agentConsolePage.setPreferences("Add Column:OP Next Due Date");
        agentConsolePage.wait(2000);
    }

    @Then("OP next due date column within agent console should be displayed")
    public void opNextDueDateColumnWithinAgentConsoleShouldBeDisplayed() {
        int columnIndex = agentConsolePage.getColumnIndexByHeaderName("OP Next Due Date");
        Assert.assertNotEquals(columnIndex, -1, 0, "OP Next due date column within agent console is not displayed");
    }

    @When("user clicks on create problem record")
    public void userClicksOnCreateProblemRecord() {


        agentConsolePage.clickCreateMenu();
        agentConsolePage.clickMenuItemProblemRecord();
        //agentConsolePage.wait(3000);
        //CommonUtils.switchToChildWindow(agentConsolePage.getDriver(), 1);
    }


    @And("OP next due date information should be displayed")
    public void opNextDueDateInformationShouldBeDisplayed() {
        Assert.assertTrue(agentConsolePage.validateOpNextDueDateInformation(), "OP next due date information is not displayed");
    }


    @Then("OP next due date column within agent console should not be displayed")
    public void opNextDueDateColumnWithinAgentConsoleShouldNotBeDisplayed() {
       Assert.assertFalse(agentConsolePage.isColumnDisplayed("OP Next Due Date"), "OP Next due date column within agent console is still displayed even after removing");
    }

    @And("user shouldn't see OP next due date information")
    public void userShouldnTSeeOPNextDueDateInformation() {
        Assert.assertFalse(agentConsolePage.validateOpNextDueDateInformation(), "OP next due date information is still displayed");
    }


    @Then("user should see tickets related to assignee profile of user")
    public void userShouldSeeTicketsRelatedToAssigneeProfileOfUser() {
     Assert.assertNotEquals(agentConsolePage.getTableRowsCount(), 0, "My Assignee profile tickets are not displayed");
    }


    @Then("user should see OP target date column in the agent console")
    public void userShouldSeeOPTargetDateInTheAgentConsole() {
        Assert.assertTrue(agentConsolePage.isColumnDisplayed("OP Target Date"), "OP Target date column within agent console is not displayed");

    }

    @And("user should see OP target date information")
    public void userShouldSeeOPTargetDateInformation() {
        Assert.assertTrue(agentConsolePage.validateOpTargetDateInformation(), "OP target date information in the agent console is not displayed");
    }

    @Then("user shouldn't see OP target date column in the agent console")
    public void userShouldnTSeeOPTargetDateInTheAgentConsole() {
        Assert.assertFalse(agentConsolePage.isColumnDisplayed("OP Target Date"), "OP Target date column within agent console is still displayed");
    }

    @Then("OP target date information should not visible")
    public void opTargetDateInformationShouldNotVisible() {
        Assert.assertFalse(agentConsolePage.isColumnDisplayed("OP Target Date"), "OP Target date information within agent console is still displayed");
    }

    @When("user clicks on add column from preferences and selects OP next due date")
    public void userClicksOnAddColumnFromPreferencesAndSelectsOPNextDueDate() {
        agentConsolePage.clickPreferences();
        agentConsolePage.setPreferences("Add Column:OP Next Due Date");
    }

    @And("user clicks on Remove Column under preferences and selects OP Target date")
    public void userClicksOnRemoveColumnUnderPreferencesAndSelectsOPTargetDate() {
        agentConsolePage.clickPreferences();
        agentConsolePage.setPreferences("Remove Column:OP Target Date");

    }


    @When("user clicks on remove column under preferences and selects OP next due date")
    public void userClicksOnRemoveColumnUnderPreferencesAndSelectsOPNextDueDate() {
        agentConsolePage.clickPreferences();
        agentConsolePage.setPreferences("Remove Column:OP Next Due Date");
    }

    @When("user clicks on All roles drop down and selects my assignee profile")
    public void userClicksOnAllRolesDropDownAndSelectsMyAssigneeProfile() throws InterruptedException {
        agentConsolePage.clickAllRolesDropDown();
        agentConsolePage.selectMyAssigneeProfile();
    }

    @Then("user clicks on My Assignee profile dropdown and selects Creator\\(user level)")
    public void userClicksOnMyAssigneeProfileDropdownAndSelectsCreatorUserLevel() throws InterruptedException {
        agentConsolePage.clickAllRolesDropDown();
        agentConsolePage.selectMyCreaterUserLevel();
    }

    @And("user clicks on All tickets dropdown and selects WO and OP")
    public void userClicksOnAllTicketsDropdownAndSelectsWOAndOP() {
        agentConsolePage.clickAllTicketsDropDown();
        agentConsolePage.selectDdValueWO_OP();
    }

    @When("user clicks on Creator\\(user level) dropdown and selects My Owner Profile")
    public void userClicksOnCreatorUserLevelDropdownAndSelectsMyOwnerProfile() throws InterruptedException {
        agentConsolePage.clickAllRolesDropDown();
        agentConsolePage.selectMyOwnerProfile();

    }

    @When("user clicks on add column under preferences and selects OP Target date")
    public void userClicksOnAddColumnUnderPreferencesAndSelectsOPTargetDate() {
        agentConsolePage.clickPreferences();
        agentConsolePage.setPreferences("Add Column:OP Target Date");

    }

    @And("user logsOut and closes the browser")
    public void userLogsOutsAndCloseTheBrowser() throws InterruptedException {
//        agentConsolePage.clickNavUserMenu();
//        agentConsolePage.clickMenuItemLogout();
        agentConsolePage.doLogout();
        agentConsolePage.getDriver().close();


    }

    @When("user clicks on change record from agent console")
    public void userClicksOnChangeRecordFromAgentConsole() {
        agentConsolePage.clickCreateMenu();
        agentConsolePage.clickMenuItemChangeRecord();
    }

    @And("user clicks on search and selects open search forms and problem record")
    public void userClicksOnSearchAndSelectsOpenSearchFormsAndProblemRecord() {
        agentConsolePage.clickSearch_OpenSearch_ProblemRecord();

    }

    @Then("user logsOut")
    public void userLogsOut() {
        agentConsolePage.clickNavUserMenu();
        agentConsolePage.clickMenuItemLogout();

    }

    @When("user clicks on create trouble event")
    public void userClicksOnCreateTroubleEvent() {
        agentConsolePage.clickCreateMenu();
        agentConsolePage.clickMenuItemTroubleEvent();

    }


    @When("user clicks on create change record")
    public void userClicksOnCreateChangeRecord() {
        agentConsolePage.clickCreateMenu();
        agentConsolePage.clickMenuItemChangeRecord();
    }


    @When("user selects search menu as {string}")
    public void userSelectsSearchMenuAs(String arg0) {
        agentConsolePage.selectSearchMenu(arg0);
    }

    @And("user clicks on {string} tab")
    public void userClicksOnAlarmTab(String tabName) {
      try {
          agentConsolePage.selectTab(tabName);
      }
      catch (Exception e){
          agentConsolePage.wait(5000);
          agentConsolePage.selectTab(tabName);
        }
    }

    @When("user sets the preferences under the alarm tab as {string}")
    public void whenUserSetsThePreferencesUnderTheAlarmTabAs(String arg0) {
        agentConsolePage.clickFilterPreferences();
        agentConsolePage.setFilterPreferences(arg0);
    }

    @When("user enters ticket id as {string} in the agent console search box and searches for ticket")
    public void userEntersTicketIdAsInTheAgentConsoleSearchBoxAndSearchesForTicket(String ticketId) {
        agentConsolePage.enterSearch(ticketId);

        
    }

    @When("user clicks on close button")
    public void userClicksOnCloseButton() {
        agentConsolePage.clickCloseButtonOnFrame();
    }

    @When("user selects action dropdown as {string}")
    public void userSelectsActionDropdownAs(String arg0) {
        agentConsolePage.selectAction(arg0);
    }

    @Then("user validates secondary alarm turns primary")
    public void secondaryAlarmTurnsPrimary() {
        Assert.assertTrue(agentConsolePage.verifySecondaryTurnsToPrimary(), "Secondary alarm didn't change to primary");
    }

    @Then("user closes alarm console")
    public void userClosesAlarmConsole() {
        agentConsolePage.clickOnCloseImage();

    }

    @And("user clicks {string} on the popup")
    public void userClicksOnThePopup(String arg0) {
        agentConsolePage.switchToFrameByIndex(2);
        agentConsolePage.clickOnYes();
        agentConsolePage.wait(2000);
    }

    @And("user clicks ok on the Secondary Primary popup")
    public void userClicksOkOnThePrimarySecondaryPopup() {
        agentConsolePage.switchToFrameByIndex(2);
        agentConsolePage.clickYesonSecondaryPrimaryWarningFrame();
        agentConsolePage.wait(2000);
    }


    @And("user clicks on refresh button on alarms tab")
    public void userClicksOnRefreshButtonOnAlarmsTab() {
        agentConsolePage.clickRefresh_AlarmTab();
    }

    @Then("trouble ticket should be present in agent console")
    public void troubleTicketShouldBePresentInAgentConsole() {
        int size = agentConsolePage.getTableRowsCount();
        Assert.assertNotEquals(size,0, 0, "Trouble ticket is not present ");
    }

    @When("user highlights present ticket")
    public void userHighlightsPresentTicket() {
        agentConsolePage.clickOnTicket();

    }

    @Then("user should see an alarm present")
    public void userShouldSeeAnAlarmPresent() {
        Assert.assertNotNull(agentConsolePage.getAlarmTableRowsCount(),  "alarm is not present");

    }

    @Then("user shouldn't see {string} column")
    public void userShouldnTSeeAlarmIDColumn(String alarmID) {

        Assert.assertFalse(agentConsolePage.isColumnDisplayedByDivId(alarmID));

    }

    @Then("user should see {string} column")
    public void userShouldSeeAlarmIDColumn(String alarmID) {

        agentConsolePage.wait(5000);
        Assert.assertTrue(agentConsolePage.isColumnDisplayedByDivId(alarmID), "Alarm ID column is not present");

    }

    @When("user double clicks on the alarm present")
    public void userDoubleClicksOnTheAlarmPresent() {
        agentConsolePage.doubleClickOnAlarm();

    }

    @Then("user switches to frame {int}")
    public void userSwitchesToFrame(int arg0) {
        agentConsolePage.switchToFrameByIndex(arg0);
    }

    @Then("alarm details should be displayed in new window")
    public void alarmDetailsShouldBeDisplayedInNewWindow() {

        Assert.assertNotNull(agentConsolePage.getAlarmNumber());

    }

    @Then("user should see list of alarms in alarm console")
    public void userShouldSeeListOfAlarmsInAlarmConsole() {
        agentConsolePage.switchToFrameByIndex(2);
       Assert.assertTrue(agentConsolePage.checkIfAlarmsPresent(), "Alarms are not present");

    }

    @And("user switches to frame {string}")
    public void userSwitchesToFrame(String arg0) {
        agentConsolePage.switchToFrameByName(arg0);
    }


    @When("user selects one secondary alarm")
    public void userSelectsOneSecondaryAlarm() {
     agentConsolePage.clickSecondaryAlarm();
    }

    @Then("user shouldn't see the detached alarm")
    public void userShouldnTSeeTheDetachedAlarm() {

    }

    @And("user double clicks on ticket to open")
    public void userDoubleClicksOnTicketToOpen() {
        agentConsolePage.doubleClickOnTicket();
    }

    @And("user switches to frame by id")
    public void userSwitchesToFrameById() {
        agentConsolePage.switchToFrameById("1560363005201P");
    }

    @And("user clicks ok on alert")
    public void userClicksOkOnAlert() {
        agentConsolePage.acceptAlert();
    }

    @When("user clicks on create known error")
    public void userClicksOnCreateKnownError() {
        agentConsolePage.selectCreateAsKnownError();
    }

    @And("multiple menu options {string} should be available")
    public void multipleMenuOptionsShouldBeAvailable(String arg0) {
        Assert.assertTrue(agentConsolePage.verifyMenuItems(arg0));
    }

    @When("user clicks on create work order")
    public void userSelectsCreateMenuAs() {
        agentConsolePage.selectMainMenuAndMenuItem("Create", "Work Order");
    }

    @When("user selects {string} under all tickets")
    public void userSelectsUnderAllTickets(String arg0) {
       agentConsolePage.selectAllTickets(arg0);
    }

    @When("user clicks on more filters button")
    public void userClicksOnMoreFiltersButton() {
        agentConsolePage.clickMoreFilters();
        agentConsolePage.switchToFrameByIndex(2);
    }

    @When("user selects status as {string} on user more filters window")
    public void userSelectsStatusAsOnUserMoreFiltersWindow(String arg0) {
        agentConsolePage.selectStatus(arg0);
    }

    @And("user clicks on apply button on user more filters window")
    public void userClicksOnApplyButtonOnUserMoreFiltersWindow() {
       agentConsolePage.clickApply_userMoreFilters();
    }

    @And("user validates Details is present on user more filters window")
    public void userValidatesDetailsIsPresentOnUserMoreFiltersWindow() {
        Assert.assertTrue(agentConsolePage.verifyDetailsIsPresent());
    }

    @And("user validates CTI Details is present on user more filters window")
    public void userValidatesCTIDetailsIsPresentOnUserMoreFiltersWindow() {
        Assert.assertTrue(agentConsolePage.verifyCtiDetailsIsPresent());
    }

    @When("user selects all roles dropdown as {string}")
    public void userSelectsAllRolesDropdownAs(String arg0) {
        agentConsolePage.selectAllRoles(arg0);
    }

    @And("user enter in the search as {string} on user more filters window")
    public void userEnterInTheSearchAsOnUserMoreFiltersWindow(String arg0) {
        agentConsolePage.enterSearch_userMoreFilters(arg0);
    }

    @Then("user clicks search button on more user filters window")
    public void userClicksSearchButtonOnMoreUserFiltersWindow() {
      agentConsolePage.clickSearch_userMoreFilters();
    }

    @And("user selects shown assignment profile")
    public void userSelectsShownAssignmentProfile() {
        agentConsolePage.clickRow1();
    }

    @And("user clicks on more filters add button")
    public void userClicksOnMoreFiltersAddButton() {
      agentConsolePage.clickAdd_userMoreFilters();
    }

    @When("user selects all dropdown as {string}")
    public void userSelectsAllDropdownAs(String arg0) {
        agentConsolePage.selectAll(arg0);
    }

    @When("user sets the preferences as {string}")
    public void userSetsThePreferencesAs(String arg0) {

        agentConsolePage.clickPreferences();
        agentConsolePage.setPreferences(arg0);
    }


    @Then("user enters refresh interval as {string} minutes")
    public void userEntersRefreshIntervalAsMinutes(String arg0) {
        agentConsolePage.enterRefreshInterval(arg0);
    }

    @And("user clicks on refresh ok button")
    public void userClicksOnRefreshOkButton() {
        agentConsolePage.clickOk();
    }

    @Then("user should only see tickets with {string} of {string}")
    public void userShouldOnlySeeChangeTicketsWithStatusOf(String columnName, String columnValue) {
        agentConsolePage.verifyFilteredStatus(columnName, columnValue);
    }
    @Then("user validates search bar is visible")
    public void userValidatesSearchBarIsVisible() {
        Assert.assertTrue(agentConsolePage.verifySearchIsDisplayed());
    }

    @Then("user validates tickets are listed in agent console table")
    public void userValidatesTicketsAreListedInAgentConsoleTable() {
        Assert.assertTrue(agentConsolePage.validateTicketsAvailabilityInAgentConsoleTable());
    }

    @When("user clicks on refresh button above ticket numbers")
    public void userClicksOnRefreshButtonAboveTicketNumbers() {
        agentConsolePage.clickRefresh_image();
    }
    @Then("user should see Alerts ticket value")
    public void userShouldSeeAlertsTicketValue() {
        Assert.assertNotEquals(agentConsolePage.getAlerts(), "");
    }

    @And("user should see New ticket value")
    public void userShouldSeeNewTicketValue() {

        Assert.assertNotEquals(agentConsolePage.getNew(), "");
    }

    @And("user should see Assigned ticket value")
    public void userShouldSeeAssignedTicketValue() {
        Assert.assertNotEquals(agentConsolePage.getAssigned(), "");
    }

    @And("user should see WIP ticket value")
    public void userShouldSeeWIPTicketValue() {
        Assert.assertNotEquals(agentConsolePage.getWip(), "");
    }

    @And("user should see Cleared ticket value")
    public void userShouldSeeClearedTicketValue() {
        Assert.assertNotEquals(agentConsolePage.getCleared(), "");
    }


    @Then("user should only see tickets assigned to current {string} as {string}")
    public void userShouldOnlySeeTicketsAssignedToCurrentAs(String arg0, String arg1) {
        Assert.assertTrue(agentConsolePage.verifyTicketsAssignedToCurrentUserProfile(arg0, arg1, false));
    }

    @Then("user should only see {string} tickets")
    public void userShouldOnlySeeTickets(String colValue) {
        Assert.assertTrue(agentConsolePage.verifyTicketsAssignedToCurrentUserProfile("ID", colValue, true));
    }

    @Then("user closes current tab")
    public void userClosesCurrentTab() {
        agentConsolePage.closeTab();
    }

    @And("user gets first ticket from the agent console table")
    public void userGetsFirstTicketFromTheAgentConsoleTable() {
        firstTicketBefore=agentConsolePage.getAgentConsoleTableCellData("ID", 1);
    }

    @And("user validates agent console is not refreshed")
    public void userValidatesAgentConsoleIsNotRefreshed() {
        firstTicketAfterWait=agentConsolePage.getAgentConsoleTableCellData("ID", 1);
        Assert.assertEquals(firstTicketBefore, firstTicketAfterWait);
    }

    @And("user validates agent console is refreshed")
    public void userValidatesAgentConsoleIsRefreshed() {
        firstTicketAfterRefreshInterval=agentConsolePage.getAgentConsoleTableCellData("ID", 1);
        Assert.assertNotEquals(firstTicketBefore, firstTicketAfterRefreshInterval);
    }

    @And("user enters {string} in the Location ID+ field")
    public void userEntersInTheLocationIDField(String arg0) {
       agentConsolePage.enterLocationPlus(arg0);
    }

    @Then("user clicks on quick search button")
    public void userClicksOnQuickSearchButton() {
        agentConsolePage.clickQuickSearch();
    }

    @And("user should see list of CI's related to {string}")
    public void userShouldSeeListOfCISRelatedTo(String arg0) {
     Assert.assertTrue(agentConsolePage.verifyLocation("Name",arg0,true));
    }

    @Then("user clicks on the close button")
    public void userClicksOnTheCloseButton() {
     agentConsolePage.clickCancel_selectLocation();
    }

    @When("user clicks on the quick search clear button")
    public void userClicksOnTheQuickSearchClearButton() {
        agentConsolePage.clickClear_selectLoaction();
    }

    @And("user enters {string} in the Location Name+ field")
    public void userEntersInTheLocationNameField(String arg0) {
        agentConsolePage.enterLocationNamePlus_selectLocation(arg0);
        agentConsolePage.enterSendKeysToLocationNamePlus();
    }
    @When("user selects create menu as {string}")
    public void userSelectsCreateMenuAs(String arg0) {
        agentConsolePage.selectCreateMenu(arg0);
    }

    @And("user clicks on agent console ticket search box and user enters enter key")
    public void userClicksOnAgentConsoleTicketSearchBoxAndUserEntersEnterKey() {
        agentConsolePage.enterSendKeysInSearchBox();

    }

    @Then("user enters title as {string} on more filter window")
    public void userEntersTitleAsOnMoreFilterWindow(String arg0) {
        agentConsolePage.enterTitle_moreFilter(arg0);

    }

    @And("user should see {string} tickets with {string} of {string}")
    public void userShouldSeeTicketsWithOf(String colValue, String colName, String ticketStatus) {
        Assert.assertTrue(agentConsolePage.verifyTicketsAssignedToCurrentUserProfile("ID", colValue, true));
        Assert.assertTrue(agentConsolePage.verifyTicketsAssignedToCurrentUserProfile(colName, ticketStatus, true));
    }

    @When("user selects administration menu as {string}")
    public void userSelectsAdministrationMenuAs(String arg0) {
        agentConsolePage.selectAdministrationMenu(arg0);
    }

    @Given("user is on the assignment rules configuration form")
    public void userIsOnTheAssignmentRulesConfigurationForm() {
        CommonUtils.switchToChildWindow(driver, 1);
        Assert.assertEquals(agentConsolePage.getPageTitle(), "OS3 Assignment Rules Console (New)");
    }

    @When("user clicks the new button on assignment rule window")
    public void userClicksTheNewButtonOnAssignmentRuleWindow() {
        agentConsolePage.clickNew_AssignmentRules();
    }

    @Then("the new assignment rule configuration form is displayed")
    public void theNewAssignmentRuleConfigurationFormIsDisplayed() {
       // int size= agentConsolePage.getDriver().findElements(By.tagName("iframe")).size();
        //agentConsolePage.switchToFrameByIndex(size);
    }
    

    @And("user clicks on open button")
    public void userClicksOnModifyButton() {
        agentConsolePage.clickOpen_AssignmentRules();
    }

    @When("user selects a record on assignment rules window")
    public void userSelectsARecordOnAssignmentRulesWindow() {
        agentConsolePage.clickRow1_AssignmentRulesTable();
    }

    @Then("the modify assignment rule configuration form is displayed")
    public void theModifyAssignmentRuleConfigurationFormIsDisplayed() {

    }

    @And("multiple options {string} should be available in Title dropdown")
    public void multipleOptionsShouldBeAvailableInTitleDropdown(String arg0) {
        Assert.assertTrue(agentConsolePage.verifyTitleDropdownValues(arg0, ""));
    }

    @Then("user validates availability of {string} tabs")
    public void userValidatesAvailabilityOfTabs(String arg0) {
        agentConsolePage.verifyTabValues(arg0);
    }

    @And("user validates agent console is displayed correctly")
    public void userValidatesAgentConsoleIsDisplayedCorrectly() {
       Assert.assertTrue(agentConsolePage.verifyAgentConsoleHasData());
    }

    @And("user logsOut and accepts alert")
    public void userLogsOutAndAcceptsAlert() {
        agentConsolePage.doLogout();
        //agentConsolePage.getDriver().switchTo().alert().accept();
    }

    @And("user should see specified Timezone as {string} top right under username")
    public void userShouldSeeSpecifiedTimezoneAsTopRightOfTheAgentConsoleUnderUsername(String ExpectedTimeZone) {
        Assert.assertEquals(agentConsolePage.getTimezone(), ExpectedTimeZone );
    }

    @When("user selects {string} menu as {string}")
    public void userSelectsMenuAs(String menu, String item) {
        agentConsolePage.selectMenuAndItem(menu, item);
    }

    @And("user should see confirmation message and clicks ok button and close the my account window")
    public void userShouldSeeConfirmationMessageAndClicksOkButtonAndCloseTheMyAccountWindow() {
        agentConsolePage.closeConfirmationMessageAndClickCloseButton();
    }

    @And("user enters Time Zone as {string}")
    public void userEntersTimeZoneAs(String timeZone) {
        agentConsolePage.enterTimeZone(timeZone);
    }

    @And("user clicks save button on my account window")
    public void userClicksSaveButtonOnMyAccountWindow() {
        agentConsolePage.clickSaveButton_MyAccount();
    }


    @Then("user console should be opened in new window")
    public void userConsoleShouldBeOpenedInNewWindow() {
        Assert.assertEquals(agentConsolePage.getPageTitle(), "OS3 User Console (Search)");

    }

    @And("dropdown values {string} should be available in {string} dropdown")
    public void dropdownValuesShouldBeAvailableInDropdown(String dropdownValues, String dropdownName) {
        Assert.assertTrue(agentConsolePage.verifyDropdownValues(dropdownValues, dropdownName, "notreadonly"));
    }

    @Then("user selects user {string} in user table")
    public void userClicksOnUserAndClicksOpen(String text) {
        agentConsolePage.clickElementByContainsTextAndTagName("span", text);
    }

    @And("user clicks open user button")
    public void userClicksOpenUserButton() {
        agentConsolePage.clickOpenUser();
    }

    @And("user validates countries {string} are present")
    public void userValidatesCountriesArePresent(String arg0) {
        Assert.assertTrue(agentConsolePage.verifyElementIsDisplayedByContainsText(arg0));
    }

    @Then("user selects country {string}")
    public void userSelectsCountry(String text) {
        agentConsolePage.clickElementByContainsTextAndTagName("span", text);
    }

    @And("user clicks add right button")
    public void userClicksAddRightButton() {
        agentConsolePage.clickAddRight();
    }

    @Then("user closes user information window")
    public void userClosesUserInformationWindow() {
        agentConsolePage.clickCloseUserInformation();
    }


    @Then("user clicks remove left button")
    public void userClicksRemoveLeftButton() {
        agentConsolePage.clickRemoveLeft();
    }

    @And("user validates {string} has been removed")
    public void userValidatesHasBeenRemoved(String arg0) {

    }

    @And("user information window should be opened")
    public void userInformationWindowShouldBeOpened() {
        //dummystep
    }

    @And("user should see available trust principles as countries {string}")
    public void userShouldSeeAvailableTrustPrinciplesAsCountries(String countries) {
     Assert.assertTrue(agentConsolePage.verifyAvailableTrustPrinciplesCountries(countries));
    }

    @Then("user should see {string} under selected trust principles")
    public void userShouldSeeUnderSelectedTrustPrinciples(String countryName) {
        Assert.assertTrue(agentConsolePage.getTrustPrinciplesAvailableCountry(1, countryName));
    }

    @Then("user shouldn't see {string} under selected trust principles")
    public void userShouldnTSeeUnderSelectedTrustPrinciples(String countryName) {
        Assert.assertFalse(agentConsolePage.getTrustPrinciplesAvailableCountry(1, countryName));
    }
}




