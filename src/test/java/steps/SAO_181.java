package steps;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import pageObjects.BasePage;
import pageObjects.OWF_AgentConsolePage;
import pageObjects.OWF_LoginPage;
import utils.DriverSetUp;

import java.util.List;

public class SAO_181 extends DriverSetUp {

    public SAO_181() {
        super();
    }
    @Before
    public void setUp() {
        initialization();
    }

    OWF_LoginPage loginPage = new OWF_LoginPage(driver);
    BasePage basePage = new BasePage();
    OWF_AgentConsolePage agentConsolePage= new OWF_AgentConsolePage(driver);

    @Given("User is on the OneWorkflow login page")
    public void userIsOnTheOneWorkflowLoginPage() {
        String Title=driver.getTitle();
        System.out.println(Title);
    }

    @When("User enters valid credentials")
    public void userEntersValidCredentials() {
        loginPage.doLogin("Change_Automation_1", "Test@1234");

    }

    @Then("User should be logged in and the Agent console should be displayed")
    public void userShouldBeLoggedInAndTheAgentConsoleShouldBeDisplayed() {
        String AgentConsolePageTitle= driver.getTitle();
        System.out.println(AgentConsolePageTitle);

    }
    @When("User clicks on add column under preferences and selects OP next due date")
    public void userClicksOnAddColumnUnderPreferencesAndSelectsOPNextDueDate() {
        basePage.setPreferences("Add Column:OP Next Due Date");

    }
    @Then("OP Next due date column within agent console should be displayed")
    public void opNextDueDateColumnWithinAgentConsoleShouldBeDisplayed() {

        int columnIndex= BasePage.getColumnIndexByHeaderName("OP Next Due Date");
    }


    @And("OP next due date information should be displayed")
    public void opNextDueDateInformationShouldBeDisplayed() {
        validateOpNextDueDateDetails();

    }

    @When("User clicks on remove column under preferences and selects OP next due date")
    public void userClicksOnRemoveColumnUnderPreferencesAndSelectsOPNextDueDate() {
        basePage.setPreferences("Remove Column:OP Next Due Date");
    }

    @Then("OP next due date column within agent console should not be displayed")
    public void opNextDueDateColumnWithinAgentConsoleShouldNotBeDisplayed() {

    }

    @And("User shouldn't see OP next due date information")
    public void userShouldnTSeeOPNextDueDateInformation() {

    }

    @When("User clicks on add column from preferences and selects OP next due date")
    public void userClicksOnAddColumnFromPreferencesAndSelectsOPNextDueDate() {
        basePage.setPreferences("Add Column:OP Next Due Date");
    }

    @Then("User should see column OP next due date within agent console")
    public void userShouldSeeColumnOPNextDueDateWithinAgentConsole() {
        validateOpNextDueDateDetails();
    }

    @When("User clicks on All roles drop down and selects my assignee profile")
    public void userClicksOnAllRolesDropDownAndSelectsMyAssigneeProfile() throws InterruptedException {
        agentConsolePage.clickAllRolesDropDown();
        agentConsolePage.selectMyAssigneeProfile();
        wait(1000);
    }
    @Then("User should see tickets related to assignee profile of user")
    public void userShouldSeeTicketsRelatedToAssigneeProfileOfUser() {

    }

    @And("User should see OP next due date information")
    public void userShouldSeeOPNextDueDateInformation() {
        validateOpNextDueDateDetails();
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
        basePage.setPreferences("Add Column:OP Target Date");

    }

    @Then("User should see OP target date in the agent console")
    public void userShouldSeeOPTargetDateInTheAgentConsole() {

    }

    @And("User should see OP target date information")
    public void userShouldSeeOPTargetDateInformation() {

    }

    @And("User clicks on Remove Column under preferences and selects OP Target date")
    public void userClicksOnRemoveColumnUnderPreferencesAndSelectsOPTargetDate() {
        basePage.setPreferences("Remove Column:OP Target Date");

    }

    @Then("User shouldn't see OP target date in the agent console")
    public void userShouldnTSeeOPTargetDateInTheAgentConsole() {

    }

    @Then("OP target date information should not visible")
    public void opTargetDateInformationShouldNotVisible() {
    }

    private void validateOpNextDueDateDetails() {
        int columnIndex = BasePage.getColumnIndexByHeaderName("Site Name");

        //Get all the table rows by Id
        List<WebElement> tableRows = driver.findElement(By.id("T700009024")).findElements(By.tagName("tr"));
        String cellValue = null;
        int rowsCount = 0;
        if (columnIndex >= 0) {
            for (int i = 1; i < tableRows.size(); i++) {
                //Get all the cell values for Site Name column
                cellValue = tableRows.get(i).findElements(By.tagName("td")).get(columnIndex - 1).getText();
                if (cellValue != null)
                    rowsCount++;
            }
        }
        if (rowsCount > 0)
        {
            Assert.assertTrue(true);
        }
        else {
            //If we don't find the Site Name column, test should fail
            Assert.assertTrue(false);
        }

    }



}
