package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.testng.Assert;
import pageObjects.OWF_ProblemRecordPage;
import utils.CommonUtils;


public class OWF_ProblemRecordPageSteps {
    public String ticket;

    OWF_ProblemRecordPage problemRecordPage = new OWF_ProblemRecordPage();

    @Then("problem record form should appear in new tab")
    public void problemRecordFormShouldAppearInNewTab() {
        //title assertion
    }

    @When("user clicks on save button on the problem form")
    public void userClicksOnSaveButtonOnTheProblemForm() {
        problemRecordPage.clickSaveButton();
        problemRecordPage.wait(5000);
    }

    @Then("an error message should appear: {string}")
    public void anErrorMessageShouldAppear(String errorMessage) {

        Assert.assertTrue(problemRecordPage.validateErrorMessage(), "Error message didn't appear");
    }

    @When("user clicks on sweden checkbox under affected BU's")
    public void userClicksOnSwedenCheckboxUnderAffectedBUS() {
        problemRecordPage.clickSwedenCheckBox();
       // problemRecordPage.clickSaveButton();
    }

    @Then("multiple error messages should appear with red boarder around fields")
    public void multipleErrorMessagesShouldAppearWithRedBoarderAroundFields() {
        Assert.assertTrue(problemRecordPage.validateMultipleErrorMessages(), "Multiple error messages are not shown");
        //Red border should appear around fields
    }

    @When("user enters {string} in Title field")
    public void userEntersInTitleField(String title) {

        problemRecordPage.enterTitle(title);
    }

    @And("user enters description as {string}")
    public void userEntersDescriptionAs(String description) {
        problemRecordPage.enterDescription(description);
    }

    @And("user selects urgency as low")
    public void selectsUrgencyAsLow() {
        problemRecordPage.clickUrgencyDropDown();
        problemRecordPage.wait(1000);
        problemRecordPage.selectLowDdValue();
    }


    @And("user clicks on yes on warning window")
    public void userClicksOnYesOnWarningWindow() {
        problemRecordPage.wait(1000);
        problemRecordPage.switchToFrameByIndex(2);
        problemRecordPage.wait(1000);
        problemRecordPage.clickYesOnFrame();
    }

    @Then("an error message {string} should appear with red boarder around withdrawn reason")
    public void anErrorMessageShouldAppearWithRedBoarderAroundWithdrawnReason(String errorMessage) {
        Assert.assertTrue(problemRecordPage.validateErrorMessage(), "Error message didn't appear");
    }

    @When("user selects withdrawn reason as false alarm and clicks save")
    public void userSelectsWithdrawnReasonAsFalseAlarmAndClicksSave() {
        problemRecordPage.selectWithdrawnReason_FalseAlarmDropDown();
        problemRecordPage.clickSaveButton();

    }

    @And("user should see confirmation message and clicks on yes button")
    public void userShouldSeeConfirmationMessageAndClicksOnYesButton() {
        problemRecordPage.wait(500);
        problemRecordPage.switchToFrameByIndex(2);
        problemRecordPage.wait(500);
        problemRecordPage.clickYesOnFrame();
    }

    @And("user selects impact type as moderate:limited")
    public void userSelectsImpactTypeAsModerateLimited() {
        problemRecordPage.clickImpactDropDown();
        problemRecordPage.selectModerateLimitedDdValue();
    }

    @And("user gets ticket value")
    public void userGetsTicketValue() {
        ticket = problemRecordPage.getTicketValue();
        System.out.println("Stored ticket is " + ticket);
        CommonUtils.pbTicket = ticket;

    }

    @And("user enters Problem Ticket")
    public void userEntersProblemTicket() {
        problemRecordPage.enterTicket(ticket);
        System.out.println("user entered problem ticket" + ticket);
    }

    @And("user clicks Search on ticket search")
    public void userClicksSearchOnTicketSearch() {
        problemRecordPage.clickSearchButton();
        problemRecordPage.wait(5000);

    }

    @When("user clicks on Ack button")
    public void userClicksOnAckButton() {
        problemRecordPage.clickAckButton();
        problemRecordPage.wait(5000);
    }

    @Then("problem ticket status should be under investigation")
    public void problemTicketStatusShouldBeUnderInvestigation() {
        Assert.assertEquals(problemRecordPage.getStatusText(), "Under Investigation", "Ticket status is not Under Investigation");

    }

