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
    private static final String btnREFRESH_INBOUND = "//div[@id='WIN_0_600002301']//a[@class='Ref btn btn3d TableBtn'][contains(text(),'Refresh')] ";
    private static final String btn_REFRESH_OUTBOUND= "//div[@id='WIN_0_600002302']//a[@class='Ref btn btn3d TableBtn'][contains(text(),'Refresh')]";
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
        driver.findElement(By.id(txtESTIMATED_READY)).sendKeys(estimated_ready);
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
        driver.findElement(By.id(btnAPPLY_B2B_ID)).click();
    }
    public void selectSlaClass(String value){
        selectDropDownNameAndValue(ddSLA_CLASS, value, false);
    }

    public boolean getAssignedProfileStatus(String text1){
        String text = getAttributeValueById(ddASSIGNED_PROFILE);
        System.out.println(text);
        if(text.contains(text1)) {
            return true;
        }
        else return false;
    }


}
