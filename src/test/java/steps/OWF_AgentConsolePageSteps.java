package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pageObjects.OWF_AgentConsolePage;
import utils.CommonUtils;

import java.awt.datatransfer.StringSelection;

public class OWF_AgentConsolePageSteps {

    OWF_AgentConsolePage agentConsolePage = new OWF_AgentConsolePage();

    @Then("user successfully logged in to OneWorkflow and agent console should be displayed")
    public void userSuccessfullyLoggedInToOneworkflowAndAgentConsoleShouldBeDisplayed() {
      // String AgentConsolePageTitle = agentConsolePage.getDriver().getTitle();
        //System.out.println(AgentConsolePageTitle);
        //Assert.assertEquals(AgentConsolePageTitle, "Agent Console (New)");
    }

    @When("user selects SID console from agent console")
    public void userSelectsSIDConsoleFromAgentConsole() {
        Assert.assertTrue(false);
        agentConsolePage.clickConsoleMenu();
        agentConsolePage.clickMenuItemSIDConsole();
        //CommonUtils.switchToChildWindow(agentConsolePage.getDriver(), 1);
    }

    @When("user clicks on add column under preferences and selects OP next due date")
    public void userClicksOnAddColumnUnderPreferencesAndSelectsOPNextDueDate() {
        agentConsolePage.clickPreferences();
        agentConsolePage.setPreferences("Add Column:OP Next Due Date");
        agentConsolePage.wait(5000);
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
        agentConsolePage.wait(5000);
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
        agentConsolePage.wait(2000);
        agentConsolePage.selectMyAssigneeProfile();
        agentConsolePage.wait(3000);
    }

    @Then("user clicks on My Assignee profile dropdown and selects Creator\\(user level)")
    public void userClicksOnMyAssigneeProfileDropdownAndSelectsCreatorUserLevel() throws InterruptedException {
        agentConsolePage.clickAllRolesDropDown();
        agentConsolePage.wait(2000);
        agentConsolePage.selectMyCreaterUserLevel();
        agentConsolePage.wait(3000);
    }

    @And("user clicks on All tickets dropdown and selects WO and OP")
    public void userClicksOnAllTicketsDropdownAndSelectsWOAndOP() {
        agentConsolePage.clickAllTicketsDropDown();
        agentConsolePage.wait(2000);
        agentConsolePage.selectDdValueWO_OP();
    }

    @When("user clicks on Creator\\(user level) dropdown and selects My Owner Profile")
    public void userClicksOnCreatorUserLevelDropdownAndSelectsMyOwnerProfile() throws InterruptedException {
        agentConsolePage.clickAllRolesDropDown();
        agentConsolePage.wait(2000);
        agentConsolePage.selectMyOwnerProfile();
        agentConsolePage.wait(3000);
    }

    @When("user clicks on add column under preferences and selects OP Target date")
    public void userClicksOnAddColumnUnderPreferencesAndSelectsOPTargetDate() {
        agentConsolePage.clickPreferences();
        agentConsolePage.setPreferences("Add Column:OP Target Date");

    }

    @And("user logsOut and closes the browser")
    public void userLogsOutsAndCloseTheBrowser() throws InterruptedException {
        CommonUtils.switchToChildWindow(agentConsolePage.getDriver(), 0);
        agentConsolePage.clickNavUserMenu();
        agentConsolePage.wait(2000);
        agentConsolePage.clickMenuItemLogout();
        agentConsolePage.wait(1000);
    }

    @When("user clicks on change record from agent console")
    public void userClicksOnChangeRecordFromAgentConsole() {
        agentConsolePage.clickCreateMenu();
        agentConsolePage.clickMenuItemChangeRecord();
    }

    @And("user clicks on search and selects open search forms and problem record")
    public void userClicksOnSearchAndSelectsOpenSearchFormsAndProblemRecord() {
        agentConsolePage.clickSearch_OpenSearch_ProblemRecord();
        agentConsolePage.wait(2000);

    }

    @Then("user logsOut")
    public void userLogsOut() {
        agentConsolePage.clickNavUserMenu();
        agentConsolePage.wait(1000);
        agentConsolePage.clickMenuItemLogout();
        agentConsolePage.wait(5000);

    }

    @When("user clicks on create trouble event")
    public void userClicksOnCreateTroubleEvent() {
        agentConsolePage.clickCreateMenu();
        agentConsolePage.wait(1000);
        agentConsolePage.clickMenuItemTroubleEvent();

    }


    @When("user clicks on create change record")
    public void userClicksOnCreateChangeRecord() {
        agentConsolePage.clickCreateMenu();
        agentConsolePage.wait(1000);
        agentConsolePage.clickMenuItemChangeRecord();
    }


    @When("user selects search menu as {string}")
    public void userSelectsSearchMenuAs(String arg0) {
        agentConsolePage.selectSearchMenu(arg0);
    }

    @And("user clicks on {string} tab")
    public void userClicksOnAlarmTab(String tabName) {
      agentConsolePage.selectTab(tabName);
    }

    @When("user sets the preferences under the alarm tab as {string}")
    public void whenUserSetsThePreferencesUnderTheAlarmTabAs(String arg0) {
        agentConsolePage.setFilterPreferences(arg0);
    }

    @Then("user clicks on refresh button")
    public void userClicksOnRefreshButton() {

    }

    @When("user enters ticket id as {string} in the agent console search box and searches for ticket")
    public void userEntersTicketIdAsInTheAgentConsoleSearchBoxAndSearchesForTicket(String ticketId) {
        agentConsolePage.enterSearch(ticketId);
        agentConsolePage.wait(2000);
        
    }

    @When("user clicks on close button")
    public void userClicksOnCloseButton() {
        agentConsolePage.clickCloseButtonOnFrame();
    }

    @When("user selects action dropdown as {string}")
    public void userSelectsActionDropdownAs(String arg0) {
        agentConsolePage.selectAction(arg0);
    }

    @Then("user closes alarm console")
    public void userClosesAlarmConsole() {
        agentConsolePage.clickOnCloseImage();

    }

    @And("user clicks {string} on the popup")
    public void userClicksOnThePopup(String arg0) {
        agentConsolePage.acceptAlert();
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
        Assert.assertEquals(agentConsolePage.getAlarmTableRowsCount(), 2, 0, "alarm is not present");

    }

    @Then("user shouldn't see alarm ID column")
    public void userShouldnTSeeAlarmIDColumn() {
        //int ColumnIndex= agentConsolePage.getColumnIndexByHeaderName("Alarm ID");
        //Assert.assertNotEquals(ColumnIndex, -1, 0, "user is able to see Alarm Id column");

        Assert.assertFalse(agentConsolePage.isColumnDisplayed(""), "user is able to see the Alarm");

    }

    @Then("user should see alarm ID column")
    public void userShouldSeeAlarmIDColumn() {
        Assert.assertTrue(agentConsolePage.isColumnDisplayed(""), "Alarm ID column is not present");

    }

    @When("user double clicks on the alarm present")
    public void userDoubleClicksOnTheAlarmPresent() {
        agentConsolePage.doubleClickOnAlarm();

    }
}




