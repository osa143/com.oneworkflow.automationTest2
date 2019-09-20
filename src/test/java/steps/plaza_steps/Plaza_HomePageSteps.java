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
        homePage.wait(5000);
        homePage.clickPlazaRequestNum();
    }

    @Then("user should see service request form")
    public void userShouldSeeServiceRequestForm() {
        homePage.wait(5000);
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
        homePage.select_selectRequest(arg0);
    }

    @And("user selects messaging CI as {string}")
    public void userSelectsMessagingCIAs(String arg0) {
        homePage.selectsAddCi_multipleValues(arg0);
    }
}
