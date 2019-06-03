package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import utils.CommonUtils;

public abstract class BaseRecordPage extends BasePage {

    public static final String ddValueASSIGNED = "Assigned";
    public static final String ddSTATUS = "Status*";
    public static final String ddValuePENDING = "Pending";
    public static final String ddValueUNDER_INVESTIGATION = "Under Investigation";
    public static final String ddValueINVESTIGATION_COMPLETE = "Investigation Complete";
    public static final String ddValueWITHDRWAN = "Withdrawn";
    public static final String ddValueCLEAR = "(clear)";
    public static final String ddValueCLOSED = "Closed";

    public static final String txtCHANGE_BUILDER_FIELD = "arid_WIN_0_600001054";
    public static final String txtSTART_DATE = "arid_WIN_0_777021160";
    public static final String txtEND_DATE = "arid_WIN_0_777021161";

    public static final String btnSAVE = "WIN_0_700025244";
    public static final String btnDIAGNOSIS = "//a[contains(text(),'Diagnosis')]";
    public static final String btnCISEARCH = "WIN_0_999000229";
    public static final String btnACKNOWLEDGE = "WIN_0_777504152";
    public static final String btnSEND = "WIN_0_600002905";

    public static final String btnADD_ID = "WIN_0_777021404";

    public static final String ddREQUEST_TYPE = "Request Type";
    public static final String ddTEMPLATE = "Template";
    public static final String ddESTIMATED_IMPACT = "Estimated Impact";
    public static final String ddACTUAL_IMPACT = "Actual Impact";
    public static final String ddCOMPLETED_CODE = "Completed Code";
    public static final String ddTITLE = "Title";
    public static final String ddREQUEST_CATEGORY = "Request Category";
    public static final String ddCHANGE_RECORD = "WIN_0_755000000";
    public static final String ddSERVICE_PROVIDER = "Service Provider";
    public static final String ddSTATuS_ID = "arid_WIN_0_777031003";
    public static final String ddROOT_CAUSE_CODE = "Root Cause Code";
    public static final String ddROOT_CAUSE_DETAILS_ID = "arid_WIN_0_705002081";
    public static final String ddCLOSER_CODE = "Closure Code";
    public static final String ddValueSOLVED = "Solved";

    public static final String txtEXPECTED_ALARMS = "arid_WIN_0_705001002";
    public static final String txtIMPACT_DURATION_DAYS = "arid_WIN_0_990001006";
    public static final String txtIMPACT_DURATION_HRS = "arid_WIN_0_900000018";
    public static final String txtIMPACT_DURATION_MINS = "arid_WIN_0_900000019";
    public static final String txtIMPACT_DURATION_SECS = "arid_WIN_0_990001007";
    public static final String txtRC_FOUND_DATE_ID = "arid_WIN_0_600001041";
    public static final String txtACTUAL_FINISH_ID = "arid_WIN_0_777504605";
    public static final String txtDECISION_GO_NO_GO_ID = "arid_WIN_0_777504604";


    public static final String chkbxFINLAND = "WIN_0_rc0id600002002";
    public static final String chkbxDENMARK = "WIN_0_rc0id600002003";
    public static final String chkbxNORWAY = "WIN_0_rc0id600002004";
    public static final String chkbxLITHUANIA = "WIN_0_rc0id600002005";
    public static final String chkbxESTONIA = "WIN_0_rc0id600002006";
    public static final String chkbxTELIA_CARRIER = "WIN_0_rc0id600002008";
    public static final String chkbxUNKOWN = "WIN_0_rc0id600002010";
    public static final String chkbxINTERNAL = "WIN_0_rc0id600002009";

    public static final String txtSOLUTION_ID = "arid_WIN_0_777031390";
    public static final String txtSOLUTION_FOUND_DATE = "arid_WIN_0_600001042";
    public static final String btnCLONE_ID = "WIN_0_600002901";


    public static final String ddAUTO_TEXT = "Auto Text";
    public static final String ddValueTECH_BRIDGE_CLOSED = "Tech Bridge Closed";
    public static final String ddTEXT_TEMPLATE = "Text Template";
    public static final String ddValueANALYSIS_ONGOING  = "Analysis ongoing";
    public static final String ddACTIONS = "Actions";
    public static final String ddValueTIME_TRACKING   = "Time Tracking";

