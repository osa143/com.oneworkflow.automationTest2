package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pageObjects.OWF_CiSearchPage;
import utils.CommonUtils;

public class OWF_CiSearchPageSteps {

    OWF_CiSearchPage ciSearchPage = new OWF_CiSearchPage();


    @And("user selects search for as {string}")
    public void userSelectsSearchForAs(String arg0) {
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

    @And("user selects impact level as {string}")
    public void userSelectsImpactLevelAs(String level) {
        ciSearchPage.selectLevel(level);
    }

    @And("user clicks on relate CI")
    public void userClicksOnRelateCI() {
        ciSearchPage.clickRelateCiButton();
    }
    @Then("CI search tab should be opened")
    public void ciSearchTabShouldBeOpened() {
        //dummy step
    }

    @And("user closes warning message")
    public void userClosesWarningMessageAndClicksOnCloseButton() {
        ciSearchPage.closeWarningMessage();
    }
    @When("user clicks on clear button")
    public void userClicksOnClearButton() {
        ciSearchPage.clickClearButton();
    }


    @When("user clicks on linked items tab")
    public void userClicksOnLinkedItemsTab() {
        try{
            ciSearchPage.clickLinkedItems();
        }
        catch(Exception e){
            ciSearchPage.wait(1000);
            ciSearchPage.clickLinkedItems();
        }

    }

    @And("user selects target application first dropdown as {string}")
    public void userSelectsTargetApplicationFirstDropdownAs(String arg0) {
     ciSearchPage.selectTargetApplicationFirst(arg0);
    }

    @And("user selects target application second dropdown as {string}")
    public void userSelectsTargetApplicationSecondDropdownAs(String arg0) {
        ciSearchPage.selectTargetApplicationSecond(arg0);
    }

    @When("user clicks on link button")
    public void userClicksOnLinkButton() {
        ciSearchPage.clickLink();
        ciSearchPage.wait(1000);
    }


    @And("user clicks ticket checkbox")
    public void userClicksTicketCheckbox() {
        ciSearchPage.clickToSelectCi();
    }

    @And("user clicks accept button")
    public void userClicksAcceptButton() {
        ciSearchPage.clickAcceptButton();
    }



    @And("user enters {string} in location field")
    public void userEntersInLocationField(String arg0) {
        ciSearchPage.enterLocation(arg0);
    }


    @Then("user validates CI availability")
    public void userValidatesCIAvailability() {
        int size = ciSearchPage.tableRows().size();
        Assert.assertNotEquals(size, 0, 0, "CI details are not displayed");

    }

    @Then("CI should be listed and displayed under the Diagnosis tab")
    public void ciShouldBeListedAndDisplayedUnderTheDiagnosisTab() {
        int size = ciSearchPage.ciDiagnosisTableRows().size();
        Assert.assertNotEquals(size, 1, "CI details are not displayed");
    }

    @When("user clicks on create button under linked items")
    public void userClicksOnCreateButtonUnderLinkedItems() {
     ciSearchPage.clickCreate_linkedItems();
     ciSearchPage.wait(3000);
    }
    @And("user clicks on create button")
    public void userClicksOnCreateButton() {
        ciSearchPage.clickCreate();
        ciSearchPage.wait(3000);
    }

    @And("user clicks on radio button cleared")
    public void userClicksOnRadioButtonCleared() {
        ciSearchPage.clickClearedRadioButton_linkedItems();
    }

    @And("problem ticket should be listed")
    public void problemTicketShouldBeListed() {
        Assert.assertTrue(ciSearchPage.verifyIsProblemTicketListed());
    }

    @Then("CI search panel should open")
    public void ciSearchPanelShouldOpen() {
        //dummy step
    }

    @Then("user clicks ok on CI window pop up")
    public void userClicksOkOnCIWindowPopUp() {
        ciSearchPage.switchToFrameById("1562925224075P");
      ciSearchPage.clickOk_OnPop_up();
    }

    @And("user clicks on close button on CI search window")
    public void userClicksOnCloseButtonOnCISearchWindow() {
        ciSearchPage.clickCloseButton();
    }

    @Then("user clicks ok on warning CI search window")
    public void userClicksOkOnWarningCISearchWindow() {
        ciSearchPage.switchToFrameByIndex(3);
        ciSearchPage.clickOk_OnPop_up();
    }

    @And("user switches to default")
    public void userSwitchesToDefault() {
        ciSearchPage.switchToDefault();

    }

    @And("user selects impact category as {string}")
    public void userSelectsImpactCategoryAs(String arg0) {
        ciSearchPage.selectCategory_CiSearchPage(arg0);
    }

    @When("user selects CI {string}")
    public void userSelectsCI(String arg0) {
      ciSearchPage.selectCi(arg0);
    }

    @Then("user clicks on Risk tab")
    public void userClicksOnRiskTab() {
        ciSearchPage.clickRiskTab();
    }

    @And("user enters impact from date as current date")
    public void userEntersImpactFromDateAsCurrentDate() {
       ciSearchPage.enterImpactFrom();
    }

    @And("user clicks on Add Bulk Import button")
    public void userClicksOnAddBulkImportButton() {
        ciSearchPage.clickBulkImport();
    }

    @Then("user should see bulk ci loading window")
    public void userShouldSeeBulkCiLoadingWindow() {
        Assert.assertTrue(ciSearchPage.verifyBulkCiLoadingIsDisplayed());
    }

    @When("user clicks on Manual Input radio button")
    public void userClicksOnManualInputRadioButton() {
        ciSearchPage.clickManualInput();
    }

    @And("user enters impact from date as current date midnight on bulk CI loading window")
    public void userEntersImpactFromDateAsCurrentDateMidnightOnBulkCILoadingWindow() {
        ciSearchPage.enterImpactFrom(CommonUtils.getDateAsTodayMidnight(0));

    }

    @And("user enters impact to date as current date midnight plus {int} hours on bulk CI loading window")
    public void userEntersImpactToDateAsCurrentDateMidnightHoursOnBulkCILoadingWindow(int arg0) {
        int newDelay= arg0*60;
        ciSearchPage.enterImpactToPlus(CommonUtils.getDateAsTodayMidnight(newDelay));

    }

    @And("user enters {string} in manual CI search box")
    public void userEntersInManualCISearchBox(String arg0) {
        ciSearchPage.enterManualCiSearch(arg0);
    }

    @Then("user clicks on save button under bulk import")
    public void userClicksOnSaveButtonUnderBulkImport() {
        ciSearchPage.clickSave_bulkCiLoadingWindow();
    }

    @When("user clicks on Show Bulk Import button")
    public void userClicksOnShowBulkImportButton() {
        ciSearchPage.clickShowBulkImport();
    }

    @Then("user clicks on bulk loading close button")
    public void userClicksOnBulkLoadingCloseButton() {
        ciSearchPage.clickClose_bulkCILoading();
    }

    @And("user validates related jobs has {int} entry")
    public void userValidatesRelatedJobsHasEntry(int arg0) {
     Assert.assertTrue(ciSearchPage.validateRelatedJobsAvailability(arg0));
    }

    @And("user validates {string} as {string} in row {int}")
    public void userValidatesAsInRow(String columnName, String message, int rowNum) {
        Assert.assertEquals(ciSearchPage.verifyRelatedCIs(columnName,rowNum), message);
    }

    @And("user validates Save is visible on bulk CI loading window")
    public void userValidatesSaveIsVisibleOnBulkCILoadingWindow() {
     Assert.assertTrue(ciSearchPage.verifySaveButtonIsDisplayed());
    }

    @And("user validates Close is visible on bulk CI loading window")
    public void userValidatesCloseIsVisibleOnBulkCILoadingWindow() {
        Assert.assertTrue(ciSearchPage.verifyCloseButtonIsDisplayed());
    }

    @And("first error message should display as {string} on bulk ci window")
    public void firstErrorMessageShouldDisplayAsOnBulkCiWindow(String arg0) {
        Assert.assertTrue(ciSearchPage.verifyErrorText1(arg0));
    }

    @And("second error message should display as {string} on bulk ci window")
    public void secondErrorMessageShouldDisplayAsOnBulkCiWindow(String arg0) {
        Assert.assertTrue(ciSearchPage.verifyErrorText2(arg0));
        ciSearchPage.clickOk_popUp();
        userSwitchesToDefault();

    }

}
