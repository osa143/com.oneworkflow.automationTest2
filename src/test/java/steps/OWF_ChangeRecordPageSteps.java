package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import org.testng.Assert;
import pageObjects.OWF_ChangeRecordPage;
import pageObjects.OWF_ProblemRecordPage;

import javax.accessibility.AccessibleStateSet;

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
        changeRecordPage.wait(2000);
        Assert.assertEquals(changeRecordPage.getStatusText(), "Assigned", "ticket status is not assigned");
        changeRecordPage.wait(4000);
    }


    @When("user changes status to {string}")
    public void userChangeStatusTo(String status) {
        changeRecordPage.selectStatus(status);
        changeRecordPage.wait(2000);
    }

    @Then("problem ticket should be withdrawn")
    public void problemTicketShouldBeWithdrawn() {
        Assert.assertEquals(changeRecordPage.getStatusText(), "Withdrawn", "problem ticket status is not withdrawn");

    }

    @And("user enters as {string} in Change Builder field")
    public void userEntersAsInChangeBuilderField(String text) {
        changeRecordPage.enterChangeBuilderType(text);

    }

    @Then("user enters start time as some minutes fast from current sweden time")
    public void userEntersStartTimeAsMinutesFastFromCurrentSwedenTime() {
        changeRecordPage.setStartDate(5);

    }

    @And("user enters Request End time as some minutes fast from request start time")
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
        changeRecordPage.wait(6000);

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
        changeRecordPage.wait(3000);
    }


    @When("user clicks on Send button")
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

    @Then("change record form should open in a new tab")
    public void changeRecordFormShouldOpenInANewTab() {
        //Title Assertion
    }

    @And("user selects request category as {string}")
    public void userSelectsRequestCategoryAsCableSplicing(String category) {
        changeRecordPage.selectRequestCategory(category);
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


    @And("user selects estimated impact dropdown as {string}")
    public void userSelectsEstimatedImpactDropdownAsNoImpact(String estimatedImpact) {
    changeRecordPage.selectEstimatedImpact(estimatedImpact);

    }

    @Then("user clicks on risk tab")
    public void userClicksOnRiskTab() {
        changeRecordPage.selectTab("Risk");

    }

    @And("user selects template as {string}")
    public void userSelectsTemplateAs(String templateType) {
        changeRecordPage.selectTemplate(templateType);
    }

    @When("user selects request type as {string}")
    public void userSelectsRequestTypeAs(String requestType) {
        changeRecordPage.selectRequestType(requestType, true);
        changeRecordPage.wait(1000);
    }

    @And("user enters as {string} in service and customer impact")
    public void userEntersAsInServiceAndCustomerImpact(String arg0) {
        changeRecordPage.enterServiceAndCustomerImpact(arg0);

    }

    @And("user validates ticket status")
    public void userValidatesTicketStatus() {
        Assert.assertEquals(changeRecordPage.getStatusText(), "Implementation", "status is not implementation");
    }

    @And("user selects estimated impact as {string}")
    public void userSelectsEstimatedImpactAs(String arg0) {
        changeRecordPage.selectEstimatedImpact(arg0);
    }

    @And("user selects answer as {string}")
    public void userSelectsAnswerAs(String arg0) {
        changeRecordPage.selectAnswer(arg0);
        changeRecordPage.clickDownButton();
        //changeRecordPage.wait(1000);

    }

    @And("user selects last answer as {string}")
    public void userSelectsLastAnswerAs(String answer) {
        changeRecordPage.selectAnswer(answer);
    }


    @And("user selects request category as {string} on change record page")
    public void userSelectsRequestCategoryAsOnChangeRecordPage(String category) {
        changeRecordPage.selectRequestCategoryOnChangeRecordPage(category);
    }


    @And("user selects title as {string} on Change record page")
    public void userSelectsTitleAsOnChangeRecordPage(String arg0) {
        changeRecordPage.selectTitleAs(arg0);
    }

    @And("user answers all risk questions as below")
    public void userAnswersAllRiskQuestionsAsBelow() {
        //Dummy step Doesn't need implementation
    }

    @And("user switches to frame by id {string}")
    public void userSwitchesToFrameById(String arg0) {
        changeRecordPage.switchToFrameById(arg0);
    }

    @When("user selects change type as {string}")
    public void userSelectsChangeTypeAs(String arg0) {
        changeRecordPage.selectChangeType(arg0);
    }

    @When("user clicks on {string} under actions")
    public void userClicksOnUnderActions(String arg0) {
        changeRecordPage.clickElementByContainsTextAndTagName("span", arg0);
    }

    @When("user enters {string} in calendar search box")
    public void userEntersInCalendarSearchBox(String arg0) {
        changeRecordPage.enterSearch_calendar(arg0);
    }

    @And("user clicks on ticket type {string}")
    public void userClicksOnTicketType(String arg0) {
        changeRecordPage.clickChange_Record();
    }

    @And("user selects status as {string}")
    public void userSelectsStatusAs(String arg0) {
        changeRecordPage.selectStatus(arg0);
    }

    @When("user searches below in the location+ field and verifies CI information")
    public void userSearchesBelowInTheLocationFieldAndVerifiesCIInformation(DataTable locationIdPlus) {
        changeRecordPage.validateCiDetailsForMultipleLocationsID(locationIdPlus);
    }

    @And("user clicks on cancel on select target window")
    public void userClicksOnCancelOnSelectTargetWindow() {
        changeRecordPage.clickCancel_selectTarget();
    }

    @When("user searches below in the Name plus field and verifies CI information")
    public void userSearchesBelowInTheNamePlusFieldAndVerifiesCIInformation(DataTable locationNamePlus) {
        changeRecordPage.validateCiDetailsForMultipleLocationsName(locationNamePlus);
    }

    @Then("user waits for implementation to finish")
    public void userWaitsForImplementationToFinish() {
        changeRecordPage.wait(240000);
    }


}
