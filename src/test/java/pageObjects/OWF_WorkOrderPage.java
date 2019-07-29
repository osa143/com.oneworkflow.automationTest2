package pageObjects;

import org.openqa.selenium.By;
import utils.CommonUtils;

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
    private static final String txtWFM_TIKCET_ID  = "arid_WIN_0_777504105";
    private static final String txtDISPATCH_STATUS_ID  = "arid_WIN_0_777504105";
    private static final String btnAPPLY_B2B_ID = "WIN_0_600002903";
    private static final String ddREQUEST_TYPE= "Request Type";
    private static final String ddASSIGNED_PROFILE = "arid_WIN_0_777031408";
    private static final String txtEVENT_START_TIME = "arid_WIN_0_600001302";
    private static final String dd_COMPLETION_CODE= "Completion Code";
    private static final String txt_SCHEDULE_END= "arid_WIN_0_777021165";

    public void enterActualScheduleEnd(){
        findElement(By.id(txt_SCHEDULE_END)).sendKeys(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
        wait(2000);
    }
    public void selectCompletionCode(String value){
        selectDropDownNameAndValue(dd_COMPLETION_CODE, value, true);
    }


    public void enterEstimatedReady(String estimated_ready) {
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
