package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pageObjects.OWF_TroubleEventPage;
import utils.Ticket;

public class OWF_TroubleEventPageSteps {
    OWF_TroubleEventPage troubleEventPage = new OWF_TroubleEventPage();
    Ticket parentTicket;
    @Then("trouble record form should appear in new tab")
    public void troubleRecordFormShouldAppearInNewTab() {
        troubleEventPage.getPageTitle();
    }

    @Then("trouble ticket should be created and status should be assigned")
    public void troubleTicketShouldBeCreatedAndStatusShouldBeAssigned() {
        System.out.println(troubleEventPage.getStatusText());
     Assert.assertEquals(troubleEventPage.getStatusText(), "Assigned", "status is not assigned");
    }

    @Then("user enters {string} in Title field in Trouble event")
    public void userEntersInTitleFieldInTroubleEvent(String level) {
        troubleEventPage.enterLevel(level);
    }

    @And("user selects request type as {string} on trouble event page")
    public void userSelectsRequestTypeAsStringOnTroubleEventPage(String requestType) {
        troubleEventPage.selectRequestType(requestType);
    }


    @And("user enters ticket id as {string}")
    public void userEntersTicketIdAs(String ticketID) {
        troubleEventPage.enterTroubleTicket(ticketID);
        troubleEventPage.wait(3000);
    }

    @Then("trouble ticket should appear related to TeMIP")
    public void troubleTicketShouldAppearRelatedToTeMIP() {
        troubleEventPage.wait(2000);
        //parentTicket = troubleEventPage.getTicket();
        Assert.assertEquals(troubleEventPage.getSourceText(), "HPE Common Temip", "Ticket is not related to TeMIP");


    }

    @When("user clicks on work order tab")
    public void userClicksOnWorkOrderTab() {
     troubleEventPage.clickWorkOrder();
        troubleEventPage.wait(2000);
    }

    @And("user clicks on create from ticket")
    public void userClicksOnCreateFromTicket() {
        troubleEventPage.clickCreateFromTicket();

    }

    @And("clicks on ticket refresh button")
    public void clicksOnTicketRefreshButton() {
        troubleEventPage.clickRefreshButtonImage();
    }

    @Then("user clicks on alarms tab")
    public void userClicksOnAlarmsTab() {
        troubleEventPage.clickAlarmTab();
    }

    @And("user highlights all shown alarms")
    public void userHighlightsAllShownAlarms() {
        troubleEventPage.clickAllAlarmBox();
    }

    @And("user clicks on terminate")
    public void userClicksOnTerminate() {
        troubleEventPage.clickTerminateAlarm();
    }

    @And("user validates child ticket details are same as parent ticket")
    public void userValidatesChildAffectedBUIsSameAsParentTicket() {
        troubleEventPage.wait(3000);
        Ticket childTicket = troubleEventPage.getTicket();
        if (childTicket.isEqual(parentTicket))
            System.out.println("ticket details match");
    }

    @And("User waits for alarms to be cleared")
    public void userWaitsForAlarmsToBeCleared() {
        troubleEventPage.wait(30000);
    }

    @And("user clicks refresh button on alarm tab")
    public void userClicksRefreshButtonOnAlarmTab() {
        troubleEventPage.clickRefreshButton_AlarmTab();
    }

    @And("user clicks on finland checkbox under affected BU's")
    public void userClicksOnFinlandCheckboxUnderAffectedBUS() {
        troubleEventPage.clickFinalndCheckBox();
    }

    @And("user clicks on estonia checkbox under affected BU's")
    public void userClicksOnEstoniaCheckboxUnderAffectedBUS() {
        troubleEventPage.clickEstoniaCheckBox();
    }

    @And("user clicks on norway checkbox under affected BU's")
    public void userClicksOnNorwayCheckboxUnderAffectedBUS() {
        troubleEventPage.clickNorwayCheckBox();
    }

    @And("user clicks on lithuania checkbox under affected BU's")
    public void userClicksOnLithuaniaCheckboxUnderAffectedBUS() {
        troubleEventPage.clickLithuniaCheckBox();
    }

