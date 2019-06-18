package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class OWF_ProblemRecordPage extends BaseRecordPage {


    private static final String txtTICKET_ID = "arid_WIN_0_730000060";
    private static final String txtSEARCH_TICKET_ID = "arid_WIN_0_777777600";


    private static final String btnTIMELINE_XPATH = "//a[contains(text(),'Timeline')]";
    private static final String fld_TIMELINE_DISPLAY_XPATH = "//div[@id='WIN_0_999000510']//div[@class='BaseTableInner']";

    private static final String ddNO_ID = "arid_WIN_0_600001801";
    private static final String ddREASON = "Reason";

    private static final String txtTITLE_ID = "arid_WIN_0_777031000";
    private static final String txtDESCRIPTION_ID = "arid_WIN_0_777031007";
    private static final String txtWORK_AROUND = "arid_WIN_0_600001040";

    private static final String ddREQUEST_TYPE_ID = "arid_WIN_0_777031002";
    private static final String ddIMPACT = "Impact";
    private static final String ddURGENCY = "Urgency";
    private static final String ddWITHDRAWN_REASON = "Withdrawn Reason";
    private static final String ddPRIORITY_ID = "Priority";

    private static final String ddValueDUPLICATE_ENTRIES = "Duplicate Entries";
    private static final String ddValueFALSE_ALARM = "False Alarm";
    private static final String ddValueINSUFICIENT_INFORMATION = "Insuficient information";
    private static final String ddValueNOT_A_ROOTCAUSE_INVESTIGATION = "Not a rootcause investigation";
    private static final String ddValueOTHER_PROCESS_SOLVING_PROBLEM = "Other process solving the problem";
    private static final String ddValueTEST_TICKET = "Test Ticket";
    private static final String ddValueTRAINING = "Training";
    private static final String dd_WITHDRAWN_REASON_ValueCLEAR = "(clear)";

    private static final String ddValueEXTENSIVE_WIDESPREAD = "Extensive/Widespread";
    private static final String ddValueSIGNIFICANT_LARGE = "Significant/Large";
    private static final String ddValueMODERATE_LIMITED = "Moderate/Limited";
    private static final String ddValueCLEAR = "(clear)";

    private static final String ddValueCRITICAL = "Critical";
    private static final String ddValueHIGH = "High";
    private static final String ddValueMEDIUM = "Medium";
    private static final String ddValueLOW = "Low";
    private static final String dd_PRIORITY_ValueCLEAR = "(clear)";

    private static final String btnADD_ID = "WIN_0_777000020";
    private static final String btnADD_ON_FRAME_XPATH = "//a[contains(@class,'Add btn btn3d TableBtn')]";
    private static final String btnINTERNAL_OPEN_ID = "WIN_0_777000021";
    private static final String btnINTERNAL_DELETE_ID = "WIN_0_777000022";
    private static final String btnEXTERNAL_OPEN_ID = "WIN_0_600002903";
    private static final String btnEXTERNAL_DELETE_ID = "WIN_0_600002906";
    private static final String btnSAVE_ID = "WIN_0_700025244";
    private static final String btnSEARCH_ID = "WIN_0_1002";
    private static final String errorTABLE_XPATH = "//*[@id='pbartable']";
    private static final String btnYES_ON_FRAME_ID = "WIN_0_700027904";
    private static final String btnACK_ID = "WIN_0_777504152";
    private static final String timeline_TABLE_ID = "T999000510";
    private static final String btnRELEASE_ID = "WIN_0_777021435";

    private static final String ddValueMAJOR = "Major";
    private static final String txtSOURCE_ID = "arid_WIN_0_777777912";

    private static final String chkbxSWEDEN = "WIN_0_rc0id600002001";
    private static final String txtTO_DATE = "arid_WIN_0_777031004";

    public void clickRelease(){
        driver.findElement(By.id(btnRELEASE_ID)).click();
    }
    public void enterToDate(String toDate){
        driver.findElement(By.id(txtTO_DATE)).sendKeys(toDate);
    }

    public void selectReasonAs(String value){
        selectDropDownNameAndValue(ddREASON, value, true);
    }

    public String getTimelineStatus() {
        String status = getTableCellData(By.id(timeline_TABLE_ID), "Description", 1);
        System.out.println("Timeline status is: " + status);
        return status;
    }
    public void enterWorkAround(String workAround){
        driver.findElement(By.id(txtWORK_AROUND)).sendKeys(workAround);
    }

    public void enterSource(String source){
        driver.findElement(By.id(txtSOURCE_ID)).sendKeys(source);
    }

    public void clickTimelineButton() {
        driver.findElement(By.xpath(btnTIMELINE_XPATH)).click();
    }

    public void enterTicket(String ticket) {
        driver.findElement(By.id(txtSEARCH_TICKET_ID)).sendKeys(ticket);
    }

    public void clickYesOnFrame() {
        driver.findElement(By.id(btnYES_ON_FRAME_ID)).click();
    }




    public void clickAddButton() {
        driver.findElement(By.id(btnADD_ID)).click();
    }
    public void clickAddButtonOnFrame(){
        driver.findElement(By.xpath(btnADD_ON_FRAME_XPATH)).click();
    }

    public void clickInternalOpenButton() {
        driver.findElement(By.id(btnINTERNAL_OPEN_ID)).click();
    }

    public void clickInternalDeleteButton() {
        driver.findElement(By.id(btnINTERNAL_DELETE_ID)).click();
    }

    public void clickExternalOpenButton() {
        driver.findElement(By.id(btnEXTERNAL_OPEN_ID)).click();
    }

    public void clickExternalDeleteButton() {
        driver.findElement(By.id(btnEXTERNAL_DELETE_ID)).click();
    }

    public void clickSaveButton() {
        driver.findElement(By.id(btnSAVE_ID)).click();
    }

    public void clickAckButton() {
        driver.findElement(By.id(btnACK_ID)).click();
    }

    public void clickSearchButton() {
        driver.findElement(By.id(btnSEARCH_ID)).click();
    }

    public String getProblemTicket() {
        return getTextById(txtTICKET_ID);
    }

    public String getRequestTypeText() {
        return getTextById(ddREQUEST_TYPE_ID);
    }

    public void enterDescription(String description) {
        driver.findElement(By.id(txtDESCRIPTION_ID)).sendKeys(description);
    }

    public String getDescriptionText() {
        return getTextById(txtDESCRIPTION_ID);
    }

    public String getPriorityText() {
        return getTextById(ddPRIORITY_ID);
    }

    public boolean getDescriptionTextBoxStatus() {
        boolean status = checkIfControlIsReadonly(txtDESCRIPTION_ID);
        return status;
    }

    public boolean getRequestTypeDropDownStatus() {
        boolean status = checkIfControlIsReadonly(ddREQUEST_TYPE_ID);
        System.out.println("Request type dropdown is read only: " + status);
        return status;
    }

    public boolean getAckButtonStatus() {
        return driver.findElement(By.id(btnACK_ID)).isEnabled();
    }

    public void selectWithdrawnReason_FalseAlarmDropDown() {
        selectDropDownNameAndValue(ddWITHDRAWN_REASON, "False Alarm", true);
    }


    public void enterTitle(String Title) {
        driver.findElement(By.id(txtTITLE_ID)).sendKeys(Title);
    }


    public void clickNoDropdown() {
        driver.findElement(By.id(ddNO_ID)).click();
    }

    public void clickImpactDropDown() {
        selectDropDownMenu(ddIMPACT);
    }

    public void clickUrgencyDropDown() {
        selectDropDownMenu(ddURGENCY);
    }

    public void selectExtensiveWidespreadDdValue() {
        selectDropDownValue(ddValueEXTENSIVE_WIDESPREAD);
    }

    public void selectSignificantLargeDdValue() {
        selectDropDownNameAndValue(ddIMPACT, ddValueSIGNIFICANT_LARGE, false);
    }

    public void selectModerateLimitedDdValue() {
        selectDropDownValue(ddValueMODERATE_LIMITED);
    }

    public void select_Impact_ClearDdValue() {
        selectDropDownValue(ddValueCLEAR);
    }

    public void selectCriticalDdValue() {
        selectDropDownValue(ddValueCRITICAL);
    }

    public void selectHighDdValue() {
        selectDropDownNameAndValue(ddURGENCY, ddValueHIGH, false);
    }

    public void selectMediumDdValue() {
        selectDropDownValue(ddValueMEDIUM);
    }

    public void selectLowDdValue() {
        selectDropDownValue(ddValueLOW);
    }

    public void selectPriority_ClearDdValue() {
        selectDropDownValue(dd_PRIORITY_ValueCLEAR);
    }

    public void selectDuplicateEntriesDdValue() {
        selectDropDownValue(ddValueDUPLICATE_ENTRIES);
    }

    public void selectFalseAlarmDdValue() {
        selectDropDownValue(ddValueFALSE_ALARM);
    }

    public void selectInsuficientInformationDdValue() {
        selectDropDownValue(ddValueINSUFICIENT_INFORMATION);
    }

    public void selectNot_aRootCauseInvestigationDdValue() {
        selectDropDownValue(ddValueNOT_A_ROOTCAUSE_INVESTIGATION);
    }

    public void selectOtherProcessSlovingProblemDdValue() {
        selectDropDownValue(ddValueOTHER_PROCESS_SOLVING_PROBLEM);
    }

    public void selectTestTicketDdValue() {
        selectDropDownValue(ddValueTEST_TICKET);
    }

    public void selectTrainingDdValue() {
        selectDropDownValue(ddValueTRAINING);
    }

    public void selectWithdrawnReason_ClearDdValue() {
        selectDropDownValue(dd_WITHDRAWN_REASON_ValueCLEAR);
    }


    public void clickSwedenCheckBox() {
        driver.findElement(By.id(chkbxSWEDEN)).click();
    }


    public boolean validateErrorMessage(String message) {
        List<WebElement> errorElements = driver.findElement(By.xpath(errorTABLE_XPATH)).findElements(By.tagName("tr"));
        if (errorElements.size() > 0) {

            WebElement e = errorElements.stream().filter(x -> x.getText().trim().contains(message)).findFirst().orElse(null);
            if (e != null) {
                return true;
            }
        }
        return false;
    }

    public boolean validateMultipleErrorMessages(int errorMessagesCount) {
        List<WebElement> errorElements = driver.findElement(By.xpath(errorTABLE_XPATH)).findElements(By.tagName("tr"));
        if (errorElements.size() > errorMessagesCount) {
            return true;
        }
        return false;
    }

    public void acceptAlert() {
        driver.switchTo().alert().accept();
    }


    public void selectPriority(String value) {
        selectDropDownNameAndValue(ddPRIORITY_ID, value, false);

    }

}