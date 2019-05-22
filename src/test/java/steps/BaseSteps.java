package steps;

import cucumber.api.java.en.Given;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import pageObjects.BasePage;
import pageObjects.OWF_LoginPage;
import utils.DriverSetUp;

public class BaseSteps extends DriverSetUp {

    WebDriver driver;
    String appURL = null;



    @Given("the application is {string}")
    public void theApplicationIs(String app) {

        if(app.equals("google")){
            appURL = "https://www.google.co.in";
        }

       // OWF_LoginPage loginPage = new OWF_LoginPage();
       // loginPage.getURL(appURL);

        Assert.assertTrue(false);

    }


}
