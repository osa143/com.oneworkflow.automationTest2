package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class OWF_CiSearchPage extends BasePage {

    private static final String btnRELATE_CI = "WIN_0_700009085";
    private static final String btnClOSE = "WIN_0_777000001";
    private static final String btnCLEAR = "WIN_0_700009116";
    private static final String btnCI_SEARCH = "WIN_0_700009021";
    private static final String btnLINK_ID = "WIN_4_777506009";
    private static final String btnACCEPT_ID = "WIN_0_730011058";
    private static final String txtLOCATION_ID = "arid_WIN_0_700009015";
    private static final String ddValueDEGRADATION_OF_SERVICES = "Degradation of Service";
    private static final String ddValueLOSS_OF_SERVICE = "Loss of Service";
    private static final String ddValueNO_IMPACT = "No Impact";
    private static final String ddValueCLEAR = "(clear)";

    private static final String chkbxTO_SELECT_CI = "//input[class='colcheck']";

    private static final String txtNAME_PLUS = "arid_WIN_0_700009016";

    private static final String ddLEVEL = "Level";
    private static final String ddSEARCH_FOR_ID = "arid_WIN_0_700009236";

    private static final String ddValueALL_CIS = "All CIs";
    private static final String btnLINKED_ITEMS_XPATH= "//a[contains(text(), 'Linked Items')]";
    private static final String Table_ID = "T700009024";
    private static final String CI_DIAGNOSIS_TABLE_ID = "T700009087";

    public void enterLocation(String location){
        driver.findElement(By.id(txtLOCATION_ID)).sendKeys(location);
    }

    public void clickAcceptButton(){
        driver.findElement(By.id(btnACCEPT_ID)).click();
    }
    private static final String txtTICKET_ID_PLUS_ID= "arid_WIN_0_777777600";

    public void enterTicketIdPlus(String ticketId){
        driver.findElement(By.id(txtTICKET_ID_PLUS_ID)).sendKeys(ticketId);

    }
    public void clickLinkedItems(){
        selectTab("Linked Items");
    }

    public void clickLink(){
        driver.findElement(By.id(btnLINK_ID)).click();
    }

    private static final String ddTARGET_APPLICATION_FIRST = "Target Application";
    private static final String ddTARGET_APPLICATION_SECOND = "Fld-SourceRelationshipType";

    public void selectTargetApplicationFirst(String value){
        selectDropDownNameAndValue(ddTARGET_APPLICATION_FIRST,value, false);
    }
    public void selectTargetApplicationSecond(String value){
        selectDropDownNameAndValue(ddTARGET_APPLICATION_SECOND,value, false);
    }




    public void acceptAlert() {
        driver.switchTo().alert().accept();
    }

    public void enterNamePlus(String name_plus) {
        driver.findElement(By.xpath(txtNAME_PLUS)).sendKeys(name_plus);
    }

    public void clickSearchForDropdown() {
        driver.findElement(By.id(ddSEARCH_FOR_ID)).click();
    }

    public void selectAllCiDdValue() {
        selectDropDownValue(ddValueALL_CIS);
    }

    public void clickCiSearchButton() {
        driver.findElement(By.id(btnCI_SEARCH)).click();
    }

    public void clickCloseButton() {
        driver.findElement(By.id(btnClOSE)).click();
    }

    public void clickClearButton() {
        driver.findElement(By.id(btnCLEAR)).click();
    }

    public void clickLevelDropdown() {
        selectDropDownMenu(ddLEVEL);
    }

    public void selectDegradationOfServiceDropdownValue() {
        selectDropDownValue(ddValueDEGRADATION_OF_SERVICES);
    }

    public void selectLossOfServiceDropdownVale() {
        selectDropDownValue(ddValueLOSS_OF_SERVICE);
    }

    public void selectNoImpactDropdownValue() {
        selectDropDownValue(ddValueNO_IMPACT);
    }

    public void selectClearDropDownValue() {
        selectDropDownValue(ddValueCLEAR);
    }

    public void clickRelateCiButton() {
        driver.findElement(By.id(btnRELATE_CI)).click();
    }

    public void clickToSelectCi() {
        driver.findElement(By.xpath(chkbxTO_SELECT_CI)).click();
    }
    public void selectLevel(String value){
        selectDropDownNameAndValue(ddLEVEL, value, false);
    }

   public List<WebElement> tableRows(){
        return getTableRows(By.id(Table_ID));
   }
   public List<WebElement> ciDiagnosisTableRows(){
        return getTableRows(By.id(CI_DIAGNOSIS_TABLE_ID));
   }
}
