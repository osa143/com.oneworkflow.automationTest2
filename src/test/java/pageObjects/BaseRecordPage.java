package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import utils.CommonUtils;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.List;

public class BaseRecordPage extends BasePage {

    public static final String ddValueASSIGNED = "Assigned";
    public static final String ddSTATUS = "Status*";
    public static final String ddValuePENDING = "Pending";
    public static final String ddValueUNDER_INVESTIGATION = "Under Investigation";
    public static final String ddValueINVESTIGATION_COMPLETE = "Investigation Complete";
    public static final String ddValueWITHDRWAN = "Withdrawn";
    public static final String ddValueCLEAR = "(clear)";
    public static final String ddValueCLOSED = "Closed";

    public static final String txtCHANGE_BUILDER_FIELD_ID = "arid_WIN_0_600001054";
    public static final String txtIMPLEMENTATION_ID = "arid_WIN_0_700007007";
    public static final String txtTEST_PLAN_ID = "arid_WIN_0_700007008";
    public static final String txtSTART_DATE = "arid_WIN_0_777021160";
    public static final String txtROLL_BACK = "arid_WIN_0_700007009";
    public static final String txtCOMMUNICATION_PLAN_ID = "arid_WIN_0_600001053";
    public static final String txtVER_OF_FUNCTIONALITY_ID = "arid_WIN_0_600001055";
    public static final String txtRISK_DESCRIPTION_ID = "arid_WIN_0_600001065";

    public static final String txtEND_DATE = "arid_WIN_0_777021161";
    public static final String txtREASON_ID = "arid_WIN_0_705001003";

    public static final String txtEXPECTED_ALARMS = "arid_WIN_0_705001002";
    public static final String txtIMPACT_DURATION_DAYS = "arid_WIN_0_990001006";
    public static final String txtIMPACT_DURATION_HRS = "arid_WIN_0_900000018";
    public static final String txtIMPACT_DURATION_MINS = "arid_WIN_0_900000019";
    public static final String txtIMPACT_DURATION_SECS = "arid_WIN_0_990001007";
    public static final String txtRC_FOUND_DATE_ID = "arid_WIN_0_600001041";
    public static final String txtACTUAL_FINISH_ID = "arid_WIN_0_777504605";
    public static final String txtDECISION_GO_NO_GO_ID = "arid_WIN_0_777504604";
    public static final String txtSERVICE_AND_CUSTOMER_IMPACT = "arid_WIN_0_730030000";



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
    public static final String txtROOT_CAUSE_DETAILS_ID = "arid_WIN_0_705002081";
    public static final String ddCLOSER_CODE = "Closure Code";
    public static final String ddValueSOLVED = "Solved";
    public static final String ddValueNO_IMPACT = "No Impact";

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
    public static final String ddValueCABLE_SPLICING = "Cable splicing";

    public static final String ddACTIVITY_IN_FRAME = "Activity";
    public static final String ddValueWORKING_ON_TICKET = "Working On Ticket";
    public static final String txtMINS_ID = "arid_WIN_0_900006507";
    public static final String btnOK_ID = "WIN_0_777777851";

    public static final String btnATTACHMENTS = "WIN_0_999000623";
    private static final String txtTICKET_ID = "arid_WIN_0_730000060";
    private static final String txtSEARCH_TICKET_ID = "arid_WIN_0_777777600";
    private static final String ddSUMMARY = "Summary*";
    private static final String txtDESCRIPTION_ON_FRAME_ID = "arid_WIN_0_700500102";
    private static final String btnADD_ATTACHMENT_ON_FRAME = "//a[contains(@class,'Add btn btn3d TableBtn')]";
    private static final String btnCHOOSE_FILE_XPATH = "//input[@id='PopupAttInput']";
    private static final String btnOK_ON_FRAME_XPATH = "//a[contains(text(),'OK')]";
    private static final String btnSAVE_ATTACHMENT_ON_FRAME = "WIN_0_700500109";

    public void enterDescription_Attachment_OnFrame(String description){
        driver.findElement(By.id(txtDESCRIPTION_ON_FRAME_ID)).sendKeys(description);
    }
    public void clickAdd_AttachmentOnFrame(){
        driver.findElement(By.xpath(btnADD_ATTACHMENT_ON_FRAME)).click();
    }
    public void clickonChooseFile_OnFrame(){
        driver.findElement(By.xpath(btnCHOOSE_FILE_XPATH)).click();
    }
    public void clickOk_AttachmentOnFrame(){
        driver.findElement(By.xpath(btnOK_ON_FRAME_XPATH)).click();
    }

