package pageObjects;

import io.cucumber.datatable.DataTable;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;
import utils.CommonUtils;

import java.util.List;

public class BaseRecordPage extends BasePage {


    public static final String ddSTATUS = "Status*";
    public static final String ddValueINVESTIGATION_COMPLETE = "Investigation Complete";
    public static final String ddValueCLOSED = "Closed";

    public static final String txtCHANGE_BUILDER_FIELD_ID = "arid_WIN_0_600001054";
    public static final String txtIMPLEMENTATION_ID = "arid_WIN_0_700007007";
    public static final String txtTEST_PLAN_ID = "arid_WIN_0_700007008";
    public static final String txt_REQUEST_START = "arid_WIN_0_777021160";
    public static final String txtROLL_BACK = "arid_WIN_0_700007009";
    public static final String txtCOMMUNICATION_PLAN_ID = "arid_WIN_0_600001053";
    public static final String txtVER_OF_FUNCTIONALITY_ID = "arid_WIN_0_600001055";
    public static final String txtRISK_DESCRIPTION_ID = "arid_WIN_0_600001065";
    public static final String txtINFORMATION_RESTRICTED_INFORMATION_ID= "arid_WIN_0_600001056";

    public static final String txt_REQUEST_END = "arid_WIN_0_777021161";
    public static final String txtREASON_ID = "arid_WIN_0_705001003";
    public static final String txtASSIGNEE_ID = "arid_WIN_0_4";

    public static final String txtEXPECTED_ALARMS = "arid_WIN_0_705001002";
    public static final String txtIMPACT_DURATION_DAYS = "arid_WIN_0_990001006";
    public static final String txtIMPACT_DURATION_HRS = "arid_WIN_0_900000018";
    public static final String txtIMPACT_DURATION_MINS = "arid_WIN_0_900000019";
    public static final String txtIMPACT_DURATION_SECS = "arid_WIN_0_990001007";
    public static final String txtRC_FOUND_DATE_ID = "arid_WIN_0_600001041";
    public static final String txtACTUAL_FINISH_ID = "arid_WIN_0_777504605";
    public static final String txtDECISION_GO_NO_GO_ID = "arid_WIN_0_777504604";
    public static final String txtSERVICE_AND_CUSTOMER_IMPACT = "arid_WIN_0_730030000";
    public static final String txtANALYSIS_TEAM_MEMBER1_ID = "arid_WIN_0_600001015";


    public static final String btnYES = "WIN_4_700027904";
    public static final String btnSAVE = "WIN_0_700025244";
    public static final String btnDIAGNOSIS = "//a[contains(text(),'Diagnosis')]";
    public static final String btnCISEARCH = "WIN_0_999000229";
    public static final String btnACKNOWLEDGE = "WIN_0_777504152";
    public static final String btnSEND = "WIN_0_600002905";

    public static final String btnADD_ID = "WIN_0_777021404";

    public static final String ddREQUEST_TYPE = "Request Type";
    public static final String ddTEMPLATE = "Template";
    public static final String ddIMPACT = "Impact";
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
    public static final String ddASSIGNED_PROFILE = "Assigned Profile";
    public static final String ddASSIGNEE = "Assignee";
    public static final String ddCLOSURE_CODE = "Closure Code";

    public static final String ddValueSOLVED = "Solved";


    public static final String chkbxSWEDEN = "WIN_0_rc0id600002001";
    public static final String chkbxFINLAND = "WIN_0_rc0id600002002";
    public static final String chkbxDENMARK = "WIN_0_rc0id600002003";
    public static final String chkbxNORWAY = "WIN_0_rc0id600002004";
    public static final String chkbxLITHUANIA = "WIN_0_rc0id600002005";
    public static final String chkbxESTONIA = "WIN_0_rc0id600002006";
    public static final String chkbxTELIA_CARRIER = "WIN_0_rc0id600002008";
    public static final String chkbxUNKOWN = "WIN_0_rc0id600002010";
    public static final String chkbxINTERNAL = "WIN_0_rc0id600002009";
    public static final String chkbxFirstRow_Diagnosis = "//*[@id='T700009087']/tbody/tr[2]/td[1]/input";
    public static final String chkbx_ThirdRow_Diagnosis= "//*[@id='T700009087']/tbody/tr[5]/td[1]/input";

