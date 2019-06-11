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
    }

    @Then("trouble ticket should appear related to TeMIP")
    public void troubleTicketShouldAppearRelatedToTeMIP() {
        parentTicket = troubleEventPage.getTicket();
        Assert.assertEquals(troubleEventPage.getSourceText(), "HPE Common Temip", "Ticket is not related to TeMIP");


    }

    @When("user clicks on work order tab")
    public void userClicksOnWorkOrderTab() {
     //troubleEventPage.clickWorkOrder();
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

    @And("user validates child affected BU is same as parent ticket")
    public void userValidatesChildAffectedBUIsSameAsParentTicket() {
        Ticket childTicket = troubleEventPage.getTicket();
        if (childTicket.isEqual(parentTicket))
            System.out.println("ticket details match");
    }
}
