package pageObjects.plaza;

import io.cucumber.datatable.DataTable;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import pageObjects.BasePage;
import utils.CommonUtils;

import java.util.ArrayList;
import java.util.List;

public class Plaza_HomePage extends BasePage {

    public static final String dd_ROLE_ID= "select2-chosen-9";
    public static final String txt_REQUEST_ID= "sp_formfield_sr2_v_request";
    public static final String dd_SYSTEM_ID= "s2id_sp_formfield_sr2_v_system";
    public static final String txt_PLANNED_START= "sp_formfield_sr2_v_start_date";
    public static final String txt_PLANNED_END= "sp_formfield_sr2_v_end_date";
    public static final String txt_DESCRIPTION= "sp_formfield_sr2_v_description";
    public static final String txt_ADDITIONAL_COMMENTS= "sp_formfield_additional_comments";
    public static final String btn_ORDER= "x016e0fdbdb854700b27fdb11ce9619e3";
    public static final String txt_PLAZA_REQUEST_NUM_ID="reqnum";
    public static final String dd_SERVICE_REQUEST_NAME_ID= "select2-chosen-11";
    public static final String txt_CRM_REQUEST_ID= "sp_formfield_sr46_v_request";
    public static final String txt_CRM_PLANNED_START= "sp_formfield_sr46_v_planned_start_date";
    public static final String txt_CRM_PLANNED_END= "sp_formfield_sr46_v_planned_end_date";
    public static final String txt_CRM_DESCRIPTION= "sp_formfield_sr46_v_description";
    public static final String dd_CRM_SYSTEM= "s2id_sp_formfield_sr46_v_system";
    public static final String txt_C2B_REQUEST_ID="sp_formfield_sr74_v_request";
    public static final String dd_ENVIRONMENT="s2id_autogen15";
    public static final String txt_C2B_DESCRIPTION="sp_formfield_sr74_v_description";
    public static final String dd_SELECT_REQUEST_ID="select2-chosen-12";
    public static final String txt_C2B_GENERAL_REQUEST_ID="sp_formfield_sr112_v_request";
    public static final String dd_C2B_GENERAL_ENVIRONMENT="s2id_sp_formfield_sr112_v_enable_notification";
    public static final String txt_C2B_GENERAL_DESCRIPTION="sp_formfield_sr112_v_description";
    public static final String txt_C2B_SERVICE_REQUEST_ID="sp_formfield_sr109_v_request";
    public static final String dd_C2B_SERVICE_ENVIRONMENT="s2id_autogen13";
    public static final String txt_C2B_SERVICE_DESCRIPTION="sp_formfield_sr109_v_description";
    public static final String txt_BCPP_REQUEST_ID="sp_formfield_sr107_v_request";
    public static final String dd_BCPP_ENVIRONMENT="select2-chosen-12";
    public static final String txt_ADD_CI="s2id_autogen15";
    public static final String txt_BCPP_DESCRIPTION="sp_formfield_sr107_v_description";
    public static final String chkbx_CONTACT="sp_formfield_ext_contact";
    public static final String chkbx_NAME_NOT_FOUND="sp_formfield_v_name_not_fund";
    public static final String txt_NAME= "sp_formfield_name_other";
    public static final String txt_EMAIL= "sp_formfield_email";
    public static final String txt_PHONE= "sp_formfield_phone";
    public static final String txt_RESCHEDULE_REQUEST= "sp_formfield_request";
    public static final String txt_NEW_SCHEDULE="sp_formfield_new_schedule";
    public static final String txt_UNC_LOCAL_PATH= "sp_formfield_include_exclude";
    public static final String txt_Description= "sp_formfield_description";
    public static final String dd_BACK_UP_ADD_CI= "s2id_autogen13";
    public static final String btn_ADD_ATTACHMENT= "add_attachment_button";
    public static final String txt_INCLUDE_CI="sp_formfield_include_ci";
    public static final String txt_RETENTION_PERIOD="sp_formfield_retention_period";
    public static final String txt_BACK_UP_DATE_TIME="sp_formfield_date_time";
    public static final String txt_RESTORE_CI_UNC= "sp_formfield_restore";
    public static final String txt_RESTORE_FILES="sp_formfield_restore_files";
    public static final String txt_BDL_REQUEST= "sp_formfield_sr108_v_request";
    public static final String txt_BDL_DESCRIPTION= "sp_formfield_sr108_v_description";
    public static final String txt_BDL_WBS_CODE="sp_formfield_sr108_v_wbs_code";
    public static final String txt_CABLING_NEW_REQUEST= "sp_formfield_sr49_v_request";
    public static final String txt_CABLING_NEW_DC_SITE="sp_formfield_sr49_v_dc_site";
    public static final String txt_CABLING_NEW_ROOM="sp_formfield_sr49_v_room";
    public static final String txt_CABLING_NEW_DELIVERY_DATE="sp_formfield_sr49_v_delivery_date";
    public static final String txt_CABLING_NEW_DESCRIPTION= "sp_formfield_sr49_v_description";
    public static final String txt_CABLING_NEW_WBS_CODE= "sp_formfield_sr49_v_wbs_code";
    public static final String txt_DATA_CENTRE_REQUEST= "sp_formfield_sr48_v_req";
    public static final String txt_DATA_CENTRE_DC_SITE="sp_formfield_sr48_v_dc_site";
    public static final String txt_DATA_CENTRE_ROOM="sp_formfield_sr48_v_room";
    public static final String txt_DATA_CENTRE__DELIVERY_DATE="sp_formfield_sr48_v_deldate";
    public static final String txt_DATA_CENTRE_DESCRIPTION= "sp_formfield_sr48_v_desc";
    public static final String txt_DATA_CENTRE_WBS_CODE= "sp_formfield_sr48_v_wbs";
    public static final String txt_NETWORK_EQUIPMENT_REQUEST="sp_formfield_sr51_v_request";
    public static final String txt_NETWORK_EQUIPMENT_DC_SITE= "sp_formfield_sr51_v_dc_site";
    public static final String txt_NETWORK_EQUIPMENT_ROOM= "sp_formfield_sr51_v_room";
    public static final String dd_ADD_CI = "s2id_autogen13";
    public static final String txt_NETWORK_EQUIPMENT_DNS_IP_ADRESS="sp_formfield_sr51_v_dns_ip_address";
    public static final String txt_NETWORK_EQUIPMENT_DELIVERY="sp_formfield_sr51_v_date_for_delivery";
    public static final String txt_NETWORK_EQUIPMENT_DATE_FOR_DECOMMISSION= "sp_formfield_sr51_v_date_for_decommission";
    public static final String txt_NETWORK_EQUIPMENT_WBS_CODE="sp_formfield_sr51_v_wbs_code";
    public static final String txt_NETWORK_EQUIPMENT_DESCRIPTION= "sp_formfield_sr51_v_description";
    public static final String txt_ON_SITE_SERVICES_REQUEST = "sp_formfield_sr37_v_request";
    public static final String txt_ON_SITE_SERVICES_DC_SITE= "sp_formfield_sr37_v_dc_site";
    public static final String txt_ON_SITE_SERVICES_DESCRIPTION= "sp_formfield_sr37_v_description";
    public static final String txt_DATABASE_REQUEST= "sp_formfield_sr21_v_request";
    public static final String dd_ADD_DATABASE_CI= "s2id_autogen23";
    public static final String dd_ADD_SERVER_CI = "s2id_autogen24";
    public static final String txt_DATABASE_NAME= "sp_formfield_sr21_v_db_name";
    public static final String dd_DATABASE_ACCOUNT_TYPE= "select2-chosen-13";
    public static final String txt_DATABASE_ACCOUNT_NAME="sp_formfield_sr21_v_account_name";
    public static final String txt_DATABASE_ACCOUNT_PERMISSIONS="sp_formfield_sr21_v_permissions";
    public static final String txt_DATABASE_DESCRIPTION= "sp_formfield_sr21_v_description";
    public static final String txt_DATABASE_DNS_IP_ADDRESS= "sp_formfield_sr21_v_source_dns";
    public static final String dd_DATABASE_NEW_EXISTING_ACCOUNT=  "select2-chosen-14";
    public static final String dd_DATABASE_DEFAULT_TABLE_SPACE= "sp_formfield_sr21_v_default_tablespace";
    public static final String txt_DATABASE_REQUEST_REQUEST= "sp_formfield_sr115_v_request";
    public static final String dd_DATABASE_REQUEST_CHOOSE_ACTION= "select2-chosen-17";
    public static final String dd_DATABASE_REQUEST_LOCATION= "select2-chosen-19";
    public static final String txt_DATABASE_REQUEST_PLANNED_START_DATE_TIME= "sp_formfield_sr115_v_start_date";
    public static final String dd_DATABASE_REQUEST_DATABASE_TYPE= "select2-chosen-18";
    public static final String dd_DATABASE_REQUEST_ADD_CI= "s2id_autogen35";
    public static final String dd_DATABASE_REQUEST_ADD_SERVER_CI= "s2id_autogen34";
    public static final String txt_DATABASE_REQUEST_DATABASE_NAME= "sp_formfield_sr115_v_db_name";
    public static final String txt_DATABASE_REQUEST_DESCRIPTION= "sp_formfield_sr115_v_desc";
    public static final String txt_DATABASE_CONFIGURE_PARAMETER_REQUEST= "sp_formfield_sr116_v_request";
    public static final String dd_DATABASE_CONFIGURE_PARAMETER_DATABASE_TYPE= "select2-chosen-20";
    public static final String dd_DATABASE_CONFIGURE_PARAMETER_ADD_CI= "s2id_autogen37";
    public static final String dd_DATABASE_CONFIGURE_PARAMETER_DB_ADD_CI= "s2id_autogen38";
    public static final String txt_DATABASE_CONFIGURE_PARAMETER_DB_NAME= "sp_formfield_sr116_v_db_name";
    public static final String txt_DATABASE_CONFIGURE_PARAMETER_PARAMETERS="sp_formfield_sr116_v_parameters";
    public static final String txt_DATABASE_CONFIGURE_PARAMETER_DESCRIPTION= "sp_formfield_sr116_v_description";
    public static final String txt_DATABASE_PERFORMANCE_TROUBLESHOOTING_REQUEST= "sp_formfield_sr12_v_request";
    public static final String dd_DATABASE_PERFORMANCE_TROUBLESHOOTING_DB_TYPE="select2-chosen-16";
    public static final String dd_DATABASE_PERFORMANCE_TROUBLESHOOTING_SERVER_CI="s2id_autogen32";
    public static final String dd_DATABASE_PERFORMANCE_TROUBLESHOOTING_DB_CI= "s2id_autogen33";
    public static final String txt_DATABASE_PERFORMANCE_TROUBLESHOOTING_DB_NAME="sp_formfield_sr12_v_db_name";
    public static final String txt_DATABASE_PERFORMANCE_TROUBLESHOOTING_DESCRIPTION= "sp_formfield_sr12_v_description";