    //TO_DO should be changed by using checkIfControlIsReadonly method from base class
    @When("user tries to change the status to {string}")
    public void userTriesToChangeTheStatusTo(String status) {
        try {
            problemRecordPage.selectStatus(status);
        } catch (NullPointerException ex) {
            System.out.println("user is unable to change the status to withdrawn");
        }
    }

    @And("user goes back to login page")
    public void userGoesBackToLoginPage() {
        problemRecordPage.getDriver().findElement(By.xpath("//a[contains(text(),'Return to home page')]")).click();
        problemRecordPage.wait(5000);
    }

    @And("user switches to window {int}")
    public void userSwitchesToWindow(int windowId) {

        CommonUtils.switchToChildWindow(problemRecordPage.getDriver(), windowId);
    }

    @Then("description field should be greyed out should not be able to changed")
    public void descriptionFieldShouldBeGreyedOutShouldNotBeAbleToChanged() {
        System.out.println(problemRecordPage.getDescriptionText());
        Assert.assertTrue(problemRecordPage.getDescriptionTextBoxStatus(), "description is not greyed out");
        Assert.assertEquals(problemRecordPage.getDescriptionText(), "UAT Test1 withdraw after Ack");

    }

    @And("change should also be reflected in the timeline as {string}")
    public void changeShouldAlsoBeReflectedInTheTimelineAs(String message) {
         problemRecordPage.clickTimelineButton();
        boolean containsMessage = problemRecordPage.getTimelineStatus(1).contains(message);
        Assert.assertTrue(containsMessage, "Ticket Status is not displayed on timeline");
    }

    @And("change should also be reflected in the timeline as {string} for OP ticket")
    public void changeShouldAlsoBeReflectedInTheTimelineForOPTicket(String message) {
        message += CommonUtils.opTicket;

        problemRecordPage.clickTimelineButton();
        boolean containsMessage = problemRecordPage.getTimelineStatus(4).contains(message);
        Assert.assertTrue(containsMessage, "Ticket Status is not displayed on timeline");
    }

    @And("change should also be reflected in the timeline as {string} for PB ticket")
    public void changeShouldAlsoBeReflectedInTheTimelineForPBTicket(String message) {
        message += CommonUtils.pbTicket;

        problemRecordPage.clickTimelineButton();
        boolean containsMessage = problemRecordPage.getTimelineStatus(1).contains(message);
        Assert.assertTrue(containsMessage, "Ticket Status is not displayed on timeline");
    }

    @And("change should also be reflected in the timeline as {string} for trouble ticket")
    public void changeShouldAlsoBeReflectedInTheTimelineForOPTicketAs(String message) {
        String[] str = message.split(";");
        str[0] += " " + CommonUtils.pbTicket;

        String newMessage = "";
        for(int i = 0; i< str.length; i++)
        {
            newMessage += str[i];
        }
        System.out.println("Expected timeline status is: " + newMessage);
        problemRecordPage.wait(1000);
        problemRecordPage.selectTab("Timeline");
        boolean containsMessage = problemRecordPage.getTimelineStatus(1).contains(newMessage);
        Assert.assertTrue(containsMessage, "Ticket Status is not displayed on timeline");
    }

    @When("user tries to Ack the ticket but its shouldn't allow")
    public void userTriesAckTheTicketButItsShouldnTAllow() {

        Assert.assertFalse(problemRecordPage.getAckButtonStatus(), "user is able to Ack Ticket");
    }

    @Then("problem ticket status should be assigned")
    public void problemTicketStatusShouldBeAssigned() {

        System.out.println(problemRecordPage.getStatusText());
        Assert.assertEquals(problemRecordPage.getStatusText(), "Assigned", "ticket status is not Assigned");
    }

    // change to try catch if fails
    @When("user tries to change request type as Access Networks:RAN NSN 2G:3G:4G")
    public void userTriesToChangeRequestTypeAsAccessNetworksRANNSNGGG() {

        Assert.assertTrue(problemRecordPage.getRequestTypeDropDownStatus(), "user is able to change request type");

    }

    @Then("request type should be RAN optimization")
    public void requestTypeShouldBeRANOptimization() {
        Assert.assertEquals(problemRecordPage.getRequestTypeText(), "RAN Optimization", "Request type is not RAN Optimization");
        System.out.println(problemRecordPage.getRequestTypeText());

    }

