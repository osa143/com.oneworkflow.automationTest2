package pageObjects;
import io.cucumber.datatable.DataTable;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import utils.CommonUtils;

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
    private static final String dd_STATUS= "arid_WIN_0_777031003";
    private static final String txt_Title= "arid_WIN_0_777031000";
    private static final String txt_reqestType= "arid_WIN_0_777031002";
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
    private static final String txt_SOURCE_NAME = "arid_WIN_0_777777912";
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
    private static final String txt_SUBSCRIPTION_ID = "arid_WIN_0_600002012";
    private static final String txt_ADDRESS_OF_ISSUE = "arid_WIN_0_600002023";
    private static final String btn_APPROVE= "WIN_0_705001330";
    private static final String dd_OWNER_PROFILE = "arid_WIN_0_777031401";
    private static final String dd_INTERESTED_PARTIES_TYPE = "arid_WIN_0_700027963";
    private static final String txt_EXTERNAL_TICKET_ID= "WIN_0_600002211";
    private static final String div_LOCATION_DETAILS= "WIN_0_999000101";
    private static final String btn_CLOSE_LOCATION_DETAILS= "WIN_0_999000100";
    private static final String btn_REFRESH_RELATED_CIS= "//*[@id='WIN_0_700009650']/div[1]/table/tbody/tr/td[3]/a[2]";
    private static final String table_RELATED_CIS="T700009650";
    private static final String div_INTERESTED_PARTY="WIN_0_999000005";
    private static final String txt_ORGANISATION_NAME_PLUS="arid_WIN_0_700031001";
    private static final String btn_USE_QUICK_CI_SEARCH_INTERESTED_PARTY= "WIN_0_990000936";
    private static final String btn_Cancel_INTERESTED_PARTY="WIN_0_777777852";
    private static final String txt_LOCATION_NAME= "arid_WIN_3_777031430";
    private static final String txt_LOCATION_ID="arid_WIN_3_777031006";
    private static final String txt_REGION_NAME= "arid_WIN_3_700009638";
    private static final String table_SELECT_LOCATION_= "T700024013";
    private static final String btn_CHANGE_BUILDER= "//img[@alt='Editor for Change Builder+*']";
    private static final String table_NORMALCHANGE_APPROVAL = "T705001250";
    private static final String btn_REASON_EDITOR= "//img[@alt='Editor for Reason']";
    private static final String rbtn_CAB_REQUIRED_YES = "WIN_0_rc1id800000002";
    private static final String YES_CONFIRMATION= "WIN_0_700027904";
    private static final String table_TEMPLATES= "T777000002";
    private static final String btn_CLOSE_CHANGE_TEMPLATE= "WIN_2_777000001";
    private static final String dd_SERVICE_PROVIDER = "WIN_0_700047002";
    private static final String btn_SHOW_TEMPLATES = "WIN_0_700047004";
    private static final String txt_CUSTOMER = "arid_WIN_2_777031014";
    private static final String btn_OPEN_TEMPLATE = "WIN_0_777010092";
    private static final String txt_STATUS = "arid_WIN_0_777031003";
    private static final String txt_TEMPLATE_TYPE = "arid_WIN_2_700047012";
    private static final String txt_TEMPLATE_SUBTYPE = "arid_WIN_2_700047013";
    private static final String txt_TEMPLATE_NAME = "arid_WIN_2_777504501";
    private static final String txt_TEMPLATE_DESCRIPTION = "arid_WIN_2_777504502";
    private static final String txt_TEMPLATE_REASON = "arid_WIN_2_705001003";
    private static final String txt_TEMPLATE_CATEGORY = "arid_WIN_2_200000003";
    private static final String txt_TEMPLATE_TYPE_CTI = "arid_WIN_2_200000004";
    private static final String txt_TEMPLATE_ITEM = "arid_WIN_2_200000005";
    private static final String txt_TEMPLATE_TECHNOLOGY = "arid_WIN_2_777020101";
    private static final String txt_IMPLEMENTATION_STEPS = "arid_WIN_2_700007000";
    private static final String txt_TEST_PLAN_TEMPLATE = "arid_WIN_2_700007001";
    private static final String txt_TEMPLATE_ROLLBACK = "arid_WIN_2_700007002";
    private static final String txt_TEMPLATE_COMMUNICATION_PLAN = "arid_WIN_2_999100101";
    private static final String txt_TEMPLATE_VER_OF_FUNCTIONALITY = "arid_WIN_2_999100102";
    private static final String txt_TEMPLATE_RISK_DESCRIPTION = "arid_WIN_2_999100103";
    private static final String txt_TEMPLATE_REQUEST_TYPE = "arid_WIN_2_777031002";
    private static final String txt_TEMPLATE_TITLE = "arid_WIN_2_777031000";
    private static final String txt_TEMPLATE_REQUEST_CATEGORY = "arid_WIN_2_777021548";
    private static final String txt_TEMPLATE_PRIORITY = "arid_WIN_2_700025204";
    private static final String txt_TEMPLATE_ESTIMATED_IMPACT = "arid_WIN_2_700025205";
    private static final String txt_TEMPLATE_EXPECTED_ALARMS = "arid_WIN_2_705001002";
    private static final String dd_TEMPLATE_SERVICE_PROVIDER = "arid_WIN_0_700047002";
    private static final String dd_TEMPLATE_SERVICE_PROVIDER_DROPDOWN = "/html/body/div[4]/div[2]/table/tbody/tr[1]/td[1]";
    private static final String btn_TEMPLATE_NEXT_CHUNK = "//*[@id='WIN_0_777000002']/div[1]/table/tbody/tr/td[1]/div/a[2]";
    private static final String btn_FURTHER_DETAILS = "//*[@id='WIN_2_777010000']/div[2]/div[2]/div/dl/dd[2]/span[2]/a";
    private static final String btn_TEMPLATE_CLOSE = "WIN_2_777000001";
    private static final String btn_PREVIOUS_CHUNK = "//*[@id='WIN_0_777000002']/div[1]/table/tbody/tr/td[1]/div/a[1]";
    private static final String txt_DESCRIPTION = "arid_WIN_2_777031007";
    private static final String btn_PRE_APPROVED_NO = "WIN_2_rc0id700061014";
    private static final String btn_TEMPLATE_SAVE = "WIN_2_1003";

    public boolean isTemplateSavePresent(){
        return findElement(By.id(btn_TEMPLATE_SAVE)).isDisplayed();
    }

    public boolean isNoPreApprovedSelected(){
        return driver.findElement(By.id(btn_PRE_APPROVED_NO)).isSelected();
    }

    public boolean getDescription(String expectedDescription){
        String actualDescription =  getTextByID(txt_DESCRIPTION);
        if (expectedDescription.contains(actualDescription)){
            return true;
        }
        else return false;
    }

    public void clickPreviousChunkButton(){
        clickElement(By.xpath(btn_PREVIOUS_CHUNK));
    }

    public void clickTemplateClose(){
        clickElement(By.id(btn_TEMPLATE_CLOSE));
    }

    public void clickFurtherDetailsTab(){
        clickElement(By.xpath(btn_FURTHER_DETAILS));
    }

    public void clickNextChunkButton(){
        findElement(By.xpath(btn_TEMPLATE_NEXT_CHUNK)).click();
    }

    public void selectTemplateServiceProvider(){
        clickElement(By.id(dd_TEMPLATE_SERVICE_PROVIDER));
        clickElement(By.xpath(dd_TEMPLATE_SERVICE_PROVIDER_DROPDOWN));
    }

    public String getTemplateExpectedAlarms(){
        return getAttributeValueById(txt_TEMPLATE_EXPECTED_ALARMS);
    }

    public String getTemplateEstimatedImpact(){
        return getAttributeValueById(txt_TEMPLATE_ESTIMATED_IMPACT);
    }

    public String getTemplatePriority(){
        return getAttributeValueById(txt_TEMPLATE_PRIORITY);
    }

    public String getTemplateRequestCategory(){
        return getAttributeValueById(txt_TEMPLATE_REQUEST_CATEGORY);
    }

    public String getTemplateTitle(){
        return getAttributeValueById(txt_TEMPLATE_TITLE);
    }

    public String getTemplateRequestType(){
        return getAttributeValueById(txt_TEMPLATE_REQUEST_TYPE);
    }

    public String getTemplateRiskDescription(){
        return getAttributeValueById(txt_TEMPLATE_RISK_DESCRIPTION);
    }

    public boolean getTemplateVerOfFunctionality(String expectedVerOfFunctionality){
        String actualVerOfFunctionality =  getTextByID(txt_TEMPLATE_VER_OF_FUNCTIONALITY);
        if (expectedVerOfFunctionality.contains(actualVerOfFunctionality)){
            return true;
        }
        else return false;
    }

    public String getTemplateCommunicationPlan(){
        return getAttributeValueById(txt_TEMPLATE_COMMUNICATION_PLAN);
    }

    public String getTemplateRollback(){
        return getAttributeValueById(txt_TEMPLATE_ROLLBACK);
    }

    public String getTestPlanTemplate(){
        return getAttributeValueById(txt_TEST_PLAN_TEMPLATE);
    }

    public boolean getImplementationSteps(String expectedImplementationSteps){
        String actualImplementationSteps =  getTextByID(txt_IMPLEMENTATION_STEPS);
        if (expectedImplementationSteps.contains(actualImplementationSteps)){
            return true;
        }
        else return false;
    }

    public String getTemplateTechnology(){
        return getAttributeValueById(txt_TEMPLATE_TECHNOLOGY);
    }

    public String getTemplateItem(){
        return getAttributeValueById(txt_TEMPLATE_ITEM);
    }

    public String getTemplateTypeCTI(){
        return getAttributeValueById(txt_TEMPLATE_TYPE_CTI);
    }

    public String getTemplateCategory(){
        return getAttributeValueById(txt_TEMPLATE_CATEGORY);
    }

    public boolean getTemplateReason(String expectedReason){
        String actualReason =  getTextByID(txt_TEMPLATE_REASON);
        if (expectedReason.contains(actualReason)){
            return true;
        }
        else return false;
    }

    public String getTemplateDescription(){
        return getAttributeValueById(txt_TEMPLATE_DESCRIPTION);
    }

    public String getTemplateName(){
        return getAttributeValueById(txt_TEMPLATE_NAME);
    }

    public String getTemplateSubType(){
        return getAttributeValueById(txt_TEMPLATE_SUBTYPE);
    }

    public String getTemplateType(){
        return getAttributeValueById(txt_TEMPLATE_TYPE);
    }

    public String getStatus(){
        return getAttributeValueById(txt_STATUS);
    }

    public void clickOpenTemplateButton(){
        clickElement(By.id(btn_OPEN_TEMPLATE));
    }

    public void clickTemplate(String template){
        clickElementByContainsTextAndTagName("span",template);
    }

    public String getCustomerPlus(){
        return getAttributeValueById(txt_CUSTOMER);
    }

    public void clickShowTemplates(){
        clickElement(By.id(btn_SHOW_TEMPLATES));
    }

    public void selectServiceProvider(String value, boolean readOnly ) {
        //clickElement(By.id(dd_SERVICE_PROVIDER));
        selectDropDownNameAndValue(dd_SERVICE_PROVIDER, value, readOnly);
    }
    private static final String btn_COPY_TO_NEW= "WIN_0_999000117";
    private static final String txt_tkt_DESCRIPTION="arid_WIN_0_777031007";
    private static final String dd_PRIORITY="//*[@id=\"WIN_0_700025204\"]/a";
    private static final String btn_ConfirmYes = "WIN_0_600009803";
    private static final String txt_PRIORITY = "arid_WIN_0_700025204";
    private static final String txt_SERVICEPROVIDER = "arid_WIN_0_777031005";
    private static final String txt_impactType = "arid_WIN_0_777031437";
    private static final String txt_impactCategory = "//*[@id=\"T700009087\"]/tbody/tr[2]/td[11]/nobr";
    private static final String table_riskQuestionstable_ID = "T700050028";
    private static final String table_VersionTable_ID = "//*[@id=\"WIN_0_705001250\"]/div[2]/div/div[2]";
    private static final String table_sentNotifications = "//*[@id=\"WIN_0_700020677\"]/div[2]/div/div[2]";
    private static final String table_WORKORDER_ID = "//*[@id=\"WIN_0_777504000\"]/div[2]/div/div[2]";
    private static final String table_SLATITLE_ID = "//*[@id=\"T777506226\"]/tbody/tr/td";
    private static final String table_LINKEDITEMSTAB = "T777506000";
    private static final String txt_CHANGEPROJECTTAB = "arid_WIN_0_777021620";
    private static final String table_ChangeChannel = "T600002223";
    private static final String txt_EXTERNALTICKETID = "arid_WIN_0_600001073";
    private static final String popup_COPYTONEW = "arid_WIN_0_700027903";
    private static final String btn_CANCELCOPYTONEW = "WIN_0_600009805";
    private static final String btn_NOCOPYTONEW = "WIN_0_600009804";
    private static final String btn_YESCOPYTONEW = "WIN_0_600009803";
    private static final String form_CHANGEFORM = "WIN_0_600009803";


    public String validateImpactCategoryAs(){
        return getAttributeValueById(txt_impactCategory);
    }

    public String validateImpactTypeAs(){

        return getAttributeValueById(txt_impactType);
        }

    public void enterImpactedDays(String impactedDays){
        enterTextByElement(By.id(txt_IMPACT_DAYS), impactedDays);
    }

    public void clickCopyToNewButton(){
        clickElementById(btn_COPY_TO_NEW);
    }

    public void clickYesConfirmation(){
        CommonUtils.switchToChildWindow(driver, 2);
        clickElementById(btn_ConfirmYes);
        CommonUtils.switchToChildWindow(driver, 1);
    }

    public boolean verifyFieldsAreReadOnly(){
         WebElement Div_schedule_tab=  driver.findElement(By.id("WIN_0_999001529"));
         List<WebElement> elements= Div_schedule_tab.findElements(By.tagName("textarea"));

        for (int i = 0; i < elements.size(); i ++)
        {
            boolean result =checkIfControlIsReadonlyByElement(elements.get(i));
            System.out.println("Read only element - " +elements.get(i));
            if (result==false)
                return false;
        }
        return true;
    }

    public void clickClose_changeTemplate(){
        clickElementById(btn_CLOSE_CHANGE_TEMPLATE);
    }

    public void selectTemplateAndDoubleClickToOpen(String columnName, String tableCellData){
        WebElement requiredTemplate= getTableCellElement(By.id(table_TEMPLATES),columnName, tableCellData);
        doubleClickOnElement(requiredTemplate);
    }
    public boolean verifyTemplatesAppeared(){
        int templates= getTableRows(By.id(table_TEMPLATES)).size();
        if (templates>0)
            return true;
        else return false;
    }

