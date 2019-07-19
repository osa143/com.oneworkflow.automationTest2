package pageObjects;

import org.joda.time.DateTime;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import utils.Ticket;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
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
    private static final String txtEVENT_START_TIME = "arid_WIN_0_600001302";
    private static final String txtESTIMATED_READY = "arid_WIN_0_777504503";
    private static final String txtAUTO_CLOSE_DATE = "arid_WIN_0_600001305";
    private static final String txtRESPONSE_TIME = "arid_WIN_0_700048056";
    private static final String txtTITLE_ID = "arid_WIN_0_777031000";
    private static final String txtSOURCE_ID = "arid_WIN_0_777777912";
    private static final String txtTROUBLE_TICKET_ID = "arid_WIN_0_777777600"; //Ticket ID+
    private static final String txtEVENT_END_TIME = "arid_WIN_0_777010106";
    private static final String txtCLOSURE_INFO = "arid_WIN_0_777031384";
    private static final String txt_CATEGORY= "arid_WIN_0_200000003";
    private static final String txt_TYPE= "arid_WIN_0_200000004";
    private static final String txt_ITEM= "arid_WIN_0_200000005";
    private static final String txt_EVENT_START_TIME= "arid_WIN_0_703001000";
    private static final String txt_LOCATION_ID_PLUS = "arid_WIN_0_777031006";


    private static final String chkbxDO_NOT_AUTOCLOSE = "WIN_0_rc0id600002014";
    private static final String chkbxSELECT_TIKCET = "//input[@class='colcheck']";

    private static final String btnREFRESH_ALARM_TAB_XPATH= "//a[contains(text(),'Refresh')] ";
    private static final String btnTERMINATE_ALARM = "WIN_0_600002926";
    private static final String btnCREATE_FROM_TICKET_ID  = "WIN_0_777504010";
    private static final String btnOK_DIAGNOSIS_ON_FRAME = "arid_WIN_0_777031384";
    private static final String btnSEARCH_SELECT_TARGET_REQUEST = "WIN_0_700506222";
    private static final String btnCLEAR_SELECT_TARGET_REQUEST = "WIN_0_700506223";
    private static final String btnACCEPT_SELECT_TARGET_REQUEST = "WIN_0_730011058";
    private static final String rbtnDISPLAY_ACTIVE_CHILD_ALARMS = "WIN_0_rc0id730030000";
    private static final String Error_POP_UP_ID= "PopupMsgBox";
    private static final String btn_CTI_DETAILS_UNDER_SECTIONS = "WIN_0_777789018";
    private static final String btn_LOCATION_UNDER_SECTIONS= "WIN_0_999000344";
    private static final String btn_OWNER_UNDER_SECTIONS= "WIN_0_999000347";
    private static final String btn_ON_HOLD_UNDER_SECTIONS = "WIN_0_999000343";
    private static final String btn_VENDOR_UNDER_SECTIONS= "WIN_0_999000348";
    private static final String btn_CLOSURE_UNDER_SECTIONS= "WIN_0_999000364";
    private static final String btn_ATTACHMENTS_UNDER_SECTIONS= "WIN_0_999000368";
    private static final String btn_ROOT_CAUSE_UNDER_SECTIONS = "WIN_0_999000372";
    private static final String btn_ADD ="WIN_0_777000020";
    private static final String btn_OPEN_INTERNAL= "WIN_0_777000021";
    private static final String btn_DELETE= "WIN_0_777000022";
    private static final String btn_OPEN_EXTERNAL= "WIN_0_600002903";
    private static final String div_CAUSE= "WIN_0_777031380";



    private static final String ddSTATUS = "Status";
    private static final String ddTEMPLATE = "Template";
    private static final String ddTITLE = "Title";
    private static final String ddREQUEST_TYPEE = "Request Type";
    private static final String ddFAULT_TYPE = "Fault Type";
    private static final String ddIMPACT = "Impact";
    private static final String ddASIGNMENT_PROFILE = "Assignment Profile";
    private static final String ddASIGNEE = "Assignee";
    private static final String ddPRIORITY = "Priority";
    private static final String ddREQUEST_TYPE_ID = "arid_WIN_0_777031002";
    private static final String ddPRIORITY_ID = "arid_WIN_0_700025204";
    private static final String ddFAULTY_POSITION = "Fault Position";
    private static final String ddCAUSE = "Cause";
    private static final String ddRELATION_TYPE = "Relationship Type";
    private static final String ddIMPORTANCE_ID = "arid_WIN_0_600001821";
    private static final String table_WORKORDERS_ID = "T777504000";
    private static final String ddTEMPLATE_Field_ID = "WIN_0_777504501";
    private static final String ddIMPACT_Field_ID = "WIN_0_705002082";
    private static final String ddTITLE_Field_ID= "WIN_0_777031000";
    private static final String ddIMPORTANCE_Field_ID= "WIN_0_600001821";
    private static final String ddOWNER_PROFILE_ID = "WIN_0_777031401";
    private static final String btn_OK_Popup = "//*[@id=\"PopupMsgFooter\"]/a";
    private static final String fld_LOCATION_INFORMATION= "//*[@id=\"WIN_0_999000300\"]/table/tbody/tr/td";
    private static final String fld_ON_HOLD_UNTIL= "//*[@id=\"WIN_0_700000040\"]/table/tbody/tr/td";
    private static final String fld_CLOSURE_CODE = "//*[@id=\"WIN_0_777010094\"]/table/tbody/tr/td";
    private static final String fld_INTERNAL= "//*[@id=\"WIN_0_999000353\"]/table/tbody/tr/td";
    private static final String fld_EXTERNAL = "//*[@id=\"WIN_0_600003301\"]/table/tbody/tr/td";
    private static final String fld_OWNER= "//*[@id=\"WIN_0_777010095\"]/table/tbody/tr/td";
    private static final String fld_VENDOR= "//*[@id=\"WIN_0_777021005\"]/table/tbody/tr/td";
    private static final String fld_ROOT_CAUSE= "//*[@id=\"WIN_0_799999914\"]/table/tbody/tr/td";
    private static final String table_SELECT_LOCATION= "T700024013";
    private static final String btn_NEXT_CHUNK_RIGHT= "//div[@id='WIN_0_700024013']//a[@class='btn chunkright']";
    private static final String btn_OK_SELECT_LOCATION= "WIN_0_700000104";

    public void clickOnRow(String text)
    {
        WebElement element = getTableElementAndTextBasedOnIndex(By.id(table_SELECT_LOCATION),"Name",text);
        element.click();
    }

    public void clickOk_SelectLocation(){
        findElement(By.id(btn_OK_SELECT_LOCATION)).click();
    }

    public void clickNextChunkRight(){
        findElement(By.xpath(btn_NEXT_CHUNK_RIGHT)).click();
    }

    public boolean verifyListOfSwedishSites(){
        int listSize= getTableRows(By.id(table_SELECT_LOCATION)).size();
        if (listSize>1)
            return true;
        else return false;
    }
    public void enterLocationIdPlus(String text){
        findElement(By.id(txt_LOCATION_ID_PLUS)).sendKeys(text);
        findElement(By.id(txt_LOCATION_ID_PLUS)).sendKeys(Keys.ENTER);
    }
    public boolean verifyEventStartTimeIsAvailable(){
        return verifyElementIsDisplayed(By.id(txt_EVENT_START_TIME));
    }
    public String eventStartDateTime(){
        return getTextById(txt_EVENT_START_TIME);
    }

    public boolean verifyIsRootCauseIsPresent(){
        return findElement(By.xpath(fld_ROOT_CAUSE)).isDisplayed();
    }

    public boolean verifyIsCauseIsPresent(){
        return findElement(By.id(div_CAUSE)).isDisplayed();
    }
    public boolean verifyIsAddIsPresent(){
        return findElement(By.id(btn_ADD)).isDisplayed();
    }
    public boolean verifyIsOpen_InternalIsPresent(){
        return findElement(By.id(btn_OPEN_INTERNAL)).isDisplayed();
    }

    public boolean verifyIsDeleteIsPresent(){
        return findElement(By.id(btn_DELETE)).isDisplayed();
    }

    public boolean verifyIsOpen_ExternalIsPresent(){
        return findElement(By.id(btn_OPEN_EXTERNAL)).isDisplayed();
    }

    public boolean verifyIsPreferences_InternalIsPresent(){
        return findElement(By.xpath(btn_PREFRENCES_INTERNAL)).isDisplayed();
    }
    public boolean verifyIsRefresh_InternalIsPresent(){
        return findElement(By.xpath(btn_REFRESH_INTERNAL)).isDisplayed();
    }

    public boolean verifyIsPreferences_ExternalIsPresent(){
        return findElement(By.xpath(btn_PREFRENCES_EXTERNAL)).isDisplayed();
    }

    public boolean verifyIsRefresh_ExternalIsPresent(){
        return findElement(By.xpath(btn_REFRESH_EXTERNAL)).isDisplayed();
    }
    public void clickRootCause(){
        findElement(By.id(btn_ROOT_CAUSE_UNDER_SECTIONS)).click();
    }

    public boolean verifyIsOwnerIsPresent(){
        return findElement(By.xpath(fld_OWNER)).isDisplayed();
    }
    public boolean verifyIsVendorIsPresent(){
        return findElement(By.xpath(fld_VENDOR)).isDisplayed();
    }

    public boolean verifyIsExternalIsPresent(){
       return findElement(By.xpath(fld_EXTERNAL)).isDisplayed();
    }

    public boolean verifyIsInternalIsPresent(){
        return findElement(By.xpath(fld_INTERNAL)).isDisplayed();
    }

    public boolean verifyIsOnHoldUntilPresent(){
        return findElement(By.xpath(fld_ON_HOLD_UNTIL)).isDisplayed();
    }

    public boolean verifyIsLocationInformationIspPresent(){
         return findElement(By.xpath(fld_LOCATION_INFORMATION)).isDisplayed();
    }
    public boolean verifyIsClosureCodeIspPresent(){
        return findElement(By.xpath(fld_CLOSURE_CODE)).isDisplayed();
    }

    public void clickClosure(){
        findElement(By.id(btn_CLOSURE_UNDER_SECTIONS)).click();
    }

    public void clickVendor(){
        findElement(By.id(btn_VENDOR_UNDER_SECTIONS)).click();
    }

    public void clickOnHold(){
        findElement(By.id(btn_ON_HOLD_UNDER_SECTIONS)).click();
    }

    public void clickAttachments(){
        findElement(By.id(btn_ATTACHMENTS_UNDER_SECTIONS)).click();
    }

    public void clickLocation(){
        findElement(By.id(btn_LOCATION_UNDER_SECTIONS)).click();
    }
    public void clickOwner(){
        findElement(By.id(btn_OWNER_UNDER_SECTIONS)).click();
    }
    public String getErrorText(){
        String error= getTextById(Error_POP_UP_ID);
        System.out.println(error);
        return error;
    }
    public void clickCtiDetails(){
        findElement(By.id(btn_CTI_DETAILS_UNDER_SECTIONS)).click();
    }
    public boolean verifyCtiDetailsIsDisplayed(){
        return verifyElementIsDisplayed(By.id(btn_CTI_DETAILS_UNDER_SECTIONS));
    }
    public boolean verifyWosStatusIsDisplayed(){
        return findElement(By.id(txtWO_STATUS_ID)).isDisplayed();
    }
    //Event start+SLA
    public String calculateEstimatedReadyUpdated(){
        String eventStartTime= getTextById(txtEVENT_START_TIME);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        DateTime dateTime= new DateTime(eventStartTime).plusHours(10);
        String estimatedReady = dateTime.toString();
        System.out.println(estimatedReady);
        return estimatedReady;
    }

    public void clickOkOnPopup()
    {
        findElement(By.xpath(btn_OK_Popup)).click();
    }

    public String getEstimatedReady(int days){

            String format = "yyyy-MM-dd HH:mm:ss";
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(format);
            LocalDateTime dateTime = LocalDateTime.parse(getEventStartTime(), formatter);
            String estimatedTime = dateTime.plusDays(days).toString();
        estimatedTime = estimatedTime.replace('T',' ');
        System.out.println("Estimated time is: " + estimatedTime);
        return estimatedTime;

    }
    public String calculateEstimatedReady(int hours){

        String format = "yyyy-MM-dd HH:mm:ss";
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(format);
        LocalDateTime dateTime = LocalDateTime.parse(getEventStartTime(), formatter);
        String estimatedTime = dateTime.plusHours(hours).toString();
        estimatedTime = estimatedTime.replace('T',' ');
        System.out.println("Estimated time is: " + estimatedTime);
        return estimatedTime;

    }

    public String getSavedEstimatedReady(){
        String estimatedReady= getTextById(txtESTIMATED_READY);
        System.out.println(estimatedReady);
        return estimatedReady;
    }
    public void clearEstimatedReady(){
        findElement(By.id(txtESTIMATED_READY)).clear();

    }
   public String getEventStartTime(){
       String eventStartTime=  getTextById(txtEVENT_START_TIME);
       System.out.println(eventStartTime);
       return eventStartTime;
   }
    public boolean verifyOwnerProfileAvailability(){
        return verifyElementIsDisplayed(By.id(ddOWNER_PROFILE_ID));
    }
    public boolean verifyImportanceAvailability(){
        return verifyElementIsDisplayed(By.id(ddIMPORTANCE_Field_ID));
    }

    public boolean verifyImpactAvailability(){
        Boolean availability= verifyElementIsDisplayed(By.id(ddIMPACT_Field_ID));
        System.out.println(availability);
        return availability;
    }
   public boolean verifyCategoryAvailability(){
       Boolean availability= verifyElementIsDisplayed(By.id(txt_CATEGORY));
       System.out.println(availability);
       return availability;
   }
    public boolean verifyEventStartTimeAvailability(){
        Boolean availability= verifyElementIsDisplayed(By.id(txt_EVENT_START_TIME));
        System.out.println(availability);
        return availability;
    }
    public boolean verifyTypeAvailability(){
        Boolean availability= verifyElementIsDisplayed(By.id(txt_TYPE));
        System.out.println(availability);
        return availability;
    }
    public boolean verifyItemAvailability(){
        Boolean availability= verifyElementIsDisplayed(By.id(txt_ITEM));
        System.out.println(availability);
        return availability;
    }

     public void selectImpact(String value){
         selectDropDownNameAndValue(ddIMPACT, value, true);
     }

    public String getPriorityText(){
         return getTextById(ddPRIORITY_ID);
     }
    public void selectImportance(String value){
        findElement(By.id(ddIMPORTANCE_ID)).click();
        selectDropDownValue(value);
    }
    public boolean verifyTemplateIsAvailable(){
         return verifyElementIsDisplayed(By.id(ddTEMPLATE_Field_ID));
    }
    public boolean verifyTitleAvailability(){
         return verifyElementIsDisplayed(By.id(ddTITLE_Field_ID));
    }
    public boolean isPriorityFieldDisplayed(){
        return verifyElementIsDisplayed(By.id(ddPRIORITY_ID));
    }
    public boolean verifyPriorityFieldIsReadOnly(){
        return checkIfControlIsReadonly(ddPRIORITY_ID);
    }
    public boolean isEstimatedReadyDisplayed() {
     return findElement(By.id(txtESTIMATED_READY)).isDisplayed();
    }
        public boolean validateChildWorkOrderAvailability (){
          int size= getTableRows(By.id(table_WORKORDERS_ID)).size();
          if(size>0)
              return true;
        return false;

    }
    public String getCust_Remaining_SLA(){
        String SLA_Target_Time =getTextById(txtCUST_REMAINING_SLA_ID);
        System.out.println(SLA_Target_Time);
        return SLA_Target_Time;
    }
    public String getOLATargetTime(){
        String SLA_Target_Time =getTextById(txtOLA_TARGET_TIME_ID);
        System.out.println(SLA_Target_Time);
        return SLA_Target_Time;
    }
    public boolean verifyOLA_Target_IsReadOnly(){
        return checkIfControlIsReadonly(txtOLA_TARGET_TIME_ID);
    }
    public boolean verifyCust_Remaining_SLAIsReadOnly(){
        return checkIfControlIsReadonly(txtCUST_REMAINING_SLA_ID);
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
    public String getTroubleTicket() {
        String troubleTicket= getTextById(txtTICKET_ID);
        System.out.println("Ticket opened is" +troubleTicket);
        return troubleTicket;
    }
    public boolean isRequestTypeVisible(){
        return verifyElementIsDisplayed(By.id(ddREQUEST_TYPE_ID));
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

    private static final String btn_PREFRENCES_INTERNAL= "//div[@id='WIN_0_777000013']//a[@class='Prefs btn btn3d TableBtn'][contains(text(),'Preferences')]";
    private static final String btn_REFRESH_INTERNAL= "//div[@id='WIN_0_777000013']//a[@class='Ref btn btn3d TableBtn'][contains(text(),'Refresh')]";
    private static final String btn_PREFRENCES_EXTERNAL= "//div[@id='WIN_0_600002205']//a[@class='Prefs btn btn3d TableBtn'][contains(text(),'Preferences')]";
    private static final String btn_REFRESH_EXTERNAL= "//div[@id='WIN_0_600002205']//a[@class='Ref btn btn3d TableBtn'][contains(text(),'Refresh')]";
    private static final String chkbxHEADER_XPATH_AlarmsTab = "//div[@id='WIN_0_700508140']//input[@class='checkboxheader']";
    private static final String btnALARMS_XPATH = "//div[@id='WIN_0_999000003']//div[@class='OuterTabsDiv']//div[@class='TabsViewPort']//div//a[@class='btn f1'][contains(text(),'Alarms')]";
    private static final String ddIMPORTANCE_XPATH = "//div[@id='WIN_0_600001821']//a[@class='btn btn3d selectionbtn']";
    private static final String chkbxHEADER_XPATH_Diagnosis = "//div[@id='WIN_0_700009087']//input[@class='checkboxheader']";

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
