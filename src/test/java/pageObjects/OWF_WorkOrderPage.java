package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import utils.CommonUtils;
import utils.PlazaValidation;

public class OWF_WorkOrderPage extends BasePage {

    private static final String txtSTATUS_ID = "arid_WIN_0_777031003";
    private static final String txtPARENT_TICKET_ID= "arid_WIN_0_777777653";
    private static final String txtWOs_STATUS_ID = "arid_WIN_0_600001053";
    private static final String ddSLA_CLASS = "SLA Class";
    private static final String txtESTIMATED_READY = "arid_WIN_0_777504503";
    private static final String btnB2B_DISPATCH_XPATH = "//a[contains(text(),'B2B Dispatch')]";
    private static final String txtHEADER_ID = "arid_WIN_0_600001032";
    private static final String txtMESSAGE_ID = "arid_WIN_0_600001033";
    private static final String btnREFRESH_INBOUND = "//*[@id='WIN_0_600002301']/div[1]/table/tbody/tr/td[2]/a[2]";
    private static final String btn_REFRESH_OUTBOUND= "//*[@id='WIN_0_600002302']/div[1]/table/tbody/tr/td[2]/a[2]";
    private static final String txtWFM_TIKCET_ID  = "arid_WIN_0_777504105";
    private static final String txtDISPATCH_STATUS_ID  = "arid_WIN_0_777504105";
    private static final String btnAPPLY_B2B_ID = "WIN_0_600002903";
    private static final String ddREQUEST_TYPE= "Request Type";
    private static final String ddASSIGNED_PROFILE = "arid_WIN_0_777031408";
    private static final String txtEVENT_START_TIME = "arid_WIN_0_600001302";
    private static final String dd_COMPLETION_CODE= "Completion Code";
    private static final String txt_SCHEDULE_END= "arid_WIN_0_777021165";
    private static final String txt_TICKET_ID= "arid_WIN_0_777777600";
    private static final String txt_TITLE= "arid_WIN_0_777031000";
    private static final String txt_MANUFACTURER= "arid_WIN_0_240001003";
    private static final String table_INBOUND = "T600002301";
    private static final String table_OUTBOUND = "T600002302";
    private static final String txt_DISPATCH_STATUS= "arid_WIN_0_709003012";
    private static final String txt_CANCEL_REQUEST_REASON= "arid_WIN_0_600001090";
    private static final String div_B2B_OUTBOUND_EVENT= "WIN_0_600002302";
    private static final String div_B2B_INBOUND_EVENT= "WIN_0_600002301";
    private static final String txt_CONTACT_NAME= "arid_WIN_0_600001055";
    private static final String txt_CONTACT_TELEPHONE_NUMBER= "arid_WIN_0_600001056";
    private static final String txt_CONTACT_MAIL_ADDRESS= "arid_WIN_0_600001064";
    private static final String dd_STATUS= "Status*";
    private static final String txt_SOURCE_ID="arid_WIN_0_777021006";
    private static final String txt_SOURCE_FLD= "arid_WIN_0_777777912";
    private static final String txt_DESCRIPTION= "arid_WIN_0_777031007";
    private static final String table_INTERESTED_PARTIES= "T705002015";
    private static final String txt_REQUEST_TYPE= "arid_WIN_0_777031002";
    private static final String txt_REASSIGNED_REASON= "arid_WIN_0_600001026";
    private static final String txt_TECHNOLOGY="arid_WIN_0_777020101";
    private static final String fld_SENT= "//*[@id='T700020677']/tbody/tr[3]/td[1]/nobr/span";
    private static final String txt_METHOD= "arid_WIN_0_700020737";
    private static final String txt_TEMPLATE= "arid_WIN_0_777504501";
    private static final String txt_REASON= "arid_WIN_0_600001009";
    private static final String txt_SLA_WITH_CUSTOMER= "arid_WIN_0_600001301";
    private static final String txt_SLA_CLASS="arid_WIN_0_600001030";
    private static final String dd_OWNER= "Owner*";
    private static final String txt_REQUESTED_SCHEDULE_END= "arid_WIN_0_777021161";
    private static final String txt_ESTIMATED_SCHEDULE_START= "arid_WIN_0_777021167";
    private static final String txt_ESTIMATED_SCHEDULE_END= "arid_WIN_0_777021168";
    private static final String txt_ACTUAL_SCHEDULE_START= "arid_WIN_0_777021164";
    private static final String txt_ACTUAL_SCHEDULE_END= "arid_WIN_0_777021165";

