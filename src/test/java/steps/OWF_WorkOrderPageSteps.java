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

    @And("user clicks on apply BtwoB button")
    public void userClicksOnApplyBBButton() {
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
        Assert.assertNotNull(workOrderPage.getEstimatedReady());
    }

    @When("user clicks on BtwoB dispatch tab")
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

        Assert.assertNotNull(workOrderPage.getWFM_ticket_ID());
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
        workOrderPage.getPageTitle();
    }


    @Then("blank work order form should appear in new tab")
    public void blankWorkOrderFormShouldAppearInNewTab() {
        workOrderPage.getPageTitle();
    }

    @And("user selects request type as {string} in work order page")
    public void userSelectsRequestTypeAsInWorkOrderPage(String arg0) {
       workOrderPage.selectRequestType(arg0);
    }
    @Then("estimated ready time should be saved correctly")
    public void estimatedReadyTimeShouldBeSavedCorrectly() {
        Assert.assertEquals(workOrderPage.calculateEstimatedReady(4, "days"), workOrderPage.getSavedEstimatedReady());
    }

    @Then("user verifies estimated ready field is available")
    public void userVerifiesEstimatedReadyFieldIsAvailable() {
        Assert.assertTrue(workOrderPage.isEstimatedReadyDisplayed());
    }

    @When("user enters estimated ready as event start time minus {int} day")
    public void userEntersEstimatedReadyAsEventStartTimeMinusDay(int arg0) {
        workOrderPage.clearEstimatedReady();
        workOrderPage.enterEstimatedReady(workOrderPage.calculateEstimatedReady(-1, "days"));
    }
    @Then("user validates estimated ready time is updated for {int} hours")
    public void userValidatesEstimatedReadyTimeIsUpdatedForHours(int arg0) {
        Assert.assertEquals(workOrderPage.calculateEstimatedReady(arg0, "hours"), workOrderPage.getSavedEstimatedReady());
    }

    @Then("user validates estimated ready time is updated for {int} months")
    public void userValidatesEstimatedReadyTimeIsUpdatedForMonths(int arg0) {
        Assert.assertEquals(workOrderPage.calculateEstimatedReady(60, "days"), workOrderPage.getSavedEstimatedReady());
    }
    @When("user enters estimated ready as event start time plus {int} days")
    public void userEntersEstimatedReadyAsEventStartTimePlusDays(int arg0) {
        workOrderPage.clearEstimatedReady();
        workOrderPage.enterEstimatedReady(workOrderPage.calculateEstimatedReady(arg0, "days"));
    }

    @And("user selects completion code as {string}")
    public void userSelectsCompletionCodeAs(String arg0) {
        workOrderPage.selectCompletionCode(arg0);
    }

    @And("user enters schedule end as current date")
    public void userEntersScheduleEndAsCurrentDate() {
      workOrderPage.enterActualScheduleEnd();
    }
}

