package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import utils.Ticket;

import java.util.List;

public class OWF_TroubleEventPage extends BaseRecordPage {

    private static final String btnREFRESH_IMAGE_ID= "reg_img_600003444";

    private static final String ddSTATUS_ID = "arid_WIN_0_777031003";
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
    private static final String txtTITLE_ID = "arid_WIN_0_777031000";
    private static final String txtSOURCE_ID = "arid_WIN_0_777777912";
    private static final String txtTROUBLE_TICKET_ID = "arid_WIN_0_777777600"; //Ticket ID+
    private static final String txtEVENT_END_TIME = "arid_WIN_0_777010106";
    private static final String txtCLOSURE_INFO = "arid_WIN_0_777031384";

    private static final String chkbxHEADER_XPATH_AlarmsTab = "//div[@id='WIN_0_700508140']//input[@class='checkboxheader']";
    private static final String chkbxHEADER_XPATH_Diagnosis = "//div[@id='WIN_0_700009087']//input[@class='checkboxheader']";
    private static final String chkbxDO_NOT_AUTOCLOSE = "WIN_0_rc0id600002014";
    private static final String chkbxSELECT_TIKCET = "//input[@class='colcheck']";

    private static final String btnREFRESH_ALARM_TAB_XPATH= "//a[contains(text(),'Refresh')] ";
    private static final String btnTERMINATE_ALARM = "WIN_0_600002926";
    private static final String btnALARMS_XPATH = "//div[@id='WIN_0_999000003']//div[@class='OuterTabsDiv']//div[@class='TabsViewPort']//div//a[@class='btn f1'][contains(text(),'Alarms')]";
    private static final String btnCREATE_FROM_TICKET_ID  = "WIN_0_777504010";
    private static final String btnOK_DIAGNOSIS_ON_FRAME = "arid_WIN_0_777031384";
    private static final String btnSEARCH_SELECT_TARGET_REQUEST = "WIN_0_700506222";
    private static final String btnCLEAR_SELECT_TARGET_REQUEST = "WIN_0_700506223";
    private static final String btnACCEPT_SELECT_TARGET_REQUEST = "WIN_0_730011058";
    private static final String rbtnDISPLAY_ACTIVE_CHILD_ALARMS = "WIN_0_rc0id730030000";


    private static final String ddSTATUS = "Status";
    private static final String ddTEMPLATE = "Template";
    private static final String ddTITLE = "Title";
    private static final String ddREQUEST_TYPEE = "Request Type";
    private static final String ddFAULT_TYPE = "Fault Type";
    private static final String ddIMPORTANCE_XPATH = "//div[@id='WIN_0_600001821']//a[@class='btn btn3d selectionbtn']";
    private static final String ddIMPACT = "Impact";
    private static final String ddASIGNMENT_PROFILE = "Assignment Profile";
    private static final String ddASIGNEE = "Assignee";
    private static final String ddPRIORITY = "Priority";
    private static final String ddREQUEST_TYPE_ID = "arid_WIN_0_777031002";
    private static final String ddPRIORITY_ID = "arid_WIN_0_700025204";
    private static final String ddFAULTY_POSITION = "Fault Position";
    private static final String ddCAUSE = "Cause";
    private static final String ddRELATION_TYPE = "Relationship Type";

    private static final String table_WORKORDERS_ID = "T777504000";


    public boolean validateChildWorkOrderAvailability(){
          int size= getTableRows(By.id(table_WORKORDERS_ID)).size();
          if(size>0)
              return true;
        return false;

    }
  public void selectStatus(String value){
        selectDropDownNameAndValue(ddSTATUS, value, false);
  }

    public void selectTicket(){
        driver.findElement(By.xpath(chkbxSELECT_TIKCET)).click();
    }
    public void clickDisplayActiveChildAlarms(){
        driver.findElement(By.id(rbtnDISPLAY_ACTIVE_CHILD_ALARMS)).click();
    }

    public void clickAccept_selectTargetRequest(){
        driver.findElement(By.id(btnACCEPT_SELECT_TARGET_REQUEST)).click();
    }

    public void selectRelationshipType(String value){
        selectDropDownNameAndValue(ddRELATION_TYPE, value, false);
    }


