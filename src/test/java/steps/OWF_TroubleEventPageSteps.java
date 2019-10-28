package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import org.openqa.selenium.By;
import org.testng.Assert;
import pageObjects.OWF_TroubleEventPage;
import pageObjects.OWF_WorkOrderPage;
import utils.CommonUtils;
import utils.Ticket;

public class OWF_TroubleEventPageSteps {
    OWF_TroubleEventPage troubleEventPage = new OWF_TroubleEventPage();
    OWF_WorkOrderPage workOrderPage= new OWF_WorkOrderPage();
    Ticket parentTicket;
    int ciSizeBeforeDetach;
    int ciSizeAfterDetatch;
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
        troubleEventPage.wait(1000);
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

    @And("user validates CI {string} is {string}")
    public void userValidatesCIImpactStatusIs(String columnName, String columnValue) {
       Assert.assertEquals(troubleEventPage.verifyColumnStatus(columnName, 1), columnValue, "CI Impact status is not inactive");
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

    @When("user enters estimated ready as event start time plus {int} days on trouble event page")
    public void userEntersEstimatedReadyAsEventStartTimePlusDays(int arg0) {

        workOrderPage.clearEstimatedReady();
        workOrderPage.enterEstimatedReady(troubleEventPage.calculateEstimatedReady(arg0, "days"));
    }

    @Then("estimated ready time should be saved correctly on trouble event page")
    public void estimatedReadyTimeShouldBeSavedCorrectly() {
        Assert.assertEquals(troubleEventPage.calculateEstimatedReady(4, "days"), workOrderPage.getSavedEstimatedReady());
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

    @Then("error message should display as {string}")
    public void errorMessageShouldDisplayAs(String arg0) {
//        Assert.assertEquals(troubleEventPage.getErrorText(), arg0);
        //troubleEventPage.getErrorText();
        //troubleEventPage.clickOkOnPopup();
        troubleEventPage.clickOk();

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

    @And("user validates availability of category dropdown")
    public void userValidatesAvailabilityOfCategoryDropdown() {
     Assert.assertTrue(troubleEventPage.verifyCategoryAvailability());
    }

    @Then("user validates availability of type dropdown")
    public void userValidatesAvailabilityOfTypeDropdown() {
        Assert.assertTrue(troubleEventPage.verifyTypeAvailability());
    }

    @When("user validates availability of item dropdown")
    public void userValidatesAvailabilityOfItemDropdown() {
        Assert.assertTrue(troubleEventPage.verifyCategoryAvailability());
    }

    @And("user validates event start time is present")
    public void userValidatesEventStartTimeIsPresent() {
        Assert.assertTrue(troubleEventPage.verifyEventStartTimeAvailability());
        Assert.assertNotNull(troubleEventPage.eventStartDateTime());
    }

    @And("user enters {string} within the location ID+ field")
    public void userEntersWithinTheLocationIDField(String arg0) {
        troubleEventPage.enterLocationIdPlus(arg0);
    }
    @And("user enters {string} within the location ID+")
    public void userEntersWithinTheLocationID(String arg0) {
        troubleEventPage.enterLocationId_Plus(arg0);
    }

    @Then("user should see list of swedish sites")
    public void userShouldSeeListOfSwedishSites() {
        Assert.assertTrue(troubleEventPage.verifyListOfSwedishSites());
    }

    @When("user clicks on the next chunk button")
    public void userClicksOnTheNextChunkButton() {
      troubleEventPage.clickNextChunkRight();
    }

    @And("user highlights location {string} and clicks ok and validates location details")
    public void userHighlightsLocationClicksOkAndValidatesLocationDetails(String arg0) {
        String[] tableTexts = troubleEventPage.clickOnRow(arg0);
        troubleEventPage.clickOk_SelectLocation();
        Assert.assertEquals(tableTexts[0], troubleEventPage.getLocationName());
        Assert.assertEquals(tableTexts[1], troubleEventPage.getLocationId());
        Assert.assertEquals(tableTexts[2], troubleEventPage.getRegionName());
        Assert.assertEquals(tableTexts[3], troubleEventPage.getRegionId());
        Assert.assertEquals(tableTexts[4], troubleEventPage.getLatitude());
        Assert.assertEquals(tableTexts[5], troubleEventPage.getLongitude());
    }

    @Then("user clicks on ok button on location search")
    public void userClicksOnOkButtonOnLocationSearch() {
        troubleEventPage.clickOk_SelectLocation();
    }

    @Then("user validates location details are updated")
    public void userValidatesLocationDetailsAreUpdated() {
    }

    @Then("multiple statuses {string} should be available in Importance dropdown")
    public void multipleStatusesShouldBeAvailableInImportanceDropdown(String arg0) {
       Assert.assertTrue(troubleEventPage.verifyDropdownValuesForImportance(arg0, ""));
    }
    @And("user changes event start time {int} day in the past")
    public void userChangesEventStartTimeDayInThePast(int arg0) {
        troubleEventPage.clearEventStartTime();
        troubleEventPage.enterEventStartTime(troubleEventPage.calculateEstimatedReady(arg0, "days"));
    }

    @Then("user selects impact name as {string}")
    public void userSelectsImpactNameAs(String arg0) {
       troubleEventPage.selectImpactName(arg0);
    }

    @And("user clicks confirm checkbox")
    public void userClicksConfirmCheckbox() {
        troubleEventPage.clickConfirmCheckBox();
    }

    @And("user clicks on bulk update save button")
    public void userClicksOnBulkUpdateSaveButton() {
       troubleEventPage.clickSave_bulkUpdate();
    }

    @And("user validates last ack by field has data present")
    public void userValidatesLastAckByFieldHasDataPresent() {
        Assert.assertNotNull(troubleEventPage.getLastAckBy());
    }

    @Then("user validates assignee is {string}")
    public void userValidatesAssigneeIs(String arg0) {
        Assert.assertEquals(arg0, troubleEventPage.getAssignee());
    }

    @When("user selects assignment profile dropdown as {string}")
    public void userSelectsAssignmentProfileDropdownAs(String arg0) {
        troubleEventPage.selectAssignmentProfile(arg0);
    }

    @And("user changes event start time as {string} future date and time")
    public void userChangesEventStartTimeAsFutureDateAndTime(String arg0) {
        troubleEventPage.clearEventStartTime();
        troubleEventPage.enterEventStartTime(arg0);
    }

    @When("user changes event start time as {string} past date and time")
    public void userChangesEventStartTimeAsPastDateAndTime(String arg0) {
        troubleEventPage.clearEventStartTime();
        troubleEventPage.enterEventStartTime(arg0);
    }

    @And("user clicks on priority check button")
    public void userClicksOnPriorityCheckButton() {
        troubleEventPage.clickPriorityCheck();
    }

    @Then("user validates that priority changes to {string}")
    public void userValidatesThatPriorityChangesTo(String arg0) {
        Assert.assertEquals(arg0, troubleEventPage.getPriorityText());
    }

    @Then("user should see work orders listed under work order tab")
    public void userShouldSeeWorkOrdersListedUnderWorkOrderTab() {
      Assert.assertTrue(troubleEventPage.verifyAvailabilityOfWorkOrders());
    }

    @And("user should see known error ticket listed")
    public void userShouldSeeKnownErrorTicketListed() {
        Assert.assertTrue(troubleEventPage.verifyAvailabilityOfTicket());
    }

    @And("user clicks on link button under linked items tab")
    public void userClicksOnLinkButtonUnderLinkedItemsTab() {
        troubleEventPage.clickLink_LinkedItems();
    }

    @When("user enters {string} in the timeline text box")
    public void userEntersInTheTimelineTextBox(String arg0) {
       troubleEventPage.enterText_timeline(arg0);
    }

    @And("user clicks on public radio button")
    public void userClicksOnPublicRadioButton() {
        troubleEventPage.clickPublicRadioButton();
    }

    @Then("user validates {int} linked ticket availability")
    public void userValidatesLinkedTicketAvailability(int arg0) {
        troubleEventPage.validateLinkedItemsAvailability(arg0);

    }



    @Then("user enters root cause description as {string}")
    public void userEntersRootCauseDescriptionAs(String arg0) {
        troubleEventPage.enterRootCauseDescription(arg0);
    }



    @And("user validates {string} CI is equal to {string}")
    public void userValidatesCIIsEqualTo(String arg0, String arg1) {
        troubleEventPage.PrimaryIsDK_SGSN_AMBMME1(arg0, arg1);
    }



    @When("user right clicks on CI SE_EPG_VRREPG1 and user selects {string}")
    public void userRightClicksOnCIAndUserSelects(String arg0) {
        troubleEventPage.selectTicketAndRightClick();
        troubleEventPage.setPreferences(arg0);
    }


    @Then("user should see CI's {string}, {string}, {string}, {string}")
    public void userShouldSeeCIS(String arg0, String arg1, String arg2, String arg3) {
        troubleEventPage.verifyCiDetails(arg0, arg1, arg2, arg3);
    }



    @Then("user should see closure codes appear")
    public void userShouldSeeClosureCodesAppear() {
        Assert.assertTrue(troubleEventPage.verifyIsClosureCodeIspPresent());
    }

    @When("user right clicks on secondary CI and selects {string}")
    public void userRightClicksOnSecondaryCIAndSelects(String arg0) {
        troubleEventPage.selectTicketAndRightClick();
        troubleEventPage.setPreferences(arg0);

    }

    @And("user gets number of CI's")
    public void userGetsNumberOfCIS() {
        ciSizeBeforeDetach =troubleEventPage.getNumberOfCis();
    }

    @Then("CI should be detached from ticket")
    public void ciShouldBeDetachedFromTicket() {
        ciSizeAfterDetatch= troubleEventPage.getNumberOfCis();
        Assert.assertNotEquals(ciSizeBeforeDetach, ciSizeAfterDetatch);
    }

    @And("user clicks on cancel button")
    public void userClicksOnCancelButton() {
        troubleEventPage.clickCancel();
    }

    @And("user validates WO's Status is {string}")
    public void userValidatesWOSStatusIsEmpty(String arg0) {
        Assert.assertEquals(troubleEventPage.getWoStatus(), arg0);
    }

    @And("user validates {string} is visible")
    public void userValidatesIsVisible(String arg0) {
      Assert.assertTrue(troubleEventPage.verifyElementIsDisplayedByContainsTextAndTagNameSpan("span", arg0));
    }
    @And("user validates {string} is visible on bulk CI loading window tagname {string}")
    public void userValidatesIsVisibleOnBulkCILoadingWindowTagname(String arg0, String arg1) {
        Assert.assertTrue(troubleEventPage.verifyElementIsDisplayedByContainsTextAndTagNameSpan(arg1, arg0));
    }

    @When("user clicks on {string} under info type")
    public void userClicksOnUnderInfoType(String arg0) {
        troubleEventPage.clickElementByContainsTextAndTagName("span", arg0);
    }

    @And("user validates {string} BU is added automatically")
    public void userValidatesBUIsAddedAutomatically(String arg0) {
        Assert.assertTrue(troubleEventPage.verifyIsDenmarkSelected());
    }

    @And("user clicks on close button on bulk update window")
    public void userClicksOnCloseButtonOnBulkUpdateWindow() {
        troubleEventPage.clickClose_bulkUpdate();
    }

    @And("user validates no changes were made on the chosen CI")
    public void userValidatesNoChangesWereMadeOnTheChosenCI() {
        Assert.assertEquals(CommonUtils.ciDetailsBeforeUpdate, troubleEventPage.saveCiDetails(false));
    }


    @Then("user validates CI SE_EPG_VRREPG impact is {string}")
    public void userValidatesCISE_EPG_VRREPGImpactIs(String arg0) {
       Assert.assertEquals(arg0, troubleEventPage.verifyColumnStatus("Impact Level", 4));
    }

    @When("user right clicks on CI SE_EPG_VRREPG{int} and user selects {string} without selecting checkbox")
    public void userRightClicksOnCISE_EPG_VRREPGAndUserSelectsWithoutSelectingCheckbox(int arg0, String arg1) {
        troubleEventPage.rightClickOnCi();
        troubleEventPage.setPreferences(arg1);
    }

    @Then("user validates CI columns {string} availability")
    public void userValidatesCIColumnAvailability(String columnNames) {
        Assert.assertTrue(troubleEventPage.verifyColumnNamesByTable(columnNames));
    }

    @And("user validates columns have data present")
    public void userValidatesColumnsHaveDataPresent() {
        Assert.assertTrue(troubleEventPage.validateCIColumnsHaveData());
    }

    @When("user right clicks on CI {string} and selects {string}")
    public void userRightClicksOnCIAndSelects(String cellData, String preferences) {
        troubleEventPage.selectAndRightClickOnTableElement(cellData);
        troubleEventPage.setPreferences(preferences);
    }

    @Then("user validates CI {string} impact level is {string}")
    public void userValidatesCIImpactLevelIs(String arg0, String cellValue) {
        Assert.assertEquals(cellValue, troubleEventPage.verifyColumnStatus("Impact Level", 2));
    }

    @And("user selects impact from at least {int} day in the past")
    public void userSelectsImpactFromAtLeastDayInThePast(int arg0) {
        troubleEventPage.enterImpactFromAsOneDayPast();
    }

    @And("user gets trouble ticket value")
    public void userGetsTroubleTicketValue() {
            CommonUtils.opTicket = troubleEventPage.getTicketValue();
            System.out.println("Stored trouble ticket is " + CommonUtils.opTicket);
    }

    @When("user selects fault position as {string} on trouble event page")
    public void userSelectsFaultPositionAsOnTroubleEventPage(String arg0) {
        troubleEventPage.selectFaultPosition_troubleEventPage(arg0);

    }

    @And("user selects cause as {string} on trouble event page")
    public void userSelectsCauseAsOnTroubleEventPage(String arg0) {
      troubleEventPage.selectCause_troubleEventPage(arg0);
    }

    @And("user enters event end time as {int} mins past")
    public void userEntersEventEndTimeAsMinsPast(int arg0) {
        troubleEventPage.enterEventEndTimeAsPast(CommonUtils.getDateTime("yyyy/MM/dd HH:mm:ss", "Europe/Stockholm", arg0));
    }

    @And("user selects action dropdown as {string} on trouble event page")
    public void userSelectsActionDropdownAsOnTroubleEventPage(String arg0) {
        troubleEventPage.selectAction(arg0);
    }

    @And("user enters event start time as {int} mins past")
    public void userEntersEventStartTimeAsMinsPast(int arg0) {
        troubleEventPage.enterEventStartTime(CommonUtils.getDateTime("yyyy/MM/dd HH:mm:ss", "Europe/Stockholm", arg0));
    }

    @And("user should see confirmation message for impact clear and clicks ok")
    public void userShouldSeeConfirmationMessageForImpactClearAndClicksOk() {
        troubleEventPage.clickOK_ImpactClear();
    }

    @And("user validates closure info is present")
    public void userValidatesClosureInfoIsPresent() {
        Assert.assertNotNull(troubleEventPage.getClosureInfo());
    }

    @Then("user validates event end time is a mandatory field")
    public void userValidatesEventEndTimeIsAMandatoryField() {
      Assert.assertEquals(troubleEventPage.verifyEndTimeIsMandatory(), "Event End Time*");
    }


    @And("user clicks on ticket refresh button")
    public void userClicksOnTicketRefreshButton() {
        troubleEventPage.clickRefresh_ticketFresh();
    }

    @When("user changes status to {string} on trouble event page second time")
    public void userChangesStatusToOnTroubleEventPageSecondTime(String arg0) {
        troubleEventPage.selectStatus_secondTime(arg0);

    }

    @And("user validates all text area fields are readonly")
    public void userValidatesAllFieldsAreReadOnly() {
     Assert.assertTrue(troubleEventPage.verifyElementsAreReadOnly("textarea"));
    }

    @And("user selects site {string}")
    public void userSelectsSite(String arg0) {
        troubleEventPage.clickLocationName_selectLocation(arg0);
    }

    @And("user should see {string} {string} tickets")
    public void userShouldSeeTickets(String arg0, String arg1) {
       Assert.assertTrue(troubleEventPage.verifyClosedTickets("Status", arg0));
       Assert.assertTrue(troubleEventPage.verifyTicketsCountry("Location ID+", arg1));
    }

    @Then("error message should display as {string} on change record page")
    public void errorMessageShouldDisplayAsOnChangeRecordPage(String arg0) {
        Assert.assertEquals(troubleEventPage.getErrorText_change_recordPage(), arg0);

    }

    @And("user validates Affected BU's area is read only")
    public void userValidatesAffectedBUSAreaIsReadOnly() {
        Assert.assertTrue(troubleEventPage.verifyElementsAreReadOnly("input"));
    }

    @And("user validates {string} is disabled")
    public void userValidatesIsDisabled(String text) {
        Assert.assertFalse(troubleEventPage.verifyElementIsEnabledByContainsTextAndTagName("div", text));
    }

    @And("user validates add is disabled")
    public void userValidatesAddIsDisabled() {
        Assert.assertFalse(troubleEventPage.verifyElementIsDisabled());
    }


    @And("user enters trouble ticket in ticket ID+ field")
    public void userEntersTroubleTicketInTicketIDField() {
        troubleEventPage.enterTicketIdPlus(CommonUtils.opTicket);
    }

    @And("user clicks on the search button on select target request")
    public void userClicksOnTheSearchButtonOnSelectTargetRequest() {
        troubleEventPage.clickSearch_selctTargetRequest();
    }

    @Then("user clicks {string} tab")
    public void userClicksTab(String arg0) {
        troubleEventPage.wait(3000);
        troubleEventPage.selectTab(arg0);
    }

    @And("user validates CI SE_CPE_FRECPE5 {string} is {string} in row {int}")
    public void userValidatesCISE_CPE_FRECPEIsInRow(String colName, String colValue, int rowNum) {
        Assert.assertEquals(colValue, troubleEventPage.verifyColumnStatus(colName, rowNum));
    }

    @And("user highlights user {string} under interested parties")
    public void userHighlightsUserUnderInterestedParties(String arg0) {
         troubleEventPage.clickTableElement_interestedParteis("Login Name", arg0);
    }

    @Then("user validates no timeline entries can be made")
    public void userValidatesNoTimelineEntriesCanBeMade() {
     troubleEventPage.verifyAddTimelineDivIsPresent();
    }

    @Then("user validates CI Search is disabled")
    public void userValidatesCISearchIsDisabled() {
   troubleEventPage.verifyCiSearchButtonIsReadOnly();
    }

    @And("user validates Add under interested parties is disabled")
    public void userValidatesAddUnderInterestedPartiesIsDisabled() {
       Assert.assertFalse(troubleEventPage.verifyAddButtonIsReadOnly());
    }

    @And("user validates Remove is disabled")
    public void userValidatesRemoveIsDisabled() {
        Assert.assertFalse(troubleEventPage.verifyRemoveButtonIsReadOnly());
    }

    @And("user validates Bulk Update is disabled")
    public void userValidatesBulkUpdateIsDisabled() {
        Assert.assertFalse(troubleEventPage.verifyBulkUpdateButtonIsReadOnly());
    }

    @And("user validates Add Email is disabled")
    public void userValidatesAddEmailIsDisabled() {
        Assert.assertFalse(troubleEventPage.verifyAddEmailButtonIsReadOnly());
    }

    @And("user validates Method is readonly")
    public void userValidatesMethodIsReadonly() {
       Assert.assertTrue(troubleEventPage.verifyMethodIsReadOnly());
    }

    @And("user validates Sent To is readonly")
    public void userValidatesSentToIsReadonly() {
        Assert.assertTrue(troubleEventPage.verifySendToIsReadOnly());
    }

    @And("user validates Subject is readonly")
    public void userValidatesSubjectIsReadonly() {
        Assert.assertTrue(troubleEventPage.verifySubjectIsReadOnly());
    }

    @And("user validates Body is readonly")
    public void userValidatesBodyIsReadonly() {
        Assert.assertTrue(troubleEventPage.verifyBodyIsReadOnly());
    }

    @And("user validates Target Application is readonly")
    public void userValidatesTargetApplicationIsReadonly() {
        Assert.assertTrue(troubleEventPage.verifyTargetApplicationIsReadOnly());
    }

    @And("user validates Link is disabled")
    public void userValidatesLinkIsDisabled() {
        Assert.assertFalse(troubleEventPage.verifyCiLinkButtonIsEnabled());
    }

    @And("user validates Unlink is disabled")
    public void userValidatesUnlinkIsDisabled() {
        Assert.assertFalse(troubleEventPage.verifyCiUnLinkButtonIsEnabled());
    }

    @And("user validates Create is disabled")
    public void userValidatesCreateIsDisabled() {
        Assert.assertFalse(troubleEventPage.verifyCiCreateButtonIsEnabled());
    }

    @And("user validates Create From Ticket is not visible")
    public void userValidatesCreateFromTicketIsNotVisible() {
        try{
            troubleEventPage.clickCreateFromTicket();
        }
        catch (Exception e){
            System.out.println("Create from ticket is not present");
        }

    }

    @And("user validates Create From Template is not visible")
    public void userValidatesCreateFromTemplateIsNotVisible() {
        try{
            troubleEventPage.clickCreateFromTemplate();
        }
        catch (Exception e){
            System.out.println("Create from template is not present");
        }
    }

    @And("user validates Detach&Create is disabled")
    public void userValidatesDetachCreateIsDisabled() {
        Assert.assertFalse(troubleEventPage.verifyCiDetatchButtonIsEnabled());
    }

    @And("user validates Refresh Status is disabled")
    public void userValidatesRefreshStatusIsDisabled() {
        Assert.assertFalse(troubleEventPage.verifyCiDetatchAndCreateButtonIsEnabled());
    }

    @And("user validates Terminate Alarm is disabled")
    public void userValidatesTerminateAlarmIsDisabled() {
        Assert.assertFalse(troubleEventPage.verifyCiTerminateButtonIsEnabled());
    }

    @And("user validates Refresh Status Time is readonly")
    public void userValidatesRefreshStatusTimeIsReadonly() {
     Assert.assertTrue(troubleEventPage.verifyRefreshStatusIsReadOnly());
    }

    @And("user validates Insert is disabled")
    public void userValidatesInsertIsDisabled() {
        Assert.assertFalse(troubleEventPage.verifyInsertButtonIsEnabled());
    }

    @And("user validates Enable is not visible")
    public void userValidatesEnableIsNotVisible() {
        try{
            troubleEventPage.verifyEnableButtonIsEnabled();
        }
        catch (Exception e){
            System.out.println("Enable button is Disabled");
        }

    }

    @And("user validates Disable is not visible")
    public void userValidatesDisableIsNotVisible() {
        try{
            troubleEventPage.verifyDisableButtonIsEnabled();
        }
        catch (Exception e){
            System.out.println("Disable button is Disabled");
        }
    }

    @When("user right clicks on CI {string} and selects Impact:Update")
    public void userRightClicksOnCIAndSelectsImpactUpdate(String cellData) {
        troubleEventPage.selectAndRightClickOnTableElement(cellData);
        troubleEventPage.selectImpact_update();
    }

    @Then("multiple values should be available in {string} dropdown")
    public void multipleValuesShouldBeAvailableInDropdown(String dropDownName) {
        String dropdownValues = "IT CC:Access network:BSS:Control Center:Core:CTI Admin-Fi:Customer Operation:Customer Services:DC CS Core (Voice):Escalation Manager:External:Field Service:IBS-SE:Infrastructure:IOT:IT:it:OSS:Packet Transport:Security services:Third Parties:Transmission:TV:VAS:(clear)";
        troubleEventPage.verifyDropdownValues(dropdownValues, dropDownName, "notreadonly");
    }

    @And("User selects {string} as {string} and should see {string}")
    public void userSelectsAsAndShouldSee(String dropDownName, String selectedValue, String valuesToBePresent) {
        Assert.assertTrue(troubleEventPage.verifyDropdownValuesByName(dropDownName,selectedValue, valuesToBePresent, "notreadonly"));
        troubleEventPage.clickEscButton();
    }

    @And("User selects {string} as dropdownValue and should see values for {string}")
    public void userSelectsDropdownNameAsDropdownValueAndShouldSeeValues(String dropdownName, String readOnly, DataTable dropdownValues) {
        troubleEventPage.verifyMultipleDropdownValues(dropdownName,dropdownValues,readOnly);
    }
    @And("user enters impact from time as same value as request start time on impact details bulk update window")
    public void userEntersImpactFromTimeAsSameValueAsRequestStartTimeOnImpactDetailsBulkUpdateWindow() {
     troubleEventPage.enterImpactFromPlus(CommonUtils.requestStart);
    }

    @And("user enters impact to time as same value as request end time on impact details bulk update window")
    public void userEntersImpactToTimeAsSameValueAsRequestEndTimeOnImpactDetailsBulkUpdateWindow() {
        troubleEventPage.enterImpactToPlus(CommonUtils.requestEnd);
    }

    @And("user clicks on add button on timeline")
    public void userClicksOnAddButtonOnTimeline() {
        troubleEventPage.clickAdd_timeline();
    }

    @And("user selects attachment visibility as Internal")
    public void userSelectsAttachmentVisibilityAsInternal() {
        troubleEventPage.clickInternalRadioButton();
    }

    @And("user validates {int} attachment visibility under internal")
    public void userValidatesAttachmentVisibilityUnderInternal(int arg0) {
        Assert.assertTrue(troubleEventPage.validateAttachmentAvailability(arg0));
    }

    @And("user gets event start time value")
    public void userGetsEventStartTimeValue() {
        CommonUtils.eventStartTime=troubleEventPage.getEventStartTime();
    }


    @And("user clicks on {string} checkbox under affected BU's")
    public void userClicksOnCheckboxUnderAffectedBUS(String arg0) {
        troubleEventPage.clickAffectedBu(arg0);
    }

    @Then("user validates {string} and {string} checkboxes are selected")
    public void userValidatesAndCheckboxesAreSelected(String arg0, String arg1) {
        Assert.assertTrue(troubleEventPage.checkAffectedBuIsSelected(arg0));
        Assert.assertTrue(troubleEventPage.checkAffectedBuIsSelected(arg1));
    }

    @Then("user should see error message on ci search window and clicks ok")
    public void userShouldSeeErrorMessageOnCiSearchWindowAndClicksOk() {
        troubleEventPage.getErrorText();
        troubleEventPage.clickOkOnPopup();
    }

    @Then("user clicks on save button and closes warning messages")
    public void userClicksOnSaveButtonAndClosesWarningMessages() {
        troubleEventPage.clickSave();
        troubleEventPage.switchToFrameByIndex(2);
        troubleEventPage.clickElementByContainsTextAndTagName("a", "OK");
        troubleEventPage.switchToDefault();
        troubleEventPage.switchToFrameByIndex(2);
        troubleEventPage.wait(3000);
        troubleEventPage.clickElementByContainsTextAndTagName("a", "Yes");
        troubleEventPage.switchToDefault();
    }

    @And("user selects attachment visibility as external")
    public void userSelectsAttachmentVisibilityAsExternal() {
        troubleEventPage.clickExternalRadioButton();
    }

    @And("user validates {int} attachment visibility under external")
    public void userValidatesAttachmentVisibilityUnderExternal(int arg0) {
        Assert.assertTrue(troubleEventPage.validateAttachmentAvailability_External(arg0));
    }

    @And("user enters impact from time as past on impact details bulk update window")
    public void userEntersImpactFromTimeAsPastOnImpactDetailsBulkUpdateWindow() {
        troubleEventPage.enterImpactFromPlus(CommonUtils.getDateAsTodayMidnight(0));
    }

    @And("user enters impact to time as past on impact details bulk update window")
    public void userEntersImpactToTimeAsPastOnImpactDetailsBulkUpdateWindow() {
        troubleEventPage.enterImpactToPlus(CommonUtils.getDateAsTodayMidnight(1));
    }

    @And("there are multiple assignment rules that match the incident details")
    public void thereAreMultipleAssignmentRulesThatMatchTheIncidentDetails() {
        
    }

    @And("the Assignment Profile is set based on the assignment rule with the highest priority sort order value")
    public void theAssignmentProfileIsSetBasedOnTheAssignmentRuleWithTheHighestPrioritySortOrderValue() {
    }

    @And("user enters AM status details as {string}")
    public void userEntersAMStatusDetailsAs(String arg0) {
        troubleEventPage.enterTextByElement(By.id("arid_WIN_0_600001105"), arg0);
    }


    @When("user enters plaza incident ticket")
    public void userEntersPlazaIncidentTicket() {
        troubleEventPage.enterTroubleTicket(CommonUtils.OpTicket_plaza);
    }

    @And("user should see plaza incident ticket")
    public void userShouldSeePlazaIncidentTicket() {
        Assert.assertEquals(troubleEventPage.getTroubleTicket(), CommonUtils.OpTicket_plaza);
    }

    @And("user validates source ID field contains ICM number")
    public void userValidatesSourceIDFieldContainsICMNumber() {
      Assert.assertTrue(troubleEventPage.verifyIdHasICMNumber());
    }

    @And("user validates service provider as {string}")
    public void userValidatesServiceProviderAs(String arg0) {
        Assert.assertEquals(troubleEventPage.getServiceProvider(), arg0);

    }

    @And("user enters on hold to date {int} minutes in the future")
    public void userEntersOnHoldToDateMinutesInTheFuture(int arg0) {
       troubleEventPage.enterHoldToDateAndTime(CommonUtils.getDateTime("yyyy/MM/dd HH:mm:ss", "Europe/Stockholm", arg0));
    }

    @And("user selects on hold reason as {string}")
    public void userEntersOnHoldReasonAs(String arg0) {
      troubleEventPage.selectHoldReason(arg0);
    }

    @And("user enters rejection reason as {string}")
    public void userEntersRejectionReasonAs(String arg0) {
        troubleEventPage.enterRejectReason(arg0);
    }
}


