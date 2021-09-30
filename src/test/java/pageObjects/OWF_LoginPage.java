package pageObjects;

import extentreports.service.ExtentService;
import org.apache.commons.collections.bag.SynchronizedSortedBag;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

import java.sql.SQLOutput;

public class OWF_LoginPage extends BasePage {

    private static final String txtUSERNAME = "username-id";
    private static final String txtPASSWORD = "pwd-id";
    private static final String btnLOGIN = "login";
    private static final String txtNewUSERNAME = "username";
    private static final String txtNewPASSWORD = "password";

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
        System.out.println("Entered username is - "+username);
        enterPassword(password);
        System.out.println("Entered password is - "+password);
        clickLogin();
    }

    public void enterNewUsername(String username){
        driver.findElement(By.id(txtNewUSERNAME)).sendKeys(username);
    }

    public void enterNewPassword(String password){
        driver.findElement(By.id(txtNewPASSWORD)).sendKeys(password);
        driver.findElement(By.id(txtNewPASSWORD)).sendKeys(Keys.RETURN);
    }

    public void doNewLogin(String username, String password){
        enterNewUsername(username);
        System.out.println("Entered username is - "+username);
        enterNewPassword(password);
        System.out.println("Entered password is - "+password);
    }

    //TO Do: Update to have same variable APPURL path
    public void goBacktoLoginPage(){
        driver.navigate().to("https://td777lb-mtint.ddc.teliasonera.net/arsys/shared/login.jsp?/arsys/home");
    }

}
