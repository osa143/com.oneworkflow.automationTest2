package steps.plaza_steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import org.openqa.selenium.By;
import org.testng.Assert;
import pageObjects.BasePage;
import pageObjects.plaza.Plaza_HomePage;
import utils.CommonUtils;

public class Plaza_HomePageSteps extends BasePage {
    Plaza_HomePage homePage = new Plaza_HomePage();

    @Then("user should see the plaza home page")
    public void userShouldSeeThePlazaHomePage() {
        //Assert.assertEquals(homePage.getTitle_plazaHomePage(), "ServiceNow");
    }

    @When("user clicks on {string}")
    public void userClicksOnButton(String text) {
        homePage.clickElementByContainsTextAndTagName("*", text);
    }


    @Then("user should see Finance & Assurance form")
    public void userShouldSeeFinanceAssuranceForm() {

    }

    @When("user selects role dropdown as {string}")
    public void userSelectsRoleDropdownAs(String arg0) {
        homePage.selectRoleDropdown(arg0);
    }

    @And("user enters {string} in the request field")
    public void userEntersInTheRequestField(String arg0) {
        homePage.enterRequest(arg0);
    }

    @And("user selects system dropdown as {string}")
    public void userSelectsSystemDropdownAs(String arg0) {
        homePage.selectSystemDropdown(arg0);
    }

