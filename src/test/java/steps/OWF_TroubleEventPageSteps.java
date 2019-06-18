package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pageObjects.OWF_TroubleEventPage;
import utils.Ticket;

public class OWF_TroubleEventPageSteps {
    OWF_TroubleEventPage troubleEventPage = new OWF_TroubleEventPage();
    Ticket parentTicket;
    @Then("trouble record form should appear in new tab")
    public void troubleRecordFormShouldAppearInNewTab() {
    }

    @Then("trouble ticket should be created and status should be assigned")
    public void troubleTicketShouldBeCreatedAndStatusShouldBeAssigned() {
        System.out.println(troubleEventPage.getStatusText());
     Assert.assertEquals(troubleEventPage.getStatusText(), "Assigned", "status is not assigned");
    }

    @Then("user enters {string} in Title field in Trouble event")
    public void userEntersInTitleFieldInTroubleEvent(String level) {
        troubleEventPage.enterLevel(level);
    }

    @And("user selects request type as {string} on trouble event page")
    public void userSelectsRequestTypeAsStringOnTroubleEventPage(String requestType) {
        troubleEventPage.selectRequestType(requestType);
    }


    @And("user enters ticket id as {string}")
    public void userEntersTicketIdAs(String ticketID) {
        troubleEventPage.enterTroubleTicket(ticketID);
        troubleEventPage.wait(3000);
    }

    @Then("trouble ticket should appear related to TeMIP")
    public void troubleTicketShouldAppearRelatedToTeMIP() {
        parentTicket = troubleEventPage.getTicket();
        Assert.assertEquals(troubleEventPage.getSourceText(), "HPE Common Temip", "Ticket is not related to TeMIP");


    }

    @When("user clicks on work order tab")
    public void userClicksOnWorkOrderTab() {
     troubleEventPage.clickWorkOrder();
        troubleEventPage.wait(3000);
    }

    @And("user clicks on create from ticket")
    public void userClicksOnCreateFromTicket() {
        troubleEventPage.clickCreateFromTicket();

    }

    @And("clicks on ticket refresh button")
    public void clicksOnTicketRefreshButton() {
        troubleEventPage.clickRefreshButtonImage();
    }

    @Then("user clicks on alarms tab")
    public void userClicksOnAlarmsTab() {
        troubleEventPage.clickAlarmTab();
    }

    @And("user highlights all shown alarms")
    public void userHighlightsAllShownAlarms() {
        troubleEventPage.clickAllAlarmBox();
    }

    @And("user clicks on terminate")
    public void userClicksOnTerminate() {
        troubleEventPage.clickTerminateAlarm();
    }

    @And("user validates child ticket details are same as parent ticket")
    public void userValidatesChildAffectedBUIsSameAsParentTicket() {
        troubleEventPage.wait(3000);
        Ticket childTicket = troubleEventPage.getTicket();
        if (childTicket.isEqual(parentTicket))
            System.out.println("ticket details match");
    }

    @And("User waits for alarms to be cleared")
    public void userWaitsForAlarmsToBeCleared() {
        troubleEventPage.wait(30000);
    }

    @And("user clicks refresh button on alarm tab")
    public void userClicksRefreshButtonOnAlarmTab() {
        troubleEventPage.clickRefreshButton_AlarmTab();
    }

    @And("user clicks on finland checkbox under affected BU's")
    public void userClicksOnFinlandCheckboxUnderAffectedBUS() {
        troubleEventPage.clickFinalndCheckBox();
    }

    @And("user clicks on estonia checkbox under affected BU's")
    public void userClicksOnEstoniaCheckboxUnderAffectedBUS() {
        troubleEventPage.clickEstoniaCheckBox();
    }

    @And("user clicks on norway checkbox under affected BU's")
    public void userClicksOnNorwayCheckboxUnderAffectedBUS() {
        troubleEventPage.clickNorwayCheckBox();
    }

    @And("user clicks on lithuania checkbox under affected BU's")
    public void userClicksOnLithuaniaCheckboxUnderAffectedBUS() {
        troubleEventPage.clickLithuniaCheckBox();
    }

    @And("user clicks on denmark checkbox under affected BU's")
    public void userClicksOnDenmarkCheckboxUnderAffectedBUS() {
        troubleEventPage.clickDenmarkCheckBox();
    }

    @When("user clicks on main page refresh")
    public void userClicksOnMainPageRefresh() {
        troubleEventPage.refreshPage();
    }

    @Then("user enters event end time as current time")
    public void userEntersEventEndTimeAsCurrentTime() {
     troubleEventPage.enterEventEndTimeAsCurrentTime();
    }

    @And("user selects fault position as {string}")
    public void userSelectsFaultPositionAs(String arg0) {
        troubleEventPage.selectFaultPosition(arg0);
    }

    @And("user selects cause as {string}")
    public void userSelectsCauseAs(String arg0) {
        troubleEventPage.selectCause(arg0);
    }

    @And("user clicks on all alarm checkbox")
    public void userClicksOnAllAlarmCheckbox() {
    troubleEventPage.clickAllAlarms_Diagnosis();
    }

    @Then("user enters closure info as {string}")
    public void userEntersClosureInfoAs(String arg0) {
        troubleEventPage.enterClosureInfo(arg0);
    }

    @And("user clicks on yes on CI warning window")
    public void userClicksOnYesOnCIWarningWindow() {
        troubleEventPage.switchToFrameByIndex(2);
        troubleEventPage.clickOk_Diagnosis_OnFame();
    }

    @Then("user validates OLA value is set")
    public void userValidatesOLAValueIsSet() {
    Assert.assertNotNull(troubleEventPage.getOlaTargetTime());
    }

    @When("user clicks on the clear button")
    public void userClicksOnTheClearButton() {
        troubleEventPage.clickClear_selectTargetRequest();

    }

    @Then("user should see target request search")
    public void userShouldSeeTargetRequestSearch() {
    }

    @And("user clicks on the search button")
    public void userClicksOnTheSearchButton() {
        troubleEventPage.clickSearch_selctTargetRequest();
    }

    @And("user enters {string} in the ticket ID field")
    public void userEntersInTheTicketIDField(String arg0) {
    troubleEventPage.enterTicketIdPlus(arg0);
    }

    @And("user selects relationship type as {string}")
    public void userSelectsRelationshipTypeAs(String arg0) {
        troubleEventPage.selectRelationshipType(arg0);
    }

    @And("user clicks on accept button")
    public void userClicksOnAcceptButton() {
        troubleEventPage.clickAccept_selectTargetRequest();

    }

    @Then("user selects ticket under select target request")
    public void userSelectsTicketUnderSelectTargetRequest() {
     troubleEventPage.selectTicket();
    }

    @And("user clicks on display active child alarms radio button")
    public void userClicksOnDisplayActiveChildAlarmsRadioButton() {
     troubleEventPage.clickDisplayActiveChildAlarms();
    }

    @Then("trouble ticket should be appeared related to TeMIP")
    public void troubleTicketShouldBeAppearedRelatedToTeMIP() {
        Assert.assertEquals(troubleEventPage.getSourceText(), "HPE Common Temip", "Ticket is not related to TeMIP");
    }

    @And("user validates child WorkOrder availability")
    public void userValidatesChildWorkOrderAvailability() {
        Assert.assertTrue(troubleEventPage.validateChildWorkOrderAvailability());

    }


}