    public void selectDatabasePerformanceTroubleShooting_AddServerCi(String dropdownName){
        selectDropdownWithMultipleValues(By.id(dd_DATABASE_PERFORMANCE_TROUBLESHOOTING_SERVER_CI), By.id("s2id_autogen32_results"),  dropdownName);

    }
    public void selectDatabasePerformanceTroubleShooting_AddDbCi(String dropdownName){
        selectDropdownWithMultipleValues(By.id(dd_DATABASE_PERFORMANCE_TROUBLESHOOTING_DB_CI), By.id("s2id_autogen33_results"),  dropdownName);

    }
    public void selectDatabasePerformanceTroubleShooting_databaseType(String dropdownName){
        selectDropdown(By.id(dd_DATABASE_PERFORMANCE_TROUBLESHOOTING_DB_TYPE), By.id("select2-results-16"),  dropdownName);
    }

    public void enterDatabasePerformamanceTroubleShooting_request(String text){
        enterTextByElement(By.id(txt_DATABASE_PERFORMANCE_TROUBLESHOOTING_REQUEST), text);
    }
    public void enterDatabasePerformamanceTroubleShooting_DB_name(String text){
        enterTextByElement(By.id(txt_DATABASE_PERFORMANCE_TROUBLESHOOTING_DB_NAME), text);
    }
    public void enterDatabasePerformamanceTroubleShooting_description(String text){
        enterTextByElement(By.id(txt_DATABASE_PERFORMANCE_TROUBLESHOOTING_DESCRIPTION), text);
    }
    public void enterDatabaseConfigureParameter_request(String text){
        enterTextByElement(By.id(txt_DATABASE_CONFIGURE_PARAMETER_REQUEST), text);
    }
    public void enterDatabaseConfigureParameter_databaseName(String text){
        enterTextByElement(By.id(txt_DATABASE_CONFIGURE_PARAMETER_DB_NAME), text);
    }
    public void enterDatabaseConfigureParameter_parameters(String text){
        enterTextByElement(By.id(txt_DATABASE_CONFIGURE_PARAMETER_PARAMETERS), text);
    }
    public void enterDatabaseConfigureParameter_description(String text){
        enterTextByElement(By.id(txt_DATABASE_CONFIGURE_PARAMETER_DESCRIPTION), text);
    }
    public void selectDatabaseConfigureParameter_AddCi_multipleValues(String dropdownName){
        selectDropdownWithMultipleValues(By.id(dd_DATABASE_CONFIGURE_PARAMETER_ADD_CI), By.id("s2id_autogen37_results"),  dropdownName);

    }
    public void selectDatabaseConfigureParameter_AddDbCi_multipleValues(String dropdownName){
        selectDropdownWithMultipleValues(By.id(dd_DATABASE_CONFIGURE_PARAMETER_DB_ADD_CI), By.id("s2id_autogen38_results"),  dropdownName);

    }
    public void selectDatabaseConfigureParameter_databaseType(String dropdownName){
        selectDropdown(By.id(dd_DATABASE_CONFIGURE_PARAMETER_DATABASE_TYPE), By.id("select2-results-20"),  dropdownName);
    }
    public void enterDatabaseRequest_description(String text){
        enterTextByElement(By.id(txt_DATABASE_REQUEST_DESCRIPTION), text);
    }
    public void enterDatabaseRequest_databaseName(String text){
        enterTextByElement(By.id(txt_DATABASE_REQUEST_DATABASE_NAME), text);
    }
    public void selects_databaseRequest_AddCi_multipleValues(String dropdownName){
        selectDropdownWithMultipleValues(By.id(dd_DATABASE_REQUEST_ADD_CI), By.id("s2id_autogen35_results"),  dropdownName);

    }
    public void selects_databaseRequest_AddServerCi_multipleValues(String dropdownName){
        selectDropdownWithMultipleValues(By.id(dd_DATABASE_REQUEST_ADD_SERVER_CI), By.id("s2id_autogen34_results"),  dropdownName);

    }
    public void selectDatabaseRequest_databaseType(String dropdownName){
        selectDropdown(By.id(dd_DATABASE_REQUEST_DATABASE_TYPE), By.id("select2-results-18"),  dropdownName);
    }
    public void enterDatabaseRequest_plannedStartDateTime(String text){
        enterTextByElement(By.id(txt_DATABASE_REQUEST_PLANNED_START_DATE_TIME), text);
    }
    public void selectDatabaseRequest_location(String dropdownName){
        selectDropdown(By.id(dd_DATABASE_REQUEST_LOCATION), By.id("select2-results-19"),  dropdownName);
    }
    public void selectDatabaseRequest_chooseAction(String dropdownName){
        selectDropdown(By.id(dd_DATABASE_REQUEST_CHOOSE_ACTION), By.id("select2-results-17"),  dropdownName);
    }
    public void enterDatabaseRequest_request(String text){
        enterTextByElement(By.id(txt_DATABASE_REQUEST_REQUEST), text);
    }
    public void enterDatabase_defaultTableSpace(String text){
        enterTextByElement(By.id(dd_DATABASE_DEFAULT_TABLE_SPACE), text);
    }
    public void selectDatabase_new_existing_account(String dropdownName){
        selectDropdown(By.id(dd_DATABASE_NEW_EXISTING_ACCOUNT), By.id("select2-results-14"),  dropdownName);
    }
    public void enterDatabase_dnsIp_Address(String text){
        enterTextByElement(By.id(txt_DATABASE_DNS_IP_ADDRESS), text);
    }
    public void selects_database_AddCi_multipleValues(String dropdownName){
        selectDropdownWithMultipleValues(By.id(dd_ADD_DATABASE_CI), By.id("s2id_autogen23_results"),  dropdownName);

    }
    public void selects_database_AddServerCi_multipleValues(String dropdownName){
        selectDropdownWithMultipleValues(By.id(dd_ADD_SERVER_CI), By.id("s2id_autogen24_results"),  dropdownName);

    }
    public void selectDatabaseAccountType(String dropdownName){
        selectDropdown(By.id(dd_DATABASE_ACCOUNT_TYPE), By.id("select2-results-13"),  dropdownName);
    }
    public void enterDatabase_name(String text){
        enterTextByElement(By.id(txt_DATABASE_NAME), text);
    }
    public void enterDatabase_accountName(String text){
        enterTextByElement(By.id(txt_DATABASE_ACCOUNT_NAME), text);
    }public void enterDatabase_permissions(String text){
        enterTextByElement(By.id(txt_DATABASE_ACCOUNT_PERMISSIONS), text);
    }public void enterDatabase_description(String text){
        enterTextByElement(By.id(txt_DATABASE_DESCRIPTION), text);
    }
    public void enterDatabase_request(String text){
        enterTextByElement(By.id(txt_DATABASE_REQUEST), text);
    }