public void enterActualStartAsCurrentDateTime(){
    findElement(By.id(txt_ACTUAL_START)).sendKeys(Keys.ENTER);
}
    public void enterActualEndAsCurrentDateTime(){
        findElement(By.id(txt_ACTUAL_END)).sendKeys(Keys.ENTER);
    }
    public void clickCABApproval(){
        clickElement(By.xpath("//*[@id=\"T777031442\"]/tbody/tr[2]/td[3]/nobr"));
    }

public void clickCabRequiredYes(){
    clickElementById(rbtn_CAB_REQUIRED_YES);
    CommonUtils.switchToChildWindow(driver, 2);
    clickElementById(YES_CONFIRMATION);
    CommonUtils.switchToChildWindow(driver, 1);
}
    public boolean verifyReasonTextEditorButtonIsDisplayed(){
        return verifyElementIsDisplayed(By.xpath(btn_REASON_EDITOR));
    }

    public boolean verifyExpectedDataIsPresent(String colName, String colValue){
        switchToFrameByIndex(2);
        return verifyColumnValuesText(By.id(table_SELECT_LOCATION_),colName, colValue, true);
    }


    public void enterRegionNamePlusAndSearch(String text){
        enterTextByElement(By.id(txt_REGION_NAME), text);
        driver.findElement(By.id(txt_REGION_NAME)).sendKeys(Keys.ENTER);
    }
    public void enterLocationIDPlusAndSearch(String text){
        enterTextByElement(By.id(txt_LOCATION_ID), text);
        driver.findElement(By.id(txt_LOCATION_ID)).sendKeys(Keys.ENTER);
    }
    public void enterLocationNamePlusAndSearch(String text){
        enterTextByElement(By.id(txt_LOCATION_NAME), text);
        driver.findElement(By.id(txt_LOCATION_NAME)).sendKeys(Keys.ENTER);
    }
    public void clickCancel_InterestedParty(){
        clickElementById(btn_Cancel_INTERESTED_PARTY);
    }

   public String getOrganisationName(){
        return getAttributeValueByElement(By.xpath("//*[@id=\"arid_WIN_0_700031001\"]"));
       //return getAttributeValueById(txt_ORGANISATION_NAME_PLUS);
   }

   public void clickUse_FrameOnFrame(){

        try {
            driver.switchTo().frame(1);
            clickElement(By.xpath("//*[@id=\"T990001100\"]/tbody/tr[2]/td[1]/nobr/span"));
            clickElementById(btn_USE_QUICK_CI_SEARCH_INTERESTED_PARTY);
            wait(1000);
            driver.switchTo().defaultContent();
            driver.switchTo().frame(2);
            wait(1000);
        }
        catch (Exception ex)
        {
            driver.switchTo().frame(1);
            driver.switchTo().parentFrame();
            driver.switchTo().frame(1);
            clickElement(By.xpath("//*[@id=\"T990001100\"]/tbody/tr[2]/td[1]/nobr/span"));
            clickElementById(btn_USE_QUICK_CI_SEARCH_INTERESTED_PARTY);
            wait(1000);
            driver.switchTo().defaultContent();
            driver.switchTo().frame(2);
            wait(1000);
        }
    }
    public void enterOrganisationNamePlusAndSearch(String text){
        enterTextByElement(By.id(txt_ORGANISATION_NAME_PLUS), text);
        driver.findElement(By.id(txt_ORGANISATION_NAME_PLUS)).sendKeys(Keys.ENTER);
    }
    public boolean verifyInterestedPartyIsDisplayed(){
        return verifyElementIsDisplayed(By.xpath(div_INTERESTED_PARTY));
    }
    public boolean verifyRelatedCIsArePresent_LocationDetails(){
        wait(7000);
        int CIsNumber=getTableRows(By.id(table_RELATED_CIS)).size();
        if(CIsNumber>0)
            return true;
        else return false;
    }
    public void clickRefresh_RelatedCIs_LocationDetails(){
        try {
            wait(1000);
            clickElement(By.cssSelector("#WIN_0_700009650 > div.TableHdr > table > tbody > tr > td.TableHdrR > a.Ref.btn.btn3d.TableBtn"));
        } catch (Exception e) {
            driver.findElement(By.id("WIN_0_700009650")).findElement(By.xpath("//a[contains(text(),'Refresh')][2]")).click();
        }

        //clickElement(By.xpath("//a[contains(text(),'Refresh')][2]"));

    }

    public void clickTableElementRequestPendingApproval_2(String cellData){
        WebElement element=getTableCellElement(By.id(table_NORMALCHANGE_APPROVAL),"Status", cellData);
        element.click();
    }

    public void clickCloseLocationDetails(){
        clickElementById(btn_CLOSE_LOCATION_DETAILS);
    }

    public boolean verifyLocationDetailsIsDisplayed(){
        return verifyElementIsDisplayed(By.id(div_LOCATION_DETAILS));
    }

    public String getExternalTicketID(){
        return getAttributeValueById(txt_EXTERNAL_TICKET_ID);
    }


    public boolean verifyChangeBuilderButtonIsDisplayed(){
        return verifyElementIsDisplayed(By.xpath(btn_CHANGE_BUILDER));
    }

    private static final String dd_UNIQUE_NAME = "arid_WIN_0_700020762";

    public void SelectUniqueName (String value){
        clickElement(By.id(dd_UNIQUE_NAME));
        selectDropDownNameAndValue(dd_UNIQUE_NAME, value, false);
    }

    public boolean verifyInterestedPartiesTypes(String statuses, String dropdownName){
        return verifyDropdownValues(statuses, dropdownName, dd_INTERESTED_PARTIES_TYPE);
    }

    public void enterChangeBuilder(String changeBuilderName) {
        findElement(By.id(txt_CHANGE_BUILDER)).clear();
        driver.findElement(By.id(txt_CHANGE_BUILDER)).sendKeys(changeBuilderName);
        //driver.findElement(By.id(txt_CHANGE_BUILDER)).sendKeys(Keys.ENTER);

    }

    public void selectOwnerProfile(String value) {
        selectDropDownNameAndValue(dd_OWNER_PROFILE, value, false);
    }


    public Boolean verifyChangeBuilderIsMandatory() {
        return verifyElementIsDisplayed(By.id(txt_CHANGE_BUILDER));
    }

    public void clickApprove(){
        clickElement(By.id(btn_APPROVE));
        switchToDefault();
    }
    public String getAddressOfIssue(){
        return getTextByID(txt_ADDRESS_OF_ISSUE);
    }

    public String getSubscriptionID(){
        return getTextByID(txt_SUBSCRIPTION_ID);
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
        return getAttributeValueById(txt_IMPACT_SECS);
    }

    public String getImpactMins(){
        return getAttributeValueById(txt_IMPACT_MINS);
    }

    public String getImpactHours(){
        return getAttributeValueById(txt_IMPACT_HOURS);
    }
    public void enterImpactedHours(String text){
        enterTextByElement(By.id(txt_IMPACT_HOURS), text);
    }

    public String getImpactDays(){
        return getAttributeValueById(txt_IMPACT_DAYS);
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
        return getAttributeValueById(txt_REVIEWDETAILS);
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
        enterStartDate(20);
        enterEndDate(30);
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
        return getAttributeValueById(dd_ASSIGNED_PROFILE);
    }

    public String getChangeBuilder(){
        return getTextByID(txt_CHANGE_BUILDER);
    }

   public String getProjectCode(){
       return getTextByID(txt_PROJECTCODE);
   }

   public void enterProjectCode(String projectCode){
        enterTextByElement(By.id(txt_PROJECTCODE), projectCode);
   }

    public void enterExpectedAlarms(String ExpectedAlarms){
        enterTextByElement(By.id(txt_EXPECTED_ALARMS), ExpectedAlarms);
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
        wait(1000);
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

    public static String ParentCRTicketTitle;
    public static String ParentCRTicketRequestType;
    public static String ParentCRTicketDescription;
    public static String ParentCRTicketPriority;
    public static String ParentCRChangeType;
    public static String ParentCRStatus;
    public static String ParentCRServiceProvider;
    public static String ParentCRSource;
    public static String ParentCRTemplate;
    public static String ParentCRReason;
    public static String ParentCRChangeBuilder;
    public static String ParentCRImplementation;
    public static String ParentCRTestPlan;
    public static String ParentCRRollback;
    public static String ParentCRCommunicationPlan;
    public static String ParentCRVerOfFunctionality;
    public static String ParentCRRiskDescription;
    public static String ParentCRServiceAndCustomerImpact;
    public static String ChildCRTicketTitle;
    public static String ChildCRTicketRequestType;
    public static String ChildCRTicketDescription;
    public static String ChildCRTicketPriority;
    public static String ChildCRChangeType;
    public static String ChildCRStatus;
    public static String ChildCRServiceProvider;
    public static String ChildCRSource;
    public static String ChildCRTemplate;
    public static String ChildCRReason;
    public static String ChildCRChangeBuilder;
    public static String ChildCRImplementation;
    public static String ChildCRTestPlan;
    public static String ChildCRRollback;
    public static String ChildCRCommunicationPlan;
    public static String ChildCRVerOfFunctionality;
    public static String ChildCRRiskDescription;
    public static String ChildCRServiceAndCustomerImpact;

    public void getParentCRTicket(int parentWindowID){
        CommonUtils.switchToChildWindow(driver, parentWindowID);
        clickRefresh_ticketFresh();
        clickElement(By.xpath("//*[@id=\"WIN_0_999000003\"]/div[2]/div[2]/div/dl/dd[4]/span[2]/a"));
        ParentCRTicketTitle = getAttributeValueById(txt_Title);
        ParentCRTicketRequestType = getAttributeValueById(txt_reqestType);
        ParentCRTicketDescription = getAttributeValueById(txt_tkt_DESCRIPTION);
        ParentCRTicketPriority = getAttributeValueById(txt_PRIORITY);
        ParentCRChangeType = getAttributeValueById(txt_CHANGE_TYPE);
        ParentCRStatus = getAttributeValueById(txt_STATUS);
        ParentCRServiceProvider = getAttributeValueById(txt_SERVICEPROVIDER);
        ParentCRSource = getAttributeValueById(txt_SOURCE_NAME);
        ParentCRTemplate = getAttributeValueById(txt_TEMPLATE);
        ParentCRReason = getAttributeValueById(txtREASON_ID);
        ParentCRChangeBuilder = getAttributeValueById(txt_CHANGE_BUILDER);
        ParentCRImplementation = getAttributeValueById(txt_IMPLEMENTATION);
        ParentCRTestPlan = getAttributeValueById(txt_TEST_PLAN);
        ParentCRRollback = getAttributeValueById(txt_ROLLBACK);
        ParentCRCommunicationPlan = getAttributeValueById(txt_COMMUNICATION_PLAN);
        ParentCRVerOfFunctionality = getAttributeValueById(txt_VER_OF_FUNCTIONALITY);
        ParentCRRiskDescription = getAttributeValueById(txt_RISK_DESCRIPTION);
        ParentCRServiceAndCustomerImpact = getAttributeValueById(txt_SERVICE_AND_CUSTOMER_IMPACT);
    }
    public void getChildTicket(int childWindowID){
        CommonUtils.switchToChildWindow(driver, childWindowID);
        ChildCRTicketTitle = getAttributeValueById(txt_Title);
        ChildCRTicketRequestType = getAttributeValueById(txt_reqestType);
        ChildCRTicketDescription = getAttributeValueById(txt_tkt_DESCRIPTION);
        ChildCRTicketPriority = getAttributeValueById(txt_PRIORITY);
        ChildCRChangeType = getAttributeValueById(txt_CHANGE_TYPE);
        ChildCRStatus = getAttributeValueById(txt_STATUS);
        ChildCRServiceProvider = getAttributeValueById(txt_SERVICEPROVIDER);
        ChildCRSource = getAttributeValueById(txt_SOURCE_NAME);
        ChildCRTemplate = getAttributeValueById(txt_TEMPLATE);
        ChildCRReason = getAttributeValueById(txtREASON_ID);
        ChildCRChangeBuilder = getAttributeValueById(txt_CHANGE_BUILDER);
        ChildCRImplementation = getAttributeValueById(txt_IMPLEMENTATION);
        ChildCRTestPlan = getAttributeValueById(txt_TEST_PLAN);
        ChildCRRollback = getAttributeValueById(txt_ROLLBACK);
        ChildCRCommunicationPlan = getAttributeValueById(txt_COMMUNICATION_PLAN);
        ChildCRVerOfFunctionality = getAttributeValueById(txt_VER_OF_FUNCTIONALITY);
        ChildCRRiskDescription = getAttributeValueById(txt_RISK_DESCRIPTION);
        ChildCRServiceAndCustomerImpact = getAttributeValueById(txt_SERVICE_AND_CUSTOMER_IMPACT);

    }
    public boolean verifyCopiedCRTicketSameAsParent(int parentWindowID, int childWindowID) {
        getParentCRTicket(parentWindowID);
        getChildTicket(childWindowID);
        Assert.assertTrue(verifySwedenBuIsSelected());

        if (ParentCRTicketTitle.equals(ChildCRTicketTitle) && ParentCRTicketRequestType.equals(ChildCRTicketRequestType)
                && ParentCRTicketDescription.equals(ChildCRTicketDescription) && ParentCRTicketPriority.equals(ChildCRTicketPriority) && ParentCRChangeType.equals(ChildCRChangeType)
                && ParentCRStatus.equals(ChildCRStatus) && ParentCRServiceProvider.equals(ChildCRServiceProvider) && ParentCRSource.equals(ChildCRSource) && ParentCRTemplate.equals(ChildCRTemplate)
                && ParentCRReason.equals(ChildCRReason) && ParentCRChangeBuilder.equals(ChildCRChangeBuilder) && ParentCRImplementation.equals(ChildCRImplementation) && ParentCRTestPlan.equals(ChildCRTestPlan)
                && ParentCRRollback.equals(ChildCRRollback) && ParentCRCommunicationPlan.equals(ChildCRCommunicationPlan) && ParentCRVerOfFunctionality.equals(ChildCRVerOfFunctionality) && ParentCRRiskDescription.equals(ChildCRRiskDescription)
                && ParentCRServiceAndCustomerImpact.equals(ChildCRServiceAndCustomerImpact))
        {
            return true;
        }
        return false;
    }

    public boolean verifyFieldsAreEmpty(){
        WebElement Div_changeForm=  driver.findElement(By.id("WIN_0_999000010"));
        List<WebElement> elements= Div_changeForm.findElements(By.tagName("textarea"));
        for (int i = 0; i < elements.size(); i ++)
        {
            boolean result =verifyGetTextIsEmpty(elements.get(i));
            System.out.println("Null element - " +elements.get(i));
            if (result==false)
                return false;
        }
        return true;
    }
    public boolean verifyGetTextIsEmpty(WebElement element){
        if (element.getText().trim().isEmpty()) {
            return true;
        }
        return false;
    }

    public boolean VerifyRiskColumnIsEmpty()
    {
        String riskColumnData = getAttributeValueByElement(By.id(table_riskQuestionstable_ID));
        if(riskColumnData == null || riskColumnData == ""){
            return true;
        }
        else return false;
    }

    public boolean VerifyVersionColumnIsEmpty()
    {
        String versionColumnData = getAttributeValueByElement(By.xpath(table_VersionTable_ID));
        if(versionColumnData == null || versionColumnData == ""){
            return true;
        }
        else return false;
    }

    public boolean VerifySentNotificationsColumnIsEmpty()
    {
        String sentNotificationData = getAttributeValueByElement(By.xpath(table_sentNotifications));
        if(sentNotificationData == null || sentNotificationData == ""){
            return true;
        }
        else return false;
    }

    public boolean VerifyLinkedItemsColumnIsEmpty()
    {
      int rowsSize= getTableRows(By.id(table_LINKED_ITEMS_ID)).size();
      if (rowsSize==0)
          return true;
      else return false;
    }


    public boolean VerifyWorkOrderColumnIsEmpty()
    {
        String workOrderData = getAttributeValueByElement(By.xpath(table_WORKORDER_ID));
        if(workOrderData == null || workOrderData == ""){
            return true;
        }
        else return false;
    }

    public boolean VerifySLATitleColumnIsEmpty(){
        {
            String changeProjectData = getAttributeValueByElement(By.xpath(table_SLATITLE_ID));
            if(changeProjectData == null || changeProjectData == ""){
                return true;
            }
            else return false;
        }
    }

    public boolean VerifyChangeProjectIDColumnIsEmpty(){
        {
            String changeProjectData = getAttributeValueByElement(By.id(txt_CHANGEPROJECTTAB));
            if(changeProjectData == null || changeProjectData == ""){
                return true;
            }
            else return false;
        }
    }

    public boolean VerifyChannelColumnIsEmpty(){
        {
            int rowsSize= getTableRows(By.id(table_ChangeChannel)).size();
            if (rowsSize==0)
                return true;
            else return false;
        }
    }

    public boolean verifyExternalTicketIDFieldIsEmpty(){
        {
            String changeExternalTickIDetData = getAttributeValueByElement(By.id(txt_EXTERNALTICKETID));
            if(changeExternalTickIDetData == null || changeExternalTickIDetData == ""){
                return true;
            }
            else return false;
        }
    }

    public void validateCopyToNewConfirmationIsShown() {
        findElement(By.id(popup_COPYTONEW)).isDisplayed();
    }

    public void clickCancel_copyToNew() {
        findElement(By.id(btn_CANCELCOPYTONEW)).click();
        CommonUtils.switchToChildWindow(driver, 1);
    }

    public void clickNoButtonCopyToNew() {
        findElement(By.id(btn_NOCOPYTONEW)).click();
        wait(5000);
        CommonUtils.switchToChildWindow(driver,1);
    }
    public boolean validateCopyToNewConfirmationMessage(){
        {
            CommonUtils.switchToChildWindow(driver,3);
            String copyToNewConfirmation = getAttributeValueByElement(By.id(popup_COPYTONEW));
            if (copyToNewConfirmation.contains("holds no related CI's. Do you still want to make a copy of this Change Request?")){
                return true;
            }
            else return false;
        }
    }

    public void validateChangeTicketIsDisplayed() {
        findElement(By.id(form_CHANGEFORM)).isDisplayed();
    }

    public void openCopyToNewNoClicks() {
        findElement(By.id(btn_COPY_TO_NEW)).click();
        CommonUtils.switchToChildWindow(driver, 2);
    }

    public void clickYesCopyToNew() {
        CommonUtils.switchToChildWindow(driver,3);
        findElement(By.id(btn_YESCOPYTONEW)).click();
        wait(3000);
        CommonUtils.switchToChildWindow(driver, 2);
    }

    public boolean validateCICopyToNewConfirmationMessage(){
        {
            String copyToNewConfirmation = getAttributeValueByElement(By.id(popup_COPYTONEW));
            if (copyToNewConfirmation.contains("got 101 related CI's. This number of CIs cannot be copied. Do you want to create the new request without CIs?")){
            }
            return true;
        }

    }

    public void clickNo2ButtonCopyToNew() {
        CommonUtils.switchToChildWindow(driver,3);
        findElement(By.id(btn_NOCOPYTONEW)).click();
        wait(3000);
        CommonUtils.switchToChildWindow(driver,2);

    }

    public String verifyCopyToNewMessage() {
        CommonUtils.switchToChildWindow(driver, 2);
        String error =getTextByID(popup_COPYTONEW);
        System.out.println(error);
        return error;
    }
}