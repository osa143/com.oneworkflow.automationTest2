package pageObjects;

import org.openqa.selenium.By;

public class OWF_KnownErrorPage extends BaseRecordPage {

    private static final String btnADD_ID = "WIN_0_705002007";
    private static final String ddTYPE = "Type";
    private static final String rbtnUSER = "WIN_0_rc0id700027222";
    private static final String ddREQUEST_TYPE = "Request Type";
    private static final String txtLOGIN_NAME_PLUS_ID = "arid_WIN_0_700027012";
    private static final String txtFIRST_NAME_PLUS_ID = "arid_WIN_0_700027160";
    private static final String txtLAST_NAME_PLUS_ID = "arid_WIN_0_700027161";
    private static final String btnSEARCH_add_interested_parties = "WIN_0_900000010";
    private static final String rbtnREAD_WRITE_access_ID = "WIN_0_rc0id700027223";
    private static final String rbtnYES_autoNotify_ID = "WIN_0_rc0id700027223";


    public void clickReadWrite_access(){
        driver.findElement(By.xpath(rbtnREAD_WRITE_access_ID)).click();
    }
    public void clickYes_notify(){
        driver.findElement(By.xpath(rbtnYES_autoNotify_ID)).click();
    }
    public void clickSearch_AddInterestedParties(){
        driver.findElement(By.id(btnSEARCH_add_interested_parties)).click();
    }


    public void enterLoginNamePlus(String loginName){
        driver.findElement(By.id(txtLOGIN_NAME_PLUS_ID)).click();
    }
    public void enterFirstNamePlus(String loginName){
        driver.findElement(By.id(txtFIRST_NAME_PLUS_ID)).click();
    }
    public void enterLastNamePlus(String loginName){
        driver.findElement(By.id(txtLAST_NAME_PLUS_ID)).click();
    }


    public void selectRequestType(String value){
        selectDropDownNameAndValue(ddREQUEST_TYPE, value, false );
    }

    public void clickOnUserRadioButton(){
        driver.findElement(By.id(rbtnUSER)).click();
    }

    public void selectType(String value){
        selectDropDownNameAndValue(ddTYPE, value, false);
    }

    public void clickAddButton_interestedParties(){
        driver.findElement(By.id(btnADD_ID)).click();
    }


}
