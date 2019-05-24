package pageObjects;
import org.openqa.selenium.By;

public class OWF_TroubleEventPage extends BasePage {

    private static final String txtCUST_REMAINING_SLA_ID = "arid_WIN_0_600001303";
    private static final String txtOLA_TARGET_TIME_ID = "arid_WIN_0_600001308";
    private static final String txtDESCRIPTION_ID = "arid_WIN_0_777031007";
    private static final String txtWO_STATUS_ID = "arid_WIN_0_600001053";
    private static final String txtREJECTION_REASON_ID = "arid_WIN_0_600001019";
    private static final String txtRE_ASIGNED_REASON_ID = "arid_WIN_0_600001026";
    private static final String txtSERVICE_DESK_ESCALATED_INCIDENTS_ID = "arid_WIN_0_600001041";
    private static final String txtCUSTOMER_ESCALATED_INCIDENTS_ID = "arid_WIN_0_600001042";
    private static final String txtLAST_ACK_BY_ID = "arid_WIN_0_777031402";
    private static final String txtRESPONSE_REASON_ID = "arid_WIN_0_700048055";
    private static final String txtRE_ASIGNMENT_COUNT_ID = "arid_WIN_0_777031450";
    private static final String txtEVENT_START_TIME = "arid_WIN_0_703001000";
    private static final String txtESTIMATED_READY = "arid_WIN_0_777504503";
    private static final String txtAUTO_CLOSE_DATE = "arid_WIN_0_600001305";
    private static final String txtRESPONSE_TIME = "arid_WIN_0_700048056";


    private static final String ddTEMPLATE = "Template";
    private static final String ddTITLE = "Title";
    private static final String ddREQUEST_TYPEE = "Request Type";
    private static final String ddFAULT_TYPE = "Fault Type";
    private static final String ddIMPORTANCE_XPATH = "//div[@id='WIN_0_600001821']//a[@class='btn btn3d selectionbtn']";
    private static final String ddIMPACT = "Impact";
    private static final String ddASIGNMENT_PROFILE = "Assignment Profile";
    private static final String ddASIGNEE = "Assignee";

    private static final String ddValueSITE_ACCESS_REGISTRATION = "Site access registration";
    private static final String ddValueWORKFORCE_ESCALATION_SE = "Workforce Escalation-SE";
    private static final String ddValueCLEAR_TEMPLATE = "(clear)";

    public void selectSiteAccessRegistrationDdValue(){
        selectDropDownValue(ddValueSITE_ACCESS_REGISTRATION);
    }
    public void selectWorkforceEscalationSeDdValue(){
        selectDropDownValue(ddValueWORKFORCE_ESCALATION_SE);
    }
    public void selectClearTemplateDdvalue(){
        selectDropDownValue(ddValueCLEAR_TEMPLATE);
    }

    private static final String ddValueCUSTOMER = "Customer";
    private static final String ddValueCUSTOMER_RECLAMATION = "Customer Reclamation";
    private static final String ddValueEVENT = "Event";
    private static final String ddValueINTERNAL_USER = "Internal User";
    private static final String ddValuePREVENTIVE_MAINTENANCE = "Preventive Maintenance";
    private static final String ddValueSTAKEHOLDER = "Stakeholder";
    private static final String ddValueTHIRD_PARTY = "Third Party";
    private static final String ddValueCLEAR_REQUEST_TYPE = "(clear)";

    public void selectCustomerDdValue(){
        selectDropDownValue(ddValueCUSTOMER);
    }
    public void selectCustomerReclamationDdValue(){
        selectDropDownValue(ddValueCUSTOMER_RECLAMATION);
    }
    public void selectEventDdValue(){
        selectDropDownValue(ddValueEVENT);
    }
    public void selectInternalUserDdValue(){
        selectDropDownValue(ddValueINTERNAL_USER);
    }
    public void selectPreventiveMaintenanceDdValue(){
        selectDropDownValue(ddValuePREVENTIVE_MAINTENANCE);
    }
    public void selectStakeHolderDdValue(){
        selectDropDownValue(ddValueSTAKEHOLDER);
    }
    public void selectThirdPartyDdValue(){
        selectDropDownValue(ddValueTHIRD_PARTY);
    }
    public void selectClearRequestTypeDdValue(){
        selectDropDownValue(ddValueCLEAR_REQUEST_TYPE);
    }

