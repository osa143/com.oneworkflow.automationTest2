package pageObjects;

import org.openqa.selenium.By;

public class OWF_AlertConsolePage extends BasePage {

    private static final String btnOPEN ="WIN_0_700010195";
    private static final String btnDELETE = "WIN_0_700010196";
    private static final String btnMARK_AS_READ = "WIN_0_700010197";
    private static final String btnMARK_AS_UNREAD = "WIN_0_700010198";


    public void clickOpenButton(){
        driver.findElement(By.id(btnOPEN)).click();
    }
    public void clickDeleteButton(){
        driver.findElement(By.id(btnDELETE)).click();
    }
    public void clickMarkAsReadButton(){
        driver.findElement(By.id(btnMARK_AS_READ)).click();
    }
    public void clickMarkAsUnReadButton(){
        driver.findElement(By.id(btnMARK_AS_UNREAD)).click();
    }
}
