package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import pageObjects.OWF_LoginPage;

public class OWF_LoginPageSteps extends BaseSteps {

    OWF_LoginPage loginPage = new OWF_LoginPage();

    @Given("User is on the OneWorkflow login page")
    public void userIsOnTheOneWorkflowLoginPage() {
        loginPage.getURL(getProperties().getProperty("appURL"));
        String LoginPageTitle = loginPage.getPageTitle();
        System.out.println(LoginPageTitle);
        // Assert.assertEquals(LoginPageTitle, "BMC Remedy Mid Tier 9.1 - Login");
    }

    @When("user logs in with valid username {string} and password as {string}")
    public void userLogsInWithValidUsernameAndPasswordAs(String username, String password) {
        loginPage.doLogin(username, password);
        loginPage.wait(5000);

    }
}
