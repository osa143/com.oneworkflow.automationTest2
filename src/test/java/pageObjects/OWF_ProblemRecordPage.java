package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import utils.CommonUtils;

import java.util.List;

public class OWF_ProblemRecordPage extends BasePage{




    private static final String txtTICKET_ID= "arid_WIN_0_730000060";
    private static final String txtSEARCH_TICKET_ID = "arid_WIN_0_777777600";

    private static final String ddSTATUS = "Status*";

    private static final String btnTIMELINE_XPATH= "//a[contains(text(),'Timeline')]";
    private static final String fld_TIMELINE_DISPLAY_XPATH = "//div[@id='WIN_0_999000510']//div[@class='BaseTableInner']";

    private static final String ddNO_ID ="arid_WIN_0_600001801";
    private static final String ddSTATuS_ID = "arid_WIN_0_777031003";

    private static final String txtTITLE_ID = "arid_WIN_0_777031000";
    private static final String txtDESCRIPTION_ID = "arid_WIN_0_777031007";

    private static final String ddREQUEST_TYPE_ID = "arid_WIN_0_777031002";
    private static final String ddIMPACT = "Impact";
    private static final String ddURGENCY = "Urgency";
    private static final String ddWITHDRAWN_REASON = "Withdrawn Reason";
    private static final String ddPRIORITY_ID = "arid_WIN_0_700025204";

    private static final String ddValueDUPLICATE_ENTRIES = "Duplicate Entries";
    private static final String ddValueFALSE_ALARM = "False Alarm";
    private static final String ddValueINSUFICIENT_INFORMATION = "Insuficient information";
    private static final String ddValueNOT_A_ROOTCAUSE_INVESTIGATION = "Not a rootcause investigation";
    private static final String ddValueOTHER_PROCESS_SOLVING_PROBLEM = "Other process solving the problem";
    private static final String ddValueTEST_TICKET = "Test Ticket";
    private static final String ddValueTRAINING = "Training";
    private static final String dd_WITHDRAWN_REASON_ValueCLEAR = "(clear)";

    private static final String ddValueEXTENSIVE_WIDESPREAD = "Extensive/Widespread";
    private static final String ddValueSIGNIFICANT_LARGE = "Significant/Large";
    private static final String ddValueMODERATE_LIMITED = "Moderate/Limited";
    private static final String ddValueCLEAR = "(clear)";

    private static final String ddValueCRITICAL = "Critical";
    private static final String ddValueHIGH = "High";
    private static final String ddValueMEDIUM = "Medium";
    private static final String ddValueLOW = "Low";
    private static final String dd_PRIORITY_ValueCLEAR = "(clear)";

    private static final String btnADD_ID = "WIN_0_777000020";
    private static final String btnINTERNAL_OPEN_ID = "WIN_0_777000021";
    private static final String btnINTERNAL_DELETE_ID = "WIN_0_777000022";
    private static final String btnEXTERNAL_OPEN_ID = "WIN_0_600002903";
    private static final String btnEXTERNAL_DELETE_ID = "WIN_0_600002906";
    private static final String btnSAVE_ID = "WIN_0_700025244";
    private static final String btnSEARCH_ID = "WIN_0_1002";
    private static final String errorTABLE_XPATH = "//*[@id='pbartable']";
    private static final String btnYES_ON_FRAME_ID = "WIN_0_700027904";
    private static final String btnACK_ID = "WIN_0_777504152";

    private static final String chkbxSWEDEN= "WIN_0_rc0id600002001";


    private static final String ddSERVICE_PROVIDER = "Service Provider";

    private static final String ddValueASSIGNED = "Assigned";
    private static final String ddValuePENDING = "Pending";
    private static final String ddValueUNDER_INVESTIGATION = "Under Investigation";
    private static final String ddValueWITHDRWAN = "Withdrawn";
    private static final String ddValueCLEAR_STATUS = "(clear)";

    private static final String ddREQUEST_TYPE = "Request Type";
    private static final String ddTEMPLATE = "Template";
    private static final String ddESTIMATED_IMPACT= "Estimated Impact";
    private static final String ddACTUAL_IMPACT= "Actual Impact";
    private static final String ddCOMPLETED_CODE= "Completed Code";
    private static final String ddTITLE = "Title";
    private static final String ddREQUEST_CATEGORY = "Request Category";
    private static final String ddCHANGE_RECORD = "WIN_0_755000000";


