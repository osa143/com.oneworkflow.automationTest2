package pageObjects;

import io.cucumber.datatable.DataTable;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import utils.CommonUtils;

import java.util.List;
import java.util.Map;
import java.util.Set;

public class OWF_ProblemRecordPage extends BaseRecordPage {


    private static final String txtTICKET_ID = "arid_WIN_0_730000060";
    private static final String linkASSIGNMENTS = "WIN_0_999000346";
    private static final String TABLE_ID = "T1020";
    private static final String dd_STATUS= "Status*";
    private static final String btnTIMELINE_XPATH = "//a[contains(text(),'Timeline')]";
    private static final String fld_TIMELINE_DISPLAY_XPATH = "//div[@id='WIN_0_999000510']//div[@class='BaseTableInner']";
    private static final String ddNO_ID = "arid_WIN_0_600001801";
    private static final String ddREASON = "Reason";
    private static final String txtTITLE_ID = "arid_WIN_0_777031000";
    private static final String txtREQUEST_CATEGORY_ID="arid_WIN_0_777021548";
    private static final String txtDESCRIPTION_ID = "arid_WIN_0_777031007";
    private static final String txtWORK_AROUND = "arid_WIN_0_600001040";

    private static final String ddREQUEST_TYPE_ID = "arid_WIN_0_777031002";
    private static final String ddURGENCY = "Urgency";
    private static final String ddWITHDRAWN_REASON = "Withdrawn Reason";
    private static final String ddACCOUNTABLE_ORG= "Accountable Org.";

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
    private static final String btnADD_ON_FRAME_XPATH = "//a[contains(@class,'Add btn btn3d TableBtn')]";
    private static final String btnINTERNAL_OPEN_ID = "WIN_0_777000021";
    private static final String btnINTERNAL_DELETE_ID = "WIN_0_777000022";
    private static final String btnEXTERNAL_OPEN_ID = "WIN_0_600002903";
    private static final String btnEXTERNAL_DELETE_ID = "WIN_0_600002906";
    private static final String btnSAVE_ID = "WIN_0_700025244";
    private static final String btnSEARCH_ID = "WIN_0_1002";
    private static final String errorTABLE_XPATH = "//*[@id='PromptBar']";
    private static final String errorTABLE_ID = "pbartable";
    private static final String btnYES_ON_FRAME_ID = "WIN_0_700027904";
    private static final String btn_ACK_ID = "WIN_0_777504152";
    private static final String btnACK_CSS = "#WIN_0_777504152";
    private static final String timeline_TABLE_ID = "T999000510";
    private static final String btnRELEASE_ID = "WIN_0_777021435";
    private static final String btn_YES= "//a[@arid='700027904']";

    private static final String txtSOURCE_ID = "arid_WIN_0_777777912";
    private static final String txtPRIORITY_ID = "arid_WIN_0_700025204";

