package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import org.testng.Assert;
import pageObjects.OWF_SIDConsolePage;
import utils.CommonUtils;

import java.util.List;

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

    @And("user clicks on search")
    public void userClicksOnSearch() throws InterruptedException {
        sidConsolePage.clickSearchButton();
        sidConsolePage.wait(1000);

    }

    @Then("CI details should be displayed")
    public void ciDetailsShouldBeDisplayed() {
        int size = sidConsolePage.TableRows().size();
        Assert.assertNotEquals(size, 0, 0, "CI details are not displayed");
    }

    @Then("site name should be displayed for all CI CTI search details")
    public void siteNameShouldBeDisplayedForAllCICTISearchDetails() {
        boolean ciDetailsActual = sidConsolePage.validateSiteNameDetails();
        Assert.assertTrue(ciDetailsActual, "Site name was not available for all CIs.");
    }


    @When("user enters following locations in the location+ field, user clicks search and verifies CI information and clicks on clear button")
    public void userVerifiesCiInformationForMultipleLocations(DataTable locations) {
        sidConsolePage.validateCiDetailsForMultipleLocations(locations);
    }

    @When("user enters {string} in the name+ field")
    public void userEntersInTheNameField(String arg0) {
        sidConsolePage.enterNamePlus(arg0);
    }

    @Then("user should see related country CI information")
    public void userShouldSeeRelatedCountryCIInformation() {
        int size = sidConsolePage.TableRows().size();
        Assert.assertNotEquals(size, 0, 0, "CI details are not displayed");
    }

    @Then("user validates only {string} CI's appear")
    public void userValidatesOnlySwedishCISAppear(String colValue) {
        Assert.assertTrue(sidConsolePage.verifyCIS("Name", colValue, true));
    }

    @Then("user validates CI's for all countries {string}")
    public void userValidatesCISForAllCountries(String colValues) {
        Assert.assertTrue(sidConsolePage.verifyCISForAllCountries("Name", colValues));
    }

    @Then("user gets token ID for the CI")
    public void userGetsTokenIDForTheCI() {
        CommonUtils.TokeID = sidConsolePage.getSID_Console_TableData("TokenId", 1);
    }

    @And("user enters saved token ID and searches")
    public void userEntersSavedTokenIDAndSearches() {
        sidConsolePage.enterNamePlus(CommonUtils.TokeID);
        sidConsolePage.clickSearchButton();

    }

    @Then("user validates CI {string} and token ID is present for the CI")
    public void userValidatesCIAndTokenIDIsPresentForTheCI(String expected_CI_Name) {
        Assert.assertEquals(sidConsolePage.getSID_Console_TableData("Name", 1), expected_CI_Name);
        Assert.assertEquals(sidConsolePage.getSID_Console_TableData("TokenId", 1), CommonUtils.TokeID);
    }

    @And("dropdown values {string} should be available in search for dropdown")
    public void dropdownValuesShouldBeAvailableInSearchForDropdown(String expectedValues) {
     Assert.assertTrue(sidConsolePage.verifySearchForDropdownValues(expectedValues, ""));
    }

    @Then("user should see location plus as read only")
    public void userShouldSeeLocationPlusAsReadOnly() {
     Assert.assertTrue(sidConsolePage.verifyLocationIsReadOnly());
    }

    @And("user clicks on show history")
    public void userClicksOnShowHistory() {
        sidConsolePage.clickShowHistory();
    }

    @Then("user validates ticket previously created is present")
    public void userValidatesTicketPreviouslyCreatedIsPresent() {
    Assert.assertEquals(sidConsolePage.getSIDConsole_RelatedMatches_TableData("Ticket ID", 1), CommonUtils.opTicket);
    }


    @And("user double clicks on ticket under SID console matching ticket to open")
    public void userDoubleClicksOnTicketUnderSIDConsoleMatchingTicketToOpen() {
     sidConsolePage.doubleClickOnTicket_SIDConsole_RelatedMatches();
    }
}

