package pageObjects;

import io.cucumber.datatable.DataTable;
import org.apache.commons.lang3.ObjectUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import java.util.List;

public class OWF_CiSearchPage extends BaseRecordPage {

    private static final String btnRELATE_CI = "WIN_0_700009085";
    private static final String btnClOSE =  "WIN_0_777000001";
    private static final String btnCLOSEOnWarningMessage = "ardivpcl";
    private static final String btnCLEAR = "WIN_0_700009116";
    private static final String btnCI_SEARCH = "WIN_0_700009021";
    private static final String btnLINK_ID = "WIN_4_777506009";
    private static final String btn_LINK = "WIN_5_777506009";
    private static final String btnACCEPT_ID = "WIN_0_730011058";
    private static final String txtLOCATION_ID = "arid_WIN_0_700009015";
    private static final String btnCREATE_linked_items = "WIN_5_777506020";
    private static final String btn_CREATE_linked_items= "WIN_5_777506020";
    private static final String chkbxTO_SELECT_CI = "//*[@id='T700009024']/tbody/tr[2]";
    private static final String rbtn_CLEARED_ID = "WIN_4_rc0id800040060";
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
    private static final String txt_IMPACT_TYPE= "arid_WIN_0_700009080";
    private static final String txt_IMPACT_CATEGORY="arid_WIN_0_700009081";
    private static final String txt_IMPACT_LEVEL="arid_WIN_0_700009082";
    private static final String txt_TOTAL_ROWS= "arid_WIN_0_800038068";
    private static final String txt_ROWS_OK= "arid_WIN_0_800038071";
    private static final String btn_UPLOAD_IMPORT_FILE="WIN_0_536870926";
    private static final String rbtn_WITH_ERRORS= "WIN_0_rc4id7";
    private static final String fld_DOCUMENT_AREA= "arid_WIN_0_800038110";
    private static final String txt_IMPORT_START_DATE= "arid_WIN_0_800038001";
    private static final String txt_IMPORT_END_DATE= "arid_WIN_0_800038002";
    private static final String txt_IMPORT_DURATION="arid_WIN_0_800038004";
    private static final String txt_WITH_ERRORS="arid_WIN_0_800038070";
    private static final String row3_BILK_LOADING_RELATED_JOBS="//*[@id='T800038059']/tbody/tr[4]";
    private static final String txt_REQUEST_ID="arid_WIN_0_1";
    private static final String txt_BIR_GUID="arid_WIN_0_179";
    private static final String txt_SUBMITTER = "arid_WIN_0_2";
    private static final String txt_CREATE_DATE= "arid_WIN_0_3";
    private static final String txt_LAST_MODIFIED= "arid_WIN_0_5";
    private static final String txt_MODIFIED_DATE= "arid_WIN_0_6";
    private static final String txt_WITH_WARNINGS= "arid_WIN_0_800038069";
    private static final String PRIMARY_CI= "//*[@id='T700009087']/tbody/tr[2]/td[2]/nobr/span";
    private static final String bulkCILoading_DIV_ID = "WIN_0_800038059";
    private static final String rbtn_IGNORE_HANDLING_DUPLICATE_CIS= "WIN_0_RCGroup800038013";
    private static final String txt_IMPACT_TO_PLUS_BULK_UPDATE= "arid_WIN_0_999000299";
    private static final String btn_RADIOOPEN_ID = "WIN_4_rc0id800040059";
    private static final String btn_RADIOCLOSED_ID = "WIN_4_rc0id800040061";
    private static final String btn_RADIOCleared_ID = "WIN_4_rc0id800040060";
    private static final String txt_Impact_From_CI_Search= "arid_WIN_0_700009083";
    private static final String btn_Refresh= "//*[@id='WIN_0_700009087']/div[1]/table/tbody/tr/td[2]/a[2]";
    private static final String ddTARGET_APPLICATION_FIRST = "Target Application";
    private static final String ddTARGET_APPLICATION_SECOND = "Fld-SourceRelationshipType";


    public void clickRefresh_Diagnosis(){
        wait(1000);
        clickElement(By.xpath(btn_Refresh));
        wait(500);
    }

