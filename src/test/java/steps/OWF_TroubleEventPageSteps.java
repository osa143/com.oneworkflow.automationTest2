package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;
import pageObjects.OWF_TroubleEventPage;

public class OWF_TroubleEventPageSteps {
    OWF_TroubleEventPage troubleEventPage = new OWF_TroubleEventPage();
    @Then("Trouble record form should appear in new tab")
    public void troubleRecordFormShouldAppearInNewTab() {
    }

    @And("user selects request type as Customer")
    public void userSelectsRequestTypeAsCustomer() {
        troubleEventPage.clickRequestTypeDropDown();
        troubleEventPage.wait(1000);
        troubleEventPage.selectCustomerDdValue();
    }

    @Then("trouble ticket should be created and status should be assigned")
    public void troubleTicketShouldBeCreatedAndStatusShouldBeAssigned() {
        System.out.println(troubleEventPage.getStatusText());
     Assert.assertEquals(troubleEventPage.getStatusText(), "Assigned", "status is not assigned");
    }
}
