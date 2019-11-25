package pageObjects;

import io.cucumber.datatable.DataTable;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import java.security.SecureRandom;
import java.util.List;

public class OWF_ChangeRecordPage extends BaseRecordPage {


    private static final String btnSEND = "WIN_0_600002905";
    private static final String ddANSWER= "Answer";
    private static final String dd_OWNER= "Owner*";
    private static final String btnDOWN = "reg_img_700050252";
    private static final String ddREQUEST_CATEGORY = "Request Category*";
    private static final String dd_CHANGE_TYPE= "arid_WIN_0_755000000";
    private static final String txt_SEARCH_FILTER_CALENDAR= "combo-1017-inputEl";
    private static final String txt_SEARCH_FILTER_CALENDAR_XPATH= "//*[@id='combo-1017-inputEl']";
    private static final String btn_CHANGE_RECORD= "button-1052";
    private static final String dd_STATUS= "Status";
    private static final String btn_SEARCH= "WIN_0_700506222";
    private static final String btn_clear= "WIN_0_700506223";
    private static final String txt_LOCATION_ID_PLUS= "arid_WIN_0_777031006";
    private static final String table_SELECT_TARGET_LOCATION= "T700506101";
    private static final String btn_CANCEL= "WIN_0_777000001";
    private static final String txt_LOCATION_NAME_PLUS= "arid_WIN_0_777031430";
    private static final String btn_CANCEL_LOCATION= "WIN_0_700000105";
    private static final String table_SELECT_LOCATION= "T700024013";
    private static final String btn_ADVANCED_SEARCH= "WIN_0_777505104";
    private static final String txt_ADVANCED_SEARCH= "arid1005";
    private static final String txt_RISK_SCORE= "arid_WIN_0_700050316";
    private static final String txt_OWNER_PROFILE= "arid_WIN_0_777031401";
    private static final String txt_OWNER= "arid_WIN_0_777031400";
    private static final String btn_SHOW_CR_MATCHING= "WIN_0_600002901";
    private static final String div_SHOW_CR_MATCHING= "WIN_0_999000247";
    private static final String txt_EMAIL_ADDRESS= "arid_WIN_0_700027017";
    private static final String btn_ADD_EMAIL= "WIN_0_600002906";
    private static final String txt_PROJECT_CODE= "arid_WIN_0_700007053";
    private static final String txt_TIMELINE_TEXT_ENTRY= "WIN_0_777777103";
    private static final String btn_DETAILS= "WIN_0_999000372";
    private static final String dd_RESOLVED_GROUP= "Resolved Group";
    private static final String dd_RESOLVED_PERSON= "Resolved Person";
    private static final String txt_REVIEW_DETAILS= "arid_WIN_0_705002084";
    private static final String btn_VIEW= "WIN_0_777021131";
    private static final String txt_ACTUAL_START ="arid_WIN_0_777021164";
    private static final String txt_ACTUAL_END ="arid_WIN_0_777021165";
    private static final String dd_ACTUAL_IMPACT ="Actual Impact";
    private static final String dd_COMPLETED_CODE ="Completed Code";
    private static final String fld_TEMPLATE= "label777504501";
    private static final String txt_CHANGE_TYPE = "arid_WIN_0_755000000";
    private static final String txt_SOURCE_ID = "arid_WIN_0_777021006";
    private static final String txt_CHANGE_INITIATOR = "arid_WIN_0_2";
    private static final String dd_REQUEST_CATEGORY = "arid_WIN_0_777021548";
    private static final String dd_TEMPLATE ="arid_WIN_0_777031002";
    private static final String txt_REASON = "arid_WIN_0_705001003";
    private static final String txt_CHANGE_BUILDER = "arid_WIN_0_600001054";
    private static final String txt_REGION_ID = "arid_WIN_0_700009452";
    private static final String txt_REGION_NAME = "arid_WIN_0_700009638";
    private static final String txt_LATITUDE = "arid_WIN_0_700024008";
    private static final String txt_LONGITUDE = "arid_WIN_0_700024009";
    private static final String txt_Y_DEGREE = "arid_WIN_0_700024011";
    private static final String txt_LOCATION_DETAILS = "arid_WIN_0_700024007";
    private static final String txt_LAST_ACK_BY = "arid_WIN_0_777031402";
    private static final String txt_X_DEGREE = "arid_WIN_0_700024010";
    private static final String txt_GET_RE_ASSIGNMENT_COUNT = "arid_WIN_0_777031450";
    private static final String txt_TEST_PLAN = "arid_WIN_0_700007008";
    private static final String txt_ROLLBACK = "arid_WIN_0_700007009";
    private static final String txt_VENDOR_NAME = "arid_WIN_0_705001291";




