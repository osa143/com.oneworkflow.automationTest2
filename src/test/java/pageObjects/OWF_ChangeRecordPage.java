package pageObjects;

import org.openqa.selenium.By;
import utils.CommonUtils;

public class OWF_ChangeRecordPage extends BaseRecordPage {


    public static final String btnSEND = "WIN_0_600002905";

    public void clicksendButton(){
        driver.findElement(By.id(btnSEND)).click();
    }


}
