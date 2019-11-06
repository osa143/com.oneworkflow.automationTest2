package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import org.openqa.selenium.By;
import org.testng.Assert;
import pageObjects.OWF_ChangeRecordPage;
import utils.CommonUtils;

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
        changeRecordPage.enterStartDate(5);

    }

    @And("user enters Request End time as some minutes fast from request start time")
    public void userEntersRequestEndTimeAsMinutesFastFromRequestStartTime() {

        changeRecordPage.enterEndDate(11);

    }

    @And("user enters impact duration as {string} minutes")
    public void userEntersImpactDurationAsMinutes(String impactDuration) {
        changeRecordPage.enterImpactDurationMins(impactDuration);

    }

    @And("user clicks on save button")
    public void userClicksOnSaveButton() {
        try {
            changeRecordPage.clickSave();
        } catch (Exception e) {

        }
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
        changeRecordPage.wait(1500);
    }


    @When("user clicks on Send button")
    public void userClicksOnSendButton() {
        changeRecordPage.clickSendButton();

    }

    @Then("send button becomes inactive and Ack button should be active")
    public void sendButtonBecomesInactiveAndAckButtonShouldBeActive() {
        Assert.assertTrue(changeRecordPage.ackButtonStatus());
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
        changeRecordPage.wait(2000);
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
        changeRecordPage.wait(500);

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
        changeRecordPage.wait(1000);
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


    @And("user gets change ticket value")
    public void userGetsChangeTicketValue() {
        CommonUtils.changeTicket = changeRecordPage.getTicketValue();
    }

    @And("user enters change ticket in ticket ID+ field")
    public void userEntersChangeTicketInTicketIDField() {
        changeRecordPage.enterTicketIdPlus(CommonUtils.changeTicket);
    }

    @When("user clicks on advanced search button")
    public void userClicksOnAdvancedSearchButton() {
        changeRecordPage.clickAdvancedSearch();
    }

    @And("user enters {string} in the advanced search bar")
    public void userEntersInTheAdvancedSearchBar(String text) {
        String text1 = text.replace('|', '"');
        changeRecordPage.enterAdvancedSearch(text1);
    }

    @Then("user enters request start time {int} hours ahead of current date")
    public void userEntersRequestStartTimeHoursAheadOfCurrentDate(int arg0) {
        int newDelay = arg0 * 60;
        changeRecordPage.enterStartDate(newDelay);

    }

    @And("user enters request end time {int} hours ahead of current date")
    public void userEntersRequestEndTimeHoursAheadOfCurrentDate(int arg0) {
        int newDelay = arg0 * 60;
        changeRecordPage.enterEndDate(newDelay);

    }

    @Then("user validates availability of tabs {string} on change record page")
    public void userValidatesAvailabilityOfTabsOnChangeRecordPage(String arg0) {
        changeRecordPage.wait(2000);
        changeRecordPage.verifyTabValues(arg0);
    }

    @And("user gets current risk score value")
    public void userGetsCurrentRiskScoreValue() {
        CommonUtils.beforeAnswering_riskScore = changeRecordPage.getRiskScore();
        System.out.println("Before Answers risk score is : " + CommonUtils.beforeAnswering_riskScore);
    }

    @Then("user validates risk score gets updated")
    public void userValidatesRiskScoreGetsUpdated() {
        CommonUtils.afterAnswering_riskScore = changeRecordPage.getRiskScore();
        System.out.println("After Answers risk score is : " + CommonUtils.afterAnswering_riskScore);
        Assert.assertNotEquals(CommonUtils.beforeAnswering_riskScore, CommonUtils.afterAnswering_riskScore);

    }

    @And("user validates owner profile as {string}")
    public void userValidatesOwnerProfileAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getOwnerProfile(), arg0);
    }

    @And("user validates owner as {string}")
    public void userValidatesOwnerAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getOwner(), arg0);
    }

    @When("user clicks on Show CR Matching button")
    public void userClicksOnShowCRMatchingButton() {
        changeRecordPage.clickShowCrMatching();
    }

    @Then("user should see Show CR Matching table appear")
    public void userShouldSeeShowCRMatchingTableAppear() {
        Assert.assertTrue(changeRecordPage.verifyShowCrDivIsDisplayed());
    }

    @And("user enters email address as {string}")
    public void userEntersEmailAddressAs(String arg0) {
        changeRecordPage.enterEmail(arg0);
    }

    @And("user clicks on add email button")
    public void userClicksOnAddEmailButton() {
        changeRecordPage.clickAddEmail();
    }

    @Then("user should see new email {string} added in {string} in row {int}")
    public void userShouldSeeNewEmailAddedInInRow(String expectedEmail, String colName, int rowNum) {
        Assert.assertEquals(changeRecordPage.getText(colName, rowNum), expectedEmail);
    }

    @Then("user should see {string} email update")
    public void userShouldSeeEmailUpdate(String arg0) {
        try {
            Assert.assertEquals(changeRecordPage.getText_notifications("Activity", 1), arg0);
        } catch (Exception e) {
            changeRecordPage.wait(5000);
            changeRecordPage.selectTab("Linked Items");
            changeRecordPage.selectTab("Notifications");
            changeRecordPage.selectTab("Sent");
            Assert.assertEquals(changeRecordPage.getText_notifications("Activity", 1), arg0);
        }

    }

    @And("user validates {string} is readonly")
    public void userValidatesIsReadonly(String arg0) {
        Assert.assertFalse(changeRecordPage.verifySendButtonIsEnable());
    }


    @And("user validates Project Code isn't readonly")
    public void userValidatesProjectCodeIsnTReadonly() {
        Assert.assertFalse(changeRecordPage.verifyProjectCodeIsReadOnly());
    }

    @And("user validates Change Builder+* isn't readonly")
    public void userValidatesChangeBuilderIsnTReadonly() {
        Assert.assertFalse(changeRecordPage.verifyChangeBuilderIsReadOnly());
    }

    @And("user validates Communication Plan* isn't readonly")
    public void userValidatesCommunicationPlanIsnTReadonly() {
        Assert.assertFalse(changeRecordPage.verifyCommunicationPlanIsReadOnly());
    }

    @And("user validates Ver of Functionality* isn't readonly")
    public void userValidatesVerOfFunctionalityIsnTReadonly() {
        Assert.assertFalse(changeRecordPage.verifyVerOfFuncionalityIsReadOnly());
    }

    @And("user validates Risk Description* isn't readonly")
    public void userValidatesRiskDescriptionIsnTReadonly() {
        Assert.assertFalse(changeRecordPage.verifyRiskDescriptionIsReadOnly());
    }

    @And("user validates Timeline Text entry isn't readonly")
    public void userValidatesTimelineTextEntryIsnTReadonly() {
        Assert.assertFalse(changeRecordPage.verifyTimelineTextEntryIsReadOnly());
    }

    @And("user clicks on details under sections")
    public void userClicksOnDetailsUnderSections() {
        changeRecordPage.clickDetails();
    }

    @When("user gets the schedule time values")
    public void userGetsTheScheduleTimeValues() {
        CommonUtils.requestStart = changeRecordPage.getRequestStart();
        CommonUtils.requestEnd = changeRecordPage.getRequestEnd();
    }


    @And("user selects owner as {string}")
    public void userSelectsOwnerAs(String arg0) {
        changeRecordPage.selectOwner(arg0);
    }

    @And("user selects resolved group as {string}")
    public void userSelectsResolvedGroupAs(String arg0) {
        changeRecordPage.selectResolvedGroup(arg0);
    }

    @And("user selects resolved person as {string}")
    public void userSelectsResolvedPersonAs(String arg0) {
        changeRecordPage.selectResolvedPerson(arg0);
    }

    @And("user enters review details as {string}")
    public void userEntersReviewDetailsAs(String arg0) {
        changeRecordPage.enterReviewDetails(arg0);
    }

    @And("user clicks on view button")
    public void userClicksOnViewButton() {
        changeRecordPage.clickView_approvalTab();
    }

    @Then("user validates actual start time is updated")
    public void userValidatesActualStartTimeIsUpdated() {
        Assert.assertNotNull(changeRecordPage.getActualStart());
    }

    @Then("user validates actual end time is updated")
    public void userValidatesActualEndTimeIsUpdated() {
        Assert.assertNotNull(changeRecordPage.getActualEnd());
    }

    @Then("user selects actual impact as {string}")
    public void userSelectsActualImpactAs(String arg0) {
        changeRecordPage.selectActualImpact_scheduleTab(arg0);
    }

    @And("user selects completed code as {string}")
    public void userSelectsCompletedCodeAs(String arg0) {
        changeRecordPage.selectCompletedCode_scheduleTab(arg0);
    }

    @When("user logsOut from One workflow")
    public void userLogsOutFromOneWorkflow() {
        changeRecordPage.selectDropDownNameAndValue("Nav-Username", "Logout", false);
    }

    @And("user gets request start and end time on change record page")
    public void userGetsRequestStartAndEndTimeOnChangeRecordPage() {
        CommonUtils.requestStart = changeRecordPage.getRequestStart();
        CommonUtils.requestEnd = changeRecordPage.getRequestEnd();
        System.out.println("Event Start time is : " + CommonUtils.requestStart);
        System.out.println("Event End time is : " + CommonUtils.requestEnd);
    }

    @And("user enters start time as {int} minutes fast from current sweden time")
    public void userEntersStartTimeAsMinutesFastFromCurrentSwedenTime(int arg0) {
        changeRecordPage.enterStartDate_format(arg0);
    }

    @And("user enters end time as {int} minutes fast from current sweden time")
    public void userEntersEndTimeAsMinutesFastFromRequestStartTime(int arg0) {
        changeRecordPage.enterEndDate_format(arg0);
    }


    @And("user enters start time as {int} hours fast from current sweden time")
    public void userEntersStartTimeAsHoursFastFromCurrentSwedenTime(int delayMinutes) {
        int newDelay = 60 * delayMinutes;
        changeRecordPage.enterStartDate_format(newDelay);
    }

    @And("user enters end time as {int} hours fast from current sweden time")
    public void userEntersEndTimeAsHoursFastFromCurrentSwedenTime(int delayMinutes) {
        int newDelay = 60 * delayMinutes;
        changeRecordPage.enterEndDate_format(newDelay);
    }

    @When("user clicks on Send button and closes warning message")
    public void userClicksOnSendButtonAndClosesWarningMessage() {
        try {
            changeRecordPage.clickSendButton();
        } catch (Exception e) {

        }
        changeRecordPage.switchToFrameByIndex(2);
        try {
            changeRecordPage.clickElementByContainsTextAndTagName("a", "OK");
        } catch (Exception e) {
            changeRecordPage.clickElementByContainsTextAndTagName("a", "Yes");
        }
    }

    @And("user validates {string} is mandatory")
    public void userValidatesIsMandatory(String arg0) {
        Assert.assertEquals(changeRecordPage.getTemplateText(), arg0);
    }


    @Then("user validates send button is disabled")
    public void userValidatesSendButtonIsDisabled() {
        Assert.assertFalse(changeRecordPage.verifySendButtonIsEnable());
    }

    @And("user clicks on send button and clicks yes on warning window")
    public void userClicksOnSendButtonAndClicksYesOnWarningWindow() {

        try {
            changeRecordPage.clickSendButton();
        } catch (Exception e) {

        }
        try {
            changeRecordPage.wait(5000);
            changeRecordPage.switchToFrameByIndex(2);
            changeRecordPage.clickElementByContainsTextAndTagName("a", "Yes");
        }catch(Exception e){

        }
}
}