    public static final String ddACTIVITY_IN_FRAME = "Activity";
    public static final String ddValueWORKING_ON_TICKET = "Working On Ticket";
    public static final String txtMINS_ID = "arid_WIN_0_900006507";
    public static final String btnOK_ID = "WIN_0_777777851";




    public void selectAutoText_TechBridgeClosed(){
    selectDropDownNameAndValue(ddAUTO_TEXT, ddValueTECH_BRIDGE_CLOSED, false);
    }
    public void selectTextTemplate_AnalysisOnGoing(){
        selectDropDownNameAndValue(ddTEXT_TEMPLATE, ddValueANALYSIS_ONGOING, false);
    } public void clickAddButtonOnTemplate(){
        driver.findElement(By.id(btnADD_ID)).click();
    }
    public void selectActions_TimeTracking(){
        selectDropDownNameAndValue(ddACTIONS, ddValueTIME_TRACKING, false);
    }
    public void selectActivity_WorkingOnTicket(){
        selectDropDownNameAndValue(ddACTIVITY_IN_FRAME, ddValueWORKING_ON_TICKET, false);
    }
    public void enterMins(String mins){
        driver.findElement(By.id(txtMINS_ID)).sendKeys(mins);
    }
    public void clickOkButton(){
        driver.findElement(By.id(btnOK_ID)).click();
    }
    public void selectInvestigationCompleteDdValue(){
        selectDropDownValue(ddValueINVESTIGATION_COMPLETE);
    }
    public void selectRootCauseCodeAs_Technical_HwError() {
        selectDropDownNameAndValue(ddROOT_CAUSE_CODE, "Technical:HW error", false);
    }
    public void enterRootCauseDetails(String rootCauseDetails){
        driver.findElement(By.id(ddROOT_CAUSE_DETAILS_ID)).sendKeys(rootCauseDetails);
    }
    public void selectCloserCodeAsSolved(){
        selectDropDownNameAndValue(ddCLOSER_CODE, ddValueSOLVED, true);
    }
    public void selectClosedDdValue(){
        selectDropDownValue(ddValueCLOSED);
    }

    public void clickAcknowledgeButton() {
        driver.findElement(By.id(btnACKNOWLEDGE)).click();
    }

    public void clickSendButton() {
        driver.findElement(By.id(btnSEND)).click();
    }

    public void clickStatusDropDown() {
        selectDropDownMenu(ddSTATUS);
    }

    public void clickServiceProviderDropDown() {
        selectDropDownMenu(ddSERVICE_PROVIDER);
    }


    public void clickDenmarkCheckBox() {
        driver.findElement(By.id(chkbxDENMARK)).click();
    }

    public void clickNorwayCheckBox() {
        driver.findElement(By.id(chkbxNORWAY)).click();
    }

    public void clickLithuniaCheckBox() {
        driver.findElement(By.id(chkbxLITHUANIA)).click();
    }

    public void clickFinalndCheckBox() {
        driver.findElement(By.id(chkbxFINLAND)).click();
    }

    public void clickEstoniaCheckBox() {
        driver.findElement(By.id(chkbxESTONIA)).click();
    }

    public void clickTeliaCarrierCheckBox() {
        driver.findElement(By.id(chkbxTELIA_CARRIER)).click();
    }

    public void clickUnknownCheckBox() {
        driver.findElement(By.id(chkbxUNKOWN)).click();
    }

    public void clickInternalCheckBox() {
        driver.findElement(By.id(chkbxINTERNAL)).click();
    }

    public void selectActualImpact(String value) {
        selectDropDownNameAndValue(ddACTUAL_IMPACT, value, true);
    }

    public void clickChangeRecord() {
        selectMenuItem(ddCHANGE_RECORD);
    }

    public void selectEstimatedImpact(String value) {
        selectDropDownNameAndValue(ddESTIMATED_IMPACT, value, true);
    }

    public void selectRequestCategory(String value) {
        selectDropDownNameAndValue(ddREQUEST_CATEGORY, value, true);
    }