    public void clickSave_AttachmentOnFrame(){
        driver.findElement(By.id(btnSAVE_ATTACHMENT_ON_FRAME)).click();
    }

    public void clickAttachments(){
        driver.findElement(By.id(btnATTACHMENTS)).click();
    }
    public void selectSummaryDropDownAs(String value){
    selectDropDownNameAndValue(ddSUMMARY, value, false);

    }

   //use this method for all send keys.
    public void enterText(String textName, String text)
    {
        switch(textName)
        {
            case "rootCauseDetails" :
                enterTextBy(By.id(txtROOT_CAUSE_DETAILS_ID), text);
                break;

            case "minutes" :
                enterTextBy(By.id(txtMINS_ID), text);
                break;

            case "durationdays":
                enterTextBy(By.id(txtIMPACT_DURATION_DAYS), text);
                break;

            case "durationhours":
                enterTextBy(By.id(txtIMPACT_DURATION_HRS), text);
                break;

            case "durationminutes":
                enterTextBy(By.id(txtIMPACT_DURATION_MINS), text);
                break;

            case "durationseconds":
                enterTextBy(By.id(txtIMPACT_DURATION_SECS), text);
                break;

        }
    }

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
        driver.findElement(By.id(txtROOT_CAUSE_DETAILS_ID)).sendKeys(rootCauseDetails);
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
    public void selectStatus(String value){
        selectDropDownNameAndValue(ddSTATUS, value, false);
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
        selectDropDownNameAndValue(ddESTIMATED_IMPACT, value, false);
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
    public void selectTitleAs(String value){
        selectDropDownNameAndValue(ddTITLE, value, false);
    }

    public void selectRequestType(String value, boolean readOnly) {
        selectDropDownNameAndValue(ddREQUEST_TYPE, value, readOnly);
    }
    //ALL:IT:Other
    public void selectTemplate(String value) {
        selectDropDownNameAndValue(ddTEMPLATE, value, true);

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
        driver.findElement(By.id(txtCHANGE_BUILDER_FIELD_ID)).sendKeys(changeBuilderName);
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

    public void enterStartDateAsTodayMidnight(int delay)
    {
        driver.findElement(By.id(txtSTART_DATE)).sendKeys(CommonUtils.getDateAsTodayMidnight(delay));
    }

    public void enterEndDateAsTodayMidnight(int delay)
    {
        driver.findElement(By.id(txtEND_DATE)).sendKeys(CommonUtils.getDateAsTodayMidnight(delay));
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
    public void enterSolution(String Text){
        driver.findElement(By.id(txtSOLUTION_ID)).sendKeys(Text);
    }
    public void enterSolutionFoundDate(){
        driver.findElement(By.id(txtSOLUTION_FOUND_DATE)).sendKeys(Keys.ENTER);
    }
    public void clickCloneButton(){
        driver.findElement(By.id(btnCLONE_ID)).click();
    }
    public void enterReason(String Reason){
        driver.findElement(By.id(txtREASON_ID)).sendKeys(Reason);
    }
    public void enterChangeBuilder(String ChangeBuilder){
        driver.findElement(By.id(txtCHANGE_BUILDER_FIELD_ID)).sendKeys(ChangeBuilder);

    }
   public void enterImplementation(String implementation){
        driver.findElement(By.id(txtIMPLEMENTATION_ID)).sendKeys(implementation);
   }
   public void enterTestPlan(String testPlan){
        driver.findElement(By.id(txtTEST_PLAN_ID)).sendKeys(testPlan);
   }

    public void enterRollBack(String rollBack){
        driver.findElement(By.id(txtROLL_BACK)).sendKeys(rollBack);
    }
    public void enterCommunicationPlan(String communicationPlan){
        driver.findElement(By.id(txtCOMMUNICATION_PLAN_ID)).sendKeys(communicationPlan);

    }
    public void enterVerOfFunctionality(String verOfFunctionality){
        driver.findElement(By.id(txtVER_OF_FUNCTIONALITY_ID)).sendKeys(verOfFunctionality);
    }
    public void enterRiskDescriptionId(String riskDescriptionId){
        driver.findElement(By.id(txtRISK_DESCRIPTION_ID)).sendKeys(riskDescriptionId);
    }
    public void enterServiceAndCustomerImpact(String text){
        driver.findElement(By.id(txtSERVICE_AND_CUSTOMER_IMPACT)).sendKeys(text);
    }
    public String verifyTicketIsnull(){
        return getTextById(txtSEARCH_TICKET_ID);
    }
    public String verifyTicketIsNotNull(){
        return getTextById(txtTICKET_ID);
    }


}
