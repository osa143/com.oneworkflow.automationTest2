package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;
import pageObjects.BasePage;
import pageObjects.OWF_SIDConsolePage;
import utils.CommonUtils;

import java.util.List;

public class OWF_SIDConsolePageSteps {
OWF_SIDConsolePage sidConsolePage = new OWF_SIDConsolePage();


    @Then("SID console page should be opened")
    public void sidConsolePageShouldBeOpened() {
        String SIDConsolePageTitle= sidConsolePage.getDriver().getTitle();
        System.out.println(SIDConsolePageTitle);
    }
    @When("user selects Category as Access")
    public void userSelectsCategoryAsAccess() {
        sidConsolePage.clickCategoryDropDown();
        sidConsolePage.selectDdValueAccess();;
    }
    @And("user selects Type as Radio Access Network")
    public void userSelectsTypeAsRadioAccessNetwork() {
        sidConsolePage.clickTypeDropDown();
        sidConsolePage.selectDdValueRadiAccessNetwork();
    }

    @And("user selects Item as GSMCell")
    public void userSelectsItemAsGSMCell() {
        sidConsolePage.clickItemDropDown();
        sidConsolePage.selectDdValueGsmCell();
    }

    @And("user clicks on Search")
    public void userClicksOnSearch() throws InterruptedException {
        sidConsolePage.clickSearchButton();
        sidConsolePage.wait(1000);

    }

    @Then("CI details should be displayed")
    public void ciDetailsShouldBeDisplayed() {
        int size = sidConsolePage.ciDetailsTableRows().size();
        Assert.assertNotEquals(size, 0, 0, "CI details are not displayed");
    }

    @Then("Site name should be displayed for all CI CTI search details")
    public void siteNameShouldBeDisplayedForAllCICTISearchDetails()
    {
        boolean ciDetailsActual = sidConsolePage.validateSiteNameDetails();
        Assert.assertTrue(ciDetailsActual, "Site name was not available for all CIs.");
    }

}