    private static final String ddValueAPPLICATION_FAULT = "Application fault";
    private static final String ddValueDATA_FAULT = "Data Fault";
    private static final String ddValueNETWORK_FAULT = "Network Fault";
    private static final String ddValueROAMING_DATA_FAULT = "Roaming-Data Fault";
    private static final String ddValueROAMING_VOICE_FAULT = "Roaming-Voice Fault";
    private static final String ddValueSITE_FAULT = "Site Fault";
    private static final String ddValueTRANSMISSION_FAULT = "Transmission Fault";
    private static final String ddValueTV_FAULT = "TV Fault";
    private static final String ddValueVOICE_FAULT = "Voice Fault";
    private static final String ddValueCLEAR_FAULT_TYPE = "(clear)";

    public void selectApplicationFaultDdValue(){
        selectDropDownValue(ddValueAPPLICATION_FAULT);
    }
    public void selectDataFaultDdValue(){
        selectDropDownValue(ddValueDATA_FAULT);
    }
    public void selectNetworkFaultDdValue(){
        selectDropDownValue(ddValueNETWORK_FAULT);
    }
    public void selectRoamingDataFaultDdValue(){
        selectDropDownValue(ddValueROAMING_DATA_FAULT);
    }
    public void selectRoamingVoiceFaultDdValue(){
        selectDropDownValue(ddValueROAMING_VOICE_FAULT);
    }
    public void selectSiteFaultDdValue(){
        selectDropDownValue(ddValueSITE_FAULT);
    }
    public void selectTransmissionFaultDdValue(){
        selectDropDownValue(ddValueTRANSMISSION_FAULT);
    }
    public void selectTvFaultDdValue(){
        selectDropDownValue(ddValueTV_FAULT);
    }
    public void selectVoiceFaultDdValue(){
        selectDropDownValue(ddValueVOICE_FAULT);
    }
    public void selectClearFaultType(){
        selectDropDownValue(ddValueCLEAR_FAULT_TYPE);
    }

    private static final String ddValueCRITICAL_IMPORTANCE = "Critical";
    private static final String ddValueHIGH = "High";
    private static final String ddValueAVERAGE = "Average";
    private static final String ddValueLOW = "Low";
    private static final String ddValueCLEAR_IMPORTANCE = "(clear)";

    public void selectCriticalImportanceDdValue(){
        selectDropDownValue(ddValueCRITICAL_IMPORTANCE);
    }
    public void selectHighDdValue(){
        selectDropDownValue(ddValueHIGH);
    }
    public void selectAverageDdValue(){
        selectDropDownValue(ddValueAVERAGE);
    }
    public void selectLowDdValue(){
        selectDropDownValue(ddValueLOW);
    }
    public void selectClearImportanceDdValue(){
        selectDropDownValue(ddValueCLEAR_IMPORTANCE);
    }

    private static final String ddValueNO = "NO";
    private static final String ddValueMINOR = "Minor";
    private static final String ddValueMEDIUM = "Medium";
    private static final String ddValueMAJOR = "Major";
    private static final String ddValueCRITICAL_IMPACT = "Critical";

    private static final String ddValueCLEAR_ASIGNMENT_PROFILE= "(clear)";

    public void selectNoDdValue(){
        selectDropDownValue(ddValueNO);
    }
    public void selectMinorDdValue(){
        selectDropDownValue(ddValueMINOR);
    }
    public void selectMediumDdValue(){
        selectDropDownValue(ddValueMEDIUM);
    }
    public void selectMajorDdValue(){
        selectDropDownValue(ddValueMAJOR);
    }
    public void selectCriticalImpactDdValue(){
        selectDropDownValue(ddValueCRITICAL_IMPACT);
    }
    public void selectClearAsignmentProfileDdValue(){
        selectDropDownValue(ddValueCLEAR_ASIGNMENT_PROFILE);
    }
    private static final String chkbxDO_NOT_AUTOCLOSE = "WIN_0_rc0id600002014";