    public void enterTicketIdPlus(String ticketIdPlus){
        driver.findElement(By.id(txtTROUBLE_TICKET_ID)).sendKeys(ticketIdPlus);
    }

    public void clickClear_selectTargetRequest() {
     driver.findElement(By.id(btnCLEAR_SELECT_TARGET_REQUEST)).click();
    }
    public void clickSearch_selctTargetRequest(){
        driver.findElement(By.id(btnSEARCH_SELECT_TARGET_REQUEST)).click();
    }

    public String getOlaTargetTime(){
        return getTextById(txtOLA_TARGET_TIME_ID);
    }


    private static final String btnSAVE = "WIN_0_777505104";
    public void enterClosureInfo(String closureInfo){
        driver.findElement(By.id(txtCLOSURE_INFO)).sendKeys(closureInfo);
    }
    public void clickOk_Diagnosis_OnFame(){
        driver.findElement(By.id(btnOK_DIAGNOSIS_ON_FRAME)).click();
    }

    public void clickAllAlarms_Diagnosis(){
        driver.findElement(By.xpath(chkbxHEADER_XPATH_Diagnosis)).click();
    }

    public void selectFaultPosition(String value){
        selectDropDownNameAndValueForMultipleMenuTableBodys(ddFAULTY_POSITION, value, false, 2);
    }
    public void selectCause(String value){
        selectDropDownNameAndValueForMultipleMenuTableBodys(ddCAUSE, value, true, 2);
    }

    public void enterTroubleTicket(String troubleTicketId)
    {
        WebElement element = driver.findElement(By.id(txtTROUBLE_TICKET_ID));
        element.sendKeys(troubleTicketId);
        element.sendKeys(Keys.ENTER);
    }
    public void enterEventEndTimeAsCurrentTime(){
        driver.findElement(By.id(txtEVENT_END_TIME)).sendKeys(Keys.ENTER);
    }

    public void clickTerminateAlarm(){
        driver.findElement(By.id(btnTERMINATE_ALARM)).click();
    }
    public void clickRefreshButtonImage(){
        driver.findElement(By.id(btnREFRESH_IMAGE_ID)).click();

    }
    public void clickRefreshButton_AlarmTab(){
        driver.findElement(By.xpath(btnREFRESH_ALARM_TAB_XPATH)).click();
    }

    public void clickCreateFromTicket(){
        driver.findElement(By.id(btnCREATE_FROM_TICKET_ID)).click();
    }
    public void clickAlarmTab(){
        driver.findElement(By.xpath(btnALARMS_XPATH)).click();
    }
    public void clickWorkOrder(){
        wait(2000);
        selectTab("Work Orders");
    }
    public void enterLevel(String level){
        driver.findElement(By.id(txtTITLE_ID)).sendKeys(level);
    }

    public void clickAllAlarmBox(){
        driver.findElement(By.xpath(chkbxHEADER_XPATH_AlarmsTab)).click();
    }
    public void selectRequestType(String value){
        selectDropDownNameAndValue(ddREQUEST_TYPEE, value, false );
    }

    public void clickDoNotAutoCloseCheckBox() {
        driver.findElement(By.id(chkbxDO_NOT_AUTOCLOSE)).click();
    }

    public void clickSaveButton() {
        driver.findElement(By.id(btnSAVE)).click();
    }

    public void clickTemplateDropDown() {
        selectDropDownMenu(ddTEMPLATE);
    }

    public void clickTitleDropDown() {
        selectDropDownMenu(ddTITLE);
    }

    public void clickRequestTypeDropDown() {
        selectDropDownMenu(ddREQUEST_TYPEE);
    }

    public void clickFaultTypeDropDown() {
        selectDropDownMenu(ddFAULT_TYPE);
    }

    public void clickImportanceDropdown() {
        driver.findElement(By.xpath(ddIMPORTANCE_XPATH)).click();
    }

    public void clickImpactDropDown() {
        selectDropDownMenu(ddIMPACT);
    }

    public void clickAssignmentProfileDropDown() {
        selectDropDownMenu(ddASIGNMENT_PROFILE);
    }

    public void clickAssigneeDropDown() {
        selectDropDownMenu(ddASIGNEE);
    }


