package pageObjects;

import org.openqa.selenium.By;
import utils.CommonUtils;

public class OWF_ChangeRecordPage extends BasePage {


    private static final String ddSTATUS = "Status*";
    private static final String ddSERVICE_PROVIDER = "Service Provider";

    private static final String ddValueASSIGNED = "Assigned";
    private static final String ddValuePENDING = "Pending";
    private static final String ddValueUNDER_INVESTIGATION = "Under Investigation";
    private static final String ddValueWITHDRWAN = "Withdrawn";
    private static final String ddValueCLEAR = "(clear)";

    private static final String ddREQUEST_TYPE = "Request Type";
    private static final String ddTEMPLATE = "Template";
    private static final String ddESTIMATED_IMPACT= "Estimated Impact";
    private static final String ddACTUAL_IMPACT= "Actual Impact";
    private static final String ddCOMPLETED_CODE= "Completed Code";
    private static final String ddTITLE = "Title";
    private static final String ddREQUEST_CATEGORY = "Request Category";
    private static final String ddCHANGE_RECORD = "WIN_0_755000000";


    private static final String txtCHANGE_BUILDER_FIELD = "arid_WIN_0_600001054";
    private static final String txtSTART_DATE = "arid_WIN_0_777021160";
    private static final String txtEND_DATE = "arid_WIN_0_777021161";
    private static final String txtEXPECTED_ALARMS= "arid_WIN_0_705001002";
    private static final String txtIMPACT_DURATION_DAYS= "arid_WIN_0_990001006";
    private static final String txtIMPACT_DURATION_HRS= "arid_WIN_0_900000018";
    private static final String txtIMPACT_DURATION_MINS= "arid_WIN_0_900000019";
    private static final String txtIMPACT_DURATION_SECS= "arid_WIN_0_990001007";

    private static final String chkbxSWEDEN= "WIN_0_rc0id600002001";
    private static final String chkbxFINLAND= "WIN_0_rc0id600002002";
    private static final String chkbxDENMARK= "WIN_0_rc0id600002003";
    private static final String chkbxNORWAY= "WIN_0_rc0id600002004";
    private static final String chkbxLITHUANIA= "WIN_0_rc0id600002005";
    private static final String chkbxESTONIA= "WIN_0_rc0id600002006";
    private static final String chkbxTELIA_CARRIER= "WIN_0_rc0id600002008";
    private static final String chkbxUNKOWN= "WIN_0_rc0id600002010";
    private static final String chkbxINTERNAL= "WIN_0_rc0id600002009";


    private static final String btnSAVE = "WIN_0_700025244";
    private static final String btnDIAGNOSIS = "//a[contains(text(),'Diagnosis')]";
    private static final String btnCISEARCH = "WIN_0_999000229";
    public static final String btnSEND = "WIN_0_600002905";
    private static final String btnACKNOWLEDGE = "WIN_0_777504152";


    public void clickAcknowledgeButton(){
        driver.findElement(By.id(btnACKNOWLEDGE)).click();
    }
    public void clicksendButton(){
        driver.findElement(By.id(btnSEND)).click();
    }


    public void clickDenmarkCheckBox(){
        driver.findElement(By.id(chkbxDENMARK)).click();
    }
    public void clickSwedenCheckBox(){
        driver.findElement(By.id(chkbxSWEDEN)).click();
    }
    public void clickNorwayCheckBox(){
        driver.findElement(By.id(chkbxNORWAY)).click();
    }
    public void clickLithuniaCheckBox(){
        driver.findElement(By.id(chkbxLITHUANIA)).click();
    }
    public void clickFinalndCheckBox(){
        driver.findElement(By.id(chkbxFINLAND)).click();
    }
    public void clickEstoniaCheckBox(){
        driver.findElement(By.id(chkbxESTONIA)).click();
    }
    public void clickTeliaCarrierCheckBox(){
        driver.findElement(By.id(chkbxTELIA_CARRIER)).click();
    }
    public void clickUnknownCheckBox(){
        driver.findElement(By.id(chkbxUNKOWN)).click();
    }
    public void clickInternalCheckBox(){
        driver.findElement(By.id(chkbxINTERNAL)).click();
    }