    private static final String btnSAVE = "WIN_0_777505104";


    public void clickDoNotAutoCloseCheckBox(){
        driver.findElement(By.id(chkbxDO_NOT_AUTOCLOSE)).click();
    }
    public void clickSaveButton(){
        driver.findElement(By.id(btnSAVE)).click();
    }

    public void clickTemplateDropDown(){
        selectDropDownMenu(ddTEMPLATE);
    }
    public void clickTitleDropDown(){
        selectDropDownMenu(ddTITLE);
    }
    public void clickRequestTypeDropDown(){
        selectDropDownMenu(ddREQUEST_TYPEE);
    }
    public void clickFaultTypeDropDown(){
        selectDropDownMenu(ddFAULT_TYPE);
    }
    public void clickImportanceDropdown(){
        driver.findElement(By.xpath(ddIMPORTANCE_XPATH)).click();
    }
    public void clickImpactDropDown(){
        selectDropDownMenu(ddIMPACT);
    }
    public void clickAsignmentProfileDropDown(){
        selectDropDownMenu(ddASIGNMENT_PROFILE);
    }
    public void clickAsigneeDropDown(){
        selectDropDownMenu(ddASIGNEE);
    }


    public void enterCustRemainingSla(String cust_remaining_sla) {
        driver.findElement(By.id(txtCUST_REMAINING_SLA_ID)).sendKeys(cust_remaining_sla);
    }
    public void enterOlaTargetTime(String ola_target_time) {
        driver.findElement(By.id(txtOLA_TARGET_TIME_ID)).sendKeys(ola_target_time);
    }
    public void enterDescription(String description){
        driver.findElement(By.id(txtDESCRIPTION_ID)).sendKeys(description);
    }
    public void enterWoStatus(String wo_status) {
        driver.findElement(By.id(txtWO_STATUS_ID)).sendKeys(wo_status);
    }
    public void enterRejectionReason(String rejection_reason) {
        driver.findElement(By.id(txtREJECTION_REASON_ID)).sendKeys(rejection_reason);
    }
    public void enterReAsignedReason(String re_asigned_reason) {
        driver.findElement(By.id(txtRE_ASIGNED_REASON_ID)).sendKeys(re_asigned_reason);
    }
    public void enterCustomerEscalatedIncidents(String customer_escalated_incidents) {
        driver.findElement(By.id(txtCUSTOMER_ESCALATED_INCIDENTS_ID)).sendKeys(customer_escalated_incidents);
    }
    public void enterLastAckBy(String last_ack_by) {
        driver.findElement(By.id(txtLAST_ACK_BY_ID)).sendKeys(last_ack_by);
    }
    public void enterResponseReason(String response_reason) {
        driver.findElement(By.id(txtRESPONSE_REASON_ID)).sendKeys(response_reason);
    }
    public void enterReAsignmentCount(String re_asignment_count) {
        driver.findElement(By.id(txtRE_ASIGNMENT_COUNT_ID)).sendKeys(re_asignment_count);
    }
    public void enterServiceDeskEscalated(String service_desk_escalated) {
        driver.findElement(By.id(txtSERVICE_DESK_ESCALATED_INCIDENTS_ID)).sendKeys(service_desk_escalated);
    }
    public void enterEventStartTime(String event_start_time){
        driver.findElement(By.id(txtEVENT_START_TIME)).sendKeys(event_start_time);
    }
    public void enterEstimatedReady(String estimated_ready){
        driver.findElement(By.id(txtESTIMATED_READY)).sendKeys(estimated_ready);
    }
    public void enterAutoCloseDate(String auto_close_date){
        driver.findElement(By.id(txtAUTO_CLOSE_DATE)).sendKeys(auto_close_date);
    }
    public void enterResponseTime(String response_time){
        driver.findElement(By.id(txtRESPONSE_TIME)).sendKeys(response_time);
    }
}