    public static final String txtSOLUTION_ID = "arid_WIN_0_705002080";
    public static final String txtSOLUTION_FOUND_DATE = "arid_WIN_0_600001042";
    public static final String btnCLONE_ID = "WIN_0_600002901";
    public static final String btnREMOVE = "WIN_0_705002008";

    public static final String div_AFFECTED_BU_ID = "WIN_0_600002504";
    public static final String chkbx_AFFECTED_BU_XPATH= "//input[type='checkbox']";
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
    public static final String btn_REFRESH= "WIN_0_600003444";

    public static final String btnATTACHMENTS = "WIN_0_999000623";
    public static final String btn_ATTACHMENTS = "WIN_0_999000368";
    public static final String txtTICKET_ID = "arid_WIN_0_730000060";
    public static final String txtSEARCH_TICKET_ID = "arid_WIN_0_777777600";
    public static final String ddSUMMARY = "Summary*";
    public static final String txtDESCRIPTION_ON_FRAME_ID = "arid_WIN_0_700500102";
    public static final String btnADD_ATTACHMENT_ON_FRAME = "//a[contains(@class,'Add btn btn3d TableBtn')]";
    public static final String btnCHOOSE_FILE_XPATH = "//input[@id='PopupAttInput']";
    public static final String btnOK_ON_FRAME_XPATH = "//a[contains(text(),'OK')]";
    public static final String btnSAVE_ATTACHMENT_ON_FRAME = "WIN_0_700500109";
    public static final String btnOWNER_ID = "WIN_0_999000621";

    public static final String table_DIAGNOSIS_ID = "T700009087";
    public static final String table_ALARMS_ID = "T700508140";
    public static final String table_LINKED_ITEMS_ID = "T777506000";
    public static final String table_INTERESTED_PARTIES_ID = "T705002015";
    private static final String table_ADD_INTERESTED_PARTIES= "T700027964";
    public static final String btnREFRESH_XPATH = "//div[@id='WIN_0_999000510']//a[@class='Ref btn btn3d TableBtn'][contains(text(),'Refresh')]";
    private static final String btnYes = "WIN_0_700027904";
    public static final String txt_PROBLEM_REVIEW_FIELD= "arid_WIN_0_600001011";
    private static final String ddSTATUS_TROUBLE_EVENT_PAGE = "Status";
    private static final String txtTICKET_ID_PLUS_ID= "arid_WIN_0_777777600";
    private static final String btn_SEARCH= "WIN_0_1002";
    private static final String table_NOTIFICATIONS= "T700020677";
    private static final String dd_OWNER_PROFILE= "Owner Profile*";
    private static final String txt_SUMMARY= "arid_WIN_0_700500101";
    private static final String txt_CATEGORY= "arid_WIN_0_200000003";
    private static final String txt_TYPE= "arid_WIN_0_200000004";
    private static final String txt_ITEM= "arid_WIN_0_200000005";

    private static final String rbtn_INTERNAL = "WIN_0_rc0id600001901";
    private static final String rbtn_EXTERNAL= "WIN_0_rc1id600001901";
    private static final String table_ATTACHMENT_INTERNAL= "T777000013";
    private static final String table_ATTACHMENT_EXTERNAL= "T600002204";



    public String getCategory(){
        return getAttributeValueById(txt_CATEGORY);
    }
    public String getType(){
        return getAttributeValueById(txt_TYPE);
    }
    public String getItem(){
        return getAttributeValueById(txt_ITEM);
    }



