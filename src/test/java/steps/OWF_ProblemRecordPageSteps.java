package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import org.openqa.selenium.By;
import org.testng.Assert;
import pageObjects.BaseRecordPage;
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

    }

    @Then("multiple error messages should appear with red boarder around fields")
    public void multipleErrorMessagesShouldAppearWithRedBoarderAroundFields() {
        Assert.assertTrue(problemRecordPage.validateMultipleErrorMessages(), "Multiple error messages are not shown");

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
        problemRecordPage.wait(7000);

    }

    @When("user clicks on Ack button")
    public void userClicksOnAckButton() {
        try {
            problemRecordPage.clickAckButton_problemRecord();
            problemRecordPage.clickOkOnWarningMessage();
        } catch (Exception e) {

        }

        problemRecordPage.wait(5000);
    }

    @Then("problem ticket status should be under investigation")
    public void problemTicketStatusShouldBeUnderInvestigation() {
        Assert.assertEquals(problemRecordPage.getStatusText(), "Under Investigation", "Ticket status is not Under Investigation");

    }

    @When("user tries to change the status to {string}")
    public void userTriesToChangeTheStatusTo(String status) {
        try {
            problemRecordPage.selectStatus(status);
        } catch (NullPointerException ex) {
            System.out.println("user is unable to change the status to withdrawn");
        }
    }

    @When("user verifies status is read only")
    public void userVerifiesStatusIsReadOnly() {
        Assert.assertTrue(problemRecordPage.verifyStatusDdIsReadonly());
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
        try {
            problemRecordPage.selectTab("Timeline");
        } catch (Exception e) {

        }

        problemRecordPage.clickRefresh_timeline();
        System.out.println("Actual Timeline Message is :" + message);
        boolean containsMessage = problemRecordPage.getTimelineStatus(1).contains(message);
        Assert.assertTrue(containsMessage, "Ticket Status is not displayed on timeline");
    }

    @And("change should be reflected in the timeline {string}")
    public void changeShouldBeReflectedInTheTimeline(String message) {
        message = message.replace('|', '"');
        problemRecordPage.clickTimelineButton();
        System.out.println("Actual Timeline Message is :" + message);
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

    @And("change should also be reflected in the timeline as {string} for trouble ticket in row {int}")
    public void changeShouldAlsoBeReflectedInTheTimelineForOPTicketAs(String message, int rowNum) {
        String[] str = message.split(";");
        str[0] += " " + CommonUtils.pbTicket;

        String newMessage = "";
        for (int i = 0; i < str.length; i++) {
            newMessage += str[i];
        }
        System.out.println("Expected timeline status is: " + newMessage);
        problemRecordPage.wait(1000);
        try {
            problemRecordPage.selectTab("Timeline");
        } catch (Exception e) {
            problemRecordPage.wait(1000);
            System.out.println("Try again to click on Timeline Tab");
            problemRecordPage.selectTab("Timeline");
        }

        boolean containsMessage = problemRecordPage.getTimelineStatus(rowNum).contains(newMessage);
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
    @When("user tries to change request type as Access Networks:RAN_Telia_Wifi NSN 2G:3G:4G")
    public void userTriesToChangeRequestTypeAsAccessNetworksRANNSNGGG() {

        Assert.assertTrue(problemRecordPage.getRequestTypeDropDownStatus(), "user is able to change request type");

    }

    @Then("request type should be RAN_Telia_Wifi optimization")
    public void requestTypeShouldBeRANOptimization() {
        Assert.assertEquals(problemRecordPage.getRequestTypeText(), "Access Networks | RAN_Telia_Wifi Optimization", "Request type is not RAN_Telia_Wifi Optimization");
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
        int size = problemRecordPage.getDriver().findElements(By.tagName("iframe")).size();
        problemRecordPage.switchToFrameByIndex(size - 1);
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
        String closed = problemRecordPage.getStatusText();
        Assert.assertEquals(closed, "closed", "status is not closed");

    }

    @When("user clicks on clone button")
    public void userClicksOnCloneButton() {
        problemRecordPage.clickCloneButton();
    }

    @And("user selects request type as Access Networks:RAN_Telia_Wifi NSN 2G:3G:4G")
    public void userSelectsRequestTypeAsAccessNetworksRANNSNGGG() {
        problemRecordPage.selectRequestType("Access Networks:RAN_Telia_Wifi NSN 2G/3G/4G", false);
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
        String projectPath = System.getProperty("user.dir");
        System.out.println("Project path is :" + projectPath);
        String fullFilePath = projectPath + "\\src\\test\\resources\\Test Attachments\\other files\\attachement.doc.txt";
        System.out.println("Full file path is : " + fullFilePath);
        CommonUtils.uploadFile(fullFilePath);
        problemRecordPage.wait(1000);
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
        int newDelay = arg0 * 60000;
        problemRecordPage.wait(newDelay);
    }

    @Then("user waits for two minutes")
    public void userWaitsForTwoMinutes() {
        problemRecordPage.wait(120000);
    }

    @And("user enters request start date as {string} one day in the future")
    public void userEntersRequestStartDateAsOneDayInTheFuture(String arg0) {
        problemRecordPage.enterStartDateAs(CommonUtils.getDateAsTodayMidnight(0));

    }

    @And("user enters request end date as {string} one day in the future")
    public void userEntersRequestEndDateAsOneDayInTheFuture(String arg0) {
        problemRecordPage.enterEndDateAs(CommonUtils.getDateAsTodayMidnight(120));
    }

    @Then("select target request window should open")
    public void selectTargetRequestWindowShouldOpen() {
        //dummy step, doesn't need verification
    }

    @When("user clicks on assignment under sections")
    public void userClicksOnAssignmentUnderSections() {
        problemRecordPage.wait(500);
        problemRecordPage.clickAssignments_underSections();

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
        Assert.assertTrue(problemRecordPage.verifyDropdownValues(statuses, dropdownName, "notreadonly"));

    }

    @Then("multiple statuses {string} should be available in {string} dropdown readonly")
    public void multipleStatusesShouldBeAvailableInDropdownReadOnly(String statuses, String dropdownName) {
        Assert.assertTrue(problemRecordPage.verifyDropdownValues(statuses, dropdownName, "readonly"));

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
        problemRecordPage.selectClosureCode(arg0);
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
        Assert.assertEquals(problemRecordPage.getAnalysisTeamMember1(), arg0);

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

    @And("user clicks save button")
    public void userClicksSaveButton() {
        problemRecordPage.clickSave();

    }

    @When("user changes status to {string} on problem record page")
    public void userChangesStatusToOnProblemRecordPage(String arg0) {
        try {
            problemRecordPage.selectStatus_problemRecord(arg0);
        } catch (Exception e) {
            System.out.println("Not able to change the status... Try again");
            try {
                problemRecordPage.selectStatus_problemRecord(arg0);
            } catch (Exception e2) {

            }
        }

    }

    @And("user enters {string} in assignee")
    public void userEntersInAssignee(String assigneeName) {
        problemRecordPage.enterAssignee(assigneeName);
    }

    @And("user enters {string} in status")
    public void userEntersInStatus(String arg0) {
        problemRecordPage.enterStatus(arg0);
    }

    @Then("user highlights {string} Gillgren")
    public void userHighlightsGillgren(String arg0) {
        problemRecordPage.clickTableElement_addInterestedParty("First Name", arg0);
    }

    @Then("user validates {string} Gillgren is listed as an interested party")
    public void userValidatesGillgrenIsListedAsAnInterestedParty(String arg0) {
        Assert.assertEquals(problemRecordPage.getText("First Name", 2), arg0);
    }

    @And("user waits")
    public void userWaits() {
        problemRecordPage.wait(3000);
    }

    @And("user highlights user {string}")
    public void userHighlightsUser(String arg0) {
        problemRecordPage.clickTableElement_linkedItems("Login Name", arg0);

    }

    @Then("user Thgi00 shouldn't be listed anymore")
    public void userThgiShouldnTBeListedAnymore() {
        Assert.assertFalse(problemRecordPage.verifyUserListedUnderInterestedParty());
    }

    @And("user should see confirmation message for impact clear and user clicks yes")
    public void userShouldSeeConfirmationMessageForImpactClearAndUserClicksOk() {
        problemRecordPage.clickYes_impactClear();
    }


    @When("user changes status as Investigation Complete on problem record page")
    public void userChangesStatusAsInvestigationCompleteOnProblemRecordPage() {
        try {
            problemRecordPage.selectStatus_problemRecord("Investigation Complete");
        } catch (Exception e) {
            userWaits();
            problemRecordPage.selectStatus_problemRecord("Investigation Complete");

        }

    }

    @Then("user validates {string} Gillgren is listed as an interested party in row {int}")
    public void userValidatesGillgrenIsListedAsAnInterestedPartyInRow(String arg0, int arg1) {
        Assert.assertEquals(problemRecordPage.getText("First Name", arg1), arg0);
    }

    @Then("user validates Description* isn't readonly")
    public void userValidatesDescriptionIsnTReadonly() {
        Assert.assertFalse(problemRecordPage.verifyDescriptionIsReadOnly());
    }

    @Then("user validates Title isn't readonly")
    public void userValidatesTitleIsnTReadonly() {
        Assert.assertFalse(problemRecordPage.verifyTitleIsReadOnly());
    }

    @And("user validates Request Category isn't readonly")
    public void userValidatesRequestCategoryIsnTReadonly() {
        Assert.assertFalse(problemRecordPage.verifyRequestCategoryIsReadOnly());
    }

    @And("user validates Reason isn't readonly")
    public void userValidatesReasonIsnTReadonly() {
        Assert.assertFalse(problemRecordPage.verifyReasonIsReadOnly());
    }

    @And("user validates Priority isn't readonly")
    public void userValidatesPriorityIsnTReadonly() {
        Assert.assertFalse(problemRecordPage.verifyPriorityIsReadOnly());
    }

    @And("user validates Implementation isn't readonly")
    public void userValidatesImplementationIsnTReadonly() {
        Assert.assertFalse(problemRecordPage.verifyImplementationIsReadOnly());
    }

    @And("user validates Test Plan isn't readonly")
    public void userValidatesTestPlanIsnTReadonly() {
        Assert.assertFalse(problemRecordPage.verifyTestPlanIsReadOnly());
    }

    @And("user validates Rollback isn't readonly")
    public void userValidatesRollbackIsnTReadonly() {
        Assert.assertFalse(problemRecordPage.verifyRollbackIsReadOnly());
    }

    @When("user enters attachment summary as {string}")
    public void userEntersAttachmentSummaryAs(String arg0) {
        problemRecordPage.enterSummary_attachments(arg0);
    }

    @And("user searches for {string} attachment and adds it")
    public void userSearchesForAttachmentAndAddsIt(String filePath) {
        String projectPath = System.getProperty("user.dir");
        System.out.println(projectPath);
        String fullFilePath = projectPath + "\\src\\test\\resources\\" + filePath;
        System.out.println(fullFilePath);
        CommonUtils.uploadFile(fullFilePath);
        problemRecordPage.wait(2000);
        //CommonUtils.uploadFile(arg0);
        //problemRecordPage.wait(2000);
    }

    @Then("user validates Category as {string}")
    public void userValidatesCategoryAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getCategory(), arg0);
    }

    @And("user validates type as {string}")
    public void userValidatesTypeAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getType(), arg0);
    }

    @And("user validates item as {string}")
    public void userValidatesItemAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getItem(), arg0);
    }

    @And("user adds attachment {string}")
    public void userAddsAttachement(String filePath) {

        String fullFilePath = System.getProperty("user.dir" + "\\src\\test\\resources\\TestAttachments\\TestCaseAttachments" + filePath);
        System.out.println(fullFilePath);
        CommonUtils.uploadFile(fullFilePath);
        problemRecordPage.wait(2000);
    }

    @And("user adds attachment and verifies under {string}")
    public void userAddsAttachmentAndVerifies(String type, DataTable attachments) {
        problemRecordPage.addAttachmentsAndVerify(attachments, type);
    }

    @Then("user validates Title is readonly")
    public void userValidatesTitleIsReadonly() {
        Assert.assertTrue(problemRecordPage.verifyTitleIsReadOnly());
    }

    @And("user validates Request Category is readonly")
    public void userValidatesRequestCategoryIsReadonly() {
        Assert.assertTrue(problemRecordPage.verifyRequestCategoryIsReadOnly());
    }

    @And("user validates Reason is readonly")
    public void userValidatesReasonIsReadonly() {
        Assert.assertTrue(problemRecordPage.verifyReasonIsReadOnly());
    }

    @And("user validates Priority is readonly")
    public void userValidatesPriorityIsReadonly() {
        Assert.assertTrue(problemRecordPage.verifyPriorityIsReadOnly());
    }

    @And("user validates Implementation is readonly")
    public void userValidatesImplementationIsReadonly() {
        Assert.assertTrue(problemRecordPage.verifyImplementationIsReadOnly());
    }

    @And("user validates Test Plan is readonly")
    public void userValidatesTestPlanIsReadonly() {
        Assert.assertTrue(problemRecordPage.verifyTestPlanIsReadOnly());
    }

    @And("user validates Rollback is readonly")
    public void userValidatesRollbackIsReadonly() {
        Assert.assertTrue(problemRecordPage.verifyRollbackIsReadOnly());
    }

    @And("user validates ack button is disabled")
    public void userValidatesAckButtonIsDisabled() {
        Assert.assertFalse(problemRecordPage.getAckButtonStatus(), "user is able to Ack Ticket");
    }

    @And("user validates save is enabled")
    public void userValidatesSaveIsEnabled() {
        Assert.assertTrue(problemRecordPage.isSaveButtonEnabled());
    }

    @Then("request type should be read only")
    public void requestTypeShouldBeReadOnly() {
        problemRecordPage.verifyRequestTypeDdIsReadonly();
    }


    @And("user validates finland as affected BU")
    public void userValidatesFinlandAsAffectedBU() {
        Assert.assertTrue(problemRecordPage.verifyFinlandIsSelectedAsAffectedBu());
    }


    @And("user validates Impact as {string}")
    public void userValidatesImpactAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getImpact(), arg0);
    }

    @Then("user validates urgency as {string}")
    public void userValidatesUrgencyAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getUrgency(), arg0);
    }

    @Then("user validates root cause code is {string}")
    public void userValidatesRootCauseCodeIs(String arg0) {
        Assert.assertEquals(problemRecordPage.getRootCauseCode(), arg0);
    }

    @And("user clicks on private radio button")
    public void userClicksOnPrivateRadioButton() {
        problemRecordPage.clickPrivateRadioButton();
    }

    @And("user clicks refresh button under linked items")
    public void userClicksRefreshButtonUnderLinkedItems() {
        problemRecordPage.clickRefresh();
    }

    @And("user validates root cause details as {string}")
    public void userValidatesRootCauseDetailsAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getRootCauseDetails(), arg0);
    }

    @Then("user validates service affected as {string}")
    public void userValidatesServiceAffectedAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getServiceEffectedText(), arg0);
    }

    @And("user validates estimated ready time as {string}")
    public void userValidatesEstimatedReadyTimeAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getEstimatedReady(),arg0);
    }

    @Then("user validates actual finish as {string}")
    public void userValidatesActualFinishAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getActualFinish(),arg0);
    }

    @And("user validates decision go no go as {string}")
    public void userValidatesDecisionGoNoGoAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getDecisionGoNoGo(),arg0);
    }

    @Then("user validates workaround as {string}")
    public void userValidatesWorkaroundAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getWorkaround(),arg0);
    }

    @And("user validates RC found date as {string}")
    public void userValidatesRCFoundDateAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getRcFoundDate(),arg0);
    }

    @Then("user validates model as {string}")
    public void userValidatesModelAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getModel(),arg0);
    }

    @Then("user validates location id as {string}")
    public void userValidatesLocationIdAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getLocationIdPlus(),arg0);
    }

    @And("user validates location name as {string}")
    public void userValidatesLocationNameAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getLocationNamePlus(),arg0);
    }

    @Then("user validates region id as {string}")
    public void userValidatesRegionIdAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getRegionId(),arg0);
    }

    @And("user validates region name as {string}")
    public void userValidatesRegionNameAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getRegionName(),arg0);
    }

    @Then("user validates latitude as {string}")
    public void userValidatesLatitudeAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getLatitude(),arg0);
    }

    @And("user validates longitude as {string}")
    public void userValidatesLongitudeAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getLongitude(),arg0);  
    }

    @And("user validates x degree as {string}")
    public void userValidatesXDegreeAs(String arg0) {
        Assert.assertEquals(problemRecordPage.get_X_Degree(),arg0);
    }

    @And("user validates y degree as {string}")
    public void userValidatesYDegreeAs(String arg0) {
        Assert.assertEquals(problemRecordPage.get_Y_Degree(),arg0);  
    }

    @Then("user validates location details as {string}")
    public void userValidatesLocationDetailsAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getLocationDetails(),arg0);
    }

    @And("user validates reassignment count as {string}")
    public void userValidatesReassignmentCountAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getReassignmentCount(),arg0);
    }

    @Then("user validates vendor name as {string}")
    public void userValidatesVendorNameAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getVendorName(),arg0);
    }

    @And("user validates onsite engineers as {string}")
    public void userValidatesOnsiteEngineersAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getOnsiteEngineer(),arg0);
    }

    @Then("user validates account number as {string}")
    public void userValidatesAccountNumberAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getAccountNumber(),arg0);
    }

    @And("user validates telephone number as {string}")
    public void userValidatesTelephoneNumberAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getTelephoneNumber(),arg0);
    }

    @Then("user validates hours of operation as {string}")
    public void userValidatesHoursOfOperationAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getHoursOfOperations(),arg0);
    }

    @And("user validates vendor ref as {string}")
    public void userValidatesVendorRefAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getVendorRef(),arg0);
    }

    @And("user validates onsite contact as {string}")
    public void userValidatesOnsiteContactAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getOnsiteContact(),arg0);
    }

    @Then("user validates travel time as {string}")
    public void userValidatesTravelTimeAs(String arg0) {
        Assert.assertEquals(problemRecordPage.getTravelTime(),arg0);
    }

    @When("user unticks all affected BU")
    public void userUnticksAllAffectedBUS() {
        problemRecordPage.unTickAllEffectedBu();
    }

    @Then("user validates Sweden is selected as Affected BU")
    public void userValidatesSwedenIsSelectedAsAffectedBU() {
        Assert.assertTrue(problemRecordPage.verifySwedenBuIsSelected());
    }

    @And("user selects {string} as {string}")
    public void userSelectsAs(String DdName, String DdValue) {
        problemRecordPage.selectDropDownNameAndValue(DdName,DdValue, false);
    }

    @Then("user clicks refresh button")
    public void userClicksRefreshButton() {
        problemRecordPage.clickRefresh();
    }

    @Then("user validates all affected BU are selected")
    public void userValidatesAllAffectedBUAreSelected() {
        Assert.assertTrue(problemRecordPage.verifyIsSwedenSelected());
        Assert.assertTrue(problemRecordPage.verifyIsDenmarkSelected());
        Assert.assertTrue(problemRecordPage.verifyIsFinlandSelected());
        Assert.assertTrue(problemRecordPage.verifyIsNorwaySelected());
        Assert.assertTrue(problemRecordPage.verifyIsLithuniaSelected());
        Assert.assertTrue(problemRecordPage.verifyIsEstoniaSelected());
        Assert.assertTrue(problemRecordPage.verifyIsTeliaCarrierSelected());
        Assert.assertTrue(problemRecordPage.verifyIsInternalSelected());
        Assert.assertTrue(problemRecordPage.verifyIsUnknownSelected());


    }

    @When("user creates problem ticket with following details")
    public void userCreatesProblemTicketWithFollowingDetails(DataTable dataTable) {
      problemRecordPage.createProblemTicket(dataTable);

    }

    @Then("user selects category and verifies Type dropdown values then selects Type and verifies item dropdown values")
    public void userSelectsCategoryAndVerifiesTypeDropdownValuesThenSelectsTypeAndVerifiesItemDropdownValues(DataTable dataTable) {
     problemRecordPage.verifyCTI_dropdownValues(dataTable);

    }

    @Then("user selects resolved group and verifies resolved person dropdown values")
    public void userSelectsResolvedGroupAndVerifiesResolvedPersonDropdownValues(DataTable dataTable) {
        problemRecordPage.verifyResolvedGroupAndPerson_dropdownValues(dataTable);

    }

    @When("user clicks on open checkbox under linked items tab")
    public void userClicksOnOpenCheckboxUnderLinkedItemsTab() {
        problemRecordPage.clickOpenCheckBox();
    }

    @When("user clicks on cleared checkbox under linked items tab")
    public void userClicksOnClearedCheckboxUnderLinkedItemsTab() {
     problemRecordPage.clickClearedCheckBox();
    }

    @And("user selects accountable organisation as {string}")
    public void userSelectsAccountableOrganisationAs(String arg0) {
        problemRecordPage.selectAccountable_Org(arg0);
        
    }

    @And("user selects affected organisation as {string}")
    public void userSelectsAffectedOrganisationAs(String arg0) {
        problemRecordPage.selectAffected_Org(arg0);
    }

    @Then("user should see accountable organisation dropdown as mandatory")
    public void userShouldSeeAccountableOrganisationDropdownAsMandatory() {
        Assert.assertTrue(problemRecordPage.isAccountableOrganisationIs_mandatory());
        Assert.assertTrue(problemRecordPage.isAccountableOrganisationIsDisplayed());
    }

    @And("user verifies accountable organisation is not read only")
    public void userVerifiesAccountableOrganisationIsNotReadOnly() {
        Assert.assertFalse(problemRecordPage.IsAccountableOrganisation_IsReadOnly());
    }

    @Then("user should see accountable organisation dropdown as not mandatory")
    public void userShouldSeeAccountableOrganisationDropdownAsNotMandatory() {
        Assert.assertTrue(problemRecordPage.isAccountableOrganisationIs_Not_mandatory());
        Assert.assertTrue(problemRecordPage.isAccountableOrganisationIsDisplayed());
    }
    @And("user gets time value of timeline entry")
    public void userGetsTimeValueOfTimelineEntry() {
        CommonUtils.Timeline_Entry= problemRecordPage.getTimelineStatus(1);
    }

    @Then("user clicks edit affected org button")
    public void userClicksEditAffectedOrgButton() {
        problemRecordPage.clickEditAffectedOrgButton();
    }
}



