package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import pageObjects.BasePage;
import pageObjects.OWF_AgentConsolePage;
import utils.CommonUtils;

import java.util.List;

public class OWF_AgentConsolePageSteps {

    OWF_AgentConsolePage agentConsolePage = new OWF_AgentConsolePage();

    @Then("user successfully logged in to oneworkflow and agent console should be displayed")
    public void userSuccessfullyLoggedInToOneworkflowAndAgentConsoleShouldBeDisplayed() {
        String AgentConsolePageTitle= agentConsolePage.getDriver().getTitle();
        System.out.println(AgentConsolePageTitle);
    }
    @When("user selects SID console from agent console")
    public void userSelectsSIDConsoleFromAgentConsole() {
        agentConsolePage.clickConsoleMenu();
        agentConsolePage.clickMenuItemSIDConsole();
        CommonUtils.SwitchWindow(agentConsolePage.getDriver(), "child");
    }
    @When("User clicks on add column under preferences and selects OP next due date")
    public void userClicksOnAddColumnUnderPreferencesAndSelectsOPNextDueDate() {
        agentConsolePage.setPreferences("Add Column:OP Next Due Date");

    }

    @Then("OP Next due date column within agent console should be displayed")
    public void opNextDueDateColumnWithinAgentConsoleShouldBeDisplayed() {

        int columnIndex= BasePage.getColumnIndexByHeaderName("OP Next Due Date");
    }


    @And("OP next due date information should be displayed")
    public void opNextDueDateInformationShouldBeDisplayed() {
        agentConsolePage.validateOpNextDueDateDetails();

    }



    @Then("OP next due date column within agent console should not be displayed")
    public void opNextDueDateColumnWithinAgentConsoleShouldNotBeDisplayed() {

    }

    @And("User shouldn't see OP next due date information")
    public void userShouldnTSeeOPNextDueDateInformation() {

    }


    @Then("User should see column OP next due date within agent console")
    public void userShouldSeeColumnOPNextDueDateWithinAgentConsole() {

        agentConsolePage.validateOpNextDueDateDetails();
    }


    @Then("User should see tickets related to assignee profile of user")
    public void userShouldSeeTicketsRelatedToAssigneeProfileOfUser() {

    }

    @And("User should see OP next due date information")
    public void userShouldSeeOPNextDueDateInformation() {

        agentConsolePage.validateOpNextDueDateDetails();
    }



    @Then("User should see OP target date in the agent console")
    public void userShouldSeeOPTargetDateInTheAgentConsole() {

    }

    @And("User should see OP target date information")
    public void userShouldSeeOPTargetDateInformation() {

    }

    @Then("User shouldn't see OP target date in the agent console")
    public void userShouldnTSeeOPTargetDateInTheAgentConsole() {

    }

    @Then("OP target date information should not visible")
    public void opTargetDateInformationShouldNotVisible() {
    }

    @When("User clicks on add column from preferences and selects OP next due date")
    public void userClicksOnAddColumnFromPreferencesAndSelectsOPNextDueDate() {
        agentConsolePage.setPreferences("Add Column:OP Next Due Date");
    }

    @And("User clicks on Remove Column under preferences and selects OP Target date")
    public void userClicksOnRemoveColumnUnderPreferencesAndSelectsOPTargetDate() {
        agentConsolePage.setPreferences("Remove Column:OP Target Date");

    }


    @When("User clicks on remove column under preferences and selects OP next due date")
    public void userClicksOnRemoveColumnUnderPreferencesAndSelectsOPNextDueDate() {
        agentConsolePage.setPreferences("Remove Column:OP Next Due Date");
    }
    @When("User clicks on All roles drop down and selects my assignee profile")
    public void userClicksOnAllRolesDropDownAndSelectsMyAssigneeProfile() throws InterruptedException {
        agentConsolePage.clickAllRolesDropDown();
        agentConsolePage.selectMyAssigneeProfile();
        wait(1000);
    }
    @Then("User clicks on My Assignee profile dropdown and selects Creator\\(user level)")
    public void userClicksOnMyAssigneeProfileDropdownAndSelectsCreatorUserLevel() throws InterruptedException {
        agentConsolePage.clickAllRolesDropDown();
        agentConsolePage.selectMyCreaterUserLevel();
        wait(1000);
    }
    @And("User clicks on All tickets dropdown and selects WO and OP")
    public void userClicksOnAllTicketsDropdownAndSelectsWOAndOP() {
        agentConsolePage.clickAllTicketsDropDown();
        agentConsolePage.selectDdValueWO_OP();
    }
    @When("User clicks on Creator\\(user level) dropdown and selects My Owner Profile")
    public void userClicksOnCreatorUserLevelDropdownAndSelectsMyOwnerProfile() throws InterruptedException {
        agentConsolePage.clickAllRolesDropDown();
        agentConsolePage.selectMyOwnerProfile();
        wait(1000);
    }

    @When("User clicks on add column under preferences and selects OP Target date")
    public void userClicksOnAddColumnUnderPreferencesAndSelectsOPTargetDate() {
        agentConsolePage.setPreferences("Add Column:OP Target Date");

    }
    @And("user logouts and closes the browser")
    public void userLogoutsAndCloseTheBrowser() throws InterruptedException {
        CommonUtils.SwitchWindow(agentConsolePage.getDriver(), "parent");
        agentConsolePage.clickNavUserMenu();
        wait(1000);
        agentConsolePage.clickMenuItemLogout();
        wait(1000);
        // basePage.tearDown();
    }

}




