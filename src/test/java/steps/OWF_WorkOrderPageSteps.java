package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pageObjects.OWF_WorkOrderPage;
import utils.CommonUtils;

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
        try {
            workOrderPage.selectStatus_workOrderPage(arg0);
        }
        catch (Exception e) {
            try {
                workOrderPage.selectStatus_workOrderPage(arg0);
            }
            catch (Exception e1){

            }
        }
    }
    @Then("user enters plaza request id in the source id field")
    public void userEntersPlazaRequestIdInTheSourceIdField() {
        workOrderPage.wait(10000);
        workOrderPage.enterSourceID(CommonUtils.plazaRequestID);
    }

    @Then("user should see plaza ticket")
    public void userShouldSeePlazaTicket() {
        
    }

    @And("user validates source field as {string}")
    public void userValidatesSourceFieldAs(String arg0) {
        Assert.assertEquals(workOrderPage.getSource(), arg0);
    }

    @And("user validates title field as {string}")
    public void userValidatesTitleFieldAs(String arg0) {
        Assert.assertEquals(workOrderPage.getTitle(), arg0);
    }

    @And("user validates description")
    public void userValidatesDescriptionAs() {
        Assert.assertTrue(workOrderPage.verifyDescription());

    }

    @And("user validates {string} is listed as an interested party")
    public void userValidatesIsListedAsAnInterestedParty(String arg0) {
        Assert.assertEquals(workOrderPage.verifyPlazaIsListedUnderInterestedParties("Last Name", 1), arg0);
    }

    @And("user validates request type as {string}")
    public void userValidatesRequestTypeAs(String arg0) {
        Assert.assertEquals(workOrderPage.getRequestType(), arg0);
    }

    @And("user validates back up description same as plaza")
    public void userValidatesBackUpOneTimeDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyBackUpDescription());
    }
    @And("user validates back up Reschedule description same as plaza")
    public void userValidatesBackUpRescheduleDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyBackUpReScheduleDescription());
    }
    @And("user validates back up restore description same as plaza")
    public void userValidatesBackUpRestoreDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyBackUpRestoreDescription());
    }

    @And("user validates back up verify description same as plaza")
    public void userValidatesBackUpVerifyDescriptionSameAsPlaza() {
      Assert.assertTrue(workOrderPage.verifyBackUpVerifyDescription());
    }

    @And("user validates BDL description same as plaza description")
    public void userValidatesBDLDescriptionSameAsPlazaDescription() {
        Assert.assertTrue(workOrderPage.verify_BDL_Description());
    }

    @And("user validates C2B cache deployment description same as plaza")
    public void userValidatesCBCacheDeploymentDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyC2BCacheDeploymentDescription());
    }

    @And("user validates C2B cache general description same as plaza")
    public void userValidatesCBCacheGeneralDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyC2BCacheGeneralDescription());
    }

    @And("user validates C2B service description same as plaza")
    public void userValidatesCBServiceDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyC2BServiceDescription());
    }

    @And("user validates CRM description same as plaza")
    public void userValidatesCRMDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyCRMDescription());
    }

    @And("user validates Data center cabling new description same as plaza")
    public void userValidatesDataCenterCablingNewDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyDataCenterCablingNewDescription());
    }

    @And("user validates Data center cabling remove description same as plaza")
    public void userValidatesDataCenterCablingRemoveDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyDataCenterCablingRemoveDescription());
    }

    @And("user validates Data center network equipment new description same as plaza")
    public void userValidatesDataCenterNetworkEquipmentNewDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyDataCenterNetworkEquipmentNewDescription());
    }

    @And("user validates Data center network equipment remove description same as plaza")
    public void userValidatesDataCenterNetworkEquipmentRemoveDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyDataCenterNetworkEquipmentRemoveDescription());
    }

    @And("user validates Data center on site services description same as plaza")
    public void userValidatesDataCenterOnSiteServicesDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyDataCenterOnSiteServicesDescription());
    }

    @And("user validates Data center request description same as plaza")
    public void userValidatesDataCenterRequestDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyDataCenterRequestDescription());
    }

    @And("user validates Database access request description same as plaza")
    public void userValidatesDatabaseAccessRequestDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyDatabaseAccessRequestDescription());
    }

    @And("user validates Database access request oracle description same as plaza")
    public void userValidatesDatabaseAccessRequestOracleDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyDatabaseAccessRequestOracleDescription());
    }

    @And("user validates Database access request postgre description same as plaza")
    public void userValidatesDatabaseAccessRequestPostgreDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyDatabaseAccessRequestPostgreDescription());
    }

    @And("user validates Database backup or restore description same as plaza")
    public void userValidatesDatabaseBackupOrRestoreDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyDatabaseBackupOrRestoreDescription());
    }

    @And("user validates Database configure database parameters description same as plaza")
    public void userValidatesDatabaseConfigureDatabaseParametersDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyDatabaseConfigureDatabaseParametersDescription());
    }

    @And("user validates Database performance troubleshooting description same as plaza")
    public void userValidatesDatabasePerformanceTroubleshootingDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyDatabasePerformanceTroubleshootingDescription());
    }

    @And("user validates Finance & Assurance description same as plaza")
    public void userValidatesFinanceAssuranceDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyFinanceAndAssuranceDescription());
    }

    @And("user validates Messaging callguide mail description same as plaza")
    public void userValidatesMessagingCallguideMailDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.MessagingCallGuideMailDescription());
    }

    @And("user validates messaging clean mail description same as plaza")
    public void userValidatesMessagingCleanMailDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.MessagingCleanMailDescription());
    }

    @And("user validates messaging denmark mail description same as plaza")
    public void userValidatesMessagingDenmarkMailDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.MessagingDenmarkMailDescription());
    }

    @And("user validates messaging smtp support description same as plaza")
    public void userValidatesMessagingSmtpSupportDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.MessagingSMTPSupportDescription());
    }

    @And("user validates messaging tsf mail description same as plaza")
    public void userValidatesMessagingTsfMailDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.MessagingTsfMailDescription());
    }

    @And("user validates messaging tss mail description same as plaza")
    public void userValidatesMessagingTssMailDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.MessagingTssMailDescription());
    }

    @And("user validates messaging tss premium mail description same as plaza")
    public void userValidatesMessagingTssPremiumMailDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.MessagingTssPremiumMailDescription());
    }

    @And("user validates network security add modify remove description same as plaza")
    public void userValidatesNetworkSecurityAddModifyRemoveDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.NetworkSecurityAddModifyRemoveDescription());
    }

    @And("user validates network security dns sweden description same as plaza")
    public void userValidatesNetworkSecurityDnsSwedenDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.NetworkSecurityDnsSwedenDescription());
    }

    @And("user validates network security firewall new change description same as plaza")
    public void userValidatesNetworkSecurityFirewallNewChangeDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.NetworkSecurityFirewallNewChangeDescription());
    }

    @And("user validates network security firewall troubleshoot description same as plaza")
    public void userValidatesNetworkSecurityFirewallTroubleshootDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.NetworkSecurityFirewallTroubleshootDescription());
    }

    @And("user validates network security lan description same as plaza")
    public void userValidatesNetworkSecurityLanDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.NetworkSecurityLanDescription());
    }

    @And("user validates network security load balancing description same as plaza")
    public void userValidatesNetworkSecurityLoadBalancingDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.NetworkSecurityLoadBalancingDescription());
    }

    @And("user validates network security new switch description same as plaza")
    public void userValidatesNetworkSecurityNewSwitchDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.NetworkSecurityNewSwitchDescription());
    }

    @And("user validates network security new vlan description same as plaza")
    public void userValidatesNetworkSecurityNewVlanDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.NetworkSecurityNewVlanDescription());
    }

    @And("user validates network security proxy general inquiry description same as plaza")
    public void userValidatesNetworkSecurityProxyGeneralInquiryDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.NetworkSecurityProxyGeneralInquiryDescription());
    }

    @And("user validates network security proxy resource request description same as plaza")
    public void userValidatesNetworkSecurityProxyResourceRequestDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.NetworkSecurityProxyResourceRequestDescription());
    }

    @And("user validates network security proxy reverse proxy description same as plaza")
    public void userValidatesNetworkSecurityProxyReverseProxyDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.NetworkSecurityProxyReverseProxyDescription());
    }
}

