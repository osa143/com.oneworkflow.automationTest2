package pageObjects;

import org.openqa.selenium.By;

public class OWF_ChangeRecordPage extends BaseRecordPage {


    public static final String btnSEND = "WIN_0_600002905";
    public static final String ddANSWER= "Answer";
    public static final String btnDOWN = "reg_img_700050252";
    private static final String ddREQUEST_CATEGORY = "Request Category*";


    public void selectAnswer(String value){
        selectDropDownNameAndValue(ddANSWER,value,false);
    }

    public void clickSendButton() {
        driver.findElement(By.id(btnSEND)).click();
    }
    public void clickDownButton(){
        driver.findElement(By.id(btnDOWN)).click();
    }
    public void selectRequestCategoryOnChangeRecordPage(String value){
        selectDropDownNameAndValue(ddREQUEST_CATEGORY, value, false);

    }


}
