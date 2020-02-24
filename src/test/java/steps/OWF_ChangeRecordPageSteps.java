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
        changeRecordPage.wait(1000);
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
        changeRecordPage.wait(1500);

    }

    @And("user clicks on CI search button")
    public void userClicksOnCISearchButton() {
        changeRecordPage.clickCiSearch();
        changeRecordPage.wait(2000);
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
        changeRecordPage.wait(2000);
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

    @When("user searches below in the location+ field and verifies Ticket information")
    public void userSearchesBelowInTheLocationFieldAndVerifiesTicketInformation(DataTable locationIdPlus) {
        changeRecordPage.validateCiDetailsForMultipleLocationsID(locationIdPlus);
    }

    @And("user clicks on cancel on select target window")
    public void userClicksOnCancelOnSelectTargetWindow() {
        changeRecordPage.clickCancel_selectTarget();
    }

    @When("user searches below in the Name plus field and verifies Ticket information")
    public void userSearchesBelowInTheNamePlusFieldAndVerifiesTicketInformation(DataTable locationNamePlus) {
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

    @And("user validates change type as {string}")
    public void userValidatesChangeTypeAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getChange_Type(), arg0);
    }

    @Then("user validates source id as {string}")
    public void userValidatesSourceIdAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getSource_Id(), arg0);

    }

    @Then("user clicks on approval tab")
    public void userClicksOnApprovalTab() {
    }

    @And("user clicks approve button")
    public void userClicksApproveButton() {
    }

    @Then("user clicks on schedule tab")
    public void userClicksOnScheduleTab() {
    }

    @Then("user validates change initiator as {string}")
    public void userValidatesChangeInitiatorAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getChangeInitiator(), arg0);
    }

    @Then("Service Information should be Activated")
    public void serviceInformationShouldBeActivated() {
        Assert.assertTrue(changeRecordPage.verifyServiceInfoActivated());

        }

        @And("timeline should updated for service info activation")
        public void timelineShouldUpdatedForServiceInfoActivation () {
            Assert.assertTrue(changeRecordPage.verifyServiceInfoActivatedTimelineUpdate());
        }

        @When("user clicks on disable on service info")
        public void userClicksOnDisableOnServiceInfo () {
            changeRecordPage.clickElement(By.xpath("//*[@id='T600002223']/tbody/tr[2]/td[1]"));
            changeRecordPage.clickElementByContainsTextAndTagName("div", "Disable");
        }

    @Then("timeline should be updated for service info deactivation")
    public void timelineShouldBeUpdatedForServiceInfoDeactivation() {
        Assert.assertTrue(changeRecordPage.verifyServiceInfoDeactivatedTimelineUpdate());

    }

    @And("user validates template field as {string}")
    public void userValidatesTemplateFieldAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getTemplate(), arg0);
    }

    @And("user validates request category as {string}")
    public void userValidatesRequestCategoryAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getRequestCategory(), arg0);
    }

    @And("user validates project code as {string}")
    public void userValidatesProjectCodeAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getProjectCode(), arg0);
    }

    @Then("user validates change builder+* as {string}")
    public void userValidatesChangeBuilderAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getChangeBuilder(), arg0);
    }

    @And("user validates assigned profile as {string}")
    public void userValidatesAssignedProfileAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getAssignedProfile(), arg0);
    }

    @Then("user validates implementation as {string}")
    public void userValidatesImplementationAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getImplementation(), arg0);
    }

    @And("user validates test plan as {string}")
    public void userValidatesTestPlanAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getTestPlan(), arg0);
    }

    @Then("user validates rollback as {string}")
    public void userValidatesRollbackAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getRollback(), arg0);
    }

    @And("user validates communication plan as {string}")
    public void userValidatesCommunicationPlanAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getCommunicationPlan(), arg0);
    }

    @Then("user validates ver of functionality* as {string}")
    public void userValidatesVerOfFunctionalityAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getVerOfFunctionality(), arg0);
    }

    @And("user validates risk description* as {string}")
    public void userValidatesRiskDescriptionAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getRiskDescription(), arg0);
    }

    @And("user validates state as {string}")
    public void userValidatesStateAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getWithdrawnReason(), arg0);
    }

    @Then("user selects search for radio button as {string}")
    public void userSelectsSearchForRadioButtonAs(String arg0) {
        changeRecordPage.selectSearchForRadioButton();
    }

    @And("user enters {string} under interested parties")
    public void userEntersUnderInterestedParties(String arg0) {
        changeRecordPage.enterLoginName(arg0);
    }

    @And("user enters {string} in email address field")
    public void userEntersInEmailAddressField(String arg0) {
        changeRecordPage.enterEmailAddress(arg0);
    }

    @Then("user selects withdrawn reason as {string}")
    public void userSelectsWithdrawnReasonAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getWithdrawnReason(), arg0);
    }

    @And("user validates change builder email as {string}")
    public void userValidatesChangeBuilderEmailAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getChangeBuilderEmail(), arg0);
    }

    @And("user validates change builder phone as {string}")
    public void userValidatesChangeBuilderPhoneAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getChangeBuilderPhone(), arg0);
    }

    @And("user validates to date as {string}")
    public void userValidatesToDateAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getToDate(), arg0);
    }

    @And("user validates resolved group as {string}")
    public void userValidatesResolvedGroupAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getResolvedGroup(), arg0);
    }

    @And("user validates resolved person as {string}")
    public void userValidatesResolvedPersonAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getResolvedPerson(), arg0);
    }

    @And("user validates review details as {string}")
    public void userValidatesReviewDetailsAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getReviewDetails(), arg0);
    }

    @And("user validates closure code as {string}")
    public void userValidatesClosureCodeAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getClosureCode(), arg0);
    }

    @And("user validates failure code as {string}")
    public void userValidatesFailureCodeAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getFailureCode(), arg0);
    }

    @And("user validates withdrawn reason as {string}")
    public void userValidatesWithdrawnReasonAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getWithdrawn_reason(), arg0);
    }

    @And("user validates service and customer impact as {string}")
    public void userValidatesServiceAndCustomerImpactAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getServiceAndCustomerImpact(), arg0);
    }

    @And("user validates request start as {string}")
    public void userValidatesRequestStartAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getRequestStart(), arg0);
    }

    @And("user validates request end as {string}")
    public void userValidatesRequestEndAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getRequestEnd(), arg0);
    }

    @And("user validates estimated impact as {string}")
    public void userValidatesEstimatedImpactAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getEstimatedImpact(), arg0);
    }

    @And("user validates expected alarms as {string}")
    public void userValidatesExpectedAlarmsAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getExpectedAlarms(), arg0);
    }

    @And("user validates impact duration days as {string}")
    public void userValidatesImpactDurationDaysAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getImpactDays(), arg0);
    }

    @And("user validates impact duration hours as {string}")
    public void userValidatesImpactDurationHoursAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getImpactHours(), arg0);
    }

    @And("user validates impact duration minutes as {string}")
    public void userValidatesImpactDurationMinutesAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getImpactMins(), arg0);
    }

    @And("user validates impact duration seconds as {string}")
    public void userValidatesImpactDurationSecondsAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getImpactSecs(), arg0);
    }

    @And("user validates agreed start as {string}")
    public void userValidatesAgreedStartAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getAgreedStart(), arg0);
    }

    @And("user validates agreed end as {string}")
    public void userValidatesAgreedEndAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getAgreedEnd(), arg0);
    }

    @And("user validates actual start as {string}")
    public void userValidatesActualStartAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getActual_start(), arg0);
    }

    @And("user validates actual end as {string}")
    public void userValidatesActualEndAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getActual_end(), arg0);
    }

    @And("user validates actual impact as {string}")
    public void userValidatesActualImpactAs(String arg0) {
        Assert.assertEquals(changeRecordPage.get_ActualImpact(), arg0);
    }

    @And("user validates completed code as {string}")
    public void userValidatesCompletedCodeAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getCompleted_code(), arg0);
    }

    @And("user validates external parent ticket id as {string}")
    public void userValidatesExternalParentTicketIdAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getExternalParentTicketId(), arg0);
    }

    @And("user validates actual downtime as {string}")
    public void userValidatesActualDowntimeAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getActualDowntime(), arg0);
    }

    @And("user validates subscription id as {string}")
    public void userValidatesSubscriptionIdAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getSubscriptionID(), arg0);
    }

    @And("user validates address of issue as {string}")
    public void userValidatesAddressOfIssueAs(String arg0) {
        Assert.assertEquals(changeRecordPage.getAddressOfIssue(), arg0);
    }
    @When("user creates change ticket with following details")
    public void userCreatesChangeTicketWithFollowingDetails (DataTable dataTable){
                changeRecordPage.createChangeTicket(dataTable);
            }

    @When("user validates change type field availability")
    public void userValidatesChangeTypeFieldAvailability() {

        Assert.assertTrue(changeRecordPage.verifyImpactAvailability());
    }


    @And("user verifies actual impact is visible" )
    public void userVerifiesActualImpactIsVisible() {
        Assert.assertTrue(changeRecordPage.verifyActualImpactAvailability());
    }


    @And("user clicks Risk Question down arrow")
    public void userClicksRiskQuestionDownArrow() {
        changeRecordPage.clickDownButton();
        changeRecordPage.wait(500);
    }

    @And("user enters request start time as {int} minutes past from {string} timezone {string} format")
    public void userEntersRequestStartTimeAsMinutesPastFromTimezoneFormat(int delay, String timezone, String pattern) {
        changeRecordPage.enterStartDate_DateFormat_Timezone_Delay(pattern, timezone, delay);
    }
    @And("user enters request end time as {int} minutes past from {string} timezone {string} format")
    public void userEntersRequestEndTimeAsMinutesPastFromTimezoneFormat(int delay, String timezone, String pattern) {
        changeRecordPage.enterEndDate_DateFormat_Timezone_Delay(pattern, timezone, delay);
    }


}