    public void enterImpactDurationDays(String impactDurationDays){
        driver.findElement(By.id(txtIMPACT_DURATION_DAYS)).sendKeys(impactDurationDays);
    }
    public void enterImpactDurationHrs(String impactDurationHrs){
        driver.findElement(By.id(txtIMPACT_DURATION_HRS)).sendKeys(impactDurationHrs);
    }
    public void enterImpactDurationMins(String impactDurationMins){
        driver.findElement(By.id(txtIMPACT_DURATION_MINS)).sendKeys(impactDurationMins);
    }
    public void enterImpactDurationSecs(String impactDurationSecs){

        driver.findElement(By.id(txtIMPACT_DURATION_SECS)).sendKeys(impactDurationSecs);
    }
    public void selectActualImpact(String value){
        selectDropDown(ddACTUAL_IMPACT, value, true);
    }
    public void clickChangeRecord(){
        selectMenuItem(ddCHANGE_RECORD);
    }

    public void selectEstimatedImpact(String value) {
        selectDropDown(ddESTIMATED_IMPACT, value, true);
    }
        public void selectRequestCategory(String value){
            selectDropDown(ddREQUEST_CATEGORY, value, true);
    }
    public void selectCompletedCode(String value){
        selectDropDown(ddCOMPLETED_CODE, value, true);
    }
    public void clickExpectedAlarm(){
        driver.findElement(By.id(txtEXPECTED_ALARMS)).click();
    }

    public void selectTitle(String value){
        selectDropDown(ddTITLE, value, true);
    }
    public void selectRequestType(String value) {
        selectDropDown(ddREQUEST_TYPE, value, true);
    }

    public void selectTemplateAsAll_Mobile_RANExternals_RANConnectivity() {
        selectDropDown(ddTEMPLATE, "All:Mobile:RAN - Externals:RAN Connectivity", true);
    }
    public Boolean ackButtonStatus(){
        Boolean status = driver.findElement(By.id(btnACKNOWLEDGE)).isEnabled();
        return status;
    }


    public void enterChangeBuilderType(String changeBuilderName) {
        driver.findElement(By.id(txtCHANGE_BUILDER_FIELD)).sendKeys(changeBuilderName);
    }
    public void selectAssignedDdValue(){
        selectDropDownValue(ddValueASSIGNED);
    }
    public void selectPendingDdValue(){
        selectDropDownValue(ddValuePENDING);
    }
    public void selectUnderInvestigationDdValue(){
        selectDropDownValue(ddValueUNDER_INVESTIGATION);
    }
    public void selectWithdrawnDdValue(){
        selectDropDownValue(ddValueWITHDRWAN);
    }
    public void selectClearDdValue(){
        selectDropDownValue(ddValueCLEAR);
    }

    private static final String ddSTATuS_ID = "arid_WIN_0_777031003";


    public void clickStatusDropDown(){
        selectDropDownMenu(ddSTATUS);
    }


    public void clickServiceProviderDropDown(){
        selectDropDownMenu(ddSERVICE_PROVIDER);
    }

    public String getStatusText(){
        String StatusText= driver.findElement(By.id(ddSTATuS_ID)).getText();
        return StatusText;
    }
    public boolean verifyStatusWithdrawn(){
        boolean flag = driver.findElement(By.id(ddSTATuS_ID)).isEnabled();
        return flag;
    }

    public void clickSave() {
        driver.findElement(By.id(btnSAVE)).click();
    }

    public void clickDiagnosis() {
        driver.findElement(By.xpath(btnDIAGNOSIS)).click();
    }

    public void clickCiSearch() {
        driver.findElement(By.id(btnCISEARCH)).click();
    }

    public void setStartDate(int delay) {

        String dateTime = CommonUtils.getDateTime("yyyy/MM/dd HH:mm:ss", "Europe/Stockholm", delay);

        driver.findElement(By.id(txtSTART_DATE)).sendKeys(dateTime);

    }
    public String getChangeRecordPageTitle(){
        String ChangeRecordPageTitle= driver.getTitle();
        return ChangeRecordPageTitle;
    }

    public void setEndDate(int delay) {

        String dateTime = CommonUtils.getDateTime("yyyy/MM/dd HH:mm:ss", "Europe/Stockholm", delay);

        driver.findElement(By.id(txtEND_DATE)).sendKeys(dateTime);

    }
    public void selectRequestTypeAsAccessNetworksRANOptimization()
    {
        selectDropDown(ddREQUEST_TYPE, "Access Networks:RAN Optimization", false);
    }
}
