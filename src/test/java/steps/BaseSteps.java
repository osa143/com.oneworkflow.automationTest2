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

    @Given("the application is {string}")
    public void theApplicationIs(String app) {

       driver.get(appURL);

    }


}