    @And("user clicks on denmark checkbox under affected BU's")
    public void userClicksOnDenmarkCheckboxUnderAffectedBUS() {
        troubleEventPage.clickDenmarkCheckBox();
    }

    @When("user clicks on main page refresh")
    public void userClicksOnMainPageRefresh() {
        troubleEventPage.refreshPage();
    }

    @Then("user enters event end time as current time")
    public void userEntersEventEndTimeAsCurrentTime() {
     troubleEventPage.enterEventEndTimeAsCurrentTime();
    }

    @And("user selects fault position as {string}")
    public void userSelectsFaultPositionAs(String arg0) {
        troubleEventPage.selectFaultPosition(arg0);
    }

    @And("user selects cause as {string}")
    public void userSelectsCauseAs(String arg0) {
        troubleEventPage.selectCause(arg0);
    }

    @And("user clicks on all alarm checkbox")
    public void userClicksOnAllAlarmCheckbox() {
    troubleEventPage.clickAllAlarms_Diagnosis();
    }

    @Then("user enters closure info as {string}")
    public void userEntersClosureInfoAs(String arg0) {
        troubleEventPage.enterClosureInfo(arg0);
    }

    @And("user clicks on yes on CI warning window")
    public void userClicksOnYesOnCIWarningWindow() {
        troubleEventPage.switchToFrameByIndex(2);
        troubleEventPage.clickOk_Diagnosis_OnFame();
    }

    @Then("user validates OLA value is set")
    public void userValidatesOLAValueIsSet() {
    Assert.assertNotNull(troubleEventPage.getOlaTargetTime());
    }

    @When("user clicks on the clear button")
    public void userClicksOnTheClearButton() {
        troubleEventPage.clickClear_selectTargetRequest();

    }

    @Then("user should see target request search")
    public void userShouldSeeTargetRequestSearch() {
    }

    @And("user clicks on the search button")
    public void userClicksOnTheSearchButton() {
        troubleEventPage.clickSearch_selctTargetRequest();
    }

    @And("user enters {string} in the ticket ID field")
    public void userEntersInTheTicketIDField(String arg0) {
    troubleEventPage.enterTicketIdPlus(arg0);
    }

    @And("user selects relationship type as {string}")
    public void userSelectsRelationshipTypeAs(String arg0) {
        troubleEventPage.selectRelationshipType(arg0);
    }

    @And("user clicks on accept button")
    public void userClicksOnAcceptButton() {
        troubleEventPage.clickAccept_selectTargetRequest();
        troubleEventPage.wait(10000);
    }

    @Then("user selects ticket under select target request")
    public void userSelectsTicketUnderSelectTargetRequest() {
     troubleEventPage.selectTicket();
    }

    @And("user clicks on display active child alarms radio button")
    public void userClicksOnDisplayActiveChildAlarmsRadioButton() {
     troubleEventPage.clickDisplayActiveChildAlarms();
    }

    @Then("trouble ticket should be appeared related to TeMIP")
    public void troubleTicketShouldBeAppearedRelatedToTeMIP() {
        Assert.assertEquals(troubleEventPage.getSourceText(), "HPE Common Temip", "Ticket is not related to TeMIP");
    }

    @And("user validates child WorkOrder availability")
    public void userValidatesChildWorkOrderAvailability() {
        Assert.assertTrue(troubleEventPage.validateChildWorkOrderAvailability());

    }


    @Then("user validates linked tickets availability")
    public void userValidatesLinkedTicketsAvailability() {
        Assert.assertTrue(troubleEventPage.validateLinkedItemsAvailability(), "Linked items are not available");
    }

    @Then("user should see child alarms present in alarms tab")
    public void userShouldSeeChildAlarmsPresentInAlarmsTab() {
        Assert.assertTrue(troubleEventPage.validateChildAlarmsAvailability(), "Child alarms are not available");
    }

    @And("user right clicks on primary CI and selects {string}")
    public void userRightClicksOnPrimaryCIAndSelects(String arg0) {
        troubleEventPage.selectPrimaryTicket();
       troubleEventPage.setPreferences(arg0);
    }

