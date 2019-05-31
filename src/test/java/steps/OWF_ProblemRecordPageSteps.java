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
        problemRecordPage.selectModerateLimitedDropDown();
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

    }

    @When("user tries to change the status to withdrawn")
    public void userTriesToChangeTheStatusToWithdrawn() {

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

    }

    @Then("description field should be greyed out should not be able to changed")
    public void descriptionFieldShouldBeGreyedOutShouldNotBeAbleToChanged() {

    }
}