    public void enterRequestedScheduleEnd(String text){
        clearText(By.id(txt_REQUESTED_SCHEDULE_END));
        enterTextByElement(By.id(txt_REQUESTED_SCHEDULE_END), text);
    }

    public void enterEstimatedScheduleStart(String text){
        clearText(By.id(txt_ESTIMATED_SCHEDULE_START));
        enterTextByElement(By.id(txt_ESTIMATED_SCHEDULE_START), text);
    }
    public void enterEstimatedScheduleEnd(String text){
        clearText(By.id(txt_ESTIMATED_SCHEDULE_END));
        enterTextByElement(By.id(txt_ESTIMATED_SCHEDULE_END), text);
    }
    public void enterActualScheduleStart(String text){
        clearText(By.id(txt_ACTUAL_SCHEDULE_START));
        enterTextByElement(By.id(txt_ACTUAL_SCHEDULE_START), text);
    }
    public void enterActualScheduleEnd(String text){
        clearText(By.id(txt_ACTUAL_SCHEDULE_END));
        enterTextByElement(By.id(txt_ACTUAL_SCHEDULE_END), text);
    }
    public void selectOwner(String dropDownValue){
        selectDropDownNameAndValue(dd_OWNER, dropDownValue, false);
    }
    public String getEventStartTime(){
        return getAttributeValueById(txtEVENT_START_TIME);
    }



    public String getSlaClass(){
        return getAttributeValueById(txt_SLA_CLASS);
    }

    public String getSlaWithCustomer(){
        return getAttributeValueById(txt_SLA_WITH_CUSTOMER);
    }
    public String getReason(){
        return getAttributeValueById(txt_REASON);
    }
    public String getTemplate(){
        return getAttributeValueById(txt_TEMPLATE);
    }
    public String getMethodText(){
        return getAttributeValueById(txt_METHOD);
    }
    public void clickOnSent()
    {
        clickElement(By.xpath(fld_SENT));

    }

    public String getTechnology(){
        return getAttributeValueById(txt_TECHNOLOGY);
    }

    public String getReassignedReason(){
        return getAttributeValueById(txt_REASSIGNED_REASON);
    }