    public void enterOnSiteServices_Request(String text){
        enterTextByElement(By.id(txt_ON_SITE_SERVICES_REQUEST), text);
    }
    public void enterOnSiteServices_dc_site(String text){
        enterTextByElement(By.id(txt_ON_SITE_SERVICES_DC_SITE), text);
    }
    public void enterOnSiteServices_Description(String text){
        enterTextByElement(By.id(txt_ON_SITE_SERVICES_DESCRIPTION), text);
    }
    public void enterNetworkEquipment_dateFordecommission(String text){
        enterTextByElement(By.id(txt_NETWORK_EQUIPMENT_DATE_FOR_DECOMMISSION), text);
    }
    public void selectsAddCi_multipleValues(String dropdownName){
        selectDropdownWithMultipleValues(By.id(dd_ADD_CI), By.id("s2id_autogen13_results"),  dropdownName);

    }
    public void enterNetworkEquipment_request(String text){
        enterTextByElement(By.id(txt_NETWORK_EQUIPMENT_REQUEST), text);
    }
    public void enterNetworkEquipment_dc_site(String text){
        enterTextByElement(By.id(txt_NETWORK_EQUIPMENT_DC_SITE), text);
    }
    public void enterNetworkEquipment_room(String text){
        enterTextByElement(By.id(txt_NETWORK_EQUIPMENT_ROOM), text);
    }
    public void enterNetworkEquipment_dnsIpAddress(String text){
        enterTextByElement(By.id(txt_NETWORK_EQUIPMENT_DNS_IP_ADRESS), text);
    }
    public void enterNetworkEquipment_delivery(String text){
        enterTextByElement(By.id(txt_NETWORK_EQUIPMENT_DELIVERY), text);
    }
    public void enterNetworkEquipment_wbsCode(String text){
        enterTextByElement(By.id(txt_NETWORK_EQUIPMENT_WBS_CODE), text);
    }
    public void enterNetworkEquipment_description(String text){
        enterTextByElement(By.id(txt_NETWORK_EQUIPMENT_DESCRIPTION), text);
    }

