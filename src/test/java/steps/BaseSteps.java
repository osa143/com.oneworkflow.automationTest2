package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import driver.factory.DriverFactory;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import pageObjects.BasePage;
import pageObjects.OWF_LoginPage;
import utils.DriverSetUp;

public class BaseSteps extends BasePage{

    //WebDriver driver = DriverFactory.getInstance().getDriver();
    String appURL = null;

    @When("User clicks on add column from preferences and selects OP next due date")
    public void userClicksOnAddColumnFromPreferencesAndSelectsOPNextDueDate() {
        setPreferences("Add Column:OP Next Due Date");
    }

    @And("User clicks on Remove Column under preferences and selects OP Target date")
    public void userClicksOnRemoveColumnUnderPreferencesAndSelectsOPTargetDate() {
        setPreferences("Remove Column:OP Target Date");

    }

    @Given("the application is {string}")
    public void theApplicationIs(String app) {

       driver.get(appURL);

    }


}
