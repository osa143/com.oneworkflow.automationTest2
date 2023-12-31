package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import org.openqa.selenium.By;
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
        ciSearchPage.clickYesOnConfirmationMessage();
        //ciSearchPage.closeWarningMessage();
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

    @When("user clicks on OP link button")
    public void userClicksOnOpLinkButton() {
        ciSearchPage.clickOPLink();
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
        ciSearchPage.switchToDefault();
        ciSearchPage.wait(1000);
        ciSearchPage.selectTab("Diagnosis");
        ciSearchPage.clickRefresh_Diagnosis();
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
        //ciSearchPage.selectTab("Risk");
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
        try{
            ciSearchPage.clickSave_bulkCiLoadingWindow();
        }
      catch (Exception e){
          ciSearchPage.clickSave_bulkCiLoadingWindow();
      }
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
        ciSearchPage.verifyErrorText1(arg0);
    }

    @And("second error message should display as {string} on bulk ci window")
    public void secondErrorMessageShouldDisplayAsOnBulkCiWindow(String arg0) {
       ciSearchPage.verifyErrorText2(arg0);
        ciSearchPage.clickOk_popUp();
        userSwitchesToDefault();

    }

    @And("user validates Impact Type default value is {string}")
    public void userValidatesImpactTypeDefaultValueIs(String arg0) {
        Assert.assertEquals(ciSearchPage.getImpactType(), arg0);
    }

    @And("user validates Category default value is {string}")
    public void userValidatesCategoryDefaultValueIs(String arg0) {
        Assert.assertEquals(ciSearchPage.getImpactCategory(), arg0);
        //ciSearchPage.clickOk_popUp();
        //userSwitchesToDefault();
    }

    @And("user validates Level default value is {string}")
    public void userValidatesLevelDefaultValueIs(String arg0) {
        Assert.assertEquals(ciSearchPage.getImpactLevel(), arg0);
    }

    @Then("multiple statuses {string} should be available in Impact Type dropdown")
    public void multipleStatusesShouldBeAvailableInImpactTypeDropdown(String arg0) {
        Assert.assertTrue(ciSearchPage.verifyImpactTypeDropdownValues(arg0, ""));
    }

    @And("user validates total rows as {string}")
    public void userValidatesTotalRowsAs(String arg0) {
        Assert.assertEquals(ciSearchPage.getTotalRows(), arg0);
    }

    @And("user validates Rows OK as {string}")
    public void userValidatesRowsOKAs(String arg0) {
        Assert.assertEquals(ciSearchPage.getRowsOk(), arg0);
    }

    @Then("user validates bulk ci loading table contains columns {string}")
    public void userValidatesBulkCiLoadingTableContainsColumn(String columnValues) {

        String[] values = columnValues.split(":");
        for(int i = 0; i < values.length; i++)
        {
            Assert.assertTrue(ciSearchPage.isColumnDisplayedByDivId(values[i]));
        }
    }

    @Then("user clicks on Upload Import File")
    public void userClicksOnUploadImportFile() {
        ciSearchPage.clickUploadImportFile();
    }

    @And("user validates With Errors is visible on bulk CI loading window")
    public void userValidatesWithErrorsIsVisibleOnBulkCILoadingWindow() {
    Assert.assertTrue(ciSearchPage.verifyWithErrorsIsDisplayed());
    }

    @Then("user highlights {string} under {string}")
    public void userHighlightsUnder(String arg0, String arg1) {
        ciSearchPage.ClickBulkCiloadingTableElement(arg1, arg0);
    }

    @And("user validates attached document is visible")
    public void userValidatesTxtDocIsVisible() {
        Assert.assertTrue(ciSearchPage.verifyDocumentIsDisplayed());
    }

    @Then("user validates at least one CI has {string} under {string}")
    public void userValidatesAtLeastOneCIHasUnder(String colValue, String colName) {
       Assert.assertTrue(ciSearchPage.verifyRelatedCisTableValues(colName, colValue));
    }

    @Then("import Start Date and End date should be updated")
    public void importStartDateAndEndDateShouldBeUpdated() {
        Assert.assertNotEquals(ciSearchPage.getImportStartTime(), "");
        Assert.assertNotEquals(ciSearchPage.getImportEndTime(), "");
    }

    @And("user validates import duration txt field is updated")
    public void userValidatesImportDurationTxtFieldIsUpdated() {
        Assert.assertNotEquals(ciSearchPage.getImportDuration(), "");
    }

    @And("user validates with errors as {string}")
    public void userValidatesWithErrorsAs(String arg0) {
        Assert.assertEquals(ciSearchPage.getWithErrors(), arg0);
    }

    @Then("user highlights Completed under Status in row three")
    public void userHighlightsCompletedUnderStatusInRowThree() {
        ciSearchPage.clickRow3();
    }

    @Then("user validates impact from time is same as event start time")
    public void userValidatesImpactFromTimeIsSameAsEventStartTime() {
        Assert.assertEquals(CommonUtils.eventStartTime, ciSearchPage.getImpactFrom());
    }

    @And("user enters impact from date as current date midnight plus {int} hours on bulk CI loading window")
    public void userEntersImpactFromDateAsCurrentDateMidnightPlusHoursOnBulkCILoadingWindow(int arg0) {
        int newDelay= arg0*60;
        ciSearchPage.enterImpactFrom(CommonUtils.getDateAsTodayMidnight(newDelay));
    }


    @And("user should see error message of {string} on bulk cI window")
    public void userShouldSeeErrorMessageOfOnBulkCIWindow(String error) {
      Assert.assertTrue(ciSearchPage.verifyErrorText1(error));
    }

    @And("user should see error message of {string} on bulk cI window and clicks ok")
    public void userShouldSeeErrorMessageOfOnBulkCIWindowAndClicksOk(String error) {
        Assert.assertTrue(ciSearchPage.verifyErrorText2(error));
        ciSearchPage.clickOk_OnPop_up();

    }

    @And("user clears manual CI text field")
    public void userClearsManualCITextField() {
        ciSearchPage.clearTextManualCiSearchBox();
    }

    @Then("user validates Request ID, BIR_GUID, Submitter, Create Date, Last Modified, Modified Date, import start time, import end time, import duration fields are updated")
    public void userValidatesRequestIDBIR_GUIDSubmitterCreateDateLastModifiedModifiedDateImportStartTimeImportEndTimeImportDurationFieldsAreUpdated() {

        ciSearchPage.verifyFieldsGotUpdated();
    }

    @And("user validates with warnings as {string}")
    public void userValidatesWithWarningsAs(String arg0) {
        Assert.assertEquals(ciSearchPage.getWithWarnings(), arg0);
    }

    @Then("user validates primary ci as {string}")
    public void userValidatesPrimaryCiAs(String arg0) {
        Assert.assertEquals(ciSearchPage.getPrimaryCI(), arg0);
    }

    @And("user clicks on Ignore Duplicate CIs checkbox")
    public void userClicksOnIgnoreDuplicateCIsCheckbox() {
        ciSearchPage.clickIgnoreHandlingDuplicateCis();
    }

    @And("user validates warning message as {string} in row {int}")
    public void userValidatesWarningMessageAsInRow(String message, int rowNum) {
        Assert.assertEquals(ciSearchPage.verifyRelatedCIs("Warning/Error Messages",rowNum), message);
    }
    @Then("user validates impact from time is same as request start time")
    public void userValidatesImpactFromTimeIsSameAsRequestStartTime() {
        Assert.assertEquals(ciSearchPage.getImpactFrom(), CommonUtils.requestStart);
    }

    @Then("user validates impact to time is same as request end time")
    public void userValidatesImpactToTimeIsSameAsEventEndTime() {
        Assert.assertEquals(ciSearchPage.getImpactToPlus(), CommonUtils.requestEnd);
    }

    @Then("user selects all CI's that appear")
    public void userSelectsAllCISThatAppear() {
      ciSearchPage.clickCheckBoxHeader();
    }

    @And("user validates CI {string} is listed")
    public void userValidatesCIIsListed(String arg0) {
        ciSearchPage.selectTab("Diagnosis");
        ciSearchPage.wait(1000);
        ciSearchPage.clickRefresh_Diagnosis();
        Assert.assertEquals(ciSearchPage.getCI_Name("CI Name", 1), arg0);
    }

    @And("user validates CI {string} is listed under related ci impacts table")
    public void userValidatesRelatedCIIsListed(String arg0) {
        Assert.assertEquals(ciSearchPage.getCI_Name("CI Name", 1), arg0);
    }

    @And("user enters impacted from date as date in past")
    public void userEntersImpactedFromDateAsDateInPast() {
        ciSearchPage.enterImpactFrom(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", -10));
    }

    @And("user enters impacted to date as date in past")
    public void userEntersImpactedToDateAsDateInPast() {
        ciSearchPage.enterImpactTo(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", -5));
    }

    @And("user clicks on refresh under diagnosis")
    public void userClicksOnRefreshUnderDiagnosis() {
        ciSearchPage.clickElement(By.xpath("//*[@id='WIN_0_700009087']/div[1]/table/tbody/tr/td[2]/a[2]"));
    }

    @And("user validates CI {string} is listed in row {int}")
    public void userValidatesCIIsListedInRow(String arg0, int arg1) {
        Assert.assertEquals(ciSearchPage.getCI_Name("CI Name", arg1), arg0);
    }

    @And("user closes warning message on CI search window")
    public void userClosesWarningMessageOnCISearchWindow() {
        ciSearchPage.clickElement(By.id("ardivpcl"));
        ciSearchPage.switchToFrameByIndex(2);
    }

    @And("user adds CI {string} to the ticket")
    public void userAddsToTheTicket(String CIName) {
        ciSearchPage.addCI(CIName, "No Impact");
    }

    @When("user adds below CI's to the ticket")
    public void userAddsBelowCISToTheTicket(DataTable dataTable) {
        ciSearchPage.addCIsToTicket(dataTable, "Degradation of Service");
    }

    @And("user adds CI {string} to the ticket with impact level {string}")
    public void userAddsCIToTheTicketWithImpactLevel(String CIName, String impactLevel) {
        ciSearchPage.addCI(CIName, impactLevel);
    }

    @And("user adds CI {string} to the ticket with impact level {string} with extra delay")
    public void userAddsCIToTheTicketWithImpactLevelWithExtraDelay(String CIName, String impactLevel) {
        ciSearchPage.addCIExtraDelay(CIName, impactLevel);
    }

    @And("user adds CI {string} to change ticket with impact level {string}")
    public void userAddsCIToChangeTicketWithImpactLevel(String CiName, String impactLevel) {
        ciSearchPage.addCI_ToChangeTicket(CiName, impactLevel);
    }

    @When("user adds below CI's to the ticket with impact level {string}")
    public void userAddsBelowCISToTheTicketWithImpactLevel(DataTable dataTable, String impactLevel) {
        ciSearchPage.addCIsToTicket(dataTable, impactLevel);
    }

    @Then("user closes warning message on CI search window for change ticket")
    public void userClosesWarningMessageOnCISearchWindowForChangeTicket() {
        ciSearchPage.closeWarningMessage_changeTicket();
    }

    @And("user clicks on radio button open")
    public void userClicksOnRadioButtonOpen() {
        ciSearchPage.clickOpenRadioButton_linkedItems();
    }

    @And("user clicks on radio button closed")
    public void userClicksOnRadioButtonClosed() {
        ciSearchPage.clickClosedRadioButton_linkedItems();
    }

    @And("user validates radio button open is selected")
    public void userValidatesRadioButtonOpenIsSelected() {
        Assert.assertTrue(ciSearchPage.isOpenRadioButtonSelected());
    }

    @And("user validates radio button cleared is selected")
    public void userValidatesRadioButtonClearedIsSelected() {
        Assert.assertTrue(ciSearchPage.isClearedRadioButtonSelected());
    }

    @And("user validates radio button closed is selected")
    public void userValidatesRadioButtonClosedIsSelected() {
        Assert.assertTrue(ciSearchPage.isClosedRadioButtonSelected());
    }

    @And("user closes warning message on change add CI")
    public void userClosesWarningMessageOnChangeAddCI() {
        ciSearchPage.closeWarningMessage_changeTicket();
        ciSearchPage.wait(2000);
        ciSearchPage.clickCloseButton();
//        ciSearchPage.switchToFrameByIndex(3);
//        ciSearchPage.clickElementByContainsTextAndTagName("a", "Yes");

    }

    @When("user clicks manage my template cog button")
    public void userClicksManageMyTemplateCogButton() {
        ciSearchPage.clickManageTemplateCog();
    }

    @When("user clicks create my template button")
    public void userClicksCreateMyTemplateButton() {
        ciSearchPage.clickCreateMyTemplate();
    }

    @When("user clicks create new section button")
    public void userClicksCreateNewSectionButton() {
        ciSearchPage.clickCreateNewSection();
    }


    @And("user enters section label as {string}")
    public void userEntersSectionLabelAs(String arg0) {
        ciSearchPage.enterSectionLabelName(arg0);
    }

    @And("user clicks create section save button")
    public void userClicksCreateSectionSaveButton() {
        ciSearchPage.clickCreateSectionSaveButton();
    }

    @And("user clicks edit section button")
    public void userClicksEditSectionButton() {
        ciSearchPage.clickEditSection();
    }

    @And("user clicks edit section save button")
    public void userClicksEditSectionSaveButton() {
        ciSearchPage.clickCreateSectionSaveButton();
    }

    @And("user clicks delete selected section button")
    public void userClicksDeleteSelectedSectionButton() {
        ciSearchPage.clickDeleteSection();
    }

    @And("user clicks delete section")
    public void userClicksDeleteSection() {
        ciSearchPage.clickSecondDeleteSectionButton();
    }

    @When("user clicks section arrow down button")
    public void userClicksSectionArrowDownButton() {
        ciSearchPage.clickArrowDownSectionButton();
    }

    @When("user clicks add attribute button")
    public void userClicksAddAttributeButton() {
        ciSearchPage.clickAddAttributeButton();
    }

    @And("user selects class as {string}")
    public void userSelectsClassAs(String arg0) {
        ciSearchPage.selectClass(arg0);
    }

    @And("user clicks apply filter button")
    public void userClicksApplyFilterButton() {
        ciSearchPage.clickApplyFilterButton();
    }

    @And("user enters attribute+ as {string}")
    public void userEntersAttributeAs(String arg0) {
        ciSearchPage.enterAttributePlus(arg0);
    }

    @When("user clicks clear attribute search button")
    public void userClicksClearAttributeSearchButton() {
        ciSearchPage.clickClearFilterButton();
    }

    @And("user clicks save field to section button")
    public void userClicksSaveFieldToSectionButton() {
        ciSearchPage.clickSaveFieldToSectionButton();
    }

    @And("user clicks edit attribute button")
    public void userClicksEditAttributeButton() {
        ciSearchPage.clickEditAttribute();
    }

    @And("user clicks edit attribute save button")
    public void userClicksEditAttributeSaveButton() {
        ciSearchPage.clickEditAttributeSaveButton();
    }

    @And("user clicks show label checkbox")
    public void userClicksShowLabelCheckbox() {
        ciSearchPage.clickShowLabelCheckbox();
    }

    @And("user clicks delete attribute button")
    public void userClicksDeleteAttributeButton() {
        ciSearchPage.clickDeleteAttributeButton();
    }

    @And("user clicks delete attribute second button")
    public void userClicksDeleteAttributeSecondButton() {
        ciSearchPage.clickDeleteAttributeSecondButton();
    }

    @And("user clicks attribute arrow up button")
    public void userClicksAttributeArrowUpButton() {
        ciSearchPage.clickArrowUpAttribute();
    }

    @When("user clicks attribute arrow down button")
    public void userClicksAttributeArrowDownButton() {
        ciSearchPage.clickArrowDownAttribute();
    }

    @Then("user validates CI details template window is opened")
    public void userValidatesCIDetailsTemplateWindowIsOpened() {
        Assert.assertTrue(ciSearchPage.isCIDetailsTemplateWindowDisplayed());
    }

    @Then("user validates {string} section is displayed")
    public void userValidatesSectionIsDisplayed(String expectedSectionLabel) {
        Assert.assertEquals(ciSearchPage.getSectionLabel(), expectedSectionLabel);
    }

    @When("user clicks on close CI details template window and CI details window")
    public void userClicksOnCloseCIDetailsTemplateWindowAndCIDetailsWindow() {
        ciSearchPage.clickCloseCIDetailsTemplate();
    }

    @When("user selects search for as {string} on CI search window")
    public void userSelectsSearchForAsOnCISearchWindow(String value) {
        ciSearchPage.clickSearchForDropdown();
        ciSearchPage.selectSearchForValue(value);
    }

    @Then("user should see use my template button is read only")
    public void userShouldSeeUseMyTemplateButtonIsReadOnly() {
     Assert.assertTrue(ciSearchPage.verifyUseMyButtonTemplateIsReadOnly());
    }

    @When("user clicks on test section")
    public void userClicksOnTestSection() {

    }

    @And("user enters bulk ci impact from date as {int} hours in {string} format")
    public void userEntersBulkCiImpactFromDateAsHoursInFormat(int delay, String pattern) {
        int newDelay= delay*60;
        ciSearchPage.enterImpactFrom(CommonUtils.getDateTime(pattern, "Europe/Stockholm", newDelay));

    }

    @And("user enters bulk ci impact to date as {int} hours in {string} format")
    public void userEntersBulkCiImpactToDateAsHoursInFormat(int delay, String pattern) {
        int newDelay= delay*60;
        ciSearchPage.enterImpactToPlus(CommonUtils.getDateTime(pattern, "Europe/Stockholm", newDelay));
    }

    @And("user validates Change impact from time is same as request start time")
    public void userValidatesChangeImpactFromTimeIsSameAsRequestStartTime() {
        Assert.assertEquals(CommonUtils.eventStartTime, ciSearchPage.getImpactFrom_DiagnosisTab());

    }

    @And("user validates Change impact to time is same as request end time")
    public void userValidatesChangeImpactToTimeIsSameAsRequestEndTime() {
        Assert.assertEquals(CommonUtils.requestEnd, ciSearchPage.getImpactTo_DiagnosisTab());
    }

    @And("user validates no CI's are on the ticket")
    public void userValidatesNoCISAreOnTheTicket() {
        Assert.assertTrue(ciSearchPage.validateNoCIsArePresent());
    }

}
