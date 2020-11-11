package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.WebService;

public class WebService_Steps {
    WebService webService= new WebService();

    @Given("user has access to Rest URL")
    public void userHasAccessToRestURL() {
    }

    @When("user sends request to create incident")
    public void userSendsRequestToCreateIncident() {
        webService.createIncidentFromStub();
    }

    @Then("OP ticket should be created")
    public void opTicketShouldBeCreated() {
    }
}