    public void enterDataCentre_request(String text){
        enterTextByElement(By.id(txt_DATA_CENTRE_REQUEST), text);
    }
    public void enterDataCentre_DC_Site(String text){
        enterTextByElement(By.id(txt_DATA_CENTRE_DC_SITE), text);
    }
    public void enterDataCentre_Room(String text){
        enterTextByElement(By.id(txt_DATA_CENTRE_ROOM), text);
    }
    public void enterDataCentre_deliveryDate(String text){
        enterTextByElement(By.id(txt_DATA_CENTRE__DELIVERY_DATE), text);
    }
    public void enterDataCentre_description(String text){
        enterTextByElement(By.id(txt_DATA_CENTRE_DESCRIPTION), text);
    }
    public void enterDataCentre_wbsCode(String text){
        enterTextByElement(By.id(txt_DATA_CENTRE_WBS_CODE), text);
    }
    public void enterCablingNew_request(String text){
        enterTextByElement(By.id(txt_CABLING_NEW_REQUEST), text);
    }
    public void enterCablingNew_DC_Site(String text){
        enterTextByElement(By.id(txt_CABLING_NEW_DC_SITE), text);
    }
    public void enterCablingNew_Room(String text){
        enterTextByElement(By.id(txt_CABLING_NEW_ROOM), text);
    }
    public void enterCablingNew_deliveryDate(String text){
        enterTextByElement(By.id(txt_CABLING_NEW_DELIVERY_DATE), text);
    }
    public void enterCablingNew_description(String text){
        enterTextByElement(By.id(txt_CABLING_NEW_DESCRIPTION), text);
    }
    public void enterCablingNew_wbsCode(String text){
        enterTextByElement(By.id(txt_CABLING_NEW_WBS_CODE), text);
    }

