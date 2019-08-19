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
        workOrderPage.wait(500);
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
    public void userClicksOnBBDispatchTab() {
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

    @Then("user should see blank work order form")
    public void userShouldSeeBlankWorkOrderForm() {
      Assert.assertEquals("", workOrderPage.getTicket());
    }

    @Then("user should see work order")
    public void userShouldSeeWorkOrder() {
        Assert.assertNotEquals("", workOrderPage.getTicket());
    }



    @When("^user enters title as \"([^\"]*)\"$")
    public void userEntersTitle(String title) {
        workOrderPage.enterTitle(title);
    }

    @And("user selects request type as {string} on work order page")
    public void userSelectsRequestTypeAsOnWorkOrderPage(String requestType) {
        workOrderPage.selectRequestType(requestType);
    }

    @Then("user validates manufacturer as {string}")
    public void userValidatesManufacturerAs(String arg0) {
        Assert.assertEquals(workOrderPage.getManufacturer(), arg0);
    }

    @When("user clicks on outbound events refresh button")
    public void userClicksOnOutboundEventsRefreshButton() {
        workOrderPage.clickRefresh_outbound();
    }

    @Then("user should see {string} notification in outbound in row {int}")
    public void userShouldSeeNotification(String arg0, int rowNum) {
        String actual=workOrderPage.getOutboundText("Operation", rowNum);
        System.out.println("Table cell value is : "+actual);
      Assert.assertEquals(actual, arg0);
    }

    @Then("user should see {string} notification in inbound in row {int}")
    public void userShouldSeeNotificationInInboundInRow(String arg0, int arg1) {
        Assert.assertEquals(workOrderPage.getInboundText("Operation", arg1), arg0);
    }

    @When("user selects dispatch status as {string}")
    public void userSelectsDispatchStatusAs(String arg0) {
       workOrderPage.selectDispatchStatus(arg0);
    }

    @And("user enters Cancel Requested Reason as {string}")
    public void userEntersCancelRequestedReasonAs(String arg0) {
        workOrderPage.enterCancelRequestReason(arg0);
    }


    @And("user waits {int} secs")
    public void userWaitsSecs(int seconds) {
        int newDelay= seconds*1000;
        workOrderPage.wait(newDelay);
    }

    @And("user validates Contact Name as {string}")
    public void userValidatesContactNameAs(String arg0) {
        Assert.assertEquals(workOrderPage.getContactName(), arg0);
    }

    @And("user validates Contact Telephone Number is present")
    public void userValidatesContactTelephoneNumberIsPresent() {
        Assert.assertNotNull(workOrderPage.getContactTelephoneNumber());
    }

    @And("user validates Contact Mail Address as {string}")
    public void userValidatesContactMailAddressAs(String arg0) {
        Assert.assertEquals(workOrderPage.getContactMailAddress(), arg0);
    }

    @When("user changes status to {string} on work order page")
    public void userChangesStatusToOnWorkOrderPage(String arg0) {
        workOrderPage.selectStatus_workOrderPage(arg0);
    }
}