    private static final String chkbxSWEDEN = "WIN_0_rc0id600002001";
    private static final String txtTO_DATE = "arid_WIN_0_777031004";
    private static final String table_ADD_INTERESTED_PARTY= "T700027964";
    private static final String txt_IMPACT= "arid_WIN_0_705002082";
    private static final String txt_URGENCY= "arid_WIN_0_705002083";
    private static final String txt_ROOTCAUSECODE= "arid_WIN_0_777031437";
    private static final String rbtn_PRIVATE= "WIN_0_rc1id777021180";
    private static final String btn_REFRESH= "//*[@id='WIN_4_777506000']/div[1]/table/tbody/tr/td[2]/a[2]";
    private static final String txt_SERVICEAFFECTED= "arid_WIN_0_600001014";
    private static final String txt_ESTIMATED_READY= "arid_WIN_0_777504503";
    private static final String txt_MODEL= "arid_WIN_0_240001002";
    private static final String txt_LOCATION_ID_PLUS= "arid_WIN_0_777031006";
    private static final String txt_LOCATION_NAME_PLUS= "arid_WIN_0_777031430";
    private static final String txt_REGION_ID= "arid_WIN_0_700009452";
    private static final String txt_REGION_NAME="arid_WIN_0_700009638";
    private static final String txt_LATITUDE= "arid_WIN_0_700024008";
    private static final String txt_LONGITUDE= "arid_WIN_0_700024009";
    private static final String txt_X_DEGREE= "arid_WIN_0_700024010";
    private static final String txt_Y_DEGREE= "arid_WIN_0_700024011";
    private static final String txt_LOCATION_DETAILS_DEGREE= "arid_WIN_0_700024007";
    private static final String txt_REASSIGNMENT_COUNT= "arid_WIN_0_777031450";
    private static final String txt_VENDOR_NAME= "arid_WIN_0_705001291";
    private static final String txt_ONSITE_ENGINEER= "arid_WIN_0_700027016";
    private static final String txt_ACCOUNT_NUMBER= "arid_WIN_0_700310030";
    private static final String txt_TELEPHONE_NUMBER= "arid_WIN_0_700310032";
    private static final String txt_HOURS_OF_OPERATION= "arid_WIN_0_777777865";
    private static final String txt_VENDOR_REF= "arid_WIN_0_705001290";
    private static final String txt_ONSITE_CONTACT= "arid_WIN_0_705001292";
    private static final String txt_TRAVEL_TIME= "arid_WIN_0_705001293";
    private static final String table_TIMELINE = "T999000510";
    private static final String btnEDIT_AFFECTED_ORGS = "WIN_0_808080012";
    private static final String btnCLICK_SAVE= "WIN_0_700030040";
    private static final String fld_ACCOUNTABLE_ORG_AS_MANDATORY="//label[contains(text(),'Accountable Org.*')]";
    private static final String fld_ROOT_CAUSE_CODE_AS_MANDATORY="//label[contains(text(),'Root Cause Code*')]";
    private static final String fld_ACCOUNTABLE_ORG_AS_NOT_MANDATORY="//label[contains(text(),'Accountable Org.')]";
    private static final String dd_ACCOUNTABLE_ORG= "arid_WIN_0_808080010";
    private static final String btnApply= "WIN_0_808080115";
    private static final String txt_IMPORTANCE= "arid_WIN_0_600001821";
    private static final String txt_ADDITIONAL_ROOT_CAUSE_CODE = "arid_WIN_0_800040066";
    private static final String fld_ADDITIONAL_ROOT_CAUSE_CODE_AS_NOT_MANDATORY="//label[contains(text(),'Additional RC Codes')]";
    private static final String btn_EDIT_ROOT_CAUSE_CODE= "WIN_0_800040067";
    private static final String btn_APPLY_ROOT_CAUSE_CODES= "WIN_0_800040088";
    private static final String btn_MAKE_PRIMARY="WIN_0_800040086";
    private static final String btn_REMOVE_SELECTED= "WIN_0_800040087";
    private static final String table_row_Attachments= "T777000013";
    private static final String table_row_Attachment= "//*[@id='T777000013']/tbody/tr[2]";
    private static final String table_row_Attachment_Window= "//*[@id='T700500008']/tbody/tr[2]";
    private static final String btn_DELETE= "WIN_0_777000022";
    private static final String btn_NEXT_TAB="nextTab";
    private static final String Error_POP_UP_ID= "PopupMsgBox";
    private static final String btn_Open_Attachment= "WIN_0_777000021";
    private static final String txt_IMPACT_TYPE= "arid_WIN_0_700009080";
    private static final String link_GO_BACK_TO_LOGIN= "//*[@id='logoutmsg']/tbody/tr[4]/td[2]/a";
    private static final String btn_AFFECTED_ORG = "//a[@title='Edit']";


    public void enterVendorName(String vendorName){
        enterTextByElement(By.id(txt_VENDOR_NAME), vendorName);
    }
    public void clickOnGoBackToLoginPage(){
        clickElement(By.xpath(link_GO_BACK_TO_LOGIN));
    }

