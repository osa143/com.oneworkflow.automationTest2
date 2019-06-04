package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pageObjects.OWF_ChangeRecordPage;
import pageObjects.OWF_ProblemRecordPage;

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


    @When("user selects request type as normal change")
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
    @And("user enters impact duration as {string} minutes")
    public void userEntersImpactDurationAsMinutes(String impactDuration) {
        changeRecordPage.enterImpactDurationMins(impactDuration);

    }

    @And("user clicks on save button")
    public void userClicksOnSaveButton() {
        changeRecordPage.clickSave();
        changeRecordPage.wait(5000);

    }

    @Then("new tabs should be displayed including Diagnosis tab")
    public void newTabsShouldBeDisplayedIncludingDiagnosisTab() {

    }

    @When("user clicks on Diagnosis tab")
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
        changeRecordPage.clickSendButton();

    }

    @Then("send button becomes inactive and Ack button should be active")
    public void sendButtonBecomesInactiveAndAckButtonShouldBeActive() {
        Assert.assertEquals(changeRecordPage.ackButtonStatus(), "true");


    }

    @Then("form should be saved")
    public void formShouldBeSaved() {
    }

    @Then("Change record form should open in a new tab")
    public void changeRecordFormShouldOpenInANewTab() {
        //Title Assertion
    }

    @And("user selects template as All:Mobile:Billing:No-bill-Customer refund\\(SE)")
    public void userSelectsTemplateAsAllMobileBillingNoBillCustomerRefundSE() {
        changeRecordPage.selectTemplateAs_All_Mobile_Billing_NoBillCustomerRefund_SE();
    }
    @And("user selects request category as cable splicing")
    public void userSelectsRequestCategoryAsCableSplicing() {

        changeRecordPage.selectRequestCategoryAsCableSplicing();
    }

    @And("user enters reason field as {string}")
    public void userEntersReasonFieldAs(String Reason) {
     changeRecordPage.enterReason(Reason);
    }


    @And("user enters {string} in the change builder field")
    public void userEntersInTheChangeBuilderField(String changeBuilder) {
        changeRecordPage.enterChangeBuilder(changeBuilder);
    }

    @And("user enters {string} in the implementation field")
    public void userEntersInTheImplementationField(String implementation) {
     changeRecordPage.enterImplementation(implementation);
    }

    @And("user enters {string} in the test plan field")
    public void userEntersInTheTestPlanField(String testPlan) {
     changeRecordPage.enterTestPlan(testPlan);
    }

    @And("user enters {string} in the rollback field")
    public void userEntersInTheRollbackField(String rollBack) {
      changeRecordPage.enterRollBack(rollBack);
    }

    @And("user enters {string} in the communication plan field")
    public void userEntersInTheCommunicationPlanField(String arg0) {
      changeRecordPage.enterCommunicationPlan(arg0);
    }

    @And("user enters {string} in the ver of functionality field")
    public void userEntersInTheVerOfFunctionalityField(String arg0) {
        changeRecordPage.enterVerOfFunctionality(arg0);
    }

    @And("user enters {string} in the risk description field")
    public void userEntersInTheRiskDescriptionField(String arg0) {
       changeRecordPage.enterRiskDescriptionId(arg0);
    }

    @Then("user clicks on schedule tab")
    public void userClicksOnScheduleTab() {
        //doesn't need implementation
    }



    @And("user selects estimated impact dropdown as no impact")
    public void userSelectsEstimatedImpactDropdownAsNoImpact() {
    //changeRecordPage.selectEstimatedImpact("no impact");
        changeRecordPage.selectEstimatedImpactAs_NoImpact();

    }

    @Then("user clicks on risk tab")
    public void userClicksOnRiskTab() {

    }

    @And("user selects template as All:IT:Other:TEST TEMPLATE[UAT]-Normal Change")
    public void userSelectsTemplateAsAllITOtherTESTTEMPLATEUATNormalChange() {
        changeRecordPage.selectTemplateAs_All_It_Other_TestTemplate_uat_NormalChange();

    }

    @And("user enters {string} in the service and customer impact field")
    public void userEntersInTheServiceAndCustomerImpactField(String arg0){
        changeRecordPage.enterServiceAndCustomerImpact(arg0);
    }
}