    @Then("user selects impact type as significant:large")
    public void userSelectsImpactTypeAsSignificantLarge() {
        problemRecordPage.selectSignificantLargeDdValue();
    }

    @And("user selects urgency as High")
    public void userSelectsUrgencyAsHigh() {

        problemRecordPage.selectHighDdValue();
    }

    @Then("user validates that priority changes to major")
    public void userValidatesThatPriorityChangesToMajor() {
        System.out.println(problemRecordPage.getPriorityText());
        //Assert.assertEquals(problemRecordPage.getPriorityText(), "Major", "priority is not Major");

    }

    @Then("user clicks on timeline tab")
    public void userClicksOnTimelineTab() {
        problemRecordPage.clickTimelineButton();

    }

    @And("user selects Auto text:Tech bridge closed")
    public void userSelectsAutoTextTechBridgeClosed() {
        problemRecordPage.selectAutoText_TechBridgeClosed();

    }

    @Then("user selects Text template:analysis ongoing")
    public void userSelectsTextTemplateAnalysisOngoing() {
        problemRecordPage.selectTextTemplate_AnalysisOnGoing();

    }

    @And("user clicks on add button")
    public void userClicksOnAddButton() {
        problemRecordPage.clickAddButtonOnTemplate();

    }

    @Then("user selects Actions:Time tracking")
    public void userSelectsActionsTimeTracking() {
        problemRecordPage.selectActions_TimeTracking();

    }

    @And("user selects Activity:Working on ticket")
    public void userSelectsActivityWorkingOnTicket() {
        problemRecordPage.selectActivity_WorkingOnTicket();

    }

    @And("user enters {string} under the minutes field")
    public void userEntersUnderTheMinutesField(String minutes) {
    problemRecordPage.enterMins(minutes);
    }

    @And("user clicks on Ok button")
    public void userClicksOnOkButton() {
        problemRecordPage.clickOkButton();
    }

    @And("user switches to frame")
    public void userSwitchesToFrame() {
        problemRecordPage.switchToFrameByIndex(2);
    }

    @Then("user changes status to investigation complete")
    public void userChangesStatusToInvestigationComplete() {
        problemRecordPage.clickStatusDropDown();
        problemRecordPage.selectInvestigationCompleteDdValue();
    }

    @And("user selects root cause code as Technical:HW error under route cause")
    public void userSelectsRootCauseCodeAsTechnicalHWErrorUnderRouteCause() {
     problemRecordPage.selectRootCauseCodeAs_Technical_HwError();
    }

    @And("user enters route cause details as {string}")
    public void userEntersRouteCauseDetailsAs(String rootCauseDetails) {
        //problemRecordPage.enterText("rootCauseDetails", rootCauseDetails);
    problemRecordPage.enterRootCauseDetails(rootCauseDetails);
    }

    @And("user enters RC found date as current date")
    public void userEntersRCFoundDateAsCurrentDate() {
    problemRecordPage.enterRcFoundDate();
    }

    @When("user changes status to closed")
    public void userChangesStatusToClosed() {
        problemRecordPage.clickStatusDropDown();
        problemRecordPage.selectClosedDdValue();
    }

    @Then("user enters actual finish as current date")
    public void userEntersActualFinishAsCurrentDate() {
        problemRecordPage.enterActualFinishDate();

    }

    @And("user enters decision go no go as current date")
    public void userEntersDecisionGoNoGoAsCurrentDate() {
      problemRecordPage.enterDecisionGoNoGoDate();
    }

    @And("user selects solved under closure code")
    public void userSelectsSolvedUnderClosureCode() {
        problemRecordPage.selectCloserCodeAsSolved();
    }

    @And("user enters solution as {string}")
    public void userEntersSolutionAs(String Text) {
    problemRecordPage.enterSolution(Text);
    }

    @And("user enters solution found date as current date")
    public void userEntersSolutionFoundDateAsCurrentDate() {
     problemRecordPage.enterSolutionFoundDate();
    }

    @And("ticket status should be closed")
    public void ticketStatusShouldBeClosed() {
        String closed= problemRecordPage.getStatusText();
        Assert.assertEquals(closed, "closed", "status is not closed");

    }

    @When("user clicks on clone button")
    public void userClicksOnCloneButton() {
        problemRecordPage.clickCloneButton();
    }