    public void enterCustRemainingSla(String cust_remaining_sla) {
        driver.findElement(By.id(txtCUST_REMAINING_SLA_ID)).sendKeys(cust_remaining_sla);
    }

    public void enterOlaTargetTime(String ola_target_time) {
        driver.findElement(By.id(txtOLA_TARGET_TIME_ID)).sendKeys(ola_target_time);
    }

    public void enterDescription(String description) {
        driver.findElement(By.id(txtDESCRIPTION_ID)).sendKeys(description);
    }

    public void enterWoStatus(String wo_status) {
        driver.findElement(By.id(txtWO_STATUS_ID)).sendKeys(wo_status);
    }

    public void enterRejectionReason(String rejection_reason) {
        driver.findElement(By.id(txtREJECTION_REASON_ID)).sendKeys(rejection_reason);
    }

    public void enterReAssignedReason(String re_asigned_reason) {
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

    public void enterEventStartTime(String event_start_time) {
        driver.findElement(By.id(txtEVENT_START_TIME)).sendKeys(event_start_time);
    }

    public void enterEstimatedReady(String estimated_ready) {
        driver.findElement(By.id(txtESTIMATED_READY)).sendKeys(estimated_ready);
    }

    public void enterAutoCloseDate(String auto_close_date) {
        driver.findElement(By.id(txtAUTO_CLOSE_DATE)).sendKeys(auto_close_date);
    }

    public void enterResponseTime(String response_time) {
        driver.findElement(By.id(txtRESPONSE_TIME)).sendKeys(response_time);
    }

    public String getStatusText() {
        String StatusText = driver.findElement(By.id(ddSTATUS_ID)).getAttribute("value");
        return StatusText;

    }
    public String getSourceText(){
        return getTextById(txtSOURCE_ID);

    }
    public Ticket getTicket()
    {
        String location = "";
        WebElement affectedBus = driver.findElement(By.xpath("//fieldset[@class =' pnl ']"));
        List<WebElement> elements = affectedBus.findElements(By.xpath("//input[@type='checkbox']"));
        wait(3000);
        for (int i = 0; i < elements.size(); i++) {
            if (elements.get(i).isSelected())
                //location = elements.get(i).getAttribute("arvalue");
                location = elements.get(i).findElement(By.tagName("label")).getText();
            System.out.println("location is: " + location);
            break;

        }
        String title = getTextById(txtTITLE_ID);
        String requestType = getTextById(ddREQUEST_TYPE_ID);
        String description = getTextById(txtDESCRIPTION_ID);
        String priority = getTextById(ddPRIORITY_ID);

        Ticket ticket = new Ticket(title, requestType, priority, location, description);
        return ticket;
    }
    public void refreshPage(){
        driver.navigate().refresh();
    }



    private static final String ddValueSITE_ACCESS_REGISTRATION = "Site access registration";
    private static final String ddValueWORKFORCE_ESCALATION_SE = "Workforce Escalation-SE";
    private static final String ddValueCLEAR_TEMPLATE = "(clear)";

    private static final String ddValueCUSTOMER = "Customer";
    private static final String ddValueCUSTOMER_RECLAMATION = "Customer Reclamation";
    private static final String ddValueEVENT = "Event";
    private static final String ddValueINTERNAL_USER = "Internal User";
    private static final String ddValuePREVENTIVE_MAINTENANCE = "Preventive Maintenance";
    private static final String ddValueSTAKEHOLDER = "Stakeholder";
    private static final String ddValueTHIRD_PARTY = "Third Party";
    private static final String ddValueCLEAR_REQUEST_TYPE = "(clear)";

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

    private static final String ddValueCRITICAL_IMPORTANCE = "Critical";
    private static final String ddValueHIGH = "High";
    private static final String ddValueAVERAGE = "Average";
    private static final String ddValueLOW = "Low";
    private static final String ddValueCLEAR_IMPORTANCE = "(clear)";


    private static final String ddValueNO = "NO";
    private static final String ddValueMINOR = "Minor";
    private static final String ddValueMEDIUM = "Medium";
    private static final String ddValueMAJOR = "Major";
    private static final String ddValueCRITICAL_IMPACT = "Critical";

    private static final String ddValueCLEAR_ASIGNMENT_PROFILE = "(clear)";

}