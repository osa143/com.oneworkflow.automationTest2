package steps.BMC_Helix_Steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pageObjects.BMC_Helix.BMC_Helix_LoginPage;
import pageObjects.BasePage;
import steps.BaseSteps;

public class BMC_HelixLoginSteps extends BaseSteps {

    BMC_Helix_LoginPage bmc_helix_loginPage = new BMC_Helix_LoginPage();

    @Given("I navigate to login page")
    public void iNavigateToLoginPage() {
         bmc_helix_loginPage.getBMC_URL((getProperties().getProperty("BMC_HelixURL")));

    }

    @When("I enter username and password")
    public void iEnterUsernameAndPassword() {
        bmc_helix_loginPage.enterUserName("Allen");
        bmc_helix_loginPage.enterPassword("@A9P-WwA7_DDMTJ_");
    }

    @And("I click on login button")
    public void iClickOnLoginButton() {
        bmc_helix_loginPage.clickLoginButton();
    }

    @Then("I should see BMC helix homepage")
    public void iShouldSeeBMCHelixHomepage() {
        String actualTitle = bmc_helix_loginPage.getHomePageTitle();
        Assert.assertEquals(actualTitle, "BMC Remedy (Search)");

    }

    @When("I click on logout")
    public void iClickOnLogout() {
        bmc_helix_loginPage.clickLogoutButton();
    }

    @Then("I should be logged out successfully")
    public void iShouldBeLoggedOutSuccessfully() {
        Assert.assertEquals(bmc_helix_loginPage.confirmLogOut(), "You have successfully logged out");
    }

    @Given("I navigate to BMC Helix login page {string}")
    public void iNavigateToBMCHelixLoginPage(String url) {
        bmc_helix_loginPage.getBMC_URL(url);
    }

    @When("I enter username as {string} and password as {string}")
    public void iEnterUsernameAsAndPasswordAs(String username, String password) {
        bmc_helix_loginPage.enterUserName(username);
        bmc_helix_loginPage.enterPassword(password);
    }

    @Then("I should see error message")
    public void iShouldSeeErrorMessage() {
        Assert.assertEquals(bmc_helix_loginPage.getErrorMessage(), "ARERR [9388] The login credentials are invalid. Please contact the system administrator and ensure that your account is not locked.");

    }


}