    public void enterSummary_attachments(String text){
        enterTextByElement(By.id(txt_SUMMARY), text);
    }
   public String getRequestStart(){
       return getAttributeValueById(txt_REQUEST_START);
   }
    public String getRequestEnd(){
        return getAttributeValueById(txt_REQUEST_END);
    }
    public boolean verifyChangeBuilderIsReadOnly(){
        return checkIfControlIsReadonly(txtCHANGE_BUILDER_FIELD_ID);
    }
    public boolean verifyCommunicationPlanIsReadOnly(){
        return checkIfControlIsReadonly(txtCOMMUNICATION_PLAN_ID);
    }


    public boolean verifyVerOfFuncionalityIsReadOnly(){
        return checkIfControlIsReadonly(txtVER_OF_FUNCTIONALITY_ID);
    }
    public boolean verifyRiskDescriptionIsReadOnly(){
        return checkIfControlIsReadonly(txtRISK_DESCRIPTION_ID);
    }
    public String getText_notifications(String colName, int rowNum){
        return getTableCellData(By.id(table_NOTIFICATIONS), colName, rowNum );
    }

    public void clickTableElement_interestedParteis(String colName, String cellData){
        WebElement element=getTableCellElement(By.id(table_INTERESTED_PARTIES_ID), colName, cellData);
        element.click();
    }
    public boolean verifyReasonIsReadOnly(){
        return checkIfControlIsReadonly(txtREASON_ID);
    }
    public boolean verifyImplementationIsReadOnly(){
        return checkIfControlIsReadonly(txtIMPLEMENTATION_ID);
    }
    public boolean verifyTestPlanIsReadOnly(){
        return checkIfControlIsReadonly(txtTEST_PLAN_ID);
    }
    public boolean verifyRollbackIsReadOnly(){
        return checkIfControlIsReadonly(txtROLL_BACK);
    }

    public void clickSearch(){
        clickElement(By.id(btn_SEARCH));
    }

    public void enterTicketIdPlus(String ticketId){
        enterTextByElement(By.id(txtTICKET_ID_PLUS_ID),ticketId);

    }
    public boolean verifyIsDenmarkSelected(){
        return verifyIsElementSelected(By.id(chkbxDENMARK));
    }

    public void clickRefresh_ticketFresh(){
        clickElement(By.id(btn_REFRESH));
        wait(3000);
    }

    public boolean verifyIsFinlandSelected(){
        return findElement(By.id(chkbxFINLAND)).isSelected();
    }
    public boolean verifyIsSwedenSelected(){
        return findElement(By.id(chkbxSWEDEN)).isSelected();
    }
    public boolean verifySwedenEnable(){
        return verifyElementIsEnabledByElement(By.id(chkbxSWEDEN));
    }
    public boolean verifyFinlandEnable(){
        return verifyElementIsEnabledByElement(By.id(chkbxFINLAND));
    }
    public boolean verifyDenmarkEnable(){
        return verifyElementIsEnabledByElement(By.id(chkbxDENMARK));
    }
    public boolean verifyNorwayEnable(){
        return verifyElementIsEnabledByElement(By.id(chkbxNORWAY));
    }
    public boolean verifyLithuniaEnable(){
        return verifyElementIsEnabledByElement(By.id(chkbxLITHUANIA));
    }
    public boolean verifyEstoniaEnable(){
        return verifyElementIsEnabledByElement(By.id(chkbxESTONIA));
    }
    public boolean verifyTeliaCarrierEnable(){
        return verifyElementIsEnabledByElement(By.id(chkbxTELIA_CARRIER));
    }
    public boolean verifyInternalEnable(){
        return verifyElementIsEnabledByElement(By.id(chkbxINTERNAL));
    }
    public boolean verifyUnknownEnable(){
        return verifyElementIsEnabledByElement(By.id(chkbxUNKOWN));
    }