    public void enterBDL_wbsCode(String text){
        enterTextByElement(By.id(txt_BDL_WBS_CODE), text);
    }
    public void enterBDL_Description(String text){
        enterTextByElement(By.id(txt_BDL_DESCRIPTION), text);
    }
    public void selectAllCINames(DataTable ciName) {
        List<List<String>> ciNames = ciName.asLists(String.class);
        for (int i = 1; i < ciNames.size(); i++) {
            System.out.println("CI Name is: " + ciNames.get(i).get(0));
            selectsAT1Ci(ciNames.get(i).get(0));
            wait(500);
        }
    }
    public void selectsAT1Ci(String dropdownName){
        selectDropdown(By.id("s2id_sp_formfield_sr108_v_at1"), By.id("s2id_autogen16_results"),  dropdownName);
    }
    public void enterBDL_request(String text){
        enterTextByElement(By.id(txt_BDL_REQUEST), text);
    }

    public void enterRestore_Files(String text){
        enterTextByElement(By.id(txt_RESTORE_FILES), text);
    }

    public void enterRestore_Ci_Unc(String text){
        enterTextByElement(By.id(txt_RESTORE_CI_UNC), text);
    }


    public void enterBackUpDateTime(String text){
        enterTextByElement(By.id(txt_BACK_UP_DATE_TIME), text);
    }