    public String getTxt_CHANGE_Initiator(){
        return getTextByID(txt_CHANGE_INITIATOR);
    }

    public String getSource_Id(){
        return getTextByID(txt_SOURCE_ID);
    }

    public String getChange_Type(){
        return getTextByID(txt_CHANGE_TYPE);
    }

    public String getTemplateText(){
        String text= getTextByID(fld_TEMPLATE);
        System.out.println(text);
        return text;
    }
    public String getImplementation(){
        return getTextByID(txtIMPLEMENTATION_ID);
    }

    public String getVerOfFunctionality(){
        return getTextByID(txtVER_OF_FUNCTIONALITY_ID);

    }
    public String getValidatesVendorName(){
        return getTextByID(txt_VENDOR_NAME);
    }
    public String getRollback(){
        return getTextByID(txt_ROLLBACK);
    }

    public String getTestPlan(){
        return getTextByID(txt_TEST_PLAN);
    }
    public String getCommunicationPlan(){
        return getTextByID(txtCOMMUNICATION_PLAN_ID);

    }

    public String getRequestCategory(){
        return getTextByID(dd_REQUEST_CATEGORY);
    }

    public String getTemplate(){
        return getTextByID(dd_TEMPLATE);
    }
    public String getReason(){
        return getTextByID(txt_REASON);
    }
    public String getProjectCode(){
        return getTextByID(txt_PROJECT_CODE);
    }
    public String getChangeBuilder(){
        return getTextByID(txt_CHANGE_BUILDER);
    }
    public String getLocationId(){
        return getTextByID(txt_LOCATION_ID_PLUS);
    }
    public String getLocationName(){
        return getTextByID(txt_LOCATION_NAME_PLUS);
    }
    public String getRegionId(){
        return getTextByID(txt_REGION_ID);
    }
    public String getRegionName(){
        return getTextByID(txt_REGION_NAME);
    }
    public String getLatitude(){
        return getTextByID(txt_LATITUDE);
    }
    public String getLongitude(){
        return getTextByID(txt_LONGITUDE);
    }
    public String getYDegree(){
        return getTextByID(txt_Y_DEGREE);
    }
    public String getLocationDetails(){
        return  getTextByID(txt_LOCATION_DETAILS);
    }
    public String getLastAckBy(){
        return getTextByID(txt_LAST_ACK_BY);
    }
    public String getXDegree(){
        return getTextByID(txt_X_DEGREE);
    }
    public String getReassignmentCount(){
        return getTextByID(txt_GET_RE_ASSIGNMENT_COUNT);
    }





    public void selectActualImpact_scheduleTab(String value){
        selectDropDownNameAndValue(dd_ACTUAL_IMPACT, value, false);
    }

    public void selectCompletedCode_scheduleTab(String value){
        selectDropDownNameAndValue(dd_COMPLETED_CODE, value, false);
    }


    public void clickView_approvalTab(){
        clickElement(By.id(btn_VIEW));
    }

    public String getActualStart(){
        return getTextByID(txt_ACTUAL_START);
    }
    public String getActualEnd(){
        return getTextByID(txt_ACTUAL_END);
    }
    public void enterReviewDetails(String text){
        enterTextByElement(By.id(txt_REVIEW_DETAILS), text);
    }

    public void selectResolvedGroup(String value){
        selectDropDownNameAndValue(dd_RESOLVED_GROUP, value, true);
    }
    public void selectResolvedPerson(String value){
        selectDropDownNameAndValue(dd_RESOLVED_PERSON, value, true);
    }

    public void selectOwner(String value){
        selectDropDownNameAndValue(dd_OWNER, value, false);
    }
    public void clickDetails(){
        clickElement(By.id(btn_DETAILS));
    }

    public boolean verifyProjectCodeIsReadOnly(){
        return checkIfControlIsReadonly(txt_PROJECT_CODE);
    }
    public boolean verifyTimelineTextEntryIsReadOnly(){
        return checkIfControlIsReadonly(txt_TIMELINE_TEXT_ENTRY);
    }


    public boolean verifySendButtonIsEnable(){
        return verifyElementIsEnabledByElement(By.id(btnSEND));
    }
    public void clickAddEmail(){
        clickElement(By.id(btn_ADD_EMAIL));
    }

    public void enterEmail(String text){
        enterTextByElement(By.id(txt_EMAIL_ADDRESS), text);
    }

