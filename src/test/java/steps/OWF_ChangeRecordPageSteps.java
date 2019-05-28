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
    public void userEntersAsInChangeBuilderField(String arg0) {
        changeRecordPage.enterChangeBuilderType(arg0);

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
