package steps.plaza_steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import pageObjects.plaza.Plaza_LoginPage;
import steps.BaseSteps;

public class Plaza_LoginPageSteps  extends BaseSteps {
    Plaza_LoginPage loginPage= new Plaza_LoginPage();
    @Given("user is on the Plaza login page")
    public void userIsOnThePlazaLoginPage() {
        loginPage.openURL();
    }

    @When("user enters username {string} and password as {string} and clicks on login")
    public void userEntersUsernameAndPasswordAsAndClicksOnLogin(String arg0, String arg1) {
        loginPage.doLogin(arg0, arg1);
    }

}