    @And("user selects request type as Access Networks:RAN NSN 2G:3G:4G")
    public void userSelectsRequestTypeAsAccessNetworksRANNSNGGG() {
        problemRecordPage.selectRequestType("Access Networks:RAN NSN 2G/3G/4G", false);
    }


    @And("user selects priority as {string}")
    public void userSelectsPriorityAs(String Major) {
        problemRecordPage.selectPriority(Major);
    }

    @Then("user clicks on attachments under sections")
    public void userClicksOnAttachmentsUnderSections() {
        problemRecordPage.clickAttachments();
    }

    @Then("user should see blank change record search form")
    public void userShouldSeeBlankChangeRecordSearchForm() {
     //Assert.assertNull(problemRecordPage.verifyTicketIsBlank(), "Change record search form is not blank");
    }

    @Then("user should see change record ticket")
    public void userShouldSeeChangeRecordTicket() {
        Assert.assertNotNull(problemRecordPage.verifyTicketIsNotNull());
        problemRecordPage.wait(1000);

    }

    @Then("user should see blank problem search form")
    public void userShouldSeeBlankProblemSearchForm() {
        Assert.assertEquals(problemRecordPage.verifyTicketIsBlank(), "");
    }

    @Then("user should see problem ticket")
    public void userShouldSeeProblemTicket() {
        Assert.assertNotNull(problemRecordPage.verifyTicketIsNotNull());
    }

    @Then("user should see blank known error search form")
    public void userShouldSeeBlankKnownErrorSearchForm() {
        problemRecordPage.verifyTicketIsBlank();
    }

    @Then("user should see known error ticket")
    public void userShouldSeeKnownErrorTicket() {
        Assert.assertNotNull(problemRecordPage.verifyTicketIsNotNull());
    }

    @When("user enters {string} in the source field")
    public void userEntersInTheSourceField(String arg0) {
        problemRecordPage.enterSource(arg0);
    }

    @Then("user should see blank trouble search form")
    public void userShouldSeeBlankTroubleSearchForm() {
        Assert.assertEquals(problemRecordPage.verifyTicketIsBlank(), "");
    }

    @Then("user should see trouble ticket")
    public void userShouldSeeTroubleTicket() {
        Assert.assertNotNull(problemRecordPage.verifyTicketIsNotNull());
    }

    @And("user clicks on add button under internal")
    public void userClicksOnAddButtonUnderInternal() {
        problemRecordPage.clickAddButton();
    }

    @Then("user selects summary dropdown as {string}")
    public void userSelectsSummaryDropdownAs(String arg0) {
     problemRecordPage.selectSummaryDropDownAs(arg0);
    }

    @And("user enters attachment description as {string}")
    public void userEntersAttachmentDescriptionAs(String arg0) {
        problemRecordPage.enterDescription_Attachment_OnFrame(arg0);
    }

    @Then("user clicks on add button in attachment window")
    public void userClicksOnAddButtonInAttachmentWindow() {
        problemRecordPage.clickAdd_AttachmentOnFrame();
    }

    @When("user clicks on choose file button")
    public void userClicksOnChooseFileButton() {
        problemRecordPage.clickonChooseFile_OnFrame();
    }

    @Then("user searches for attachment and adds attachment to ticket")
    public void userSearchesForAttachmentAndAddsAttachmentToTicket() {
        CommonUtils.uploadFile("C:\\Users\\mahesh vaddegani\\Documents\\attachment\\attachment.doc");
    }

    @Then("user clicks on attachment ok button")
    public void userClicksOnAttachmentOkButton() {
    problemRecordPage.clickOk_AttachmentOnFrame();
    }

    @And("user clicks on save button on attachment window")
    public void userClicksOnSaveButtonOnAttachmentWindow() {
        problemRecordPage.clickSave_AttachmentOnFrame();
    }

    @And("user selects request type as {string} in problem form")
    public void userSelectsRequestTypeAsInProblemForm(String requestType) {
        problemRecordPage.selectRequestType(requestType, false);
        problemRecordPage.wait(1000);
    }

    @And("user selects request type as {string} on Problem record page")
    public void userSelectsRequestTypeAsOnProblemRecordPage(String requestType) {
        problemRecordPage.selectRequestType(requestType, false);
        problemRecordPage.wait(1000);
    }

    @Then("a known error ticket should appear in new tab")
    public void aKnownErrorTicketShouldAppearInNewTab() {
        System.out.println(problemRecordPage.getPageTitle());
        problemRecordPage.verifyTicketIsNotNull();
    }