    public void clickOwner(){
        findElement(By.id(btnOWNER_ID)).click();
    }
    public void selectClosureCode(String value){
        selectDropDownNameAndValue(ddCLOSER_CODE, value, true);
    }
    public boolean IsTabDisplayed(String tabName){
        try {
            selectTab(tabName);

        }
        catch (NullPointerException ex)
        {
            return false;
        }
        return true;
    }

    public void enterProblemReviewField(String text){
        findElement(By.id(txt_PROBLEM_REVIEW_FIELD)).sendKeys(text);
    }
    public String getProblemReviewFieldText(){
        return getAttributeValueById(txt_PROBLEM_REVIEW_FIELD);
    }

    public void selectStatus_troubleEventPage(String value){
        selectDropDownNameAndValue(ddSTATUS_TROUBLE_EVENT_PAGE, value, false);
    }

   public void clickYes(){
        findElement(By.id(btnYES)).click();
   }

    Actions action = new Actions(driver);

    public String verifyColumnStatus(String columnName, int rowNum)
    {
        wait(500);
      return getTableCellData(By.id(table_DIAGNOSIS_ID), columnName, rowNum );

    }
    public void PrimaryIsDK_SGSN_AMBMME1(String primary, String ciName)
    {
        Assert.assertEquals(getTableCellData(By.id(table_DIAGNOSIS_ID), "PrimarySecondary", 1 ), primary);
        Assert.assertEquals(getTableCellData(By.id(table_DIAGNOSIS_ID), "CI Name", 1 ), ciName);

    }
    public void verifyCiDetails(String ci1, String ci2, String ci3, String ci4)
    {
        Assert.assertEquals(getTableCellData(By.id(table_DIAGNOSIS_ID), "CI Name", 1 ), ci1);
        Assert.assertEquals(getTableCellData(By.id(table_DIAGNOSIS_ID), "CI Name", 2 ), ci2);
        Assert.assertEquals(getTableCellData(By.id(table_DIAGNOSIS_ID), "CI Name", 3 ), ci3);
        Assert.assertEquals(getTableCellData(By.id(table_DIAGNOSIS_ID), "CI Name", 4 ), ci4);

    }

    public String verifyAlarmStatus(){
        return getTableCellData(By.id(table_ALARMS_ID), "AlarmStatus", 1);
    }
    public void selectPrimaryTicket()
    {
       WebElement element = findElement(By.xpath(chkbxFirstRow_Diagnosis));
       element.click();
       action.contextClick(element).build().perform();

    }
    public void selectTicketAndRightClick()
    {
        saveCiDetails(true);
        WebElement element = findElement(By.xpath(chkbx_ThirdRow_Diagnosis));
        element.click();
        action.contextClick(element).build().perform();

    }

    public boolean verifyColumnNamesByTable(String columnNames)
    {
       return verifyColumnNames(columnNames, By.id(table_DIAGNOSIS_ID));
    }
    public void rightClickOnCi(){
        action.contextClick(findElement(By.xpath(chkbx_ThirdRow_Diagnosis))).build().perform();
        wait(1000);
    }
    public String saveCiDetails(boolean before)
    {
        String str = "";
        WebElement tr = driver.findElement(By.xpath("//*[@id='T700009087']/tbody/tr[4]"));
        List<WebElement> tds = tr.findElements(By.tagName("td"));
        for(int i = 0; i < tds.size(); i++)
        {
            str += tds.get(i).getText() + ":";
        }
        System.out.println("CI Details: " + str);

        if(before)
           CommonUtils.ciDetailsBeforeUpdate = str;
        return  str;
    }

    public void selectAndRightClickOnTableElement(String cellData)
    {
        WebElement element = getTableCellElement(By.id(table_DIAGNOSIS_ID), "CI Name", cellData);
        element.click();
        rightClickOnElement(element);
        wait(1000);

    }
    public String getTicketValue() {
        return getAttributeValueById(txtTICKET_ID);
    }

