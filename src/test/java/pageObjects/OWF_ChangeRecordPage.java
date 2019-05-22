package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import utils.CommonUtils;

public class OWF_ChangeRecordPage extends BasePage {


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
    private static final String txtIMPACT_DURATION_HRS= "arid_WIN_0_990001006";
    private static final String txtIMPACT_DURATION_MINS= "arid_WIN_0_990001006";
    private static final String txtIMPACT_DURATION_SECS= "arid_WIN_0_990001006";

    private static final String chkbxSWEDEN= "WIN_0_rc0id600002001";
    private static final String chkbxFINLAND= "WIN_0_rc0id600002002";
    private static final String chkbxDENMARK= "WIN_0_rc0id600002003";
    private static final String chkbxNORWAY= "WIN_0_rc0id600002004";
    private static final String chkbxLITHUANIA= "WIN_0_rc0id600002005";
    private static final String chkbxESTONIA= "WIN_0_rc0id600002006";
    private static final String chkbxTELIA_CARRIER= "WIN_0_rc0id600002008";
    private static final String chkbxUNKOWN= "WIN_0_rc0id600002010";
    private static final String chkbxINTERNAL= "WIN_0_rc0id600002009";



    private static final String btnSAVE = "arid_WIN_0_900000019";
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

    public void clickImpactDurationDays(){
        driver.findElement(By.id(txtIMPACT_DURATION_DAYS)).click();
    }
    public void clickImpactDurationHrs(){
        driver.findElement(By.id(txtIMPACT_DURATION_HRS)).click();
    }
    public void clickImpactDurationMins(){
        driver.findElement(By.id(txtIMPACT_DURATION_MINS)).click();
    }
    public void clickImpactDurationSecs(){
        driver.findElement(By.id(txtIMPACT_DURATION_SECS)).click();
    }
    public void selectActualImpact(String value){
        selectDropDown(ddACTUAL_IMPACT, value);
    }
    public void clickChangeRecord(){
        selectMenuItem(ddCHANGE_RECORD);
    }

    public void selectEstimatedImpact(String value) {
        selectDropDown(ddESTIMATED_IMPACT, value);
    }
        public void selectRequestCategory(String value){
            selectDropDown(ddREQUEST_CATEGORY, value);
    }
    public void selectCompletedCode(String value){
        selectDropDown(ddCOMPLETED_CODE, value);
    }
    public void clickExtectedAlarm(){
        driver.findElement(By.id(txtEXPECTED_ALARMS)).click();
    }

    public void selectTitle(String value){
        selectDropDown(ddTITLE, value);
    }
    public void selectRequestType(String value) {
        selectDropDown(ddREQUEST_TYPE, value);
    }

    public void selectTemplate(String value) {
        selectDropDown(ddTEMPLATE, value);
    }


    public void enterChangeBuilderType(String changeBuilderName) {
        driver.findElement(By.id(txtCHANGE_BUILDER_FIELD)).sendKeys(changeBuilderName);
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

        String dateTime = CommonUtils.getDateTime("MM/dd/yyyy HH:mm:ss", "Europe/Stockholm", delay);

        driver.findElement(By.id(txtSTART_DATE)).sendKeys(dateTime);

    }

    public void setEndDate(int delay) {

        String dateTime = CommonUtils.getDateTime("MM/dd/yyyy HH:mm:ss", "Europe/Stockholm", delay);

        driver.findElement(By.id(txtEND_DATE)).sendKeys(dateTime);

    }
}