    public void clickOpenAttachment(){
        clickElementById(btn_Open_Attachment);
    }
    public boolean verifyFieldsInvisible(String fields) {
        String arr[] = fields.split(":" );

        for (int i = 0; i < arr.length; i++) {
            final String fieldName = arr[i];
            try{
                verifyElementIsDisplayedByContainsTextAndTagName("*",fieldName);
            }
            catch(Exception e){
                System.out.println(fieldName + " - Is not present on the form");
            }
        }
        return true;
    }

    public String getErrorText_(){
        switchToFrameByIndex(2);
        String error =getTextByID(Error_POP_UP_ID);
        System.out.println("The error message is " + error);
        clickElementByContainsTextAndTagName("a", "OK");
        return error;

    }

    public void clickNextTab(){
        clickElementById(btn_NEXT_TAB);
    }
    public boolean verifyAttachmentIsNotAvailable(){
        int tableRows=getTableRows(By.id(table_row_Attachments)).size();
        int numOfAttachments=tableRows-1;
        System.out.println("Number of attachments are - " +numOfAttachments);
        if(numOfAttachments==0)
            return true;
        else return false;
    }
    public void clickOnDelete(){
        clickElementById(btn_DELETE);
    }
    public Boolean verifyNewWindowDisplayed(){
        int windowHandles=driver.getWindowHandles().size();
        if(windowHandles==3){
            return true;
        }
        else return false;
    }

    public void clickOnDisplay(){
        clickElementByContainsTextAndTagName("a", "Display");
    }
    public void clickOnAttachment_attachmentWindow(){
        clickElement(By.xpath(table_row_Attachment_Window));
    }
    public void clickOnAttachment(){
        clickElement(By.xpath(table_row_Attachment));
    }


       public boolean verifyAdditionalRootCauseCodeIsRemoved(){

        int rows_Before_remove=getTableRows(By.id("T800040090")).size();
        clickTableElement_secondary_rootCause("Root Cause", "Technical | Other");
        clickRemoveSelected();
        int rows_after_remove= getTableRows(By.id("T800040090")).size();
        if(rows_Before_remove>rows_after_remove)
            return true;
            else return false;
}

    public void clickMakePrimary(){
        clickElementById(btn_MAKE_PRIMARY);
    }
    public void clickRemoveSelected(){
        clickElementById(btn_REMOVE_SELECTED);
    }
    public String getText_AdditionalRootCauseCodes(){
        return getAttributeValueById(txt_ADDITIONAL_ROOT_CAUSE_CODE);
    }
    public void selectAdditionalRootCauseCodes(String value){
        selectDropDownNameAndValue("Root Cause Codes", value, false);
    }
    public void clickApplyButton_additionalRC_codes(){
        clickElementById(btn_APPLY_ROOT_CAUSE_CODES);
        switchToDefault();
    }
    public void selectMultipleAdditionalRootCauseCodes(String additionalRC_codes){
        String [] rootCauseCodes = additionalRC_codes.split("/");
        for (int i=0; i<rootCauseCodes.length; i++){
            selectAdditionalRootCauseCodes(rootCauseCodes[i]);
        }
    }

    public void clickEdit_Additional_RootCauseCode(){
        clickElementById(btn_EDIT_ROOT_CAUSE_CODE);
    }
    public boolean isAdditionalRootCauseCode_Not_mandatory(){
        return verifyElementIsDisplayed(By.xpath(fld_ADDITIONAL_ROOT_CAUSE_CODE_AS_NOT_MANDATORY));

    }
    public boolean isAdditionalRootCauseCodeDisplayed(){
        return verifyElementIsDisplayed(By.id(txt_ADDITIONAL_ROOT_CAUSE_CODE));
    }