    public boolean validateCIColumnsHaveData()
    {
        int size = getTableRows(By.id(table_DIAGNOSIS_ID)).size();
        if(size > 1){
            return true;
        }
        return false;
    }

    public boolean validateLinkedItemsAvailability()
    {
       int size = getTableRows(By.id(table_LINKED_ITEMS_ID)).size();
       if(size > 4){
           return true;
       }
       return false;
    }
    public boolean validateLinkedItemsAvailability(int ticketSize)
    {
        wait(1000);
        int size = getTableRows(By.id(table_LINKED_ITEMS_ID)).size();
        System.out.println("Available Tickets" + (size-1));
        if(ticketSize > size){
            return true;
        }
        return false;
    }
    public boolean validateChildAlarmsAvailability()
    {
        int size = getTableRows(By.id(table_ALARMS_ID)).size();
        if(size > 4){
            return true;
        }
        return false;
    }
    public void clickRefresh_timeline()
    {
        clickElement(By.xpath(btnREFRESH_XPATH));
        wait(1500);
    }
    public boolean isStatusDropDownReadOnly(){
        return checkIfControlIsReadonly(ddSTATuS_ID);
    }

    public boolean isRestrictedTabDisplayed(String tabName){
        try {
            selectTab(tabName);
        }
        catch (NullPointerException ex)
        {
            return false;
        }
        return true;
    }
    public String getText(String columnName, int rowNum){
        return getTableCellData(By.id(table_INTERESTED_PARTIES_ID), columnName, rowNum);
    }
    public boolean verifyUserListedUnderInterestedParty(){
        int size= getTableRows(By.id(table_INTERESTED_PARTIES_ID)).size();
        if(size>2){
            return true;
        }
        return false;
    }
   public void enterInformation_restrictedInformation(String text){
        enterTextByElement(By.id(txtINFORMATION_RESTRICTED_INFORMATION_ID), text);
   }

   public String getInformationText_restrictedInformation(){
        return getAttributeValueById(txtINFORMATION_RESTRICTED_INFORMATION_ID);
   }

    public void enterAnalysisTeamMember1(String text){
        enterTextByElement(By.id(txtANALYSIS_TEAM_MEMBER1_ID), text);
    }

    public void selectAssignedProfile(String value){
        selectDropDownNameAndValue(ddASSIGNED_PROFILE, value, false);
    }
    public boolean verifyDropdownValuesByName(String dropdownName, String value, String dropdownValues, String readOnly){
        if(readOnly.equals("readonly")) {
            return openDropdownAndGetValues(dropdownName, value, true, dropdownValues);
        }
        else
        {
            return openDropdownAndGetValues(dropdownName, value, false, dropdownValues);
        }
    }

    public void verifyMultipleDropdownValues(String dropdownName, DataTable dataTable, String readOnly)
    {
        List<List<String>> dropdownValues = dataTable.asLists(String.class);
        for (int i = 1; i < dropdownValues.size(); i ++) {

            String selectedValue = dropdownValues.get(i).get(0);
            String valuesToBePresent = dropdownValues.get(i).get(1);
            Assert.assertTrue(verifyDropdownValuesByName(dropdownName,selectedValue, valuesToBePresent, readOnly));
            clickEscButton();
            wait(500);
        }
    }


    public String getAssigneeText(){
        return getAttributeValueById(txtASSIGNEE_ID);
    }

    public void enterDescription_Attachment_OnFrame(String description){
        enterTextByElement(By.id(txtDESCRIPTION_ON_FRAME_ID), description);
    }
    public void clickAdd_AttachmentOnFrame(){
        clickElement(By.xpath(btnADD_ATTACHMENT_ON_FRAME));
    }
    public void clickonChooseFile_OnFrame(){
        driver.switchTo().parentFrame();
        driver.switchTo().frame(2);
        driver.switchTo().frame(1);
        clickElement(By.xpath(btnCHOOSE_FILE_XPATH));
    }
    public void clickOk_AttachmentOnFrame(){
        clickElement(By.xpath(btnOK_ON_FRAME_XPATH));
        wait(1000);
    }

