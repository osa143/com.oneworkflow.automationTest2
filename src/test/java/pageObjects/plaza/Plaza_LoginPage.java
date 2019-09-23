package pageObjects.plaza;

import org.openqa.selenium.By;
import pageObjects.BasePage;
import utils.PlazaValidation;

public class Plaza_LoginPage extends BasePage {

    private static final String url= "https://teliacomtest.service-now.com/login.do";
    private static final String txt_username= "user_name";
    private static final String txt_password= "user_password";
    private static final String btn_login= "sysverb_login";

    private void enterUsername(String username){
        enterTextByElement(By.id(txt_username), username);
    }
    private void enterPassword(String password){
        enterTextByElement(By.id(txt_password), password);
    }
    private void clickLoginButton(){
        clickElement(By.id(btn_login));
    }

    public void openURL(){
        driver.get(url);
    }
    public void doLogin(String username, String password){
        PlazaValidation.UserName = username;
        enterUsername(username);
        enterPassword(password);
        clickLoginButton();
    }
}
