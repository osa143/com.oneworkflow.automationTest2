package pageObjects;
import io.cucumber.datatable.DataTable;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import java.util.List;
import java.util.Map;

public class OWF_ChangeRecordPage extends BaseRecordPage {
    private static final String btnSEND = "WIN_0_600002905";
    private static final String ddANSWER= "Answer";
    private static final String dd_OWNER= "Owner*";
    private static final String btnDOWN = "WIN_0_700050252";
    private static final String btnUP= "WIN_0_700050251";
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
    private static final String txt_TEMPLATE = "arid_WIN_0_777504501";
    private static final String txt_REQUEST_CATEGORY = "arid_WIN_0_777021548";
    private static final String txt_PROJECTCODE = "arid_WIN_0_700007053";
    private static final String txt_CHANGE_BUILDER = "arid_WIN_0_600001054";
    private static final String dd_ASSIGNED_PROFILE = "arid_WIN_0_777031408";
    private static final String txt_IMPLEMENTATION = "arid_WIN_0_700007007";
    private static final String txt_TEST_PLAN = "arid_WIN_0_700007008";
    private static final String txt_ROLLBACK = "arid_WIN_0_700007009";
    private static final String txt_COMMUNICATION_PLAN = "arid_WIN_0_600001053";
    private static final String txt_VER_OF_FUNCTIONALITY = "arid_WIN_0_600001055";
    private static final String txt_RISK_DESCRIPTION = "arid_WIN_0_600001065";
    private static final String dd_WITHDRAWN_REASON = "arid_WIN_0_777031390";
    private static final String btn_SEARCH_FOR = "WIN_0_rc0id700027222";
    private static final String txt_LOGIN_NAME = "arid_WIN_0_700027012";
    private static final String txt_ADD_EMAIL_ADDRESS = "arid_WIN_0_700027017";
    private static final String txt_CHANGE_BUILDER_EMAIL = "arid_WIN_0_999100105";
    private static final String txt_CHANGE_BUILDER_PHONE = "arid_WIN_0_999100104";
    private static final String txt_TO_DATE = "arid_WIN_0_777031004";
    private static final String txt_RESOLVED_GROUP = "arid_WIN_0_777031382";
    private static final String txt_RESOLVED_PERSON = "arid_WIN_0_777031383";
    private static final String txt_REVIEWDETAILS = "arid_WIN_0_705002084";
    private static final String txt_CLOSURE_CODE = "arid_WIN_0_777031380";
    private static final String txt_FAILURE_CODE = "arid_WIN_0_777507017";
    private static final String txt_WITHDRAWN_REASON = "arid_WIN_0_777031390";
    private static final String txt_SERVICE_AND_CUSTOMER_IMPACT = "arid_WIN_0_730030000";
    private static final String txt_REQUESTSTART = "arid_WIN_0_777021160";
    private static final String txt_REQUESTEND = "arid_WIN_0_777021161";
    private static final String txt_ESTIMATED_IMPACT = "arid_WIN_0_777031437";
    private static final String txt_EXPECTED_ALARMS = "arid_WIN_0_705001002";
    private static final String txt_IMPACT_DAYS = "arid_WIN_0_990001006";
    private static final String txt_IMPACT_HOURS = "arid_WIN_0_900000018";
    private static final String txt_IMPACT_MINS = "arid_WIN_0_900000019";
    private static final String txt_IMPACT_SECS = "arid_WIN_0_990001007";
    private static final String txt_AGREED_START = "arid_WIN_0_777021162";
    private static final String txt_AGREED_END = "arid_WIN_0_777021163";
    private static final String txt_ACTUALSTART = "arid_WIN_0_777021164";
    private static final String txt_ACTUALEND = "arid_WIN_0_777021165";
    private static final String txt_ACTUALIMPACT = "arid_WIN_0_777031429";
    private static final String txt_COMPLETEDCODE = "arid_WIN_0_777021166";
    private static final String txt_EXTERNALPARENTTICKETID = "arid_WIN_0_600001020";
    private static final String txt_ACTUALDOWNTIME = "arid_WIN_0_600001501";
    private static final String txt_SUBSCRIPTIONID = "arid_WIN_0_600002012";
    private static final String txt_ADDRESSOFISSUE = "arid_WIN_0_600002023";
    private static final String btn_APPROVE= "WIN_0_705001330";

