package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.OWF_CiSearchPage;

public class OWF_CiSearchPageSteps {

    OWF_CiSearchPage ciSearchPage = new OWF_CiSearchPage();

    @Then("CI search tab should be opened")
    public void ciSearchTabShouldBeOpened() {

    }

    @When("user clicks on clear button and selects search for all cis")
    public void userClicksOnClearButtonAndSelectsSearchForAllCis() {
        ciSearchPage.clickClearButton();
        ciSearchPage.clickSearchForDropdown();
        ciSearchPage.selectAllCiDdValue();

    }

    @And("user enters {string} in name field")
    public void userEntersInNameField(String arg0) {
        ciSearchPage.enterNamePlus(arg0);
    }

    @And("user clicks on search button on CI search window")
    public void userClicksOnSearchButtonOnCiSearchWindow() {
        ciSearchPage.clickCiSearchButton();

    }

    @And("user selects a CI from list")
    public void userSelectsACIFromList() {
        ciSearchPage.clickToSelectCi();
    }

    @And("user Choose impact level as degradation of service")
    public void userChooseImpactLevelAsDegradationOfService() {
        ciSearchPage.clickLevelDropdown();
        ciSearchPage.selectDegradationOfServiceDropdownValue();
    }

    @And("user clicks on relate CI")
    public void userClicksOnRelateCI() {
        ciSearchPage.clickRelateCiButton();
    }

    @And("user closes warning message and clicks on close button")
    public void userClosesWarningMessageAndClicksOnCloseButton() {
        ciSearchPage.acceptAlert();
        ciSearchPage.clickCloseButton();

    }
}