    private static final String txtCHANGE_BUILDER_FIELD = "arid_WIN_0_600001054";
    private static final String txtSTART_DATE = "arid_WIN_0_777021160";
    private static final String txtEND_DATE = "arid_WIN_0_777021161";
    private static final String txtEXPECTED_ALARMS= "arid_WIN_0_705001002";
    private static final String txtIMPACT_DURATION_DAYS= "arid_WIN_0_990001006";
    private static final String txtIMPACT_DURATION_HRS= "arid_WIN_0_900000018";
    private static final String txtIMPACT_DURATION_MINS= "arid_WIN_0_900000019";
    private static final String txtIMPACT_DURATION_SECS= "arid_WIN_0_990001007";


    private static final String chkbxFINLAND= "WIN_0_rc0id600002002";
    private static final String chkbxDENMARK= "WIN_0_rc0id600002003";
    private static final String chkbxNORWAY= "WIN_0_rc0id600002004";
    private static final String chkbxLITHUANIA= "WIN_0_rc0id600002005";
    private static final String chkbxESTONIA= "WIN_0_rc0id600002006";
    private static final String chkbxTELIA_CARRIER= "WIN_0_rc0id600002008";
    private static final String chkbxUNKOWN= "WIN_0_rc0id600002010";
    private static final String chkbxINTERNAL= "WIN_0_rc0id600002009";


    private static final String btnSAVE = "WIN_0_700025244";
    private static final String btnDIAGNOSIS = "//a[contains(text(),'Diagnosis')]";
    private static final String btnCISEARCH = "WIN_0_999000229";
    public static final String btnSEND = "WIN_0_600002905";
    private static final String btnACKNOWLEDGE = "WIN_0_777504152";

    public void clickAcknowledgeButton(){
        driver.findElement(By.id(btnACKNOWLEDGE)).click();
    }
    public void clickSendButton(){
        driver.findElement(By.id(btnSEND)).click();
    }


    public void clickDenmarkCheckBox(){
        driver.findElement(By.id(chkbxDENMARK)).click();
    }

    public void clickNorwayCheckBox(){
        driver.findElement(By.id(chkbxNORWAY)).click();
    }
    public void clickLithuniaCheckBox(){
        driver.findElement(By.id(chkbxLITHUANIA)).click();
    }
    public void clickFinalndCheckBox(){
        driver.findElement(By.id(chkbxFINLAND)).click();
    }
    public void clickEstoniaCheckBox(){
        driver.findElement(By.id(chkbxESTONIA)).click();
    }
    public void clickTeliaCarrierCheckBox(){
        driver.findElement(By.id(chkbxTELIA_CARRIER)).click();
    }
    public void clickUnknownCheckBox(){
        driver.findElement(By.id(chkbxUNKOWN)).click();
    }
    public void clickInternalCheckBox(){
        driver.findElement(By.id(chkbxINTERNAL)).click();
    }

    public void enterImpactDurationDays(String impactDurationDays){
        driver.findElement(By.id(txtIMPACT_DURATION_DAYS)).sendKeys(impactDurationDays);
    }
    public void enterImpactDurationHrs(String impactDurationHrs){
        driver.findElement(By.id(txtIMPACT_DURATION_HRS)).sendKeys(impactDurationHrs);
    }
    public void enterImpactDurationMins(String impactDurationMins){
        driver.findElement(By.id(txtIMPACT_DURATION_MINS)).sendKeys(impactDurationMins);
    }
    public void enterImpactDurationSecs(String impactDurationSecs){

        driver.findElement(By.id(txtIMPACT_DURATION_SECS)).sendKeys(impactDurationSecs);
    }
    public void selectActualImpact(String value){
        selectDropDown(ddACTUAL_IMPACT, value, true);
    }
    public void clickChangeRecord(){
        selectMenuItem(ddCHANGE_RECORD);
    }

    public void selectEstimatedImpact(String value) {
        selectDropDown(ddESTIMATED_IMPACT, value, true);
    }
    public void selectRequestCategory(String value){
        selectDropDown(ddREQUEST_CATEGORY, value, true);
    }
    public void selectCompletedCode(String value){
        selectDropDown(ddCOMPLETED_CODE, value, true);
    }
    public void clickExpectedAlarm(){
        driver.findElement(By.id(txtEXPECTED_ALARMS)).click();
    }

    public void selectTitle(String value){
        selectDropDown(ddTITLE, value, true);
    }
    public void selectRequestType(String value) {
        selectDropDown(ddREQUEST_TYPE, value, true);
    }