    public boolean verifyShowCrDivIsDisplayed(){
        return verifyElementIsDisplayed(By.id(div_SHOW_CR_MATCHING));
    }

    public void clickShowCrMatching(){
        clickElement(By.id(btn_SHOW_CR_MATCHING));
    }


    public String getOwnerProfile(){
        return getAttributeValueById(txt_OWNER_PROFILE);
    }
    public String getOwner(){
        return getAttributeValueById(txt_OWNER);
    }

    public String getRiskScore(){
        return getAttributeValueById(txt_RISK_SCORE);
    }

    public void enterAdvancedSearch(String text){
        //enterTextByElement(By.id(txt_ADVANCED_SEARCH), text);
        findElement(By.xpath("//*[@id='arid1005']")).sendKeys(text);
    }

    public void clickAdvancedSearch(){
        clickElement(By.id(btn_ADVANCED_SEARCH));
        wait(2000);
    }

    public void clickCancel(){
        clickElement(By.id(btn_CANCEL_LOCATION));
    }


    public void enterLocationNamePlus_selectTarget(String text){
        enterTextByElement(By.id(txt_LOCATION_NAME_PLUS), text);
    }


    public void clickCancel_selectTarget(){
        clickElement(By.id(btn_CANCEL));
    }

    public void enterLocationIDPlus_SelectTarget(String text){
        enterTextByElement(By.id(txt_LOCATION_ID_PLUS), text);
    }

    public void clickSearch_selectTarget(){
        clickElement(By.id(btn_SEARCH));
    }
    public void clickClear_selectTarget(){
        clickElement(By.id(btn_clear));
    }
    public List<WebElement> TableRows() {
        return getTableRows(By.id(table_SELECT_LOCATION));
    }
    public void validateCiDetailsForMultipleLocationsName(DataTable locationNamePlus)
    {
        List<List<String>> locations = locationNamePlus.asLists(String.class);
        for (int i = 1; i < locations.size(); i ++) {
            System.out.println("location is: " + locations.get(i).get(0));
            enterLocationNamePlus_selectTarget(locations.get(i).get(0));
            enterSendKeys(By.id(txt_LOCATION_NAME_PLUS));
            wait(1000);
            driver.switchTo().parentFrame();
            switchToFrameByIndex(2);
            switchToFrameByIndex(1);
            int size = TableRows().size();
            System.out.println("table size is : "+size);
            boolean ciDetailsDisplayed = size > 1 ? true: false;
            Assert.assertTrue(ciDetailsDisplayed, "CI details are not displayed");
            clickCancel();
            switchToFrameByIndex(2);
            wait(1000);

        }
    }

    public void validateCiDetailsForMultipleLocationsID(DataTable locationIdPlus)
    {
        List<List<String>> locations = locationIdPlus.asLists(String.class);
        for (int i = 1; i < locations.size(); i ++) {
            System.out.println("location is: " + locations.get(i).get(0));
            enterLocationIDPlus_SelectTarget(locations.get(i).get(0));
            enterSendKeys(By.id(txt_LOCATION_ID_PLUS));
            wait(1000);
            driver.switchTo().parentFrame();
            switchToFrameByIndex(2);
            switchToFrameByIndex(1);
            int size = TableRows().size();
            boolean ciDetailsDisplayed = size > 1 ? true: false;
            Assert.assertTrue(ciDetailsDisplayed, "CI details are not displayed");
            clickCancel();
            switchToFrameByIndex(2);
            wait(1000);
        }
    }

    public void selectStatus(String value){
        selectDropDownNameAndValue(dd_STATUS, value, false);
    }

    public void enterSearch_calendar(String text){
        enterTextByElement(By.xpath(txt_SEARCH_FILTER_CALENDAR_XPATH), text);
        findElement(By.xpath(txt_SEARCH_FILTER_CALENDAR_XPATH)).sendKeys(Keys.ENTER);
    }

    public void clickChange_Record(){
        clickElement(By.id(btn_CHANGE_RECORD));
    }

     public void selectChangeType(String value){
         findElement(By.id(dd_CHANGE_TYPE)).click();
         wait(500);
         selectDropDownValue(value);
     }
    public void selectAnswer(String value){
        selectDropDownNameAndValue(ddANSWER,value,false);
    }

    public void clickSendButton() {
        clickElement(By.id(btnSEND));
    }

    public void clickDownButton(){
        driver.findElement(By.id(btnDOWN)).click();
    }
    public void selectRequestCategoryOnChangeRecordPage(String value){
        selectDropDownNameAndValue(ddREQUEST_CATEGORY, value, false);

    }


}
