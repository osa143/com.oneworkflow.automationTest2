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

public class OWF_LoginPageSteps {

    OWF_LoginPage loginPage = new OWF_LoginPage();

    @Given("User is on the OneWorkflow login page")
    public void userIsOnTheOneWorkflowLoginPage() {
        loginPage.getDriver();
        loginPage.getURL("https://td220lbf-mtint.ddc.teliasonera.net/arsys/shared/login.jsp?/arsys/home");
        System.out.println(loginPage.getTitle());
    }

    @When("user logins with valid user credentials")
    public void userLoginsWithValidUserCredentials() throws InterruptedException {
        loginPage.doLogin("Tohall_copy", "Test@1234" );
        loginPage.wait(5000);
    }

}
