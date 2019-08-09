package pageObjects;

import io.cucumber.datatable.DataTable;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import java.util.List;

public class OWF_ChangeRecordPage extends BaseRecordPage {


    private static final String btnSEND = "WIN_0_600002905";
    private static final String ddANSWER= "Answer";
    private static final String btnDOWN = "reg_img_700050252";
    private static final String ddREQUEST_CATEGORY = "Request Category*";
    private static final String dd_CHANGE_TYPE= "arid_WIN_0_755000000";
    private static final String txt_SEARCH_FILTER_CALENDAR= "combo-1017-inputEl";
    private static final String txt_SEARCH_FILTER_CALENDAR_XPATH= "//*[@id='combo-1017-inputEl']";
    private static final String btn_CHANGE_RECORD= "button-1052";
    private static final String dd_STATUS= "Status";
    private static final String btn_SEARCH= "WIN_0_700506222";
    private static final String btn_clear= "WIN_0_700506223";
    private static final String txt_LOCATION_ID_PLUS= "arid_WIN_0_777031006";
    private static final String table_SELECT_TARGET_LOCATION= "T700506101";
    private static final String btn_CANCEL= "WIN_0_777000001";
    private static final String txt_LOCATION_NAME_PLUS= "arid_WIN_0_777031430";
    private static final String btn_CANCEL_LOCATION= "WIN_0_700000105";
    private static final String table_SELECT_LOCATION= "T700024013";
    private static final String btn_ADVANCED_SEARCH= "WIN_0_777505104";
    private static final String txt_ADVANCED_SEARCH= "arid1005";
    private static final String txt_RISK_SCORE= "arid_WIN_0_700050316";
    private static final String txt_OWNER_PROFILE= "arid_WIN_0_777031401";
    private static final String txt_OWNER= "arid_WIN_0_777031400";
    private static final String btn_SHOW_CR_MATCHING= "WIN_0_600002901";
    private static final String div_SHOW_CR_MATCHING= "WIN_0_999000247";
    private static final String txt_EMAIL_ADDRESS= "arid_WIN_0_700027017";
    private static final String btn_ADD_EMAIL= "WIN_0_600002906";
    private static final String txt_PROJECT_CODE= "arid_WIN_0_700007053";


    public boolean verifyProjectCodeIsReadOnly(){
        return checkIfControlIsReadonly(txt_PROJECT_CODE);
    }


    public boolean verifySendButtonIsEnable(){
        return verifyElementIsEnabledByElement(By.id(btnSEND));
    }
    public void clickAddEmail(){
        clickElement(By.id(btn_ADD_EMAIL));
    }

    public void enterEmail(String text){
        enterTextByElement(By.id(txt_EMAIL_ADDRESS), text);
    }

    public boolean verifyShowCrDivIsDisplayed(){
        return verifyElementIsDisplayed(By.id(div_SHOW_CR_MATCHING));
    }

    public void clickShowCrMatching(){
        clickElement(By.id(btn_SHOW_CR_MATCHING));
    }


    public String getOwnerProfile(){
        return getAttributeValueById(txt_OWNER_PROFILE);
    }
    public String getOwner(){
        return getAttributeValueById(txt_OWNER);
    }

    public String getRiskScore(){
        return getAttributeValueById(txt_RISK_SCORE);
    }

    public void enterAdvancedSearch(String text){
        enterTextByElement(By.id(txt_ADVANCED_SEARCH), text);
    }

    public void clickAdvancedSearch(){
        clickElement(By.id(btn_ADVANCED_SEARCH));
        wait(2000);
    }

    public void clickCancel(){
        clickElement(By.id(btn_CANCEL_LOCATION));
    }


    public void enterLocationNamePlus_selectTarget(String text){
        enterTextByElement(By.id(txt_LOCATION_NAME_PLUS), text);
    }


    public void clickCancel_selectTarget(){
        clickElement(By.id(btn_CANCEL));
    }

    public void enterLocationIDPlus_SelectTarget(String text){
        enterTextByElement(By.id(txt_LOCATION_ID_PLUS), text);
    }

    public void clickSearch_selectTarget(){
        clickElement(By.id(btn_SEARCH));
    }
    public void clickClear_selectTarget(){
        clickElement(By.id(btn_clear));
    }
    public List<WebElement> TableRows() {
        return getTableRows(By.id(table_SELECT_LOCATION));
    }
    public void validateCiDetailsForMultipleLocationsName(DataTable locationNamePlus)
    {
        List<List<String>> locations = locationNamePlus.asLists(String.class);
        for (int i = 1; i < locations.size(); i ++) {
            System.out.println("location is: " + locations.get(i).get(0));
            enterLocationNamePlus_selectTarget(locations.get(i).get(0));
            enterSendKeys(By.id(txt_LOCATION_NAME_PLUS));
            wait(1000);
            driver.switchTo().parentFrame();
            switchToFrameByIndex(2);
            switchToFrameByIndex(1);
            int size = TableRows().size();
            System.out.println("table size is : "+size);
            boolean ciDetailsDisplayed = size > 1 ? true: false;
            Assert.assertTrue(ciDetailsDisplayed, "CI details are not displayed");
            clickCancel();
            switchToFrameByIndex(2);
            wait(1000);

        }
    }

    public void validateCiDetailsForMultipleLocationsID(DataTable locationIdPlus)
    {
        List<List<String>> locations = locationIdPlus.asLists(String.class);
        for (int i = 1; i < locations.size(); i ++) {
            System.out.println("location is: " + locations.get(i).get(0));
            enterLocationIDPlus_SelectTarget(locations.get(i).get(0));
            enterSendKeys(By.id(txt_LOCATION_ID_PLUS));
            wait(1000);
            driver.switchTo().parentFrame();
            switchToFrameByIndex(2);
            switchToFrameByIndex(1);
            int size = TableRows().size();
            boolean ciDetailsDisplayed = size > 1 ? true: false;
            Assert.assertTrue(ciDetailsDisplayed, "CI details are not displayed");
            clickCancel();
            switchToFrameByIndex(2);
            wait(1000);
        }
    }

    public void selectStatus(String value){
        selectDropDownNameAndValue(dd_STATUS, value, false);
    }

    public void enterSearch_calendar(String text){
        enterTextByElement(By.xpath(txt_SEARCH_FILTER_CALENDAR_XPATH), text);
        findElement(By.xpath(txt_SEARCH_FILTER_CALENDAR_XPATH)).sendKeys(Keys.ENTER);
    }

    public void clickChange_Record(){
        clickElement(By.id(btn_CHANGE_RECORD));
    }

     public void selectChangeType(String value){
         findElement(By.id(dd_CHANGE_TYPE)).click();
         wait(500);
         selectDropDownValue(value);
     }
    public void selectAnswer(String value){
        selectDropDownNameAndValue(ddANSWER,value,false);
    }

    public void clickSendButton() {
        driver.findElement(By.id(btnSEND)).click();
        wait(1000);
    }
    public void clickDownButton(){
        driver.findElement(By.id(btnDOWN)).click();
    }
    public void selectRequestCategoryOnChangeRecordPage(String value){
        selectDropDownNameAndValue(ddREQUEST_CATEGORY, value, false);

    }


}