    @Then("user enters {string} in the work around field")
    public void userEntersInTheWorkAroundField(String arg0) {
        problemRecordPage.enterWorkAround(arg0);
    }

    @Then("an error message {string} should appear with red boarder around to date field")
    public void anErrorMessageShouldAppearWithRedBoarderAroundToDateField(String arg0) {
       // Assert.assertTrue(problemRecordPage.validateErrorMessage(arg0));
    }

    @And("an error message {string} should appear with red boarder around reason field")
    public void anErrorMessageShouldAppearWithRedBoarderAroundReasonField(String arg0) {
      //  Assert.assertTrue(problemRecordPage.validateErrorMessage(arg0));
    }

    @And("user selects reason dropdown as {string}")
    public void userSelectsReasonDropdownAs(String arg0) {
        problemRecordPage.selectReasonAs(arg0);
    }


    @When("user clicks on release button")
    public void userClicksOnReleaseButton() {
        problemRecordPage.clickRelease();
        problemRecordPage.wait(2000);
    }

    @And("user enters date value as {int} minutes in the future")
    public void userEntersDateValueAsMinutesInTheFuture(int arg0) {
        problemRecordPage.enterToDate(CommonUtils.getDateTime("MM/dd/yyyy HH:mm:ss", "Europe/Stockholm", arg0));
    }

    @Then("user enters date value as a week in the future")
    public void userEntersDateValueAsAWeekInTheFuture() {
        problemRecordPage.enterToDate(CommonUtils.getDateTime("MM/dd/yyyy HH:mm:ss", "Europe/Stockholm", 10080));

    }

    @Then("user waits for {int} minutes")
    public void userWaitsForMinutes(int arg0) {
        problemRecordPage.wait(240000);
    }
    @Then("user waits for two minutes")
    public void userWaitsForTwoMinutes() {
        problemRecordPage.wait(120000);
    }

    @And("user enters request start date as {string} one day in the future")
    public void userEntersRequestStartDateAsOneDayInTheFuture(String arg0) {
        problemRecordPage.enterStartDateAsTodayMidnight(0);

    }

    @And("user enters request end date as {string} one day in the future")
    public void userEntersRequestEndDateAsOneDayInTheFuture(String arg0) {
        problemRecordPage.enterEndDateAsTodayMidnight(120);
    }

    @Then("select target request window should open")
    public void selectTargetRequestWindowShouldOpen() {
        //dummy step, doesn't need verification
    }

    @When("user clicks on assignment under sections")
    public void userClicksOnAssignmentUnderSections() {
        problemRecordPage.clickAssignments();

    }

    @Then("at least one problem ticket should appear in the list")
    public void atLeastOneProblemTicketShouldAppearInTheList() {
        Assert.assertTrue(problemRecordPage.verifyProblemTickets());
    }


    @When("user verifies PM office tab visibility")
    public void userVerifiesPMOfficeTabVisibility() {
        //dummy step
    }

    @Then("PM office tab should not be visible")
    public void pmOfficeTabShouldNotBeVisible() {
    }

    @Then("multiple statuses {string} should be available in {string} dropdown")
    public void multipleStatusesShouldBeAvailableInDropdown(String statuses, String dropdownName) {
        problemRecordPage.verifyDropdownValues(statuses, dropdownName, "notreadonly");

    }

    @Then("multiple statuses {string} should be available in {string} dropdown readonly")
    public void multipleStatusesShouldBeAvailableInDropdownReadOnly(String statuses, String dropdownName) {
        problemRecordPage.verifyDropdownValues(statuses, dropdownName, "readonly");

    }

    @When("user verifies for all entries in status dropdown")
    public void userVerifiesForAllEntriesInStatusDropdown() {
        //dummy step
    }

    @Then("user selects assigned profile dropdown as {string}")
    public void userSelectsAssignedProfileDropdownAs(String arg0) {
        problemRecordPage.selectAssignedProfile(arg0);
    }

    @Then("change should also be reflected in the timeline {string}")
    public void changeShouldAlsoBeReflectedInTheTimeline(String message) {
        problemRecordPage.clickTimelineButton();
        String timelineStatus = problemRecordPage.getTimelineStatus(1);
        Assert.assertTrue(problemRecordPage.verifyTimelineUpdate(timelineStatus, message), "Ticket Status is not displayed on timeline");

    }