    public void selectCompletedCode(String value) {
        selectDropDownNameAndValue(ddCOMPLETED_CODE, value, true);
    }

    public void clickExpectedAlarm() {
        driver.findElement(By.id(txtEXPECTED_ALARMS)).click();
    }

    public void selectTitle(String value) {
        selectDropDownNameAndValue(ddTITLE, value, true);
    }

    public void selectRequestType(String value) {
        selectDropDownNameAndValue(ddREQUEST_TYPE, value, true);
    }

    public void selectTemplateAsAll_Mobile_RANExternals_RANConnectivity() {
        selectDropDownNameAndValue(ddTEMPLATE, "All:Mobile:RAN - Externals:RAN Connectivity", true);
    }

    public void selectRequestTypeAs_AccessNetworks_RAN_NSN_2G_3G_4G() {
        selectDropDownNameAndValue(ddREQUEST_TYPE, "Access Networks:RAN NSN 2G/3G/4G", false);

    }

    public String getStatusText() {
        String StatusText = driver.findElement(By.id(ddSTATuS_ID)).getAttribute("value");
        return StatusText;

    }

    public void enterImpactDurationDays(String impactDurationDays) {
        driver.findElement(By.id(txtIMPACT_DURATION_DAYS)).sendKeys(impactDurationDays);
    }

    public void enterImpactDurationHrs(String impactDurationHrs) {
        driver.findElement(By.id(txtIMPACT_DURATION_HRS)).sendKeys(impactDurationHrs);
    }

    public void enterImpactDurationMins(String impactDurationMins) {
        driver.findElement(By.id(txtIMPACT_DURATION_MINS)).sendKeys(impactDurationMins);
    }

    public void enterImpactDurationSecs(String impactDurationSecs) {

        driver.findElement(By.id(txtIMPACT_DURATION_SECS)).sendKeys(impactDurationSecs);
    }

    public Boolean ackButtonStatus() {
        Boolean status = driver.findElement(By.id(btnACKNOWLEDGE)).isEnabled();
        return status;
    }


    public void enterChangeBuilderType(String changeBuilderName) {
        driver.findElement(By.id(txtCHANGE_BUILDER_FIELD)).sendKeys(changeBuilderName);
    }

    public void selectAssignedDdValue() {
        selectDropDownValue(ddValueASSIGNED);
    }

    public void selectPendingDdValue() {
        selectDropDownValue(ddValuePENDING);
    }

    public void selectUnderInvestigationDdValue() {
        selectDropDownValue(ddValueUNDER_INVESTIGATION);
    }

    public void selectWithdrawnDdValue() {
        selectDropDownValue(ddValueWITHDRWAN);
    }

    public void selectClearDdValue() {
        selectDropDownValue(ddValueCLEAR);
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

    public void setEndDate(int delay) {

        String dateTime = CommonUtils.getDateTime("yyyy/MM/dd HH:mm:ss", "Europe/Stockholm", delay);

        driver.findElement(By.id(txtEND_DATE)).sendKeys(dateTime);

    }
   public void enterRcFoundDate(){
       driver.findElement(By.id(txtRC_FOUND_DATE_ID)).sendKeys(Keys.ENTER);
   }
   public void enterActualFinishDate(){
        driver.findElement(By.id(txtACTUAL_FINISH_ID)).sendKeys(Keys.ENTER);
   }
   public void enterDecisionGoNoGoDate(){
        driver.findElement(By.id(txtDECISION_GO_NO_GO_ID)).sendKeys(Keys.ENTER);
   }
    public void selectRequestTypeAsAccessNetworksRANOptimization() {
        selectDropDownNameAndValue(ddREQUEST_TYPE, "Access Networks:RAN Optimization", false);
    }
    public void enterSolution(String Text){
        driver.findElement(By.id(txtSOLUTION_ID)).sendKeys(Text);
    }
    public void enterSolutionFoundDate(){
        driver.findElement(By.id(txtSOLUTION_FOUND_DATE)).sendKeys(Keys.ENTER);
    }
    public void clickCloneButton(){
        driver.findElement(By.id(btnCLONE_ID)).click();
    }

}
