package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import java.util.List;

public class SecurityConsolePage extends BasePage {

    private static final String btn_NewClient= "reg_img_8000030";
    private static final String txt_ClientName= "arid_WIN_0_8000000";
    private static final String txt_User= "arid_WIN_0_8000006";
    private static final String txt_Summary="arid_WIN_0_80000001";
    private static final String btn_Submit="WIN_0_8000001";
    private static final String btn_Close = "ardivpcl";
    private static final String btn_NewOperation=  "reg_img_8000031";
    private static final String txt_OperationName= "arid_WIN_0_8000000";
    private static final String btn_Pencil_Icon= "reg_img_536870923";
    private static final String txt_ClientName_="arid_WIN_0_8000001";
    private static final String btn_Confirm="reg_img_536870924";
    private static final String btn_Enable= "reg_img_8000004";
    private static final String table_Request= "T536870940";
    private static final String btn_Edit_GUID= "reg_img_536870915";
    private static final String txt_New_GUID_ID= "arid_WIN_0_8000000";
    private static final String btn_Disable= "reg_img_8000005";
    private static final String btn_Reset= "reg_img_8000003";
    private static final String btn_RemoveClient= "reg_img_536870921";
    private static final String btn_RemoveOperation = "reg_img_536870922";
    private static final String btn_Home = "reg_img_536870920";
    private static final String txt_Current_GUID= "arid_WIN_0_8000006";

   public void selectPreferences(String preferences){
       clickPreferences(table_Request);
       setPreferences(preferences);
   }
    public void clickHome(){
        clickElementById(btn_Home);
    }

    public void removeOperation(){
        clickElementById(btn_RemoveOperation);
    }

   public boolean verifyClientIsPresent(String clientName,String dropdownName, String dropdownId){
       List<String> dropdownValues = getDropdownValues(dropdownName, dropdownId);
       clickEscButton();

       System.out.println("Dropdown values are: " + dropdownValues);

           if (!dropdownValues.contains(clientName))
           {
               return false;
           }

              return true;

   }
    public void clickRemoveClient(){
        clickElementById(btn_RemoveClient);
    }
 public boolean verifyAllEntriesAreCleared(){
     int tableEntries= getTableRows(By.id(table_Request)).size();
     if(tableEntries==0)
         return true;
     else return false;
 }
    public void clickReset(){
        clickElementById(btn_Reset);
    }
    public void clickDisable(){
        clickElementById(btn_Disable);
    }

    public String getCurrentGuidID(){
        return getAttributeValueById(txt_Current_GUID);
    }

    public void enterNewGUID_ID(String new_guid_id) {
        enterTextByElement(By.id(txt_New_GUID_ID), new_guid_id);

    }
    public void clickEdit_Guid(){
        clickElementById(btn_Edit_GUID);
        switchToFrameByIndex(1);
    }
    public String get_API_operation(String columnName, int rowNum){
        return getTableCellData(By.id(table_Request),columnName,rowNum);
    }

    public void clickEnable(){
        clickElementById(btn_Enable);
    }

    public void clickConfirm(){
        clickElementById(btn_Confirm);
    }
    public void enterUser(String user) {
        clearText(By.id(txt_User));
        enterTextByElement(By.id(txt_User), user);

    }
    public boolean verifyClientNameIsReadOnly(){
        return checkIfControlIsReadonlyByElement(By.id(txt_ClientName_));
    }
    public boolean verifyOperationIsReadOnly(){
        return checkIfControlIsReadonlyByElement(By.id(txt_OperationName));
    }
    public void clickPencilIcon(){
        clickElementById(btn_Pencil_Icon);
    }

    public boolean verifyUserIsReadOnly(){
        return checkIfControlIsReadonlyByElement(By.id(txt_User));
    }

    public void enterOperationName(String operationName){
        enterTextByElement(By.id(txt_OperationName), operationName);
    }

    public void clickCreateNewOperation(){
        clickElementById(btn_NewOperation);
       switchToFrameByIndex(1);

    }
    public void clickClose(){
        wait(1000);
        clickElementById(btn_Close);
        switchToDefault();
    }

    public void clickSubmit(){
        clickElementById(btn_Submit);
    }
    public void enterSummary(String summary){
        enterTextByElement(By.id(txt_Summary), summary);
    }
    public void EnterTextInUserAndSelectValue(String text){
       WebElement textBox_User=driver.findElement(By.id(txt_User));
       textBox_User.sendKeys(text);
       wait(1000);
       textBox_User.sendKeys(Keys.ARROW_DOWN);
       textBox_User.sendKeys(Keys.ARROW_DOWN);
        wait(500);
       textBox_User.sendKeys(Keys.ENTER);
    }
    public void clearUserFieldAndEnterText(String text){
        clearText(By.id(txt_User));
        enterTextByElement(By.id(txt_User), text);
    }
    public void clickCreateNewClient(){
        clickElementById(btn_NewClient);
        switchToFrameByIndex(1);

    }
    public void enterClientName(String clientName){
        enterTextByElement(By.id(txt_ClientName), clientName);
    }

    public void selectUserDropDown(String dropDownName, String dropDownValue){

    selectDropDownNameAndValue(dropDownName, dropDownValue, false);

}
   public String getChosenUser(){
        return getAttributeValueById(txt_User);


   }

     }
