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
        Assert.assertEquals(homePage.getTitle_plazaHomePage(), "Home - Plaza");
    }

    @When("user clicks on {string}")
    public void userClicksOnButton(String text) {
        homePage.clickElementByContainsTextAndTagName("*", text);
    }

    @And("user clicks on IT Infrastructure dropdown")
    public void userClicksOnITInfrastructureDropdown() {
        clickElement(By.xpath("//*[@id='xcc61d55edb198b00b27fdb11ce961902']/div/div[2]/div[4]/a/span/i"));
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
        clickElement(By.xpath("//img[@alt='Finance & Assurance']"));
    }

    @And("user gets plaza request id")
    public void userGetsPlazaRequestId() {
        homePage.wait(5000);
        CommonUtils.plazaRequestID = homePage.getPlazaRequestNum();
    }

    @And("user clicks on plaza request id")
    public void userClicksOnPlazaRequestId() {
        homePage.clickPlazaRequestNum();
    }

    @Then("user should see service request form")
    public void userShouldSeeServiceRequestForm() {
    }

    @When("user opens new tab")
    public void userOpensNewTab() {
        homePage.openNewTab();
    }


    @When("user clicks on {string} pebble")
    public void userClicksOnPebble(String arg0) {
        homePage.clickPebble(arg0);
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
        homePage.enterCablingNew_deliveryDate(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
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
        homePage.enterDataCentre_deliveryDate(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
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
        homePage.selectsAddCi_multipleValues(arg0);
    }

    @And("user enters Network Equipment requested delivery date as current date and time")
    public void userEntersNetworkEquipmentRequestedDeliveryDateAsCurrentDateAndTime() {
        homePage.enterNetworkEquipment_delivery(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
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
        homePage.enterNetworkEquipment_dateFordecommission(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
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
        clickElement(By.xpath("//*[@id='xcc61d55edb198b00b27fdb11ce961902']/div/div[2]/div[5]/div[4]"));
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
    public void userEntersNetworkSecurityServiceRequestNameAs (String arg0){
        homePage.entersNetworkSecurity_add_modify_remove_dns_service_request(arg0);
    }

    @And("user enters Network Security Add Modify Remove DNS request as {string}")
    public void userEntersNetworkSecurityAddModifyRemoveDNSRequestAs (String arg0){
        homePage.enterNetworkSecurity_add_modify_remove_dns_request(arg0);
    }

    @And("user selects Scheduled change as {string}")
    public void userSelectsScheduledChangeAs (String arg0){
        homePage.selectNetworkSecurity_add_modify_remove_dns_scheduled_change(arg0);
    }

    @When("user clicks on DNS DHCP pebble")
    public void userClicksOnDNSDHCPPebble () {
        clickElement(By.xpath("//*[@id=\"x2723de4adb72cf006734f1eabf9619aa\"]/div/div/div[2]/div[6]/div/a/div/h2"));
    }

    @And("user enters Network Security Add Modify Remove DNS description as {string}")
    public void userEntersNetworkSecurityAddModifyRemoveDNSDescriptionAs (String arg0){
        homePage.enterNetworkSecurity_add_modify_remove_dns_description(arg0);
    }

    @When("user clicks on Firewall Routing Request pebble")
    public void userClicksOnFirewallRoutingRequestPebble () {
        clickElement(By.xpath("//*[@id=\"x2723de4adb72cf006734f1eabf9619aa\"]/div/div/div[2]/div[8]/div/a/div/h2"));
    }

    @Then("user selects New Change Service Request Name as {string}")
    public void userSelectsNewChangeServiceRequestNameAs (String arg0){
        homePage.selectNetworkSecurity_firewall_new_change_service_request(arg0);
    }

    @And("user enters Network Security Firewall New Change request as {string}")
    public void userEntersNetworkSecurityFirewallNewChangeRequestAs (String arg0){
        homePage.enterNetworkSecurity_firewall_new_change_request(arg0);
    }


    @And("user enters Network Security Firewall New Change description as {string}")
    public void userEntersNetworkSecurityFirewallNewChangeDescriptionAs (String arg0){
        homePage.enterNetworkSecurity_firewall_new_change_description(arg0);
    }

    @And("user selects Add CI as {string}")
    public void userSelectsAddCIAs (String arg0){
        homePage.enterNetworkSecurity_firewall_new_change_add_ci_multipleValues(arg0);
    }

    @And("user enters Network Security Firewall Troubleshoot request as {string}")
    public void userEntersNetworkSecurityFirewallTroubleshootRequestAs (String arg0){
        homePage.enterNetworkSecurity_firewall_troubleshoot_request(arg0);
    }

    @Then("user enters FIRE Ticket number as {string}")
    public void userEntersFIRETicketNumberAs (String arg0){
        homePage.enterNetworkSecurity_firewall_troubleshoot_ticket_number(arg0);
    }

    @And("user enters Source IP Address as {string}")
    public void userEntersSourceIPAddressAs (String arg0){
        homePage.enterNetworkSecurity_firewall_troubleshoot_source_id(arg0);
    }

    @And("user enter Target IP Address as {string}")
    public void userEnterTargetIPAddressAs (String arg0){
        homePage.enterNetworkSecurity_firewall_troubleshoot_target_ip(arg0);
    }

    @Then("user selects Server connectivity verified as {string}")
    public void userSelectsServerConnectivityVerifiedAs (String arg0){
        homePage.selectNetworkSecurity_add_modify_remove_dns_scheduled_change(arg0);
    }

    @And("user enters date and time when tests performed as current date and time")
    public void userEntersDateAndTimeWhenTestsPerformedAsCurrentDateAndTime () {
        homePage.enterNetworkSecurity_firewall_troubleshoot_date_and_time(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @Then("user selects Traffic return routing verified as {string}")
    public void userSelectsTrafficReturnRoutingVerifiedAs (String arg0){
        homePage.selectDatabaseAccountType(arg0);
    }

    @And("user enters Network Security Troubleshoot description as {string}")
    public void userEntersNetworkSecurityTroubleshootDescriptionAs (String arg0){
        homePage.enterNetworkSecurity_firewall_troubleshoot_description(arg0);
    }

    @When("user clicks on LAN Data Net LAN pebble")
    public void userClicksOnLANDataNetLANPebble () {
        clickElement(By.xpath("//*[@id='x2723de4adb72cf006734f1eabf9619aa']/div/div/div[2]/div[10]/div/a/div/h2"));
    }

    @And("user enters Network Security LAN request as {string}")
    public void userEntersNetworkSecurityLANRequestAs (String arg0){
        homePage.enterNetworkSecurity_lan_request(arg0);
    }

    @Then("user enters Network Security LAN description as {string}")
    public void userEntersNetworkSecurityLANDescriptionAs (String arg0){
        homePage.enterNetworkSecurity_lan_description(arg0);
    }

    @When("user clicks on Network Load Balancing pebble")
    public void userClicksOnNetworkLoadBalancingPebble () {
        clickElement(By.xpath("//*[@id='x2723de4adb72cf006734f1eabf9619aa']/div/div/div[2]/div[12]/div/a/div/h2"));


    }

    @And("user enters Network Security Load request as {string}")
    public void userEntersNetworkSecurityLoadRequestAs (String arg0){
        homePage.enterNetworkSecurity_load_balancing_request(arg0);
    }

    @Then("user enters Network Security Load description as {string}")
    public void userEntersNetworkSecurityLoadDescriptionAs (String arg0){
        homePage.enterNetworkSecurity_load_balancing_description(arg0);
    }

    @When("user clicks on Network Routing Switching pebble")
    public void userClicksOnNetworkRoutingSwitchingPebble () {
        clickElement(By.xpath("//*[@id='x2723de4adb72cf006734f1eabf9619aa']/div/div/div[2]/div[16]/div/a/div/h2"));
    }

    @Then("user selects New Switch Service Request Name as {string}")
    public void userSelectsNewSwitchServiceRequestNameAs (String arg0){
        homePage.selectNetworkSecurity_firewall_new_change_service_request(arg0);
    }

    @And("user enters Network Security Routing New Switch request as {string}")
    public void userEntersNetworkSecurityRoutingNewSwitchRequestAs (String arg0){
        homePage.enterNetworkSecurity_new_switch_request(arg0);
    }

    @Then("user selects Network CI as {string}")
    public void userSelectsNetworkCIAs (String arg0){
        homePage.selectNetworkSecurity_new_switch_network_ci(arg0);
    }

    @And("user enters DC-site as {string}")
    public void userEntersDCSiteAs (String arg0){
        homePage.enterNetworkSecurity_new_switch_dc_site(arg0);
    }

    @And("user enters Data Room as {string}")
    public void userEntersDataRoomAs (String arg0){
        homePage.enterNetworkSecurity_new_switch_data_room(arg0);
    }

    @Then("user enters Rack as {string}")
    public void userEntersRackAs (String arg0){
        homePage.enterNetworkSecurity_new_switch_rack(arg0);
    }

    @And("user enters usage of the switch as {string}")
    public void userEntersUsageOfTheSwitchAs (String arg0){
        homePage.enterNetworkSecurity_new_switch_usage(arg0);
    }

    @And("user enter Terminal server as {string}")
    public void userEnterTerminalServerAs (String arg0){
        homePage.enterNetworkSecurity_new_switch_terminal(arg0);
    }

    @Then("user enters Network Security Routing Switching description as {string}")
    public void userEntersNetworkSecurityRoutingSwitchingDescriptionAs (String arg0){
        homePage.enterNetworkSecurity_new_switch_description(arg0);
    }

    @And("user enters Network Security Routing New VLAN request as {string}")
    public void userEntersNetworkSecurityRoutingNewVLANRequestAs (String arg0){
        homePage.enterNetworkSecurity_new_vlan_request(arg0);
    }

    @And("user enters IP Net as {string}")
    public void userEntersIPNetAs (String arg0){
        homePage.enterNetworkSecurity_new_vlan_ip_net(arg0);
    }

    @Then("user enters VLAN number and name as {string}")
    public void userEntersVLANNumberAndNameAs (String arg0){
        homePage.enterNetworkSecurity_new_vlan_number_and_name(arg0);
    }

    @Then("user enters Purpose of VLAN as {string}")
    public void userEntersPurposeOfVLANAs (String arg0){
        homePage.enterNetworkSecurity_new_vlan_purpose(arg0);
    }

    @Then("user enters Network Security description as {string}")
    public void userEntersNetworkSecurityDescriptionAs (String arg0){
        homePage.enterNetworkSecurity_new_vlan_description(arg0);
    }

    @When("user clicks on Proxy pebble")
    public void userClicksOnProxyPebble () {
        clickElement(By.xpath("//*[@id='x2723de4adb72cf006734f1eabf9619aa']/div/div/div[2]/div[14]/div/a/div/h2"));
    }


    @And("user enters network security proxy request as {string}")
    public void userEntersNetworkSecurityProxyRequestAs (String arg0){
        homePage.enterNetworkSecurity_proxy_general_request(arg0);
    }

    @Then("user enters network security proxy description as {string}")
    public void userEntersNetworkSecurityProxyDescriptionAs (String arg0){
        homePage.enterNetworkSecurity_proxy_general_description(arg0);
    }

    @Then("user enters Source IP as {string}")
    public void userEntersSourceIPAs (String arg0){
        homePage.enterNetworkSecurity_proxy_reverse_source_ip(arg0);
    }

    @And("user enters Reverseproxy DNS name as {string}")
    public void userEntersReverseproxyDNSNameAs (String arg0){
        homePage.enterNetworkSecurity_proxy_reverse_dns_name(arg0);
    }

    @And("user enters Reverseproxy Protocol Port as {string}")
    public void userEntersReverseproxyProtocolPortAs (String arg0){
        homePage.enterNetworkSecurity_proxy_reverse_protocol_port(arg0);
    }

    @And("user selects Certificate as {string}")
    public void userSelectsCertificateAs (String arg0){
        homePage.selectNetworkSecurity_proxy_reverse_certificate(arg0);
    }

    @Then("user enters webserver address as {string}")
    public void userEntersWebserverAddressAs (String arg0){
        homePage.enterNetworkSecurity_proxy_reverse_webserver_address(arg0);
    }

    @And("user selects high availability as {string}")
    public void userSelectsHighAvailabilityAs (String arg0){
        homePage.selectNetworkSecurity_proxy_reverse_high_availibility(arg0);
    }

    @And("user selects load balancing method as {string}")
    public void userSelectsLoadBalancingMethodAs (String arg0){
        homePage.selectNetworkSecurity_proxy_reverse_load_balancing(arg0);
    }

    @And("user selects SurfProxy /URL filter as {string}")
    public void userSelectsSurfProxyURLFilterAs (String arg0){
        homePage.selectBCPP_Environment(arg0);
    }

    @Then("user enters URL as {string}")
    public void userEntersURLAs (String arg0){
        homePage.enterNetworkSecurity_proxy_surf_proxy_url(arg0);
    }

    @Then("user selects internal external website as {string}")
    public void userSelectsInternalExternalWebsiteAs (String arg0){
        homePage.selectDatabase_new_existing_account(arg0);
    }

    @Then("user enters error message as {string}")
    public void userEntersErrorMessageAs (String arg0){
        homePage.enterNetworkSecurity_proxy_surf_proxy_error_message(arg0);
    }

    @And("user enters has it worked before as {string}")
    public void userEntersHasItWorkedBeforeAs (String arg0){
        homePage.enterNetworkSecurity_proxy_surf_proxy_worked_before(arg0);
    }

    @Then("user enters when did the problem occure as {string}")
    public void userEntersWhenDidTheProblemOccureAs (String arg0){
        homePage.enterNetworkSecurity_proxy_surf_proxy_problem_occure(arg0);
    }

    @And("user enters what is your current proxy settings as {string}")
    public void userEntersWhatIsYourCurrentProxySettingsAs (String arg0){
        homePage.enterNetworkSecurity_proxy_surf_proxy_settings(arg0);
    }

    @Then("user enters ticket number as {string}")
    public void userEntersTicketNumberAs (String arg0){
        homePage.enterNetworkSecurity_proxy_surf_proxy_ticket_number(arg0);
    }

    @And("user selects SurfProxy url filter as {string}")
    public void userSelectsSurfProxyUrlFilterAs (String arg0){
        homePage.selectBCPP_Environment(arg0);
    }

    @And("user enters proxy date and time when tests performed as current date and time")
    public void userEntersProxyDateAndTimeWhenTestsPerformedAsCurrentDateAndTime () {
        homePage.enterNetworkSecurity_proxy_surf_proxy_date_and_time(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @And("user enters proxy Source IP Address as {string}")
    public void userEntersProxySourceIPAddressAs (String arg0){
        homePage.enterNetworkSecurity_proxy_surf_proxy_source_ip(arg0);
    }

    @And("user enters user IP as {string}")
    public void userEntersUserIPAs (String arg0){
        homePage.enterNetworkSecurity_proxy_surf_proxy_slow_surfing_user_ip(arg0);
    }

    @Then("user selects internal external sites as {string}")
    public void userSelectsInternalExternalSitesAs (String arg0){
        homePage.selectNetworkSecurity_proxy_surf_proxy_slow_surfing_sites(arg0);

    }

    @Then("user validates plaza request has completed")
    public void userValidatesPlazaRequestHasCompleted() {
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
        homePage.selectDatabase_new_existing_account(arg0);
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
}
