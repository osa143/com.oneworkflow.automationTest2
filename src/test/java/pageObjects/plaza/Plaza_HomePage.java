package pageObjects.plaza;

import cucumber.api.java8.Pl;
import io.cucumber.datatable.DataTable;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import pageObjects.BasePage;
import utils.CommonUtils;
import utils.PlazaValidation;

import java.util.ArrayList;
import java.util.List;

import static utils.CommonUtils.*;

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
    public static final String dd_C2B_GENERAL_ENVIRONMENT="s2id_autogen16";
    public static final String txt_C2B_GENERAL_DESCRIPTION="sp_formfield_sr112_v_description";
    public static final String txt_C2B_SERVICE_REQUEST_ID="sp_formfield_sr109_v_request";
    public static final String dd_C2B_SERVICE_ENVIRONMENT="s2id_autogen13";
    public static final String txt_C2B_SERVICE_DESCRIPTION="sp_formfield_sr109_v_description";
    public static final String txt_BCPP_REQUEST_ID="sp_formfield_sr107_v_request";
    public static final String dd_BCPP_ENVIRONMENT="select2-chosen-12";
    public static final String dd_ADDCI="s2id_autogen15";
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
    public static final String dd_BACK_UP_ADD_CI= "s2id_autogen14";
    public static final String btn_ADD_ATTACHMENT="//*[@id='catItemTop']/div/div[4]/div/div[2]/label/span";
    public static final String btn_ADD_SECOND_ATTACHMENT="//*[@id='catItemTop']/div/div[4]/div/div[3]/label/span";
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
    public static final String dd_ADD_DATABASE_CI= "s2id_autogen25";
    public static final String dd_ADD_SERVER_CI = "s2id_autogen26";
    public static final String txt_DATABASE_NAME= "sp_formfield_sr21_v_db_name";
    public static final String dd_DATABASE_ACCOUNT_TYPE= "select2-chosen-14";
    public static final String txt_DATABASE_ACCOUNT_NAME="sp_formfield_sr21_v_account_name";
    public static final String txt_DATABASE_ACCOUNT_PERMISSIONS="sp_formfield_sr21_v_permissions";
    public static final String txt_DATABASE_DESCRIPTION= "sp_formfield_sr21_v_description";
    public static final String txt_DATABASE_DNS_IP_ADDRESS= "sp_formfield_sr21_v_source_dns";
    public static final String dd_DATABASE_NEW_EXISTING_ACCOUNT=  "select2-chosen-14";
    public static final String dd_DATABASE_DEFAULT_TABLE_SPACE= "sp_formfield_sr21_v_default_tablespace";
    public static final String txt_DATABASE_REQUEST_REQUEST= "sp_formfield_sr115_v_request";
    public static final String dd_DATABASE_REQUEST_CHOOSE_ACTION= "select2-chosen-18";
    public static final String dd_DATABASE_REQUEST_LOCATION= "select2-chosen-20";
    public static final String txt_DATABASE_REQUEST_PLANNED_START_DATE_TIME= "sp_formfield_sr115_v_start_date";
    public static final String dd_DATABASE_REQUEST_DATABASE_TYPE= "select2-chosen-12";
    public static final String dd_DATABASE_REQUEST_ADD_CI= "s2id_autogen37";
    public static final String dd_DATABASE_REQUEST_ADD_SERVER_CI= "s2id_autogen36";
    public static final String txt_DATABASE_REQUEST_DATABASE_NAME= "sp_formfield_sr115_v_db_name";
    public static final String txt_DATABASE_REQUEST_DESCRIPTION= "sp_formfield_sr115_v_desc";
    public static final String txt_DATABASE_CONFIGURE_PARAMETER_REQUEST= "sp_formfield_sr116_v_request";
    public static final String dd_DATABASE_CONFIGURE_PARAMETER_DATABASE_TYPE= "select2-chosen-12";
    public static final String dd_DATABASE_CONFIGURE_PARAMETER_ADD_CI= "s2id_autogen39";
    public static final String dd_DATABASE_CONFIGURE_PARAMETER_DB_ADD_CI= "s2id_autogen40";
    public static final String txt_DATABASE_CONFIGURE_PARAMETER_DB_NAME= "sp_formfield_sr116_v_db_name";
    public static final String txt_DATABASE_CONFIGURE_PARAMETER_PARAMETERS="sp_formfield_sr116_v_parameters";
    public static final String txt_DATABASE_CONFIGURE_PARAMETER_DESCRIPTION= "sp_formfield_sr116_v_description";
    public static final String txt_DATABASE_PERFORMANCE_TROUBLESHOOTING_REQUEST= "sp_formfield_sr12_v_request";
    public static final String dd_DATABASE_PERFORMANCE_TROUBLESHOOTING_DB_TYPE="select2-chosen-12";
    public static final String dd_DATABASE_PERFORMANCE_TROUBLESHOOTING_SERVER_CI="s2id_autogen34";
    public static final String dd_DATABASE_PERFORMANCE_TROUBLESHOOTING_DB_CI= "s2id_autogen35";
    public static final String txt_DATABASE_PERFORMANCE_TROUBLESHOOTING_DB_NAME="sp_formfield_sr12_v_db_name";
    public static final String txt_DATABASE_PERFORMANCE_TROUBLESHOOTING_DESCRIPTION= "sp_formfield_sr12_v_description";
    public static final String txt_CALL_GUIDE_CUSTOMER_ID_NAME= "sp_formfield_customer_id";
    private static final String txt_CALL_GUIDE_DESCRIPTION= "sp_formfield_description";
    private static final String txt_CLEAN_MAIL_CUSTOMER_ID= "sp_formfield_custome_id";
    private static final String txt_CLEAN_MAIL_TESTS_PERFORMED= "sp_formfield_date_time_cet";
    private static final String txt_CLEAN_MAIL_SENDER_EMAIL= "sp_formfield_email_address";
    private static final String txt_CLEAN_MAIL_RECEIVER_EMAIL="sp_formfield_reciever_email";
    private static final String txt_CLEAN_MAIL_SENDER_DNS= "sp_formfield_sender_dns";
    private static final String txt_messaging_description= "sp_formfield_descrption";
    private static final String txt_NIMBUS_REQUEST= "sp_formfield_request_nimbus";
    private static final String dd_NIMBUS_ADD_CI= "s2id_autogen18";
    private static final String dd_NIMBUS_TYPE= "select2-chosen-13";
    private static final String txt_NIMBUS_DESCRIPTION_MANDATORY= "sp_formfield_description_mandatory";
    private static final String txt_NIMBUS_DESCRIPTION= "sp_formfield_nimbus_new_description";
    private static final String txt_NIMBUS_SIZE= "sp_formfield_expand_backup_size";
    private static final String txt_NIMBUS_VOLUMES_DRIVES= "sp_formfield_extend_disk_volume";
    private static final String dd_NIMBUS_EXTEND_DISK_ADD_CI= "s2id_autogen19";
    private static final String txt_NIMBUS_SERVICE_WINDOW_DATE_TIME= "sp_formfield_hot_add_service_window";
    private static final String txt_NIMBUS_H2_NAME_HID= "sp_formfield_modify_onboarding_hid";
    private static final String txt_FRONTSIDE_NETWORK_INFO= "sp_formfield_network_onboard_frontside";
    private static final String txt_MGMT_NETWORK_INFO= "sp_formfield_network_onboard_mgmt";
    private static final String dd_NIMBUS_CLOUD_SERVICES= "s2id_autogen20";
    private static final String dd_NIMBUS_TARGET_COUNTRIES= "s2id_autogen22";
    private static final String txt_NIMBUS_ROLE_APPROVERS_ACCOUNT= "sp_formfield_onboard_skypoint_role";
    private static final String txt_NIMBUS_ROLE_USERS_ACCOUNT= "sp_formfield_onboard_skypoint_role_user";
    private static final String txt_NIMBUS_CMDB_ASSIGNED= "sp_formfield_onboard_skypoint_cmdb";
    private static final String txt_NIMBUS_CMDB_LOCAL= "sp_formfield_onboard_skypoint_cmdb_local";
    private static final String txt_NIMBUS_H2_HID="sp_formfield_onboard_skypoint_hid";
    private static final String txt_NIMBUS_DATE_TO_RESTORE_FOM= "sp_formfield_restore_vm_date";
    private static final String dd_NIMBUS_RESTORE_VM= "s2id_autogen21";
    private static final String txt_NIMBUS_SKYPOINT_REQUEST= "sp_formfield_skypoint_request";
    public static final String dd_NETWORK_SECURITY_ADD_MODIFY_REMOVE_DNS_SERVICE_REQUEST_NAME= "select2-chosen-11";
    public static final String txt_NETWORK_SECURITY_ADD_MODIFY_REMOVE_DNS_REQUEST= "sp_formfield_sr105_v_request";
    public static final String dd_NETWORK_SECURITY_ADD_MODIFY_REMOVE_SCHEDULED_CHANGE= "select2-chosen-12";
    public static final String txt_NETWORK_SECURITY_ADD_MODIFY_REMOVE_DESCRIPTION= "sp_formfield_sr105_v_description";
    public static final String dd_NETWORK_SECURITY_FIREWALL_NEW_CHANGE_SERVICE_REQUEST= "select2-chosen-11";
    public static final String txt_NETWORK_SECURITY_FIREWALL_NEW_CHANGE_REQUEST= "sp_formfield_sr114_v_request";
    public static final String dd_NETWORK_SECURITY_FIREWALL_NEW_CHANGE_ADD_CI= "s2id_autogen15";
    public static final String dd_NETWORK_SECURITY_SWITCH_PORT_CONFIG_ADD_CI= "s2id_autogen17";
    public static final String txt_NETWORK_SECURITY_FIREWALL_NEW_CHANGE_DESCRIPTION= "sp_formfield_sr114_v_description";
    private static final String txt_NETWORK_SECURITY_FIREWALL_TROUBLESHOOT_REQUEST= "sp_formfield_sr34_v_request";
    private static final String txt_NETWORK_SECURITY_FIREWALL_TROUBLESHOOT_TICKET_NUMBER= "sp_formfield_sr34_v_fire_ticket_number";
    private static final String txt_NETWORK_SECURITY_FIREWALL_TROUBLESHOOT_SOURCE_IP_ADDRESS= "sp_formfield_sr34_v_source_ip_address";
    private static final String txt_NETWORK_SECURITY_FIREWALL_TROUBLESHOOT_TARGET_IP_ADDRESS= "sp_formfield_sr34_v_target_ip_address";
    private static final String txt_NETWORK_SECURITY_FIREWALL_TROUBLESHOOT_DATE_AND_TIME= "sp_formfield_sr34_v_tests_performed";
    private static final String txt_NETWORK_SECURITY_FIREWALL_TROUBLESHOOT_DESCRIPTION= "sp_formfield_sr34_v_description";
    private static final String txt_NETWORK_SECURITY_LAN_REQUEST= "sp_formfield_sr30_v_request";
    private static final String txt_NETWORK_SECURITY_LAN_DESCRIPTION= "sp_formfield_sr30_v_description";
    private static final String txt_NETWORK_SECURITY_LOAD_BALANCING_REQUEST= "sp_formfield_sr98_v_request";
    private static final String txt_NETWORK_SECURITY_LOAD_BALANCING_DESCRIPTION= "sp_formfield_sr98_v_description";
    private static final String txt_NETWORK_SECURITY_NEW_SWITCH_REQUEST= "sp_formfield_sr106_v_request";
    private static final String dd_NETWORK_SECURITY_NEW_SWITCH_NETWORK_CI= "s2id_autogen18";
    private static final String txt_NETWORK_SECURITY_NEW_SWITCH_DC_SITE= "sp_formfield_sr106_v_dcsite";
    private static final String txt_NETWORK_SECURITY_NEW_SWITCH_DATA_ROOM= "sp_formfield_sr106_v_data_room";
    private static final String txt_NETWORK_SECURITY_NEW_SWITCH_RACK= "sp_formfield_sr106_v_rack";
    private static final String txt_NETWORK_SECURITY_NEW_USAGE= "sp_formfield_sr106_v_usage_switch";
    private static final String txt_NETWORK_SECURITY_TERMINAL_SERVER= "sp_formfield_sr106_v_terminal_server";
    private static final String txt_NETWORK_SECURITY_NEW_SWITCH_DESCRIPTION= "sp_formfield_sr106_v_description";
    private static final String txt_NETWORK_SECURITY_NEW_VLAN_REQUEST= "sp_formfield_sr102_v_request";
    private static final String txt_NETWORK_SECURITY_NEW_VLAN_IP_NET= "sp_formfield_sr102_v_ip_net";
    private static final String txt_NETWORK_SECURITY_NEW_NUMBER_AND_NAME= "sp_formfield_sr102_v_vlan";
    private static final String txt_NETWORK_SECURITY_NEW_VLAN_PURPOSE= "sp_formfield_sr102_v_vlan_purpose";
    private static final String txt_NETWORK_SECURITY_NEW_VLAN_DESCRIPTION= "sp_formfield_sr102_v_desc";
    private static final String txt_NETWORK_SECURITY_PROXY_GENERAL_REQUEST= "sp_formfield_sr35_v_request";
    private static final String txt_NETWORK_SECURITY_PROXY_GENERAL_DESCRIPTION= "sp_formfield_sr35_v_description";
    private static final String txt_NETWORK_SECURITY_PROXY_REVERSE_SOURCE_IP= "sp_formfield_sr35_v_source_ip";
    private static final String txt_NETWORK_SECURITY_PROXY_REVERSE_DNS_NAME= "sp_formfield_sr35_v_reverseproxy";
    private static final String txt_NETWORK_SECURITY_PROXY_REVERSE_PROTOCOL_PORT= "sp_formfield_sr35_v_port";
    private static final String dd_NETWORK_SECURITY_PROXY_REVERSE_CERTIFICATE= "s2id_autogen19";
    private static final String txt_NETWORK_SECURITY_PROXY_REVERSE_WEBSERVER_ADDRESS= "sp_formfield_sr35_v_webserver";
    private static final String dd_NETWORK_SECURITY_PROXY_REVERSE_HIGH_AVAILIBILITY= "select2-chosen-15";
    private static final String dd_NETWORK_SECURITY_PROXY_REVERSE_LOAD_BALANCING_METHOD= "s2id_autogen20";
    private static final String txt_NETWORK_SECURITY_PROXY_SURF_PROXY_URL= "sp_formfield_sr35_v_url";
    private static final String txt_NETWORK_SECURITY_PROXY_SURF_PROXY_ERROR_MESSAGE= "sp_formfield_sr35_v_error";
    private static final String txt_NETWORK_SECURITY_PROXY_SURF_PROXY_WORKED_BEFORE= "sp_formfield_sr35_v_before";
    private static final String txt_NETWORK_SECURITY_PROXY_SURF_PROXY_PROBLEM_OCCURE= "sp_formfield_sr35_v_problem";
    private static final String txt_NETWORK_SECURITY_PROXY_SURF_PROXY_SETTINGS= "sp_formfield_sr35_v_proxy_setting";
    private static final String txt_NETWORK_SECURITY_PROXY_SURF_PROXY_TICKET_NUMBER= "sp_formfield_sr35_v_ticket_num";
    private static final String txt_NETWORK_SECURITY_PROXY_SURF_PROXY_DATE_AND_TIME= "sp_formfield_sr35_v_time_tests";
    private static final String txt_NETWORK_SECURITY_PROXY_SURF_PROXY_SOURCE_IP= "sp_formfield_sr35_v_ip_add";
    private static final String txt_NETWORK_SECURITY_PROXY_SURF_PROXY_SLOW_SURFING_USER_IP= "sp_formfield_sr35_v_user_ip";
    private static final String dd_NETWORK_SECURITY_PROXY_SURF_PROXY_SLOW_SURFING_SITES= "select2-chosen-13";
    private static final String txt_STORAGE_CONFIGURE_REQUEST= "sp_formfield_sr59_v_request";
    private static final String txt_STORAGE_CONFIGURE_NETWORK_VLAN= "sp_formfield_sr59_v_network_vlan";
    private static final String dd_STORAGE_CONFIGURE_TRUNK_CI= "s2id_autogen14";
    private static final String txt_STORAGE_CONFIGURE_DESCRIPTION= "sp_formfield_sr59_v_description";
    private static final String txt_STORAGE_EXPORT_REQUEST= "sp_formfield_sr63_v_request";
    private static final String dd_STORAGE_EXPORT_SOURCE_CI= "s2id_autogen14";
    private static final String txt_STORAGE_EXPORT_SOURCE_WWN= "sp_formfield_sr63_v_source_wwn";
    private static final String txt_STORAGE_EXPORT_DATE_TIME= "sp_formfield_sr63_v_date";
    private static final String dd_STORAGE_EXPORT_TARGET_CI= "s2id_autogen15";
    private static final String txt_STORAGE_EXPORT_DESCRIPTION= "sp_formfield_sr63_v_description";
    private static final String txt_NETWORK_SECURITY_PROXY_SURF_PROXY_SLOW_WHITELISTING_TARGET_URL= "sp_formfield_sr35_v_target_url";
    private static final String txt_NETWORK_SECURITY_PROXY_SURF_PROXY_SLOW_WHITELISTING_H2_NAME= "sp_formfield_sr35_v_hid";
    private static final String txt_NETWORK_SECURITY_REMOTE_ACCESS_REQUEST= "sp_formfield_sr32_v_request";
    private static final String txt_NETWORK_SECURITY_REMOTE_ACCESS_DESCRIPTION= "sp_formfield_sr32_v_description";
    private static final String txt_NETWORK_SECURITY_SWITCH_PORT_CONFIG_REQUEST= "sp_formfield_sr103_v_request";
    private static final String txt_NETWORK_SECURITY_SWITCH_PORT_CONFIG_DESCRIPTION= "sp_formfield_sr103_v_desc";
    private static final String txt_OPERATING_SYSTEM_ACCESS_REQUEST= "sp_formfield_sr4_v_request";
    private static final String txt_OPERATING_SYSTEM_ACCESS_JUSTIFICATION= "sp_formfield_sr4_v_justification";
    private static final String txt_OPERATING_SYSTEM_ACCESS_DESCRIPTION= "sp_formfield_sr4_v_description";
    private static final String txt_OPERATING_SYSTEM_ACCOUNT_MANAGEMENT_ACCOUNT_NAME= "sp_formfield_sr5_v_account_name";
    private static final String txt_OPERATING_SYSTEM_ACCOUNT_MANAGEMENT_REQUEST= "sp_formfield_sr5_v_request";
    private static final String txt_OPERATING_SYSTEM_ACCOUNT_MANAGEMENT_DESCRIPTION= "sp_formfield_sr5_v_description";
    private static final String chkbx_OPERATING_SYSTEM_CHANGE_FROM_AUTO_COMMITMENT= "sp_formfield_sr6_v_commitment";
    private static final String txt_OPERATING_SYSTEM_CHANGE_FROM_AUTO_PLAN= "sp_formfield_sr6_v_plan";
    private static final String txt_OPERATING_SYSTEM_CHANGE_FROM_AUTO_REQUEST= "sp_formfield_sr6_v_request";
    private static final String txt_OPERATING_SYSTEM_CHANGE_FROM_AUTO_JUSTIFICATION= "sp_formfield_sr6_v_justification";
    private static final String txt_OPERATING_SYSTEM_CHANGE_FROM_AUTO_DESCRIPTION= "sp_formfield_sr6_v_description";
    private static final String txt_OPERATING_SYSTEM_MANUAL_OS_PATCHING_REQUEST= "sp_formfield_sr7_v_request";
    private static final String txt_OPERATING_SYSTEM_MANUAL_OS_PATCHING_WBS_CODE= "sp_formfield_sr7_v_wbs_code";
    private static final String txt_OPERATING_SYSTEM_MANUAL_OS_PATCHING_START_DATE= "sp_formfield_sr7_v_start_date";
    private static final String txt_OPERATING_SYSTEM_MANUAL_OS_PATCHING_END_DATE= "sp_formfield_sr7_v_end_date";
    private static final String txt_OPERATING_SYSTEM_MANUAL_OS_PATCHING_PLAN= "sp_formfield_sr7_v_plan_audit";
    private static final String txt_OPERATING_SYSTEM_MANUAL_OS_PATCHING_H2= "sp_formfield_sr7_v_hid";
    private static final String txt_OPERATING_SYSTEM_MANUAL_OS_PATCHING_DESCRIPTION= "sp_formfield_sr7_v_description";
    private static final String dd_OPERATING_SYSTEM_MANUAL_OS_PATCHING_ADD_CI= "s2id_autogen16";
    private static final String txt_CEWS_REQUEST= "sp_formfield_sr65_v_request";
    private static final String txt_CEWS_DESCRIPTION= "sp_formfield_sr65_v_description";
    private static final String dd_CEWS_ADD_CI= "s2id_autogen13";
    private static final String txt_EBILL_REQUEST= "sp_formfield_sr77_v_request";
    private static final String txt_EBILL_DESCRIPTION= "sp_formfield_sr77_v_description";
    private static final String txt_EBILL_ACCOUNT= "sp_formfield_sr77_v_account";
    private static final String txt_IT_FI_REQUEST= "sp_formfield_sr99_v_request";
    private static final String txt_IT_FI_DESCRIPTION= "sp_formfield_sr99_v_description";
    private static final String txt_MANAGED_VOICE_REQUEST= "sp_formfield_sr36_v_request";
    private static final String txt_MANAGED_VOICE_DESCRIPTION= "sp_formfield_sr36_v_description";
    private static final String txt_MANAGED_VOICE_DELIVERY_DATE= "sp_formfield_sr36_v_delivery_date";
    private static final String txt_MEGADISC_ADD_USER_REQUEST= "sp_formfield_sr75_v_request";
    private static final String txt_MEGADISC_ADD_USER_ACCOUNT_NAME= "sp_formfield_sr75_v_account_name";
    private static final String dd_MEGADISC_ADD_USER_SELECT_GROUP= "s2id_autogen14";
    private static final String dd_MEGADISC_ADD_USER_REQUESTED_PERSON= "s2id_sp_formfield_sr75_v_requested_person";
    private static final String txt_STORAGE_VOLUME_REQUEST= "sp_formfield_sr62_v_request";
    private static final String dd_STORAGE_VOLUME_CHOOSE_OPTION= "select2-chosen-11";
    private static final String txt_STORAGE_VOLUME_SOURCE_WWN= "sp_formfield_sr62_v_source_wwn";
    private static final String txt_STORAGE_VOLUME_DATE_TIME= "sp_formfield_sr62_v_date";
    private static final String txt_STORAGE_VOLUME_DESCRIPTION= "sp_formfield_sr62_v_description";
    private static final String txt_TCFP_ADD_USER_REQUEST= "sp_formfield_sr68_v_request";
    private static final String dd_TCFP_ADD_USER_CHOOSE_OPTION= "select2-chosen-12";
    private static final String txt_TCFP_ADD_USER_ACCOUNT_NAME= "sp_formfield_sr68_v_account_name";
    private static final String dd_TCFP_ADD_USER_SELECT_GROUP= "s2id_autogen15";
    private static final String txt_TCFP_ADD_USER_DESCRIPION= "sp_formfield_sr68_v_description";
    private static final String txt_TCFP_GENERAL_ENQUIRY_REQUEST= "sp_formfield_sr114_v_request";
    private static final String txt_TCFP_GENERAL_ENQUIRY_DESCRIPTION= "sp_formfield_sr114_v_description";
    private static final String dd_TCFP_GENERAL_ENQUIRY_ADD_CI="s2id_autogen16";
    private static final String txt_NNM_NO_REQUEST= "sp_formfield_sr79_v_request";
    private static final String txt_NNM_NO_DNS_IP_ADDRESS= "sp_formfield_sr79_v_dns";
    private static final String txt_NNM_NO_DESCRIPTION= "sp_formfield_sr79_v_description";
    private static final String txt_POLLUX_REQUEST= "sp_formfield_sr113_v_request";
    private static final String dd_POLLUX_ENVIRONMENT= "s2id_sp_formfield_sr113_v_environment";
    private static final String txt_POLLUX_DESCRIPTION= "sp_formfield_sr113_v_description";
    private static final String txt_POLLUX_WBS_CODE= "sp_formfield_sr113_v_wbs_code";
    private static final String txt_SPAN_DESCRIPTION= "sp_formfield_sr107_v_description";
    private static final String dd_SPAN_CI= "s2id_autogen15";
    private static final String txt_SPLUNK_REQUEST= "sp_formfield_sr38_v_request";
    private static final String txt_SPLUNK_H2= "sp_formfield_sr38_v_h2";
    private static final String txt_SPLUNK_DESCRIPTION= "sp_formfield_sr38_v_description";
    private static final String dd_TOPCAT_ADD_CI= "s2id_autogen14";
    private static final String txt_MEGADISC_ADD_USER_DESCRIPTION= "sp_formfield_sr75_v_description";
    private static final String txt_NETWORK_SECURITY_PROXY_SURF_PROXY_ONE_USER_ID= "sp_formfield_sr35_v_userid";
    private static final String txt_NETWORK_SECURITY_DNS_SWEDEN_CUSTOMER_ID_NAME= "sp_formfield_sr105_v_customer_id";
    private static final String txt_NETWORK_SECURITY_PROXY_SURF_PROXY_ONE_DESCRIPTION= "sp_formfield_sr35_v_description";
    private static final String txt_BDL_WBS_CODE_AT2= "sp_formfield_sr108_v_wbs_code";
    private static final String txt_BDL_WBS_CODE_AT1= "sp_formfield_sr108_v_wbs_code";
    private static final String txt_WHITELISTING_SOURCE_IP= "sp_formfield_sr35_v_ip_add";
    private static final String btn_PLAZA_hOME= "90c61d18db3fc7002b3cfc16bf961953";
    private static final String dd_SYSTEM_NAME_IN_HAITI= "s2id_sp_formfield_h2_name";
    private static final String div_PDB_Affected_COUNTRY= "sp_formfield_pdb_country";
    private static final String txt_ASSIGNMENT_GROUP= "sys_display.incident.assignment_group";
    private static final String txt_ASSIGNED_TO= "sys_display.incident.assigned_to";
    private static final String txt_STATE= "//*[@id='element.u_internal_case_management.state']/div[2]";
    private static final String btn_CLOSE_INCIDENT= "close_incident";
    private static final String dd_SYSTEMNAME_HAITI_DATABASE = "s2id_sp_formfield_h2_name";
    private static final String dd_NETWORKSECURITY_HAITI= "s2id_sp_formfield_h2_name";
    private static final String dd_NETWORKSECURITY_FIREWALL_HAITI= "s2id_sp_formfield_h2_name";
    private static final String dd_PROXY_GENERAL_INQUIRY_HAITI= "s2id_sp_formfield_h2_name";
    private static final String dd_REMOTE_ACCESS_HAITI= "s2id_sp_formfield_h2_name";
    private static final String dd_NIMBUS_HAITI= "s2id_sp_formfield_h2_name";
    private static final String dd_SYSTEM_ITFI= "s2id_sp_formfield_sr99_v_system";
    private static final String dd_OCC_CI= "s2id_sp_formfield_sr65_v_add_ci";
    private static final String dd_SERVER_DATABASE_CI= "s2id_sp_formfield_sr1_v_add_ci";
    private static final String dd_VEHA_SYSTEM= "s2id_sp_formfield_system";
    private static final String dd_WEBTAB_CI = "s2id_sp_formfield_sr65_v_add_ci";
    private static final String txt_CRM_RESOURCE_SERVICE_REQUEST= "sp_formfield_sr1_v_request";
    private static final String txt_APPWATCH_REQUEST = "sp_formfield_sr81_v_request";
    private static final String dd_ON_CALL_TEAM = "select2-chosen-15";
    private static final String txt_SERVICEGROUPNAME = "sp_formfield_sr81_v_additional_host_name";
    private static final String dd_NOTIFICATIONS = "select2-chosen-16";
    private static final String txt_IBS_REQUEST = "sp_formfield_sr85_v_request";
    private static final String dd_SERVICE_LEVEL_MANAGEMENT = "select2-chosen-16";
    private static final String dd_PATCH_WINDOW = "select2-chosen-17";
    private static final String dd_MICROSOFT_SECURITY_PATCHING = "select2-chosen-18";
    private static final String txt_MONITORING_APP_WATCH = "sp_formfield_sr85_v_monitoring_in_appwatch";
    private static final String txt_VCPU_AND_RAM = "sp_formfield_sr85_v_vcpu_and_ram";
    private static final String dd_CSM_MONITORING = "select2-chosen-19";
    private static final String dd_DDC_SITE = "select2-chosen-21";
    private static final String dd_SERVER_TYPE = "select2-chosen-23";
    private static final String dd_VLAN = "select2-chosen-24";
    private static final String dd_NUMBER_OF_SERVERS = "select2-chosen-25";
    private static final String txt_TOUCHPOINT_REQUEST = "sp_formfield_sr41_v_request";
    private static final String txt_ORGANISATION_NAME = "sp_formfield_sr44_v_organization_name";
    private static final String txt_SERVICE_ID = "sp_formfield_sr44_v_service_id";
    private static final String link_GENERALLY = "//button[@title='generally']";
    private static final String dd_NAME = "s2id_sp_formfield_name";
    private static final String txt_TOUCHPOINT_UPDATE_SUPPORT_PAGES_REQUEST = "sp_formfield_sr45_v_request";
    private static final String txt_TOUCHPOINT_SMS_REQUEST = "sp_formfield_sr44_v_request";
    private static final String txt_TOUCHPOINT_DESCRIPTION = "sp_formfield_sr44_v_description";
    private static final String txt_TOUCHPOINT_USERID = "sp_formfield_sr44_v_userid";
    private static final String txt_TOUCHPOINTPLUS_DESCRIPTION = "sp_formfield_sr41_v_description";
    private static final String dd_SPLUNK_ROLE = "select2-chosen-7";
    private static final String txt_SPLUNK_H2NAME = "sp_formfield_sr38_v_h2";
    private static final String txt_ADD_CI_TEXT_BOX="//input[@type='text']";
    private static final String txt_ONE_Time_ADD_CI="s2id_sp_formfield_add_ci";
    private static final String txt_HOST_GROUP_NAME = "sp_formfield_sr81_v_host_name";
    private static final String txt_APPWATCH_DESCRIPTION = "sp_formfield_sr81_v_description";
    private static final String dd_SERVICE_NAME_IBS = "select2-chosen-15";
    private static final String dd_IBS_CI = "s2id_autogen28";
    private static final String txt_IBS_DESCRIPTION = "sp_formfield_sr85_v_description";
    private static final String txt_IBS_ORDER_REQUEST = "sp_formfield_sr82_v_request";
    private static final String txt_IBS_SYSTEM = "select2-chosen-22";
    private static final String txt_IBS_ORDER_DESCRIPTION = "sp_formfield_sr82_v_description";
    private static final String txt_TOUCHPOINT_UPDATE_DESCRIPTION = "sp_formfield_sr45_v_description";
    private static final String txt_TOUCHPOINT_PLANNED_START_AND_TIME = "sp_formfield_sr45_v_planned_start_date";
    private static final String dd_COMPUTE_SYSTEMNAME_IN_HAITI = "s2id_sp_formfield_h2_name";
    private static final String GET_RESOLUTION_CODE = "//*[@id='element.incident.close_code']/div[2]";
    private static final String GET_RESOLUTION_NOTES = "incident.close_notes";
    private static final String txt_COMPUTE_SYSTEM = "select2-results-22";
    private static final String txt_TEXT_BOX = "//input[@type='text']";
    private static final String txt_SERVICE = "s2id_sp_formfield_service_area";
    private static final String dd_IBSSYSTEM = "select2-results-22";
    private static final String dd_IBSCI = "s2id_autogen28_results";
    private static final String dd_IBS_SERVICE_NAME = "select2-results-15";
    private static final String dd_ROLE_SPLUNK = "select2-results-7";
    private static final String dd_SELECT_NAME = "select2-results-17";
    private static final String dd_NUM_OF_SERVERS = "select2-results-25";
    private static final String dd_SELECT_VLAN = "select2-results-24";
    private static final String dd_SELECT_SERVER_TYPE = "select2-results-23";
    private static final String dd_SELECT_DDC_SITE = "select2-results-21";
    private static final String dd_SELECT_CSM_MONITORING = "select2-results-19";
    private static final String dd_SECURITY_PATCHING = "select2-results-18";
    private static final String dd_SELECT_PATCH_WINDOW = "select2-results-17";
    private static final String dd_SELECT_SERVICE_LEVEL_MANAGEMENT = "select2-results-16";
    private static final String dd_ENABLE_NOTIFICATIONS = "select2-results-16";
    private static final String dd_SELECT_ON_CALL_TEAM = "select2-results-15";
    private static final String dd_DROPDOWN_IT_INFRASTRUCTURE = "xcc61d55edb198b00b27fdb11ce961902";
    private static final String dd_CI_WEBTAB = "//input[@aria-owns='s2id_autogen13_results']";
    private static final String dd_SYSTEM_VEHA = "//input[@aria-owns='s2id_autogen13_results']";
    private static final String dd_CI_OCC = "//input[@aria-owns='s2id_autogen13_results']";
    private static final String dd_IT_FI_SYSTEM = "//input[@type='text']";
    private static final String dd_SYSTEM_NAME_HAITI_NIMBUS = "//input[@aria-owns='select2-results-16']";
    private static final String dd_NETWORK_SECURITY_REMOTE_ACCESS_SYSTEM_HAITI = "//input[@aria-owns='select2-results-13']";
    private static final String dd_NETWORK_SECURITY_PROXY_GENERAL_INQUIRY_HAITI = "//input[@type='text']";
    private static final String dd_NETWORK_SECURITY_FIREWALL_SYSTEM_HAITI = "s2id_autogen15_search";
    private static final String dd_NETWORK_SECURITY_SYSTEM_NAME_HAITI = "s2id_autogen14_search";
    private static final String dd_DATABASE_SYSTEM_NAME_HAITI = "//input[@aria-owns='select2-results-23']";
    private static final String txt_VERIFY_INC = "u_internal_case_management.REL:975cb40fdbd9db446734f1eabf961939_table";
    private static final String btn_CLICK_INC_NUMBER = "//*[@id='xba9dcc6fdb3ad7802b3cfc16bf96195f']/div/div/div[2]/div/div/ul/li[4]/div[2]/div/div[2]/p";
    private static final String txt_FIRST_TIMELINE_MESSAGE = "//*[@id='xba9dcc6fdb3ad7802b3cfc16bf96195f']/div/div/div[2]/div/div/ul/li[4]/div[2]/div/div[2]/p";
    private static final String txt_SECOND_TIMELINE_MESSAGE = "//*[@id='xba9dcc6fdb3ad7802b3cfc16bf96195f']/div/div/div[2]/div/div/ul/li[3]/div[2]/div/div[2]/p";
    private static final String dd_PLAZA_INCIDENT_CATEGORY = "select2-chosen-1";
    private static final String dd_PLAZA_INCIDENT_CATEGORY_RESULTS = "select2-results-1";
    private static final String dd_PLAZA_INCIDENT_TYPE_OF_ISSUE = "select2-chosen-2";
    private static final String dd_PLAZA_INCIDENT_TYPE_OF_ISSUE_RESULTS = "select2-results-2";
    private static final String txt_PLAZA_INCIDENT_SUBJECT = "sp_formfield_short_description";
    private static final String txt_PLAZA_INCIDENT_DESCRIPTION = "sp_formfield_description";
    private static final String btn_ACCESS_TO_EMAIL = "//*[@id='sp_formfield_access_to_email']/label[2]/input";
    private static final String txt_OW_MANUAL_NOTIFICATION = "//*[@id='xba9dcc6fdb3ad7802b3cfc16bf96195f']/div/div/div[2]/div/div/ul/li[1]/div[2]/div/div[2]/p";
    private static final String txt_OW_ATTACHMENT_NOTIFICATION_PLAZA = "//*[@id='xba9dcc6fdb3ad7802b3cfc16bf96195f']/div/div/div[2]/div/div/ul/li[1]/div[2]/div/div[2]/p";
    private static final String btn_PDB_AFFECTED_PERSON = "sp_formfield_pdb_affectedPerson";
    private static final String dd_SYSTEM_NAME_HAITI = "select2-results-12";
    private static final String txt_GET_OP_TICKET = "//*[@id='xba9dcc6fdb3ad7802b3cfc16bf96195f']/div/div/div[2]/div/div/ul/li[2]/div[2]/div/div[2]/p";
    private static final String txt_AFFECTED_PERSONS_PDB = "sp_formfield_pdb_affPerDescChecksp_formfield_pdb_affPerDescCheck";
    private static final String txt_NATURE_AND_CONTENT = "s2id_sp_formfield_pdb_natureOfContent";
    private static final String txt_AFFECTED_PERSONS = "select2-chosen-3";
    private static final String txt_AFFECTED_PERSONS_RESULTS = "select2-results-3";
    private static final String txt_PDB_DATE_AND_TIME = "sp_formfield_pdb_eventStartTime";
    private static final String txt_GET_SERVICE_AREA = "select2-chosen-1";
    private static final String txt_GET_SERVICE_CREATE_INCIDENT = "select2-chosen-3";
    private static final String dd_SELECT_SERVICE = "s2id_sp_formfield_service";
    private static final String txt_SERVICE_TEXT = "//input[@type='text']";
    private static final String GET_MANUAL_NOTIFICATION_PLAZA = "//*[@id='xba9dcc6fdb3ad7802b3cfc16bf96195f']/div/div/div[2]/div/div/ul/li[1]/div[2]/div/div[2]/p";
    private static final String txt_MANUAL_NOTIFICATION_PLAZA = "post-input";
    private static final String VALIDATE_INTERNAL_CASE_MANAGEMENT = "//*[@id='x0f05cdeddbe193846734f1eabf961984']/form/table/tbody/tr/td[1]/div/h1";
    private static final String txt_SEARCH_AND_SELECT_INCIDENT = "//*[@name='q']";
    private static final String txt_LINUX_UNIX_SERVER_REQUEST = "sp_formfield_sr_gen_v_request";
    private static final String txt_LINUX_UNIX_SERVER_CI = "s2id_autogen24";
    private static final String txt_LINUX_UNIX_SERVER_CI_RESULTS = "s2id_autogen24_results";
    private static final String txt_LINUX_UNIX_SERVER_DESCRIPTION = "sp_formfield_sr_gen_v_description";
    private static final String dd_SERVICE_AREA = "s2id_sp_formfield_service_area";
    private static final String txt_SERVICE_AREA_RESULTS = "select2-results-24";
    private static final String dd_TYPE_OF_SERVER = "select2-chosen-11";
    private static final String txt_TYPE_OF_SERVER = "select2-results-11";
    private static final String dd_SERVICE_AREA_CATEGORY = "select2-chosen-9";
    private static final String txt_SERVICE_AREA_CATEGORY = "select2-results-9";
    private static final String txt_TOPCAT_ADD_CI = "s2id_autogen14_results";
    private static final String txt_SPAN_ADD_CI = "s2id_autogen15_results";
    private static final String txt_POLLUX_ENVIRONMENT = "s2id_autogen14_results";
    private static final String txt_TCFP_GENERAL_ENQUIRY_ADD_CI = "s2id_autogen16_results";
    private static final String txt_TCFP_ADD_USER_CHOOSE_OPTION = "select2-results-12";
    private static final String txt_TCFP_ADD_USER_SELECT_GROUP = "s2id_autogen15_results";
    private static final String txt_STORAGE_VOLUME_CHOOSE_OPTION = "select2-results-11";
    private static final String txt_MEGADISC_ADD_USER_REQUESTED_PERSON = "select2-results-15";
    private static final String txt_MEGADISC_ADD_USER_SELECT_GROUP = "s2id_autogen14_results";
    private static final String txt_CEWS_ADD_CI = "s2id_autogen13_results";
    private static final String txt_OPERATING_SYSTEM_MANUAL_OS_PATCHING_ADD_CI = "s2id_autogen16_results";
    private static final String txt_STORAGE_EXPORT_SOURCE_CI = "s2id_autogen14_results";
    private static final String txt_STORAGE_EXPORT_TARGET_CI = "s2id_autogen15_results";
    private static final String txt_STORAGE_CONFIGURE_TRUNK_CI = "s2id_autogen14_results";
    private static final String GET_PLAZA_MESSAGE = "//*[@id='x917f1d33d7230200a9addd173e24d441']/div/div/div[2]/div/div/ul/li[1]/div[2]/div/div[2]/p";
    private static final String GET_PLAZA_REQUEST_STATUS = "//*[@id='xcc316d33d7230200a9addd173e24d4f5']/div/div[2]/div/div/div[2]/span/div";
    private static final String txt_NETWORK_SECURITY_PROXY_SURF_PROXY_SLOW_SURFING_SITES = "select2-results-13";
    private static final String txt_NETWORK_SECURITY_PROXY_REVERSE_LOAD_BALANCING_METHOD = "s2id_autogen20_results";
    private static final String txt_NETWORK_SECURITY_PROXY_REVERSE_HIGH_AVAILIBILITY = "select2-results-15";
    private static final String txt_NETWORK_SECURITY_PROXY_REVERSE_CERTIFICATE = "s2id_autogen19_results";
    private static final String txt_NETWORK_SECURITY_NEW_SWITCH_NETWORK_CI = "s2id_autogen18_results";
    private static final String txt_NETWORK_SECURITY_FIREWALL_NEW_CHANGE_ADD_CI = "s2id_autogen15_results";
    private static final String txt_NETWORK_SECURITY_SWITCH_PORT_CONFIG_ADD_CI = "s2id_autogen17_results";
    private static final String txt_NETWORK_SECURITY_FIREWALL_NEW_CHANGE_SERVICE_REQUEST = "select2-results-11";
    private static final String txt_NETWORK_SECURITY_ADD_MODIFY_REMOVE_SCHEDULED_CHANGE = "select2-results-12";
    private static final String txt_NETWORK_SECURITY_ADD_MODIFY_REMOVE_DNS_SERVICE_REQUEST_NAME = "select2-results-11";
    private static final String txt_NIMBUS_RESTORE_VM = "s2id_autogen21_results";
    private static final String txt_NIMBUS_TARGET_COUNTRIES = "s2id_autogen22_results";
    private static final String txt_NIMBUS_CLOUD_SERVICES = "s2id_autogen20_results";
    private static final String txt_NIMBUS_EXTEND_DISK_ADD_CI = "s2id_autogen19_results";
    private static final String txt_NIMBUS_ADD_CI = "s2id_autogen18_results";
    private static final String txt_NIMBUS_TYPE = "select2-results-13";
    private static final String txt_DATABASE_PERFORMANCE_TROUBLESHOOTING_SERVER_CI = "s2id_autogen34_results";
    private static final String txt_DATABASE_PERFORMANCE_TROUBLESHOOTING_DB_CI = "s2id_autogen35_results";
    private static final String txt_DATABASE_PERFORMANCE_TROUBLESHOOTING_DB_TYPE = "select2-results-12";
    private static final String txt_DATABASE_CONFIGURE_PARAMETER_ADD_CI = "s2id_autogen39_results";
    private static final String txt_DATABASE_CONFIGURE_PARAMETER_DATABASE_ADD_CI = "s2id_autogen40_results";
    private static final String txt_DATABASE_CONFIGURE_PARAMETER_DATABASE_TYPE = "select2-results-12";
    private static final String txt_DATABASE_REQUEST_ADD_CI = "s2id_autogen37_results";
    private static final String txt_DATABASE_REQUEST_ADD_SERVER_CI = "s2id_autogen36_results";
    private static final String txt_DATABASE_REQUEST_DATABASE_TYPE = "select2-results-12";
    private static final String txt_DATABASE_REQUEST_LOCATION = "select2-results-20";
    private static final String txt_DATABASE_REQUEST_CHOOSE_ACTION = "select2-results-18";
    private static final String txt_DATABASE_NEW_EXISTING_ACCOUNT = "select2-results-14";
    private static final String txt_ADD_DATABASE_CI = "s2id_autogen25_results";
    private static final String txt_ADD_SERVER_CI = "s2id_autogen26_results";
    private static final String txt_DATABASE_ACCOUNT_TYPE = "select2-results-14";
    private static final String txt_ADDCI = "s2id_autogen13_results";
    private static final String GET_CIS = "s2id_sp_formfield_sr108_v_at3";
    private static final String GET_CIS2 = "s2id_sp_formfield_sr108_v_at3";
    private static final String dd_AT1_CI = "s2id_sp_formfield_sr108_v_at1";
    private static final String txt_AT1_CI = "s2id_autogen16_results";
    private static final String txt_BACK_UP_ADD_CI = "s2id_autogen14_results";
    private static final String txt_ADD_CI = "s2id_autogen15_results";
    private static final String txt_BCPP_ENVIRONMENT = "select2-results-12";
    private static final String txt_CRM_SYSTEM = "select2-results-14";
    private static final String txt_ROLE_ID = "select2-results-9";
    private static final String txt_SYSTEM_ID = "select2-results-13";
    private static final String txt_SERVICE_REQUEST_NAME_ID = "select2-results-11";
    private static final String txt_SELECT_REQUEST_ID = "select2-results-12";
    private static final String txt_C2B_SERVICE_ENVIRONMENT = "s2id_autogen13_results";
    private static final String txt_C2B_GENERAL_ENVIRONMENT = "s2id_autogen16_results";
    private static final String txt_ENVIRONMENT = "s2id_autogen15_results";
    private static final String dd_AT2_CI = "s2id_sp_formfield_sr108_v_at2";
    private static final String txt_AT2_CI = "s2id_autogen17_results";
    private static final String dd_AT3_CI = "s2id_sp_formfield_sr108_v_at3";
    private static final String txt_AT3_CI = "s2id_autogen18_results";
    private static final String dd_PROD_CI = "s2id_autogen15";
    private static final String txt_PROD_CI = "s2id_autogen15_results";
    private static final String link_FINANCE_ASSURANCE="//img[@alt='Finance & Assurance']";
    private static final String link_DATABASE = "//*[@id='xcc61d55edb198b00b27fdb11ce961902']/div/div[2]/div[6]/div[4]";
    private static final String pebble_DNS_DHCP = "//h2[contains(text(),'DNS/DHCP')]";
    private static final String pebble_FIREWALL_ROUTING_REQUEST = "//*[@id='x2723de4adb72cf006734f1eabf9619aa']/div/div/div[2]/div/div[11]/div/a";
    private static final String pebble_LAN_DATA_NET_LAN = "//*[@id='x2723de4adb72cf006734f1eabf9619aa']/div/div/div[2]/div/div[13]/div/a";
    private static final String pebble_NETWORK_LOAD_BALANCING = "//*[@id='x2723de4adb72cf006734f1eabf9619aa']/div/div/div[2]/div/div[14]/div/a";
    private static final String pebble_NETWORK_ROUTING_SWITCHING = "//*[@id='x2723de4adb72cf006734f1eabf9619aa']/div/div/div[2]/div/div[16]/div/a";
    private static final String pebble_PROXY = "//*[@id='x2723de4adb72cf006734f1eabf9619aa']/div/div/div[2]/div/div[17]/div/a";
    private static final String pebble_REMOTE_ACCESS_VPN_ACS = "//*[@id='x2723de4adb72cf006734f1eabf9619aa']/div/div/div[2]/div/div[18]/div/a";
    private static final String pebble_CHANGE_OS_PATCHING = "//*[@id='x2723de4adb72cf006734f1eabf9619aa']/div/div/div[2]/div/div[18]/div/a";
    private static final String pebble_MANUAL_OS_PATCHING = "//*[@id='x2723de4adb72cf006734f1eabf9619aa']/div/div/div[2]/div/div[19]/div/a";
    private static final String link_IT_INFRASTRUCTURE = "//*[@id='ddddd28bdb8197042b3cfc16bf961980']";
    private static final String pebble_ACCESS_RED_HAT_KNOWLEDGEBASE = "//*[@id='x2723de4adb72cf006734f1eabf9619aa']/div/div/div[2]/div/div[16]/div/a";
    private static final String btn_SUBMIT = "//button[@name='submit']";
    private static final String btn_SEND = "//input[@value='Send']";
    private static final String link_PRODUCTS_AND_SERVICES = "//*[contains(text(),'Products & Services')]";
    private static final String link_ACCOUNT_MANAGEMENT_AND_SERVER_FORM = "//h2[contains(text(),'Account Management - Server')]";
    private static final String link_APPLICATION = "b49dd9c1db9997446734f1eabf961975";
    private static final String btn_SHOW_MORE = "//button[contains(text(), 'Show More')]";
    private static final String link_SUPPORT_HOMEPAGE = "//*[@id='xcab273021b8480d00c1e87fe6e4bcbaf']/div/a";
    private static final String link_FIREWALL_AND_NETWORK = "c85eddc1db9997446734f1eabf96198a";
    private static final String link_CLOUD = "7afd99c1db9997446734f1eabf9619be";
    private static final String link_COMPUTE_AND_OPERATING_SYSTEM = "d56e9dc1db9997446734f1eabf961970";
    private static final String link_MESSAGING = "00e7f797dbe153006734f1eabf961914";
    private static final String linkDATABASE = "78d96643dbc197042b3cfc16bf9619ab";
    private static final String link_DATA_CENTER = "0e0e9dc1db9997446734f1eabf96196a";
    private static final String link_STORAGE_AND_DATA_PROTECTION = "6d9e9505db9997446734f1eabf96195a";
    private static final String link_SUPPORT = "xcab273021b8480d00c1e87fe6e4bcbaf";

    public void click_Support(){
        clickElement(By.xpath(link_SUPPORT));
    }

    public void click_Storage_And_Data_Protection(){
        clickElement(By.id(link_STORAGE_AND_DATA_PROTECTION));
    }

    public void click_Data_Center(){
        clickElement(By.id(link_DATA_CENTER));
    }

    public void click_Database(){
        clickElement(By.id(linkDATABASE));
    }

    public void clickMessaging(){
        clickElement(By.id(link_MESSAGING));
    }

    public void clickCompute_And_Operating_System(){
        clickElement(By.id(link_COMPUTE_AND_OPERATING_SYSTEM));
    }

    public void clickCloud(){
        clickElement(By.id(link_CLOUD));
    }

    public void clickFirewall_And_Network(){
        clickElement(By.id(link_FIREWALL_AND_NETWORK));
    }

    public void clickSupport(){
        clickElement(By.xpath(link_SUPPORT_HOMEPAGE));
    }

    public void clickShow_More(){
        clickElement(By.xpath(btn_SHOW_MORE));
    }

    public void clickApplication(){
        clickElement(By.id(link_APPLICATION));
    }

    public void clickAccount_Management_And_Server_Form(){
        clickElement(By.xpath(link_ACCOUNT_MANAGEMENT_AND_SERVER_FORM));
    }

    public void clickProducts_And_Services(){
        clickElement(By.xpath(link_PRODUCTS_AND_SERVICES));
    }

    public void clickSend_Button(){
        clickElement(By.xpath(btn_SEND));
    }

    public void clickSubmit_Button(){
        clickElement(By.xpath(btn_SUBMIT));
    }

    public void clickAccess_Red_Hat_Knowledgebase(){
        clickElement(By.xpath(pebble_ACCESS_RED_HAT_KNOWLEDGEBASE));
    }

    public void clickIT_Infrastructure(){
        clickElement(By.xpath(link_IT_INFRASTRUCTURE));
    }

    public void clickManual_OS_Patching(){
        clickElement(By.xpath(pebble_MANUAL_OS_PATCHING));
    }

    public void clickChange_OS_Patching(){
        clickElement(By.xpath(pebble_CHANGE_OS_PATCHING));
    }

    public void clickRemote_Access (){
        clickElement(By.xpath(pebble_REMOTE_ACCESS_VPN_ACS));
    }

    public void clickProxy(){
        clickElement(By.xpath(pebble_PROXY));
    }

    public void clickNetwork_Routing_Switching(){
        clickElement(By.xpath(pebble_NETWORK_ROUTING_SWITCHING));
    }

    public void clickNetwork_Load_Balancing(){
        clickElement(By.xpath(pebble_NETWORK_LOAD_BALANCING));
    }

    public void clickLAN_Data_Net_Lan(){
        clickElement(By.xpath(pebble_LAN_DATA_NET_LAN));
    }

    public void clickFirewall_Routing_Request(){
        clickElement(By.xpath(pebble_FIREWALL_ROUTING_REQUEST));
    }

    public void clickDNS_DHCP() {
        clickElement(By.xpath(pebble_DNS_DHCP));
    }

    public void clickDatabase() {
        clickElement(By.xpath(link_DATABASE));
    }


    public void clickFinanceAssurance() {
        clickElement(By.xpath(link_FINANCE_ASSURANCE));
    }
    private static final String tab_CLOSURE_INFORMATION= "//*[@id='tabs2_section']/span[5]/span[1]/span[2]";

    public void clickTab_Plaza(String tabName){

      driver.findElements(By.className("tab_caption_text")).stream().filter(element -> element.getText().equals(tabName)).findFirst().orElse(null).click();

        }


    public void clickClosureInformationTab(){
        clickElement(By.xpath(tab_CLOSURE_INFORMATION));
    }

    public String getResolutionCode(){
        return getTextByElement(By.xpath(GET_RESOLUTION_CODE));
    }

    public String getResolutionNotes(){
        wait(500);
        return getTextByElement(By.id(GET_RESOLUTION_NOTES));
    }

    public void selectcomputeSystemNameInHaiti(String dropdownName) {
        clickElement(By.id(dd_COMPUTE_SYSTEMNAME_IN_HAITI));
        WebElement Element = findElement(By.id(txt_COMPUTE_SYSTEM));
        WebElement element = driver.switchTo().activeElement();
        element.sendKeys(dropdownName);
        wait(500);
        element.sendKeys(Keys.ARROW_DOWN);
        element.sendKeys(Keys.ENTER);
    }

    public void selectDropdownByUsingClickAndSendKeys(String elementID, String dropdownValue){
        clickElement(By.id(elementID));
        WebElement Element=findElement(By.xpath(txt_TEXT_BOX));
        Element.sendKeys(dropdownValue);
        wait(500);
        driver.switchTo().activeElement().sendKeys(Keys.ARROW_DOWN);
        driver.switchTo().activeElement().sendKeys(Keys.ENTER);
    }
    public void selectAddOneTimeCi(String CiName){
        PlazaValidation.CI = CiName;
        addCi(txt_ONE_Time_ADD_CI, txt_ADD_CI_TEXT_BOX, CiName);
    }
    public void selectServiceAs(String service){
        selectDropdownByUsingClickAndSendKeys(txt_SERVICE, service);

    }

    public void enterAppwatchHostGroupName (String text){
        enterTextByElement(By.id(txt_HOST_GROUP_NAME), text);
    }

    public void enterTouchpointStartDateAndTime (String text){
        PlazaValidation.PlannedStartDate = text;
        enterTextByElement(By.id(txt_TOUCHPOINT_PLANNED_START_AND_TIME), text);
    }

    public void enterTouchpointUpdateDescription (String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_TOUCHPOINT_UPDATE_DESCRIPTION), text);
    }

    public void enterIbsOrderDescription (String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_IBS_ORDER_DESCRIPTION), text);
    }

    public void enterIbsSystem (String dropdownName){
        PlazaValidation.System = dropdownName;
        selectDropdown(By.id(txt_IBS_SYSTEM), By.id(dd_IBSSYSTEM), dropdownName);
    }

    public void enterIbsOrderRequest (String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_IBS_ORDER_REQUEST), text);
    }

    public void enterIbsDescription (String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_IBS_DESCRIPTION), text);
    }

    public void selectsAddIbsCi(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_IBS_CI), By.id(dd_IBSCI),  dropdownName);

    }

    public void selectIbsServiceRequestName (String dropdownName){
        PlazaValidation.ServiceRequestName = dropdownName;
        selectDropdown(By.id(dd_SERVICE_NAME_IBS), By.id(dd_IBS_SERVICE_NAME), dropdownName);
    }

    public void enterAppwatchDescription (String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_APPWATCH_DESCRIPTION), text);
    }

    public void enterSplunkH2Name (String text){
        PlazaValidation.H2Name = text;
        enterTextByElement(By.id(txt_SPLUNK_H2NAME), text);
    }

    public void selectSplunkRole (String dropdownName){
        PlazaValidation.Role = dropdownName;
        selectDropdown(By.id(dd_SPLUNK_ROLE), By.id(dd_ROLE_SPLUNK), dropdownName);
    }

    public void enterTouchpointPlusDescription (String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_TOUCHPOINTPLUS_DESCRIPTION), text);
    }

    public void enterTouchpointUserId (String text){
        PlazaValidation.UserId = text;
        enterTextByElement(By.id(txt_TOUCHPOINT_USERID), text);
    }

    public void enterTouchpointDescription (String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_TOUCHPOINT_DESCRIPTION), text);
    }

    public void enterTouchpointSmsRequest (String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_TOUCHPOINT_SMS_REQUEST), text);
    }

    public void enterUpdateSupportPagesRequest (String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_TOUCHPOINT_UPDATE_SUPPORT_PAGES_REQUEST), text);
    }

    public void selectName (String dropdownName){
        selectDropdownWithMultipleValues(By.id(dd_NAME), By.id(dd_SELECT_NAME), dropdownName);
    }

    public void clickGenerally (){
        clickElement(By.xpath(link_GENERALLY));
    }

    public void enterServiceId (String text){
        PlazaValidation.ServiceId = text;
        enterTextByElement(By.id(txt_SERVICE_ID), text);
    }

    public void enterOrganisationName (String text){
        PlazaValidation.OrganisationName = text;
        enterTextByElement(By.id(txt_ORGANISATION_NAME), text);
    }

    public void enterTouchpointRequest (String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_TOUCHPOINT_REQUEST), text);
    }

    public void selectNumberOfServers (String dropdownName){
        PlazaValidation.NumberOfServers = dropdownName;
        selectDropdown(By.id(dd_NUMBER_OF_SERVERS), By.id(dd_NUM_OF_SERVERS), dropdownName);
    }

    public void selectVlan (String dropdownName){
        PlazaValidation.VlanName = dropdownName;
        selectDropdown(By.id(dd_VLAN), By.id(dd_SELECT_VLAN), dropdownName);
    }

    public void selectServerType (String dropdownName){
        PlazaValidation.ServerType = dropdownName;
        selectDropdown(By.id(dd_SERVER_TYPE), By.id(dd_SELECT_SERVER_TYPE), dropdownName);
    }

    public void selectDdcSite (String dropdownName){
        PlazaValidation.DdcSite = dropdownName;
        selectDropdown(By.id(dd_DDC_SITE), By.id(dd_SELECT_DDC_SITE), dropdownName);
    }

    public void selectCsmMonitoring (String dropdownName){
        selectDropdown(By.id(dd_CSM_MONITORING), By.id(dd_SELECT_CSM_MONITORING), dropdownName);
    }

    public void  enterVcpuAndRam (String text){
        PlazaValidation.VcpuAndRam = text;
        enterTextByElement(By.id(txt_VCPU_AND_RAM), text);
    }

    public void enterMonitoringAppWatch (String text){
        PlazaValidation.MonitoringAppwatch = text;
        enterTextByElement(By.id(txt_MONITORING_APP_WATCH), text);
    }

    public void selectMicrosoftSecurityPatching (String dropdownName){
        PlazaValidation.SecurityPatching = dropdownName;
        selectDropdown(By.id(dd_MICROSOFT_SECURITY_PATCHING), By.id(dd_SECURITY_PATCHING), dropdownName);
    }

    public void selectPatchWindow (String dropdownName){
        PlazaValidation.PatchWindow = dropdownName;
        selectDropdown(By.id(dd_PATCH_WINDOW), By.id(dd_SELECT_PATCH_WINDOW), dropdownName);
    }

    public void selectServiceLevelManagement (String dropdownName){
        PlazaValidation.ServiceLevelManagement = dropdownName;
        selectDropdown(By.id(dd_SERVICE_LEVEL_MANAGEMENT), By.id(dd_SELECT_SERVICE_LEVEL_MANAGEMENT), dropdownName);
    }

    public void enterIbsRequest (String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_IBS_REQUEST), text);
    }

    public void selectEnableNotifications (String dropdownName){
        PlazaValidation.Notifications = dropdownName;
        selectDropdown(By.id(dd_NOTIFICATIONS), By.id(dd_ENABLE_NOTIFICATIONS), dropdownName);
    }

    public void enterAppwatchServiceGroupName (String text){
        PlazaValidation.ServiceGroupName = text;
        enterTextByElement(By.id(txt_SERVICEGROUPNAME), text);
    }

    public void selectOnCallTeam (String dropdownName){
        PlazaValidation.OnCallTeam = dropdownName;
        selectDropdown(By.id(dd_ON_CALL_TEAM), By.id (dd_SELECT_ON_CALL_TEAM),  dropdownName);
    }

    public void enterAppwatchRequest (String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_APPWATCH_REQUEST), text);
    }


    public void enterCRMResourceServiceRequest(String text){
        enterTextByElement(By.id(txt_CRM_RESOURCE_SERVICE_REQUEST), text);
    }
    public void selectDropdownValueUnderItInfrastructure(String DropdownValue){
        driver.findElement(By.id(dd_DROPDOWN_IT_INFRASTRUCTURE)).findElements(By.tagName("span")).stream().filter(element -> element.getAttribute("value").equals(DropdownValue)).findFirst().orElse(null).click();
    }

    public void selectWebtabCi(String dropdownName){
        PlazaValidation.CI = dropdownName;
        clickElement(By.id(dd_WEBTAB_CI));
        WebElement Element=findElement(By.xpath(dd_CI_WEBTAB));
        Element.sendKeys(dropdownName);
        wait(1000);
        Element.sendKeys(Keys.ARROW_DOWN);
        Element.sendKeys(Keys.ENTER);

    }

    public void selectVehaSystem(String dropdownName){
        PlazaValidation.System = dropdownName;
        clickElement(By.id(dd_VEHA_SYSTEM));
        WebElement Element=findElement(By.xpath(dd_SYSTEM_VEHA));
        Element.sendKeys(dropdownName);
        wait(1000);
        Element.sendKeys(Keys.ARROW_DOWN);
        Element.sendKeys(Keys.ENTER);

    }

    public void selectOccCi(String dropdownName){
        PlazaValidation.CI = dropdownName;
        clickElement(By.id(dd_OCC_CI));
        WebElement Element=findElement(By.xpath(dd_CI_OCC));
        Element.sendKeys(dropdownName);
        wait(1000);
        Element.sendKeys(Keys.ARROW_DOWN);
        Element.sendKeys(Keys.ENTER);

    }

    public void selectServerDatabaseCi(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_SERVER_DATABASE_CI), By.id("s2id_autogen15_results"),  dropdownName);

    }

    public void selectitfiSystem(String dropdownName){
        clickElement(By.id(dd_SYSTEM_ITFI));
        WebElement Element=findElement(By.xpath(dd_IT_FI_SYSTEM));
        Element.sendKeys(dropdownName);
        wait(1000);
        Element.sendKeys(Keys.ARROW_DOWN);
        Element.sendKeys(Keys.ENTER);

    }

    public void selectNimbusSystemNameHaiti(String dropdownName){
        PlazaValidation.SystemNameInHaiti = dropdownName;
        clickElement(By.id(dd_NIMBUS_HAITI));
        WebElement Element=findElement(By.xpath(dd_SYSTEM_NAME_HAITI_NIMBUS));
        Element.sendKeys(dropdownName);
        wait(1000);
        Element.sendKeys(Keys.ARROW_DOWN);
        Element.sendKeys(Keys.ENTER);

    }

    public void selectNetworkSecurityRemoteAccessSystemNameHaiti(String dropdownName){
        clickElement(By.id(dd_REMOTE_ACCESS_HAITI));
        WebElement Element=findElement(By.xpath(dd_NETWORK_SECURITY_REMOTE_ACCESS_SYSTEM_HAITI));
        Element.sendKeys(dropdownName);
        wait(1000);
        Element.sendKeys(Keys.ARROW_DOWN);
        Element.sendKeys(Keys.ENTER);

    }

    public void selectNetworkSecurityProxySystemNameHaiti(String dropdownName){
        PlazaValidation.SystemNameInHaiti = dropdownName;
        clickElement(By.id(dd_PROXY_GENERAL_INQUIRY_HAITI));
        WebElement Element=findElement(By.xpath(dd_NETWORK_SECURITY_PROXY_GENERAL_INQUIRY_HAITI));
        Element.sendKeys(dropdownName);
        wait(1000);
        Element.sendKeys(Keys.ARROW_DOWN);
        Element.sendKeys(Keys.ENTER);

    }

    public void selectNetworkSecurityProxyResourceRequestSystemNameHaiti(String dropdownName){
        PlazaValidation.SystemNameInHaiti = dropdownName;
        clickElement(By.id(dd_PROXY_GENERAL_INQUIRY_HAITI));
        WebElement Element=findElement(By.xpath(dd_NETWORK_SECURITY_PROXY_GENERAL_INQUIRY_HAITI));
        Element.sendKeys(dropdownName);
        wait(1000);
        Element.sendKeys(Keys.ARROW_DOWN);
        Element.sendKeys(Keys.ENTER);

    }


    public void selectNetworkSecurityFirewallSystemNameHaiti(String dropdownName){
        PlazaValidation.SystemNameInHaiti = dropdownName;
        clickElement(By.id(dd_NETWORKSECURITY_FIREWALL_HAITI));
        WebElement Element=findElement(By.id(dd_NETWORK_SECURITY_FIREWALL_SYSTEM_HAITI));
        Element.sendKeys(dropdownName);
        wait(1000);
        Element.sendKeys(Keys.ARROW_DOWN);
        Element.sendKeys(Keys.ENTER);

    }

    public void selectNetworkSecurityNewSwitchSystemNameHaiti(String dropdownName){
        PlazaValidation.SystemNameInHaiti = dropdownName;
        clickElement(By.id(dd_NETWORKSECURITY_FIREWALL_HAITI));
        WebElement Element=findElement(By.xpath("//input[@type='text']"));
        Element.sendKeys(dropdownName);
        wait(1000);
        Element.sendKeys(Keys.ARROW_DOWN);
        Element.sendKeys(Keys.ENTER);

    }

    public void selectOperatingAccountManagementSystemNameHaiti(String dropdownName){
        clickElement(By.id(dd_NETWORKSECURITY_FIREWALL_HAITI));
        WebElement Element=findElement(By.xpath("//input[@type='text']"));
        Element.sendKeys(dropdownName);
        wait(1000);
        Element.sendKeys(Keys.ENTER);

    }

    public void selectOperatingChangeFromAutoSystemNameHaiti(String dropdownName){
        clickElement(By.id(dd_NETWORKSECURITY_FIREWALL_HAITI));
        WebElement Element=findElement(By.xpath("//input[@type='text']"));
        Element.sendKeys(dropdownName);
        wait(1000);
        Element.sendKeys(Keys.ENTER);

    }

    public void selectOperatingChangeFromManualSystemNameHaiti(String dropdownName){
        clickElement(By.id(dd_NETWORKSECURITY_FIREWALL_HAITI));
        WebElement Element=findElement(By.xpath("//input[@type='text']"));
        Element.sendKeys(dropdownName);
        wait(1000);
        Element.sendKeys(Keys.ENTER);

    }

    public void selectNetworkSecuritySystemNameHaiti(String dropdownName){
        PlazaValidation.SystemNameInHaiti = dropdownName;
        clickElement(By.id(dd_NETWORKSECURITY_HAITI));
        WebElement Element=findElement(By.id(dd_NETWORK_SECURITY_SYSTEM_NAME_HAITI));
        Element.sendKeys(dropdownName);
        wait(1000);
        Element.sendKeys(Keys.ENTER);
    }

    public void selectNetworkSecurityFirewallNewChangeSystemNameHaiti(String dropdownName){
        PlazaValidation.SystemNameInHaiti = dropdownName;
        clickElement(By.id(dd_NETWORKSECURITY_HAITI));
        WebElement Element=findElement(By.xpath("//input[@type='text']"));
        Element.sendKeys(dropdownName);
        wait(1000);
        Element.sendKeys(Keys.ENTER);
    }

    public void selectOperatingSystemNameHaiti(String dropdownName){
        clickElement(By.id(dd_NETWORKSECURITY_HAITI));
        WebElement Element=findElement(By.xpath("//input[@type='text']"));
        Element.sendKeys(dropdownName);
        wait(1000);
        Element.sendKeys(Keys.ENTER);
    }

    public void selectSystemNameHaiti(String dropdownName){
        PlazaValidation.SystemNameInHaiti = dropdownName;
        clickElement(By.id(dd_SYSTEMNAME_HAITI_DATABASE));
        WebElement Element=findElement(By.xpath(dd_DATABASE_SYSTEM_NAME_HAITI));
        Element.sendKeys(dropdownName);
        wait(1000);
        Element.sendKeys(Keys.ARROW_DOWN);
        Element.sendKeys(Keys.ENTER);

    }




    public void clickCloseIncident(){
       clickElement(By.id(btn_CLOSE_INCIDENT));
       wait(1000);
   }
   public String getIncidentState(){
       return getTextByElement(By.xpath(txt_STATE));
   }
    public void enterAssignmentGroup_PlazaIncident(String text){
        enterTextByElement(By.id(txt_ASSIGNMENT_GROUP), text);
    }
    public void enterAssignedTo_PlazaIncident(String text){
        enterTextByElement(By.id(txt_ASSIGNED_TO), text);
        wait(500);
        WebElement element=driver.switchTo().activeElement();
        element.sendKeys(Keys.ARROW_DOWN);
        element.sendKeys(Keys.ENTER);
    }

    public boolean verifyINCisPresent(){
         int rows= getTableRows(By.id(txt_VERIFY_INC)).size();
        System.out.println("table rows are :" + rows);
        if(rows>0)
            return true;
        return false;

    }

    public void clickOn_ICM_number(){
        //driver.findElement(By.id("xba9dcc6fdb3ad7802b3cfc16bf96195f")).findElement(By.tagName("a")).click();
        WebElement ICM = driver.findElement(By.xpath(btn_CLICK_INC_NUMBER));
        Actions actions = new Actions(driver);
        actions.moveToElement(ICM).click();

    }
    public String getFirstTimelineMessage(){
        return getTextByElement(By.xpath(txt_FIRST_TIMELINE_MESSAGE));
    }

    public String getSecondTimelineMessage(){
        return getTextByElement(By.xpath(txt_SECOND_TIMELINE_MESSAGE));
    }
    public void selectCategory_plazaIncident(String dropDownValue){
        PlazaValidation.Category_Incident=dropDownValue;
        selectDropdown(By.id(dd_PLAZA_INCIDENT_CATEGORY), By.id(dd_PLAZA_INCIDENT_CATEGORY_RESULTS),  dropDownValue);
    }
    public void selectTypeOfIssue_plazaIncident(String dropDownValue){
        PlazaValidation.TypeOfIssue=dropDownValue;
        selectDropdown(By.id(dd_PLAZA_INCIDENT_TYPE_OF_ISSUE), By.id(dd_PLAZA_INCIDENT_TYPE_OF_ISSUE_RESULTS),  dropDownValue);
    }

   public void enterSubject_PlazaIncident(String text){
        PlazaValidation.Subject=text;
        enterTextByElement(By.id(txt_PLAZA_INCIDENT_SUBJECT), text);
   }
    public void enterDescribeQuestionOrCase_plazaIncident(String text){
        PlazaValidation.Description_Incident=text;
        enterTextByElement(By.id(txt_PLAZA_INCIDENT_DESCRIPTION), text);
    }
    public void clickNoAccessToMail(){
        clickElement(By.xpath(btn_ACCESS_TO_EMAIL));
    }





    public String getOW_ManualNotification_plaza(){
        return getTextByElement(By.xpath(txt_OW_MANUAL_NOTIFICATION));
    }


    public String getOW_AttachmentNotification_plaza(){
        String message= getTextByElement(By.xpath(txt_OW_ATTACHMENT_NOTIFICATION_PLAZA));
        String arr[] = message.split(":");
        String AttachmentMessage= arr[2];
        return AttachmentMessage;
    }
    public void clickPDB_AffectedCountry(String AffectedCountry) {

        driver.findElement((By.id(div_PDB_Affected_COUNTRY))).findElements(By.tagName("span")).stream().filter(element -> element.getText().trim().equals(AffectedCountry)).findFirst().orElse(null).click();
    }
    public void clickPDB_AffectedPersonType(String AffectedPersonType) {

        driver.findElement((By.id(btn_PDB_AFFECTED_PERSON))).findElements(By.tagName("span")).stream().filter(element -> element.getText().trim().equals(AffectedPersonType)).findFirst().orElse(null).click();
    }
    public void selectSystemNameInHaiti(String dropdownName){
        PlazaValidation.SystemNameInHaiti = dropdownName;
        clickElement(By.id(dd_SYSTEM_NAME_IN_HAITI));
        WebElement Element=findElement(By.id(dd_SYSTEM_NAME_HAITI));
        WebElement element= driver.switchTo().activeElement();
        element.sendKeys(dropdownName);
        wait(500);
        element.sendKeys(Keys.ARROW_DOWN);
        element.sendKeys(Keys.ENTER);

    }
    public String getOW_ManualUpdate(){
        return getTextByElement(By.id(""));
    }
    public void clickPlazaHome(){
        clickElement(By.id(btn_PLAZA_hOME));
    }


    public String getOpTicket_plaza(){
        String ticket= getTextByElement(By.xpath(txt_GET_OP_TICKET));
        System.out.println(ticket);
        String arr[] = ticket.split(":");
        CommonUtils.OpTicket_plaza = arr[1];
        System.out.println(OpTicket_plaza);
        return OpTicket_plaza;
    }
    public Boolean verifyIncidentUpdate(){
        String ticket=getOpTicket_plaza();
        System.out.println("The PDB OP incident is" + ticket);
        if(ticket.contains("OP-00000"))
            return true;
        else return false;
    }


    public void enterWhitelistingSourceIpAddress(String text){
        PlazaValidation.SourceIpAddress = text;
        enterTextByElement(By.id(txt_WHITELISTING_SOURCE_IP), text);
    }

    public void enterBdlWbsCodeAt1(String text){
        PlazaValidation.WbsCodeField = text;
        enterTextByElement(By.id(txt_BDL_WBS_CODE_AT1), text);
    }

    public void enterBdlWbsCodeAt2(String text){
        PlazaValidation.WbsCodeField = text;
        enterTextByElement(By.id(txt_BDL_WBS_CODE_AT2), text);
    }

    public void enterAffectedPersons(String text){
        PlazaValidation.AffectedPersonNameID = text;
        enterTextByElement(By.id(txt_AFFECTED_PERSONS_PDB), text);
    }

    public void selectNatureAndContent(String text){
        PlazaValidation.NatureAndContent=text;
        clickElementById(txt_NATURE_AND_CONTENT);
        wait(1000);
        driver.switchTo().activeElement().sendKeys(Keys.ENTER);
    }
    public void selectAffectedPerson(String text){
        PlazaValidation.AffectedPersons=text;
        selectDropdownByTagNameDiv(By.id(txt_AFFECTED_PERSONS),By.id(txt_AFFECTED_PERSONS_RESULTS), text );
    }
    public void enterDatetime_PDB(String text){
        PlazaValidation.DateTime=text;
        enterTextByElement(By.id(txt_PDB_DATE_AND_TIME), text);
    }
    public String getServiceArea(){
        return getTextByID(txt_GET_SERVICE_AREA);
    }
    public String getService_CreateIncident(){
        return getTextByID(txt_GET_SERVICE_CREATE_INCIDENT);
    }
    public void selectService(String text){
        clickElement(By.id(dd_SELECT_SERVICE));
        WebElement Element=findElement(By.xpath(txt_SERVICE_TEXT));
        Element.sendKeys(text);
        wait(500);
        driver.switchTo().activeElement().sendKeys(Keys.ENTER);
    }
    public String getManualNotification_plaza(){
        return getTextByElement(By.xpath(GET_MANUAL_NOTIFICATION_PLAZA));
    }
    public void enterManualNotification_plaza(String text){
        enterTextByElement(By.id(txt_MANUAL_NOTIFICATION_PLAZA), text);
    }
    public boolean validateInternalCaseManagementIsOpened(){
        return findElement(By.xpath(VALIDATE_INTERNAL_CASE_MANAGEMENT)).isDisplayed();
    }
    public void enterSearchAndSelectIncident(String text){
        WebElement searchBox=findElement(By.xpath(txt_SEARCH_AND_SELECT_INCIDENT));
        searchBox.sendKeys(text);
        wait(2000);
        searchBox.sendKeys(Keys.ARROW_DOWN);
        searchBox.sendKeys(Keys.ENTER);
    }

    public void enterRequest_LinuxUnixServer(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_LINUX_UNIX_SERVER_REQUEST), text);
    }

    public void selectCI_LinuxUnixServer(String text){
        PlazaValidation.CI = text;
        selectDropdownWithMultipleValues(By.id(txt_LINUX_UNIX_SERVER_CI),By.id(txt_LINUX_UNIX_SERVER_CI_RESULTS), text );
    }


    public void enterDescription_LinuxUnixServer(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_LINUX_UNIX_SERVER_DESCRIPTION), text);
    }
    public void selectServiceArea(String text){
        PlazaValidation.ServiceArea=text;
        selectDropdownByEnterText(dd_SERVICE_AREA, text);
    }

    public void selectTypeOfServer(String text){
        PlazaValidation.TypeOfServer = text;
        selectDropdownByTagNameDiv(By.id(dd_TYPE_OF_SERVER), By.id(txt_TYPE_OF_SERVER), text);
    }
    public void selectServiceAreaCategory(String text){
        PlazaValidation.ServiceAreaCategory = text;
        selectDropdownByTagNameDiv(By.id(dd_SERVICE_AREA_CATEGORY), By.id(txt_SERVICE_AREA_CATEGORY), text);
    }

    public void enterNetworkSecurityProxySurfProxyOneDescription(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_PROXY_SURF_PROXY_ONE_DESCRIPTION), text);
    }


    public void enterNetworkSecurityProxySurfProxyUserId(String text){
        PlazaValidation.UserId = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_PROXY_SURF_PROXY_ONE_USER_ID), text);
    }

    public void enterNetworkSecurityDnsSwedenCustomerIdName(String text) {
        PlazaValidation.CustomerIdName = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_DNS_SWEDEN_CUSTOMER_ID_NAME), text);
    }


    public void enterMegadisc_add_user_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_MEGADISC_ADD_USER_DESCRIPTION), text);
    }
    public void selectTopcatAddCi(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_TOPCAT_ADD_CI), By.id(txt_TOPCAT_ADD_CI),  dropdownName);
    }
    public void enterSplunkDescription(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_SPLUNK_DESCRIPTION), text);
    }
    public void enterSplunkH2(String text){
        PlazaValidation.H2Name = text;
        enterTextByElement(By.id(txt_SPLUNK_H2), text);
    }
    public void enterSplunkRequest(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_SPLUNK_REQUEST), text);
    }
    public void selectSpanAddCi(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_SPAN_CI), By.id(txt_SPAN_ADD_CI),  dropdownName);
    }
    public void enterSpanDescription(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_SPAN_DESCRIPTION), text);
    }

    public void enterPolluxWbsCode(String text){
        PlazaValidation.WbsCodeField = text;
        enterTextByElement(By.id(txt_POLLUX_WBS_CODE), text);
    }
    public void enterPolluxDescription(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_POLLUX_DESCRIPTION), text);
    }
    public void selectPolluxEnvironment(String dropdownName){
        PlazaValidation.Environment = dropdownName;
        selectDropdownByTagNameDiv(By.id(dd_POLLUX_ENVIRONMENT), By.id(txt_POLLUX_ENVIRONMENT),   dropdownName);
    }
    public void enterPolluxRequest(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_POLLUX_REQUEST), text);
    }
    public void enterNnmNoDescription(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_NNM_NO_DESCRIPTION), text);
    }
    public void enterNnmNoDnsIpAddress(String text){
        PlazaValidation.DnsIpAddress = text;
        enterTextByElement(By.id(txt_NNM_NO_DNS_IP_ADDRESS), text);
    }
    public void enterNnm_no(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_NNM_NO_REQUEST), text);
    }


    public void enterTCFP_generalEnquiry_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_TCFP_GENERAL_ENQUIRY_REQUEST), text);
    }
    public void enterTCFP_generalEnquiry_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_TCFP_GENERAL_ENQUIRY_DESCRIPTION), text);
    }

    public void selectTCFP_generalEnquiry_addCI(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_TCFP_GENERAL_ENQUIRY_ADD_CI), By.id(txt_TCFP_GENERAL_ENQUIRY_ADD_CI),  dropdownName);

    }
    public void selectAllSelectGroup(DataTable ddValue) {
        List<List<String>> ddValues = ddValue.asLists(String.class);
        for (int i = 1; i < ddValues.size(); i++) {
            System.out.println("Select group value is: " + ddValues.get(i).get(0));
            selectTCFP_addUser_selectGroup(ddValues.get(i).get(0));
            wait(500);
        }
    }
    public void enterTCFP_addUser_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_TCFP_ADD_USER_REQUEST), text);
    }
    public void enterTCFP_addUser_accountName(String text){
        PlazaValidation.AccountName = text;
        enterTextByElement(By.id(txt_TCFP_ADD_USER_ACCOUNT_NAME), text);
    }
    public void enterTCFP_addUser_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_TCFP_ADD_USER_DESCRIPION), text);
    }
    public void selectTCFP_addUser_chooseOption(String dropdownName){
        PlazaValidation.ChooseOption = dropdownName;
        selectDropdown(By.id(dd_TCFP_ADD_USER_CHOOSE_OPTION), By.id(txt_TCFP_ADD_USER_CHOOSE_OPTION),  dropdownName);
    }

    public void selectTCFP_addUser_selectGroup(String dropdownName){
        PlazaValidation.SelectGroup = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_TCFP_ADD_USER_SELECT_GROUP), By.id(txt_TCFP_ADD_USER_SELECT_GROUP),  dropdownName);

    }
    public void enterStorageVolume_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_STORAGE_VOLUME_REQUEST), text);
    }
    public void enterStorageVolume_source_WWN(String text){
        PlazaValidation.SourceWwn = text;
        enterTextByElement(By.id(txt_STORAGE_VOLUME_SOURCE_WWN), text);
    }
    public void enterStorageVolume_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_STORAGE_VOLUME_DESCRIPTION), text);
    }
    public void enterStorageVolume_dateTime(String text){
        PlazaValidation.DateTime = text;
        enterTextByElement(By.id(txt_STORAGE_VOLUME_DATE_TIME), text);
    }
    public void selectStorageVolume_chooseOption(String dropdownName){
        PlazaValidation.ChooseOption = dropdownName;
        selectDropdown(By.id(dd_STORAGE_VOLUME_CHOOSE_OPTION), By.id(txt_STORAGE_VOLUME_CHOOSE_OPTION),  dropdownName);
    }
    public void selectMegadisc_add_user_requested_person(String dropdownName){
        PlazaValidation.RequestedPerson = dropdownName;
        selectDropdownByTagNameDiv(By.id(dd_MEGADISC_ADD_USER_REQUESTED_PERSON), By.id(txt_MEGADISC_ADD_USER_REQUESTED_PERSON),   dropdownName);
    }

    public void selectMegadisc_add_user_select_group(String dropdownName){
        PlazaValidation.SelectGroup = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_MEGADISC_ADD_USER_SELECT_GROUP), By.id(txt_MEGADISC_ADD_USER_SELECT_GROUP),  dropdownName);

    }

    public void enterMegadisc_add_user_account_name(String text){
        PlazaValidation.AccountName = text;
        enterTextByElement(By.id(txt_MEGADISC_ADD_USER_ACCOUNT_NAME), text);
    }

    public void enterMegadisc_add_user_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_MEGADISC_ADD_USER_REQUEST), text);
    }

    public void enterManagedvoice_delivery_date(String text){
        enterTextByElement(By.id(txt_MANAGED_VOICE_DELIVERY_DATE), text);
    }

    public void enterManagedvoice_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_MANAGED_VOICE_DESCRIPTION), text);
    }

    public void enterManagedvoice_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_MANAGED_VOICE_REQUEST), text);
    }

    public void enterItfi_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_IT_FI_DESCRIPTION), text);
    }

    public void enterItfi_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_IT_FI_REQUEST), text);
    }

    public void enterEbill_account(String text){
        PlazaValidation.AccountName = text;
        enterTextByElement(By.id(txt_EBILL_ACCOUNT), text);
    }

    public void enterEbill_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_EBILL_DESCRIPTION), text);
    }

    public void enterEbill_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_EBILL_REQUEST), text);
    }

    public void addCi(String id, String xPath, String CiName ){
        clickElementById(id);
        enterTextByElement(By.xpath(xPath), CiName);
        wait(1000);
        WebElement element=driver.switchTo().activeElement();
        element.sendKeys(Keys.ENTER);
        wait(1000);
    }

    public void selectCews_add_ci(String CiName){
        PlazaValidation.System = CiName;
        PlazaValidation.CI = CiName;
       addCi(dd_OCC_CI, txt_ADD_CI_TEXT_BOX, CiName);

    }
    public void select_add_ci(String dropdownName){
        PlazaValidation.System = dropdownName;
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_CEWS_ADD_CI), By.id(txt_CEWS_ADD_CI),  dropdownName);

    }

    public void enterCews_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_CEWS_DESCRIPTION), text);
    }

    public void enterCews_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_CEWS_REQUEST), text);
    }

    public void selectOperatingSystem_manual_os_patching_add_ci(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_OPERATING_SYSTEM_MANUAL_OS_PATCHING_ADD_CI), By.id(txt_OPERATING_SYSTEM_MANUAL_OS_PATCHING_ADD_CI),  dropdownName);

    }

    public void enterOperatingSystem_manual_os_patching_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_OPERATING_SYSTEM_MANUAL_OS_PATCHING_DESCRIPTION), text);
    }

    public void enterOperatingSystem_manual_os_patching_H2(String text){
        PlazaValidation.H2Name = text;
        enterTextByElement(By.id(txt_OPERATING_SYSTEM_MANUAL_OS_PATCHING_H2), text);
    }

    public void enterOperatingSystem_manual_os_patching_plan(String text){
        PlazaValidation.MonthlyPatching = text;
        enterTextByElement(By.id(txt_OPERATING_SYSTEM_MANUAL_OS_PATCHING_PLAN), text);
    }

    public void enterOperatingSystem_manual_os_patching_end_date(String text){
        PlazaValidation.PlannedEndDate = text;
        enterTextByElement(By.id(txt_OPERATING_SYSTEM_MANUAL_OS_PATCHING_END_DATE), text);
    }

    public void enterOperatingSystem_manual_os_patching_start_date(String text){
        PlazaValidation.PlannedStartDate = text;
        enterTextByElement(By.id(txt_OPERATING_SYSTEM_MANUAL_OS_PATCHING_START_DATE), text);
    }

    public void enterOperatingSystem_manual_os_patching_wbs_code(String text){
        PlazaValidation.WbsCodeField = text;
        enterTextByElement(By.id(txt_OPERATING_SYSTEM_MANUAL_OS_PATCHING_WBS_CODE), text);
    }

    public void enterOperatingSystem_manual_os_patching_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_OPERATING_SYSTEM_MANUAL_OS_PATCHING_REQUEST), text);
    }

    public void enterOperatingSystem_change_from_auto_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_OPERATING_SYSTEM_CHANGE_FROM_AUTO_DESCRIPTION), text);
    }

    public void enterOperatingSystem_change_from_auto_justification(String text){
        PlazaValidation.Justification = text;
        enterTextByElement(By.id(txt_OPERATING_SYSTEM_CHANGE_FROM_AUTO_JUSTIFICATION), text);
    }

    public void enterOperatingSystem_change_from_auto_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_OPERATING_SYSTEM_CHANGE_FROM_AUTO_REQUEST), text);
    }

    public void enterOperatingSystem_change_from_auto_plan(String text){
        PlazaValidation.MonthlyPatching = text;
        enterTextByElement(By.id(txt_OPERATING_SYSTEM_CHANGE_FROM_AUTO_PLAN), text);
    }

    public void clickCommitment_change_from_auto(){
        clickElement(By.id(chkbx_OPERATING_SYSTEM_CHANGE_FROM_AUTO_COMMITMENT));
    }

    public void enterOperatingSystem_account_management_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_OPERATING_SYSTEM_ACCOUNT_MANAGEMENT_DESCRIPTION), text);
    }

    public void enterOperatingSystem_account_management_account_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_OPERATING_SYSTEM_ACCOUNT_MANAGEMENT_REQUEST), text);
    }

    public void enterOperatingSystem_account_management_account_name(String text){
        PlazaValidation.AccountName = text;
        enterTextByElement(By.id(txt_OPERATING_SYSTEM_ACCOUNT_MANAGEMENT_ACCOUNT_NAME), text);
    }

    public void enterOperatingSystem_access_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_OPERATING_SYSTEM_ACCESS_DESCRIPTION), text);
    }

    public void enterOperatingSystem_access_justification(String text){
        PlazaValidation.Justification = text;
        enterTextByElement(By.id(txt_OPERATING_SYSTEM_ACCESS_JUSTIFICATION), text);
    }

    public void enterOperatingSystem_access_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_OPERATING_SYSTEM_ACCESS_REQUEST), text);
    }

    public void enterNetworkSecurity_switch_port_config_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_SWITCH_PORT_CONFIG_DESCRIPTION), text);
    }

    public void enterNetworkSecurity_switch_port_config_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_SWITCH_PORT_CONFIG_REQUEST), text);
    }

    public void enterNetworkSecurity_remote_access_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_REMOTE_ACCESS_DESCRIPTION), text);
    }

    public void enterNetworkSecurity_remote_access_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_REMOTE_ACCESS_REQUEST), text);
    }

    public void enterNetworkSecurity_proxy_surf_proxy_whitelisting_h2_name(String text){
        PlazaValidation.H2Name = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_PROXY_SURF_PROXY_SLOW_WHITELISTING_H2_NAME), text);
    }

    public void enterNetworkSecurity_proxy_surf_proxy_whitelisting_target_url(String text){
        PlazaValidation.TargetUrl = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_PROXY_SURF_PROXY_SLOW_WHITELISTING_TARGET_URL), text);
    }


    public void enterStorageExport_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_STORAGE_EXPORT_REQUEST), text);
    }
    public void enterStorageExport_source_WWN(String text){
        PlazaValidation.SourceWwn = text;
        enterTextByElement(By.id(txt_STORAGE_EXPORT_SOURCE_WWN), text);
    }
    public void enterStorageExport_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_STORAGE_EXPORT_DESCRIPTION), text);
    }
    public void enterStorageExport_dateTime(String text){
        PlazaValidation.DateTime = text;
        enterTextByElement(By.id(txt_STORAGE_EXPORT_DATE_TIME), text);
    }
    public void selectStorageExport_SourceCI(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_STORAGE_EXPORT_SOURCE_CI), By.id(txt_STORAGE_EXPORT_SOURCE_CI),  dropdownName);
    }

    public void selectStorageExport_TargetCI(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_STORAGE_EXPORT_TARGET_CI), By.id(txt_STORAGE_EXPORT_TARGET_CI),  dropdownName);
    }
    public void enterStorageConfigure_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_STORAGE_CONFIGURE_REQUEST), text);
    }
    public void enterStorageConfigure_Network_VLAN(String text){
        PlazaValidation.NetworkVlan = text;
        enterTextByElement(By.id(txt_STORAGE_CONFIGURE_NETWORK_VLAN), text);
    }
    public void enterStorageConfigure_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_STORAGE_CONFIGURE_DESCRIPTION), text);
    }
    public void selectStorageConfigure_trunkCI(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_STORAGE_CONFIGURE_TRUNK_CI), By.id(txt_STORAGE_CONFIGURE_TRUNK_CI),  dropdownName);
    }

    public String getPlazaMessage(){
        return getTextByElement(By.xpath(GET_PLAZA_MESSAGE));
    }
    public String getPlazaRequestStatus(){
        return getTextByElement(By.xpath(GET_PLAZA_REQUEST_STATUS));

    }
    public void selectNetworkSecurity_proxy_surf_proxy_slow_surfing_sites(String dropdownName){
        PlazaValidation.ServiceWindow = dropdownName;
        PlazaValidation.AccountType = dropdownName;
        PlazaValidation.NewIpNet = dropdownName;
        PlazaValidation.InternalExternalWebsite = dropdownName;
        selectDropdown(By.id(dd_NETWORK_SECURITY_PROXY_SURF_PROXY_SLOW_SURFING_SITES), By.id(txt_NETWORK_SECURITY_PROXY_SURF_PROXY_SLOW_SURFING_SITES),  dropdownName);
    }

    public void enterNetworkSecurity_proxy_surf_proxy_slow_surfing_user_ip(String text){
        PlazaValidation.UserIp = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_PROXY_SURF_PROXY_SLOW_SURFING_USER_IP), text);
    }

    public void enterNetworkSecurity_proxy_surf_proxy_source_ip(String text){
        PlazaValidation.SourceIpAddress = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_PROXY_SURF_PROXY_SOURCE_IP), text);
    }

    public void enterNetworkSecurity_proxy_surf_proxy_date_and_time(String text){
        PlazaValidation.DateTestsPerformed = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_PROXY_SURF_PROXY_DATE_AND_TIME), text);
    }

    public void enterNetworkSecurity_proxy_surf_proxy_ticket_number(String text){
        PlazaValidation.TicketNumber = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_PROXY_SURF_PROXY_TICKET_NUMBER), text);
    }

    public void enterNetworkSecurity_proxy_surf_proxy_settings(String text){
        PlazaValidation.ProxySettings = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_PROXY_SURF_PROXY_SETTINGS), text);
    }

    public void enterNetworkSecurity_proxy_surf_proxy_problem_occure(String text){
        PlazaValidation.ProblemOccure = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_PROXY_SURF_PROXY_PROBLEM_OCCURE), text);
    }

    public void enterNetworkSecurity_proxy_surf_proxy_worked_before(String text){
        PlazaValidation.WorkedBefore = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_PROXY_SURF_PROXY_WORKED_BEFORE), text);
    }

    public void enterNetworkSecurity_proxy_surf_proxy_error_message(String text){
        PlazaValidation.ErrorMessage = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_PROXY_SURF_PROXY_ERROR_MESSAGE), text);
    }

    public void enterNetworkSecurity_proxy_surf_proxy_url(String text){
        PlazaValidation.Url = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_PROXY_SURF_PROXY_URL), text);
    }

    public void selectNetworkSecurity_proxy_reverse_load_balancing(String dropdownName){
        PlazaValidation.LoadBalancingMethod = dropdownName;
        selectDropdown(By.id(dd_NETWORK_SECURITY_PROXY_REVERSE_LOAD_BALANCING_METHOD), By.id(txt_NETWORK_SECURITY_PROXY_REVERSE_LOAD_BALANCING_METHOD),  dropdownName);
    }

    public void selectNetworkSecurity_proxy_reverse_high_availibility(String dropdownName){
        PlazaValidation.HighAvailibility = dropdownName;
        selectDropdown(By.id(dd_NETWORK_SECURITY_PROXY_REVERSE_HIGH_AVAILIBILITY), By.id(txt_NETWORK_SECURITY_PROXY_REVERSE_HIGH_AVAILIBILITY),  dropdownName);
    }

    public void enterNetworkSecurity_proxy_reverse_webserver_address(String text){
        PlazaValidation.WebserverAddress = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_PROXY_REVERSE_WEBSERVER_ADDRESS), text);
    }

    public void selectNetworkSecurity_proxy_reverse_certificate(String dropdownName){
        PlazaValidation.Certificate = dropdownName;
        selectDropdown(By.id(dd_NETWORK_SECURITY_PROXY_REVERSE_CERTIFICATE), By.id(txt_NETWORK_SECURITY_PROXY_REVERSE_CERTIFICATE),  dropdownName);
    }

    public void enterNetworkSecurity_proxy_reverse_protocol_port(String text){
        PlazaValidation.ProtocolPort = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_PROXY_REVERSE_PROTOCOL_PORT), text);
    }

    public void enterNetworkSecurity_proxy_reverse_dns_name(String text){
        PlazaValidation.DnsName = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_PROXY_REVERSE_DNS_NAME), text);
    }

    public void enterNetworkSecurity_proxy_reverse_source_ip(String text){
        PlazaValidation.SourceIpAddress = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_PROXY_REVERSE_SOURCE_IP), text);
    }

    public void enterNetworkSecurity_proxy_general_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_PROXY_GENERAL_DESCRIPTION), text);
    }

    public void enterNetworkSecurity_proxy_general_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_PROXY_GENERAL_REQUEST), text);
    }

    public void enterNetworkSecurity_new_vlan_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_NEW_VLAN_DESCRIPTION), text);
    }

    public void enterNetworkSecurity_new_vlan_purpose(String text){
        PlazaValidation.VlanPurpose = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_NEW_VLAN_PURPOSE), text);
    }

    public void enterNetworkSecurity_new_vlan_number_and_name(String text){
        PlazaValidation.VlanName = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_NEW_NUMBER_AND_NAME), text);
    }

    public void enterNetworkSecurity_new_vlan_ip_net(String text){
        PlazaValidation.IpNet = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_NEW_VLAN_IP_NET), text);
    }

    public void enterNetworkSecurity_new_vlan_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_NEW_VLAN_REQUEST), text);
    }

    public void enterNetworkSecurity_new_switch_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_NEW_SWITCH_DESCRIPTION), text);
    }

    public void enterNetworkSecurity_new_switch_terminal(String text){
        PlazaValidation.TerminalServer = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_TERMINAL_SERVER), text);
    }

    public void enterNetworkSecurity_new_switch_usage(String text){
        PlazaValidation.SwitchUsage = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_NEW_USAGE), text);
    }

    public void enterNetworkSecurity_new_switch_rack(String text){
        PlazaValidation.Rack = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_NEW_SWITCH_RACK), text);
    }

    public void enterNetworkSecurity_new_switch_data_room(String text){
        PlazaValidation.Room = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_NEW_SWITCH_DATA_ROOM), text);
    }

    public void enterNetworkSecurity_new_switch_dc_site(String text){
        PlazaValidation.DcSite = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_NEW_SWITCH_DC_SITE), text);
    }

    public void selectNetworkSecurity_new_switch_network_ci(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_NETWORK_SECURITY_NEW_SWITCH_NETWORK_CI), By.id(txt_NETWORK_SECURITY_NEW_SWITCH_NETWORK_CI),  dropdownName);

    }

    public void enterNetworkSecurity_new_switch_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_NEW_SWITCH_REQUEST), text);
    }

    public void enterNetworkSecurity_load_balancing_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_LOAD_BALANCING_DESCRIPTION), text);
    }

    public void enterNetworkSecurity_load_balancing_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_LOAD_BALANCING_REQUEST), text);
    }

    public void enterNetworkSecurity_lan_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_LAN_DESCRIPTION), text);
    }

    public void enterNetworkSecurity_lan_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_LAN_REQUEST), text);
    }

    public void enterNetworkSecurity_firewall_troubleshoot_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_FIREWALL_TROUBLESHOOT_DESCRIPTION), text);
    }

    public void enterNetworkSecurity_firewall_troubleshoot_date_and_time(String text){
        PlazaValidation.DateTestsPerformed = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_FIREWALL_TROUBLESHOOT_DATE_AND_TIME), text);
    }

    public void enterNetworkSecurity_firewall_troubleshoot_target_ip(String text){
        PlazaValidation.TargetIpAddress = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_FIREWALL_TROUBLESHOOT_TARGET_IP_ADDRESS), text);
    }

    public void enterNetworkSecurity_firewall_troubleshoot_source_id(String text){
        PlazaValidation.SourceIpAddress = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_FIREWALL_TROUBLESHOOT_SOURCE_IP_ADDRESS), text);
    }

    public void enterNetworkSecurity_firewall_troubleshoot_ticket_number(String text){
        PlazaValidation.TicketNumber = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_FIREWALL_TROUBLESHOOT_TICKET_NUMBER), text);
    }

    public void enterNetworkSecurity_firewall_troubleshoot_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_FIREWALL_TROUBLESHOOT_REQUEST), text);
    }

    public void enterNetworkSecurity_firewall_new_change_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_FIREWALL_NEW_CHANGE_DESCRIPTION), text);
    }

    public void enterNetworkSecurity_firewall_new_change_add_ci_multipleValues(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_NETWORK_SECURITY_FIREWALL_NEW_CHANGE_ADD_CI), By.id(txt_NETWORK_SECURITY_FIREWALL_NEW_CHANGE_ADD_CI),  dropdownName);
    }
    public void enterNetworkSecurity_switch_port_add_ci_multipleValues(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_NETWORK_SECURITY_SWITCH_PORT_CONFIG_ADD_CI), By.id(txt_NETWORK_SECURITY_SWITCH_PORT_CONFIG_ADD_CI),  dropdownName);
    }

    public void enterNetworkSecurity_firewall_new_change_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_FIREWALL_NEW_CHANGE_REQUEST), text);
    }

    public void selectNetworkSecurity_firewall_new_change_service_request(String dropdownName){
        PlazaValidation.Glana = dropdownName;
        PlazaValidation.ChooseOption = dropdownName;
        PlazaValidation.OperatingSystem = dropdownName;
        PlazaValidation.SelectRequest = dropdownName;
        PlazaValidation.ServiceRequestName = dropdownName;
        selectDropdown(By.id(dd_NETWORK_SECURITY_FIREWALL_NEW_CHANGE_SERVICE_REQUEST), By.id(txt_NETWORK_SECURITY_FIREWALL_NEW_CHANGE_SERVICE_REQUEST),  dropdownName);

    }

    public void enterNetworkSecurity_add_modify_remove_dns_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_ADD_MODIFY_REMOVE_DESCRIPTION), text);
    }

    public void selectNetworkSecurity_add_modify_remove_dns_scheduled_change(String dropdownName){
        PlazaValidation.Environment = dropdownName;
        PlazaValidation.ServerPlaced = dropdownName;
        PlazaValidation.OperatingSystem = dropdownName;
        PlazaValidation.ExistingIpNet = dropdownName;
        PlazaValidation.Schedule = dropdownName;
        PlazaValidation.ServerConnectivityVerified = dropdownName;
        selectDropdown(By.id(dd_NETWORK_SECURITY_ADD_MODIFY_REMOVE_SCHEDULED_CHANGE), By.id(txt_NETWORK_SECURITY_ADD_MODIFY_REMOVE_SCHEDULED_CHANGE),  dropdownName);

    }

    public void enterNetworkSecurity_add_modify_remove_dns_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_ADD_MODIFY_REMOVE_DNS_REQUEST), text);
        wait(300);
    }


    public void entersNetworkSecurity_add_modify_remove_dns_service_request(String dropdownName){
        PlazaValidation.SelectRequest = dropdownName;
        PlazaValidation.ServiceRequestName = dropdownName;
        selectDropdown(By.id(dd_NETWORK_SECURITY_ADD_MODIFY_REMOVE_DNS_SERVICE_REQUEST_NAME), By.id(txt_NETWORK_SECURITY_ADD_MODIFY_REMOVE_DNS_SERVICE_REQUEST_NAME),  dropdownName);
    }



    public void enterNimbus_skyPointRequest(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_NIMBUS_SKYPOINT_REQUEST), text);
    }
    public void selectNimbus_restoreVm(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_NIMBUS_RESTORE_VM), By.id(txt_NIMBUS_RESTORE_VM),  dropdownName);
    }
    public void enterNimbus_dateToRestoreFrom(String text){
        PlazaValidation.DateTime = text;
        enterTextByElement(By.id(txt_NIMBUS_DATE_TO_RESTORE_FOM), text);
    }
    public void enterNimbus_roleApproversAccount(String text){
        PlazaValidation.ApproverAccount = text;
        enterTextByElement(By.id(txt_NIMBUS_ROLE_APPROVERS_ACCOUNT), text);
    }
    public void enterNimbus_roleUsersAccount(String text){
        PlazaValidation.UserAccount = text;
        enterTextByElement(By.id(txt_NIMBUS_ROLE_USERS_ACCOUNT), text);
    }
    public void enterNimbus_CmdbAssigned(String text){
        PlazaValidation.CmdbAssigned = text;
        enterTextByElement(By.id(txt_NIMBUS_CMDB_ASSIGNED), text);
    }
    public void enterNimbus_cmdbLocal(String text){
        PlazaValidation.CmdbLocal = text;
        enterTextByElement(By.id(txt_NIMBUS_CMDB_LOCAL), text);
    }
    public void enterNimbus_h2Hid(String text){
        PlazaValidation.H2Name = text;
        enterTextByElement(By.id(txt_NIMBUS_H2_HID), text);
    }
    public void selectNimbus_targetCountries(String dropdownName){
        PlazaValidation.TargetCountries = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_NIMBUS_TARGET_COUNTRIES), By.id(txt_NIMBUS_TARGET_COUNTRIES),  dropdownName);
    }
    public void selectNimbus_cloudServices(String dropdownName){
        PlazaValidation.CloudServices = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_NIMBUS_CLOUD_SERVICES), By.id(txt_NIMBUS_CLOUD_SERVICES),  dropdownName);
    }
    public void enterNimbus_frontSideNetworkInfo(String text){
        PlazaValidation.FrontsideNetworkInformation = text;
        enterTextByElement(By.id(txt_FRONTSIDE_NETWORK_INFO), text);
    }
    public void enterNimbus_mgmtNetworkInfo(String text){
        PlazaValidation.MgmtNetworkInformation = text;
        enterTextByElement(By.id(txt_MGMT_NETWORK_INFO), text);
    }
    public void enterNimbus_h2NameHid(String text){
        PlazaValidation.H2Name = text;
        enterTextByElement(By.id(txt_NIMBUS_H2_NAME_HID), text);
    }
    public void enterNimbus_serviceWindowDateTime(String text){
        PlazaValidation.DateTime = text;
        enterTextByElement(By.id(txt_NIMBUS_SERVICE_WINDOW_DATE_TIME), text);
    }
    public void selectNimbusExtendDisk_AddCi(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_NIMBUS_EXTEND_DISK_ADD_CI), By.id(txt_NIMBUS_EXTEND_DISK_ADD_CI),  dropdownName);

    }
    public void enterNimbus_volumesDrives(String text){
        PlazaValidation.Drives = text;
        enterTextByElement(By.id(txt_NIMBUS_VOLUMES_DRIVES), text);
    }

    public void enterNimbus_size(String text){
        PlazaValidation.Size = text;
        enterTextByElement(By.id(txt_NIMBUS_SIZE), text);
    }
    public void enterNimbus_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_NIMBUS_DESCRIPTION), text);
    }
    public void selectNimbus_AddCi(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_NIMBUS_ADD_CI), By.id(txt_NIMBUS_ADD_CI),  dropdownName);

    }
    public void selectNimbus_Type(String dropdownName){
        PlazaValidation.Type = dropdownName;
        selectDropdown(By.id(dd_NIMBUS_TYPE), By.id(txt_NIMBUS_TYPE),  dropdownName);
    }
    public void enterNimbus_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_NIMBUS_REQUEST), text);
    }
    public void enterNimbus_descriptionMandatory(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_NIMBUS_DESCRIPTION_MANDATORY), text);
    }

    public void enterMessaging_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_messaging_description), text);
    }
    public void enterCleanMail_senderEmail(String text){
        PlazaValidation.SenderEmailAddress = text;
        enterTextByElement(By.id(txt_CLEAN_MAIL_SENDER_EMAIL), text);
    }
    public void enterCleanMail_receiverEmail(String text){
        PlazaValidation.RecieveEmailAddress = text;
        enterTextByElement(By.id(txt_CLEAN_MAIL_RECEIVER_EMAIL), text);
    }
    public void enterCleanMail_senderDNS(String text){
        PlazaValidation.DnsIpAddress = text;
        enterTextByElement(By.id(txt_CLEAN_MAIL_SENDER_DNS), text);
    }
    public void enterCleanMail_testPerformed(String text){
        PlazaValidation.DateTestsPerformed = text;
        enterTextByElement(By.id(txt_CLEAN_MAIL_TESTS_PERFORMED), text);
    }
    public void enterCleanMail_customerId(String text){
        PlazaValidation.CustomerIdName = text;
        enterTextByElement(By.id(txt_CLEAN_MAIL_CUSTOMER_ID), text);
    }
    public void enterCallGuide_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_CALL_GUIDE_DESCRIPTION), text);
    }
    public void enterCallGuide_customerIdName(String text){
        PlazaValidation.CustomerIdName = text;
        enterTextByElement(By.id(txt_CALL_GUIDE_CUSTOMER_ID_NAME), text);
    }
    public void selectDatabasePerformanceTroubleShooting_AddServerCi(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_DATABASE_PERFORMANCE_TROUBLESHOOTING_SERVER_CI), By.id(txt_DATABASE_PERFORMANCE_TROUBLESHOOTING_SERVER_CI),  dropdownName);

    }
    public void selectDatabasePerformanceTroubleShooting_AddDbCi(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_DATABASE_PERFORMANCE_TROUBLESHOOTING_DB_CI), By.id(txt_DATABASE_PERFORMANCE_TROUBLESHOOTING_DB_CI),  dropdownName);

    }
    public void selectDatabasePerformanceTroubleShooting_databaseType(String dropdownName){
        PlazaValidation.DatabaseType = dropdownName;
        selectDropdown(By.id(dd_DATABASE_PERFORMANCE_TROUBLESHOOTING_DB_TYPE), By.id(txt_DATABASE_PERFORMANCE_TROUBLESHOOTING_DB_TYPE),  dropdownName);
    }

    public void enterDatabasePerformamanceTroubleShooting_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_DATABASE_PERFORMANCE_TROUBLESHOOTING_REQUEST), text);
    }
    public void enterDatabasePerformamanceTroubleShooting_DB_name(String text){
        PlazaValidation.DatabaseName = text;
        enterTextByElement(By.id(txt_DATABASE_PERFORMANCE_TROUBLESHOOTING_DB_NAME), text);
    }
    public void enterDatabasePerformamanceTroubleShooting_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_DATABASE_PERFORMANCE_TROUBLESHOOTING_DESCRIPTION), text);
    }
    public void enterDatabaseConfigureParameter_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_DATABASE_CONFIGURE_PARAMETER_REQUEST), text);
    }
    public void enterDatabaseConfigureParameter_databaseName(String text){
        PlazaValidation.DatabaseName = text;
        enterTextByElement(By.id(txt_DATABASE_CONFIGURE_PARAMETER_DB_NAME), text);
    }
    public void enterDatabaseConfigureParameter_parameters(String text){
        PlazaValidation.Parameters = text;
        enterTextByElement(By.id(txt_DATABASE_CONFIGURE_PARAMETER_PARAMETERS), text);
    }
    public void enterDatabaseConfigureParameter_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_DATABASE_CONFIGURE_PARAMETER_DESCRIPTION), text);
    }
    public void selectDatabaseConfigureParameter_AddCi_multipleValues(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_DATABASE_CONFIGURE_PARAMETER_ADD_CI), By.id(txt_DATABASE_CONFIGURE_PARAMETER_ADD_CI),  dropdownName);

    }
    public void selectDatabaseConfigureParameter_AddDbCi_multipleValues(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_DATABASE_CONFIGURE_PARAMETER_DB_ADD_CI), By.id(txt_DATABASE_CONFIGURE_PARAMETER_DATABASE_ADD_CI),  dropdownName);

    }
    public void selectDatabaseConfigureParameter_databaseType(String dropdownName){
        PlazaValidation.DatabaseType = dropdownName;
        selectDropdown(By.id(dd_DATABASE_CONFIGURE_PARAMETER_DATABASE_TYPE), By.id(txt_DATABASE_CONFIGURE_PARAMETER_DATABASE_TYPE),  dropdownName);
    }
    public void enterDatabaseRequest_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_DATABASE_REQUEST_DESCRIPTION), text);
    }
    public void enterDatabaseRequest_databaseName(String text){
        PlazaValidation.DatabaseName = text;
        enterTextByElement(By.id(txt_DATABASE_REQUEST_DATABASE_NAME), text);
    }
    public void selects_databaseRequest_AddCi_multipleValues(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_DATABASE_REQUEST_ADD_CI), By.id(txt_DATABASE_REQUEST_ADD_CI),  dropdownName);

    }
    public void selects_databaseRequest_AddServerCi_multipleValues(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_DATABASE_REQUEST_ADD_SERVER_CI), By.id(txt_DATABASE_REQUEST_ADD_SERVER_CI),  dropdownName);

    }
    public void selectDatabaseRequest_databaseType(String dropdownName){
        PlazaValidation.DatabaseType = dropdownName;
        selectDropdown(By.id(dd_DATABASE_REQUEST_DATABASE_TYPE), By.id(txt_DATABASE_REQUEST_DATABASE_TYPE),  dropdownName);
    }
    public void enterDatabaseRequest_plannedStartDateTime(String text){
        PlazaValidation.PlannedStartDate = text;
        enterTextByElement(By.id(txt_DATABASE_REQUEST_PLANNED_START_DATE_TIME), text);
    }
    public void selectDatabaseRequest_location(String dropdownName){
        PlazaValidation.Location = dropdownName;
        selectDropdown(By.id(dd_DATABASE_REQUEST_LOCATION), By.id(txt_DATABASE_REQUEST_LOCATION),  dropdownName);
    }
    public void selectDatabaseRequest_chooseAction(String dropdownName){
        PlazaValidation.ChooseAction = dropdownName;
        selectDropdown(By.id(dd_DATABASE_REQUEST_CHOOSE_ACTION), By.id(txt_DATABASE_REQUEST_CHOOSE_ACTION),  dropdownName);
    }
    public void enterDatabaseRequest_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_DATABASE_REQUEST_REQUEST), text);
    }
    public void enterDatabase_defaultTableSpace(String text){
        PlazaValidation.TableSpace = text;
        enterTextByElement(By.id(dd_DATABASE_DEFAULT_TABLE_SPACE), text);
    }
    public void selectDatabase_new_existing_account(String dropdownName){
        PlazaValidation.Ruleset = dropdownName;
        PlazaValidation.NewExistingAccount = dropdownName;
        PlazaValidation.InternalExternalWebsite = dropdownName;
        selectDropdown(By.id(dd_DATABASE_NEW_EXISTING_ACCOUNT), By.id(txt_DATABASE_NEW_EXISTING_ACCOUNT),  dropdownName);
    }
    public void enterDatabase_dnsIp_Address(String text){
        PlazaValidation.DnsIpAddress = text;
        enterTextByElement(By.id(txt_DATABASE_DNS_IP_ADDRESS), text);
    }
    public void selects_database_AddCi_multipleValues(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_ADD_DATABASE_CI), By.id(txt_ADD_DATABASE_CI),  dropdownName);

    }
    public void selects_database_AddServerCi_multipleValues(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_ADD_SERVER_CI), By.id(txt_ADD_SERVER_CI),  dropdownName);

    }
    public void selectDatabaseAccountType(String dropdownName){
        PlazaValidation.AccountType = dropdownName;
        PlazaValidation.TrafficReturnRoutingVerified = dropdownName;
        selectDropdown(By.id(dd_DATABASE_ACCOUNT_TYPE), By.id(txt_DATABASE_ACCOUNT_TYPE),  dropdownName);
    }
    public void enterDatabase_name(String text){
        PlazaValidation.DatabaseName = text;
        enterTextByElement(By.id(txt_DATABASE_NAME), text);
    }
    public void enterDatabase_accountName(String text){
        PlazaValidation.AccountName = text;
        enterTextByElement(By.id(txt_DATABASE_ACCOUNT_NAME), text);
    }public void enterDatabase_permissions(String text){
        PlazaValidation.Permissions = text;
        enterTextByElement(By.id(txt_DATABASE_ACCOUNT_PERMISSIONS), text);
    }public void enterDatabase_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_DATABASE_DESCRIPTION), text);
    }
    public void enterDatabase_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_DATABASE_REQUEST), text);
    }

    public void enterOnSiteServices_Request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_ON_SITE_SERVICES_REQUEST), text);
    }
    public void enterOnSiteServices_dc_site(String text){
        PlazaValidation.DcSite = text;
        enterTextByElement(By.id(txt_ON_SITE_SERVICES_DC_SITE), text);
    }
    public void enterOnSiteServices_Description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_ON_SITE_SERVICES_DESCRIPTION), text);
    }
    public void enterNetworkEquipment_dateFordecommission(String text){
        PlazaValidation.DecommissionDate = text;
        enterTextByElement(By.id(txt_NETWORK_EQUIPMENT_DATE_FOR_DECOMMISSION), text);
    }
    public void selectsAddCi_multipleValues(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_ADD_CI), By.id(txt_ADDCI),  dropdownName);

    }
    public void enterNetworkEquipment_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_NETWORK_EQUIPMENT_REQUEST), text);
    }
    public void enterNetworkEquipment_dc_site(String text){
        PlazaValidation.DcSite = text;
        enterTextByElement(By.id(txt_NETWORK_EQUIPMENT_DC_SITE), text);
    }
    public void enterNetworkEquipment_room(String text){
        PlazaValidation.Room = text;
        enterTextByElement(By.id(txt_NETWORK_EQUIPMENT_ROOM), text);
    }
    public void enterNetworkEquipment_dnsIpAddress(String text){
        PlazaValidation.DnsIpAddress = text;
        enterTextByElement(By.id(txt_NETWORK_EQUIPMENT_DNS_IP_ADRESS), text);
    }
    public void enterNetworkEquipment_delivery(String text){
        PlazaValidation.DeliveryDate = text;
        enterTextByElement(By.id(txt_NETWORK_EQUIPMENT_DELIVERY), text);
    }
    public void enterNetworkEquipment_wbsCode(String text){
        PlazaValidation.WbsCodeField = text;
        enterTextByElement(By.id(txt_NETWORK_EQUIPMENT_WBS_CODE), text);
    }
    public void enterNetworkEquipment_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_NETWORK_EQUIPMENT_DESCRIPTION), text);
    }

    public void enterDataCentre_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_DATA_CENTRE_REQUEST), text);
    }
    public void enterDataCentre_DC_Site(String text){
        PlazaValidation.DcSite = text;
        enterTextByElement(By.id(txt_DATA_CENTRE_DC_SITE), text);
    }
    public void enterDataCentre_Room(String text){
        PlazaValidation.Room = text;
        enterTextByElement(By.id(txt_DATA_CENTRE_ROOM), text);
    }
    public void enterDataCentre_deliveryDate(String text){
        PlazaValidation.DeliveryDate = text;
        enterTextByElement(By.id(txt_DATA_CENTRE__DELIVERY_DATE), text);
    }
    public void enterDataCentre_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_DATA_CENTRE_DESCRIPTION), text);
    }
    public void enterDataCentre_wbsCode(String text){
        PlazaValidation.WbsCodeField = text;
        enterTextByElement(By.id(txt_DATA_CENTRE_WBS_CODE), text);
    }
    public void enterCablingNew_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_CABLING_NEW_REQUEST), text);
    }

    public void enterCablingNew_Room(String text){
        PlazaValidation.Room = text;
        enterTextByElement(By.id(txt_CABLING_NEW_ROOM), text);
    }
    public void enterCablingNew_deliveryDate(String text){
        PlazaValidation.DeliveryDate = text;
        enterTextByElement(By.id(txt_CABLING_NEW_DELIVERY_DATE), text);
    }
    public void enterCablingNew_description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_CABLING_NEW_DESCRIPTION), text);
    }
    public void enterCablingNew_wbsCode(String text){
        PlazaValidation.WbsCodeField = text;
        enterTextByElement(By.id(txt_CABLING_NEW_WBS_CODE), text);
    }
    public String getCIS(){
        String CIs= getAttributeValueById(GET_CIS);
        String CIs2= getTextByID(GET_CIS2);
        System.out.println(CIs2);
        System.out.println(CIs);
        return CIs;
    }
    public void enterBDL_wbsCode(String text){
             PlazaValidation.CI=getCIS();
        PlazaValidation.WbsCodeField=text;
        enterTextByElement(By.id(txt_BDL_WBS_CODE), text);
    }
    public void enterBDL_Description(String text){
        PlazaValidation.Description=text;
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
        PlazaValidation.CI = dropdownName;
        selectDropdownByTagNameDiv(By.id(dd_AT1_CI), By.id(txt_AT1_CI),  dropdownName);
    }


    public void enterBDL_request(String text){
        PlazaValidation.Request=text;
        enterTextByElement(By.id(txt_BDL_REQUEST), text);
    }

    public void enterRestore_Files(String text){
        PlazaValidation.RestoreFiles=text;
        enterTextByElement(By.id(txt_RESTORE_FILES), text);
    }

    public void enterRestore_Ci_Unc(String text){
        PlazaValidation.UncLocalPath=text;
        enterTextByElement(By.id(txt_RESTORE_CI_UNC), text);
    }


    public void enterBackUpDateTime(String text){
        PlazaValidation.DateTime=text;
        enterTextByElement(By.id(txt_BACK_UP_DATE_TIME), text);
    }

    public void enterRetentionPeriod(String text){
        PlazaValidation.RetentionPeriod = text;
        enterTextByElement(By.id(txt_RETENTION_PERIOD), text);
    }
    public void enterIncludeCI(String text){
        PlazaValidation.UncLocalPath= text;
        PlazaValidation.IncludeCI= text;
        enterTextByElement(By.id(txt_INCLUDE_CI), text);
    }

    public void clickAddAttachment(){
        clickElement(By.xpath(btn_ADD_ATTACHMENT));
    }

    public void clickAddSecondAttachment(){
        clickElement(By.xpath(btn_ADD_SECOND_ATTACHMENT));
    }

    public void selectsAddCi_back_up(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_BACK_UP_ADD_CI), By.id(txt_BACK_UP_ADD_CI),  dropdownName);

    }

    public void enterDescription_Reschedule(String text){
        PlazaValidation.Description=text;
        enterTextByElement(By.id(txt_Description), text);
    }
    public void enterUnc_Local(String text){
        PlazaValidation.UncLocalPath=text;
        enterTextByElement(By.id(txt_UNC_LOCAL_PATH), text);
    }
    public void enterSchedule(String text){
        PlazaValidation.Schedule=text;
        enterTextByElement(By.id(txt_NEW_SCHEDULE), text);
    }

    public void enterReschedule_request(String text){
        PlazaValidation.Request=text;
        enterTextByElement(By.id(txt_RESCHEDULE_REQUEST), text);
    }

    public void enterPhone(String text){
        PlazaValidation.Phone=text;
        enterTextByElement(By.id(txt_PHONE), text);
    }


    public void enterEmail(String text){
        PlazaValidation.Email=text;
        enterTextByElement(By.id(txt_EMAIL), text);
    }


    public void enterName(String text){
        PlazaValidation.Name=text;
        enterTextByElement(By.id(txt_NAME), text);
    }
    public void clickContact(){
        clickElement(By.id(chkbx_CONTACT));
    }
    public void clickNameNotFound(){
        clickElement(By.id(chkbx_NAME_NOT_FOUND));
    }
    public void enterBCPP_Description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_BCPP_DESCRIPTION), text);
    }
    public void selectsAddCi(String dropdownName){
        selectDropdown(By.id(dd_ADDCI), By.id(txt_ADD_CI),  dropdownName);
    }

    public void selectBCPP_Environment(String dropdownName){
        PlazaValidation.Environment=dropdownName;
        PlazaValidation.UrlFilter = dropdownName;
        selectDropdown(By.id(dd_BCPP_ENVIRONMENT), By.id(txt_BCPP_ENVIRONMENT),  dropdownName);
    }
    public void enterC2B_BCPP_Request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_BCPP_REQUEST_ID), text);
    }
    public void enterC2B_service_Description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_C2B_SERVICE_DESCRIPTION), text);
    }

    public void enterC2B_serviceRequest(String text){
        PlazaValidation.ServiceRequestName = text;
        enterTextByElement(By.id(txt_C2B_SERVICE_REQUEST_ID), text);
    }
    public void enterC2B_general_Description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_C2B_GENERAL_DESCRIPTION), text);
    }


    public void enterC2B_Description(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_C2B_DESCRIPTION), text);
    }


    public void enterC2B_Request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_C2B_REQUEST_ID), text);
    }
    public void selectCRMSystemDropdown(String dropdownName){
            PlazaValidation.System = dropdownName;

            selectDropdownByTagNameDiv(By.id(dd_CRM_SYSTEM), By.id(txt_CRM_SYSTEM), dropdownName);
//        WebElement searchBox=findElement(By.id(dd_CRM_SYSTEM));
//        searchBox.click();
//        findElement(By.id("s2id_autogen18_search")).sendKeys(dropdownName);
//        wait(2000);
//        findElement(By.id("s2id_autogen18_search")).sendKeys(Keys.ARROW_DOWN);
//        findElement(By.id("s2id_autogen18_search")).sendKeys(Keys.ENTER);
    }
    public void enterCRMRequest(String text){
        PlazaValidation.Request=text;
        enterTextByElement(By.id(txt_CRM_REQUEST_ID), text);
    }
    public void enterCRMDescription(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_CRM_DESCRIPTION), text);
    }

    public void enterCRMPlannedStart(String text){
        PlazaValidation.PlannedStartDate = text;
        enterTextByElement(By.id(txt_CRM_PLANNED_START), text);
    }
    public void enterCRMPlannedEnd(String text){
        PlazaValidation.PlannedEndDate = text;
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
        wait(1000);

    }

    public void clickPlazaRequestNum(){
        clickElement(By.id(txt_PLAZA_REQUEST_NUM_ID));
    }


    public String getPlazaRequestNum(){
        String PlazaRequestId=getTextByID(txt_PLAZA_REQUEST_NUM_ID);
        CommonUtils.plazaRequestID=PlazaRequestId;
        System.out.println("Plaza request ID is  : " + PlazaRequestId);
        return PlazaRequestId;
    }

    public void clickOrder(){
        clickElement(By.id(btn_ORDER));
    }

    public void enterAdditionalComments(String text){
        PlazaValidation.AdditionalComments = text;
        enterTextByElement(By.id(txt_ADDITIONAL_COMMENTS), text);
    }

    public void enterDescription(String text){
        PlazaValidation.Description = text;
        enterTextByElement(By.id(txt_DESCRIPTION), text);
    }

    public void enterPlannedStart(String text){
        PlazaValidation.PlannedStartDate = text;
        enterTextByElement(By.id(txt_PLANNED_START), text);
    }
    public void enterPlannedEnd(String text){
        PlazaValidation.PlannedEndDate = text;
        enterTextByElement(By.id(txt_PLANNED_END), text);
    }

    public String getTitle_plazaHomePage(){
        String title= driver.getTitle();
        System.out.println("Plaza Homepage title is : "+title);
        return title;

    }

    public void selectDropdownWithMultipleValues(By Element, By dropdownValuesListID, String dropdownValue){
        clickElement(Element);
        wait(300);
        driver.findElement(Element).sendKeys(dropdownValue);
        wait(300);
        driver.findElement((dropdownValuesListID)).findElements(By.tagName("div")).stream().filter(element -> element.getText().trim().equals(dropdownValue)).findFirst().orElse(null).click();

    }
    public void selectDropdown(By Element, By dropdownValuesListID, String dropdownValue){
        clickElement(Element);
        wait(300);
        driver.findElement((dropdownValuesListID)).findElements(By.tagName("li")).stream().filter(element -> element.getText().trim().equals(dropdownValue)).findFirst().orElse(null).click();

    }
    public void selectDropdownByTagNameDiv(By Element, By dropdownValuesListID, String dropdownValue){
        clickElement(Element);
        wait(700);
        driver.findElement((dropdownValuesListID)).findElements(By.tagName("div")).stream().filter(element -> element.getText().trim().equals(dropdownValue)).findFirst().orElse(null).click();

    }
    public void selectDropdownByTagNameSpan(By Element, By dropdownValuesListID, String dropdownValue){
        clickElement(Element);
        wait(700);
        driver.findElement((dropdownValuesListID)).findElements(By.tagName("span")).stream().filter(element -> element.getText().trim().equals(dropdownValue)).findFirst().orElse(null).click();

    }
    public void selectRoleDropdown(String dropdownName){
        PlazaValidation.Role = dropdownName;
        selectDropdown(By.id(dd_ROLE_ID), By.id(txt_ROLE_ID), dropdownName);
        clickEscButton();

    }
    public void selectSystemDropdown(String dropdownName)
    {
        PlazaValidation.System = dropdownName;
        clickElement(By.id(dd_SYSTEM_ID));
        WebElement Element=findElement(By.xpath("//input[@type='text']"));
        Element.sendKeys(dropdownName);
         wait(700);
       // Element.sendKeys(Keys.ARROW_DOWN);
        Element.sendKeys(Keys.ENTER);
        Element.sendKeys(Keys.TAB);
        wait(1000);
        //selectDropdownByTagNameDiv(By.id(dd_SYSTEM_ID), By.id("select2-results-13"),  dropdownName);
    }
    public void selectDropdownByEnterText(String DropDownID, String DropdownValue){
        clickElement(By.id(DropDownID));
        WebElement Element=findElement(By.xpath("//input[@type='text']"));
        Element.sendKeys(DropdownValue);
        wait(700);
        // Element.sendKeys(Keys.ARROW_DOWN);
        Element.sendKeys(Keys.ENTER);
        wait(700);
    }


    public void enterRequest(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_REQUEST_ID), text);

    }
    public void selectServiceRequestName(String dropdownName){
        PlazaValidation.Issue = dropdownName;
        PlazaValidation.ServiceRequestName = dropdownName;
        PlazaValidation.System = dropdownName;
        selectDropdown(By.id(dd_SERVICE_REQUEST_NAME_ID), By.id(txt_SERVICE_REQUEST_NAME_ID), dropdownName);

    }

    public void enterC2B_generalRequest(String text){
        PlazaValidation.GeneralRequest = text;
        enterTextByElement(By.id(txt_C2B_GENERAL_REQUEST_ID), text);
    }


    public void select_selectRequest(String dropdownName){
        PlazaValidation.DualSiteServices = dropdownName;
        PlazaValidation.SmtpRelay = dropdownName;
        PlazaValidation.SelectRequest = dropdownName;
        PlazaValidation.DatabaseType = dropdownName;
        selectDropdown(By.id(dd_SELECT_REQUEST_ID), By.id(txt_SELECT_REQUEST_ID),  dropdownName);
    }

    public void selectC2B_serviceEnvironment(String dropdownName){
        PlazaValidation.Environment = dropdownName;
        selectDropdown(By.id(dd_C2B_SERVICE_ENVIRONMENT), By.id(txt_C2B_SERVICE_ENVIRONMENT),  dropdownName);
    }

    public void selectC2B_GeneralEnvironment(String dropdownName){
        PlazaValidation.Environment = dropdownName;
        selectDropdownByTagNameDiv(By.id(dd_C2B_GENERAL_ENVIRONMENT), By.id(txt_C2B_GENERAL_ENVIRONMENT),  dropdownName);
    }

    public void selectEnvironment(String dropdownName){
        PlazaValidation.Environment = dropdownName;
        selectDropdownByTagNameDiv(By.id(dd_ENVIRONMENT), By.id(txt_ENVIRONMENT),  dropdownName);
    }

    public void enterCablingNew_DC_Site(String text){
        PlazaValidation.DcSite = text;
        enterTextByElement(By.id(txt_CABLING_NEW_DC_SITE), text);
    }

    public void selectAT2Ci(String dropdownName){
        selectDropdownByTagNameDiv(By.id(dd_AT2_CI), By.id(txt_AT2_CI),  dropdownName);
    }
    public void selectAT3Ci(String dropdownName){
        selectDropdownByTagNameDiv(By.id(dd_AT3_CI), By.id(txt_AT3_CI),  dropdownName);
    }
    public void selectProdCi(String dropdownName){
        selectDropdownByTagNameDiv(By.id(dd_PROD_CI), By.id(txt_PROD_CI),  dropdownName);
    }





}