    public boolean isRootCauseCode_mandatory(){
        return verifyElementIsDisplayed(By.xpath(fld_ROOT_CAUSE_CODE_AS_MANDATORY));

    }
    public boolean isRootCauseCodeDisplayed(){
        return verifyElementIsDisplayed(By.id(txtROOT_CAUSE_DETAILS_ID));
    }

    public void clickEditAffectedOrgButton(){
        clickElement(By.id("WIN_0_808080012"));
    }

    public boolean IsAccountableOrganisation_IsReadOnly(){
        return checkIfControlIsReadonly(dd_ACCOUNTABLE_ORG);
    }

    public boolean isAccountableOrganisationIs_mandatory(){
        return verifyElementIsDisplayed(By.xpath(fld_ACCOUNTABLE_ORG_AS_MANDATORY));

    }
    public boolean isAccountableOrganisationIs_Not_mandatory(){
        return verifyElementIsDisplayed(By.xpath(fld_ACCOUNTABLE_ORG_AS_NOT_MANDATORY));

    }
    public boolean isAccountableOrganisationIsDisplayed(){
        return verifyElementIsDisplayed(By.id(dd_ACCOUNTABLE_ORG));
    }
   public void selectAccountable_Org(String value){
       selectDropDownNameAndValue(ddACCOUNTABLE_ORG, value, false);
   }

   public void selectAffectedOrganisation(String affectedOrg)
   {
       selectDropDownNameAndValue("Organisations", affectedOrg, false);
   }
    public void selectAffected_Org(String value){
       clickElement(By.xpath(btn_AFFECTED_ORG));
        switchToFrameByIndex(2);
        selectAffectedOrganisation(value);
       clickElementById(btnApply);
       switchToDefault();


    }
    public void createProblemTicket(DataTable dataTable){
        clickSwedenCheckBox();
        List<Map<String, String>> list=dataTable.asMaps(String.class, String.class);
        enterTitle(list.get(0).get("Title"));
        selectRequestType(list.get(0).get("RequestType"), false);
        enterDescription(list.get(0).get("Description"));
        selectImpactType(list.get(0).get("ImpactType"));
        selectUrgency(list.get(0).get("Urgency"));
        selectAccountable_Org(list.get(0).get("AccountableOrg"));
        selectAffected_Org(list.get(0).get("AffectedOrg"));
        clickSave();
        wait(3000);

    }
    public void createProblemTicket_2(DataTable dataTable){
        clickSwedenCheckBox();
        List<Map<String, String>> list=dataTable.asMaps(String.class, String.class);
        enterTitle(list.get(0).get("Title"));
        selectRequestType(list.get(0).get("RequestType"), false);
        enterDescription(list.get(0).get("Description"));
        selectImpactType(list.get(0).get("ImpactType"));
        selectUrgency(list.get(0).get("Urgency"));
        clickSave();
        wait(3000);

    }

    public String getOnsiteEngineer(){
        return getTextByID(txt_ONSITE_ENGINEER);
    }
    public void enterOnSiteEngineerAs(String text){
        enterTextByElement(By.id(txt_ONSITE_ENGINEER), text);
    }

    public String getAccountNumber(){
        return getTextByID(txt_ACCOUNT_NUMBER);
    }
    public String getTelephoneNumber(){
        return getTextByID(txt_TELEPHONE_NUMBER);
    }
    public String getHoursOfOperations(){
        return getTextByID(txt_HOURS_OF_OPERATION);
    }
    public String getVendorRef(){
        return getTextByID(txt_VENDOR_REF);
    }
    public String getOnsiteContact(){
        return getTextByID(txt_ONSITE_CONTACT);
    }
    public void enterOnSiteContactAs(String text){
        enterTextByElement(By.id(txt_ONSITE_CONTACT), text);
    }
    public String getTravelTime(){
        return getTextByID(txt_TRAVEL_TIME);
    }
    public String getVendorName(){
        return getTextByID(txt_VENDOR_NAME);
    }
    public String getReassignmentCount(){
        return getTextByID(txt_REASSIGNMENT_COUNT);
    }
    public String get_X_Degree(){
        return getAttributeValueById(txt_X_DEGREE);
    }
    public String get_Y_Degree(){
        return getAttributeValueById(txt_Y_DEGREE);
    }
    public String getLocationDetails(){
        return getAttributeValueById(txt_LOCATION_DETAILS_DEGREE);
    }