    public String getImpactFromDateCiSearchWindow(){
        String ImpactFromDate= getTextByID(txt_Impact_From_CI_Search);
        System.out.println("Get Text values is - " +ImpactFromDate);
        return ImpactFromDate;
    }

    public boolean isOpenRadioButtonSelected(){
        return findElement(By.id(btn_RADIOOPEN_ID)).isSelected();
    }

    public boolean isClearedRadioButtonSelected(){
        return driver.findElement(By.id(btn_RADIOCleared_ID)).isSelected();
    }

    public boolean isClosedRadioButtonSelected(){
        return findElement(By.id(btn_RADIOCLOSED_ID)).isSelected();
    }

    public void clickClosedRadioButton_linkedItems(){
        driver.findElement(By.id(btn_RADIOCLOSED_ID)).click();
    }


    public void clickOpenRadioButton_linkedItems(){
        driver.findElement(By.id(btn_RADIOOPEN_ID)).click();
    }




    public void addCIsToTicket(DataTable CiName, String CI_Impact) {
        clickDiagnosis();
        clickCiSearch();
        int size = driver.findElements(By.tagName("iframe")).size();
        switchToFrameByIndex(size-1);
        List<List<String>> Cis = CiName.asLists(String.class);
        for (int i = 1; i < Cis.size(); i++) {
            System.out.println("CI Name is: " + Cis.get(i).get(0));
            clickClearButton();
            enterNamePlus(Cis.get(i).get(0));
            clickCiSearchButton();
            clickToSelectCi();
            selectLevel(CI_Impact);
            clickRelateCiButton();
            clickYesOnConfirmationMessage();
            //closeWarningMessage();
        }
        clickCloseButton();
        switchToDefault();
    }

    public void addCI(String CIName, String CI_Impact){
        clickDiagnosis();
        clickCiSearch();
        int size = driver.findElements(By.tagName("iframe")).size();
        switchToFrameByIndex(size-1);
        clickClearButton();
        enterNamePlus(CIName);
        clickCiSearchButton();
        clickToSelectCi();
        selectLevel(CI_Impact);
        if(getImpactFromDateCiSearchWindow().equals("")||getImpactFromDateCiSearchWindow().equals(null))
        {
            driver.findElement(By.id(txt_Impact_From_CI_Search)).sendKeys(Keys.ENTER);
        }
        clickRelateCiButton();
        clickYesOnConfirmationMessage();
       // closeWarningMessage();
        wait(3000);
        clickCloseButton();
        switchToDefault();
        wait(3000);

    }

    public void addCI_ToChangeTicket(String CIName, String CI_ImpactLevel){
        clickDiagnosis();
        clickCiSearch();
        int size = driver.findElements(By.tagName("iframe")).size();
        switchToFrameByIndex(size-1);
        clickClearButton();
        enterNamePlus(CIName);
        clickCiSearchButton();
        clickToSelectCi();
        selectLevel(CI_ImpactLevel);
        clickRelateCiButton();
        wait(1000);
        closeWarningMessage_changeTicket();
        //clickOk_OnPop_up();
        clickCloseButton();
        switchToDefault();
    }
    public void enterImpactTo(String text){
        findElement(By.id(txt_IMPACT_TO_PLUS_BULK_UPDATE)).clear();
        findElement(By.id(txt_IMPACT_TO_PLUS_BULK_UPDATE)).sendKeys(text);
    }
    public void clickCheckBoxHeader(){
        clickElement(By.className("checkboxheader"));
    }

    public void clickIgnoreHandlingDuplicateCis(){
        clickElement(By.name(rbtn_IGNORE_HANDLING_DUPLICATE_CIS));
    }

    public String getPrimaryCI(){
        String primaryCI= getTextByElement(By.xpath(PRIMARY_CI));
        System.out.println("The primary CI is : " + primaryCI);
        return primaryCI;
    }

    public String getCI_Name(String columnName, int rowNum){
        return getTableCellData(By.id(CI_DIAGNOSIS_TABLE_ID), columnName, rowNum);
    }