    public void clickApprove(){
        clickElement(By.id(btn_APPROVE));
        switchToDefault();
    }
    public String getAddressOfIssue(){
        return getTextByID(txt_ADDRESSOFISSUE);
    }

    public String getSubscriptionID(){
        return getTextByID(txt_SUBSCRIPTIONID);
    }

    public String getActualDowntime(){
        return getTextByID(txt_ACTUALDOWNTIME);
    }

    public String getExternalParentTicketId(){
        return getTextByID(txt_EXTERNALPARENTTICKETID);
    }

    public String getCompleted_code(){
        return getTextByID(txt_COMPLETEDCODE);
    }

    public String get_ActualImpact(){
        return getTextByID(txt_ACTUALIMPACT);
    }

    public String getActual_end(){
        return getTextByID(txt_ACTUALEND);
    }

    public String getActual_start(){
        return getTextByID(txt_ACTUALSTART);
    }

    public String getAgreedEnd(){
        return getTextByID(txt_AGREED_END);
    }

    public String getAgreedStart(){
        return getTextByID(txt_AGREED_START);
    }

    public String getImpactSecs(){
        return getTextByID(txt_IMPACT_SECS);
    }

    public String getImpactMins(){
        return getTextByID(txt_IMPACT_MINS);
    }

    public String getImpactHours(){
        return getTextByID(txt_IMPACT_HOURS);
    }
    public void enterImpactedHours(String text){
        enterTextByElement(By.id(txt_IMPACT_HOURS), text);
    }

    public String getImpactDays(){
        return getTextByID(txt_IMPACT_DAYS);
    }

    public String getExpectedAlarms(){
        return getTextByID(txt_EXPECTED_ALARMS);
    }

    public String getEstimatedImpact(){
        return getTextByID(txt_ESTIMATED_IMPACT);
    }

    public String getRequestEnd(){
        return getAttributeValueById(txt_REQUESTEND);
    }

    public String getRequestStart(){
        return getAttributeValueById(txt_REQUESTSTART);
    }

    public String getServiceAndCustomerImpact(){
        return getTextByID(txt_SERVICE_AND_CUSTOMER_IMPACT);
    }

    public String getWithdrawn_reason(){
        return getTextByID(txt_WITHDRAWN_REASON);
    }

    public String getFailureCode(){
        return getTextByID(txt_FAILURE_CODE);
    }

    public String getClosureCode(){
        return getTextByID(txt_CLOSURE_CODE);
    }


    public String getReviewDetails(){
        return getTextByID(txt_REVIEWDETAILS);
    }

    public String getResolvedPerson(){
        return getTextByID(txt_RESOLVED_PERSON);
    }

    public String getResolvedGroup(){
        return getTextByID(txt_RESOLVED_GROUP);
    }

    public String getToDate(){
        return getTextByID(txt_TO_DATE);
    }
    public void createChangeTicket(DataTable dataTable){
        clickSwedenCheckBox();
        List<Map<String, String>> listMap=dataTable.asMaps(String.class, String.class);
        selectRequestType(listMap.get(0).get("RequestType"), true);
        selectTitleAs(listMap.get(0).get("Title"));
        selectRequestCategoryOnChangeRecordPage(listMap.get(0).get("RequestCategory"));
        enterDescription(listMap.get(0).get("Description"));
        enterReason(listMap.get(0).get("Reason"));
        selectPriority(listMap.get(0).get("Priority"));
        enterChangeBuilder(listMap.get(0).get("ChangeBuilder"));
        enterImplementation(listMap.get(0).get("Implementation"));
        enterTestPlan(listMap.get(0).get("TestPlan"));
        enterRollBack(listMap.get(0).get("RollBack"));
        enterCommunicationPlan(listMap.get(0).get("CommPlan"));
        enterVerOfFunctionality(listMap.get(0).get("VerOfFunctionality"));
        enterRiskDescriptionId(listMap.get(0).get("Risk"));
        enterServiceAndCustomerImpact(listMap.get(0).get("ServiceCustomerImpact"));
        selectEstimatedImpact(listMap.get(0).get("EstimatedImpact"));
        enterStartDate(10);
        enterEndDate(20);
        enterImpactDurationMins(listMap.get(0).get("ImpactDuration"));
        clickSave();
    }

