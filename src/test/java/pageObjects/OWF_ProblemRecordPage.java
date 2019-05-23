package pageObjects;

import org.openqa.selenium.By;

public class OWF_ProblemRecordPage extends BasePage{

   private static final String ddNO_ID ="arid_WIN_0_600001801";

   private static final String txtTITLE_ID = "arid_WIN_0_777031000";
   private static final String txtDESCRIPTION_ID = "arid_WIN_0_777031007";

   private static final String ddIMPACT = "Impact";
   private static final String ddURGENCY = "Urgency";


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
}
