package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import utils.DriverSetUp;

public class OWF_LoginPage extends BasePage{

    private static final String txtUSERNAME = "username-id";
    private static final String txtPASSWORD = "pwd-id";
    private static final String btnLOGIN = "login";

    public String getTitle()
    {
       return driver.getTitle();
    }

    public void enterUsername(String username) {

        driver.findElement(By.id(txtUSERNAME)).sendKeys(username);
    }

    public void enterPassword(String password)
    {
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