    public void enterRetentionPeriod(String text){
        enterTextByElement(By.id(txt_RETENTION_PERIOD), text);
    }
    public void enterIncludeCI(String text){
        enterTextByElement(By.id(txt_INCLUDE_CI), text);
    }

    public void clickAddAttachment(){
        clickElement(By.id(btn_ADD_ATTACHMENT));
    }

    public void selectsAddCi_back_up(String dropdownName){
        selectDropdownWithMultipleValues(By.id(dd_BACK_UP_ADD_CI), By.id("s2id_autogen13_results"),  dropdownName);

    }

    public void enterDescription_Reschedule(String text){
        enterTextByElement(By.id(txt_Description), text);
    }
    public void enterUnc_Local(String text){
        enterTextByElement(By.id(txt_UNC_LOCAL_PATH), text);
    }
    public void enterSchedule(String text){
        enterTextByElement(By.id(txt_NEW_SCHEDULE), text);
    }

    public void enterReschedule_request(String text){
        enterTextByElement(By.id(txt_RESCHEDULE_REQUEST), text);
    }

    public void enterPhone(String text){
        enterTextByElement(By.id(txt_PHONE), text);
    }


    public void enterEmail(String text){
        enterTextByElement(By.id(txt_EMAIL), text);
    }


    public void enterName(String text){
        enterTextByElement(By.id(txt_NAME), text);
    }
    public void clickContact(){
        clickElement(By.id(chkbx_CONTACT));
    }
    public void clickNameNotFound(){
        clickElement(By.id(chkbx_NAME_NOT_FOUND));
    }
    public void enterBCPP_Description(String text){
        enterTextByElement(By.id(txt_BCPP_DESCRIPTION), text);
    }
    public void selectsAddCi(String dropdownName){
        selectDropdown(By.id(txt_ADD_CI), By.id("s2id_autogen15_results"),  dropdownName);
    }

    public void selectBCPP_Environment(String dropdownName){
        selectDropdown(By.id(dd_BCPP_ENVIRONMENT), By.id("select2-results-12"),  dropdownName);
    }
    public void enterC2B_BCPP_Request(String text){
        enterTextByElement(By.id(txt_BCPP_REQUEST_ID), text);
    }
    public void enterC2B_service_Description(String text){
        enterTextByElement(By.id(txt_C2B_SERVICE_DESCRIPTION), text);
    }
    public void selectC2B_serviceEnvironment(String dropdownName){
        selectDropdown(By.id(dd_C2B_SERVICE_ENVIRONMENT), By.id("s2id_autogen13_results"),  dropdownName);
    }
    public void enterC2B_serviceRequest(String text){
        enterTextByElement(By.id(txt_C2B_SERVICE_REQUEST_ID), text);
    }
    public void enterC2B_general_Description(String text){
        enterTextByElement(By.id(txt_C2B_GENERAL_DESCRIPTION), text);
    }
    public void selectC2B_GeneralEnvironment(String dropdownName){
        selectDropdown(By.id(dd_C2B_GENERAL_ENVIRONMENT), By.id("s2id_autogen16_results"),  dropdownName);
    }
    public void enterC2B_generalRequest(String text){
        enterTextByElement(By.id(txt_C2B_GENERAL_REQUEST_ID), text);
    }
    public void select_selectRequest(String dropdownName){
        selectDropdown(By.id(dd_SELECT_REQUEST_ID), By.id("select2-results-12"),  dropdownName);
    }
    public void enterC2B_Description(String text){
        enterTextByElement(By.id(txt_C2B_DESCRIPTION), text);
    }
    public void selectEnvironment(String dropdownName){
        selectDropdown(By.id(dd_ENVIRONMENT), By.id("s2id_autogen15_results"),  dropdownName);
    }

