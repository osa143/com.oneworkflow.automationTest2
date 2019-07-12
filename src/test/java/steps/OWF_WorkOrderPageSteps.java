package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pageObjects.OWF_WorkOrderPage;

import java.sql.Driver;

public class OWF_WorkOrderPageSteps {

   OWF_WorkOrderPage workOrderPage= new OWF_WorkOrderPage();
    @And("user validates ticket status as {string}")
    public void userValidatesTicketStatusAs(String arg0) {
        workOrderPage.wait(3000);
        Assert.assertEquals(workOrderPage.getStatusText(), arg0, "Status is not new");
    }

    @And("user validates parent ticket id availability")
    public void userValidatesParentTicketIdAvailability() {
        Assert.assertNotEquals(workOrderPage.getParentTicketId(), "", "Parent ticket is not displayed");

    }

    @And("user validates WorkOrder status as {string}")
    public void userValidatesWorkOrderStatusAs(String arg0) {
        Assert.assertEquals(workOrderPage.getWOsStatusText(), arg0, "status in not open");
    }

    @And("user clicks on apply B2B button")
    public void userClicksOnApplyBBButton(int arg0) {
        workOrderPage.clickApplyB2B();
    }

    @And("user should see B2B dispatch tab")
    public void userShouldSeeBBDispatchTab(int arg0) {
         Assert.assertTrue(workOrderPage.verifyIsTabDisplayed("B2B Dispatch"));

    }

    @Then("user selects SLA class as {string}")
    public void userSelectsSLAClassAs(String arg0) {
        workOrderPage.selectSlaClass(arg0);
    }

    @And("user validates estimated ready time is updated")
    public void userValidatesEstimatedReadyTimeIsUpdated() {
        Assert.assertEquals(workOrderPage.validateEstimatedReady(),"false", "Estimated date is not updated");
    }

    @When("user clicks on B2B dispatch tab")
    public void userClicksOnBBDispatchTab(int arg0) {
        workOrderPage.clickB2BDispatch();
    }

    @And("user enters header value as {string}")
    public void userEntersHeaderValueAs(String arg0) {
        workOrderPage.enterHeader(arg0);
    }

    @And("user enters message value as {string}")
    public void userEntersMessageValueAs(String arg0) {
        workOrderPage.enterMessage(arg0);
    }

    @When("user clicks on inbound events refresh button")
    public void userClicksOnInboundEventsRefreshButton() {
        workOrderPage.clickRefresh_Inbound();
    }

    @And("user should see WFM ticket ID")
    public void userShouldSeeWFMTicketID() {
     workOrderPage.validateWFM_ticket_ID();
    }

    @And("user should see dispatch status as {string}")
    public void userShouldSeeDispatchStatusAs(String arg0) {
        Assert.assertEquals(workOrderPage.getDispatchStatus(), arg0, "dispatch status is not submitted");
    }
    @Then("user should see assigned profile as {string}")
    public void userShouldSeeAssignedProfileAs(String arg0) {
     Assert.assertTrue(workOrderPage.getAssignedProfileStatus(arg0));

    }

    @Then("work order form should appear in new tab")
    public void workOrderFormShouldAppearInNewTab() {
        //Title assertion
    }

    @When("user selects create menu as {string}")
    public void userSelectsCreateMenuAs(String arg0) {
        workOrderPage.selectMenuItem(arg0);
    }
}