    public String getChangeBuilderPhone(){
        return getTextByID(txt_CHANGE_BUILDER_PHONE);
    }

    public String getChangeBuilderEmail(){
        return getTextByID(txt_CHANGE_BUILDER_EMAIL);
    }

    public void enterEmailAddress(String text) {
        enterTextByElement(By.id(txt_ADD_EMAIL_ADDRESS), text);
    }

    public void enterLoginName(String text) {
        enterTextByElement(By.id(txt_LOGIN_NAME), text);
    }

    public void  selectSearchForRadioButton(){
        clickElement(By.id(btn_SEARCH_FOR));
    }

    public String getWithdrawnReason(){
        return getTextByID(dd_WITHDRAWN_REASON);
    }

    public String getRiskDescription(){
        return getTextByID(txt_RISK_DESCRIPTION);
    }

    public String getVerOfFunctionality(){
        return getTextByID(txt_VER_OF_FUNCTIONALITY);
    }

    public String getCommunicationPlan(){
        return getTextByID(txt_COMMUNICATION_PLAN);
    }

    public String getRollback(){
        return getTextByID(txt_ROLLBACK);
    }

    public String getTestPlan(){
        return getTextByID(txt_TEST_PLAN);
    }

    public String getImplementation(){
        return getTextByID(txt_IMPLEMENTATION);
    }


    public String getAssignedProfile(){
        return getTextByID(dd_ASSIGNED_PROFILE);
    }

    public String getChangeBuilder(){
        return getTextByID(txt_CHANGE_BUILDER);
    }

   public String getProjectCode(){
       return getTextByID(txt_PROJECTCODE);
   }

    public String getRequestCategory(){
       return getTextByID(txt_REQUEST_CATEGORY);
   }

    public String getTemplate(){
        return getTextByID(txt_TEMPLATE);
    }

    public String getChangeInitiator(){
        return getTextByID(txt_CHANGE_INITIATOR);
    }
    public String getSource_Id(){
        return getTextByID(txt_SOURCE_ID);
    }
    public String getChange_Type(){
        return getTextByID(txt_CHANGE_TYPE);
    }
    private static final String table_SERVICE_INFO= "T600002223";
    public boolean verifyServiceInfoActivatedTimelineUpdate(){
        return findElement(By.xpath("//span[contains(text(), 'SERVICE INFORMATION ACTIVATED ')]")).isDisplayed();
    }
    public boolean verifyServiceInfoDeactivatedTimelineUpdate(){
        return findElement(By.xpath("//span[contains(text(), 'SERVICE INFORMATION DEACTIVATED ')]")).isDisplayed();
    }
    public boolean verifyServiceInfoActivated(){
        int rows= getTableRows(By.id(table_SERVICE_INFO)).size();
        System.out.println("Service Info table rows :"+ rows);
        String text= getTableCellData(By.id(table_SERVICE_INFO), "Status",1);
        Assert.assertEquals(text, "Active");
        if (rows>1)
            return true;
        else return false;
    }
    public String getTemplateText(){
        String text= getTextByID(fld_TEMPLATE);
        System.out.println(text);
        return text;
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
        WebElement advanceSearchTextBox= findElement(By.xpath("//div[@class='AdvancedSearchBarField arfid1005 ardbnFld-AdvanceQuery']//textarea[@id='arid1005']"));
        advanceSearchTextBox.click();
        advanceSearchTextBox.sendKeys(text);

    }
    public void clickAdvancedSearch(){
        clickElement(By.id(btn_ADVANCED_SEARCH));
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
            Assert.assertTrue(ciDetailsDisplayed, "Ticket details are not displayed");
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
            Assert.assertTrue(ciDetailsDisplayed, "Ticket details are not displayed");
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
    public void clickArrowUpButton(){
        driver.findElement(By.id(btnUP)).click();
    }

    public void selectRequestCategoryOnChangeRecordPage(String value){
        selectDropDownNameAndValue(ddREQUEST_CATEGORY, value, false);
    }

    public boolean verifyImpactAvailability() {
        Boolean availability= verifyElementIsDisplayed(By.id(dd_CHANGE_TYPE));
        System.out.println(availability);
        return availability;
    }
    public boolean verifyActualImpactAvailability() {
        Boolean availability = verifyElementIsDisplayed(By.id(txt_ACTUALIMPACT));
        System.out.println(availability);
        return availability;

    }

}