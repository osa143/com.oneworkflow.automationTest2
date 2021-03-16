package steps.BMC_Helix_Steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BMC_HelixIncidentSteps {

    //Implementation of steps will happen here,

    BMC_HelixIncidentSteps bmc_helixIncidentSteps = new BMC_HelixIncidentSteps();

    @When("I click on applications")
    public void iClickOnApplications() {
    }

    @And("I click on incident management and click new incident")
    public void iClickOnIncidentManagementAndClickNewIncident() {
    }

    @Then("new incident window should be opened")
    public void newIncidentWindowShouldBeOpened() {
    }

    @When("I select {string} as  {string}")
    public void iSelectAs(String arg0, String arg1) {
    }

    @And("I select customer as Allen")
    public void iSelectCustomerAsAllen() {
    }

    @And("I enter summary as {string}")
    public void iEnterSummaryAs(String arg0) {
    }

    @And("I select impact as {string}")
    public void iSelectImpactAs(String arg0) {
    }

    @And("l select urgency as {string}")
    public void lSelectUrgencyAs(String arg0) {
    }

    @And("I enter assigned group as {string}")
    public void iEnterAssignedGroupAs(String arg0) {
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
    public void ticketStatusShouldBe(String arg0) {
    }

    @And("I click on next stage button")
    public void iClickOnNextStageButton() {
    }

    @And("I select assignee as {string}")
    public void iSelectAssigneeAs(String arg0) {
    }

    @And("I enter resolution as {string}")
    public void iEnterResolutionAs(String arg0) {
    }

    @And("I click save button on modify incident page")
    public void iClickSaveButtonOnModifyIncidentPage() {
    }

    @And("I select status reason as {string}")
    public void iSelectStatusReasonAs(String arg0) {
    }
}
