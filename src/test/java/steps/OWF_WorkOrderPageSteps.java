package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.testng.Assert;
import pageObjects.OWF_WorkOrderPage;
import utils.CommonUtils;

public class OWF_WorkOrderPageSteps {

   OWF_WorkOrderPage workOrderPage= new OWF_WorkOrderPage();


    @And("user validates ticket status as {string}")
    public void userValidatesTicketStatusAs(String arg0) {
        Assert.assertEquals(workOrderPage.getStatusText(), arg0, "Status is not new");
        workOrderPage.wait(1000);
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
     Assert.assertEquals(workOrderPage.getAssignedProfileStatus(),arg0);

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

    @Then("user should see {string} notification in inbound in row {string}")
    public void userShouldSeeNotificationInInboundInRow(String arg0, String rowNum) {
        int row= Integer.parseInt(rowNum);
        Assert.assertEquals(workOrderPage.getInboundText("Operation", row), arg0);
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

    @And("user validates PDB title field as {string}")
    public void userValidatesTitleFieldAs(String arg0) {
        ////String expectedTitle= " "+arg0;
        //System.out.println("Expected plaza title is " +expectedTitle);
        Assert.assertEquals(workOrderPage.getTitle(), arg0);
    }

    @And("user validates title field as {string}")
    public void userValidatesPdbTitleFieldAs(String arg0) {
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
        Assert.assertTrue(workOrderPage.verifyMessagingCallGuideMailDescription());
    }

    @And("user validates messaging clean mail description same as plaza")
    public void userValidatesMessagingCleanMailDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyMessagingCleanMailDescription());
    }