    @And("user enters planned start time as current time")
    public void userEntersPlannedStartTimeAsCurrentTime() {
        homePage.enterPlannedStart(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @And("user enters planned end time as current time")
    public void userEntersPlannedEndTimeAsCurrentTime() {
        homePage.enterPlannedEnd(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @And("user enters plaza description as {string}")
    public void userEntersPlazaDescriptionAs(String arg0) {
        homePage.enterDescription(arg0);
    }

    @And("user enters additional comments as {string}")
    public void userEntersAdditionalCommentsAs(String arg0) {
        homePage.enterAdditionalComments(arg0);
    }

    @And("user clicks on order")
    public void userClicksOnOrder() {
        homePage.clickOrder();
    }

    @When("user clicks on Finance & Assurance")
    public void userClicksOnFinanceAssurance() {
        homePage.clickFinanceAssurance();

    }

    @And("user gets plaza request id")
    public void userGetsPlazaRequestId() {
        homePage.wait(5000);
        CommonUtils.plazaRequestID = homePage.getPlazaRequestNum();
    }

    @And("user clicks on plaza request id")
    public void userClicksOnPlazaRequestId() {
        homePage.clickPlazaRequestNum();
        homePage.wait(3000);
    }

    @Then("user should see service request form")
    public void userShouldSeeServiceRequestForm() {
        homePage.wait(2000);
    }

    @When("user opens new tab")
    public void userOpensNewTab() {
        homePage.openNewTab();
        homePage.wait(1000);
    }


    @When("user clicks on CRM pebble")
    public void userClicksOnPebble() {
        homePage.clickOnCRM_Pebble();
    }

    @Then("user should see CRM form")
    public void userShouldSeeCRMForm() {

    }

    @And("user selects service request name as {string}")
    public void userSelectsServiceRequestNameAs(String arg0) {
        homePage.selectServiceRequestName(arg0);
    }

    @And("user enters CRM request as {string}")
    public void userEntersCRMRequestAs(String arg0) {
        homePage.enterCRMRequest(arg0);
    }

    @And("user enters CRM planned start date as current date")
    public void userEntersCRMPlannedStartDateAsCurrentDate() {
        homePage.enterCRMPlannedStart(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @And("user enters CRM planned end date as current date")
    public void userEntersCRMPlannedEndDateAsCurrentDate() {
        homePage.enterCRMPlannedEnd(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @And("user enters CRM description as {string}")
    public void userEntersCRMDescriptionAs(String arg0) {
        homePage.enterCRMDescription(arg0);
    }

    @And("user selects CRM system as {string}")
    public void userSelectsCRMSystemAs(String arg0) {
        homePage.selectCRMSystemDropdown(arg0);
    }

    @Then("user should see {string} form")
    public void userShouldSeeForm(String arg0) {

    }

    @And("user enters C2B request as {string}")
    public void userEntersC2BRequestAs(String arg0) {
        homePage.enterC2B_Request(arg0);
    }

    @And("user selects C2B environment as {string}")
    public void userSelectsC2BEnvironmentAs(String arg0) {
        homePage.selectEnvironment(arg0);
    }

    @And("user enters C2B description as {string}")
    public void userEntersC2BDescriptionAs(String arg0) {
        homePage.enterC2B_Description(arg0);
    }

    @And("user selects select request as {string}")
    public void userSelectsSelectRequestAs(String arg0) {
        homePage.select_selectRequest(arg0);
    }

    @And("user enters C2B general request as {string}")
    public void userEntersCBGeneralRequestAs(String arg0) {
        homePage.enterC2B_generalRequest(arg0);
    }

    @And("user selects C2B general environment as {string}")
    public void userSelectsCBGeneralEnvironmentAs(String arg0) {
        homePage.selectC2B_GeneralEnvironment(arg0);
    }

    @And("user enters C2B general description as {string}")
    public void userEntersCBGeneralDescriptionAs(String arg0) {
        homePage.enterC2B_general_Description(arg0);
    }

    @And("user enters C2B service request as {string}")
    public void userEntersCBServiceRequestAs(String arg0) {
        homePage.enterC2B_serviceRequest(arg0);
    }

    @And("user enters C2B environment as {string}")
    public void userEntersCBEnvironmentAs(String arg0) {
        homePage.selectC2B_serviceEnvironment(arg0);
    }

    @And("user enters C2B service description as {string}")
    public void userEntersCBServiceDescriptionAs(String arg0) {
        homePage.enterC2B_service_Description(arg0);
    }

    @And("user enters BCCP request as {string}")
    public void userEntersBCCPRequestAs(String arg0) {
        homePage.enterC2B_BCPP_Request(arg0);
    }

    @And("user selects BCPP environment as {string}")
    public void userSelectsBCPPEnvironmentAs(String arg0) {
        homePage.selectBCPP_Environment(arg0);
    }

    @And("user selects Add ci as {string}")
    public void userEntersAddCiAs(String arg0) {
        homePage.selectsAddCi(arg0);
    }

    @And("user enters BCPP description as {string}")
    public void userEntersBCPPDescriptionAs(String arg0) {
        homePage.enterBCPP_Description(arg0);
    }

    @Then("user clicks on the contact checkbox")
    public void userClicksOnTheContactCheckbox() {
        homePage.clickContact();
    }


    @And("user then clicks on the name not found checkbox")
    public void userThenClicksOnTheNameNotFoundCheckbox() {
        homePage.clickNameNotFound();
    }

    @And("user enters name field as {string}")
    public void userEntersNameFieldAs(String arg0) {
        homePage.enterName(arg0);
    }

    @Then("user enters email address field as {string}")
    public void userEntersEmailAddressFieldAs(String text) {
        homePage.enterEmail(text);
    }

    @Then("user enters phone field as {string}")
    public void userEntersPhoneFieldAs(String arg0) {
        homePage.enterPhone(arg0);
    }

    @And("user enters Backup request as {string}")
    public void userEntersBackupReScheduleRequestAs(String arg0) {
        homePage.enterReschedule_request(arg0);

    }

    @And("user enters Backup \\(Re)Schedule schedule as {string}")
    public void userEntersBackupReScheduleScheduleAs(String arg0) {
        homePage.enterSchedule(arg0);
    }

    @And("user enters Backup \\(Re)Schedule UNC Local path as {string}")
    public void userEntersBackupReScheduleUNCLocalPathAs(String arg0) {
        homePage.enterUnc_Local(arg0);
    }

    @Then("user enters Backup description as {string}")
    public void userEntersBackupReScheduleDescriptionAs(String arg0) {
        homePage.enterDescription_Reschedule(arg0);
    }

    @And("user selects Add CI back up as {string}")
    public void userSelectsAddCIRescheduleAs(String arg0) {
        homePage.selectsAddCi_back_up(arg0);
    }

    @And("user clicks on add attachment in plaza")
    public void userClicksOnAddAttachmentInPlaza() {
        homePage.clickAddAttachment();

    }

    @And("user enters Backup one time UNC Local path as {string}")
    public void userEntersBackupOneTimeUNCLocalPathAs(String arg0) {

        homePage.enterIncludeCI(arg0);
    }

    @And("user enters Retention period as {string}")
    public void userEntersRetentionPeriodAs(String arg0) {
        homePage.enterRetentionPeriod(arg0);
    }

    @And("user enters back up date and as current date and time")
    public void userEntersBackUpDateAndAsCurrentDateAndTime() {
        homePage.enterBackUpDateTime(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @And("user enters Backup UNC Local path as {string}")
    public void userEntersBackupUNCLocalPathAs(String arg0) {
        homePage.enterRestore_Ci_Unc(arg0);
    }

    @And("user enters Backup restore files as {string}")
    public void userEntersBackupRestoreFilesAs(String arg0) {
        homePage.enterRestore_Files(arg0);
    }

    @And("user enters BDL request as {string}")
    public void userEntersBDLRequestAs(String arg0) {
        homePage.enterBDL_request(arg0);
    }

    @And("user selects all CI's from AT1 field")
    public void userSelectsATFieldAs(DataTable CINames) {
        homePage.selectAllCINames(CINames);
    }

    @And("user enters {string} in the WBS Code field")
    public void userEntersInTheWBSCodeField(String arg0) {
        homePage.enterBDL_wbsCode(arg0);
    }

    @And("user enters BDL description as {string}")
    public void userEntersBDLDescriptionAs(String arg0) {
        homePage.enterBDL_Description(arg0);
    }

    @And("user enters Cabling - New request as {string}")
    public void userEntersCablingNewRequestAs(String arg0) {
        homePage.enterCablingNew_request(arg0);
    }

    @And("user enters DC-site or address as {string}")
    public void userEntersDCSiteOrAddressAs(String arg0) {
        homePage.enterCablingNew_DC_Site(arg0);
    }

    @And("user enters Room as {string}")
    public void userEntersRoomAs(String arg0) {
        homePage.enterCablingNew_Room(arg0);
    }

    @And("user enters delivery date as current date")
    public void userEntersDeliveryDateAsCurrentDate() {
        homePage.enterCablingNew_deliveryDate(CommonUtils.getDate("Europe/Stockholm"));
    }

    @Then("user enters Data Center description as {string}")
    public void userEntersDataCenterDescriptionAs(String arg0) {
        homePage.enterCablingNew_description(arg0);
    }

    @And("user enters WBS Code field as {string}")
    public void userEntersWBSCodeFieldAs(String arg0) {
        homePage.enterCablingNew_wbsCode(arg0);
    }

    @And("user enters Data Center Request WBS Code field as {string}")
    public void userEntersDataCenterRequestWBSCodeFieldAs(String arg0) {
        homePage.enterDataCentre_wbsCode(arg0);
    }

    @And("user enters Data Center Request request as {string}")
    public void userEntersDataCenterRequestRequestAs(String arg0) {
        homePage.enterDataCentre_request(arg0);
    }

    @And("user enters Data Center Request DC-site or address as {string}")
    public void userEntersDataCenterRequestDCSiteOrAddressAs(String arg0) {
        homePage.enterDataCentre_DC_Site(arg0);
    }

    @And("user enters Data Center Request Room as {string}")
    public void userEntersDataCenterRequestRoomAs(String arg0) {
        homePage.enterDataCentre_Room(arg0);
    }

    @And("user enters Data Center Request delivery date as current date")
    public void userEntersDataCenterRequestDeliveryDateAsCurrentDate() {
        homePage.enterDataCentre_deliveryDate(CommonUtils.getDate("Europe/Stockholm"));
    }

    @And("user should see pop window with info about missing field")
    public void userShouldSeePopWindowWithInfoAboutMissingField() {
    }

    @Then("user enters Data Center Request description as {string}")
    public void userEntersDataCenterRequestDescriptionAs(String arg0) {
        homePage.enterDataCentre_description(arg0);
    }

    @And("user enters Network Equipment Request as {string}")
    public void userEntersNetworkEquipmentRequestAs(String arg0) {
        homePage.enterNetworkEquipment_request(arg0);

    }

    @And("user enters Network Equipment DC-site or address as {string}")
    public void userEntersNetworkEquipmentDCSiteOrAddressAs(String arg0) {
        homePage.enterNetworkEquipment_dc_site(arg0);
    }

    @And("user enters Network Equipment Room as {string}")
    public void userEntersNetworkEquipmentRoomAs(String arg0) {
        homePage.enterNetworkEquipment_room(arg0);
    }

    @And("user selects Network Equipment CI as {string}")
    public void userSelectsNetworkEquipmentCIAs(String arg0) {
        homePage.selectNetwork_EquipmentCI(arg0);
    }

    @And("user enters Network Equipment requested delivery date as current date and time")
    public void userEntersNetworkEquipmentRequestedDeliveryDateAsCurrentDateAndTime() {
        homePage.enterNetworkEquipment_delivery(CommonUtils.getDate("Europe/Stockholm"));
    }

    @And("user enters Network Equipment WBS Code field as {string}")
    public void userEntersNetworkEquipmentWBSCodeFieldAs(String arg0) {
        homePage.enterNetworkEquipment_wbsCode(arg0);
    }

    @And("user enters Network Equipment description as {string}")
    public void userEntersNetworkEquipmentDescriptionAs(String arg0) {
        homePage.enterNetworkEquipment_description(arg0);
    }

    @And("user enters Network Equipment DNS IP Address as as {string}")
    public void userEntersNetworkEquipmentDNSIPAddressAsAs(String arg0) {
        homePage.enterNetworkEquipment_dnsIpAddress(arg0);
    }

    @And("user enters Network Equipment date for decommission as current date and time")
    public void userEntersNetworkEquipmentDateForDecommissionAsCurrentDateAndTime() {
        homePage.enterNetworkEquipment_dateFordecommission(CommonUtils.getDate("Europe/Stockholm"));
    }

    @And("user enters on site services Request as {string}")
    public void userEntersOnSiteServicesRequestAs(String arg0) {
        homePage.enterOnSiteServices_Request(arg0);

    }

    @And("user enters on site services DC-site or address as {string}")
    public void userEntersOnSiteServicesDCSiteOrAddressAs(String arg0) {
        homePage.enterOnSiteServices_dc_site(arg0);
    }

    @Then("user enters on site services description as {string}")
    public void userEntersOnSiteServicesDescriptionAs(String arg0) {
        homePage.enterOnSiteServices_Description(arg0);
    }

    @And("user clicks on Database")
    public void userClicksOnDatabase() {
        homePage.clickDatabase();
    }

    @And("user selects Database Type as {string}")
    public void userSelectsDatabaseTypeAs(String arg0) {
        homePage.select_selectRequest(arg0);
    }

    @And("user enters Database Access request as {string}")
    public void userEntersDatabaseAccessRequestAs(String arg0) {
        homePage.enterDatabase_request(arg0);
    }

    @And("user selects add server CI as {string}")
    public void userSelectsAddServerCIAs(String arg0) {
        homePage.selects_database_AddCi_multipleValues(arg0);
    }

    @And("user selects add Database CI as {string}")
    public void userSelectsAddDatabaseCIAs(String arg0) {
        homePage.selects_database_AddServerCi_multipleValues(arg0);
    }

    @And("user enters Database Name as {string}")
    public void userEntersDatabaseNameAs(String arg0) {
        homePage.enterDatabase_name(arg0);
    }


    @And("user selects database Account Type as {string}")
    public void userSelectsAccountTypeAs(String arg0) {
        homePage.selectDatabaseAccountType(arg0);
    }

    @Then("user enters database Permissions as {string}")
    public void userEntersPermissionsAs(String arg0) {
        homePage.enterDatabase_permissions(arg0);
    }

    @Then("user enters Database Access Request description as {string}")
    public void userEntersDatabaseAccessRequestDescriptionAs(String arg0) {
        homePage.enterDatabase_description(arg0);
    }

    @And("user enters database Account Name as {string}")
    public void userEntersDatabaseAccountNameAs(String arg0) {
        homePage.enterDatabase_accountName(arg0);
    }

    @And("user enters DNS IP address as {string}")
    public void userEntersDNSIPAddressAs(String arg0) {
        homePage.enterDatabase_dnsIp_Address(arg0);
    }

    @Then("user selects New Existing Account as {string}")
    public void userSelectsNewExistingAccountAs(String arg0) {
        homePage.selectDatabase_new_existing_account(arg0);
    }

    @Then("user enters database Default tablespace as {string}")
    public void userEntersDatabaseDefaultTablespaceAs(String arg0) {
        homePage.enterDatabase_defaultTableSpace(arg0);
    }

    @And("user enters Database request as {string}")
    public void userEntersDatabaseRequestAs(String arg0) {
        homePage.enterDatabaseRequest_request(arg0);
    }

    @And("user selects database request Choose Action as {string}")
    public void userSelectsDatabaseRequestChooseActionAs(String arg0) {
        homePage.selectDatabaseRequest_chooseAction(arg0);
    }

    @And("user selects Backup to standard location as {string}")
    public void userSelectsBackupToStandardLocationAs(String arg0) {
        homePage.selectDatabaseRequest_location(arg0);
    }

    @Then("user enters Database Planned Start Date & Time as current date")
    public void userEntersDatabasePlannedStartDateTimeAsCurrentDate() {
        homePage.enterDatabaseRequest_plannedStartDateTime(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @And("user selects database request Database Type as {string}")
    public void userSelectsDatabaseRequestDatabaseTypeAs(String arg0) {
        homePage.selectDatabaseRequest_databaseType(arg0);
    }

    @And("user selects database request add server CI as {string}")
    public void userSelectsDatabaseRequestAddServerCIAs(String arg0) {
        homePage.selects_databaseRequest_AddServerCi_multipleValues(arg0);
    }

    @And("user selects database request add Database CI as {string}")
    public void userSelectsDatabaseRequestAddDatabaseCIAs(String arg0) {
        homePage.selects_databaseRequest_AddCi_multipleValues(arg0);
    }

    @And("user enters database request Database Name as {string}")
    public void userEntersDatabaseRequestDatabaseNameAs(String arg0) {
        homePage.enterDatabaseRequest_databaseName(arg0);
    }

    @Then("user enters Database Request description as {string}")
    public void userEntersDatabaseRequestDescriptionAs(String arg0) {
        homePage.enterDatabaseRequest_description(arg0);
    }

    @And("user enters Database Configure request as {string}")
    public void userEntersDatabaseConfigureRequestAs(String arg0) {
        homePage.enterDatabaseConfigureParameter_request(arg0);
    }

    @And("user selects Database Configure Database Type as {string}")
    public void userSelectsDatabaseConfigureDatabaseTypeAs(String arg0) {
        homePage.selectDatabaseConfigureParameter_databaseType(arg0);
    }

    @And("user selects Database Configure server CI as {string}")
    public void userSelectsDatabaseConfigureServerCIAs(String arg0) {
        homePage.selectDatabaseConfigureParameter_AddCi_multipleValues(arg0);
    }

    @And("user selects Database Configure add Database CI as {string}")
    public void userSelectsDatabaseConfigureAddDatabaseCIAs(String arg0) {
        homePage.selectDatabaseConfigureParameter_AddDbCi_multipleValues(arg0);
    }

    @And("user enters Database Configure Database Name as {string}")
    public void userEntersDatabaseConfigureDatabaseNameAs(String arg0) {
        homePage.enterDatabaseConfigureParameter_databaseName(arg0);
    }

    @And("user enters Database Configure Parameters as {string}")
    public void userEntersDatabaseConfigureParametersAs(String arg0) {
        homePage.enterDatabaseConfigureParameter_parameters(arg0);
    }

    @Then("user enters Database Configure description as {string}")
    public void userEntersDatabaseConfigureRequestDescriptionAs(String arg0) {
        homePage.enterDatabaseConfigureParameter_description(arg0);
    }

    @And("user enters Database Performance Troubleshooting request as {string}")
    public void userEntersDatabasePerformanceTroubleshootingRequestAs(String arg0) {
        homePage.enterDatabasePerformamanceTroubleShooting_request(arg0);
    }

    @And("user selects Database Performance Troubleshooting Database Type as {string}")
    public void userSelectsDatabasePerformanceTroubleshootingDatabaseTypeAs(String arg0) {
        homePage.selectDatabasePerformanceTroubleShooting_databaseType(arg0);
    }

    @And("user enters Database Performance Troubleshooting CI as {string}")
    public void userEntersDatabasePerformanceTroubleshootingCIAs(String arg0) {
        homePage.selectDatabasePerformanceTroubleShooting_AddServerCi(arg0);
    }

    @And("user enters Database Performance Troubleshooting Database CI as {string}")
    public void userEntersDatabasePerformanceTroubleshootingDatabaseCIAs(String arg0) {
        homePage.selectDatabasePerformanceTroubleShooting_AddDbCi(arg0);
    }

    @And("user enters Database Performance Troubleshooting Database Name as {string}")
    public void userEntersDatabasePerformanceTroubleshootingDatabaseNameAs(String arg0) {
        homePage.enterDatabasePerformamanceTroubleShooting_DB_name(arg0);
    }

    @Then("user enters Database Performance Troubleshooting description as {string}")
    public void userEntersDatabasePerformanceTroubleshootingDescriptionAs(String arg0) {
        homePage.enterDatabasePerformamanceTroubleShooting_description(arg0);
    }

    @And("user enters Service Request Name as {string}")
    public void userEntersNetworkSecurityServiceRequestNameAs(String arg0) {
        homePage.entersNetworkSecurity_add_modify_remove_dns_service_request(arg0);
    }

    @And("user enters messaging request as {string}")
    public void userEntersCallGuideMailRequestAs(String arg0) {
        homePage.enterReschedule_request(arg0);
    }

    @Then("user selects messaging System as {string}")
    public void userSelectsCallGuideMailSystemAs(String arg0) {
        homePage.selectServiceRequestName(arg0);
    }

    @Then("user enters messaging Customer ID Name as {string}")
    public void userEntersCallGuideMailCustomerIDNameAs(String arg0) {
        homePage.enterCallGuide_customerIdName(arg0);
    }

    @Then("user enters messaging description as {string}")
    public void userEntersCallGuideMailDescriptionAs(String arg0) {
        homePage.enterCallGuide_description(arg0);
    }

    @And("user enters clean mail Customer ID Name as {string}")
    public void userEntersCleanMailCustomerIDNameAs(String arg0) {
        homePage.enterCleanMail_customerId(arg0);
    }

    @And("user selects messaging Issue as {string}")
    public void userSelectsCleanMailIssueAs(String arg0) {
        homePage.selectServiceRequestName(arg0);
    }

    @Then("user enters Clean Mail description as {string}")
    public void userEntersCleanMailDescriptionAs(String arg0) {
        homePage.enterDescription_Reschedule(arg0);
    }

    @And("user date and time when tests performed as current date and time")
    public void userDateAndTimeWhenTestsPerformedAsCurrentDateAndTime() {
        homePage.enterCleanMail_testPerformed(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @And("user enters messaging Sender DNS IP Address as {string}")
    public void userEntersCleanMailSenderDnsAs(String arg0) {
        homePage.enterCleanMail_senderDNS(arg0);
    }

    @And("user enters messaging Sender email address as {string}")
    public void userEntersCleanMailSenderEmailAddressAs(String arg0) {
        homePage.enterCleanMail_senderEmail(arg0);
    }

    @And("user enters messaging Receiver email address as {string}")
    public void userEntersCleanMailRecieverEmailAddressAs(String arg0) {
        homePage.enterCleanMail_receiverEmail(arg0);
    }

    @Then("user enters Messaging Denmark Mail description as {string}")
    public void userEntersMessagingDenmarkMailDescriptionAs(String arg0) {
        homePage.enterMessaging_description(arg0);
    }

    @And("user selects messaging SMTP relay as {string}")
    public void userSelectsMessagingSMTPRelayAs(String arg0) {
        homePage.selectSMTP_RELAY(arg0);
    }

    @And("user selects messaging CI as {string}")
    public void userSelectsMessagingCIAs(String arg0) {
        homePage.selectsAddCi_multipleValues(arg0);
    }

    @And("user enters Network Security Add Modify Remove DNS request as {string}")
    public void userEntersNetworkSecurityAddModifyRemoveDNSRequestAs(String arg0) {
        homePage.enterNetworkSecurity_add_modify_remove_dns_request(arg0);
    }

    @And("user selects Scheduled change as {string}")
    public void userSelectsScheduledChangeAs(String arg0) {
        homePage.selectNetworkSecurity_add_modify_remove_dns_scheduled_change(arg0);
    }

    @When("user clicks on DNS DHCP pebble")
    public void userClicksOnDNSDHCPPebble() {
        homePage.clickDNS_DHCP();
    }

    @And("user enters Network Security Add Modify Remove DNS description as {string}")
    public void userEntersNetworkSecurityAddModifyRemoveDNSDescriptionAs(String arg0) {
        homePage.enterNetworkSecurity_add_modify_remove_dns_description(arg0);
    }

    @When("user clicks on Firewall Routing Request pebble")
    public void userClicksOnFirewallRoutingRequestPebble() {
        homePage.clickFirewall_Routing_Request();
    }

    @Then("user selects New Change Service Request Name as {string}")
    public void userSelectsNewChangeServiceRequestNameAs(String arg0) {
        homePage.selectNetworkSecurity_firewall_new_change_service_request(arg0);
    }

    @And("user enters Network Security Firewall New Change request as {string}")
    public void userEntersNetworkSecurityFirewallNewChangeRequestAs(String arg0) {
        homePage.enterNetworkSecurity_firewall_new_change_request(arg0);
    }


    @And("user enters Network Security Firewall New Change description as {string}")
    public void userEntersNetworkSecurityFirewallNewChangeDescriptionAs(String arg0) {
        homePage.enterNetworkSecurity_firewall_new_change_description(arg0);
    }

    @And("user selects Add CI as {string}")
    public void userSelectsAddCIAs(String arg0) {
        homePage.enterNetworkSecurity_firewall_new_change_add_ci_multipleValues(arg0);
    }

    @And("user enters Network Security Firewall Troubleshoot request as {string}")
    public void userEntersNetworkSecurityFirewallTroubleshootRequestAs(String arg0) {
        homePage.enterNetworkSecurity_firewall_troubleshoot_request(arg0);
    }

    @Then("user enters FIRE Ticket number as {string}")
    public void userEntersFIRETicketNumberAs(String arg0) {
        homePage.enterNetworkSecurity_firewall_troubleshoot_ticket_number(arg0);
    }

    @And("user enters Source IP Address as {string}")
    public void userEntersSourceIPAddressAs(String arg0) {
        homePage.enterNetworkSecurity_firewall_troubleshoot_source_id(arg0);
    }

    @And("user enter Target IP Address as {string}")
    public void userEnterTargetIPAddressAs(String arg0) {
        homePage.enterNetworkSecurity_firewall_troubleshoot_target_ip(arg0);
    }

    @Then("user selects Server connectivity verified as {string}")
    public void userSelectsServerConnectivityVerifiedAs(String arg0) {
        homePage.selectNetworkSecurity_add_modify_remove_dns_scheduled_change(arg0);
    }

    @And("user enters date and time when tests performed as current date and time")
    public void userEntersDateAndTimeWhenTestsPerformedAsCurrentDateAndTime() {
        homePage.enterNetworkSecurity_firewall_troubleshoot_date_and_time(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @Then("user selects Traffic return routing verified as {string}")
    public void userSelectsTrafficReturnRoutingVerifiedAs(String arg0) {
        homePage.selectDatabaseAccountType(arg0);
    }

    @And("user enters Network Security Troubleshoot description as {string}")
    public void userEntersNetworkSecurityTroubleshootDescriptionAs(String arg0) {
        homePage.enterNetworkSecurity_firewall_troubleshoot_description(arg0);
    }

    @When("user clicks on LAN Data Net LAN pebble")
    public void userClicksOnLANDataNetLANPebble() {
        homePage.clickLAN_Data_Net_Lan();
    }

    @And("user enters Network Security LAN request as {string}")
    public void userEntersNetworkSecurityLANRequestAs(String arg0) {
        homePage.enterNetworkSecurity_lan_request(arg0);
    }

    @Then("user enters Network Security LAN description as {string}")
    public void userEntersNetworkSecurityLANDescriptionAs(String arg0) {
        homePage.enterNetworkSecurity_lan_description(arg0);
    }

    @When("user clicks on Network Load Balancing pebble")
    public void userClicksOnNetworkLoadBalancingPebble() {
        homePage.clickNetwork_Load_Balancing();
    }

    @And("user enters Network Security Load request as {string}")
    public void userEntersNetworkSecurityLoadRequestAs(String arg0) {
        homePage.enterNetworkSecurity_load_balancing_request(arg0);
    }

    @Then("user enters Network Security Load description as {string}")
    public void userEntersNetworkSecurityLoadDescriptionAs(String arg0) {
        homePage.enterNetworkSecurity_load_balancing_description(arg0);
    }

    @When("user clicks on Network Routing Switching pebble")
    public void userClicksOnNetworkRoutingSwitchingPebble() {
        homePage.clickNetwork_Routing_Switching();
    }

    @Then("user selects New Switch Service Request Name as {string}")
    public void userSelectsNewSwitchServiceRequestNameAs(String arg0) {
        homePage.selectNetworkSecurity_firewall_new_change_service_request(arg0);
    }

    @And("user enters Network Security Routing New Switch request as {string}")
    public void userEntersNetworkSecurityRoutingNewSwitchRequestAs(String arg0) {
        homePage.enterNetworkSecurity_new_switch_request(arg0);
    }

    @Then("user selects Network CI as {string}")
    public void userSelectsNetworkCIAs(String arg0) {
        homePage.selectNetworkSecurity_new_switch_network_ci(arg0);
    }

    @And("user enters DC-site as {string}")
    public void userEntersDCSiteAs(String arg0) {
        homePage.enterNetworkSecurity_new_switch_dc_site(arg0);
    }

    @And("user enters Data Room as {string}")
    public void userEntersDataRoomAs(String arg0) {
        homePage.enterNetworkSecurity_new_switch_data_room(arg0);
    }

    @Then("user enters Rack as {string}")
    public void userEntersRackAs(String arg0) {
        homePage.enterNetworkSecurity_new_switch_rack(arg0);
    }

    @And("user enters usage of the switch as {string}")
    public void userEntersUsageOfTheSwitchAs(String arg0) {
        homePage.enterNetworkSecurity_new_switch_usage(arg0);
    }

    @And("user enter Terminal server as {string}")
    public void userEnterTerminalServerAs(String arg0) {
        homePage.enterNetworkSecurity_new_switch_terminal(arg0);
    }

    @Then("user enters Network Security Routing Switching description as {string}")
    public void userEntersNetworkSecurityRoutingSwitchingDescriptionAs(String arg0) {
        homePage.enterNetworkSecurity_new_switch_description(arg0);
    }

    @And("user enters Network Security Routing New VLAN request as {string}")
    public void userEntersNetworkSecurityRoutingNewVLANRequestAs(String arg0) {
        homePage.enterNetworkSecurity_new_vlan_request(arg0);
    }

    @And("user enters IP Net as {string}")
    public void userEntersIPNetAs(String arg0) {
        homePage.enterNetworkSecurity_new_vlan_ip_net(arg0);
    }

    @Then("user enters VLAN number and name as {string}")
    public void userEntersVLANNumberAndNameAs(String arg0) {
        homePage.enterNetworkSecurity_new_vlan_number_and_name(arg0);
    }

    @Then("user enters Purpose of VLAN as {string}")
    public void userEntersPurposeOfVLANAs(String arg0) {
        homePage.enterNetworkSecurity_new_vlan_purpose(arg0);
    }

    @Then("user enters Network Security description as {string}")
    public void userEntersNetworkSecurityDescriptionAs(String arg0) {
        homePage.enterNetworkSecurity_new_vlan_description(arg0);
    }

    @When("user clicks on Proxy pebble")
    public void userClicksOnProxyPebble() {
        homePage.clickProxy();
    }


    @And("user enters network security proxy request as {string}")
    public void userEntersNetworkSecurityProxyRequestAs(String arg0) {
        homePage.enterNetworkSecurity_proxy_general_request(arg0);
    }

    @Then("user enters network security proxy description as {string}")
    public void userEntersNetworkSecurityProxyDescriptionAs(String arg0) {
        homePage.enterNetworkSecurity_proxy_general_description(arg0);
    }

    @Then("user enters Source IP as {string}")
    public void userEntersSourceIPAs(String arg0) {
        homePage.enterNetworkSecurity_proxy_reverse_source_ip(arg0);
    }

    @And("user enters Reverseproxy DNS name as {string}")
    public void userEntersReverseproxyDNSNameAs(String arg0) {
        homePage.enterNetworkSecurity_proxy_reverse_dns_name(arg0);
    }

    @And("user enters Reverseproxy Protocol Port as {string}")
    public void userEntersReverseproxyProtocolPortAs(String arg0) {
        homePage.enterNetworkSecurity_proxy_reverse_protocol_port(arg0);
    }

    @And("user selects Certificate as {string}")
    public void userSelectsCertificateAs(String arg0) {
        homePage.selectNetworkSecurity_proxy_reverse_certificate(arg0);
    }

    @Then("user enters webserver address as {string}")
    public void userEntersWebserverAddressAs(String arg0) {
        homePage.enterNetworkSecurity_proxy_reverse_webserver_address(arg0);
    }

    @And("user selects high availability as {string}")
    public void userSelectsHighAvailabilityAs(String arg0) {
        homePage.selectNetworkSecurity_proxy_reverse_high_availibility(arg0);
    }

    @And("user selects load balancing method as {string}")
    public void userSelectsLoadBalancingMethodAs(String arg0) {
        homePage.selectNetworkSecurity_proxy_reverse_load_balancing(arg0);
    }

    @And("user selects SurfProxy /URL filter as {string}")
    public void userSelectsSurfProxyURLFilterAs(String arg0) {
        homePage.selectBCPP_Environment(arg0);
    }

    @Then("user enters URL as {string}")
    public void userEntersURLAs(String arg0) {
        homePage.enterNetworkSecurity_proxy_surf_proxy_url(arg0);
    }

    @Then("user selects internal external website as {string}")
    public void userSelectsInternalExternalWebsiteAs(String arg0) {
        homePage.selectDatabase_new_existing_account(arg0);
    }

    @Then("user enters error message as {string}")
    public void userEntersErrorMessageAs(String arg0) {
        homePage.enterNetworkSecurity_proxy_surf_proxy_error_message(arg0);
    }

    @And("user enters has it worked before as {string}")
    public void userEntersHasItWorkedBeforeAs(String arg0) {
        homePage.enterNetworkSecurity_proxy_surf_proxy_worked_before(arg0);
    }

    @Then("user enters when did the problem occure as {string}")
    public void userEntersWhenDidTheProblemOccureAs(String arg0) {
        homePage.enterNetworkSecurity_proxy_surf_proxy_problem_occure(arg0);
    }

    @And("user enters what is your current proxy settings as {string}")
    public void userEntersWhatIsYourCurrentProxySettingsAs(String arg0) {
        homePage.enterNetworkSecurity_proxy_surf_proxy_settings(arg0);
    }

    @Then("user enters ticket number as {string}")
    public void userEntersTicketNumberAs(String arg0) {
        homePage.enterNetworkSecurity_proxy_surf_proxy_ticket_number(arg0);
    }

    @And("user selects SurfProxy url filter as {string}")
    public void userSelectsSurfProxyUrlFilterAs(String arg0) {
        homePage.selectBCPP_Environment(arg0);
    }

    @And("user enters proxy date and time when tests performed as current date and time")
    public void userEntersProxyDateAndTimeWhenTestsPerformedAsCurrentDateAndTime() {
        homePage.enterNetworkSecurity_proxy_surf_proxy_date_and_time(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @And("user enters proxy Source IP Address as {string}")
    public void userEntersProxySourceIPAddressAs(String arg0) {
        homePage.enterNetworkSecurity_proxy_surf_proxy_source_ip(arg0);
    }

    @And("user enters user IP as {string}")
    public void userEntersUserIPAs(String arg0) {
        homePage.enterNetworkSecurity_proxy_surf_proxy_slow_surfing_user_ip(arg0);
    }

    @Then("user selects internal external sites as {string}")
    public void userSelectsInternalExternalSitesAs(String arg0) {
        homePage.selectNetworkSecurity_proxy_surf_proxy_slow_surfing_sites(arg0);

    }

    @Then("user validates plaza request has completed")
    public void userValidatesPlazaRequestHasCompleted() {
        homePage.wait(3000);
        homePage.refreshPage();
        Assert.assertEquals(homePage.getPlazaRequestStatus(), "Closed Complete");
        Assert.assertEquals(homePage.getPlazaMessage(), "Order has been completed");
    }

    @And("user enters nimbus mandatory description as {string}")
    public void userEntersNimbusMandatoryDescriptionAs(String arg0) {
        homePage.enterNimbus_descriptionMandatory(arg0);
    }

    @And("user enters nimbus request as {string}")
    public void userEntersNimbusRequestAs(String arg0) {
        homePage.enterNimbus_request(arg0);
    }

    @Then("user selects nimbus CI as {string}")
    public void userSelectsNimbusCIAs(String arg0) {
        homePage.selectNimbus_AddCi(arg0);
    }

    @And("user selects nimbus type as {string}")
    public void userSelectsNimbusTypeAs(String arg0) {
        homePage.selectNimbus_Type(arg0);
    }

    @And("user enters nimbus description as {string}")
    public void userEntersNimbusDescriptionAs(String arg0) {
        homePage.enterNimbus_description(arg0);
    }

    @Then("user enters nimbus size GB as {string}")
    public void userEntersNimbusSizeAs(String arg0) {
        homePage.enterNimbus_size(arg0);
    }

    @And("user enters volumes drives as {string}")
    public void userEntersVolumesDrivesAs(String arg0) {
        homePage.enterNimbus_volumesDrives(arg0);
    }

    @Then("user selects nimbus extend disk CI as {string}")
    public void userSelectsNimbusExtendDiskCIAs(String arg0) {
        homePage.selectNimbusExtendDisk_AddCi(arg0);
    }

    @And("user enters nimbus service window as current date and time")
    public void userEntersNimbusServiceWindowAsCurrentDateAndTime() {
        homePage.enterNimbus_serviceWindowDateTime(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @Then("user enters H2 Name Hid as {string}")
    public void userEntersHNameHidAs(String arg0) {
        homePage.enterNimbus_h2NameHid(arg0);
    }

    @Then("user selects DDC base ruleset applied as {string}")
    public void userSelectsDDCBaseRulesetAppliedAs(String arg0) {
        homePage.selectNimbus_DDC_baseRuleSet(arg0);
    }

    @Then("user enters frontside network information as {string}")
    public void userEntersFrontsideNetworkInformationAs(String arg0) {
        homePage.enterNimbus_frontSideNetworkInfo(arg0);
    }

    @And("user enters mgmt network information as {string}")
    public void userEntersMgmtNetworkInformationAs(String arg0) {
        homePage.enterNimbus_mgmtNetworkInfo(arg0);
    }

    @And("user selects dual-site services as {string}")
    public void userSelectsDualSiteServicesAs(String arg0) {
        homePage.select_selectRequest(arg0);
    }

    @Then("user selects Cloud Services as {string}")
    public void userSelectsCloudServicesAs(String arg0) {
        homePage.selectNimbus_cloudServices(arg0);
    }

    @Then("user selects Target countries for System Cloud Services as {string}")
    public void userSelectsTargetCountriesForSystemCloudServicesAs(String arg0) {
        homePage.selectNimbus_targetCountries(arg0);
    }

    @Then("user enters Approver Account\\(s) as {string}")
    public void userEntersApproverAccountSAs(String arg0) {
        homePage.enterNimbus_roleApproversAccount(arg0);
    }

    @And("user enters User Account\\(s) as {string}")
    public void userEntersUserAccountSAs(String arg0) {
        homePage.enterNimbus_roleUsersAccount(arg0);
    }

    @Then("user enters CMDB, Assigned to Application Team as {string}")
    public void userEntersCMDBAssignedToApplicationTeamAs(String arg0) {
        homePage.enterNimbus_CmdbAssigned(arg0);
    }

    @Then("user enters CMDB, Local responsible Application as {string}")
    public void userEntersCMDBLocalResponsibleApplicationAs(String arg0) {
        homePage.enterNimbus_cmdbLocal(arg0);
    }

    @And("user enters nimbus skypoint H2 Name Hid as {string}")
    public void userEntersNimbusSkypointHNameHidAs(String arg0) {
        homePage.enterNimbus_h2Hid(arg0);
    }

    @And("user enters date to restore from as current date and time")
    public void userEntersDateToRestoreFromAsCurrentDateAndTime() {
        homePage.enterNimbus_dateToRestoreFrom(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @Then("user enters restore vm CI as {string}")
    public void userEntersRestoreVmCIAs(String arg0) {
        homePage.selectNimbus_restoreVm(arg0);
    }

    @Then("user enters skypoint request as {string}")
    public void userEntersSkypointRequestAs(String arg0) {
        homePage.enterNimbus_skyPointRequest(arg0);
    }

    @And("user enters Storage request as {string}")
    public void userEntersStorageRequestAs(String arg0) {
        homePage.enterStorageConfigure_request(arg0);
    }

    @And("user enters Network VLAN to use as {string}")
    public void userEntersNetworkVLANToUseAs(String arg0) {
        homePage.enterStorageConfigure_Network_VLAN(arg0);
    }

    @Then("user enters Storage description as {string}")
    public void userEntersStorageDescriptionAs(String arg0) {
        homePage.enterStorageConfigure_description(arg0);
    }

    @And("user selects storage configure trunk CI as {string}")
    public void userSelectsStorageConfigureTrunkCIAs(String arg0) {
        homePage.selectStorageConfigure_trunkCI(arg0);
    }

    @And("user enters Storage export request as {string}")
    public void userEntersStorageExportRequestAs(String arg0) {
        homePage.enterStorageExport_request(arg0);
    }

    @And("user selects storage export CI as {string}")
    public void userSelectsStorageExportCIAs(String arg0) {
        homePage.selectStorageExport_SourceCI(arg0);
    }

    @And("user enters Source WWN as {string}")
    public void userEntersSourceWWNAs(String arg0) {
        homePage.enterStorageExport_source_WWN(arg0);
    }

    @And("user enters date time of snapshot as current date and time")
    public void userEntersDateTimeOfSnapshotAsCurrentDateAndTime() {
        homePage.enterStorageExport_dateTime(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @And("user enters Target CI as {string}")
    public void userEntersTargetCIAs(String arg0) {
        homePage.selectStorageExport_TargetCI(arg0);
    }

    @And("user enters Storage export description as {string}")
    public void userEntersStorageExportDescriptionAs(String arg0) {
        homePage.enterStorageExport_description(arg0);
    }

    @And("user enters the target url as {string}")
    public void userEntersTheTargetUrlAs(String arg0) {
        homePage.enterNetworkSecurity_proxy_surf_proxy_whitelisting_target_url(arg0);
    }


    @Then("user enters the h2 Name {string}")
    public void userEntersTheHName(String arg0) {
        homePage.enterNetworkSecurity_proxy_surf_proxy_whitelisting_h2_name(arg0);
    }

    @Then("user selects select request {string}")
    public void userSelectsSelectRequest(String arg0) {
        homePage.selectNetworkSecurity_firewall_new_change_service_request(arg0);
    }


    @When("user clicks on Remote Access \\(VPN ACS)")
    public void userClicksOnRemoteAccessVPNACS() {
        homePage.clickRemote_Access();
    }

    @And("user enters network security remote request as {string}")
    public void userEntersNetworkSecurityRemoteRequestAs(String arg0) {
        homePage.enterNetworkSecurity_remote_access_request(arg0);
    }

    @Then("user enters Network Security Remote Access description as {string}")
    public void userEntersNetworkSecurityRemoteAccessDescriptionAs(String arg0) {
        homePage.enterNetworkSecurity_remote_access_description(arg0);
    }

    @Then("user selects remote access select request as {string}")
    public void userSelectsRemoteAccessSelectRequestAs(String arg0) {
        homePage.selectNetworkSecurity_firewall_new_change_service_request(arg0);
    }


    @And("user enters network security switch port request as {string}")
    public void userEntersNetworkSecuritySwitchPortRequestAs(String arg0) {
        homePage.enterNetworkSecurity_switch_port_config_request(arg0);
    }

    @Then("user selects existing IP net as {string}")
    public void userSelectsExistingIPNetAs(String arg0) {
        homePage.selectNetworkSecurity_add_modify_remove_dns_scheduled_change(arg0);
    }

    @And("user selects new IP net as {string}")
    public void userSelectsNewIPNetAs(String arg0) {
        homePage.selectNetworkSecurity_NewIpNet(arg0);
    }

    @Then("user enters Network Security Switch Port description as {string}")
    public void userEntersNetworkSecuritySwitchPortDescriptionAs(String arg0) {
        homePage.enterNetworkSecurity_switch_port_config_description(arg0);
    }

    @And("user enters operating system request as {string}")
    public void userEntersOperatingSystemRequestAs(String arg0) {
        homePage.enterOperatingSystem_access_request(arg0);
    }

    @And("user enters justification as {string}")
    public void userEntersJustificationAs(String arg0) {
        homePage.enterOperatingSystem_access_justification(arg0);
    }

    @Then("user enters operating system description as {string}")
    public void userEntersOperatingSystemDescriptionAs(String arg0) {
        homePage.enterOperatingSystem_account_management_description(arg0);
    }

    @Then("user selects operating system as {string}")
    public void userSelectsOperatingSystemAs(String arg0) {
        homePage.selectNetworkSecurity_add_modify_remove_dns_scheduled_change(arg0);
    }

    @Then("user selects operating system account type as {string}")
    public void userSelectsOperatingSystemAccountTypeAs(String arg0) {
        homePage.select_OS_Account_Management_accountType(arg0);
    }

    @And("user enters account name as {string}")
    public void userEntersAccountNameAs(String arg0) {
        homePage.enterOperatingSystem_account_management_account_name(arg0);
    }

    @And("user enters operating system account management request as {string}")
    public void userEntersOperatingSystemAccountManagementRequestAs(String arg0) {
        homePage.enterOperatingSystem_account_management_account_request(arg0);
    }

    @And("user selects compute and OS add server CI as {string}")
    public void userSelectsComputeAndOSAddServerCIAs(String arg0) {
        homePage.enterNetworkSecurity_firewall_new_change_add_ci_multipleValues(arg0);
    }

    @And("user clicks on the commitment checkbox")
    public void userClicksOnTheCommitmentCheckbox() {
        homePage.clickCommitment_change_from_auto();
    }

    @And("user enters plan to enable automatic monthly patching as {string}")
    public void userEntersPlanToEnableAutomaticMonthlyPatchingAs(String arg0) {
        homePage.enterOperatingSystem_change_from_auto_plan(arg0);
    }

    @And("user enters operating system change from auto request as {string}")
    public void userEntersOperatingSystemChangeFromAutoRequestAs(String arg0) {
        homePage.enterOperatingSystem_change_from_auto_request(arg0);
    }

    @And("user enters operating system justification as {string}")
    public void userEntersOperatingSystemJustificationAs(String arg0) {
        homePage.enterOperatingSystem_change_from_auto_justification(arg0);
    }

    @Then("user enters operating system change from auto description as {string}")
    public void userEntersOperatingSystemChangeFromAutoDescriptionAs(String arg0) {
        homePage.enterOperatingSystem_change_from_auto_description(arg0);
    }

    @When("user clicks on Change OS Patching")
    public void userClicksOnChangeOSPatching() {
        homePage.clickChange_OS_Patching();
    }

    @And("user enters operating system manual request as {string}")
    public void userEntersOperatingManualSystemRequestAs(String arg0) {
        homePage.enterOperatingSystem_change_from_auto_request(arg0);
    }

    @Then("user enters operating system change from manual description as {string}")
    public void userEntersOperatingSystemChangeFromManualDescriptionAs(String arg0) {
        homePage.enterOperatingSystem_change_from_auto_description(arg0);
    }

    @And("user selects Service Window as {string}")
    public void userSelectsServiceWindowAs(String arg0) {
        homePage.selectNetworkSecurity_proxy_surf_proxy_slow_surfing_sites(arg0);
    }

    @And("user enters operating system change from manual request as {string}")
    public void userEntersOperatingSystemChangeFromManualRequestAs(String arg0) {
        homePage.enterOperatingSystem_change_from_auto_request(arg0);
    }

    @When("user clicks on Manual OS Patching")
    public void userClicksOnManualOSPatching() {
        homePage.clickManual_OS_Patching();
    }

    @And("user enters operating system manual os patching request as {string}")
    public void userEntersOperatingSystemManualOsPatchingRequestAs(String arg0) {
        homePage.enterOperatingSystem_manual_os_patching_request(arg0);
    }

    @And("user selects Server placed in Veha as {string}")
    public void userSelectsServerPlacedInVehaAs(String arg0) {
        homePage.selectNetworkSecurity_add_modify_remove_dns_scheduled_change(arg0);
    }

    @And("user enters WBS Code as {string}")
    public void userEntersWBSCodeAs(String arg0) {
        homePage.enterOperatingSystem_manual_os_patching_wbs_code(arg0);
    }

    @And("user enters planned start date and time as current date and time")
    public void userEntersPlannedStartDateAndTimeAsCurrentDateAndTime() {
        homePage.enterOperatingSystem_manual_os_patching_start_date(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @And("user enters planned end date and time as current date and time")
    public void userEntersPlannedEndDateAndTimeAsCurrentDateAndTime() {
        homePage.enterOperatingSystem_manual_os_patching_end_date(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @Then("user enters manual os patching Plan to enable automatic monthly patching as {string}")
    public void userEntersManualOsPatchingPlanToEnableAutomaticMonthlyPatchingAs(String arg0) {
        homePage.enterOperatingSystem_manual_os_patching_plan(arg0);
    }

    @And("user enters H2 as {string}")
    public void userEntersHAs(String arg0) {
        homePage.enterOperatingSystem_manual_os_patching_H2(arg0);
    }

    @Then("user enters manual os patching operating system description as {string}")
    public void userEntersManualOsPatchingOperatingSystemDescriptionAs(String arg0) {
        homePage.enterOperatingSystem_manual_os_patching_description(arg0);
    }


    @And("user selects manual os patching Add CI as {string}")
    public void userSelectsManualOsPatchingAddCIAs(String arg0) {
        homePage.selectOperatingSystem_manual_os_patching_add_ci(arg0);
    }

    @And("user selects manual os patching Operating System as {string}")
    public void userSelectsManualOsPatchingOperatingSystemAs(String arg0) {
        homePage.selectNetworkSecurity_firewall_new_change_service_request(arg0);
    }

    @And("user selects BCCP Add ci as {string}")
    public void userSelectsBCCPAddCiAs(String arg0) {
        homePage.selectBCPP_ADD_CI(arg0);
    }

    @And("user enters CEWS request as {string}")
    public void userEntersCEWSRequestAs(String arg0) {
        homePage.enterCews_request(arg0);
    }

    @Then("user enters CEWS description as {string}")
    public void userEntersCEWSDescriptionAs(String arg0) {
        homePage.enterCews_description(arg0);
    }

    @And("user selects CEWS Add CI as {string}")
    public void userSelectsCEWSAddCIAs(String arg0) {
        homePage.selectCews_add_ci(arg0);
    }

    @And("user enters Cloud one time snapshot request as {string}")
    public void userEntersCloudOneTimeSnapshotRequestAs(String arg0) {
        homePage.enterReschedule_request(arg0);
    }


    @And("user enters Add CI as {string}")
    public void userEntersAddCIAs(String arg0) {
        homePage.select_add_ci(arg0);
    }

    @Then("user enters cloud one time snapshot description as {string}")
    public void userEntersCloudOneTimeSnapshotDescriptionAs(String arg0) {
        homePage.enterDescription_Reschedule(arg0);
    }

    @And("user enters date and time for deletion as current date and time")
    public void userEntersDateAndTimeForDeletionAsCurrentDateAndTime() {
        homePage.enterBackUpDateTime(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @And("user enters EBILL request as {string}")
    public void userEntersEBILLRequestAs(String arg0) {
        homePage.enterEbill_request(arg0);
    }

    @Then("user enters EBILL description as {string}")
    public void userEntersEBILLDescriptionAs(String arg0) {
        homePage.enterEbill_description(arg0);
    }

    @And("user enters account field as {string}")
    public void userEntersAccountFieldAs(String arg0) {
        homePage.enterEbill_account(arg0);
    }

    @And("user enters EFS-BSS request as {string}")
    public void userEntersEFSBSSRequestAs(String arg0) {
        homePage.enterCews_request(arg0);
    }

    @And("user enters CI as {string}")
    public void userEntersCIAs(String arg0) {
        homePage.select_add_ci(arg0);
    }

    @And("user enters EFS description as {string}")
    public void userEntersEFSDescriptionAs(String arg0) {
        homePage.enterCews_description(arg0);
    }

    @And("user enters IT FI request as {string}")
    public void userEntersITFIRequestAs(String arg0) {
        homePage.enterItfi_request(arg0);
    }

    @Then("user enters IT FI description as {string}")
    public void userEntersITFIDescriptionAs(String arg0) {
        homePage.enterItfi_description(arg0);
    }

    @Then("user enters system dropdown as {string}")
    public void userEntersSystemDropdownAs(String arg0) {
        homePage.select_add_ci(arg0);
    }

    @And("user enters managed voice request as {string}")
    public void userEntersManagedVoiceRequestAs(String arg0) {
        homePage.enterManagedvoice_request(arg0);
    }

    @Then("user enters managed voice description as {string}")
    public void userEntersManagedVoiceDescriptionAs(String arg0) {
        homePage.enterManagedvoice_description(arg0);
    }

    @Then("user enters managed voice delivery date as current date")
    public void userEntersManagedVoiceDeliveryDateAsCurrentDate() {
        homePage.enterManagedvoice_delivery_date(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @And("user enters MegaDisc request as {string}")
    public void userEntersMegaDiscRequestAs(String arg0) {
        homePage.enterMegadisc_add_user_request(arg0);
    }

    @Then("user selects choose option as {string}")
    public void userSelectsChooseOptionAs(String arg0) {
        homePage.selectNetworkSecurity_firewall_new_change_service_request(arg0);
    }

    @And("user enters megadisc account name as {string}")
    public void userEntersMegadiscAccountNameAs(String arg0) {
        homePage.enterMegadisc_add_user_account_name(arg0);
    }

    @Then("user enters megadisc select group as {string}")
    public void userEntersMegadiscSelectGroupAs(String arg0) {
        homePage.selectMegadisc_add_user_select_group(arg0);
    }

    @Then("user selects requested person as {string}")
    public void userSelectsRequestedPersonAs(String arg0) {
        homePage.selectMegadisc_add_user_requested_person(arg0);
    }

    @And("user enters Storage volume request as {string}")
    public void userEntersStorageVolumeRequestAs(String arg0) {
      homePage.enterStorageVolume_request(arg0);
    }

    @And("user selects storage volume add CI as {string}")
    public void userSelectsStorageVolumeAddCIAs(String arg0) {
       homePage.selectStorageExport_TargetCI(arg0);
    }

    @And("user enters storage volume Source WWN as {string}")
    public void userEntersStorageVolumeSourceWWNAs(String arg0) {
       homePage.enterStorageVolume_source_WWN(arg0);
    }

    @And("user clicks the calendar and selects current date and time")
    public void userClicksTheCalendarAndSelectsCurrentDateAndTime() {
           homePage.enterStorageVolume_dateTime(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @And("user enters Storage volume  description as {string}")
    public void userEntersStorageVolumeDescriptionAs(String arg0) {
      homePage.enterStorageVolume_description(arg0);
    }

    @And("user selects storage volume Choose Option as {string}")
    public void userSelectsStorageVolumeChooseOptionAs(String arg0) {
        homePage.selectStorageVolume_chooseOption(arg0);
    }

    @And("user enters TCFP request as {string}")
    public void userEntersTCFPAddUserRequestAs(String arg0) {
        homePage.enterTCFP_addUser_request(arg0);
    }

    @Then("user selects TCFP choose option as {string}")
    public void userSelectsTCFPAddUserChooseOptionAs(String arg0) {
        homePage.selectTCFP_addUser_chooseOption(arg0);
    }

    @And("user enters TCFP Account Name as {string}")
    public void userTCFPAddUserAccountNameAs(String arg0) {
        homePage.enterTCFP_addUser_accountName(arg0);
    }

    @Then("user selects TCFP add user select group as below")
    public void userSelectsTCFPAddUserSelectGroupAs(DataTable ddValues) {
        homePage.selectAllSelectGroup(ddValues);
    }

    @And("user enters TCFP description as {string}")
    public void userEntersTCFPAddUserDescriptionAs(String arg0) {
        homePage.enterTCFP_addUser_description(arg0);
    }


    @And("user selects TCFP select group as {string}")
    public void userSelectsTCFPAddUserSelectGroupAs(String arg0) {
        homePage.selectTCFP_addUser_selectGroup(arg0);
    }

    @And("user enters TCFP general inquiry request as {string}")
    public void userEntersTCFPGeneralInquiryRequestAs(String arg0) {
        homePage.enterTCFP_generalEnquiry_request(arg0);
    }

    @And("user enters TCFP general inquiry description as {string}")
    public void userEntersTCFPGeneralInquiryDescriptionAs(String arg0) {
        homePage.enterTCFP_generalEnquiry_description(arg0);
    }

    @Then("user selects TCFP general inquiry CI as {string}")
    public void userSelectsTCFPGeneralInquiryCIAs(String arg0) {
        homePage.selectTCFP_generalEnquiry_addCI(arg0);
    }
    @And("user enters NNM request as {string}")
    public void userEntersNNMRequestAs(String arg0) {
        homePage.enterNnm_no(arg0);
    }
    @And("user selects Glana as {string}")
    public void userSelectsGlanaAs(String arg0) {
        homePage.selectNetworkSecurity_firewall_new_change_service_request(arg0);
    }
    @And("user enters NNM DNS IP Address as {string}")
    public void userEntersNNMDNSIPAddressAs(String arg0) {
        homePage.enterNnmNoDnsIpAddress(arg0);
    }
    @Then("user enters NNM description as {string}")
    public void userEntersNNMDescriptionAs(String arg0) {
        homePage.enterNnmNoDescription(arg0);
    }
    @And("user enters OCC request as {string}")
    public void userEntersOCCRequestAs(String arg0) {
        homePage.enterCews_request(arg0);
    }
    @Then("user enters OCC description as {string}")
    public void userEntersOCCDescriptionAs(String arg0) {
        homePage.enterCews_description(arg0);
    }
    @And("user enters Pollux request as {string}")
    public void userEntersPolluxRequestAs(String arg0) {
        homePage.enterPolluxRequest(arg0);
    }
    @And("user selects Pollux select request as {string}")
    public void userSelectsPolluxSelectRequestAs(String arg0) {
        homePage.selectNetworkSecurity_firewall_new_change_service_request(arg0);
    }
    @And("user selects environment field as {string}")
    public void userSelectsEnvironmentFieldAs(String arg0) {
        homePage.selectPolluxEnvironment(arg0);
    }
    @Then("user enters Pollux description as {string}")
    public void userEntersPolluxDescriptionAs(String arg0) {
        homePage.enterPolluxDescription(arg0);
    }
    @And("user enters Pollux WBS Code field as {string}")
    public void userEntersPolluxWBSCodeFieldAs(String arg0) {
        homePage.enterPolluxWbsCode(arg0);
    }
    @And("user enters SPAN request as {string}")
    public void userEntersSPANRequestAs(String arg0) {
        homePage.enterC2B_BCPP_Request(arg0);
    }
    @And("user enters Customer ID name as {string}")
    public void userEntersCustomerIDNameAs(String arg0) {
        homePage.enterNetworkSecurityDnsSwedenCustomerIdName(arg0);
    }
    @Then("user enters user ID and ad group as {string}")
    public void userEntersUserIDAndAdGroupAs(String arg0) {
        homePage.enterNetworkSecurityProxySurfProxyUserId(arg0);
    }
    @And("user selects span select request as {string}")
    public void userSelectsSpanSelectRequestAs(String arg0) {
        homePage.entersNetworkSecurity_add_modify_remove_dns_service_request(arg0);
    }
    @And("user selects span environment field as {string}")
    public void userSelectsSpanEnvironmentFieldAs(String arg0) {
        homePage.selectNetworkSecurity_add_modify_remove_dns_scheduled_change(arg0);
    }
    @Then("user enters SPAN description as {string}")
    public void userEntersSPANDescriptionAs(String arg0) {
        homePage.enterSpanDescription(arg0);
    }
    @And("user selects span add CI as {string}")
    public void userSelectsSpanAddCIAs(String arg0) {
        homePage.selectSpanAddCi(arg0);
    }
    @And("user enters Splunk request as {string}")
    public void userEntersSplunkRequestAs(String arg0) {
        homePage.enterSplunkRequest(arg0);
    }
    @And("user enters in the H2 Name hid field {string}")
    public void userEntersInTheHNameHidField(String arg0) {
        homePage.enterSplunkH2(arg0);
    }
    @And("user enters splunk description as {string}")
    public void userEntersSplunkDescriptionAs(String arg0) {
        homePage.enterSplunkDescription(arg0);
    }
    @And("user selects Select service request name as {string}")
    public void userSelectsSelectServiceRequestNameAs(String arg0) {
        homePage.selectNetworkSecurity_firewall_new_change_service_request(arg0);
    }
    @And("user enters Topcat request as {string}")
    public void userEntersTopcatRequestAs(String arg0) {
        homePage.enterCews_request(arg0);
    }
    @And("user enters Topcat description as {string}")
    public void userEntersTopcatDescriptionAs(String arg0) {
        homePage.enterCews_description(arg0);
    }
    @And("user enters topcat add CI as {string}")
    public void userEntersTopcatAddCIAs(String arg0) {
        homePage.selectTopcatAddCi(arg0);
    }
    @And("user selects environment as {string}")
    public void userSelectsEnvironmentAs(String arg0) {
        homePage.selectNetworkSecurity_add_modify_remove_dns_scheduled_change(arg0);
    }
    @And("user enters TSPAN request as {string}")
    public void userEntersTSPANRequestAs(String arg0) {
        homePage.enterC2B_BCPP_Request(arg0);
    }
    @And("user selects tspan select request as {string}")
    public void userSelectsTspanSelectRequestAs(String arg0) {
        homePage.selectNetworkSecurity_firewall_new_change_service_request(arg0);
    }
    @And("user enters tspan add CI as {string}")
    public void userEntersTspanAddCIAs(String arg0) {
        homePage.selectSpanAddCi(arg0);
    }
    @And("user enters tspan description as {string}")
    public void userEntersTspanDescriptionAs(String arg0) {
        homePage.enterSpanDescription(arg0);
    }
    @And("user enters veha request as {string}")
    public void userEntersVehaRequestAs(String arg0) {
        homePage.enterReschedule_request(arg0);
    }
    @Then("user enters system as {string}")
    public void userEntersSystemAs(String arg0) {
        homePage.selectVehaSystem(arg0);
    }
    @Then("user enters veha description as {string}")
    public void userEntersVehaDescriptionAs(String arg0) {
        homePage.enterCallGuide_description(arg0);
    }
    @And("user enters web tab request as {string}")
    public void userEntersWebTabRequestAs(String arg0) {
        homePage.enterCews_request(arg0);
    }
    @Then("user enters web tab description as {string}")
    public void userEntersWebTabDescriptionAs(String arg0) {
        homePage.enterCews_description(arg0);
    }
    @And("user enters megadisc description as {string}")
    public void userEntersMegadiscDescriptionAs(String arg0) {
        homePage.enterMegadisc_add_user_description(arg0);
    }



    @And("user enters dns sweden customer id name as {string}")
    public void userEntersDnsSwedenCustomerIdNameAs(String arg0) {
        homePage.enterNetworkSecurityDnsSwedenCustomerIdName(arg0);
    }


    @And("user enters user id as {string}")
    public void userEntersUserIdAs(String arg0) {
        homePage.enterNetworkSecurityProxySurfProxyUserId(arg0);
    }

    @Then("user enters network security surf proxy description as {string}")
    public void userEntersNetworkSecuritySurfProxyDescriptionAs(String arg0) {
        homePage.enterNetworkSecurityProxySurfProxyOneDescription(arg0);
    }


    @And("user selects AT1 CI as {string}")
    public void userSelectsATCIAs(String arg0) {
        homePage.selectsAT1Ci(arg0);
    }

    @And("user selects BDL AT2 CI as {string}")
    public void userSelectsBDLAT2CIAs(String arg0) {
        homePage.selectAT2Ci(arg0);
    }
    @And("user selects BDL AT3 CI as {string}")
    public void userSelectsBDLAT3CIAs(String arg0) {
        homePage.selectAT3Ci(arg0);
    }
    @And("user selects BDL prod CI as {string}")
    public void userSelectsBDLATProdCIAs(String arg0) {
        homePage.selectProdCi(arg0);
    }

    @And("user clicks on IT Infrastructure dropdown")
    public void userClicksOnITInfrastructureDropdown() {
        homePage.clickIT_Infrastructure();
    }


    @Then("user enters operating system access description as {string}")
    public void userEntersOperatingSystemAccessDescriptionAs(String arg0) {
        homePage.enterOperatingSystem_access_description(arg0);
    }

    @And("user enters {string} in the AT2 WBS Code field")
    public void userEntersInTheATWBSCodeField(String arg0) {
        homePage.enterBdlWbsCodeAt2(arg0);
    }

    @And("user enters {string} in the AT1 WBS Code field")
    public void userEntersInTheAT1WBSCodeField(String arg0) {
        homePage.enterBdlWbsCodeAt1(arg0);
    }

    @And("user enters {string} in the Prod WBS Code field")
    public void userEntersInTheProdWBSCodeField(String arg0) {
        homePage.enterBdlWbsCodeAt1(arg0);
    }

    @And("user enters whitelisting source IP Address as {string}")
    public void userEntersWhitelistingSourceIPAddressAs(String arg0) {
        homePage.enterWhitelistingSourceIpAddress(arg0);
    }

    @When("user clicks on Access to Red Hat Knowledgebase")
    public void userClicksOnAccessToRedHatKnowledgebase() {
        homePage.clickAccess_Red_Hat_Knowledgebase();
    }

    @Then("user validates plaza ticket has update to timeline")
    public void userValidatesPlazaTicketHasUpdateToTimeline() {
       Assert.assertEquals(homePage.getManualNotification_plaza(), "Test Update");
    }

    @And("user selects service as {string}")
    public void userSelectsServiceAs(String arg0) {
       homePage.selectService(arg0);
    }

    @Then("user validates PDB submit form opens")
    public void userValidatesPDBSubmitFormOpens() {
    }

    @And("user validates Service area as {string}")
    public void userValidatesServiceAreaAs(String arg0) {
        Assert.assertEquals(homePage.getServiceArea(), arg0);
    }
    @And("user validates Service as {string}")
    public void userValidatesServiceAs(String arg0) {
        Assert.assertEquals(homePage.getService_CreateIncident(), arg0);
    }

    @Then("user enters PDB date and time as current date and time")
    public void userEntersPDBDateAndTimeAsCurrentDateAndTime() {
      homePage.enterDatetime_PDB(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @And("user selects nature and content as {string}")
    public void userSelectsNatureAndContentAs(String arg0) {
     homePage.selectNatureAndContent(arg0);
    }

    @And("user selects affected persons as {string}")
    public void userSelectsAffectedPersonsAs(String arg0) {
        homePage.selectAffectedPerson(arg0);
    }

    @And("user enters {string} under Affected persons name and unique id")
    public void userEntersUnderAffectedPersonsNameAndUniqueId(String arg0) {
      homePage.enterAffectedPersons(arg0);
    }


    @When("user enters {string} in plaza search box")
    public void userEntersInPlazaSearchBox(String arg0) {
        homePage.enterSearchAndSelectIncident(arg0);
    }

    @And("user opens internal case form")
    public void userOpensInternalCaseForm() {

    }

    @Then("user should see internal case form appear")
    public void userShouldSeeInternalCaseFormAppear() {

    }

    @And("user selects {string} under Service area dropdown")
    public void userSelectsUnderServiceAreaDropdown(String arg0) {
        homePage.selectServiceArea(arg0);
    }

    @And("user selects {string} under Service area category dropdown")
    public void userSelectsUnderServiceAreaCategoryDropdown(String arg0) {
        homePage.selectServiceAreaCategory(arg0);
    }

    @And("user enters {string} in the plaza request field")
    public void userEntersInThePlazaRequestField(String arg0) {
        homePage.enterRequest_LinuxUnixServer(arg0);
    }

    @And("user enters {string} in the plaza CI field")
    public void userEntersInThePlazaCIField(String arg0) {
        homePage.selectCI_LinuxUnixServer(arg0);
    }

    @And("user selects {string} under type of server dropdown")
    public void userSelectsUnderTypeOfServerDropdown(String arg0) {
        homePage.selectTypeOfServer(arg0);
    }

    @And("user enters {string} in the plaza description field")
    public void userEntersInThePlazaDescriptionField(String arg0) {
        homePage.enterDescription_LinuxUnixServer(arg0);
    }

    @Then("user clicks on submit button on plaza form")
    public void userClicksOnSubmitButtonOnPlazaForm() {
        homePage.clickSubmit_Button();
        homePage.wait(5000);
    }

    @And("user validates internal case management form opens")
    public void userValidatesInternalCaseManagementFormOpens() {
        Assert.assertTrue(homePage.validateInternalCaseManagementIsOpened());
    }

    @When("user enters {string} in the ticket timeline")
    public void userEntersInTheTicketTimeline(String arg0) {
        homePage.enterManualNotification_plaza(arg0);
    }

    @And("user clicks on plaza send button")
    public void userClicksOnPlazaSendButton() {
        homePage.clickSend_Button();
    }


    @Then("user should see incident ticket update in plaza")
    public void userShouldSeeIncidentIdUpdateInPlazaTicket() {
     Assert.assertTrue(homePage.verifyIncidentUpdate());
    }

    @And("user clicks on plaza portal")
    public void userClicksOnPlazaPortal() {
        homePage.clickPlazaHome();
    }

    @Then("user selects system name in haiti as {string}")
    public void userSelectsSystemNameInHaitiAs(String arg0) {
        homePage.selectSystemNameInHaiti(arg0);
    }

    @And("user selects PDB effected country {string}")
    public void userSelectsPDBEffectedCountry(String arg0) {
        homePage.clickPDB_AffectedCountry(arg0);
    }
    @And("user should see OW manual notification in plaza ticket as {string}")
    public void userShouldSeeOWManualNotificationInPlazaTicketAs(String expectedTimelineUpdate) {
        Assert.assertTrue(homePage.verifyOWTimelineUpdateInPlaza(expectedTimelineUpdate));
    }
    @Then("user should see {string} update in plaza ticket")
    public void userShouldSeeUpdateInPlazaTicket(String arg0) {
        Assert.assertEquals(homePage.getOW_AttachmentNotification_plaza(), arg0);
    }
    @And("user selects {string} under plaza category dropdown")
    public void userSelectsUnderPlazaCategoryDropdown(String arg0) {
        homePage.selectCategory_plazaIncident(arg0);
    }

    @And("user selects {string} under plaza type of issue")
    public void userSelectsUnderPlazaTypeOfIssue(String arg0) {
        homePage.selectTypeOfIssue_plazaIncident(arg0);
    }

    @And("user enters {string} in the plaza subject field")
    public void userEntersInThePlazaSubjectField(String arg0) {
        homePage.enterSubject_PlazaIncident(arg0);
    }

    @And("user enters {string} in the plaza describe field")
    public void userEntersInThePlazaDescribeField(String arg0) {
        homePage.enterDescribeQuestionOrCase_plazaIncident(arg0);
    }

    @And("user selects No under access to email radio buttons")
    public void userSelectsUnderAccessToEmailRadioButtons() {
        homePage.clickNoAccessToMail();
    }

    @Then("user validates plaza first timeline message as {string}")
    public void userValidatesPlazaTimelineMessageAs(String arg0) {
        String ExpectedMessage= arg0+CommonUtils.plazaRequestID;
        Assert.assertEquals(homePage.getFirstTimelineMessage(), ExpectedMessage);
    }

    @And("user validates plaza second timeline message as {string}")
    public void userValidatesPlazaSecondTimelineMessageAs(String arg0) {
        Assert.assertEquals(homePage.getSecondTimelineMessage(), arg0);
    }

    @When("user clicks on shown ICM number")
    public void userClicksOnShownICMNumber() {
            homePage.clickOn_ICM_number();

    }
    @Then("user should see ICM form")
    public void userShouldSeeICMForm() {
    }

    @And("user validates INC is present under internal case subtasks")
    public void userValidatesINCIsPresentUnderInternalCaseSubtasks() {
      Assert.assertTrue(homePage.verifyINCisPresent());
    }

    @When("user clicks on INC under internal case subtasks")
    public void userClicksOnINCUnderInternalCaseSubtasks() {
        homePage.userClickINCNumber();
    }

    @Then("user should see INC form")
    public void userShouldSeeINCForm() {
    }

    @Then("user enters plaza assignment group as {string}")
    public void userEntersPlazaAssignmentGroupAs(String arg0) {
        homePage.enterAssignmentGroup_PlazaIncident(arg0);
    }

    @And("user enters plaza assignee as {string}")
    public void userEntersPlazaAssigneeAs(String arg0) {
        homePage.enterAssignedTo_PlazaIncident(arg0);
    }

    @Then("user clicks on plaza close incident button")
    public void userClicksOnPlazaCloseIncidentButton() {
       homePage.clickCloseIncident();
    }

    @And("user validates plaza ticket status as {string}")
    public void userValidatesPlazaTicketStatusAs(String arg0) {
        Assert.assertEquals(homePage.getIncidentState(), arg0);
    }

    @Then("user selects System name in haiti as {string}")
    public void userSelectsSystemNameHaitiAs(String arg0) {
        homePage.selectSystemNameHaiti(arg0);
    }

    @Then("user selects network security system name in haiti as {string}")
    public void userSelectsNetworkSecuritySystemNameInHaitiAs(String arg0) {
        homePage.selectNetworkSecuritySystemNameHaiti(arg0);
    }

    @Then("user selects network security firewall system name in haiti as {string}")
    public void userSelectsNetworkSecurityFirewallSystemNameInHaitiAs(String arg0) {
        homePage.selectNetworkSecurityFirewallSystemNameHaiti(arg0);
    }

    @Then("user selects proxy general inquiry system name in haiti as {string}")
    public void userSelectsProxyGeneralInquirySystemNameInHaitiAs(String arg0) {
        homePage.selectNetworkSecurityProxySystemNameHaiti(arg0);
    }

    @Then("user selects remote access system name in haiti as {string}")
    public void userSelectsRemoteAccessSystemNameInHaitiAs(String arg0) {
        homePage.selectNetworkSecurityRemoteAccessSystemNameHaiti(arg0);
    }

    @Then("user selects nimbus system name in haiti as {string}")
    public void userSelectsNimbusSystemNameInHaitiAs(String arg0) {
        homePage.selectNimbusSystemNameHaiti(arg0);
    }

    @And("user enters itfi system dropdown as {string}")
    public void userEntersItfiSystemDropdownAs(String arg0) {
        homePage.selectitfiSystem(arg0);
    }

    @And("user enters occ CI as {string}")
    public void userEntersOccCIAs(String arg0) {
        homePage.selectOccCi(arg0);
    }

    @And("user enters web tab CI as {string}")
    public void userEntersWebTabCIAs(String arg0) {
        homePage.selectWebtabCi(arg0);
    }

    @When("user clicks on Products & Services")
    public void userClicksOnProductsServices() {
        homePage.clickProducts_And_Services();
    }

    @And("user clicks on {string} under IT Infrastructure")
    public void userClicksOnUnderITInfrastructure(String arg0) {
        homePage.selectDropdownValueUnderItInfrastructure(arg0);
        homePage.wait(1000);
    }

    @And("user enters CRM resource request as {string}")
    public void userEntersCRMResourceRequestAs(String arg0) {
        homePage.enterCRMResourceServiceRequest(arg0);
    }

    @And("user enters appwatch request as {string}")
    public void userEntersAppwatchRequestAs(String arg0) {
        homePage.enterAppwatchRequest(arg0);
    }

    @Then("user selects on call team as {string}")
    public void userSelectsOnCallTeamAs(String arg0) {
        homePage.selectOnCallTeam(arg0);
    }

    @Then("user enters service group name as {string}")
    public void userEntersServiceGroupNameAs(String arg0) {
        homePage.enterAppwatchServiceGroupName(arg0);
    }

    @And("user selects enable notifications as {string}")
    public void userSelectsEnableNotificationsAs(String arg0) {
        homePage.selectEnableNotifications(arg0);
    }

    @Then("user enters ibs request as {string}")
    public void userEntersIbsRequestAs(String arg0) {
        homePage.enterIbsRequest(arg0);
    }

    @Then("user selects service level management as {string}")
    public void userSelectsServiceLevelManagementAs(String arg0) {
        homePage.selectServiceLevelManagement(arg0);
    }

    @And("user selects patch window as {string}")
    public void userSelectsPatchWindowAs(String arg0) {
        homePage.selectPatchWindow(arg0);
    }

    @Then("user selects microsoft security patching as {string}")
    public void userSelectsMicrosoftSecurityPatchingAs(String arg0) {
        homePage.selectMicrosoftSecurityPatching(arg0);
    }

    @And("user enters monitoring in appwatch as {string}")
    public void userEntersMonitoringInAppwatchAs(String arg0) {
        homePage.enterMonitoringAppWatch(arg0);
    }

    @And("user enters vcpu and ram as {string}")
    public void userEntersVcpuAndRamAs(String arg0) {
        homePage.enterVcpuAndRam(arg0);
    }

    @And("user selects csm monitoring as {string}")
    public void userSelectsCsmMonitoringAs(String arg0) {
        homePage.selectCsmMonitoring(arg0);
    }

    @And("user selects ddc site as {string}")
    public void userSelectsDdcSiteAs(String arg0) {
        homePage.selectDdcSite(arg0);
    }

    @And("user selects server type as {string}")
    public void userSelectsServerTypeAs(String arg0) {
        homePage.selectServerType(arg0);
    }

    @Then("user selects vlan as {string}")
    public void userSelectsVlanAs(String arg0) {
        homePage.selectVlan(arg0);
    }

    @Then("user selects number of servers as {string}")
    public void userSelectsNumberOfServersAs(String arg0) {
        homePage.selectNumberOfServers(arg0);
    }

    @Then("user enters touchpoint plus request as {string}")
    public void userEntersTouchpointPlusRequestAs(String arg0) {
        homePage.enterTouchpointRequest(arg0);
    }

    @Then("user enters organisation name as {string}")
    public void userEntersOrganisationNameAs(String arg0) {
        homePage.enterOrganisationName(arg0);
    }

    @Then("user enters service id as {string}")
    public void userEntersServiceIdAs(String arg0) {
        homePage.enterServiceId(arg0);
    }

    @And("user clicks on generally button")
    public void userClicksOnGenerallyButton() {
        homePage.clickGenerally();
    }

    @Then("user selects name as {string}")
    public void userSelectsNameAs(String arg0) {
        homePage.selectName(arg0);
    }

    @Then("user enters touchpoint request as {string}")
    public void userEntersTouchpointRequestAs(String arg0) {
        homePage.enterUpdateSupportPagesRequest(arg0);
    }

    @And("user enters touchpoint plus sms provider request as {string}")
    public void userEntersTouchpointPlusSmsProviderRequestAs(String arg0) {
        homePage.enterTouchpointSmsRequest(arg0);
    }

    @And("user enters touchpoint description as {string}")
    public void userEntersTouchpointDescriptionAs(String arg0) {
        homePage.enterTouchpointDescription(arg0);
    }

    @And("user enters touchpoint user id as {string}")
    public void userEntersTouchpointUserIdAs(String arg0) {
        homePage.enterTouchpointUserId(arg0);
    }

    @And("user enters touchpoint plus description as {string}")
    public void userEntersTouchpointPlusDescriptionAs(String arg0) {
        homePage.enterTouchpointPlusDescription(arg0);
    }

    @When("user selects splunk role dropdown as {string}")
    public void userSelectsSplunkRoleDropdownAs(String arg0) {
        homePage.selectSplunkRole(arg0);
    }

    @And("user enters splunk H2 Name Hid as {string}")
    public void userEntersSplunkHNameHidAs(String arg0) {
        homePage.enterSplunkH2Name(arg0);
    }

    @Then("user enters appwatch description as {string}")
    public void userEntersAppwatchDescriptionAs(String arg0) {
        homePage.enterAppwatchDescription(arg0);
    }

    @And("user selects ibs service request name as {string}")
    public void userSelectsIbsServiceRequestNameAs(String arg0) {
        homePage.selectIbsServiceRequestName(arg0);
    }

    @And("user enters ibs CI as {string}")
    public void userEntersIbsCIAs(String arg0) {
        homePage.selectsAddIbsCi(arg0);
    }

    @Then("user enters ibs description as {string}")
    public void userEntersIbsDescriptionAs(String arg0) {
        homePage.enterIbsDescription(arg0);
    }

    @Then("user enters ibs order request as {string}")
    public void userEntersIbsOrderRequestAs(String arg0) {
        homePage.enterIbsOrderRequest(arg0);
    }

    @Then("user selects ibs system dropdown as {string}")
    public void userSelectsIbsSystemDropdownAs(String arg0) {
        homePage.enterIbsSystem(arg0);
    }

    @Then("user enters ibs order description as {string}")
    public void userEntersIbsOrderDescriptionAs(String arg0) {
        homePage.enterIbsOrderDescription(arg0);
    }

    @Then("user enters touchpoint update description as {string}")
    public void userEntersTouchpointUpdateDescriptionAs(String arg0) {
        homePage.enterTouchpointUpdateDescription(arg0);
    }

    @And("user enters touchpoint planned start date and time as current time")
    public void userEntersTouchpointPlannedStartDateAndTimeAsCurrentTime() {
        homePage.enterTouchpointStartDateAndTime(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @And("user selects order one time Add CI as {string}")
    public void userSelectsOrderOneTimeAddCIAs(String arg0) {
       homePage.selectAddOneTimeCi(arg0);
    }

    @When("user clicks on account management and server form")
    public void userClicksOnAccountManagementAndServerForm() {
        homePage.clickAccount_Management_And_Server_Form();
    }

    @And("user enters host service group name as {string}")
    public void userEntersHostServiceGroupNameAs(String arg0) {
        homePage.enterAppwatchHostGroupName(arg0);
    }

    @And("user clicks on application under IT Infrastructure dropdown")
    public void userClicksOnApplicationUnderITInfrastructureDropdown() {
        homePage.clickApplication();
    }

    @And("user clicks on show more button")
    public void userClicksOnShowMoreButton() {
        homePage.clickShow_More();
    }

    @And("user selects service area as {string}")
    public void userSelectsServiceAreaAs(String arg0) {
       homePage.selectServiceAs(arg0);
    }

    @When("user clicks support on plaza homepage")
    public void userClicksSupportOnPlazaHomepage() {
        homePage.clickSupport();
    }

    @And("user selects compute and operating system system name in haiti as {string}")
    public void userSelectsComputeAndOperatingSystemSystemNameInHaitiAs(String arg0) {
        homePage.selectcomputeSystemNameInHaiti(arg0);
    }

    @And("user clicks on firewall & network under IT Infrastructure dropdown")
    public void userClicksOnFirewallNetworkUnderITInfrastructureDropdown() {
        homePage.clickFirewall_And_Network();
    }

    @And("user clicks on cloud under IT Infrastructure dropdown")
    public void userClicksOnCloudUnderITInfrastructureDropdown() {
        homePage.clickCloud();
    }

    @And("user clicks on compute & operating system under IT Infrastructure dropdown")
    public void userClicksOnComputeOperatingSystemUnderITInfrastructureDropdown() {
        homePage.clickCompute_And_Operating_System();
    }

    @And("user clicks on messaging under IT Infrastructure dropdown")
    public void userClicksOnMessagingUnderITInfrastructureDropdown() {
        homePage.clickMessaging();
    }

    @And("user clicks on database under IT Infrastructure")
    public void userClicksOnDatabaseUnderITInfrastructure() {
        homePage.click_Database();
    }

    @And("user clicks on data center under IT Infrastructure dropdown")
    public void userClicksOnDataCenterUnderITInfrastructureDropdown() {
        homePage.click_Data_Center();
    }

    @And("user clicks on storage & data protection under IT Infrastructure")
    public void userClicksOnStorageDataProtectionUnderITInfrastructure() {
        homePage.click_Storage_And_Data_Protection();
    }

    @And("user validates resolution notes as {string}")
    public void userValidatesResolutionNotesAs(String arg0) {
        Assert.assertEquals(homePage.getResolutionNotes(), arg0);
    }

    @Then("user validates resolution code as {string}")
    public void userValidatesResolutionCodeAs(String arg0) {
        Assert.assertTrue(homePage.getResolutionCode(), arg0);
    }

    @And("user selects affected person type as {string}")
    public void userSelectsAffectedPersonTypeAs(String arg0) {
        homePage.clickPDB_AffectedPersonType(arg0);
    }

    @And("user selects server database CI as {string}")
    public void userSelectsServerDatabaseCIAs(String arg0) {
        homePage.selectServerDatabaseCi(arg0);

    }

    @When("user clicks on support link")
    public void userClicksOnSupportLink() {
        homePage.click_Support();
    }

    @And("user gets plaza OP ticket")
    public void userGetsPlazaOPTicket() {
        homePage.wait(30000);
        try {
            homePage.getOpTicket_plaza();
        }
        catch(Exception e){
            homePage.wait(5000);
            homePage.getOpTicket_plaza();
        }
    }


    @And("user clicks on plaza closure information tab")
    public void userClicksOnPlazaClosureInformationTab() {
        homePage.clickClosureInformationTab();
    }

    @And("user clicks on plaza {string} tab")
    public void userClicksOnPlazaTab(String tabName) {
        homePage.clickTab_Plaza(tabName);
    }

    @Then("user selects operating system name in haiti as {string}")
    public void userSelectsOperatingSystemNameInHaitiAs(String arg0) {
        homePage.selectOperatingSystemNameHaiti(arg0);
    }

    @Then("user selects operating system change from manual system name in haiti as {string}")
    public void userSelectsOperatingSystemChangeFromManualSystemNameInHaitiAs(String arg0) {
        homePage.selectOperatingChangeFromManualSystemNameHaiti(arg0);
    }

    @Then("user selects operating change from auto system name in haiti as {string}")
    public void userSelectsOperatingChangeFromAutoSystemNameInHaitiAs(String arg0) {
        homePage.selectOperatingChangeFromAutoSystemNameHaiti(arg0);
    }

    @Then("user selects operating account management system name in haiti as {string}")
    public void userSelectsOperatingAccountManagementSystemNameInHaitiAs(String arg0) {
        homePage.selectOperatingAccountManagementSystemNameHaiti(arg0);
    }

    @Then("user selects network security firewall new change system name in haiti as {string}")
    public void userSelectsNetworkSecurityFirewallNewChangeSystemNameInHaitiAs(String arg0) {
        homePage.selectNetworkSecurityFirewallNewChangeSystemNameHaiti(arg0);
    }

    @Then("user selects network security new switch system name in haiti as {string}")
    public void userSelectsNetworkSecurityNewSwitchSystemNameInHaitiAs(String arg0) {
        homePage.selectNetworkSecurityNewSwitchSystemNameHaiti(arg0);
    }

    @Then("user selects proxy general resource request system name in haiti as {string}")
    public void userSelectsProxyGeneralResourceRequestSystemNameInHaitiAs(String arg0) {
        homePage.selectNetworkSecurityProxyResourceRequestSystemNameHaiti(arg0);
    }

    @And("user selects network security switch port config add CI as {string}")
    public void userSelectsNetworkSecuritySwitchPortConfigAddCIAs(String arg0) {
        homePage.enterNetworkSecurity_switch_port_add_ci_multipleValues(arg0);
    }

    @And("user clicks on add second attachment in plaza")
    public void userClicksOnAddSecondAttachmentInPlaza() {
        homePage.clickAddSecondAttachment();
    }

    @And("user enters list of files and folders as {string}")
    public void userEntersListOfFilesAndFoldersAs(String arg0) {
        
        homePage.enterListOfFiles(arg0);
    }

    @Then("user enters list of file types as {string}")
    public void userEntersListOfFileTypesAs(String arg0) {
        homePage.enterListOfFileTypes(arg0);
    }

    @And("user enters list of processes as {string}")
    public void userEntersListOfProcessesAs(String arg0) {
        homePage.enterListOfProcesses(arg0);
    }

    @Then("user adds any CI on plaza exclusion endpoint protection antivirus form")
    public void userAddsAnyCIOnPlazaExclusionEndpointProtectionAntivirusForm() {
      homePage.select_CI_exclusionEndpoint();
    }

    @Then("user should see {string} update in plaza")
    public void userShouldSeeUpdateInPlaza(String arg0) {
        Assert.assertEquals(homePage.getOWNotification_plaza(), arg0);
    }

    @And("user opens second tab")
    public void userOpensSecondTab() {
        homePage.openSecondTab();
    }

    @And("user selects any server database CI")
    public void userSelectsAnyServerDatabaseCI() {
        homePage.selectAnyServerDatabaseCI();

    }

    @And("user enters CRM  resource request planned start date as current date")
    public void userEntersCRMResourceRequestPlannedStartDateAsCurrentDate() {
            homePage.enterCRM_resourceRequest_plannedStart(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @And("user enters CRM resource request planned end date as current date")
    public void userEntersCRMResourceRequestPlannedEndDateAsCurrentDate() {
        homePage.enterCRM_resourceRequest_plannedEnd(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 1));
    }

    @And("user enters CRM resource request description as {string}")
    public void userEntersCRMResourceRequestDescriptionAs(String description) {
        homePage.enterCRM_resourceRequest_Description(description);
    }

    @And("user selects network security internal external website as {string}")
    public void userSelectsNetworkSecurityInternalExternalWebsiteAs(String dropdownValue) {
       homePage.selectNetworkSecurity_new_existing_account(dropdownValue);
    }

    @Then("user selects network security remote access select request as {string}")
    public void userSelectsNetworkSecurityRemoteAccessSelectRequestAs(String ddValue) {
        homePage.selectNetworkSecurityRemoteAccessSelectRequest(ddValue);
    }

    @And("user selects any operating system account management server CI")
    public void userSelectsAnyOperatingSystemAccountManagementServerCI() {
        homePage.select_OS_AccountManagement_ServerDatabaseCI();
    }

    @And("user selects any operating system CI")
    public void userSelectsOperatingSystemCI() {
       homePage.selectCI_OS();
    }

    @And("user selects operating system change from manual service window as {string}")
    public void userSelectsOperatingSystemChangeFromManualServiceWindowAs(String serviceWIndow) {
        homePage.select_OS_ChangeFromManualServiceWindow(serviceWIndow);
    }

    @And("user selects any operating system manual OS patching CI")
    public void userSelectsAnyOperatingSystemManualOSPatchingCI() {
        homePage.selectCI_OS_ManualPatching();
    }

    @When("user clicks on {string} pebble")
    public void userClicksOnPebble(String pebbleName) {
        homePage.clickPebble(pebbleName);
    }


    @And("user selects any BCPP CI")
    public void userSelectsAnyBCPPCI() {
        homePage.selectCI_BCPP();
    }

    @And("user selects any cews CI")
    public void userSelectsAnyCewsCI() {
        homePage.selectCI_CEWS();
    }

    @And("users adds any cloud one time CI")
    public void usersAddsAnyCloudOneTimeCI() {
       homePage.selectCI_CloudOneTime();
    }

    @And("user selects any efs bss CI")
    public void userSelectsAnyEfsBssCI() {
        homePage.selectCI_CEWS();
    }

    @And("user searches for plaza {string} attachment and adds it")
    public void userSearchesForPlazaAttachmentAndAddsIt(String filePath) {
        String projectPath = System.getProperty("user.dir");
        System.out.println(projectPath);
        String fullFilePath = projectPath + "\\src\\test\\resources\\" + filePath;
        System.out.println(fullFilePath);
//        CommonUtils.uploadFile(fullFilePath);
        homePage.uploadPlazaAttachmentFile(fullFilePath);
        homePage.wait(500);
//        homePage.clickElementByContainsTextAndTagName("button", "Upload Without Encrypting");

    }

    @And("user selects plaza affected persons as other")
    public void userSelectsPlazaAffectedPersonsAsOther() {
        homePage.clickConsumerCustomerRadioButton();
    }


    @When("user clicks on create ICM number")
    public void userClicksOnCreateICMNumber() {
        homePage.clickOn_PlazaCreateICM_number();
    }
}