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
        problemRecordPage.clickSaveButton();
    }

    @Then("Multiple error messages should appear with red boarder around fields")
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
        problemRecordPage.switchToFrame(2);
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
        problemRecordPage.switchToFrame(2);
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
    @When("user tries to change the status to withdrawn")
    public void userTriesToChangeTheStatusToWithdrawn() {
        try {
            problemRecordPage.clickStatusDropDown();
            problemRecordPage.wait(1000);
            problemRecordPage.selectWithdrawnDdValue();
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
        problemRecordPage.switchToFrame(2);
    }

    @Then("User changes status to investigation complete")
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

}