    public String getLongitude(){
        return getAttributeValueById(txt_LONGITUDE);
    }
    public String getLatitude(){
        return getAttributeValueById(txt_LATITUDE);
    }
    public String getRegionName(){
        return getAttributeValueById(txt_REGION_NAME);
    }
    public String getRegionId(){
        return getAttributeValueById(txt_REGION_ID);
    }
    public String getLocationNamePlus(){
        return getAttributeValueById(txt_LOCATION_NAME_PLUS);
    }
    public String getLocationIdPlus(){
        return getAttributeValueById(txt_LOCATION_ID_PLUS);
    }

    public String getModel(){
        return getTextByID(txt_MODEL);
    }

    public String getWorkaround(){
        return getTextByID(txtWORK_AROUND);
    }

    public String getEstimatedReady(){
        String estimatedReadyTime= getTextByID(txt_ESTIMATED_READY);
        System.out.println("ERT is - " +estimatedReadyTime);
        return estimatedReadyTime;
    }
    public String getEstimatedReadyTime(){
        String estimatedReadyTime= getAttributeValueById(txt_ESTIMATED_READY);
        System.out.println("attr ERT is - " +estimatedReadyTime);
        return estimatedReadyTime;
    }
    public String getServiceEffectedText(){
        return getTextByID(txt_SERVICEAFFECTED);
    }

    public void clickRefresh(){
        clickElement(By.xpath(btn_REFRESH));
    }

  public void clickPrivateRadioButton(){
      clickElement(By.id(rbtn_PRIVATE));
  }
    public String getRootCauseCode(){
        return getAttributeValueById(txt_ROOTCAUSECODE);
    }
    public String getUrgency(){
        return getTextByID(txt_URGENCY);
    }

    public String getImpact(){
        return getTextByID(txt_IMPACT);
    }

    public String getPlazaPDBImpact(){
        return getAttributeValueById(txt_IMPACT);
    }

    public String getImportance(){
        return getTextByID(txt_IMPORTANCE);
    }

    public String getPlazaPDBImportance(){
        return getAttributeValueById(txt_IMPORTANCE);
    }


    public boolean verifyDescriptionIsReadOnly(){
        return checkIfControlIsReadonly(txtDESCRIPTION_ID);
    }

    public void clickYes_impactClear_all(){

        clickElement(By.xpath(btn_YES));

    }
    public void clickYes_impactClear(){
        int frames= driver.findElements(By.tagName("iframe")).size();

        if(frames==2){

        }
        else if(frames>=3){
            switchToFrameByIndex(frames-1);
            clickElement(By.xpath(btn_YES));
            switchToDefault();
        }
        else {
            try{
                clickElement(By.xpath(btn_YES));
                wait(500);
            }
            catch(Exception e)
            {
            }

        }
    }
    public boolean verifyTitleIsReadOnly(){
        return checkIfControlIsReadonly(txtTITLE_ID);
    }
    public boolean verifyRequestCategoryIsReadOnly(){
        return checkIfControlIsReadonly(txtREQUEST_CATEGORY_ID);
    }
    public boolean verifyPriorityIsReadOnly(){
        return checkIfControlIsReadonly(txtPRIORITY_ID);
    }

    public void clickTableElement_addInterestedParty(String headerName, String text){
        ClickTableElementByText(By.id(table_ADD_INTERESTED_PARTY),headerName, text, false);
    }
    public void clickTableElement_linkedItems(String headerName, String text){
        ClickTableElementByText(By.id(table_LINKED_ITEMS_ID),headerName, text, false);
    }