    public void selectTemplateAsAll_Mobile_RANExternals_RANConnectivity() {
        selectDropDown(ddTEMPLATE, "All:Mobile:RAN - Externals:RAN Connectivity", true);
    }
    public void selectRequestTypeAs_AccessNetworks_RAN_NSN_2G_3G_4G(){
        selectDropDown(ddREQUEST_TYPE, "Access Networks:RAN NSN 2G/3G/4G", false);

    }
    public Boolean ackButtonStatus(){
        Boolean status = driver.findElement(By.id(btnACKNOWLEDGE)).isEnabled();
        return status;
    }


    public void enterChangeBuilderType(String changeBuilderName) {
        driver.findElement(By.id(txtCHANGE_BUILDER_FIELD)).sendKeys(changeBuilderName);
    }
    public void selectAssignedDdValue(){
        selectDropDownValue(ddValueASSIGNED);
    }
    public void selectPendingDdValue(){
        selectDropDownValue(ddValuePENDING);
    }
    public void selectUnderInvestigationDdValue(){
        selectDropDownValue(ddValueUNDER_INVESTIGATION);
    }
    public void selectWithdrawnDdValue(){
        selectDropDownValue(ddValueWITHDRWAN);
    }
    public void selectClearDdValue(){
        selectDropDownValue(ddValueCLEAR);
    }

    private static final String ddSTATUS_ID = "arid_WIN_0_777031003";


    public void clickStatusDropDown(){
        selectDropDownMenu(ddSTATUS);
    }


    public void clickServiceProviderDropDown(){
        selectDropDownMenu(ddSERVICE_PROVIDER);
    }


    public void clickSave() {
        driver.findElement(By.id(btnSAVE)).click();
    }

    public void clickDiagnosis() {
        driver.findElement(By.xpath(btnDIAGNOSIS)).click();
    }

    public void clickCiSearch() {
        driver.findElement(By.id(btnCISEARCH)).click();
    }

    public void setStartDate(int delay) {

        String dateTime = CommonUtils.getDateTime("yyyy/MM/dd HH:mm:ss", "Europe/Stockholm", delay);

        driver.findElement(By.id(txtSTART_DATE)).sendKeys(dateTime);

    }
    public String getChangeRecordPageTitle(){
        String ChangeRecordPageTitle= driver.getTitle();
        return ChangeRecordPageTitle;
    }

    public void setEndDate(int delay) {

        String dateTime = CommonUtils.getDateTime("yyyy/MM/dd HH:mm:ss", "Europe/Stockholm", delay);

        driver.findElement(By.id(txtEND_DATE)).sendKeys(dateTime);

    }
    public void selectRequestTypeAsAccessNetworksRANOptimization()
    {
        selectDropDown(ddREQUEST_TYPE, "Access Networks:RAN Optimization", false);
    }


    public String getTimelineStatus(){
        String TimelineStatus= driver.findElement(By.xpath(fld_TIMELINE_DISPLAY_XPATH)).getAttribute("value");
        return TimelineStatus;
    }
    public void clickTimelineButton(){
        driver.findElement(By.xpath(btnTIMELINE_XPATH)).click();
    }

    public void enterTicket(String ticket){
        driver.findElement(By.id(txtSEARCH_TICKET_ID)).sendKeys(ticket);
    }

    public void clickYesOnFrame(){
        driver.findElement(By.id(btnYES_ON_FRAME_ID)).click();
    }
    public void switchToFrame(int frame_index)
    {
        driver.switchTo().frame(frame_index);
    }

    public void clickAddButton(){
        driver.findElement(By.id(btnADD_ID)).click();
    }
    public void clickInternalOpenButton(){
       driver.findElement(By.id(btnINTERNAL_OPEN_ID)).click();
    }
    public void clickInternalDeleteButton(){
        driver.findElement(By.id(btnINTERNAL_DELETE_ID)).click();
    }
    public void clickExternalOpenButton(){
        driver.findElement(By.id(btnEXTERNAL_OPEN_ID)).click();
    }
    public void clickExternalDeleteButton(){
        driver.findElement(By.id(btnEXTERNAL_DELETE_ID)).click();
    }
    public void clickSaveButton(){
        driver.findElement(By.id(btnSAVE_ID)).click();
    }
    public void clickAckButton(){driver.findElement (By.id(btnACK_ID)).click();}

    public void clickSearchButton(){
        driver.findElement(By.id(btnSEARCH_ID)).click();
    }