    @And("user validates CI impact status is {string}")
    public void userValidatesCIImpactStatusIs(String arg0) {
       Assert.assertEquals(troubleEventPage.verifyImpactStatusAsInactive(), arg0, "CI Impact status is not inactive");
    }

    @Then("user should see alarm status as {string}")
    public void userShouldSeeAlarmStatusAs(String arg0) {
     Assert.assertEquals(troubleEventPage.verifyAlarmStatus(), arg0, "Alarm status is not closed");
    }

    @When("user changes status to {string} on trouble event page")
    public void userChangesStatusToOnTroubleEventPage(String arg0) {
        troubleEventPage.selectStatus(arg0);
    }


    @Then("OLA target time field must be greyed out and not possible for user to alter")
    public void olaTargetTimeFieldMustBeGreyedOutAndNotPossibleForUserToAlter() {
        Assert.assertTrue(troubleEventPage.verifyOLA_Target_IsReadOnly());
    }

    @Then("ticket with SLA should be opened")
    public void ticketWithSLAShouldBeOpened() {
        Assert.assertNotNull(troubleEventPage.getCust_Remaining_SLA());
    }

    @And("user validates SLA Target Time availability")
    public void userValidatesSLATargetTimeAvailability() {
            Assert.assertNotNull(troubleEventPage.getCust_Remaining_SLA());
        }


    @And("user validates Cust. Remaining SLA or SLA Target Time availability")
    public void userValidatesCustRemainingSLAOrSLATargetTimeAvailability() {
        Assert.assertNotNull(troubleEventPage.getCust_Remaining_SLA());
    }

    @Then("customer SLA field must be greyed out and not possible for user to alter")
    public void customerSLAFieldMustBeGreyedOutAndNotPossibleForUserToAlter() {
        Assert.assertTrue(troubleEventPage.verifyCust_Remaining_SLAIsReadOnly());
    }

    @Then("ticket with OLA should be opened")
    public void ticketWithOLAShouldBeOpened() {
        Assert.assertNotNull(troubleEventPage.getOLATargetTime());
    }

    @And("user validates OLA Target Time availability")
    public void userValidatesOLATargetTimeAvailability() {
        Assert.assertNotNull(troubleEventPage.getOLATargetTime());
    }

    @Then("user verifies estimated ready field is available")
    public void userVerifiesEstimatedReadyFieldIsAvailable() {
      Assert.assertTrue(troubleEventPage.isEstimatedReadyDisplayed());
    }

    @And("user verifies priority field is visible")
    public void userVerifiesPriorityFieldIsVisible() {
        Assert.assertTrue(troubleEventPage.isPriorityFieldDisplayed());
    }

    @Then("priority field must be greyed out and not possible for user to alter")
    public void priorityFieldMustBeGreyedOutAndNotPossibleForUserToAlter() {
     Assert.assertTrue(troubleEventPage.verifyPriorityFieldIsReadOnly());
    }

    @And("user validates that the content of SLA date and time format as {string}")
    public void userValidatesThatTheContentOfDateAndTimeFormatAs(String arg0) {
      Assert.assertTrue(troubleEventPage.verifyDateTimeFormat(arg0, troubleEventPage.getCust_Remaining_SLA()));
    }

    @And("user selects importance as {string}")
    public void userSelectsImportanceAs(String arg0) {
        troubleEventPage.selectImportance(arg0);
    }

    @And("user validates ticket priority as {string}")
    public void userValidatesTicketPriorityAs(String arg0) {
        Assert.assertEquals(troubleEventPage.getPriorityText(), arg0);
    }

    @And("user selects impact as {string} on trouble event page")
    public void userSelectsImpactAsOnTroubleEventPage(String arg0) {
        troubleEventPage.selectImpact(arg0);
    }

    @And("ticket should be displayed")
    public void ticketShouldBeDisplayed() {
        Assert.assertNotNull(troubleEventPage.getTroubleTicket());
    }

    @And("user verifies request type field is visible")
    public void userVerifiesRequestTypeFieldIsVisible() {
        Assert.assertTrue(troubleEventPage.isRequestTypeVisible());
    }