    public void clickSave_AttachmentOnFrame(){
        clickElement(By.id(btnSAVE_ATTACHMENT_ON_FRAME));
    }

    public void clickAttachments(){
        clickElement(By.id(btn_ATTACHMENTS));
    }
    public void clickOnAttachments(){
        clickElement(By.id(btn_ATTACHMENTS));
    }
    public void selectSummaryDropDownAs(String value){
    selectDropDownNameAndValue(ddSUMMARY, value, false);

    }
    public String getAnalysisTeamMember1(){
       return getAttributeValueById(txtANALYSIS_TEAM_MEMBER1_ID);
    }

    public void selectAssignee(String value, String alphabet, int keyupTimes){

        selectDropDownNameAndValueForInvisibleElements(ddASSIGNEE, value, false, alphabet, keyupTimes);
    }
    public String verifyMessage(DataTable dataTable) {
        List<List<String>> messages = dataTable.asLists(String.class);
        for (int i = 1; i < messages.size(); i++) {
            System.out.println("timeline message is: " + messages.get(i).get(0));
            return messages.get(i).get(0);
        }
        return null;
    }

   public void clickRemoveButton(){
        clickElement(By.id(btnREMOVE));
   }
    public void selectAutoText_TechBridgeClosed(){
    selectDropDownNameAndValue(ddAUTO_TEXT, ddValueTECH_BRIDGE_CLOSED, false);
    }
    public void selectTextTemplate_AnalysisOnGoing(){
        selectDropDownNameAndValue(ddTEXT_TEMPLATE, ddValueANALYSIS_ONGOING, false);
    } public void clickAddButtonOnTemplate(){
        clickElement(By.id(btnADD_ID));
    }
    public void selectActions_TimeTracking(){
        selectDropDownNameAndValue(ddACTIONS, ddValueTIME_TRACKING, false);
    }
    public void selectActivity_WorkingOnTicket(){
        selectDropDownNameAndValue(ddACTIVITY_IN_FRAME, ddValueWORKING_ON_TICKET, false);
    }
    public void enterMins(String mins){
        enterTextByElement(By.id(txtMINS_ID), mins);
    }
    public void clickOkButton(){
        clickElement(By.id(btnOK_ID));
    }
    public void selectInvestigationCompleteDdValue(){
        selectDropDownValue(ddValueINVESTIGATION_COMPLETE);
    }
    public void selectRootCauseCodeAs_Technical_HwError() {
        selectDropDownNameAndValue(ddROOT_CAUSE_CODE, "Technical:HW error", false);
    }
    public void selectRootCauseCode(String value) {
        selectDropDownNameAndValue(ddROOT_CAUSE_CODE, value, false);
    }
    public void enterRootCauseDetails(String rootCauseDetails){
        enterTextByElement(By.id(txtROOT_CAUSE_DETAILS_ID), rootCauseDetails);
    }
    public void selectCloserCodeAsSolved(){
        selectDropDownNameAndValue(ddCLOSER_CODE, ddValueSOLVED, true);
    }

    public void selectCloserCode(String value){
        findElement(By.id("arid_WIN_0_777031381")).click();
        wait(2000);
        selectDropDownValue(value);
    }
    public void enterClosureCode(String text){
        enterTextByElement(By.id("arid_WIN_0_777031381"),text);

    }
    public void selectClosedDdValue(){
        selectDropDownValue(ddValueCLOSED);
    }

    public void clickAcknowledgeButton() {
        clickElement(By.id(btnACKNOWLEDGE));
    }

    public void clickSendButton() {
        clickElement(By.id(btnSEND));
    }

    public void clickStatusDropDown() {
        selectDropDownMenu(ddSTATUS);
    }
    public void selectStatus(String value){
        selectDropDownNameAndValue(ddSTATUS, value, false);
    }

