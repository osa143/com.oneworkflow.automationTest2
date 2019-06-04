package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import pageObjects.OWF_TroubleEventPage;

public class OWF_TroubleEventPageSteps {
    OWF_TroubleEventPage troubleEventPage = new OWF_TroubleEventPage();
    @Then("trouble record form should appear in new tab")
    public void troubleRecordFormShouldAppearInNewTab() {
    }

    @And("user selects request type as Customer")
    public void userSelectsRequestTypeAsCustomer() {
        troubleEventPage.clickRequestTypeDropDown();
        troubleEventPage.selectCustomerDdValue();
    }
}