    @And("user validates that the content of OLA date and time format as {string}")
    public void userValidatesThatTheContentOfOLADateAndTimeFormatAs(String arg0) {
        Assert.assertTrue(troubleEventPage.verifyDateTimeFormat(arg0, troubleEventPage.getOLATargetTime()));
    }

    @When("user validates template dropdown availability")
    public void userValidatesTemplateDropdownAvailability() {
        Assert.assertTrue(troubleEventPage.verifyTemplateIsAvailable());
    }

    @When("user validates Title availability")
    public void userValidatesTitleAvailability() {
        Assert.assertTrue(troubleEventPage.verifyTitleAvailability());
    }

    @When("user validates impact field availability")
    public void userValidatesImpactFieldAvailability() {
        Assert.assertTrue(troubleEventPage.verifyImpactAvailability());
    }

    @When("user validates importance field")
    public void userValidatesImportanceField() {
        Assert.assertTrue(troubleEventPage.verifyImportanceAvailability());
    }

    @When("user clicks on owner under sections")
    public void userClicksOnOwnerUnderSections() {
        troubleEventPage.clickOwner();
    }

    @And("user validates owner profile field availability")
    public void userValidatesOwnerFieldAvailability() {
        Assert.assertTrue(troubleEventPage.verifyOwnerProfileAvailability());

    }

    @When("user enters estimated ready as event start time plus {int} days")
    public void userEntersEstimatedReadyAsEventStartTimePlusDays(int arg0) {
        troubleEventPage.clearEstimatedReady();
        troubleEventPage.enterEstimatedReady(troubleEventPage.getEstimatedReady(arg0));
    }

    @Then("estimated ready time should be saved correctly")
    public void estimatedReadyTimeShouldBeSavedCorrectly() {
        Assert.assertEquals(troubleEventPage.getEstimatedReady(4), troubleEventPage.getSavedEstimatedReady());
    }

    @When("user enters estimated ready as event start time minus {int} day")
    public void userEntersEstimatedReadyAsEventStartTimeMinusDay(int arg0) {
        troubleEventPage.clearEstimatedReady();
        troubleEventPage.enterEstimatedReady(troubleEventPage.getEstimatedReady(-1));
    }

    @Then("error message should display as {string}")
    public void errorMessageShouldDisplayAs(String arg0) {
       //troubleEventPage.switchToFrameById("1562791998969P");
        Assert.assertEquals(troubleEventPage.getErrorText(), arg0);
        troubleEventPage.clickOkOnPopup();

    }

    @Then("user validates estimated ready time is updated for {int} hours")
    public void userValidatesEstimatedReadyTimeIsUpdatedForHours(int arg0) {
        Assert.assertEquals(troubleEventPage.calculateEstimatedReady(arg0), troubleEventPage.getSavedEstimatedReady());
    }

    @Then("user validates estimated ready time is updated for {int} months")
    public void userValidatesEstimatedReadyTimeIsUpdatedForMonths(int arg0) {
        Assert.assertEquals(troubleEventPage.getEstimatedReady(60), troubleEventPage.getSavedEstimatedReady());
    }

    @And("user accepts alert")
    public void userAcceptsAlert() {
        troubleEventPage.acceptAlert();
    }

    @And("user validates {string} is present")
    public void userValidatesIsPresent(String arg0) {
        Assert.assertTrue(troubleEventPage.verifyElementIsDisplayedByContainsText(arg0));

    }


    @And("user validates WO's Status is present")
    public void userValidatesWOSStatusIsPresent() {
        Assert.assertTrue(troubleEventPage.verifyWosStatusIsDisplayed());
    }

    @And("user validates CTI Details is present")
    public void userValidatesCTIDetailsIsPresent() {
        Assert.assertTrue(troubleEventPage.verifyCtiDetailsIsDisplayed());

    }

    @Then("user clicks on CTI details under sections")
    public void userClicksOnCTIDetailsUnderSections() {
        troubleEventPage.clickCtiDetails();
    }

    @Then("user clicks on location under sections")
    public void userClicksOnLocationUnderSections() {
        troubleEventPage.clickLocation();
    }