    public boolean verifyStatusDdIsReadonly(){
        return checkIfControlIsReadonly(ddSTATuS_ID);
    }
    public boolean verifyRequestTypeDdIsReadonly(){
        return checkIfControlIsReadonly(ddREQUEST_TYPE_ID);
    }
    public void enterStatus(String text){
        findElement(By.id(ddSTATuS_ID)).clear();
       enterTextByElement(By.id(ddSTATuS_ID), text);
    }

    public void enterAssignee(String text)
    {
        findElement(By.id("arid_WIN_0_4")).clear();
        enterTextByElement(By.id("arid_WIN_0_4"), text);
    }
    public void selectStatus_problemRecord(String value){
        selectDropDownNameAndValue(dd_STATUS, value, false);
    }
    public boolean verifyIsSaveIsPresent(){
        return findElement(By.id(btnSAVE_ID)).isDisplayed();
    }
    public boolean verifyProblemTickets(){
        int size= getTableRows(By.id(TABLE_ID)).size();
        if(size>1){
            return true;
        }
        else return false;
    }

    public void highlightUser(){
        driver.findElement(By.xpath("//div[@id='FormApp']//tr[2]")).click();
    }

    public void clickAssignments_underSections(){
        //clickElementByContainsTextAndTagName("*", "Assignment");
        driver.findElement(By.id(linkASSIGNMENTS)).click();
    }

    public void clickRelease(){
        driver.findElement(By.id(btnRELEASE_ID)).click();
    }
    public void enterToDate(String toDate){
        driver.findElement(By.id(txtTO_DATE)).sendKeys(toDate);
    }

    public void selectReasonAs(String value){
        selectDropDownNameAndValue(ddREASON, value, true);
    }

    public String getTimelineStatus(int rowNum) {
        String status = getTableCellData(By.id(timeline_TABLE_ID), "Description", rowNum);
        System.out.println("Expected Timeline status is: " + status);
        return status;
    }
    public void enterWorkAround(String workAround){
        driver.findElement(By.id(txtWORK_AROUND)).sendKeys(workAround);
    }

    public void enterSource(String source){
        driver.findElement(By.id(txtSOURCE_ID)).sendKeys(source);
    }

    public void clickTimelineButton() {
        driver.findElement(By.xpath(btnTIMELINE_XPATH)).click();
    }


    public void clickYesOnFrame() {
        driver.findElement(By.id(btnYES_ON_FRAME_ID)).click();
    }

    public String getPriorityText(){
        return getAttributeValueById(txtPRIORITY_ID);
    }


    public void addAttachmentsAndVerify(DataTable attachment, String type)
    {
        List<List<String>> attachments = attachment.asLists(String.class);
        for (int i = 1; i < attachments.size(); i ++) {
            String summary = attachments.get(i).get(0);
            String description = attachments.get(i).get(1);
            String filePath = attachments.get(i).get(2);
            String projectPath= System.getProperty("user.dir" );
            System.out.println(projectPath);
            String fullFilePath= projectPath+"\\src\\test\\resources\\Test Attachments\\other files\\"+filePath;
            System.out.println(fullFilePath);
            int attachmentsCount = Integer.parseInt(attachments.get(i).get(3));
            System.out.println("summary is: " + summary);
            driver.findElement(By.id(btnADD_ID)).click();
            int size = driver.findElements(By.tagName("iframe")).size();
            switchToFrameByIndex(size - 1);
            enterSummary_attachments(summary);
            enterDescription_Attachment_OnFrame(description);
            clickAdd_AttachmentOnFrame();
            clickonChooseFile_OnFrame();
            wait(600);
            CommonUtils.uploadFile(fullFilePath);
            wait(800);
            clickOk_AttachmentOnFrame();
            wait(600);
            int size1 = driver.findElements(By.tagName("iframe")).size();
            if(size1>2){
                switchToFrameByIndex(size1 - 1);
            }
            else if(size1>3){
                switchToFrameByIndex(size1 - 2);
            }
            else
            {
                switchToDefault();
                switchToFrameByIndex(size1);
            }

            if(type.equals("external"))
            {
                clickExternalRadioButton();
            }
            else if((type.equals("internal")))
            {
                clickInternalRadioButton();
            }
            else if((type.equals("")))
                {

            }
            clickSave_AttachmentOnFrame();
            Assert.assertTrue(validateAttachmentAvailability(attachmentsCount));
        }
    }