    public String getWithWarnings(){
        return getAttributeValueById(txt_WITH_WARNINGS);
    }
    public void verifyFieldsGotUpdated(){
        Assert.assertNotEquals(getRequestId(), "");
        Assert.assertNotEquals(getBIRGUID(), "");
        Assert.assertNotEquals(getSubmitter(), "");
        Assert.assertNotEquals(getCreateDate(), "");
        Assert.assertNotEquals(getLastModified(), "");
        Assert.assertNotEquals(getModifiedDate(), "");
        Assert.assertNotEquals(getImportDuration(), "");
        Assert.assertNotEquals(getImportStartTime(), "");
        Assert.assertNotEquals(getImportEndTime(), "");

    }

    public String getImpactToPlus(){
        String impactToPlus= getAttributeValueById(txt_IMPACT_TO_PLUS);
        System.out.println(impactToPlus);
        return impactToPlus;
    }

    public String getRequestId(){
        return getAttributeValueById(txt_REQUEST_ID);
    }

    public String getBIRGUID(){
        return getAttributeValueById(txt_BIR_GUID);
    }
    public String getSubmitter(){
        return getAttributeValueById(txt_SUBMITTER);
    }
    public String getCreateDate(){
        return getAttributeValueById(txt_CREATE_DATE);
    }

    public String getLastModified(){
        return getAttributeValueById(txt_LAST_MODIFIED);
    }
    public String getModifiedDate(){
        return getAttributeValueById(txt_MODIFIED_DATE);
    }

    public String getImportDuration(){
        return getAttributeValueById(txt_IMPORT_DURATION);
    }

    public String getImportStartTime(){
        return getAttributeValueById(txt_IMPORT_START_DATE);
    }
    public String getImportEndTime(){
        return getAttributeValueById(txt_IMPORT_END_DATE);
    }
    public void clearTextManualCiSearchBox(){
        findElement(By.id(txt_MANUAL_CI_SEARCH_BOX)).clear();
    }
   public String getImpactFrom(){
       String impactFrom=getAttributeValueById(txt_IMPACT_FROM);
       System.out.println(impactFrom);
       return impactFrom;
   }
    public void clickRow3(){
        clickElement(By.xpath(row3_BILK_LOADING_RELATED_JOBS));
    }
    public String getWithErrors(){
        return getAttributeValueById(txt_WITH_ERRORS);
    }




    public boolean verifyRelatedCisTableValues(String columnName, String columnValue){
        return verifyColumnValuesMultiple(By.id(table_BULK_CI_LOADING_RELATED_CIS), columnName, columnValue, false);
    }

    public boolean verifyWithErrorsIsDisplayed(){
        return verifyElementIsDisplayed(By.id(rbtn_WITH_ERRORS));
    }
    public boolean verifyDocumentIsDisplayed(){
        return verifyElementIsDisplayed(By.id(fld_DOCUMENT_AREA));
    }

   public void ClickBulkCiloadingTableElement(String columnName, String text){
       ClickTableElementByText(By.id(table_BULK_CI_LOADING_RELATED_JOBS), columnName, text, false);
   }
    public void clickUploadImportFile(){
        clickElement(By.id(btn_UPLOAD_IMPORT_FILE));
    }
    public String getTotalRows(){
        return getAttributeValueById(txt_TOTAL_ROWS);
    }

    public boolean isColumnDisplayedByDivId(String columnName)
    {
        return isColumnDisplayedByDivId(columnName, bulkCILoading_DIV_ID);
    }
    public String getRowsOk(){
        return getAttributeValueById(txt_ROWS_OK);
    }
    public boolean verifyBulkCILoadingColumnValues(String columnValues){
        return verifyColumnNames(columnValues, By.id(table_BULK_CI_LOADING_RELATED_JOBS));
    }

    public boolean verifyImpactTypeDropdownValues(String statuses, String dropdownName){
        return verifyDropdownValues(statuses, dropdownName, txt_IMPACT_TYPE);
    }

