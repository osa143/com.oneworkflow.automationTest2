package pageObjects.plaza;

import cucumber.api.java8.Pl;
import io.cucumber.datatable.DataTable;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import pageObjects.BasePage;
import utils.CommonUtils;
import utils.PlazaValidation;

import java.security.Key;
import java.util.ArrayList;
import java.util.List;

import static utils.CommonUtils.OpTicket_plaza;
import static utils.CommonUtils.opTicket;

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
    public static final String txt_CALL_GUIDE_CUSTOMER_ID_NAME= "sp_formfield_customer_id";
    private static final String txt_CALL_GUIDE_DESCRIPTION= "sp_formfield_description";
    private static final String txt_CLEAN_MAIL_CUSTOMER_ID= "sp_formfield_custome_id";
    private static final String txt_CLEAN_MAIL_TESTS_PERFORMED= "sp_formfield_date_time_cet";
    private static final String txt_CLEAN_MAIL_SENDER_EMAIL= "sp_formfield_email_address";
    private static final String txt_CLEAN_MAIL_RECEIVER_EMAIL="sp_formfield_reciever_email";
    private static final String txt_CLEAN_MAIL_SENDER_DNS= "sp_formfield_sender_dns";
    private static final String txt_messaging_description= "sp_formfield_descrption";
    private static final String txt_NIMBUS_REQUEST= "sp_formfield_request_nimbus";
    private static final String dd_NIMBUS_ADD_CI= "s2id_autogen17";
    private static final String dd_NIMBUS_TYPE= "select2-chosen-13";
    private static final String txt_NIMBUS_DESCRIPTION_MANDATORY= "sp_formfield_description_mandatory";
    private static final String txt_NIMBUS_DESCRIPTION= "sp_formfield_nimbus_description";
    private static final String txt_NIMBUS_SIZE= "sp_formfield_expand_backup_size";
    private static final String txt_NIMBUS_VOLUMES_DRIVES= "sp_formfield_extend_disk_volume";
    private static final String dd_NIMBUS_EXTEND_DISK_ADD_CI= "s2id_autogen18";
    private static final String txt_NIMBUS_SERVICE_WINDOW_DATE_TIME= "sp_formfield_hot_add_service_window";
    private static final String txt_NIMBUS_H2_NAME_HID= "sp_formfield_modify_onboarding_hid";
    private static final String txt_FRONTSIDE_NETWORK_INFO= "sp_formfield_network_onboard_frontside";
    private static final String txt_MGMT_NETWORK_INFO= "sp_formfield_network_onboard_mgmt";
    private static final String dd_NIMBUS_CLOUD_SERVICES= "s2id_autogen19";
    private static final String dd_NIMBUS_TARGET_COUNTRIES= "s2id_autogen21";
    private static final String txt_NIMBUS_ROLE_APPROVERS_ACCOUNT= "sp_formfield_onboard_skypoint_role";
    private static final String txt_NIMBUS_ROLE_USERS_ACCOUNT= "sp_formfield_onboard_skypoint_role_user";
    private static final String txt_NIMBUS_CMDB_ASSIGNED= "sp_formfield_onboard_skypoint_cmdb";
    private static final String txt_NIMBUS_CMDB_LOCAL= "sp_formfield_onboard_skypoint_cmdb_local";
    private static final String txt_NIMBUS_H2_HID="sp_formfield_onboard_skypoint_hid";
    private static final String txt_NIMBUS_DATE_TO_RESTORE_FOM= "sp_formfield_restore_vm_date";
    private static final String dd_NIMBUS_RESTORE_VM= "s2id_autogen20";
    private static final String txt_NIMBUS_SKYPOINT_REQUEST= "sp_formfield_skypoint_request";
    public static final String txt_NETWORK_SECURITY_ADD_MODIFY_REMOVE_DNS_SERVICE_REQUEST_NAME= "select2-chosen-11";
    public static final String txt_NETWORK_SECURITY_ADD_MODIFY_REMOVE_DNS_REQUEST= "sp_formfield_sr105_v_request";
    public static final String dd_NETWORK_SECURITY_ADD_MODIFY_REMOVE_SCHEDULED_CHANGE= "select2-chosen-12";
    public static final String txt_NETWORK_SECURITY_ADD_MODIFY_REMOVE_DESCRIPTION= "sp_formfield_sr105_v_description";
    public static final String dd_NETWORK_SECURITY_FIREWALL_NEW_CHANGE_SERVICE_REQUEST= "select2-chosen-11";
    public static final String txt_NETWORK_SECURITY_FIREWALL_NEW_CHANGE_REQUEST= "sp_formfield_sr114_v_request";
    public static final String dd_NETWORK_SECURITY_FIREWALL_NEW_CHANGE_ADD_CI= "s2id_autogen16";
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
    private static final String dd_NETWORK_SECURITY_NEW_SWITCH_NETWORK_CI= "s2id_autogen17";
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
    private static final String dd_NETWORK_SECURITY_PROXY_REVERSE_CERTIFICATE= "s2id_autogen18";
    private static final String txt_NETWORK_SECURITY_PROXY_REVERSE_WEBSERVER_ADDRESS= "sp_formfield_sr35_v_webserver";
    private static final String dd_NETWORK_SECURITY_PROXY_REVERSE_HIGH_AVAILIBILITY= "select2-chosen-15";
    private static final String dd_NETWORK_SECURITY_PROXY_REVERSE_LOAD_BALANCING_METHOD= "s2id_autogen19";
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
    private static final String dd_STORAGE_CONFIGURE_TRUNK_CI= "s2id_autogen13";
    private static final String txt_STORAGE_CONFIGURE_DESCRIPTION= "sp_formfield_sr59_v_description";
    private static final String txt_STORAGE_EXPORT_REQUEST= "sp_formfield_sr63_v_request";
    private static final String dd_STORAGE_EXPORT_SOURCE_CI= "s2id_autogen13";
    private static final String txt_STORAGE_EXPORT_SOURCE_WWN= "sp_formfield_sr63_v_source_wwn";
    private static final String txt_STORAGE_EXPORT_DATE_TIME= "sp_formfield_sr63_v_date";
    private static final String dd_STORAGE_EXPORT_TARGET_CI= "s2id_autogen14";
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
    private static final String dd_OPERATING_SYSTEM_MANUAL_OS_PATCHING_ADD_CI= "s2id_autogen15";
    private static final String txt_CEWS_REQUEST= "sp_formfield_sr65_v_request";
    private static final String txt_CEWS_DESCRIPTION= "sp_formfield_sr65_v_description";
    private static final String txt_CEWS_ADD_CI= "s2id_autogen13";
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
    private static final String txt_STORAGE_VOLUME_CHOOSE_OPTION= "select2-chosen-11";
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
    private static final String txt_TOPCAT_ADD_CI= "s2id_autogen14";
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

    public String getOW_ManualNotification_plaza(){
        return getTextByElement(By.xpath("//*[@id='xba9dcc6fdb3ad7802b3cfc16bf96195f']/div/div/div[2]/div/div/ul/li[1]/div[2]/div/div[2]/p"));
    }


    public String getOW_AttachmentNotification_plaza(){
        String message= getTextByElement(By.xpath("//*[@id='xba9dcc6fdb3ad7802b3cfc16bf96195f']/div/div/div[2]/div/div/ul/li[1]/div[2]/div/div[2]/p"));
        String arr[] = message.split(":");
        String AttachmentMessage= arr[2];
        return AttachmentMessage;
    }
    public void clickPDB_AffectedCountry(String AffectedCountry) {

        driver.findElement((By.id(div_PDB_Affected_COUNTRY))).findElements(By.tagName("span")).stream().filter(element -> element.getText().trim().equals(AffectedCountry)).findFirst().orElse(null).click();
    }
    public void selectSystemNameInHaiti(String dropdownName){
        clickElement(By.id(dd_SYSTEM_NAME_IN_HAITI));
        WebElement Element=findElement(By.id("s2id_autogen12_search"));
        Element.sendKeys(dropdownName);
        wait(1000);
        Element.sendKeys(Keys.ARROW_DOWN);
        Element.sendKeys(Keys.ENTER);

    }
    public String getOW_ManualUpdate(){
        return getTextByElement(By.id(""));
    }
    public void clickPlazaHome(){
        clickElement(By.id(btn_PLAZA_hOME));
    }


    public String getOpTicket_plaza(){
        String ticket= getTextByElement(By.xpath("//*[@id='xba9dcc6fdb3ad7802b3cfc16bf96195f']/div/div/div[2]/div/div/ul/li[1]/div[2]/div/div[2]/p"));
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
        enterTextByElement(By.id("sp_formfield_pdb_affPerDescCheck"), text);
    }

    public void selectNatureAndContent(String text){
        PlazaValidation.NatureAndContent=text;
        selectDropdownWithMultipleValues(By.id("s2id_autogen29"),By.id("s2id_autogen29_results"), text );
    }
    public void selectAffectedPerson(String text){
        PlazaValidation.AffectedPersons=text;
        selectDropdownByTagNameDiv(By.id("select2-chosen-18"),By.id("select2-results-18"), text );
    }
    public void enterDatetime_PDB(String text){
        PlazaValidation.DateTime=text;
        enterTextByElement(By.id("sp_formfield_pdb_eventStartTime"), text);
    }
    public String getServiceArea(){
        return getTextByID("select2-chosen-1");
    }
    public String getService_CreateIncident(){
        return getTextByID("select2-chosen-3");
    }
    public void selectService(String text){
        selectDropdownByTagNameDiv(By.id("select2-chosen-3"), By.id("select2-results-3"), text);;
    }
    public String getManualNotification_plaza(){
        return getTextByElement(By.xpath("//*[@id='xba9dcc6fdb3ad7802b3cfc16bf96195f']/div/div/div[2]/div/div/ul/li[1]/div[2]/div/div[2]/p"));
    }
    public void enterManualNotification_plaza(String text){
        enterTextByElement(By.id("post-input"), text);
    }
    public boolean validateInternalCaseManagementIsOpened(){
        return findElement(By.xpath("//*[@id='x0f05cdeddbe193846734f1eabf961984']/form/table/tbody/tr/td[1]/div/h1")).isDisplayed();
    }
    public void enterSearchAndSelectIncident(String text){
        WebElement searchBox=findElement(By.xpath("//*[@name='q']"));
        searchBox.sendKeys(text);
        wait(2000);
        searchBox.sendKeys(Keys.ARROW_DOWN);
        searchBox.sendKeys(Keys.ENTER);
    }

    public void enterRequest_LinuxUnixServer(String text){
        enterTextByElement(By.id("sp_formfield_sr_gen_v_request"), text);
    }

    public void selectCI_LinuxUnixServer(String text){
        selectDropdownWithMultipleValues(By.id("s2id_autogen25"),By.id("s2id_autogen25_results"), text );
    }


    public void enterDescription_LinuxUnixServer(String text){
        enterTextByElement(By.id("sp_formfield_sr_gen_v_description"), text);
    }
    public void selectServiceArea(String text){
        selectDropdownByTagNameDiv(By.id("select2-chosen-1"), By.id("select2-results-1"), text);
    }

    public void selectTypeOfServer(String text){
        selectDropdownByTagNameDiv(By.id("select2-chosen-16"), By.id("select2-results-16"), text);
    }
    public void selectServiceAreaCategory(String text){
        selectDropdownByTagNameDiv(By.id("select2-chosen-2"), By.id("select2-results-2"), text);
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
        selectDropdownWithMultipleValues(By.id(txt_TOPCAT_ADD_CI), By.id("s2id_autogen14_results"),  dropdownName);
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
        selectDropdownWithMultipleValues(By.id(dd_SPAN_CI), By.id("s2id_autogen15_results"),  dropdownName);
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
        selectDropdownByTagNameDiv(By.id(dd_POLLUX_ENVIRONMENT), By.id("s2id_autogen14_results"),   dropdownName);
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
        selectDropdownWithMultipleValues(By.id(dd_TCFP_GENERAL_ENQUIRY_ADD_CI), By.id("s2id_autogen16_results"),  dropdownName);

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
        selectDropdown(By.id(dd_TCFP_ADD_USER_CHOOSE_OPTION), By.id("select2-results-12"),  dropdownName);
    }

    public void selectTCFP_addUser_selectGroup(String dropdownName){
        PlazaValidation.SelectGroup = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_TCFP_ADD_USER_SELECT_GROUP), By.id("s2id_autogen15_results"),  dropdownName);

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
        selectDropdown(By.id(txt_STORAGE_VOLUME_CHOOSE_OPTION), By.id("select2-results-11"),  dropdownName);
    }
    public void selectMegadisc_add_user_requested_person(String dropdownName){
        PlazaValidation.RequestedPerson = dropdownName;
        selectDropdownByTagNameDiv(By.id(dd_MEGADISC_ADD_USER_REQUESTED_PERSON), By.id("select2-results-15"),   dropdownName);
    }

    public void selectMegadisc_add_user_select_group(String dropdownName){
        PlazaValidation.SelectGroup = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_MEGADISC_ADD_USER_SELECT_GROUP), By.id("s2id_autogen14_results"),  dropdownName);

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

    public void selectCews_add_ci(String dropdownName){
        PlazaValidation.System = dropdownName;
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(txt_CEWS_ADD_CI), By.id("s2id_autogen13_results"),  dropdownName);

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
        selectDropdownWithMultipleValues(By.id(dd_OPERATING_SYSTEM_MANUAL_OS_PATCHING_ADD_CI), By.id("s2id_autogen15_results"),  dropdownName);

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
        selectDropdownWithMultipleValues(By.id(dd_STORAGE_EXPORT_SOURCE_CI), By.id("s2id_autogen13_results"),  dropdownName);
    }

    public void selectStorageExport_TargetCI(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_STORAGE_EXPORT_TARGET_CI), By.id("s2id_autogen14_results"),  dropdownName);
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
        selectDropdownWithMultipleValues(By.id(dd_STORAGE_CONFIGURE_TRUNK_CI), By.id("s2id_autogen13_results"),  dropdownName);
    }

    public String getPlazaMessage(){
        return getTextByElement(By.xpath("//*[@id='x917f1d33d7230200a9addd173e24d441']/div/div/div[2]/div/div/ul/li[1]/div[2]/div/div[2]/p"));
    }
    public String getPlazaRequestStatus(){
        return getTextByElement(By.xpath("//*[@id='xcc316d33d7230200a9addd173e24d4f5']/div/div[2]/div/div/div[2]/span/div"));

    }
    public void selectNetworkSecurity_proxy_surf_proxy_slow_surfing_sites(String dropdownName){
        PlazaValidation.ServiceWindow = dropdownName;
        PlazaValidation.AccountType = dropdownName;
        PlazaValidation.NewIpNet = dropdownName;
        PlazaValidation.InternalExternalWebsite = dropdownName;
        selectDropdown(By.id(dd_NETWORK_SECURITY_PROXY_SURF_PROXY_SLOW_SURFING_SITES), By.id("select2-results-13"),  dropdownName);
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
        selectDropdown(By.id(dd_NETWORK_SECURITY_PROXY_REVERSE_LOAD_BALANCING_METHOD), By.id("s2id_autogen19_results"),  dropdownName);
    }

    public void selectNetworkSecurity_proxy_reverse_high_availibility(String dropdownName){
        PlazaValidation.HighAvailibility = dropdownName;
        selectDropdown(By.id(dd_NETWORK_SECURITY_PROXY_REVERSE_HIGH_AVAILIBILITY), By.id("select2-results-15"),  dropdownName);
    }

    public void enterNetworkSecurity_proxy_reverse_webserver_address(String text){
        PlazaValidation.WebserverAddress = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_PROXY_REVERSE_WEBSERVER_ADDRESS), text);
    }

    public void selectNetworkSecurity_proxy_reverse_certificate(String dropdownName){
        PlazaValidation.Certificate = dropdownName;
        selectDropdown(By.id(dd_NETWORK_SECURITY_PROXY_REVERSE_CERTIFICATE), By.id("s2id_autogen18_results"),  dropdownName);
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
        selectDropdownWithMultipleValues(By.id(dd_NETWORK_SECURITY_NEW_SWITCH_NETWORK_CI), By.id("s2id_autogen17_results"),  dropdownName);

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
        selectDropdownWithMultipleValues(By.id(dd_NETWORK_SECURITY_FIREWALL_NEW_CHANGE_ADD_CI), By.id("s2id_autogen16_results"),  dropdownName);
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
        selectDropdown(By.id(dd_NETWORK_SECURITY_FIREWALL_NEW_CHANGE_SERVICE_REQUEST), By.id("select2-results-11"),  dropdownName);

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
        selectDropdown(By.id(dd_NETWORK_SECURITY_ADD_MODIFY_REMOVE_SCHEDULED_CHANGE), By.id("select2-results-12"),  dropdownName);

    }

    public void enterNetworkSecurity_add_modify_remove_dns_request(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_NETWORK_SECURITY_ADD_MODIFY_REMOVE_DNS_REQUEST), text);
    }


    public void entersNetworkSecurity_add_modify_remove_dns_service_request(String dropdownName){
        PlazaValidation.SelectRequest = dropdownName;
        PlazaValidation.ServiceRequestName = dropdownName;
        selectDropdown(By.id(txt_NETWORK_SECURITY_ADD_MODIFY_REMOVE_DNS_SERVICE_REQUEST_NAME), By.id("select2-results-11"),  dropdownName);
    }



    public void enterNimbus_skyPointRequest(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_NIMBUS_SKYPOINT_REQUEST), text);
    }
    public void selectNimbus_restoreVm(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_NIMBUS_RESTORE_VM), By.id("s2id_autogen20_results"),  dropdownName);
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
        selectDropdownWithMultipleValues(By.id(dd_NIMBUS_TARGET_COUNTRIES), By.id("s2id_autogen21_results"),  dropdownName);
    }
    public void selectNimbus_cloudServices(String dropdownName){
        PlazaValidation.CloudServices = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_NIMBUS_CLOUD_SERVICES), By.id("s2id_autogen19_results"),  dropdownName);
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
        selectDropdownWithMultipleValues(By.id(dd_NIMBUS_EXTEND_DISK_ADD_CI), By.id("s2id_autogen18_results"),  dropdownName);

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
        selectDropdownWithMultipleValues(By.id(dd_NIMBUS_ADD_CI), By.id("s2id_autogen17_results"),  dropdownName);

    }
    public void selectNimbus_Type(String dropdownName){
        PlazaValidation.Type = dropdownName;
        selectDropdown(By.id(dd_NIMBUS_TYPE), By.id("select2-results-13"),  dropdownName);
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
        selectDropdownWithMultipleValues(By.id(dd_DATABASE_PERFORMANCE_TROUBLESHOOTING_SERVER_CI), By.id("s2id_autogen32_results"),  dropdownName);

    }
    public void selectDatabasePerformanceTroubleShooting_AddDbCi(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_DATABASE_PERFORMANCE_TROUBLESHOOTING_DB_CI), By.id("s2id_autogen33_results"),  dropdownName);

    }
    public void selectDatabasePerformanceTroubleShooting_databaseType(String dropdownName){
        PlazaValidation.DatabaseType = dropdownName;
        selectDropdown(By.id(dd_DATABASE_PERFORMANCE_TROUBLESHOOTING_DB_TYPE), By.id("select2-results-16"),  dropdownName);
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
        selectDropdownWithMultipleValues(By.id(dd_DATABASE_CONFIGURE_PARAMETER_ADD_CI), By.id("s2id_autogen37_results"),  dropdownName);

    }
    public void selectDatabaseConfigureParameter_AddDbCi_multipleValues(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_DATABASE_CONFIGURE_PARAMETER_DB_ADD_CI), By.id("s2id_autogen38_results"),  dropdownName);

    }
    public void selectDatabaseConfigureParameter_databaseType(String dropdownName){
        PlazaValidation.DatabaseType = dropdownName;
        selectDropdown(By.id(dd_DATABASE_CONFIGURE_PARAMETER_DATABASE_TYPE), By.id("select2-results-20"),  dropdownName);
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
        selectDropdownWithMultipleValues(By.id(dd_DATABASE_REQUEST_ADD_CI), By.id("s2id_autogen35_results"),  dropdownName);

    }
    public void selects_databaseRequest_AddServerCi_multipleValues(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_DATABASE_REQUEST_ADD_SERVER_CI), By.id("s2id_autogen34_results"),  dropdownName);

    }
    public void selectDatabaseRequest_databaseType(String dropdownName){
        PlazaValidation.DatabaseType = dropdownName;
        selectDropdown(By.id(dd_DATABASE_REQUEST_DATABASE_TYPE), By.id("select2-results-18"),  dropdownName);
    }
    public void enterDatabaseRequest_plannedStartDateTime(String text){
        PlazaValidation.PlannedStartDate = text;
        enterTextByElement(By.id(txt_DATABASE_REQUEST_PLANNED_START_DATE_TIME), text);
    }
    public void selectDatabaseRequest_location(String dropdownName){
        PlazaValidation.Location = dropdownName;
        selectDropdown(By.id(dd_DATABASE_REQUEST_LOCATION), By.id("select2-results-19"),  dropdownName);
    }
    public void selectDatabaseRequest_chooseAction(String dropdownName){
        PlazaValidation.ChooseAction = dropdownName;
        selectDropdown(By.id(dd_DATABASE_REQUEST_CHOOSE_ACTION), By.id("select2-results-17"),  dropdownName);
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
        selectDropdown(By.id(dd_DATABASE_NEW_EXISTING_ACCOUNT), By.id("select2-results-14"),  dropdownName);
    }
    public void enterDatabase_dnsIp_Address(String text){
        PlazaValidation.DnsIpAddress = text;
        enterTextByElement(By.id(txt_DATABASE_DNS_IP_ADDRESS), text);
    }
    public void selects_database_AddCi_multipleValues(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_ADD_DATABASE_CI), By.id("s2id_autogen23_results"),  dropdownName);

    }
    public void selects_database_AddServerCi_multipleValues(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_ADD_SERVER_CI), By.id("s2id_autogen24_results"),  dropdownName);

    }
    public void selectDatabaseAccountType(String dropdownName){
        PlazaValidation.AccountType = dropdownName;
        PlazaValidation.TrafficReturnRoutingVerified = dropdownName;
        selectDropdown(By.id(dd_DATABASE_ACCOUNT_TYPE), By.id("select2-results-13"),  dropdownName);
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
        selectDropdownWithMultipleValues(By.id(dd_ADD_CI), By.id("s2id_autogen13_results"),  dropdownName);

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
        String CIs= getAttributeValueById("s2id_sp_formfield_sr108_v_at3");
        String CIs2= getTextByID("s2id_sp_formfield_sr108_v_at3");
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
        selectDropdownByTagNameDiv(By.id("s2id_sp_formfield_sr108_v_at1"), By.id("s2id_autogen16_results"),  dropdownName);
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
        clickElement(By.id(btn_ADD_ATTACHMENT));
    }

    public void selectsAddCi_back_up(String dropdownName){
        PlazaValidation.CI = dropdownName;
        selectDropdownWithMultipleValues(By.id(dd_BACK_UP_ADD_CI), By.id("s2id_autogen13_results"),  dropdownName);

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
        selectDropdown(By.id(txt_ADD_CI), By.id("s2id_autogen15_results"),  dropdownName);
    }

    public void selectBCPP_Environment(String dropdownName){
        PlazaValidation.Environment=dropdownName;
        PlazaValidation.UrlFilter = dropdownName;
        selectDropdown(By.id(dd_BCPP_ENVIRONMENT), By.id("select2-results-12"),  dropdownName);
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
        selectDropdown(By.id(dd_CRM_SYSTEM), By.id("select2-results-14"),  dropdownName);
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
        selectDropdown(By.id(dd_ROLE_ID), By.id("select2-results-9"), dropdownName);
        clickEscButton();

    }
    public void selectSystemDropdown(String dropdownName)
    {
        PlazaValidation.System = dropdownName;
        selectDropdownByTagNameDiv(By.id(dd_SYSTEM_ID), By.id("select2-results-13"),  dropdownName);
    }


    public void enterRequest(String text){
        PlazaValidation.Request = text;
        enterTextByElement(By.id(txt_REQUEST_ID), text);
    }
    public void selectServiceRequestName(String dropdownName){
        PlazaValidation.Issue = dropdownName;
        PlazaValidation.ServiceRequestName = dropdownName;
        PlazaValidation.System = dropdownName;
        selectDropdown(By.id(dd_SERVICE_REQUEST_NAME_ID), By.id("select2-results-11"), dropdownName);

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
        selectDropdown(By.id(dd_SELECT_REQUEST_ID), By.id("select2-results-12"),  dropdownName);
    }

    public void selectC2B_serviceEnvironment(String dropdownName){
        PlazaValidation.Environment = dropdownName;
        selectDropdown(By.id(dd_C2B_SERVICE_ENVIRONMENT), By.id("s2id_autogen13_results"),  dropdownName);
    }

    public void selectC2B_GeneralEnvironment(String dropdownName){
        PlazaValidation.Environment = dropdownName;
        selectDropdown(By.id(dd_C2B_GENERAL_ENVIRONMENT), By.id("s2id_autogen16_results"),  dropdownName);
    }

    public void selectEnvironment(String dropdownName){
        PlazaValidation.Environment = dropdownName;
        selectDropdownByTagNameDiv(By.id(dd_ENVIRONMENT), By.id("s2id_autogen15_results"),  dropdownName);
    }

    public void enterCablingNew_DC_Site(String text){
        PlazaValidation.DcSite = text;
        enterTextByElement(By.id(txt_CABLING_NEW_DC_SITE), text);
    }

    public void selectAT2Ci(String dropdownName){
        selectDropdownByTagNameDiv(By.id("s2id_sp_formfield_sr108_v_at2"), By.id("s2id_autogen17_results"),  dropdownName);
    }
    public void selectAT3Ci(String dropdownName){
        selectDropdownByTagNameDiv(By.id("s2id_sp_formfield_sr108_v_at3"), By.id("s2id_autogen18_results"),  dropdownName);
    }
    public void selectProdCi(String dropdownName){
        selectDropdownByTagNameDiv(By.id("s2id_autogen15"), By.id("s2id_autogen15_results"),  dropdownName);
    }





}