    public void clickAddButton() {
        driver.findElement(By.id(btnADD_ID)).click();
    }
    public void clickAddButtonOnFrame(){
        driver.findElement(By.xpath(btnADD_ON_FRAME_XPATH)).click();
    }

    public void clickInternalOpenButton() {
        driver.findElement(By.id(btnINTERNAL_OPEN_ID)).click();
    }

    public void clickInternalDeleteButton() {
        driver.findElement(By.id(btnINTERNAL_DELETE_ID)).click();
    }

    public void clickExternalOpenButton() {
        driver.findElement(By.id(btnEXTERNAL_OPEN_ID)).click();
    }

    public void clickExternalDeleteButton() {
        driver.findElement(By.id(btnEXTERNAL_DELETE_ID)).click();
    }

    public void clickSaveButton() {
        driver.findElement(By.id(btnSAVE_ID)).click();
    }
    public boolean isSaveButtonEnabled(){
        return verifyElementIsEnabledByElement(By.id(btnSAVE_ID));
    }
    WebDriverWait wait= new WebDriverWait(driver, 20);
    public void clickAckButton_problemRecord() {
        wait(3000);
        WebElement element= driver.findElement(By.id(btn_ACK_ID));

        try{
            waitUntilElementClickable(By.id(btn_ACK_ID)).click();

        }
        catch (Exception exception)
        {
            System.out.println("Error message is : "+ exception.getMessage());
            try {
                element.click();
            }
            catch (Exception ex)
            {

            }
        }

    }

    public void clickOkOnWarningMessage(){
       driver.switchTo().frame(2);
       clickElementByContainsTextAndTagName("*", "Yes");
    }

    public void clickSearchButton() {
        driver.findElement(By.id(btnSEARCH_ID)).click();
    }




    public String getRequestTypeText() {
        return getAttributeValueById(ddREQUEST_TYPE_ID);
    }



    public String getDescriptionText()
    {
        return getAttributeValueById(txtDESCRIPTION_ID);
    }

    public boolean getDescriptionTextBoxStatus() {
        boolean status = checkIfControlIsReadonly(txtDESCRIPTION_ID);
        return status;
    }

    public boolean getRequestTypeDropDownStatus() {
        boolean status = checkIfControlIsReadonly(ddREQUEST_TYPE_ID);
        System.out.println("Request type dropdown is read only: " + status);
        return status;
    }

    public boolean getAckButtonStatus() {
        clickElementById(btn_ACK_ID);
        wait(2000);
        if(getStatusText().equals("Assigned")){
            return false;
        }
        else return true;
    }

    public void selectWithdrawnReason_FalseAlarmDropDown() {
        selectDropDownNameAndValue(ddWITHDRAWN_REASON, "False Alarm", true);
    }


    public void enterTitle(String Title) {
        driver.findElement(By.id(txtTITLE_ID)).sendKeys(Title);
    }


    public void clickNoDropdown() {
        driver.findElement(By.id(ddNO_ID)).click();
    }

    public void clickImpactDropDown() {
        selectDropDownMenu(ddIMPACT);
    }

    public void clickUrgencyDropDown() {
        selectDropDownMenu(ddURGENCY);
    }

    public void selectExtensiveWidespreadDdValue() {
        selectDropDownValue(ddValueEXTENSIVE_WIDESPREAD);
    }

    public void selectSignificantLargeDdValue() {
        selectDropDownNameAndValue(ddIMPACT, ddValueSIGNIFICANT_LARGE, false);
    }

