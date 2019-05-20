package pageObjects;

import org.openqa.selenium.By;

public class OWF_LoginPage extends BasePage {

    public static final String txtUSERNAME = "username-id";
    public static final String txtPASSWORD = "pwd-id";
    public static final String btnLOGIN = "login";

    public void enterUsername(String username) {
        driver.findElement(By.id(txtUSERNAME)).sendKeys(username);
    }

    public void enterPassword(String password) {
        driver.findElement(By.id(txtPASSWORD)).sendKeys(password);
    }

    public void clickLogin() {

        driver.findElement(By.id(btnLOGIN)).click();
    }

    public void doLogin(String username, String password) {
        enterUsername(username);
        enterPassword(password);
        clickLogin();
    }


}
