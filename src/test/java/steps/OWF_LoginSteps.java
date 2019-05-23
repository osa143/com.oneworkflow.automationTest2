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

public class OWF_LoginSteps {

    OWF_LoginPage loginPage = new OWF_LoginPage();

    @Given("User is on the OneWorkflow login page")
    public void userIsOnTheOneWorkflowLoginPage() {
        String Title = loginPage.getDriver().getTitle();
        System.out.println(Title);
    }

    @When("User enters valid credentials")
    public void userEntersValidCredentials() {
        loginPage.doLogin("Change_Automation_1", "Test@1234");

    }


    @Then("OP Next due date column within agent console should be displayed")
    public void opNextDueDateColumnWithinAgentConsoleShouldBeDisplayed() {

        int columnIndex= BasePage.getColumnIndexByHeaderName("OP Next Due Date");
    }


    @And("OP next due date information should be displayed")
    public void opNextDueDateInformationShouldBeDisplayed() {
        loginPage.validateOpNextDueDateDetails();

    }



    @Then("OP next due date column within agent console should not be displayed")
    public void opNextDueDateColumnWithinAgentConsoleShouldNotBeDisplayed() {

    }

    @And("User shouldn't see OP next due date information")
    public void userShouldnTSeeOPNextDueDateInformation() {

    }


    @Then("User should see column OP next due date within agent console")
    public void userShouldSeeColumnOPNextDueDateWithinAgentConsole() {
        loginPage.validateOpNextDueDateDetails();
    }


    @Then("User should see tickets related to assignee profile of user")
    public void userShouldSeeTicketsRelatedToAssigneeProfileOfUser() {

    }

    @And("User should see OP next due date information")
    public void userShouldSeeOPNextDueDateInformation() {
        loginPage.validateOpNextDueDateDetails();
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



}