    @And("user {string} is listed as the assigned profile")
    public void userIsListedAsTheAssignedProfile(String arg0) {
        Assert.assertEquals(problemRecordPage.getAssigneeText(), arg0);
    }

    @And("user clicks on save button under interested parties frame")
    public void userClicksOnSaveButtonUnderInterestedPartiesFrame() {
        problemRecordPage.clickOkButton();
        problemRecordPage.wait(2000);
    }


    @And("user enters {string} in the analysis team member one field")
    public void userEntersInTheAnalysisTeamMemberOneField(String arg0) {
        problemRecordPage.enterAnalysisTeamMember1(arg0);
    }

    @And("user validates {string} is listed under analysis team member one field")
    public void userValidatesIsListedUnderAnalysisTeamMemberOneField(String arg0) {
        Assert.assertEquals(problemRecordPage.getAnalysisTeamMember1(), arg0);
    }

    @And("user clicks on remove button")
    public void userClicksOnRemoveButton() {
        problemRecordPage.clickRemoveButton();
    }

    @When("user selects root cause code as {string}")
    public void userSelectsRootCauseCodeAs(String arg0) {
        problemRecordPage.selectRootCauseCode(arg0);
    }

    @When("user selects closure code as {string}")
    public void userSelectsClosureCodeAs(String arg0) {
        problemRecordPage.selectRootCauseCode(arg0);
    }

    @When("user selects impact type as {string}")
    public void userSelectsImpactTypeAs(String arg0) {
        problemRecordPage.selectImpactType(arg0);
    }

    @And("user selects urgency as {string}")
    public void userSelectsUrgencyAs(String arg0) {
        problemRecordPage.selectUrgency(arg0);
    }

    @Then("priority should be {string}")
    public void priorityShouldBe(String arg0) {
        problemRecordPage.wait(500);
        System.out.println(problemRecordPage.getPriorityText());
        Assert.assertEquals(problemRecordPage.getPriorityText(), arg0);
    }

    @When("user highlights present user under add interested party")
    public void userHighlightsPresentUser() {
        problemRecordPage.highlightUser();

    }

    @Then("problem initiator user should be listed under interested parties tab")
    public void problemInitiatorUserShouldBeListedUnderInterestedPartiesTab() {
    Assert.assertTrue(problemRecordPage.verifyUserListedUnderInterestedParty());
    }

