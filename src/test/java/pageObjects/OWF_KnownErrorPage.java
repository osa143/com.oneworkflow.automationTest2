package pageObjects;

import org.openqa.selenium.By;

public class OWF_KnownErrorPage extends BasePage {

    private static final String btnADD_ID = "WIN_0_705002007";
    private static final String ddTYPE = "Type";
    private static final String rbtnUSER = "WIN_0_rc0id700027222";
    private static final String ddREQUEST_TYPE = "Request Type";

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