    @Then("user clicks on On Hold under sections")
    public void userClicksOnOnHoldUnderSections() {
       troubleEventPage.clickOnHold();
    }

    @Then("user clicks on vendor under sections")
    public void userClicksOnVendorUnderSections() {
        troubleEventPage.clickVendor();
    }

    @Then("user clicks on closure under sections")
    public void userClicksOnClosureUnderSections() {
        troubleEventPage.clickClosure();
    }

    @And("user validates Location Information is present")
    public void userValidatesLocationInformationIsPresent() {
        Assert.assertTrue(troubleEventPage.verifyIsLocationInformationIspPresent());
    }

    @And("user validates On Hold Until is present")
    public void userValidatesOnHoldUntilIsPresent() {
        Assert.assertTrue(troubleEventPage.verifyIsOnHoldUntilPresent());
    }

    @And("user validates Closure Codes is present")
    public void userValidatesClosureCodesIsPresent() {
        Assert.assertTrue(troubleEventPage.verifyIsClosureCodeIspPresent());
    }

    @And("user validates Internal is present")
    public void userValidatesInternalIsPresent() {
        Assert.assertTrue(troubleEventPage.verifyIsInternalIsPresent());
    }

    @And("user validates External is present")
    public void userValidatesExternalIsPresent() {
        Assert.assertTrue(troubleEventPage.verifyIsExternalIsPresent());
    }

    @And("user validates Vendor is present")
    public void userValidatesVendorIsPresent() {
        Assert.assertTrue(troubleEventPage.verifyIsVendorIsPresent());
    }

    @And("user validates Owner is present")
    public void userValidatesOwnerIsPresent() {
        Assert.assertTrue(troubleEventPage.verifyIsOwnerIsPresent());
    }

    @Then("user clicks on attachments under sections on trouble event page")
    public void userClicksOnAttachmentsUnderSectionsOnTroubleEventPage() {
        troubleEventPage.clickAttachments();
    }

    @And("user validates Add is present")
    public void userValidatesAddIsPresent() {
        Assert.assertTrue(troubleEventPage.verifyIsAddIsPresent());
    }


    @And("user validates Delete is present")
    public void userValidatesDeleteIsPresent() {
        Assert.assertTrue(troubleEventPage.verifyIsDeleteIsPresent());
    }

    @And("user validates internal Open is present")
    public void userValidatesInternalOpenIsPresent() {
        Assert.assertTrue(troubleEventPage.verifyIsOpen_InternalIsPresent());
    }

    @And("user validates external Open is present")
    public void userValidatesExternalOpenIsPresent() {
        Assert.assertTrue(troubleEventPage.verifyIsOpen_ExternalIsPresent());
    }

    @And("user validates internal Preferences is present")
    public void userValidatesInternalPreferencesIsPresent() {
        Assert.assertTrue(troubleEventPage.verifyIsPreferences_InternalIsPresent());
    }

    @And("user validates internal Refresh is present")
    public void userValidatesInternalRefreshIsPresent() {
        Assert.assertTrue(troubleEventPage.verifyIsRefresh_InternalIsPresent());
    }

    @And("user validates external Preferences is present")
    public void userValidatesExternalPreferencesIsPresent() {
        Assert.assertTrue(troubleEventPage.verifyIsPreferences_ExternalIsPresent());
    }

    @And("user validates external Refresh is present")
    public void userValidatesExternalRefreshIsPresent() {
        Assert.assertTrue(troubleEventPage.verifyIsRefresh_ExternalIsPresent());
    }

    @And("user validates Cause is present")
    public void userValidatesCauseIsPresent() {
        Assert.assertTrue(troubleEventPage.verifyIsCauseIsPresent());
    }

    @And("user clicks on root cause under sections")
    public void userClicksOnRootCauseUnderSections() {
        troubleEventPage.clickRootCause();
    }

    @And("user validates root cause is present")
    public void userValidatesRootCauseIsPresent() {
        Assert.assertTrue(troubleEventPage.verifyIsRootCauseIsPresent());
    }
}