    public String getImpactType(){
        return getAttributeValueById(txt_IMPACT_TYPE);
    }
    public String getImpactCategory(){
        return getAttributeValueById(txt_IMPACT_CATEGORY);
    }
    public String getImpactLevel(){
        return getAttributeValueById(txt_IMPACT_LEVEL);
    }

    public void enterImpactToPlus(String text){
       findElement(By.id(txt_IMPACT_TO_PLUS)).clear();
        enterTextByElement(By.id(txt_IMPACT_TO_PLUS), text);
    }

    public boolean verifyErrorText1(String text){
        driver.switchTo().parentFrame();
        driver.switchTo().frame(2);
        driver.switchTo().frame(1);
        return true;
//        String error= findElement(By.xpath(txt1_ERROR_MESSAGE)).getText();
//        System.out.println("Error message is: " +error);
//        if(error.contains(text))
//        return true;
//        else return false;
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
        wait(2000);
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
        wait(1000);
    }


    public void clickSave_bulkCiLoadingWindow(){
        clickElement(By.id(btn_SAVE_BULK_CI));
    }

    public void enterManualCiSearch(String text){
       findElement(By.id(txt_MANUAL_CI_SEARCH_BOX)).clear();
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

    public static void enterImpactFrom(){
        driver.findElement(By.id(txt_IMPACT_FROM)).sendKeys(Keys.ENTER);
    }
    public void enterImpactFrom(String text){
       findElement(By.id(txt_IMPACT_FROM)).clear();
        findElement(By.id(txt_IMPACT_FROM)).sendKeys(text);
    }


    public void clickRiskTab(){
        clickElement(By.xpath("//a[contains(text(), 'Risk')]"));
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
        wait(1000);
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


    public void selectTargetApplicationFirst(String value){
        selectDropDownNameAndValue(ddTARGET_APPLICATION_FIRST,value, false);
    }
    public void selectTargetApplicationSecond(String value){
        selectDropDownNameAndValue(ddTARGET_APPLICATION_SECOND,value, false);
    }
    public static void enterNamePlus(String name_plus) {
        WebElement NamePlusField= driver.findElement(By.id(txtNAME_PLUS_ID));
        NamePlusField.clear();
        NamePlusField.sendKeys(name_plus);
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
        wait(2000);
        driver.findElement(By.id(btnClOSE)).click();
        driver.switchTo().defaultContent();

    }

    public void closeWarningMessage_changeTicket()
    {
        try {
            clickElementById("ardivpcl");
            wait(1000);
            driver.switchTo().frame(1);

            clickElementByContainsTextAndTagName("a", "OK");
            wait(1000);
            driver.switchTo().defaultContent();
            driver.switchTo().frame(2);
            wait(1000);
        }
        catch (Exception ex)
        {
            driver.switchTo().frame(1);
            driver.switchTo().parentFrame();
            driver.switchTo().frame(1);
            clickElementByContainsTextAndTagName("a", "OK");
            wait(1000);
            driver.switchTo().defaultContent();
            driver.switchTo().frame(2);
            wait(1000);
        }
    }

    public void clickYesOnConfirmationMessage(){
        driver.switchTo().frame(1);
        wait(1000);
        clickElement(By.id("ardivpcl"));
        wait(1000);
        driver.switchTo().defaultContent();
        driver.switchTo().frame(2);
    }
    public void closeWarningMessage()
    {
        driver.switchTo().frame(1);
        driver.switchTo().frame(0);
        driver.switchTo().parentFrame();
        driver.switchTo().frame(1);
        clickElementByContainsTextAndTagName("a", "OK");
        wait(1000);
        driver.switchTo().defaultContent();
        driver.switchTo().frame(2);
        wait(1000);
    }

    public static void clickClearButton() {
        driver.findElement(By.id(btnCLEAR)).click();
    }

    public void clickRelateCiButton() {
        clickElementByContainsTextAndTagName("div", "Relate CI");
        //driver.findElement(By.id(btnRELATE_CI)).click();
        wait(1500);
    }

    public static void clickToSelectCi() {
        driver.findElement(By.xpath(chkbxTO_SELECT_CI)).click();


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