    public void clickDenmarkCheckBox() {
        driver.findElement(By.id(chkbxDENMARK)).click();
    }

    public void clickNorwayCheckBox() {
        clickElement(By.id(chkbxNORWAY));
    }

    public void clickLithuniaCheckBox() {
        clickElement(By.id(chkbxLITHUANIA));
    }

    public void clickFinalndCheckBox() {
        clickElement(By.id(chkbxFINLAND));
    }

    public void clickEstoniaCheckBox() {
        clickElement(By.id(chkbxESTONIA));
    }

    public void clickTeliaCarrierCheckBox() {
        clickElement(By.id(chkbxTELIA_CARRIER));
    }

    public void clickUnknownCheckBox() {
        clickElement(By.id(chkbxUNKOWN));
    }

    public void clickInternalCheckBox() {
        clickElement(By.id(chkbxINTERNAL));
    }

    public void selectActualImpact(String value) {
        selectDropDownNameAndValue(ddACTUAL_IMPACT, value, true);
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
        clickElement(By.id(txtEXPECTED_ALARMS));
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
        String StatusText = findElement(By.id(ddSTATuS_ID)).getAttribute("value");
        return StatusText;

    }
    public void enterImpactDurationDays(String impactDurationDays) {
        enterTextByElement(By.id(txtIMPACT_DURATION_DAYS), impactDurationDays);

    }

    public void enterImpactDurationHrs(String impactDurationHrs) {
        enterTextByElement(By.id(txtIMPACT_DURATION_DAYS), impactDurationHrs);
    }

    public void enterImpactDurationMins(String impactDurationMins) {
        enterTextByElement(By.id(txtIMPACT_DURATION_MINS), impactDurationMins);
    }

    public void enterImpactDurationSecs(String impactDurationSecs) {

        enterTextByElement(By.id(txtIMPACT_DURATION_SECS), impactDurationSecs);
    }

    public Boolean ackButtonStatus() {
         return verifyElementIsEnabledByElement(By.id(btnACKNOWLEDGE));

    }


    public void enterChangeBuilderType(String changeBuilderName) {
        enterTextByElement(By.id(txtCHANGE_BUILDER_FIELD_ID), changeBuilderName);
    }

    public void clickSave() {
        clickElement(By.id(btnSAVE));
        wait(1000);
    }

    public void clickDiagnosis() {
        try {
            clickElementByContainsTextAndTagName("*", "Diagnosis");
        } catch (Exception e) {
            wait(5000);
            selectTab("Diagnosis");
        }
    }

    public void clickCiSearch() {
        clickElement(By.id(btnCISEARCH));
    }

    public void enterStartDate(int delay) {
        String dateTime = CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", delay);
        findElement(By.id(txt_REQUEST_START)).clear();
        enterTextByElement(By.id(txt_REQUEST_START),dateTime );
    }

    public void enterEndDate(int delay) {

        String dateTime = CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", delay);
        findElement(By.id(txt_REQUEST_END)).clear();
        enterTextByElement(By.id(txt_REQUEST_END),dateTime );
    }

    public void enterStartDate_format(int delay) {
        String dateTime = CommonUtils.getDateTime("MM/dd/yyyy HH:mm:ss", "Europe/Stockholm", delay);
        findElement(By.id(txt_REQUEST_START)).clear();
        enterTextByElement(By.id(txt_REQUEST_START),dateTime );
    }

    public void enterEndDate_format(int delay) {

        String dateTime = CommonUtils.getDateTime("MM/dd/yyyy HH:mm:ss", "Europe/Stockholm", delay);
        findElement(By.id(txt_REQUEST_END)).clear();
        enterTextByElement(By.id(txt_REQUEST_END),dateTime );
    }

    public void enterStartDateAs(String startDate)
    {
        findElement(By.id(txt_REQUEST_START)).clear();
        enterTextByElement(By.id(txt_REQUEST_START), startDate);
    }

