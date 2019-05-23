package pageObjects;

import org.openqa.selenium.By;

public class OWF_FromFilePage extends BasePage {

    private static final String ddSummary = "Summary";

    private static final String ddValueTROUBLE_EVENT_FROM_FILE  = "Trouble Event From File";
    private static final String ddValueWORK_ORDER_FROM_FILE  = "Work Order From File";

    private static final String btnADD_XPATH = "//a[contains(@class,'Add btn btn3d TableBtn')]";
    private static final String btnHELP_ID = "WIN_0_777777971";
    private static final String btnCLOSE_XPATH= "//button[@id='ardivpcl']";
    private static final String btnCLOSE_ID = "WIN_0_777000001";
    private static final String btnSAVE_ID = "WIN_0_700500109";
    private static final String btnATT_FILE_XAPTH = " //span[contains(text(),'Att-File1')]";
    private static final String btnDE_SELECT_XPATH  ="//a[@class='Deselect btn btn3d TableBtn']";

    private static final String btnPOP_UP_ATT_INPUT_ID  = "PopupAttInput";
    private static final String labelPOP_UP_ATT_STATUS_ID  = "PopupAttStatus";
    private static final String btnCLOSE_ATT_XPATH = "//button[@id='ardivpcl']";
    private static final String btnOK_XPATH = "//a[contains(text(),'OK')]";
    private static final String btnCANCEL_XPATH = "//a[contains(text(),'Cancel')]";

    public void clickCloseAttButton(){
        driver.findElement(By.id(btnCLOSE_ATT_XPATH)).click();
    }

    public void clickOkButton(){
        driver.findElement(By.xpath(btnOK_XPATH)).click();
    }
    public void clickCancelButton(){
        driver.findElement(By.xpath(btnCANCEL_XPATH)).click();
      }

    public String PopUpAttStatus(){
        String popUpStatusText= driver.findElement(By.id(labelPOP_UP_ATT_STATUS_ID)).getText();
        return popUpStatusText;
    }


    public void clickPopUpAttInputButton(){
        driver.findElement(By.id(btnPOP_UP_ATT_INPUT_ID)).click();
    }
    public void clickAttFileButton(){
        driver.findElement(By.xpath(btnATT_FILE_XAPTH)).click();
    }
    public void clickDeSelectButton(){
        driver.findElement(By.xpath(btnDE_SELECT_XPATH)).click();
    }



    public void clickSummaryDropDown(){
        selectDropDownMenu(ddSummary);
    }
    public void selectTroubleEventFromFileDdValue(){
        selectDropDownValue(ddValueTROUBLE_EVENT_FROM_FILE);
    }
    public void selectWorkOrderFromFileDdValue(){
        selectDropDownValue(ddValueWORK_ORDER_FROM_FILE);
    }
    public void clickAddButton(){
        driver.findElement(By.xpath(btnADD_XPATH)).click();
    }
    public void clickHelpButton(){
        driver.findElement(By.id(btnHELP_ID)).click();
    }
    public void clickCloseTopButton(){
        driver.findElement(By.xpath(btnCLOSE_XPATH)).click();
    }
    public void clickCloseButton(){
        driver.findElement(By.id(btnCLOSE_ID)).click();
    }
    public void clickSaveButton(){
        driver.findElement(By.id(btnSAVE_ID)).click();
    }
}

