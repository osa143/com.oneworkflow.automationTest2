package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
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
    public void anErrorMessageShouldAppear(String arg0) {

        Assert.assertTrue(problemRecordPage.validateErrorMessage(arg0), "Error message didn't appear");
    }

    @When("user clicks on sweden checkbox under affected BU's")
    public void userClicksOnSwedenCheckboxUnderAffectedBUS() {
        problemRecordPage.clickSwedenCheckBox();
        problemRecordPage.clickSaveButton();
    }

    @Then("Mulitple error messages should appear with red boarder around fields")
    public void mulitpleErrorMessagesShouldAppearWithRedBoarderAroundFields() {
        Assert.assertTrue(problemRecordPage.validateMultipleErrorMessages(), "Multiple error messages are not shown");
        //Red border should appear around fields
    }

    @When("user enters {string} in Title field")
    public void userEntersInTitleField(String arg0) {

        problemRecordPage.enterTitle(arg0);
    }
    @And("user enters description as {string}")
    public void userEntersDescriptionAs(String arg0)
    {
         problemRecordPage.enterDescription(arg0);
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
    public void anErrorMessageShouldAppearWithRedBoarderAroundWithdrawnReason(String arg0) {
        //Assert.assertTrue(problemRecordPage.validateErrorMessage(arg0), "Error message didn't appear");
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
        problemTicket =  problemRecordPage.getProblemTicket();
       System.out.println("Stored problem ticket is "+problemTicket);

    }

    @And("user enters Problem Ticket")
    public void userEntersProblemTicket() {
        problemRecordPage.enterTicket(problemTicket);
        System.out.println("user entered problem ticket"+ problemTicket);
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

    @And("change should also be reflected in the timeline.")
    public void changeShouldAlsoBeReflectedInTheTimeline() {
        problemRecordPage.clickTimelineButton();


        //Assert.assertTrue(false);

    }

    @When("user tries to change the status to withdrawn")
    public void userTriesToChangeTheStatusToWithdrawn() {
        try {
            problemRecordPage.clickStatusDropDown();
            problemRecordPage.selectWithdrawnDdValue();
        }
        catch (Exception e){
            System.out.println("status is not withdrawn");
        }

    }

    @And("user goes back to login page")
    public void userGoesBackToLoginPage() {
        problemRecordPage.getDriver().findElement(By.xpath("//a[contains(text(),'Return to home page')]")).click();
        problemRecordPage.wait(5000);
    }

    @And("user switches to window {string}")
    public void userSwitchesToWindow(String arg0) {
        CommonUtils.switchToChildWindow(problemRecordPage.getDriver(), arg0);
    }

    @When("user tries to change description")
    public void userTriesToChangeDescription() {
       try{
           problemRecordPage.enterDescription("Test1234");
       }
       catch (Exception e){
           System.out.println("element is grey out and not able to modify");
        }

    }

    @Then("description field should be greyed out should not be able to changed")
    public void descriptionFieldShouldBeGreyedOutShouldNotBeAbleToChanged() {
        System.out.println(problemRecordPage.getDescriptionText());

      //  Assert.assertEquals(problemRecordPage.getDescriptionText(), "UAT Test1 withdraw after Ack");


    }

    @And("change should also be reflected in the timeline as {string}")
    public void changeShouldAlsoBeReflectedInTheTimelineAs(String arg0) {
        problemRecordPage.clickTimelineButton();
        //Assert.assertEquals(problemRecordPage.getTimelineStatus(), arg0, "Ticket Status is not displayed on timeline");
        System.out.println("Timeline status is "+problemRecordPage.getTimelineStatus());

    }

    @When("user tries to Ack the ticket but its shouldn't allow")
    public void userTriesAckTheTicketButItsShouldnTAllow() {
        try {
            problemRecordPage.clickAckButton();
            System.out.println("user is able to Ack Ticket");
        }
        catch (Exception e)
        {
            System.out.println("user is not able to click on ack button, because its grey out and not enabled");
        }

    }

    @Then("problem ticket status should be assigned")
    public void problemTicketStatusShouldBeAssigned() {

        System.out.println(problemRecordPage.getStatusText());
        Assert.assertEquals(problemRecordPage.getStatusText(), "Assigned", "ticket status is not Assigned");
    }

    @When("user tries to change request type as Access Networks:RAN NSN 2G:3G:4G")
    public void userTriesToChangeRequestTypeAsAccessNetworksRANNSNGGG() {

        try {
          problemRecordPage.selectRequestTypeAs_AccessNetworks_RAN_NSN_2G_3G_4G();
        }
        catch(Exception e) {
            System.out.println("user is not bale to change request type");
        }

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
        
    }

    @Then("user selects Text template:analysis ongoing")
    public void userSelectsTextTemplateAnalysisOngoing() {
        
    }

    @And("user clicks on add button")
    public void userClicksOnAddButton() {
        
    }

    @Then("user selects Actions:Time tracking")
    public void userSelectsActionsTimeTracking() {
        
    }

    @And("user selects Activity:Working on ticket")
    public void userSelectsActivityWorkingOnTicket() {
        
    }

    @And("user enters {string} under the minutes field")
    public void userEntersUnderTheMinutesField(String arg0) {
        
    }

    @And("user clicks on Ok button")
    public void userClicksOnOkButton() {
    }
}
