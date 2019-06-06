package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pageObjects.OWF_SIDConsolePage;

public class OWF_SIDConsolePageSteps {
    OWF_SIDConsolePage sidConsolePage = new OWF_SIDConsolePage();


    @Then("SID console page should be opened")
    public void sidConsolePageShouldBeOpened() {
        String SIDConsolePageTitle = sidConsolePage.getDriver().getTitle();
        System.out.println(SIDConsolePageTitle);
    }

    @When("user selects Category as {string}")
    public void userSelectsCategoryAs(String category) {
        sidConsolePage.selectCategory(category);


    }

    @And("user selects Type as {string}")
    public void userSelectsTypeAs(String arg0) {
        sidConsolePage.selectType(arg0);

    }

    @And("user selects Item as {string}")
    public void userSelectsItemAs(String arg0) {
        sidConsolePage.selectsItem(arg0);
    }

    @And("user clicks on Search")
    public void userClicksOnSearch() throws InterruptedException {
        sidConsolePage.clickSearchButton();
        sidConsolePage.wait(1000);

    }

    @Then("CI details should be displayed")
    public void ciDetailsShouldBeDisplayed() {
        //Assert.assertTrue(false);
        int size = sidConsolePage.ciDetailsTableRows().size();
        Assert.assertNotEquals(size, 0, 0, "CI details are not displayed");
    }

    @Then("site name should be displayed for all CI CTI search details")
    public void siteNameShouldBeDisplayedForAllCICTISearchDetails() {
        boolean ciDetailsActual = sidConsolePage.validateSiteNameDetails();
        Assert.assertTrue(ciDetailsActual, "Site name was not available for all CIs.");
    }


}