    public String getProblemTicket(){
        String ticket = driver.findElement(By.id(txtTICKET_ID)).getAttribute("value");

      return ticket;
    }
        public String getRequestTypeText(){
        String RequestTypeText = driver.findElement(By.id(ddREQUEST_TYPE_ID)).getAttribute("value");
        return RequestTypeText;
        }
    public void enterDescription(String description) {
        driver.findElement(By.id(txtDESCRIPTION_ID)).sendKeys(description);
    }

        public String getDescriptionText(){
            String DescriptionText= driver.findElement(By.id(txtDESCRIPTION_ID)).getAttribute("value");
            return DescriptionText;
        }
        public String getPriorityText(){
        String PriorityText = driver.findElement(By.id(ddPRIORITY_ID)).getAttribute("value");
        return PriorityText;
        }

    public void selectWithdrawnReason_FalseAlarmDropDown(){
        selectDropDown(ddWITHDRAWN_REASON, "False Alarm", true);
    }


    public void enterTitle(String Title){
        driver.findElement(By.id(txtTITLE_ID)).sendKeys(Title);
    }



    public void clickNoDropdown(){
        driver.findElement(By.id(ddNO_ID)).click();
    }

    public void clickImpactDropDown(){
        selectDropDownMenu(ddIMPACT);
    }
    public void clickUrgencyDropDown(){
        selectDropDownMenu(ddURGENCY);
    }

    public void selectExtensiveWidespreadDdValue(){
       selectDropDownValue(ddValueEXTENSIVE_WIDESPREAD);
   }
    public void selectSignificantLargeDdValue(){
        selectDropDownValue(ddValueSIGNIFICANT_LARGE);
    }
    public void selectModerateLimitedDdValue(){
        selectDropDownValue(ddValueMODERATE_LIMITED);
    }
    public void select_Impact_ClearDdValue(){
        selectDropDownValue(ddValueCLEAR);
    }
    public void selectCriticalDdValue(){
        selectDropDownValue(ddValueCRITICAL);
    }
    public void selectHighDdValue(){
        selectDropDownValue(ddValueHIGH);
    }

    public void selectMediumDdValue(){
        selectDropDownValue(ddValueMEDIUM);
    }

    public void selectLowDdValue(){
        selectDropDownValue(ddValueLOW);
    }

    public void selectPriority_ClearDdValue(){
        selectDropDownValue(dd_PRIORITY_ValueCLEAR);
    }
    public void selectDuplicateEntriesDdValue(){
        selectDropDownValue(ddValueDUPLICATE_ENTRIES);
    }
    public void selectFalseAlarmDdValue(){
        selectDropDownValue(ddValueFALSE_ALARM);
    }

    public void selectInsuficientInformationDdValue(){
        selectDropDownValue(ddValueINSUFICIENT_INFORMATION);
    }

    public void selectNot_aRootCauseInvestigationDdValue(){
        selectDropDownValue(ddValueNOT_A_ROOTCAUSE_INVESTIGATION);
    }

    public void selectOtherProcessSlovingProblemDdValue(){
        selectDropDownValue(ddValueOTHER_PROCESS_SOLVING_PROBLEM);
    }

    public void selectTestTicketDdValue(){
        selectDropDownValue(ddValueTEST_TICKET);
    }

    public void selectTrainingDdValue(){
        selectDropDownValue(ddValueTRAINING);
    }
    public void selectWithdrawnReason_ClearDdValue(){
        selectDropDownValue(dd_WITHDRAWN_REASON_ValueCLEAR);
    }



    public void clickSwedenCheckBox(){
        driver.findElement(By.id(chkbxSWEDEN)).click();
    }
    public String getStatusText(){
        String StatusText= driver.findElement(By.id(ddSTATuS_ID)).getAttribute("value");
        return StatusText;

    }

    public boolean validateErrorMessage(String message)
    {
        List<WebElement> errorElements = driver.findElement(By.xpath(errorTABLE_XPATH)).findElements(By.tagName("tr"));
        if (errorElements.size() > 0) {

            WebElement e = errorElements.stream().filter(x -> x.getText().trim().contains(message)).findFirst().orElse(null);
            if (e != null) {
                return true;
            }
        }
        return false;
    }

    public boolean validateMultipleErrorMessages()
    {
        List<WebElement> errorElements = driver.findElement(By.xpath(errorTABLE_XPATH)).findElements(By.tagName("tr"));
        if (errorElements.size() > 5) {
            return  true;
        }
        return  false;
    }
    public void acceptAlert(){
        driver.switchTo().alert().accept();
    }

}
