package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import utils.CommonUtils;
import utils.PlazaValidation;
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

    private static final String txtEVENT_START_TIME ="arid_WIN_0_703001000";

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
    private static final String txt_IMPACT_FROM = "arid_WIN_0_999000298";
    private static final String txt_EVENT_END_TIME_MANDATORY= "label777010106";

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
    private static final String dd_IMPORTANCE="arid_WIN_0_600001821";
    private static final String btn_CLOSE_BULK_UPDATE= "WIN_0_999000100";



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
    private static final String btn_OK_Popup = "//*[@id='PopupMsgFooter']/a";
    private static final String fld_LOCATION_INFORMATION= "WIN_0_999000300";
    private static final String fld_ON_HOLD_UNTIL= "WIN_0_700000040";
    private static final String fld_CLOSURE_CODE = "WIN_0_777010094";
    private static final String fld_INTERNAL= "WIN_0_999000353";
    private static final String fld_EXTERNAL = "WIN_0_600003301";
    private static final String fld_OWNER= "WIN_0_777010095";
    private static final String fld_VENDOR= "WIN_0_777021005";
    private static final String fld_ROOT_CAUSE= "WIN_0_799999914";
    private static final String table_SELECT_LOCATION= "T700024013";
    private static final String btn_NEXT_CHUNK_RIGHT= "//div[@id='WIN_0_700024013']//a[@class='btn chunkright']";
    private static final String btn_OK_SELECT_LOCATION= "WIN_0_700000104";
    private static final String txt_LOCATION_NAME_PLUS_ID = "arid_WIN_0_777031430";
    private static final String txt_LOCATION_REGION_ID ="arid_WIN_0_700009452";
    private static final String txt_LOCATION_REGION_NAME_ID ="arid_WIN_0_700009638";
    private static final String txt_LOCATION_LATITUDE_ID ="arid_WIN_0_700024008";
    private static final String txt_LOCATION_LONGITUDE_ID ="arid_WIN_0_700024009";
    private static final String Table_DIAGNOSIS= "T700009087";
    private static final String dd_IMPACT_NAME= "Impact Name";
    private static final String chkbx_CONFIRM_ID= "WIN_0_rc0id990000905";
    private static final String btn_SAVE_BULK_UPDATE_ID= "WIN_0_990000906";
    private static final String txt_ASSIGNEE= "arid_WIN_0_4";
    private static final String dd_ASSIGNMENT_PROFILE= "Assignment Profile";
    private static final String btn_PRIORITY_CHECK= "WIN_0_600002912";
    private static final String table_SELECT_TARGET_REQUEST= "T700506101";
    private static final String btn_LINK_LINKED_ITEMS= "WIN_5_777506009";
    private static final String txt_TIMELINE= "arid_WIN_0_777777103";
    private static final String rbtn_PUBLIC= "WIN_0_rc0id777021180";
    private static final String txt_ROOT_CAUSE_DESCRIPTION= "arid_WIN_0_777021052";
    private static final String btn_CANCEL= "WIN_0_700000105";
    private static final String dd_ACTION= "Action";
    private static final String btn_YES_ON_FRAME_IMPACT_CLEAR= "WIN_5_700027904";
    private static final String table_MAIN_PAGE= "T1020";
    private static final String div_ID_TopToBottom= "WIN_0_777021070";
    private static final String div_ADD_TIMELINE= "WIN_0_999000390";
    private static final String btn_ADD_INTERESTED_PARTIES= "WIN_0_705002007";
    private static final String btn_REMOVE_INTERESTED_PARTIES = "WIN_0_705002008";
    private static final String btn_BULK_UPDATE_INTERESTED_PARTIES= "WIN_0_777789015";
    private static final String btn_ADD_EMAIL= "WIN_0_600002906";
    private static final String txt_METHOD= "arid_WIN_0_700020732";
    private static final String txt_SEND_TO= "arid_WIN_0_700020733";
    private static final String txt_SUBJECT= "arid_WIN_0_700020734";
    private static final String txt_BODY= "arid_WIN_0_700020735";
    private static final String txt_TARGET_APPLICATION= "arid_WIN_4_777506021";
    private static final String btn_UNLINK_LINKED_ITEMS= "WIN_4_777506010";
    private static final String btn_CREATE_LINKEDITEMS= "WIN_4_777506020";
    private static final String btn_CREATE_FROM_TEMPLATE= "WIN_0_777504012";
    private static final String btn_DETATCH= "WIN_0_700508132";
    private static final String btn_DETATCH_CREATE= "WIN_0_600002901";
    private static final String btn_TERMINATE_ALARM= "WIN_0_600002926";
    private static final String REFRESH_STATUS_TIME= "arid_WIN_0_600001204";
    private static final String btn_INSERT= "WIN_0_600002923";
    private static final String btn_DISABLE = "WIN_0_600002925";
    private static final String btn_ENABLE= "WIN_0_600002924";
    private static final String txt_IMPACT_FROM_pLUS= "arid_WIN_0_999000298";
    private static final String txt_IMPACT_TO_pLUS ="arid_WIN_0_999000299";
    private static final String btn_ADD_TIMELINE= "WIN_0_777021404";
    private static final String div_AFFECTED_BU= "WIN_0_600002504";
    private static final String txt_ID= "arid_WIN_0_777021006";
    private static final String txt_SERVICE_PROVIDER= "arid_WIN_0_777031005";
    private static final String txt_HOLD_TO_DATE= "arid_WIN_0_777031004";
    private static final String dd_HOLD_REASON= "Reason";
    private static final String txt_REJECT_REASON="arid_WIN_0_600001019";



    public void SelectFirstThreeCIs(){
        clickElement(By.xpath("//*[@id='T700009024']/tbody/tr[2]"));
        clickElement(By.xpath("//*[@id='T700009024']/tbody/tr[3]"));
        clickElement(By.xpath("//*[@id='T700009024']/tbody/tr[4]"));
    }


    public void enterRejectReason(String reason){
        enterTextByElement(By.id(txt_REJECT_REASON), reason);
    }




   public void enterHoldToDateAndTime(String text){
       enterTextByElement(By.id(txt_HOLD_TO_DATE), text);
   }

   public void selectHoldReason(String DropDownValue){
      selectDropDownNameAndValue(dd_HOLD_REASON, DropDownValue, true);
   }


   public String getServiceProvider(){
       String serviceProvider=  getAttributeValueById(txt_SERVICE_PROVIDER);
       System.out.println("Service provider is :" + serviceProvider);
       return serviceProvider;
   }
    public Boolean verifyIdHasICMNumber(){
     String ID= getAttributeValueById(txt_ID);
        System.out.println("ICM number is :" + ID);
     if(ID.contains("ICM"))
         return true;
     else return false;
    }
    public void clickAffectedBu(String textName){
        String element = String.format("//input[@arvalue='%s']", textName);
        System.out.println(element);
        driver.findElement(By.id(div_AFFECTED_BU_ID)).findElement(By.xpath(element)).click();
    }


    public boolean checkAffectedBuIsSelected(String textName){
        String element = String.format("//input[@arvalue='%s']", textName);
        return driver.findElement(By.id(div_AFFECTED_BU_ID)).findElement(By.xpath(element)).isSelected();
    }



    public void clickAdd_timeline(){
        clickElement(By.id(btn_ADD));
    }
    public void enterImpactFromPlus(String text){
        findElement(By.id(txt_IMPACT_FROM_pLUS)).clear();
        enterTextByElement(By.id(txt_IMPACT_FROM_pLUS), text);
    }
    public void enterImpactToPlus(String text){
        findElement(By.id(txt_IMPACT_TO_pLUS)).clear();
        enterTextByElement(By.id(txt_IMPACT_TO_pLUS), text);
    }
    public void selectImpact_update(){
        findElement(By.cssSelector("body > div:nth-child(18) > div.MenuTableContainer > table > tbody > tr:nth-child(8) > td.MenuEntryName")).click();
        wait(1000);
        findElement(By.cssSelector("body > div:nth-child(20) > div.MenuTableContainer > table > tbody > tr:nth-child(2) > td.MenuEntryNameHover")).click();
    }
    public boolean verifyDisableButtonIsEnabled(){
        return verifyElementIsEnabledByElement(By.id(btn_DISABLE));
    }

    public boolean verifyEnableButtonIsEnabled(){
        return verifyElementIsEnabledByElement(By.id(btn_ENABLE));
    }
    public boolean verifyInsertButtonIsEnabled(){
        return verifyElementIsEnabledByElement(By.id(btn_INSERT));
    }

    public boolean verifyRefreshStatusIsReadOnly(){
        return checkIfControlIsReadonlyByElement(By.id(REFRESH_STATUS_TIME));
    }

    public boolean verifyCiDetatchButtonIsEnabled(){
        return verifyElementIsEnabledByElement(By.id(btn_DETATCH));
    }
    public boolean verifyCiDetatchAndCreateButtonIsEnabled(){
        return verifyElementIsEnabledByElement(By.id(btn_DETATCH_CREATE));
    }
    public boolean verifyCiTerminateButtonIsEnabled(){
        return verifyElementIsEnabledByElement(By.id(btn_TERMINATE_ALARM));
    }
    public void clickCreateFromTemplate(){
      clickElement(By.id(btn_CREATE_FROM_TEMPLATE));
    }

    public boolean verifyCiLinkButtonIsEnabled(){
        return verifyElementIsEnabledByElement(By.id(btn_LINK_LINKED_ITEMS));
    }
    public boolean verifyCiUnLinkButtonIsEnabled(){
        return verifyElementIsEnabledByElement(By.id(btn_UNLINK_LINKED_ITEMS));
    }
    public boolean verifyCiCreateButtonIsEnabled(){
        return verifyElementIsEnabledByElement(By.id(btn_CREATE_LINKEDITEMS));
    }

    public boolean verifyTargetApplicationIsReadOnly(){
        return checkIfControlIsReadonlyByElement(By.id(txt_TARGET_APPLICATION));
    }

    public boolean verifyMethodIsReadOnly(){
        return checkIfControlIsReadonlyByElement(By.id(txt_METHOD));
    }

    public boolean verifySendToIsReadOnly(){
        return checkIfControlIsReadonlyByElement(By.id(txt_SEND_TO));
    }

    public boolean verifySubjectIsReadOnly(){
        return checkIfControlIsReadonlyByElement(By.id(txt_SUBJECT));
    }

    public boolean verifyBodyIsReadOnly(){
        return checkIfControlIsReadonlyByElement(By.id(txt_BODY));
    }


    public boolean verifyCiSearchButtonIsReadOnly(){
        return verifyElementIsEnabledByElement(By.id(btnCISEARCH));
    }
    public boolean verifyAddButtonIsReadOnly(){
        return verifyElementIsEnabledByElement(By.id(btn_ADD_INTERESTED_PARTIES));
    }
    public boolean verifyRemoveButtonIsReadOnly(){
        return verifyElementIsEnabledByElement(By.id(btn_BULK_UPDATE_INTERESTED_PARTIES));
    }
    public boolean verifyBulkUpdateButtonIsReadOnly(){
        return verifyElementIsEnabledByElement(By.id(btn_REMOVE_INTERESTED_PARTIES));
    }
    public boolean verifyAddEmailButtonIsReadOnly(){
        return verifyElementIsEnabledByElement(By.id(btn_ADD_EMAIL));
    }
    public void verifyAddTimelineDivIsPresent(){
        try {
            driver.findElement(By.id(div_ADD_TIMELINE));
        }
        catch (Exception e){
            System.out.println("The Add timeline div is not present");
        }
    }

   public boolean verifyElementIsDisabled(){
       boolean result= findElement(By.id(btn_ADD)).isEnabled();
       System.out.println("Element Enabled is : " +result);
       return result;
   }

    public boolean verifyClosedTickets(String colName, String colValue){
        return verifyColumnValues(By.id(table_MAIN_PAGE), colName, colValue);
    }
    public boolean verifyTicketsCountry(String colName, String colValue){
        return verifyColumnValuesMultiple(By.id(table_MAIN_PAGE), colName, colValue, true);
    }

    public void clickLocationName_selectLocation(String text){
        ClickTableElementByText(By.id(table_SELECT_LOCATION), "Name", text,false);
    }

    public boolean verifyElementsAreReadOnly(String tagName)
    {
        return verifyElementsAreReadOnlyByDivAndTagName(By.id(div_ID_TopToBottom), By.tagName(tagName));
    }

    public boolean verifyElementIsReadOnly(){
        return checkIfControlIsReadonlyByElement(By.tagName("textarea"));
    }

    public void selectStatus_secondTime(String value){
        selectDropDownNameAndValueForMultipleMenuTableBodys(ddSTATUS, value, false, 2);
    }
    public String verifyEndTimeIsMandatory(){
        String mandatoryText= findElement(By.id(txt_EVENT_END_TIME_MANDATORY)).getText();
        System.out.println(mandatoryText);
        return mandatoryText;
    }
    public void clickOK_ImpactClear(){
        //clickElement(By.id(btn_YES_ON_FRAME_IMPACT_CLEAR));
        clickElementByContainsTextAndTagName("div", "Yes");
        wait(500);
    }

    public String getWoStatus(){
        return getAttributeValueById(txtWO_STATUS_ID);
    }

     public void clickClose_bulkUpdate(){
        clickElement(By.id(btn_CLOSE_BULK_UPDATE));
     }

    public void clickCancel(){
        wait(500);
        findElement(By.id(btn_CANCEL)).click();
    }
    public void enterImpactFromAsOneDayPast(){
        WebElement element= findElement(By.id(txt_IMPACT_FROM));
        element.clear();
        element.sendKeys(CommonUtils.getDateAsTodayMidnight(-1));
    }

    public int getNumberOfCis(){
        return  getTableRows(By.id(table_DIAGNOSIS_ID)).size();
    }
    public void enterRootCauseDescription(String text){
        findElement(By.id(txt_ROOT_CAUSE_DESCRIPTION)).sendKeys(text);
    }
    public void clickPublicRadioButton(){
        findElement(By.id(rbtn_PUBLIC)).click();
    }
    public void enterText_timeline(String text){
       findElement(By.id(txt_TIMELINE)).sendKeys(text);
    }
    public void clickLink_LinkedItems(){
        findElement(By.id(btn_LINK_LINKED_ITEMS)).click();
    }

    public void clickPriorityCheck(){
        findElement(By.id(btn_PRIORITY_CHECK)).click();
        wait(1000);
    }
    public boolean verifyAvailabilityOfTicket(){
        int size= getTableRows(By.id(table_SELECT_TARGET_REQUEST)).size();
        System.out.println("Number of Tickets available"+ (size-1));
        if(size>1)
        return true;
        else return false;
    }

    public void selectAssignmentProfile(String value){
        selectDropDownNameAndValue(dd_ASSIGNMENT_PROFILE, value, false);
    }
    public void selectAction(String value){
        selectDropDownNameAndValue(dd_ACTION, value, true);
    }


    public String getAssignee(){
        String Assignee= getAttributeValueById(txt_ASSIGNEE);
        System.out.println("The Assignee is- " +Assignee);
        return Assignee;
    }

    public void clickSave_bulkUpdate(){
        findElement(By.id(btn_SAVE_BULK_UPDATE_ID)).click();
        wait(500);

    }
    public void selectImpactName(String value){
        selectDropDownNameAndValue(dd_IMPACT_NAME,value, false);
    }
    public void clickConfirmCheckBox(){
        findElement(By.id(chkbx_CONFIRM_ID)).click();
     }

     public void enterEventStartTime(String time){
        findElement(By.id(txt_EVENT_START_TIME)).clear();
        enterTextByElement(By.id(txt_EVENT_START_TIME), time);
     }

    public String getLocationId()
    {
       return getAttributeValueById(txt_LOCATION_ID_PLUS);
    }
    public String getLocationName()
    {
        return getAttributeValueById(txt_LOCATION_NAME_PLUS_ID);
    }
    public String getRegionId()
    {
        return getAttributeValueById(txt_LOCATION_REGION_ID);
    }
    public String getRegionName()
    {
        return getAttributeValueById(txt_LOCATION_REGION_NAME_ID);
    }
    public String getLatitude()
    {
        return getAttributeValueById(txt_LOCATION_LATITUDE_ID);
    }
    public String getLongitude()
    {
        return getAttributeValueById(txt_LOCATION_LONGITUDE_ID);
    }

    public void clearEventStartTime(){
        findElement(By.id(txtEVENT_START_TIME)).clear();
    }


    public String[] clickOnRow(String text)
    {
        wait(1000);
        return ClickTableElementByText(By.id(table_SELECT_LOCATION),"Name",text, true);

    }


    public void clickOk_SelectLocation(){
        findElement(By.id(btn_OK_SELECT_LOCATION)).click();
    }

    public boolean verifyDropdownValuesForImportance(String statuses, String dropdownName)
    {
        return verifyDropdownValues(statuses, dropdownName, dd_IMPORTANCE);
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
    public void enterLocationId_Plus(String text){
        findElement(By.id(txt_LOCATION_ID_PLUS)).sendKeys(text);

    }
    public boolean verifyEventStartTimeIsAvailable(){
        return verifyElementIsDisplayed(By.id(txt_EVENT_START_TIME));
    }
    public String eventStartDateTime(){
        return getAttributeValueById(txt_EVENT_START_TIME);
    }

    public boolean verifyIsRootCauseIsPresent(){
        return findElement(By.id(fld_ROOT_CAUSE)).isDisplayed();
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
        wait(500);
        findElement(By.id(btn_ROOT_CAUSE_UNDER_SECTIONS)).click();
    }

    public boolean verifyIsOwnerIsPresent(){
        return findElement(By.id(fld_OWNER)).isDisplayed();
    }
    public boolean verifyIsVendorIsPresent(){
        return findElement(By.id(fld_VENDOR)).isDisplayed();
    }

    public boolean verifyIsExternalIsPresent(){
       return findElement(By.id(fld_EXTERNAL)).isDisplayed();
    }

    public boolean verifyIsInternalIsPresent(){
        return findElement(By.id(fld_INTERNAL)).isDisplayed();
    }

    public boolean verifyIsOnHoldUntilPresent(){
        return findElement(By.id(fld_ON_HOLD_UNTIL)).isDisplayed();
    }

    public boolean verifyIsLocationInformationIspPresent(){
         return findElement(By.id(fld_LOCATION_INFORMATION)).isDisplayed();
    }
    public boolean verifyIsClosureCodeIspPresent(){
        return findElement(By.id(fld_CLOSURE_CODE)).isDisplayed();
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
    public void clickOwner() {
        try {
            clickElementByContainsTextAndTagName("div", "Owner");
        } catch (Exception e) {
            wait(1500);
            findElement(By.id(btn_OWNER_UNDER_SECTIONS)).click();
        }
    }

    public String getErrorText(){
        driver.switchTo().parentFrame();
        driver.switchTo().frame(2);
        driver.switchTo().frame(1);
        String error= findElement(By.id(Error_POP_UP_ID)).getText();
        System.out.println("Error message is: " +error);
        return error;
    }
    public String getErrorText_change_recordPage(){
        switchToFrameByIndex(2);
        String error =getTextByID(Error_POP_UP_ID);
        System.out.println(error);
        clickElementByContainsTextAndTagName("a", "OK");
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

    public void clickOkOnPopup()
    {
        findElement(By.xpath(btn_OK_Popup)).click();
        driver.switchTo().frame(2);
        wait(1500);
    }
    public void clickOk()
    {
        driver.switchTo().frame(1);
        driver.switchTo().frame(0);
        driver.switchTo().parentFrame();
        driver.switchTo().frame(1);
        clickElementByContainsTextAndTagName("a", "OK");
        driver.switchTo().defaultContent();
        switchToFrameByIndex(2);
        wait(1500);
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
            wait(500);
         selectDropDownNameAndValue(ddIMPACT, value, true);
     }

    public String getPriorityText(){
         return getAttributeValueById(ddPRIORITY_ID);
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

        public boolean validateChildWorkOrderAvailability (){
          int size= getTableRows(By.id(table_WORKORDERS_ID)).size();
          if(size>0)
          return true;
          else return false;
    }
    public boolean verifyAvailabilityOfWorkOrders(){
        int size= getTableRows(By.id(table_WORKORDERS_ID)).size();
        System.out.println("Number of work orders available are" +(size-1));
        if(size>2)
        return true;
        else return false;
    }
    public String getCust_Remaining_SLA(){
        String SLA_Target_Time = getAttributeValueById(txtCUST_REMAINING_SLA_ID);
        System.out.println(SLA_Target_Time);
        return SLA_Target_Time;
    }
    public String getOLATargetTime(){
        String SLA_Target_Time = getAttributeValueById(txtOLA_TARGET_TIME_ID);
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
  public String getClosureInfo(){
        return getAttributeValueById((txtCLOSURE_INFO));
  }

    public void selectTicket(){
        driver.findElement(By.xpath(chkbxSELECT_TIKCET)).click();
    }
    public void clickDisplayActiveChildAlarms(){
        driver.findElement(By.id(rbtnDISPLAY_ACTIVE_CHILD_ALARMS)).click();
    }

    public void clickAccept_selectTargetRequest(){
        findElement(By.id(btnACCEPT_SELECT_TARGET_REQUEST)).click();
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
        return getAttributeValueById(txtOLA_TARGET_TIME_ID);
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
    public void selectFaultPosition_troubleEventPage(String value){
        selectDropDownNameAndValue(ddFAULTY_POSITION, value, false);
    }
    public void selectCause_troubleEventPage(String value){
        selectDropDownNameAndValue(ddCAUSE, value, true);
    }

    public String getTroubleTicket() {
        String troubleTicket= getAttributeValueById(txtTICKET_ID);
        System.out.println("Ticket opened is" +troubleTicket);
        return troubleTicket;
    }
    public boolean isRequestTypeVisible(){
        return verifyElementIsDisplayed(By.id(ddREQUEST_TYPE_ID));
    }
    public void enterEventEndTimeAsCurrentTime(){
        wait(1000);
        driver.findElement(By.id(txtEVENT_END_TIME)).sendKeys(Keys.ENTER);
    }
    public void enterEventEndTimeAsPast(String time){
        enterTextByElement(By.id(txtEVENT_END_TIME), time);
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
        waitUntilElementClickable(By.xpath("//a[contains(text(), 'Work Orders')]")).click();
    }
    public void enterLevel(String level){
        driver.findElement(By.id(txtTITLE_ID)).sendKeys(level);
    }

    public void clickAllAlarmBox(){
        driver.findElement(By.xpath(chkbxHEADER_XPATH_AlarmsTab)).click();
    }
    public void selectRequestType(String value){
        wait(500);
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

    public String getLastAckBy(){
        return getAttributeValueById(txtLAST_ACK_BY_ID);
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

    //this is override method as txtEVENT_START_TIME id is different for trouble and work order page
    public String getEventStartTime(){
        String eventStartTime=  getAttributeValueById(txtEVENT_START_TIME);
        System.out.println(eventStartTime);
        return eventStartTime;
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
        return getAttributeValueById(txtSOURCE_ID);

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
        String title = getAttributeValueById(txtTITLE_ID);
        String requestType = getAttributeValueById(ddREQUEST_TYPE_ID);
        String description = getAttributeValueById(txtDESCRIPTION_ID);
        String priority = getAttributeValueById(ddPRIORITY_ID);

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


}
