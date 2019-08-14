package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import java.util.List;

public class OWF_CiSearchPage extends BasePage {

    private static final String btnRELATE_CI = "WIN_0_700009085";
    private static final String btnClOSE =  "WIN_0_777000001";
    private static final String btnCLOSEOnWarningMessage = "ardivpcl";
    private static final String btnCLEAR = "WIN_0_700009116";
    private static final String btnCI_SEARCH = "WIN_0_700009021";
    private static final String btnLINK_ID = "WIN_4_777506009";
    private static final String btn_LINK = "WIN_5_777506009";
    private static final String btnACCEPT_ID = "WIN_0_730011058";
    private static final String txtLOCATION_ID = "arid_WIN_0_700009015";
    private static final String btnCREATE_linked_items = "WIN_4_777506020";
    private static final String btn_CREATE_linked_items= "WIN_5_777506020";
    private static final String chkbxTO_SELECT_CI = "//*[@id=\"T700009024\"]/tbody/tr[2]";
    private static final String rbtn_CLEARED_ID = "WIN_4_rc1id730011091";
    private static final String ddCATEGORY= "Category*";
    private static final String txtNAME_PLUS_ID = "arid_WIN_0_700009016";
    private static final String ddLEVEL = "Level*";
    private static final String ddSEARCH_FOR_ID = "arid_WIN_0_700009236";
    private static final String ddValueALL_CIS = "All CIs";
    private static final String Table_ID = "T700009024";
    private static final String CI_DIAGNOSIS_TABLE_ID = "T700009087";
    private static final String TABLE_ID_linkedItems = "T777506000";
    private static final String txt_IMPACT_FROM= "arid_WIN_0_700009083";
    private static final String btn_ADD_BULK_IMPORT= "WIN_0_800038046";
    private static final String fld_BULK_CI_LOADING= "WIN_0_536870927";
    private static final String rbtn_MANUAL_INPUT= "WIN_0_rc1id800038034";
    private static final String txt_MANUAL_CI_SEARCH_BOX= "arid_WIN_0_800038045";
    private static final String btn_SAVE_BULK_CI= "WIN_0_700025244";
    private static final String btn_SHOW_BULK_IMPORT= "WIN_0_800038047";
    private static final String btn_CLOSE_BULK_CI_LOADING= "WIN_0_777000001";
    private static final String table_BULK_CI_LOADING_RELATED_JOBS= "T800038059";
    private static final String table_BULK_CI_LOADING_RELATED_CIS="T800038049";
    private static final String txt_IMPACT_TO_PLUS= "arid_WIN_0_700009084";
    private static final String txt1_ERROR_MESSAGE= "//*[@id='PopupMsgBox']";
    private static final String txt2_ERROR_MESSAGE= "//*[@id='PopupMsgBox']";

    public void enterImpactToPlus(String text){
        enterTextByElement(By.id(txt_IMPACT_TO_PLUS), text);
    }

    public boolean verifyErrorText1(String text){
        driver.switchTo().parentFrame();
        driver.switchTo().frame(2);
        driver.switchTo().frame(1);
        String error= findElement(By.xpath(txt1_ERROR_MESSAGE)).getText();
        System.out.println("Error message is: " +error);
        if(error.contains(text))
        return true;
        else return false;
    }
    public boolean verifyErrorText2(String text){
        String error= findElement(By.xpath(txt2_ERROR_MESSAGE)).getText();
        System.out.println("Error message is: " +error);
        if(error.contains(text))
            return true;
        else return false;
    }

    public void clickOk_popUp(){
        clickElement(By.xpath("//*[@id='PopupMsgFooter']/a"));
    }

    public boolean verifySaveButtonIsDisplayed(){
        return verifyElementIsDisplayed(By.id(btn_SAVE_BULK_CI));
    }
    public boolean verifyCloseButtonIsDisplayed(){
        return verifyElementIsDisplayed(By.id(btn_CLOSE_BULK_CI_LOADING));
    }
   public String verifyRelatedCIs(String columnName, int rowNum){
       return getTableCellData(By.id(table_BULK_CI_LOADING_RELATED_CIS), columnName, rowNum);
   }
    public boolean validateRelatedJobsAvailability(int jobSize)
    {
        wait(1000);
        int size = getTableRows(By.id(table_BULK_CI_LOADING_RELATED_JOBS)).size();
        System.out.println("Available related Jobs" + (size-1));
        if(jobSize==(size-1)){
            return true;
        }
        return false;
    }

    public void clickClose_bulkCILoading(){
        clickElement(By.id(btn_CLOSE_BULK_CI_LOADING));
    }

