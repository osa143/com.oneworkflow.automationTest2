package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class OWF_ProblemRecordPage extends BasePage{

   private static final String ddNO_ID ="arid_WIN_0_600001801";

   private static final String txtTITLE_ID = "arid_WIN_0_777031000";
   private static final String txtDESCRIPTION_ID = "arid_WIN_0_777031007";

   private static final String ddIMPACT = "Impact";
   private static final String ddURGENCY = "Urgency";
   private static final String ddWITHDRAWN_REASON = "arid_WIN_0_777031390";

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
    private static final String btnINTERNAL_OPEN_ID = "WIN_0_777000021";
    private static final String btnINTERNAL_DELETE_ID = "WIN_0_777000022";
    private static final String btnEXTERNAL_OPEN_ID = "WIN_0_600002903";
    private static final String btnEXTERNAL_DELETE_ID = "WIN_0_600002906";
    private static final String btnSAVE_ID = "WIN_0_700025244";
    private static final String errorTABLE_ID = "//*[@id='pbartable']";

    public void clickAddButton(){
        driver.findElement(By.id(btnADD_ID)).click();
    }
    public void clickInternalOpenButton(){
       driver.findElement(By.id(btnINTERNAL_OPEN_ID)).click();
    }
    public void clickInternalDeleteButton(){
        driver.findElement(By.id(btnINTERNAL_DELETE_ID)).click();
    }
    public void clickExternalOpenButton(){
        driver.findElement(By.id(btnEXTERNAL_OPEN_ID)).click();
    }
    public void clickExternalDeleteButton(){
        driver.findElement(By.id(btnEXTERNAL_DELETE_ID)).click();
    }
    public void clickSaveButton(){
        driver.findElement(By.id(btnSAVE_ID)).click();
    }


    public void enterDescription(String description){
        driver.findElement(By.id(txtDESCRIPTION_ID)).sendKeys(description);
    }
    public void clickWithdrawnReasonDropDown(){
        driver.findElement(By.xpath(ddWITHDRAWN_REASON)).click();
    }


    public void enterTitle(String Title){
        driver.findElement(By.id(txtTITLE_ID)).sendKeys(Title);
    }


    public void clickNoDropdown(){
        driver.findElement(By.id(ddNO_ID)).click();
    }

    public void clickImpactDropDown(){
        selectDropDownMenu(ddIMPACT);
    }
    public void clickUrgencyDropDown(){
        selectDropDownMenu(ddURGENCY);
    }

    public void selectExtensiveWidespreadDropDown(){
       selectDropDownValue(ddValueEXTENSIVE_WIDESPREAD);
   }
    public void selectSignificantLargeDropDown(){
        selectDropDownValue(ddValueSIGNIFICANT_LARGE);
    }
    public void selectModerateLimitedDropDown(){
        selectDropDownValue(ddValueMODERATE_LIMITED);
    }
    public void selectClearDropDown(){
        selectDropDownValue(ddValueCLEAR);
    }
    public void selectCriticalDdValue(){
        selectDropDownValue(ddValueCRITICAL);
    }
    public void selectHighDropDown(){
        selectDropDownValue(ddValueHIGH);
    }

    public void selectMediumDdValue(){
        selectDropDownValue(ddValueMEDIUM);
    }

    public void selectLowDdValue(){
        selectDropDownValue(ddValueLOW);
    }

    public void selectPriority_ClearDdValue(){
        selectDropDownValue(dd_PRIORITY_ValueCLEAR);
    }
    public void selectDuplicateEntriesDdValue(){
        selectDropDownValue(ddValueDUPLICATE_ENTRIES);
    }
    public void selectFalseAlarmDdValue(){
        selectDropDownValue(ddValueFALSE_ALARM);
    }

    public void selectInsuficientInformationDdValue(){
        selectDropDownValue(ddValueINSUFICIENT_INFORMATION);
    }

    public void selectNot_aRootCauseInvestigationDdValue(){
        selectDropDownValue(ddValueNOT_A_ROOTCAUSE_INVESTIGATION);
    }

    public void selectOtherProcessSlovingProblemDdValue(){
        selectDropDownValue(ddValueOTHER_PROCESS_SOLVING_PROBLEM);
    }

    public void selectTestTicketDdValue(){
        selectDropDownValue(ddValueTEST_TICKET);
    }

    public void selectTrainingDdValue(){
        selectDropDownValue(ddValueTRAINING);
    }
    public void selectWithdrawnReason_ClearDdValue(){
        selectDropDownValue(dd_WITHDRAWN_REASON_ValueCLEAR);
    }



    public boolean validateErrorMessage(String message)
    {
        List<WebElement> errorElements = driver.findElement(By.xpath(errorTABLE_ID)).findElements(By.tagName("tr"));
        if (errorElements.size() > 0) {

            WebElement e = errorElements.stream().filter(x -> x.getText().contains(message)).findFirst().orElse(null);
            if (e != null) {
                return true;
            }
        }
        return false;
    }

    public boolean validateMultipleErrorMessages()
    {
        List<WebElement> errorElements = driver.findElement(By.xpath(errorTABLE_ID)).findElements(By.tagName("tr"));
        if (errorElements.size() > 5) {
            return  true;
        }
        return  false;
    }
    public void acceptAlert(){
        driver.switchTo().alert().accept();
    }

}