    public void enterEndDateAs(String endDate)
    {
        findElement(By.id(txt_REQUEST_END)).clear();
        enterTextByElement(By.id(txt_REQUEST_END), endDate);

    }

   public void enterRcFoundDate() {
      findElement(By.id(txtRC_FOUND_DATE_ID)).sendKeys(Keys.ENTER);
   }
   public void enterActualFinishDate(){
        findElement(By.id(txtACTUAL_FINISH_ID)).sendKeys(Keys.ENTER);
   }
   public void enterDecisionGoNoGoDate(){
        findElement(By.id(txtDECISION_GO_NO_GO_ID)).sendKeys(Keys.ENTER);
   }
    public void enterSolution(String Text)
    {enterTextByElement(By.id(txtSOLUTION_ID),Text);
    }
    public void enterSolutionFoundDate(){
        findElement(By.id(txtSOLUTION_FOUND_DATE)).sendKeys(Keys.ENTER);
    }
    public void clickCloneButton(){
        clickElement(By.id(btnCLONE_ID));
    }
    public void enterReason(String Reason){
        findElement(By.id(txtREASON_ID)).clear();
        enterTextByElement(By.id(txtREASON_ID),Reason);
    }
    public void enterChangeBuilder(String ChangeBuilder){
        enterTextByElement(By.id(txtCHANGE_BUILDER_FIELD_ID), ChangeBuilder);

    }
   public void enterImplementation(String implementation){
        enterTextByElement(By.id(txtIMPLEMENTATION_ID),implementation);
   }
   public void enterTestPlan(String testPlan){
        enterTextByElement(By.id(txtTEST_PLAN_ID),testPlan);
   }

    public void enterRollBack(String rollBack){
        enterTextByElement(By.id(txtROLL_BACK),rollBack);
    }
    public void enterCommunicationPlan(String communicationPlan){
        findElement(By.id(txtCOMMUNICATION_PLAN_ID)).clear();
        enterTextByElement(By.id(txtCOMMUNICATION_PLAN_ID),communicationPlan);

    }
    public void enterVerOfFunctionality(String verOfFunctionality){
        enterTextByElement(By.id(txtVER_OF_FUNCTIONALITY_ID),verOfFunctionality);
    }
    public void enterRiskDescriptionId(String riskDescriptionId){
       enterTextByElement(By.id(txtRISK_DESCRIPTION_ID),riskDescriptionId);
    }
    public void enterServiceAndCustomerImpact(String text){
        enterTextByElement(By.id(txtSERVICE_AND_CUSTOMER_IMPACT),text);
    }
    public String verifyTicketIsBlank(){
        return getAttributeValueById(txtSEARCH_TICKET_ID);
    }
    public String verifyTicketIsNotNull(){
        return getAttributeValueById(txtTICKET_ID);
    }

    public boolean validateAttachmentAvailability(int attachmentsSize)
    {
        wait(1000);
        int size = getTableRows(By.id(table_ATTACHMENT_INTERNAL)).size();
        System.out.println("Number of table rows--:" + size);
        System.out.println("Number of Attachments available --: " + (size-1));
        if(attachmentsSize==(size-1)){
            return true;
        }
        return false;
    }

    public boolean validateAttachmentAvailability_External(int attachmentsSize)
    {
        wait(1000);
        int size = getTableRows(By.id(table_ATTACHMENT_EXTERNAL)).size();
        System.out.println("Number of table rows--:" + size);
        System.out.println("Number of Attachments available --: " + (size-1));
        if(attachmentsSize==(size-1)){
            return true;
        }
        return false;
    }
    public void clickInternalRadioButton(){
        clickElement(By.id(rbtn_INTERNAL));
    }

    public void clickExternalRadioButton(){
        clickElement(By.id(rbtn_EXTERNAL));
    }

    public void selectImpact(String value){
        selectDropDownNameAndValue(ddIMPACT, value, false);
}
    }