    public void enterC2B_Request(String text){
        enterTextByElement(By.id(txt_C2B_REQUEST_ID), text);
    }
    public void selectCRMSystemDropdown(String dropdownName)
    {
        selectDropdown(By.id(dd_CRM_SYSTEM), By.id("select2-results-14"),  dropdownName);
    }
    public void enterCRMRequest(String text){
        enterTextByElement(By.id(txt_CRM_REQUEST_ID), text);
    }
    public void enterCRMDescription(String text){
        enterTextByElement(By.id(txt_CRM_DESCRIPTION), text);
    }

    public void enterCRMPlannedStart(String text){
        enterTextByElement(By.id(txt_CRM_PLANNED_START), text);
    }
    public void enterCRMPlannedEnd(String text){
        enterTextByElement(By.id(txt_CRM_PLANNED_END), text);
    }

    public void clickPebble(String pebbleName) {
        String element = String.format("//img[@alt='%s']", pebbleName);
        System.out.println(element);
        findElement(By.xpath(element)).click();
    }
    public void openNewTab(){
        ((JavascriptExecutor) driver).executeScript("window.open()");
        ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
        driver.switchTo().window(tabs.get(1));

    }

    public void clickPlazaRequestNum(){
        clickElement(By.id(txt_PLAZA_REQUEST_NUM_ID));
    }


    public String getPlazaRequestNum(){
        String PlazaRequestId=getTextByID(txt_PLAZA_REQUEST_NUM_ID);
        System.out.println("Plaza request ID is  : " + PlazaRequestId);
        return PlazaRequestId;
    }

    public void clickOrder(){
        clickElement(By.id(btn_ORDER));
    }

    public void enterAdditionalComments(String text){
        enterTextByElement(By.id(txt_ADDITIONAL_COMMENTS), text);
    }

    public void enterDescription(String text){
        enterTextByElement(By.id(txt_DESCRIPTION), text);
    }

    public void enterPlannedStart(String text){
        enterTextByElement(By.id(txt_PLANNED_START), text);
    }
    public void enterPlannedEnd(String text){
        enterTextByElement(By.id(txt_PLANNED_END), text);
    }

    public String getTitle_plazaHomePage(){
        String title= driver.getTitle();
        System.out.println("Plaza Homepage title is : "+title);
        return title;

    }

    public void selectDropdownWithMultipleValues(By Element, By dropdownValuesListID, String dropdownValue){
        clickElement(Element);
        wait(500);
        driver.findElement(Element).sendKeys(dropdownValue);
        wait(500);
        driver.findElement((dropdownValuesListID)).findElements(By.tagName("div")).stream().filter(element -> element.getText().trim().equals(dropdownValue)).findFirst().orElse(null).click();

    }
    public void selectDropdown(By Element, By dropdownValuesListID, String dropdownValue){
        clickElement(Element);
        wait(500);
        driver.findElement((dropdownValuesListID)).findElements(By.tagName("li")).stream().filter(element -> element.getText().trim().equals(dropdownValue)).findFirst().orElse(null).click();

    }
    public void selectRoleDropdown(String dropdownName){
        selectDropdown(By.id(dd_ROLE_ID), By.id("select2-results-9"), dropdownName);
        clickEscButton();

    }
    public void selectSystemDropdown(String dropdownName)
    {
        selectDropdown(By.id(dd_SYSTEM_ID), By.id("select2-results-13"),  dropdownName);
    }
    public void selectServiceRequestName(String dropdownName){
        selectDropdown(By.id(dd_SERVICE_REQUEST_NAME_ID), By.id("select2-results-11"), dropdownName);

    }

    public void enterRequest(String text){
        enterTextByElement(By.id(txt_REQUEST_ID), text);
    }


}