    public boolean verifyPlazaPDB_Description() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.DateTime)
                && actualDescription.contains(PlazaValidation.NatureAndContent) && actualDescription.contains(PlazaValidation.AffectedPersons)
                && actualDescription.contains(PlazaValidation.AffectedPersonNameID)){
            return true;
        }
        return false;
    }

    public String getRequestType(){
        String requestType= getAttributeValueById(txt_REQUEST_TYPE);
        System.out.println(requestType);
        return requestType;
    }
    public String verifyPlazaIsListedUnderInterestedParties(String colName, int rowNum){
        return getTableCellData(By.id(table_INTERESTED_PARTIES), colName, rowNum);
    }
    public boolean verifyDescription()
    {
        String actualDescription = getDescription();
        if(actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.AdditionalComments) && actualDescription.contains(PlazaValidation.Description)
        && actualDescription.contains(PlazaValidation.PlannedEndDate) && actualDescription.contains(PlazaValidation.PlannedStartDate)
        && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.Role)
        && actualDescription.contains(PlazaValidation.System))
        {
            return true;
        }
        return false;
    }
    public boolean verifyBackUpDescription()
    {
        String actualDescription = getDescription();
        if(actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.AdditionalComments)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.RetentionPeriod)
                && actualDescription.contains(PlazaValidation.DateTime) && actualDescription.contains(PlazaValidation.Name)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Email)&&actualDescription.contains(PlazaValidation.Phone)
                &&actualDescription.contains(PlazaValidation.Email)&&actualDescription.contains(PlazaValidation.CI)
                &&actualDescription.contains(PlazaValidation.UncLocalPath))
        {
            return true;
        }
        return false;
    }
    public boolean verifyBackUpReScheduleDescription()
    {
        String actualDescription = getDescription();
        if(actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Name) && actualDescription.contains(PlazaValidation.Email)
                && actualDescription.contains(PlazaValidation.Phone) && actualDescription.contains(PlazaValidation.AdditionalComments)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.Schedule)
                &&actualDescription.contains(PlazaValidation.UncLocalPath) &&actualDescription.contains(PlazaValidation.CI)
                &&actualDescription.contains(PlazaValidation.Description))
        {
            return true;
        }
        return false;
    }
    public boolean verifyBackUpRestoreDescription()
    {
        String actualDescription = getDescription();
        if(actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.DateTime) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.UncLocalPath) && actualDescription.contains(PlazaValidation.RestoreFiles)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.Description)
                &&actualDescription.contains(PlazaValidation.AdditionalComments))
        {
            return true;
        }
        return false;
    }
    public boolean verifyBackUpVerifyDescription()
    {
        String actualDescription = getDescription();
        if(actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Name) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.Email) && actualDescription.contains(PlazaValidation.Phone)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.Description)
                &&actualDescription.contains(PlazaValidation.AdditionalComments))
        {
            return true;
        }
        return false;
    }
    public boolean verify_BDL_Description()
    {
        String actualDescription = getDescription();
        if(actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.ServiceRequestName)
                && actualDescription.contains(PlazaValidation.Environment)
                && actualDescription.contains(PlazaValidation.WbsCodeField) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments))

        {
            return true;
        }
        return false;
    }
    public String getDescription(){
        String description= getAttributeValueById(txt_DESCRIPTION);
        System.out.println(description);
        return description;
    }

    public String getTitle(){
        String title=  getAttributeValueById(txt_TITLE);
        System.out.println(title);
        return title;
    }
    public String getSource(){
        String source = getAttributeValueById(txt_SOURCE_FLD);
        System.out.println(source);
        return source;
    }
    public void enterSourceID(String text){
        enterTextByElement(By.id(txt_SOURCE_ID), text);

    }
    public void selectStatus_workOrderPage(String value){
        selectDropDownNameAndValue(dd_STATUS, value, false);
    }



    public String getContactName(){
        return getAttributeValueById(txt_CONTACT_NAME);
    }
    public String getContactTelephoneNumber(){
        return getAttributeValueById(txt_CONTACT_TELEPHONE_NUMBER);
    }
    public String getContactMailAddress(){
        return getAttributeValueById(txt_CONTACT_MAIL_ADDRESS);
    }

    public void enterCancelRequestReason(String text){
        enterTextByElement(By.id(txt_CANCEL_REQUEST_REASON), text);
    }


    public void selectDispatchStatus(String text){
        findElement(By.id(txt_DISPATCH_STATUS)).click();
        wait(500);
        selectMenuItem(text);
    }

    public String getOutboundText(String columnName, int rowNum){
        return getTableCellDataByDivId(div_B2B_OUTBOUND_EVENT, By.id(table_OUTBOUND), columnName, rowNum);
    }

    public String getInboundText(String columnName, int rowNum){
        return getTableCellDataByDivId(div_B2B_INBOUND_EVENT, By.id(table_INBOUND), columnName, rowNum);
    }
    public void clickRefresh_outbound(){
        findElement(By.xpath(btn_REFRESH_OUTBOUND)).click();
        wait(1500);
    }

    public String getManufacturer(){
        String manufacturer = getAttributeValueById(txt_MANUFACTURER);
        System.out.println("Manufacturer text is : "+manufacturer);
        return manufacturer;
    }


    public void enterTitle(String text){
        enterTextByElement(By.id(txt_TITLE), text);
    }
    public String getTicket(){
      String ticket= getTextByID(txt_TICKET_ID);
        System.out.println(ticket);
        return ticket;
    }

    public void enterActualScheduleEnd(){
        findElement(By.id(txt_SCHEDULE_END)).sendKeys(Keys.ENTER);
        wait(2000);
    }
    public void selectCompletionCode(String value){
        selectDropDownNameAndValue(dd_COMPLETION_CODE, value, true);
    }


    public void enterEstimatedReady(String estimated_ready) {
        wait(1000);
        driver.findElement(By.id(txtESTIMATED_READY)).clear();
        driver.findElement(By.id(txtESTIMATED_READY)).sendKeys(estimated_ready);
    }
    public void enterEstimatedReadyAsCurrentDateAndTime() {
        wait(1000);
        driver.findElement(By.id(txtESTIMATED_READY)).clear();
        driver.findElement(By.id(txtESTIMATED_READY)).sendKeys(Keys.ENTER);
    }

    public boolean isEstimatedReadyDisplayed() {
        return findElement(By.id(txtESTIMATED_READY)).isDisplayed();
    }
    public String getSavedEstimatedReady(){
        String estimatedReady= getAttributeValueById(txtESTIMATED_READY);
        System.out.println(estimatedReady);
        return estimatedReady;
    }
    public void clearEstimatedReady(){
        findElement(By.id(txtESTIMATED_READY)).clear();
    }





    public void enterEventStartTime(String event_start_time) {
        driver.findElement(By.id(txtEVENT_START_TIME)).sendKeys(event_start_time);
    }


    public void selectRequestType(String value){
        selectDropDownNameAndValue(ddREQUEST_TYPE, value, false);
    }

    public String getDispatchStatus(){
         return getAttributeValueById(txtDISPATCH_STATUS_ID);
    }

    public void clickRefresh_Inbound(){
        wait(8000);
        driver.findElement(By.xpath(btnREFRESH_INBOUND)).click();
        wait(1500);
    }
    public void enterMessage(String message){
        driver.findElement(By.id(txtMESSAGE_ID)).sendKeys(message);
    }

  public void enterHeader(String header){
      driver.findElement(By.id(txtHEADER_ID)).sendKeys(header);
  }

    public void clickB2BDispatch(){
        driver.findElement(By.xpath(btnB2B_DISPATCH_XPATH)).click();
    }


    public String getEstimatedReady(){
         return getAttributeValueById(txtESTIMATED_READY);

    }

    public String getWFM_ticket_ID(){

        return getAttributeValueById(txtWFM_TIKCET_ID);
    }

    public String getWOsStatusText(){
        return getAttributeValueById(txtWOs_STATUS_ID);
    }
    public String getStatusText(){
        return getAttributeValueById(txtSTATUS_ID);

    }
    public String getParentTicketId(){
        return getAttributeValueById(txtPARENT_TICKET_ID);
    }

    public void clickApplyB2B() {
        driver.switchTo().defaultContent();
        //clickElementByContainsTextAndTagName("div", "Apply B2B");
        clickElement(By.id(btnAPPLY_B2B_ID));
    }
    public void selectSlaClass(String value){
        selectDropDownNameAndValue(ddSLA_CLASS, value, false);
    }

    public String getAssignedProfileStatus(){
        String text = getAttributeValueById(ddASSIGNED_PROFILE);
        System.out.println("Assigned profile is -"+ text);
        return text;
    }

    public boolean verifyC2BCacheDeploymentDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.Environment) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyC2BCacheGeneralDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.GeneralRequest)
                && actualDescription.contains(PlazaValidation.SelectRequest) && actualDescription.contains(PlazaValidation.Environment)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyC2BServiceDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Environment)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyCRMDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.System) && actualDescription.contains(PlazaValidation.PlannedStartDate)
                && actualDescription.contains(PlazaValidation.PlannedEndDate) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }



    public boolean verifyDataCenterCablingNewDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.DcSite)
                && actualDescription.contains(PlazaValidation.Room) && actualDescription.contains(PlazaValidation.DeliveryDate)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.WbsCodeField)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyDataCenterCablingRemoveDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.AdditionalComments) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.DcSite)
                && actualDescription.contains(PlazaValidation.Room) && actualDescription.contains(PlazaValidation.DeliveryDate)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.WbsCodeField)) {

            return true;
        }
        return false;
    }

    public boolean verifyDataCenterNetworkEquipmentNewDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.DcSite)
                && actualDescription.contains(PlazaValidation.Room) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.DnsIpAddress) && actualDescription.contains(PlazaValidation.DeliveryDate)
                && actualDescription.contains(PlazaValidation.WbsCodeField) && actualDescription.contains(PlazaValidation.AdditionalComments)
                && actualDescription.contains(PlazaValidation.Description)) {
            return true;
        }
        return false;
    }

    public boolean verifyDataCenterNetworkEquipmentRemoveDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.DcSite)
                && actualDescription.contains(PlazaValidation.Room) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.DnsIpAddress) && actualDescription.contains(PlazaValidation.DecommissionDate)
                && actualDescription.contains(PlazaValidation.WbsCodeField) && actualDescription.contains(PlazaValidation.AdditionalComments)
                && actualDescription.contains(PlazaValidation.Description)) {
            return true;
        }
        return false;
    }

    public boolean verifyDataCenterOnSiteServicesDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.DcSite) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments) && actualDescription.contains(PlazaValidation.Request)) {
            return true;
        }
        return false;
    }

    public boolean verifyDataCenterRequestDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.DcSite)
                && actualDescription.contains(PlazaValidation.Room) && actualDescription.contains(PlazaValidation.DeliveryDate)
                && actualDescription.contains(PlazaValidation.WbsCodeField) && actualDescription.contains(PlazaValidation.AdditionalComments)
                && actualDescription.contains(PlazaValidation.Description)) {
            return true;
        }
        return false;
    }

    public boolean verifyDatabaseAccessRequestDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.DatabaseType) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.CI) && actualDescription.contains(PlazaValidation.DatabaseName)
                && actualDescription.contains(PlazaValidation.AccountType)
                && actualDescription.contains(PlazaValidation.NewExistingAccount) && actualDescription.contains(PlazaValidation.AccountName)
                && actualDescription.contains(PlazaValidation.Permissions) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyDatabaseAccessRequestOracleDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.DatabaseType) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.CI) && actualDescription.contains(PlazaValidation.DatabaseName)
                && actualDescription.contains(PlazaValidation.AccountType)
                && actualDescription.contains(PlazaValidation.NewExistingAccount) && actualDescription.contains(PlazaValidation.AccountName)
                && actualDescription.contains(PlazaValidation.Permissions) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyDatabaseAccessRequestPostgreDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.DatabaseType) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.CI) && actualDescription.contains(PlazaValidation.DatabaseName)
                && actualDescription.contains(PlazaValidation.AccountType) && actualDescription.contains(PlazaValidation.AccountName)
                && actualDescription.contains(PlazaValidation.Permissions) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyDatabaseBackupOrRestoreDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.ChooseAction) && actualDescription.contains(PlazaValidation.DatabaseType)
                && actualDescription.contains(PlazaValidation.CI) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.DatabaseName) && actualDescription.contains(PlazaValidation.Location)
                && actualDescription.contains(PlazaValidation.PlannedStartDate) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyDatabaseConfigureDatabaseParametersDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.DatabaseType) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.CI) && actualDescription.contains(PlazaValidation.DatabaseName)
                && actualDescription.contains(PlazaValidation.Parameters) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyDatabasePerformanceTroubleshootingDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.DatabaseType) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.CI) && actualDescription.contains(PlazaValidation.DatabaseName)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyFinanceAndAssuranceDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.System)
                && actualDescription.contains(PlazaValidation.PlannedStartDate) && actualDescription.contains(PlazaValidation.PlannedEndDate)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyMessagingCallGuideMailDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Name) && actualDescription.contains(PlazaValidation.Email)
                && actualDescription.contains(PlazaValidation.Phone) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.System) && actualDescription.contains(PlazaValidation.CustomerIdName)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyMessagingCleanMailDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Name) && actualDescription.contains(PlazaValidation.Email)
                && actualDescription.contains(PlazaValidation.Phone) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.CustomerIdName) && actualDescription.contains(PlazaValidation.Issue)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.DateTestsPerformed)
                && actualDescription.contains(PlazaValidation.SenderEmailAddress) && actualDescription.contains(PlazaValidation.RecieveEmailAddress)
                && actualDescription.contains(PlazaValidation.DnsIpAddress) && actualDescription.contains(PlazaValidation.AdditionalComments)) {

            return true;
        }
        return false;
    }

    public boolean verifyMessagingDenmarkMailDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Name) && actualDescription.contains(PlazaValidation.Email)
                && actualDescription.contains(PlazaValidation.Phone) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.System) && actualDescription.contains(PlazaValidation.CustomerIdName)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {

            return true;
        }
        return false;
    }

    public boolean verifyMessagingSMTPSupportDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Name) && actualDescription.contains(PlazaValidation.Email)
                && actualDescription.contains(PlazaValidation.Phone) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.CustomerIdName) && actualDescription.contains(PlazaValidation.Issue)
                && actualDescription.contains(PlazaValidation.DateTestsPerformed) && actualDescription.contains(PlazaValidation.SenderEmailAddress)
                && actualDescription.contains(PlazaValidation.DnsIpAddress) && actualDescription.contains(PlazaValidation.SmtpRelay)
                && actualDescription.contains(PlazaValidation.RecieveEmailAddress) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyMessagingTsfMailDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Name) && actualDescription.contains(PlazaValidation.Email)
                && actualDescription.contains(PlazaValidation.Phone) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.CI) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyMessagingTssMailDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Name) && actualDescription.contains(PlazaValidation.Email)
                && actualDescription.contains(PlazaValidation.Phone) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.System) && actualDescription.contains(PlazaValidation.CustomerIdName)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyMessagingTssPremiumMailDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Name) && actualDescription.contains(PlazaValidation.Email)
                && actualDescription.contains(PlazaValidation.Phone) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.System) && actualDescription.contains(PlazaValidation.CustomerIdName)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNetworkSecurityAddModifyRemoveDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.Schedule) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNetworkSecurityDnsSwedenDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.CustomerIdName) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNetworkSecurityFirewallNewChangeDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNetworkSecurityFirewallTroubleshootDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.TicketNumber) && actualDescription.contains(PlazaValidation.SourceIpAddress)
                && actualDescription.contains(PlazaValidation.TargetIpAddress) && actualDescription.contains(PlazaValidation.ServerConnectivityVerified)
                && actualDescription.contains(PlazaValidation.DateTestsPerformed) && actualDescription.contains(PlazaValidation.TrafficReturnRoutingVerified)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
        return true;
        }
        return false;
    }

    public boolean verifyNetworkSecurityLanDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNetworkSecurityLoadBalancingDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNetworkSecurityNewSwitchDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.CI) && actualDescription.contains(PlazaValidation.DcSite)
                && actualDescription.contains(PlazaValidation.Room) && actualDescription.contains(PlazaValidation.Rack)
                && actualDescription.contains(PlazaValidation.SwitchUsage) && actualDescription.contains(PlazaValidation.TerminalServer)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNetworkSecurityNewVlanDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.IpNet) && actualDescription.contains(PlazaValidation.VlanName)
                && actualDescription.contains(PlazaValidation.VlanPurpose) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNetworkSecurityProxyGeneralInquiryDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNetworkSecurityProxyResourceRequestDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNetworkSecurityProxyReverseProxyDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.SourceIpAddress) && actualDescription.contains(PlazaValidation.DnsName)
                && actualDescription.contains(PlazaValidation.ProtocolPort) && actualDescription.contains(PlazaValidation.Certificate)
                && actualDescription.contains(PlazaValidation.WebserverAddress) && actualDescription.contains(PlazaValidation.HighAvailibility)
                && actualDescription.contains(PlazaValidation.LoadBalancingMethod) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNetworkSecurityProxySurfProxyDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.UrlFilter) && actualDescription.contains(PlazaValidation.DateTestsPerformed)
                && actualDescription.contains(PlazaValidation.SourceIpAddress) && actualDescription.contains(PlazaValidation.Url)
                && actualDescription.contains(PlazaValidation.InternalExternalWebsite) && actualDescription.contains(PlazaValidation.ErrorMessage)
                && actualDescription.contains(PlazaValidation.WorkedBefore) && actualDescription.contains(PlazaValidation.ProblemOccure)
                && actualDescription.contains(PlazaValidation.ProxySettings) && actualDescription.contains(PlazaValidation.TicketNumber)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNetworkSecurityProxySurfProxyOneOrFewUsersDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.UrlFilter) && actualDescription.contains(PlazaValidation.DateTestsPerformed)
                && actualDescription.contains(PlazaValidation.SourceIpAddress) && actualDescription.contains(PlazaValidation.Url)
                && actualDescription.contains(PlazaValidation.InternalExternalWebsite) && actualDescription.contains(PlazaValidation.ErrorMessage)
                && actualDescription.contains(PlazaValidation.WorkedBefore) && actualDescription.contains(PlazaValidation.ProblemOccure)
                && actualDescription.contains(PlazaValidation.UserId) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNetworkSecurityProxySurfProxySlowSurfingDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.UrlFilter) && actualDescription.contains(PlazaValidation.UserIp)
                && actualDescription.contains(PlazaValidation.DateTestsPerformed) && actualDescription.contains(PlazaValidation.InternalExternalWebsite)
                && actualDescription.contains(PlazaValidation.InternalExternalWebsite) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNetworkSecurityProxySurfProxyWhitelistingDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.UrlFilter) && actualDescription.contains(PlazaValidation.SourceIpAddress)
                && actualDescription.contains(PlazaValidation.TargetUrl) && actualDescription.contains(PlazaValidation.H2Name)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNetworkSecurityRemoteAccessDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.ServiceRequestName)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNetworkSecuritySwitchPortConfigDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.ExistingIpNet) && actualDescription.contains(PlazaValidation.NewIpNet)
                && actualDescription.contains(PlazaValidation.CI) && actualDescription.contains(PlazaValidation.Description)
            && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNimbusAddModifyRemoveDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.CI) && actualDescription.contains(PlazaValidation.Type)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNimbusDecommisionVmDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.CI) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNimbusExpandBackupArchiveDiskDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.Size) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNimbusExtendDiskRedHatDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.Drives) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNimbusExtendDiskWindowsDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.Drives) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNimbusHotAddCpuOrRamDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.DateTime) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNimbusModifyOnboardingDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.H2Name) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNimbusNetworkOnboardingNordicDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.FrontsideNetworkInformation) && actualDescription.contains(PlazaValidation.MgmtNetworkInformation)
                && actualDescription.contains(PlazaValidation.Ruleset) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNimbusOnboardToSkypointDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.CloudServices) && actualDescription.contains(PlazaValidation.TargetCountries)
                && actualDescription.contains(PlazaValidation.DualSiteServices) && actualDescription.contains(PlazaValidation.ApproverAccount)
                && actualDescription.contains(PlazaValidation.CmdbAssigned) && actualDescription.contains(PlazaValidation.CmdbLocal)
                && actualDescription.contains(PlazaValidation.H2Name) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNimbusRestoreVmDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.DateTime) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNimbusSkypointFailedRequestDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyOperatingSystemAccessDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.Justification)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyOperatingSystemAccountManagementDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.SelectRequest)
                && actualDescription.contains(PlazaValidation.OperatingSystem) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.AccountType) && actualDescription.contains(PlazaValidation.AccountName)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyOperatingSystemChangeFromAutoDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.SelectRequest)
                && actualDescription.contains(PlazaValidation.OperatingSystem) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.Justification) && actualDescription.contains(PlazaValidation.MonthlyPatching)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyOperatingSystemChangeFromManualDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.SelectRequest)
                && actualDescription.contains(PlazaValidation.OperatingSystem) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.ServiceWindow) && actualDescription.contains(PlazaValidation.Justification)
                && actualDescription.contains(PlazaValidation.MonthlyPatching) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyOperatingSystemManualOSPatchingDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.OperatingSystem) && actualDescription.contains(PlazaValidation.ServerPlaced)
                && actualDescription.contains(PlazaValidation.WbsCodeField) && actualDescription.contains(PlazaValidation.PlannedStartDate)
                && actualDescription.contains(PlazaValidation.PlannedEndDate) && actualDescription.contains(PlazaValidation.MonthlyPatching)
                && actualDescription.contains(PlazaValidation.H2Name) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyBccpDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.ServiceRequestName)
                && actualDescription.contains(PlazaValidation.Environment) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyCewsDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Name) && actualDescription.contains(PlazaValidation.Email)
                && actualDescription.contains(PlazaValidation.Phone) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.AdditionalComments) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.CI)) {
            return true;
        }
        return false;
    }

    public boolean verifyCloudOneTimeSnapDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Name) && actualDescription.contains(PlazaValidation.Email)
                && actualDescription.contains(PlazaValidation.Phone) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.CI) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.DateTime) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyEbillDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.SelectRequest)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AccountName)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyEfsBssDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.CI) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyItFiDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Name) && actualDescription.contains(PlazaValidation.Email)
                && actualDescription.contains(PlazaValidation.Phone) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyManagedVoiceDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Name) && actualDescription.contains(PlazaValidation.Email)
                && actualDescription.contains(PlazaValidation.Phone) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyMegadiscAddUserDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.ChooseOption)
                && actualDescription.contains(PlazaValidation.AccountName) && actualDescription.contains(PlazaValidation.SelectGroup)
                && actualDescription.contains(PlazaValidation.RequestedPerson) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyMegadiscRemoveUserDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ChooseOption) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.AccountName) && actualDescription.contains(PlazaValidation.SelectGroup)
                && actualDescription.contains(PlazaValidation.RequestedPerson) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNnmNoDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.Glana)
                && actualDescription.contains(PlazaValidation.DnsIpAddress) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyNnmYesDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.Glana)
                && actualDescription.contains(PlazaValidation.DnsIpAddress) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyOccDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyPolluxProdDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.SelectRequest)
                && actualDescription.contains(PlazaValidation.Environment) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.WbsCodeField) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifySpanDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.SelectRequest)
                && actualDescription.contains(PlazaValidation.Environment) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifySplunkDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.H2Name) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyTopcatDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.CI) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyTspanDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.SelectRequest)
                && actualDescription.contains(PlazaValidation.Environment) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyVehaNetworkManagementDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.System)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyWebTabDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyStorageConfigureDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.NetworkVlan)
                && actualDescription.contains(PlazaValidation.CI) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyStorageExportVolumeDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.SourceWwn) && actualDescription.contains(PlazaValidation.DateTime)
                && actualDescription.contains(PlazaValidation.CI) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyStorageVolumeSnapshotDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.ChooseOption)
                && actualDescription.contains(PlazaValidation.CI) && actualDescription.contains(PlazaValidation.SourceWwn)
                && actualDescription.contains(PlazaValidation.DateTime) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyTcfpAddUserDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.ChooseOption) && actualDescription.contains(PlazaValidation.AccountName)
                && actualDescription.contains(PlazaValidation.SelectGroup) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyTcfpGeneralInquiryDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyTcfpRemoveUserDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.ChooseOption) && actualDescription.contains(PlazaValidation.AccountName)
                && actualDescription.contains(PlazaValidation.SelectGroup) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyCheckProfilesInOwDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.H2Name)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyAppwatchDescription() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.OnCallTeam)
                && actualDescription.contains(PlazaValidation.CI) && actualDescription.contains(PlazaValidation.ServiceGroupName)
                && actualDescription.contains(PlazaValidation.Notifications) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyIbsCustomerOrServerActivation() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.CustomerIdName) && actualDescription.contains(PlazaValidation.ServiceLevelManagement)
                && actualDescription.contains(PlazaValidation.PatchWindow) && actualDescription.contains(PlazaValidation.SecurityPatching)
                && actualDescription.contains(PlazaValidation.MonitoringAppwatch) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.VcpuAndRam) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments)) {
            return true;
        }
        return false;
    }

    public boolean verifyIbsOrderVirtualServerToDdc() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.DdcSite) && actualDescription.contains(PlazaValidation.System)
                && actualDescription.contains(PlazaValidation.ServerType) && actualDescription.contains(PlazaValidation.VlanName)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments)
                && actualDescription.contains(PlazaValidation.NumberOfServers )) {
            return true;
        }
        return false;
    }


    public boolean verifyTouchpointPlusAddDnsEntry() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.AdditionalComments )) {
            return true;
        }
        return false;
    }

    public boolean verifyTouchpointPlusAddSmsProvider() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.Name) && actualDescription.contains(PlazaValidation.Email)
                && actualDescription.contains(PlazaValidation.Phone) && actualDescription.contains(PlazaValidation.ServiceRequestName)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.OrganisationName)
                && actualDescription.contains(PlazaValidation.UserId) && actualDescription.contains(PlazaValidation.ServiceId)
                && actualDescription.contains(PlazaValidation.AdditionalComments) && actualDescription.contains(PlazaValidation.Description )) {
            return true;
        }
        return false;
    }

    public boolean verifyTouchpointPlusAddSslCertificate() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.Name) && actualDescription.contains(PlazaValidation.UserName)
                && actualDescription.contains(PlazaValidation.Role) && actualDescription.contains(PlazaValidation.ServiceRequestName)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments )) {
            return true;
        }
        return false;
    }

    public boolean verifyTouchpointPlusNewExportOrImport() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.ServiceRequestName)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments )) {
            return true;
        }
        return false;
    }

    public boolean verifyTouchpointPlusUpdateSupportPages() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Role)
                && actualDescription.contains(PlazaValidation.ServiceRequestName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.PlannedStartDate) && actualDescription.contains(PlazaValidation.Description)
                && actualDescription.contains(PlazaValidation.AdditionalComments )) {
            return true;
        }
        return false;
    }

    public boolean verifylinux() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName)
                && actualDescription.contains(PlazaValidation.Request) && actualDescription.contains(PlazaValidation.CI)
                && actualDescription.contains(PlazaValidation.Description) && actualDescription.contains(PlazaValidation.TypeOfServer)) {
            return true;
        }
        return false;
    }

    public boolean verifyCloudE2E() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.CI)) {
            return true;
        }
        return false;
    }

    public boolean verifyWindowsServer() {
        String actualDescription = getDescription();
        if (actualDescription.contains(PlazaValidation.UserName) && actualDescription.contains(PlazaValidation.Request)
                && actualDescription.contains(PlazaValidation.CI)) {
            return true;
        }
        return false;
    }
}
