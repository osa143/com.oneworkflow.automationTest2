package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import pageObjects.BasePage;
import pageObjects.OWF_AgentConsolePage;
import pageObjects.OWF_ChangeRecordPage;
import pageObjects.OWF_ProblemRecordPage;
import runners.PM_Withdraw_Ticket_After_Ack_Runner;
import utils.CommonUtils;

import static java.lang.System.getProperties;

public class OWF_ProblemRecordPageSteps {
    CommonUtils commonUtils = new CommonUtils();
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
      problemRecordPage.wait(3000);
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

        System.out.println("Status text is:" + changeRecordPage.getStatusText());
        //Assert.assertEquals(changeRecordPage.getStatusText(),"Assigned" );
        problemRecordPage.wait(10000);
    }
    @When("user changes status to withdrawn")
    public void userChangeStatusToWithdrawnAndClicksSaveButton() {
        changeRecordPage.wait(3000);
        changeRecordPage.clickStatusDropDown();
        changeRecordPage.wait(1000);
        changeRecordPage.selectWithdrawnDdValue();
        //CommonUtils.switchWindow(problemRecordPage.getDriver(), "child");
    }

    @And("user clicks on yes on warning window")
    public void userClicksOnYesOnWarningWindow() {
        problemRecordPage.wait(1000);
        problemRecordPage.getDriver().switchTo().frame(2);
        problemRecordPage.wait(1000);
        problemRecordPage.getDriver().findElement(By.id("WIN_0_700027904")).click();
    }

    @Then("an error message {string} should appear with red boarder around withdrawn reason")
    public void anErrorMessageShouldAppearWithRedBoarderAroundWithdrawnReason(String arg0) {
        Assert.assertTrue(problemRecordPage.validateErrorMessage(arg0), "Error message didn't appear");
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
    public String userGetsTicketValue() {
        String problemTicket =  problemRecordPage.getProblemTicket();
       System.out.println("Stored problem ticket is "+problemTicket);
        commonUtils.imATicket=problemTicket;
        return problemTicket;
    }

    @And("user enters Problem Ticket")
    public void userEntersProblemTicket() {

        //String pt = problemRecordPage.getProblemTicket();
        //System.out.println(userGetsTicketValue());
        //System.out.println("Stored problem ticket is "+problemRecordPage.getProblemTicket());
        System.out.println("ticket: "+commonUtils.imATicket);
        problemRecordPage.enterTicket(commonUtils.imATicket);
        System.out.println("user entered problem ticket"+ commonUtils.imATicket);
    }

    @And("user clicks Search on ticket search")
    public void userClicksSearchOnTicketSearch() {
        problemRecordPage.clickSearchButton();
        problemRecordPage.wait(3000);

    }

    @And("user waits some time")
    public void userWaitsSomeTime()
    {
        problemRecordPage.wait(10000);
    }

    @Given("user opens browser again")
    public void userOpensBrowserAgain() {

        problemRecordPage.getDriver().get("https://td444lb-mtint.ddc.teliasonera.net/arsys/");
    }

    @When("user clicks on Ack button")
    public void userClicksOnAckButton() {
        problemRecordPage.clickAckButton();
        problemRecordPage.wait(3000);
    }

    @Then("problem ticket status should be under investigation")
    public void problemTicketStatusShouldBeUnderInvestigation() {


    }

    @And("change should also be reflected in the timeline.")
    public void changeShouldAlsoBeReflectedInTheTimeline() {

    }

    @When("user tries to change the status to withdrawn")
    public void userTriesToChangeTheStatusToWithdrawn() {

    }

    @Then("user logsOut")
    public void userLogsOut() {
        agentConsolePage.clickNavUserMenu();
        agentConsolePage.wait(1000);
        agentConsolePage.clickMenuItemLogout();
        agentConsolePage.wait(5000);

    }

    @And("user goes back to login page")
    public void userGoesBackToLoginPage() {
        problemRecordPage.getDriver().findElement(By.xpath("//a[contains(text(),'Return to home page')]")).click();
        problemRecordPage.wait(5000);
    }
}