    public void clickShowBulkImport(){
        clickElement(By.id(btn_SHOW_BULK_IMPORT));
    }


    public void clickSave_bulkCiLoadingWindow(){
        clickElement(By.id(btn_SAVE_BULK_CI));
    }

    public void enterManualCiSearch(String text){
        enterTextByElement(By.id(txt_MANUAL_CI_SEARCH_BOX), text);
    }


    public void clickManualInput(){
        clickElement(By.id(rbtn_MANUAL_INPUT));
    }


    public boolean verifyBulkCiLoadingIsDisplayed(){
        return verifyElementIsDisplayed(By.id(fld_BULK_CI_LOADING));
    }

    public void clickBulkImport(){
        clickElement(By.id(btn_ADD_BULK_IMPORT));
    }

    public void enterImpactFrom(){
        findElement(By.id(txt_IMPACT_FROM)).sendKeys(Keys.ENTER);
    }
    public void enterImpactFrom(String text){
        findElement(By.id(txt_IMPACT_FROM)).sendKeys(text);
    }


    public void clickRiskTab(){
        findElement(By.xpath("//a[contains(text(), 'Risk')]")).click();
    }

    public void selectCi(String text)
    {
        ClickTableElementByText(By.id(Table_ID),"Name",text,false);
    }


    public void selectCategory_CiSearchPage(String value){
        selectDropDownNameAndValue(ddCATEGORY,value, false );
    }

    public void clickOk_OnPop_up(){
        findElement(By.xpath("//a[@class='btn btn3d PopupBtn']")).click();
    }

    public void clickClearedRadioButton_linkedItems(){
        driver.findElement(By.id(rbtn_CLEARED_ID)).click();
    }
    public boolean verifyIsProblemTicketListed(){
        int size= getTableRows(By.id(TABLE_ID_linkedItems)).size();
        if(size>1){
            return true;
        }
        else return false;
    }

    public void clickCreate_linkedItems(){
        findElement(By.id(btnCREATE_linked_items)).click();
    }
    public void clickCreate(){
        findElement(By.id(btn_CREATE_linked_items)).click();
    }

    public void enterLocation(String location){
        findElement(By.id(txtLOCATION_ID)).sendKeys(location);
    }

    public void clickAcceptButton(){
        findElement(By.id(btnACCEPT_ID)).click();
    }

    public void clickLinkedItems(){
        selectTab("Linked Items");
    }

    public void clickLink(){
        clickElement(By.id(btnLINK_ID));
    }
    public void clickLink_linkedItems(){
        clickElement(By.id(btn_LINK));
    }

    private static final String ddTARGET_APPLICATION_FIRST = "Target Application";
    private static final String ddTARGET_APPLICATION_SECOND = "Fld-SourceRelationshipType";

    public void selectTargetApplicationFirst(String value){
        selectDropDownNameAndValue(ddTARGET_APPLICATION_FIRST,value, false);
    }
    public void selectTargetApplicationSecond(String value){
        selectDropDownNameAndValue(ddTARGET_APPLICATION_SECOND,value, false);
    }
    public void enterNamePlus(String name_plus) {
        driver.findElement(By.id(txtNAME_PLUS_ID)).sendKeys(name_plus);
    }

    public void clickSearchForDropdown() {
        driver.findElement(By.id(ddSEARCH_FOR_ID)).click();
    }

    public void selectAllCiDdValue() {
        selectDropDownValue(ddValueALL_CIS);
    }

    public void clickCiSearchButton() {
        wait(500);
        driver.findElement(By.id(btnCI_SEARCH)).click();
        wait(500);
    }

    public void clickCloseButton() {
        wait(1000);
        driver.findElement(By.id(btnClOSE)).click();

    }

    public void closeWarningMessage()
    {
        findElement(By.id(btnCLOSEOnWarningMessage)).click();
        wait(1000);
    }

    public void clickClearButton() {
        driver.findElement(By.id(btnCLEAR)).click();
    }

    public void clickRelateCiButton() {
        driver.findElement(By.id(btnRELATE_CI)).click();
        wait(1500);
    }

    public void clickToSelectCi() {
        wait(500);
        findElement(By.xpath(chkbxTO_SELECT_CI)).click();

    }
    public void selectLevel(String value){
        wait(500);
        selectDropDownNameAndValue(ddLEVEL, value, false);
        wait(500);
    }

   public List<WebElement> tableRows(){
        return getTableRows(By.id(Table_ID));
   }
   public List<WebElement> ciDiagnosisTableRows(){
        return getTableRows(By.id(CI_DIAGNOSIS_TABLE_ID));
   }
}