    @And("user validates messaging denmark mail description same as plaza")
    public void userValidatesMessagingDenmarkMailDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyMessagingDenmarkMailDescription());
    }

    @And("user validates messaging smtp support description same as plaza")
    public void userValidatesMessagingSmtpSupportDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyMessagingSMTPSupportDescription());
    }

    @And("user validates messaging tsf mail description same as plaza")
    public void userValidatesMessagingTsfMailDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyMessagingTsfMailDescription());
    }

    @And("user validates messaging tss mail description same as plaza")
    public void userValidatesMessagingTssMailDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyMessagingTssMailDescription());
    }

    @And("user validates messaging tss premium mail description same as plaza")
    public void userValidatesMessagingTssPremiumMailDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyMessagingTssPremiumMailDescription());
    }

    @And("user validates network security add modify remove description same as plaza")
    public void userValidatesNetworkSecurityAddModifyRemoveDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNetworkSecurityAddModifyRemoveDescription());
    }

    @And("user validates network security dns sweden description same as plaza")
    public void userValidatesNetworkSecurityDnsSwedenDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNetworkSecurityDnsSwedenDescription());
    }

    @And("user validates network security firewall new change description same as plaza")
    public void userValidatesNetworkSecurityFirewallNewChangeDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNetworkSecurityFirewallNewChangeDescription());
    }

    @And("user validates network security firewall troubleshoot description same as plaza")
    public void userValidatesNetworkSecurityFirewallTroubleshootDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNetworkSecurityFirewallTroubleshootDescription());
    }

    @And("user validates network security lan description same as plaza")
    public void userValidatesNetworkSecurityLanDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNetworkSecurityLanDescription());
    }

    @And("user validates network security load balancing description same as plaza")
    public void userValidatesNetworkSecurityLoadBalancingDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNetworkSecurityLoadBalancingDescription());
    }

    @And("user validates network security new switch description same as plaza")
    public void userValidatesNetworkSecurityNewSwitchDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNetworkSecurityNewSwitchDescription());
    }

    @And("user validates network security new vlan description same as plaza")
    public void userValidatesNetworkSecurityNewVlanDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNetworkSecurityNewVlanDescription());
    }

    @And("user validates network security proxy general inquiry description same as plaza")
    public void userValidatesNetworkSecurityProxyGeneralInquiryDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNetworkSecurityProxyGeneralInquiryDescription());
    }

    @And("user validates network security proxy resource request description same as plaza")
    public void userValidatesNetworkSecurityProxyResourceRequestDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNetworkSecurityProxyResourceRequestDescription());
    }

    @And("user validates network security proxy reverse proxy description same as plaza")
    public void userValidatesNetworkSecurityProxyReverseProxyDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNetworkSecurityProxyReverseProxyDescription());
    }

    @And("user validates network security proxy surf proxy description same as plaza")
    public void userValidatesNetworkSecurityProxySurfProxyDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNetworkSecurityProxySurfProxyDescription());
    }

    @And("user validates network security proxy surf proxy one or few users description same as plaza")
    public void userValidatesNetworkSecurityProxySurfProxyOneOrFewUsersDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNetworkSecurityProxySurfProxyOneOrFewUsersDescription());
    }

    @And("user validates network security proxy surf proxy slow surfing description same as plaza")
    public void userValidatesNetworkSecurityProxySurfProxySlowSurfingDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNetworkSecurityProxySurfProxySlowSurfingDescription());

    }

    @And("user validates network security proxy surf proxy whitelisting description")
    public void userValidatesNetworkSecurityProxySurfProxyWhitelisting() {
        Assert.assertTrue(workOrderPage.verifyNetworkSecurityProxySurfProxyWhitelistingDescription());
    }

    @And("user validates network security remote access description")
    public void userValidatesNetworkSecurityRemoteAccessDescription() {
        Assert.assertTrue(workOrderPage.verifyNetworkSecurityRemoteAccessDescription());
    }

    @And("user validates network security switch port config description same as plaza")
    public void userValidatesNetworkSecuritySwitchPortConfigDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNetworkSecuritySwitchPortConfigDescription());
    }

    @And("user validates nimbus add modify remove description same as plaza")
    public void userValidatesNimbusAddModifyRemoveDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNimbusAddModifyRemoveDescription());
    }

    @And("user validates nimbus decommision vm description same as plaza")
    public void userValidatesNimbusDecommisionVmDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNimbusDecommisionVmDescription());
    }

    @And("user validates nimbus expand backup archive disk description same as plaza")
    public void userValidatesNimbusExpandBackupArchiveDiskDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNimbusExpandBackupArchiveDiskDescription());
    }

    @And("user validates nimbus extend disk red hat description same as plaza")
    public void userValidatesNimbusExtendDiskRedHatDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNimbusExtendDiskRedHatDescription());
    }

    @And("user validates nimbus extend disk windows description same as plaza")
    public void userValidatesNimbusExtendDiskWindowsDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNimbusExtendDiskWindowsDescription());

    }

    @And("user validates nimbus hot add cpu or ram description same as plaza")
    public void userValidatesNimbusHotAddCpuOrRamDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNimbusHotAddCpuOrRamDescription());
    }

    @And("user validates nimbus modify onboarding description same as plaza")
    public void userValidatesNimbusModifyOnboardingDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNimbusModifyOnboardingDescription());
    }

    @And("user validates nimbus network onboarding nordic description same as plaza")
    public void userValidatesNimbusNetworkOnboardingNordicDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNimbusNetworkOnboardingNordicDescription());
    }

    @And("user validates nimbus onboard to skypoint description same as plaza")
    public void userValidatesNimbusOnboardToSkypointDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNimbusOnboardToSkypointDescription());
    }

    @And("user validates nimbus restore vm description same as plaza")
    public void userValidatesNimbusRestoreVmDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNimbusRestoreVmDescription());
    }

    @And("user validates nimbus skypoint failed request description same as plaza")
    public void userValidatesNimbusSkypointFailedRequestDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNimbusSkypointFailedRequestDescription());
    }

    @And("user validates operating system access description same as plaza")
    public void userValidatesOperatingSystemAccessDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyOperatingSystemAccessDescription());
    }

    @And("user validates operating system account management description same as plaza")
    public void userValidatesOperatingSystemAccountManagementDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyOperatingSystemAccountManagementDescription());
    }

    @And("user validates operating system change from auto description same as plaza")
    public void userValidatesOperatingSystemChangeFromAutoDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyOperatingSystemChangeFromAutoDescription());
    }

    @And("user validates operating system change from manual description same as plaza")
    public void userValidatesOperatingSystemChangeFromManualDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyOperatingSystemChangeFromManualDescription());
    }

    @And("user validates operating system manual os patching description same as plaza")
    public void userValidatesOperatingSystemManualOsPatchingDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyOperatingSystemManualOSPatchingDescription());
    }

    @And("user validates bccp description same as plaza")
    public void userValidatesBccpDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyBccpDescription());
    }

    @And("user validates cews description same as plaza")
    public void userValidatesCewsDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyCewsDescription());
    }

    @And("user validates cloud one time snap description same as plaza")
    public void userValidatesCloudOneTimeSnapDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyCloudOneTimeSnapDescription());
    }

    @And("user validates Ebill description same as plaza")
    public void userValidatesEbillDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyEbillDescription());
    }

    @And("user validates efs-bss description same as plaza")
    public void userValidatesEfsBssDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyEfsBssDescription());
    }

    @And("user validates it fi description same as plaza")
    public void userValidatesItFiDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyItFiDescription());
    }

    @And("user validates managed voice description same as plaza")
    public void userValidatesManagedVoiceDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyManagedVoiceDescription());
    }

    @And("user validates megadisc add user description same as plaza")
    public void userValidatesMegadiscAddUserDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyMegadiscAddUserDescription());
    }

    @And("user validates megadisc remove user description same as plaza")
    public void userValidatesMegadiscRemoveUserDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyMegadiscRemoveUserDescription());
    }

    @And("user validates nnm no description same as plaza")
    public void userValidatesNnmNoDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNnmNoDescription());
    }

    @And("user validates nnm yes description same as plaza")
    public void userValidatesNnmYesDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyNnmYesDescription());
    }

    @And("user validates occ description same as plaza")
    public void userValidatesOccDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyOccDescription());
    }

    @And("user validates pollux prod description same as plaza")
    public void userValidatesPolluxProdDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyPolluxProdDescription());
    }

    @And("user validates span description same as plaza")
    public void userValidatesSpanDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifySpanDescription());
    }

    @And("user validates splunk description same as plaza")
    public void userValidatesSplunkDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifySplunkDescription());
    }

    @And("user validates topcat description same as plaza")
    public void userValidatesTopcatDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyTopcatDescription());
    }

    @And("user validates tspan description same as plaza")
    public void userValidatesTspanDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyTspanDescription());
    }

    @And("user validates veha network management description same as plaza")
    public void userValidatesVehaNetworkManagementDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyVehaNetworkManagementDescription());
    }

    @And("user validates web tab description same as plaza")
    public void userValidatesWebTabDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyWebTabDescription());
    }

    @And("user validates storage configure description same as plaza")
    public void userValidatesStorageConfigureDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyStorageConfigureDescription());
    }

    @And("user validates storage export volume description same as plaza")
    public void userValidatesStorageExportVolumeDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyStorageExportVolumeDescription());
    }

    @And("user validates storage volume snapshot description same as plaza")
    public void userValidatesStorageVolumeSnapshotDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyStorageVolumeSnapshotDescription());
    }

    @And("user validates tcfp add user description same as plaza")
    public void userValidatesTcfpAddUserDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyTcfpAddUserDescription());
    }

    @And("user validates tcfp general inquiry description same as plaza")
    public void userValidatesTcfpGeneralInquiryDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyTcfpGeneralInquiryDescription());
    }

    @And("user validates tcfp remove user description same as plaza")
    public void userValidatesTcfpRemoveUserDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyTcfpRemoveUserDescription());
    }

    @And("user validates PDB description same as Plaza")
    public void userValidatesPDBDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyPlazaPDB_Description());
    }

    @And("user validates description as {string}")
    public void userValidatesDescriptionAs(String arg0) {
        Assert.assertEquals(workOrderPage.getDescription(), arg0);
    }

    @And("user validates reassigned reason as {string}")
    public void userValidatesReassignedReasonAs(String arg0) {
        Assert.assertEquals(workOrderPage.getReassignedReason(), arg0);
    }

    @And("user validates technology as {string}")
    public void userValidatesTechnologyAs(String arg0) {
        Assert.assertEquals(workOrderPage.getTechnology(), arg0);
    }

    @And("user validates email notification is sent")
    public void userValidatesEmailNotificationIsSent() {
      workOrderPage.clickOnSent();
      Assert.assertEquals(workOrderPage.getMethodText(), "Email - HTML");
    }

    @And("user highlights ticket under work order")
    public void userHighlightsTicketUnderWorkOrder() {
        workOrderPage.clickElement(By.xpath("//*[@id='T777504000']/tbody/tr[2]/td[1]"));
    }

    @And("user validates template as {string}")
    public void userValidatesTemplateAs(String arg0) {
        Assert.assertEquals(workOrderPage.getMethodText(), arg0);

    }

    @And("user validates parent ticket id as {string}")
    public void userValidatesParentTicketIdAs(String arg0) {
        Assert.assertEquals(workOrderPage.getParentTicketId(), arg0);
    }

    @Then("user validates reason as {string}")
    public void userValidatesReasonAs(String arg0) {
        Assert.assertEquals(workOrderPage.getReason(), arg0);
    }

    @And("user validates sla with customer as {string}")
    public void userValidatesSlaWithCustomerAs(String arg0) {
        Assert.assertEquals(workOrderPage.getSlaWithCustomer(), arg0);
    }

    @Then("user validates sla class as {string}")
    public void userValidatesSlaClassAs(String arg0) {
        Assert.assertEquals(workOrderPage.getSlaClass(), arg0);

    }

    @And("user validates event start time as {string}")
    public void userValidatesEventStartTimeAs(String arg0) {
        Assert.assertEquals(workOrderPage.getEventStartTime(), arg0);
    }

    @When("user enters estimated ready as {string}")
    public void userEntersEstimatedReadyAs(String arg0) {
        workOrderPage.enterEstimatedReady(arg0);
    }

    @When("user enters estimated ready as current date and time")
    public void userEntersEstimatedReadyAsCurrentDateAndTime() {
        workOrderPage.enterEstimatedReadyAsCurrentDateAndTime();

    }

    @Then("user selects owner profile as {string}")
    public void userSelectsOwnerProfileAs(String arg0) {
        workOrderPage.selectOwner(arg0);
    }

    @And("user enters request scheduled end time as {string}")
    public void userEntersRequestScheduledEndTimeAs(String arg0) {
        workOrderPage.enterRequestedScheduleEnd(arg0);
    }

    @And("user enters estimated schedule start date as {string}")
    public void userEntersEstimatedScheduleStartDateAs(String arg0) {
        workOrderPage.enterEstimatedScheduleStart(arg0);
    }

    @And("user enters estimated schedule end date as {string}")
    public void userEntersEstimatedScheduleEndDateAs(String arg0) {
        workOrderPage.enterEstimatedScheduleEnd(arg0);
    }

        @And("user enters actual schedule start date as {string}")
        public void userEntersActualScheduleStartDateAs (String arg0){
            workOrderPage.enterActualScheduleStart(arg0);
        }

        @And("user enters actual schedule end date as {string}")
        public void userEntersActualScheduleEndDateAs (String arg0){
            workOrderPage.enterActualScheduleEnd(arg0);
        }

    @Then("user validates check profile in ow description same as plaza")
    public void userValidatesCheckProfileInOwDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyCheckProfilesInOwDescription());
    }

    @Then("user validates appwatch description same as plaza")
    public void userValidatesAppwatchDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyAppwatchDescription());
    }

    @And("user validates ibs customer or server activation description same as plaza")
    public void userValidatesIbsCustomerOrServerActivationDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyIbsCustomerOrServerActivation());
    }

    @And("user validates ibs order virtual server description same as plaza")
    public void userValidatesIbsOrderVirtualServerDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyIbsOrderVirtualServerToDdc());
    }

    @And("user validates touchpoint plus add dns entry description same as plaza")
    public void userValidatesTouchpointPlusAddDnsEntryDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyTouchpointPlusAddDnsEntry());
    }

    @Then("user validates touchpoint plus add sms provider same as plaza")
    public void userValidatesTouchpointPlusAddSmsProviderSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyTouchpointPlusAddSmsProvider());
    }

    @Then("user validates touchpoint plus add ssl certificate description same as plaza")
    public void userValidatesTouchpointPlusAddSslCertificateDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyTouchpointPlusAddSslCertificate());
    }

    @Then("user validates touchpoint plus new export or import tool template same as plaza")
    public void userValidatesTouchpointPlusNewExportOrImportToolTemplateSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyTouchpointPlusNewExportOrImport());
    }

    @Then("user validates touchpoint plus update support pages same as plaza")
    public void userValidatesTouchpointPlusUpdateSupportPagesSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyTouchpointPlusUpdateSupportPages());
    }

    @And("user validates linux description same as Plaza")
    public void userValidatesLinuxDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifylinux());
    }

    @And("user validates cloud description same as Plaza")
    public void userValidatesCloudDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyCloudE2E());
    }

    @And("user validates windows server description same as Plaza")
    public void userValidatesWindowsServerDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verifyWindowsServer());
    }

    @And("user validates OP ticket description same as plaza")
    public void userValidatesOPTicketDescriptionSameAsPlaza() {
        Assert.assertTrue(workOrderPage.verify_OP_Ticket_Description());
    }

    @And("user gets work order event start time")
    public void userGetsWorkOrderEventStartTime() {
        CommonUtils.WO_eventStartTime=workOrderPage.getEventStartTime();
        System.out.println("Event start time when WO is in new status is - " + CommonUtils.WO_eventStartTime);
    }

    @Then("user validates event start time is same as when ticket was in new status")
    public void userValidatesEventStartTimeIsSameAsWhenTicketWasInNewStatus() {
        String assignedWO_eventStartTime= workOrderPage.getEventStartTime();
        System.out.println("Event start time when WO is in Assigned status is - " + assignedWO_eventStartTime);
        Assert.assertEquals(assignedWO_eventStartTime, CommonUtils.WO_eventStartTime);

    }
}