    @Then("user should see problem initiator listed as analysis team member one as {string}")
    public void userShouldSeeProblemInitiatorListedAsAnalysisTeamMemberOneAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getAnalysisTeamMember1(),arg0);

    }

    @And("user enters {string} in the information field")
    public void userEntersInTheInformationField(String arg0) {
        problemRecordPage.enterInformation_restrictedInformation(arg0);
    }

    @Then("user validates text availability within information field")
    public void userValidatesTextAvailabilityWithinInformationField() {
        Assert.assertNotNull(problemRecordPage.getInformationText_restrictedInformation());
    }

    @And("user selects assignee as {string} by using alphabet {string} key up {int} times")
    public void userSelectsAssigneeAsByUsingAlphabetKeyUpTimes(String assignee, String alphabet, int keyupTimes) {
        problemRecordPage.selectAssignee(assignee, alphabet, keyupTimes);
    }

    @And("user validates {string} tab is not visible")
    public void userValidatesTabIsNotVisible(String tabName) {
        Assert.assertFalse(problemRecordPage.isRestrictedTabDisplayed(tabName));

    }

    @But("user should be unable to change the ticket status")
    public void userShouldBeUnableToChangeTheTicketStatus() {
        Assert.assertTrue(problemRecordPage.isStatusDropDownReadOnly());

    }

    @But("ticket field should be grayed out")
    public void ticketFieldShouldBeGrayedOut() {
        Assert.assertTrue(problemRecordPage.isStatusDropDownReadOnly());
        Assert.assertTrue(problemRecordPage.getDescriptionTextBoxStatus());
        Assert.assertTrue(problemRecordPage.getRequestTypeDropDownStatus());
    }

    @Then("user validates BU availability")
    public void userValidatesBUAvailability() {
        Assert.assertTrue(problemRecordPage.verifyDenmarkEnable());
        Assert.assertTrue(problemRecordPage.verifySwedenEnable());
        Assert.assertTrue(problemRecordPage.verifyLithuniaEnable());
        Assert.assertTrue(problemRecordPage.verifyUnknownEnable());
        Assert.assertTrue(problemRecordPage.verifyInternalEnable());
        Assert.assertTrue(problemRecordPage.verifyTeliaCarrierEnable());
        Assert.assertTrue(problemRecordPage.verifyNorwayEnable());
        Assert.assertTrue(problemRecordPage.verifyEstoniaEnable());
        Assert.assertTrue(problemRecordPage.verifyFinlandEnable());

    }

    @And("user clicks on internal checkbox under affected BU's")
    public void userClicksOnInternalCheckboxUnderAffectedBUS() {
        problemRecordPage.clickInternalCheckBox();
    }

    @And("user selects impact as {string}")
    public void userSelectsImpactAs(String arg0) {
        problemRecordPage.selectImpact(arg0);
    }

    @Then("trouble ticket should be in list of linked items")
    public void troubleTicketShouldBeInListOfLinkedItems() {
        problemRecordPage.validateLinkedItemsAvailability();
    }

    @And("change ticket should be in list of linked items")
    public void changeTicketShouldBeInListOfLinkedItems() {
        problemRecordPage.validateLinkedItemsAvailability();
    }

    @And("user validates route cause code availability")
    public void userValidatesRouteCauseCodeAvailability() {
       // Assert.assertTrue(false);
    }

    @Then("mandatory fields should be indicated in bold")
    public void mandatoryFieldsShouldBeIndicatedInBold() {
       // Assert.assertTrue(false);
    }
    @Then("PM office tab should be visible")
    public void pmOfficeTabShouldBeVisible() {
        Assert.assertTrue(problemRecordPage.IsTabDisplayed("PM Office"));
    }

    @When("user enters {string} in the problem review field")
    public void userEntersInTheProblemReviewField(String arg0) {
        problemRecordPage.enterProblemReviewField(arg0);
    }

    @And("problem review field should be updated with the text {string}")
    public void problemReviewFieldShouldBeUpdatedWithTheText(String arg0) {
        Assert.assertEquals(problemRecordPage.getProblemReviewFieldText(), arg0);
    }

    @And("user clicks on yes button on warning window")
    public void userClicksOnYesButtonOnWarningWindow() {
        problemRecordPage.switchToFrameByIndex(2);
        problemRecordPage.clickYesOnFrame();
    }

    @And("user clicks on yes button under diagnosis")
    public void userClicksOnYesButtonUnderDiagnosis() {
        problemRecordPage.clickYesOnFrame();
        problemRecordPage.wait(2000);
    }

    @And("user clicks on yes button on warning window not in frame")
    public void userClicksOnYesButtonOnWarningWindowNotInFrame() {
        problemRecordPage.clickYes();
        problemRecordPage.wait(3000);
    }

    @And("user enters ticket previously created")
    public void userEntersTicketPreviouslyCreated() {
        problemRecordPage.enterTicket(ticket);
        System.out.println("user entered problem ticket" + ticket);
    }

    @And("user validates Save is present")
    public void userValidatesSaveIsPresent() {
        Assert.assertTrue(problemRecordPage.verifyIsSaveIsPresent());
    }

    @Then("user validates sweden and finland checkboxes are selected")
    public void userValidatesSwedenAndFinlandCheckboxesAreSelected() {
      Assert.assertTrue(problemRecordPage.verifyIsSwedenSelected());
        Assert.assertTrue(problemRecordPage.verifyIsFinlandSelected());

    }

    @Then("user validates availability of tabs {string}")
    public void userValidatesAvailabilityOfTabs(String tabs) {
        Assert.assertTrue(problemRecordPage.verifyTabValues(tabs));
    }

    @And("user enters ticket in ticket ID+ field")
    public void userEntersTicketInTicketIDField() {
        problemRecordPage.enterTicketIdPlus(ticket);
    }

    @And("change should also be reflected in the timeline as {string} on row {int}")
    public void changeShouldAlsoBeReflectedInTheTimelineAsOnRow(String message, int row) {
            problemRecordPage.clickTimelineButton();
            boolean containsMessage = problemRecordPage.getTimelineStatus(row).contains(message);
            Assert.assertTrue(containsMessage, "Ticket Status is not displayed on timeline");
        }

    @And("user clicks attachments under sections")
    public void userClicksAttachmentsUnderSections() {
        problemRecordPage.clickOnAttachments();
    }
}

