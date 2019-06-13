package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.testng.Assert;
import pageObjects.OWF_ProblemRecordPage;
import utils.CommonUtils;


public class OWF_ProblemRecordPageSteps {
    public String problemTicket;

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

        Assert.assertTrue(problemRecordPage.validateErrorMessage(errorMessage), "Error message didn't appear");
    }

    @When("user clicks on sweden checkbox under affected BU's")
    public void userClicksOnSwedenCheckboxUnderAffectedBUS() {
        problemRecordPage.clickSwedenCheckBox();
       // problemRecordPage.clickSaveButton();
    }

    @Then("multiple error messages should appear with red boarder around fields")
    public void multipleErrorMessagesShouldAppearWithRedBoarderAroundFields() {
        Assert.assertTrue(problemRecordPage.validateMultipleErrorMessages(5), "Multiple error messages are not shown");
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
        //Assert.assertTrue(problemRecordPage.validateErrorMessage(errorMessage), "Error message didn't appear");
    }

    @When("user selects withdrawn reason as false alarm and clicks save")
    public void userSelectsWithdrawnReasonAsFalseAlarmAndClicksSave() {
        problemRecordPage.selectWithdrawnReason_FalseAlarmDropDown();
        problemRecordPage.clickSaveButton();

    }

    @And("user should see confirmation message and clicks on yes button")
    public void userShouldSeeConfirmationMessageAndClicksOnYesButton() {
        problemRecordPage.wait(1000);
        problemRecordPage.switchToFrameByIndex(2);
        problemRecordPage.wait(1000);
        problemRecordPage.clickYesOnFrame();
    }

    @And("user selects impact type as moderate:limited")
    public void userSelectsImpactTypeAsModerateLimited() {
        problemRecordPage.clickImpactDropDown();
        problemRecordPage.selectModerateLimitedDdValue();
    }

    @And("user gets ticket value")
    public void userGetsTicketValue() {
        problemTicket = problemRecordPage.getProblemTicket();
        System.out.println("Stored problem ticket is " + problemTicket);

    }

    @And("user enters Problem Ticket")
    public void userEntersProblemTicket() {
        problemRecordPage.enterTicket(problemTicket);
        System.out.println("user entered problem ticket" + problemTicket);
    }

    @And("user clicks Search on ticket search")
    public void userClicksSearchOnTicketSearch() {
        problemRecordPage.clickSearchButton();
        problemRecordPage.wait(3000);

    }

    @When("user clicks on Ack button")
    public void userClicksOnAckButton() {
        problemRecordPage.clickAckButton();
        problemRecordPage.wait(3000);
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
        boolean containsMessage = problemRecordPage.getTimelineStatus().contains(message);
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
     //Assert.assertNull(problemRecordPage.verifyTicketIsnull(), "Change record search form is not blank");
    }

    @Then("user should see change record ticket")
    public void userShouldSeeChangeRecordTicket() {

        Assert.assertNotNull(problemRecordPage.verifyTicketIsNotNull());

    }

    @Then("user should see blank problem search form")
    public void userShouldSeeBlankProblemSearchForm() {
        Assert.assertNull(problemRecordPage.verifyTicketIsnull());
    }

    @Then("user should see problem ticket")
    public void userShouldSeeProblemTicket() {
        Assert.assertNotNull(problemRecordPage.verifyTicketIsNotNull());
    }

    @Then("user should see blank known error search form")
    public void userShouldSeeBlankKnownErrorSearchForm() {
        problemRecordPage.verifyTicketIsnull();
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
        problemRecordPage.verifyTicketIsnull();
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
}
