package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;
import pageObjects.OWF_TroubleEventPage;

public class OWF_TroubleEventPageSteps {
    OWF_TroubleEventPage troubleEventPage = new OWF_TroubleEventPage();
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

    @And("user clicks on search button")
    public void userClicksOnSearchButton() {

    }

    @And("user enters ticket id as")
    public void userEntersTicketIdAs() {
        troubleEventPage.wait(15000);
    }
}
