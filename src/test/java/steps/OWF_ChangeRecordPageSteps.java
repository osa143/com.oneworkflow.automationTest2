package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pageObjects.OWF_ChangeRecordPage;

public class OWF_ChangeRecordPageSteps {
    OWF_ChangeRecordPage changeRecordPage = new OWF_ChangeRecordPage();

    @Then("change record page should be opened and Change form is displayed")
    public void changeRecordPageShouldBeOpenedAndChangeFormIsDisplayed() {
        //System.out.println(changeRecordPage.getChangeRecordPageTitle());
        //Assert.assertEquals(changeRecordPage.getChangeRecordPageTitle(), "OS3 Change Record (New)");

    }

    @Then("ticket should be created and status should be assigned")
    public void ticketShouldBeCreatedAndStatusShouldBeAssigned() {

        System.out.println("Status text is:" + changeRecordPage.getStatusText());
        Assert.assertEquals(changeRecordPage.getStatusText(), "Assigned", "ticket status is not assigned");
        changeRecordPage.wait(5000);
    }

    @And("user selects request type as Access Networks:RAN optimization")
    public void userSelectsRequestTypeAsAccessNetworksRANOptimization() {
        changeRecordPage.selectRequestTypeAsAccessNetworksRANOptimization();
    }

    @When("user changes status to withdrawn")
    public void userChangeStatusToWithdrawnAndClicksSaveButton() {
        changeRecordPage.wait(3000);
        changeRecordPage.clickStatusDropDown();
        changeRecordPage.wait(1000);
        changeRecordPage.selectWithdrawnDdValue();
        //CommonUtils.switchWindow(problemRecordPage.getDriver(), "child");
    }

    @Then("problem ticket should be withdrawn")
    public void problemTicketShouldBeWithdrawn() {
        Assert.assertEquals(changeRecordPage.getStatusText(), "Withdrawn", "problem ticket status is not withdrawn");

    }


    @When("User selects request type as normal change")
    public void userSelectsRequestTypeAsNormalChange() {
        changeRecordPage.selectRequestType("Normal Change");

    }

    @And("User selects template as All:Mobile:RAN-Externals:RAN connectivity")
    public void userSelectsTemplateAsAllMobileRANExternalsRANConnectivity() {
        changeRecordPage.selectTemplateAsAll_Mobile_RANExternals_RANConnectivity();
        //"All:Mobile:RAN - Externals:RAN Connectivity"
    }

    @And("User enters as {string} in Change Builder field")
    public void userEntersAsInChangeBuilderField(String text) {
        changeRecordPage.enterChangeBuilderType(text);

    }

    @Then("User enters start time as some minutes fast from current sweden time")
    public void userEntersStartTimeAsMinutesFastFromCurrentSwedenTime() {
        changeRecordPage.setStartDate(5);

    }

    @And("User enters Request End time as some minutes fast from request start time")
    public void userEntersRequestEndTimeAsMinutesFastFromRequestStartTime() {

        changeRecordPage.setEndDate(11);
    }

    @And("User enters impact duration as some minutes")
    public void userEntersImpactDurationAsMinutes() {
        changeRecordPage.enterImpactDurationMins("5");

    }

    @And("user clicks on save button")
    public void userClicksOnSaveButton() {
        changeRecordPage.clickSave();
        changeRecordPage.wait(2000);

    }

    @Then("new tabs should be displayed including Diagnosis tab")
    public void newTabsShouldBeDisplayedIncludingDiagnosisTab() {

    }

    @When("User clicks on Diagnosis tab")
    public void userClicksOnDiagnosisTab() {
        changeRecordPage.clickDiagnosis();
    }

    @And("user clicks on CI search button")
    public void userClicksOnCISearchButton() {
        changeRecordPage.clickCiSearch();
    }


    @Then("CI should be listed and displayed under the Diagnosis tab")
    public void ciShouldBeListedAndDisplayedUnderTheDiagnosisTab() {

    }

    @When("User clicks on Send button")
    public void userClicksOnSendButton() {
        changeRecordPage.clicksendButton();

    }

    @Then("send button becomes inactive and Ack button should be active")
    public void sendButtonBecomesInactiveAndAckButtonShouldBeActive() {
        Assert.assertEquals(changeRecordPage.ackButtonStatus(), "true");


    }

    @Then("form should be saved")
    public void formShouldBeSaved() {
    }

}
