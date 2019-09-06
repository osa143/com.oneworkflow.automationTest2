package steps.plaza_steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.testng.Assert;
import pageObjects.BasePage;
import pageObjects.plaza.Plaza_HomePage;
import utils.CommonUtils;

public class Plaza_HomePageSteps extends BasePage {
    Plaza_HomePage homePage= new Plaza_HomePage();
    @Then("user should see the plaza home page")
    public void userShouldSeeThePlazaHomePage() {
        Assert.assertEquals(homePage.getTitle_plazaHomePage(), "Home - Plaza");
    }

    @When("user clicks on {string}")
    public void userClicksOnButton(String text) {
        homePage.clickElementByContainsTextAndTagName("*", text);
    }

    @And("user clicks on IT Infrastructure dropdown")
    public void userClicksOnITInfrastructureDropdown() {
        clickElement(By.className("pull-right glyphicon ng-scope glyphicon-chevron-down"));
    }

    @Then("user should see Finance & Assurance form")
    public void userShouldSeeFinanceAssuranceForm() {

    }

    @When("user selects role dropdown as {string}")
    public void userSelectsRoleDropdownAs(String arg0) {
      homePage.selectRoleDropdown(arg0);
    }

    @And("user enters {string} in the request field")
    public void userEntersInTheRequestField(String arg0) {
        homePage.enterRequest(arg0);
    }

    @And("user selects system dropdown as {string}")
    public void userSelectsSystemDropdownAs(String arg0) {
        homePage.selectSystemDropdown(arg0);
    }

    @And("user enters planned start time as current time")
    public void userEntersPlannedStartTimeAsCurrentTime() {
        homePage.enterPlannedStart(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @And("user enters planned end time as current time")
    public void userEntersPlannedEndTimeAsCurrentTime() {
        homePage.enterPlannedEnd(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @And("user enters plaza description as {string}")
    public void userEntersPlazaDescriptionAs(String arg0) {
        homePage.enterDescription(arg0);
    }

    @And("user enters additional comments as {string}")
    public void userEntersAdditionalCommentsAs(String arg0) {
        homePage.enterAdditionalComments(arg0);
    }

    @And("user clicks on order")
    public void userClicksOnOrder() {
        homePage.clickOrder();
    }
}
