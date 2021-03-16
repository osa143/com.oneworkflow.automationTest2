package pageObjects.BMC_Helix;

import org.openqa.selenium.By;
import pageObjects.BasePage;

import java.sql.SQLOutput;

public class BMC_Helix_LoginPage extends BasePage {

    private String txt_username_ID = "username-id";
    private String txt_password_ID = "pwd-id";
    private String btn_login_ID = "login";
    private String btn_logout_ID = "WIN_0_300000044";
    private String msg_Logout_ClassName = "Logout";
    private String msg_invalid_logout_ClassName = "login-error-message";

    public String getErrorMessage(){
        String inverrormessage = getElementText(By.className(msg_invalid_logout_ClassName));
        System.out.println("Invalid Error Message is - " + inverrormessage);
        return inverrormessage;
    }

    public String confirmLogOut(){
        String logoutmsg = getElementText(By.className(msg_Logout_ClassName));
        System.out.println("Logout Message is: " + msg_Logout_ClassName);
        return logoutmsg;
    }

    public void getBMC_URL(String url){
        driver.get(url);
    }

    public void enterTextIntoElement(By element, String elementText){
        driver.findElement(element).sendKeys(elementText);
    }

    public boolean elementDisplayedOrNot(By element){
        boolean result = driver.findElement(element).isDisplayed();
        return result;
    }

    public String getElementText(By element){
        String elementText = driver.findElement(element).getText();
        System.out.println("Element Text is: " + elementText);
        return elementText;
    }

    public void enterTextIntoElementByID(String elementID, String elementText){
        driver.findElement(By.id(elementID)).sendKeys(elementText);
    }

    public String getHomePageTitle(){
        String pageTitle = driver.getTitle();
        System.out.println("Page Title is: " + pageTitle);
        return pageTitle;
    }

    public void clickElementbyID(String elementID){
        driver.findElement(By.id(elementID)).click();
    }

    public void enterUserName(String username){
        enterTextIntoElement(By.id(txt_username_ID), username);
    }

    public void enterPassword(String password){
        enterTextIntoElementByID(txt_password_ID, password);
    }

    public void clickLoginButton(){
        clickElementbyID(btn_login_ID);
    }

    public void clickLogoutButton(){
        clickElementbyID(btn_logout_ID);
    }

    public String getusernameText(){
        return getElementText(By.id(txt_username_ID));
    }

    public boolean usernameDisplayed(){
       return elementDisplayedOrNot(By.id(txt_username_ID));
    }




}
