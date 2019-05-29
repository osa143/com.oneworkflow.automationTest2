package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.testng.Assert;
import pageObjects.BasePage;
import pageObjects.OWF_AgentConsolePage;
import pageObjects.OWF_ChangeRecordPage;
import pageObjects.OWF_ProblemRecordPage;
import utils.CommonUtils;

public class OWF_ProblemRecordPageSteps {

    OWF_ProblemRecordPage problemRecordPage = new OWF_ProblemRecordPage();
    OWF_AgentConsolePage agentConsolePage = new OWF_AgentConsolePage();
    OWF_ChangeRecordPage changeRecordPage = new OWF_ChangeRecordPage();

    @When("user clicks on create problem record")
    public void userClicksOnCreateProblemRecord() {
        agentConsolePage.clickCreateMenu();
        agentConsolePage.clickMenuItemProblemRecord();
        CommonUtils.switchWindow(agentConsolePage.getDriver(), "child");
    }

    @Then("problem record form should appear in new tab")
    public void problemRecordFormShouldAppearInNewTab() {
        //title assertion
    }

    @When("user clicks on save button on the problem form")
    public void userClicksOnSaveButtonOnTheProblemForm() {
      problemRecordPage.clickSaveButton();
    }

    @Then("an error message should appear: {string}")
    public void anErrorMessageShouldAppear(String arg0) {

        Assert.assertTrue(problemRecordPage.validateErrorMessage(arg0), "Error message didn't appear");
    }

    @When("user clicks on sweden checkbox under affected BU's")
    public void userClicksOnSwedenCheckboxUnderAffectedBUS() {
      changeRecordPage.clickSwedenCheckBox();
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

    @And("user selects request type as Access Networks:RAN optimization")
    public void userSelectsRequestTypeAsAccessNetworksRANOptimization() {
        changeRecordPage.selectRequestTypeAsAccessNetworksRANOptimization();
    }

    @And("user enters description as {string}")
    public void userEntersDescriptionAs(String arg0) {
         problemRecordPage.enterDescription(arg0);
    }

    @And("user selects urgency as low")
    public void selectsUrgencyAsLow() {
          problemRecordPage.clickUrgencyDropDown();
          problemRecordPage.selectLowDdValue();
    }

    @Then("ticket should be created and status should be assigned")
    public void ticketShouldBeCreatedAndStatusShouldBeAssigned() {

        System.out.println(changeRecordPage.getStatusText());
        //Assert.assertEquals(changeRecordPage.getStatusText(),"Assigned" );
    }
    @When("user changes status to withdrawn")
    public void userChangeStatusToWithdrawnAndClicksSaveButton() {
        changeRecordPage.clickStatusDropDown();
        changeRecordPage.selectWithdrawnDdValue();
        //CommonUtils.switchWindow(problemRecordPage.getDriver(), "child");
    }

    @And("user clicks on yes on warning window")
    public void userClicksOnYesOnWarningWindow() {
        //problemRecordPage.acceptAlert();
        //problemRecordPage.getDriver().findElement(By.id("WIN_0_700027904")).click();

    }

    @Then("an error message {string} should appear with red boarder around withdrawn reason")
    public void anErrorMessageShouldAppearWithRedBoarderAroundWithdrawnReason(String arg0) {
       // Assert.assertTrue(problemRecordPage.validateErrorMessage(arg0), "Error message didn't appear");
    }

    @When("user selects withdrawn reason as false alarm and clicks save")
    public void userSelectsWithdrawnReasonAsFalseAlarmAndClicksSave() {
        problemRecordPage.clickWithdrawnReasonDropDown();
        problemRecordPage.selectFalseAlarmDdValue();
        problemRecordPage.clickSaveButton();

    }

    @And("user should see confirmation message and clicks on yes button")
    public void userShouldSeeConfirmationMessageAndClicksOnYesButton() {
        problemRecordPage.acceptAlert();

    }

    @Then("problem ticket should be withdrawn")
    public void problemTicketShouldBeWithdrawn() {

        System.out.println(changeRecordPage.verifyStatusWithdrawn());

    }

    @And("user selects impact type as moderate:limited")
    public void userSelectsImpactTypeAsModerateLimited() {
        problemRecordPage.clickImpactDropDown();
        problemRecordPage.selectModerateLimitedDropDown();
    }


    @And("user gets ticket value")
    public void userGetsTicketValue() {
    }

    @And("user opens Problem Ticket")
    public void userOpensProblemTicket() {

    }
}
