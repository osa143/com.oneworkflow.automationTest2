package pageObjects;

import org.openqa.selenium.By;

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

    public void selectRequestType(String value){
        selectDropDownNameAndValue(ddREQUEST_TYPE, value, false);
    }

    public String getDispatchStatus(){
         return getTextById(txtDISPATCH_STATUS_ID);
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

    public boolean validateNotNullById(String Id){
       boolean notNull= getTextById(Id).isEmpty();
       return notNull;
    }
    public boolean validateEstimatedReady(){
        return validateNotNullById(txtESTIMATED_READY);

    }

    public boolean validateWFM_ticket_ID(){
         return validateNotNullById(txtWFM_TIKCET_ID);
    }

    public String getWOsStatusText(){
        return getTextById(txtWOs_STATUS_ID);
    }
    public String getStatusText(){
        return getTextById(txtSTATUS_ID);
    }
    public String getParentTicketId(){
        return getTextById(txtPARENT_TICKET_ID);
    }

    public void clickApplyB2B() {
        driver.findElement(By.id(btnAPPLY_B2B_ID)).click();
    }
    public void selectSlaClass(String value){
        selectDropDownNameAndValue(ddSLA_CLASS, value, false);
    }

    public boolean getAssignedProfileStatus(String b2b){
        String text =getTextById(ddASSIGNED_PROFILE);
        if(text.contains(b2b)) {
            return true;
        }
        else return false;
    }


}