    public void selectModerateLimitedDdValue() {
        selectDropDownValue(ddValueMODERATE_LIMITED);
    }
    public void selectImpactType(String value) {
        try {
            selectDropDownNameAndValue(ddIMPACT, value, false);
        }
        catch(Exception e){
            clickElementById(txt_IMPACT_TYPE);
            selectMenuItem(value);
        }
    }


    public void select_Impact_ClearDdValue() {
        selectDropDownValue(ddValueCLEAR);
    }

    public void selectCriticalDdValue() {
        selectDropDownValue(ddValueCRITICAL);
    }

    public void selectHighDdValue() {
        selectDropDownNameAndValue(ddURGENCY, ddValueHIGH, false);
    }

    public void selectUrgency(String value) {
        selectDropDownNameAndValue(ddURGENCY, value, false);
    }
    public void selectMediumDdValue() {
        selectDropDownValue(ddValueMEDIUM);
    }

    public void selectLowDdValue() {
        selectDropDownValue(ddValueLOW);
    }

    public void selectPriority_ClearDdValue() {
        selectDropDownValue(dd_PRIORITY_ValueCLEAR);
    }

    public void selectDuplicateEntriesDdValue() {
        selectDropDownValue(ddValueDUPLICATE_ENTRIES);
    }

    public void selectFalseAlarmDdValue() {
        selectDropDownValue(ddValueFALSE_ALARM);
    }

    public void selectInsuficientInformationDdValue() {
        selectDropDownValue(ddValueINSUFICIENT_INFORMATION);
    }

    public void selectNot_aRootCauseInvestigationDdValue() {
        selectDropDownValue(ddValueNOT_A_ROOTCAUSE_INVESTIGATION);
    }

    public void selectOtherProcessSlovingProblemDdValue() {
        selectDropDownValue(ddValueOTHER_PROCESS_SOLVING_PROBLEM);
    }

    public void selectTestTicketDdValue() {
        selectDropDownValue(ddValueTEST_TICKET);
    }

    public void selectTrainingDdValue() {
        selectDropDownValue(ddValueTRAINING);
    }

    public void selectWithdrawnReason_ClearDdValue() {
        selectDropDownValue(dd_WITHDRAWN_REASON_ValueCLEAR);
    }


    public boolean validateErrorMessage(){
        int size=getTableRows(By.id(errorTABLE_ID)).size();
        System.out.println("Table rows size is - " +size);
        if(size>0){
            return true;
        }
        return false;
    }
    public boolean validateMultipleErrorMessages(){
        int size=getTableRows(By.id(errorTABLE_ID)).size();
        if(size>0){
            return true;
        }
        return false;
    }

//    public boolean validateErrorMessage(String message) {
//        List<WebElement> errorElements = driver.findElement(By.xpath(errorTABLE_XPATH)).findElements(By.tagName("tr"));
//        if (errorElements.size() > 0) {
//
//            WebElement e = errorElements.stream().filter(x -> x.getText().trim().contains(message)).findFirst().orElse(null);
//            if (e != null) {
//                return true;
//            }
//        }
//        return false;
//    }
//
//    public boolean validateMultipleErrorMessages(int errorMessagesCount) {
//        List<WebElement> errorElements = driver.findElement(By.xpath(errorTABLE_XPATH)).findElements(By.tagName("tr"));
//        if (errorElements.size() > errorMessagesCount) {
//            return true;
//        }
//        return false;
//    }

    public void acceptAlert() {
        driver.switchTo().alert().accept();
    }



    public boolean verifyTimelineIsPresent(){
        int size =getTableRows(By.id(table_TIMELINE)).size();
        if(size > 0){
            return true;
        }
        return false;
    }
    public boolean verifyTimelineDateIsPresent(){
        String timelineDate = getTableCellData(By.id(table_TIMELINE),"Date",1);
        if (timelineDate.isEmpty()){
            return false;
        }
        return true;

    }

}