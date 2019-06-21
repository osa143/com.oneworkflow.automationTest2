package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.OWF_KnownErrorPage;

public class OWF_KnownErrorPageSteps {

    OWF_KnownErrorPage knownErrorPage= new OWF_KnownErrorPage();

    @Then("known error form should appear in new tab")
    public void knownErrorFormShouldAppearInNewTab() {
        //Title Assertion
    }



    @And("user clicks on add button under interested parties")
    public void userClicksOnAddButtonUnderInterestedParties() {
        knownErrorPage.clickAddButton_interestedParties();

    }

    @And("user selects type as {string} under interested parties")
    public void userSelectsTypeAsUnderInterestedParties(String arg0) {
       knownErrorPage.selectType(arg0);
    }

    @And("user clicks on radio button user")
    public void userClicksOnRadioButtonUser() {
        knownErrorPage.clickOnUserRadioButton();

    }

    @And("user selects request type as {string} on known error page")
    public void userSelectsRequestTypeAsOnKnownErrorPage(String arg0) {
      knownErrorPage.selectRequestType(arg0);
    }
}
