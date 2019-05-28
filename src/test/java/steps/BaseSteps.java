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
import utils.TestContext;

import java.io.FileInputStream;
import java.util.Properties;

public class BaseSteps {

    protected Properties envProperties;

    public Properties getProperties(){
        return TestContext.getInstance().getEnvironmentProperties();
    }





}
