package steps.BMC_Helix_Steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.BMC_Helix.BMC_Helix_IncidentPage;
import utils.CommonUtils;

public class BMC_HelixIncidentSteps {

    //Implementation of steps will happen here,

    BMC_Helix_IncidentPage bmc_helixIncidentPage = new BMC_Helix_IncidentPage();

    @Then("new incident window should be opened")
    public void newIncidentWindowShouldBeOpened() {

    }

    @When("I select {string} as  {string}")
    public void iSelectAs(String company, String companyName) {

    }

    @And("I select customer as Allen")
    public void iSelectCustomerAsAllen() {

    }

    @And("I enter summary as {string}")
    public void iEnterSummaryAs(String summary) {

    }

    @And("I select impact as {string}")
    public void iSelectImpactAs(String impact) {
    }

    @And("l select urgency as {string}")
    public void lSelectUrgencyAs(String urgency) {
    }

    @And("I enter assigned group as {string}")
    public void iEnterAssignedGroupAs(String assignedGroup) {
    }

    @And("I click save button")
    public void iClickSaveButton() {
    }

    @Then("Incident should be created successfully")
    public void incidentShouldBeCreatedSuccessfully() {
    }

    @When("I open recent tickets and double click on ticket previously created")
    public void iOpenRecentTicketsAndDoubleClickOnTicketPreviouslyCreated() {
    }

    @Then("ticket status should be {string}")
    public void ticketStatusShouldBe(String status) {
    }

    @And("I click on next stage button")
    public void iClickOnNextStageButton() {
    }

    @And("I select assignee as {string}")
    public void iSelectAssigneeAs(String assignee) {
    }

    @And("I enter resolution as {string}")
    public void iEnterResolutionAs(String resolution) {
    }

    @And("I click save button on modify incident page")
    public void iClickSaveButtonOnModifyIncidentPage() {
    }

    @And("I select status reason as {string}")
    public void iSelectStatusReasonAs(String statusReason) {
    }
}
