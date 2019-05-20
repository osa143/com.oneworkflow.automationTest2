package pageObjects;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.File;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class BasePage {

    public static WebDriver driver;

    public BasePage() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);

    }

    public void getURL(String appURL) {

        driver.get(appURL);
    }

    public void wait(int mills) {

        try {
            Thread.sleep(mills);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void selectMainMenu(String mainMenu) {

        String mainMenuXpath = "//img[@alt='Menu for " + mainMenu + "']/a";
        driver.findElement(By.xpath(mainMenuXpath)).click();
    }

    public void selectMenuItem(String menuItem) {
        driver.findElement(By.className("MenuTableBody")).findElements(By.tagName("td")).stream()
                .filter(element -> element.getText().equals(menuItem)).findFirst().orElse(null).click();

    }
    public void selectDropDownMenu(String DropDownMenu) {

        String mainMenuXpath = "//img[@alt='Menu for " + DropDownMenu + "']/a";
        driver.findElement(By.xpath(mainMenuXpath)).click();
    }

    public void selectDropDownValue(String DropDownValue) {
        driver.findElement(By.className("MenuTableBody")).findElements(By.tagName("td")).stream()
                .filter(element -> element.getText().equals(DropDownValue)).findFirst().orElse(null).click();

    }

    public void selectDropDown(String dropdownName, String dropdownValue) {

        String dropdownXpath = "//img[@alt='ReadOnly menu for " + dropdownName + "']/a";
        driver.findElement(By.xpath(dropdownXpath)).click();
        wait(500);

        String arr[] = dropdownValue.split(":");
        for (int i = 0; i < arr.length; i++) {
            final String temp = arr[i];
            driver.findElements(By.className("MenuTableBody")).get(i).findElements(By.tagName("td")).stream().filter(element -> element.getText().equals(temp)).findFirst().orElse(null).click();
            wait(500);
        }

    }
    //    preferences = "Menu1:Menu2"
    public void setPreferences(String preferences) {

        driver.findElement(By.id(preferences)).findElement(By.xpath("//a[contains(text(),'Preferences')]")).click();

        wait(500);

        String arr[] = preferences.split(":");
        for (int i = 0; i < arr.length; i++) {
            final String temp = arr[i];
            driver.findElements(By.className("MenuTableBody")).get(i).findElements(By.tagName("td")).stream().filter(element -> element.getText().equals(temp)).findFirst().orElse(null).click();
            wait(500);
        }
    }

    public void setfilterPreferences(String preferences) {

        driver.findElement(By.id(preferences)).findElement(By.xpath("//a[contains(text(),'Preferences')]")).click();

        wait(500);

        String arr[] = preferences.split(":");
        for (int i = 0; i < arr.length; i++) {
            final String temp = arr[i];
            driver.findElements(By.className("MenuTableBody")).get(i).findElements(By.tagName("td")).stream().filter(element -> element.getText().equals(temp)).findFirst().orElse(null).click();
            wait(500);
        }
    }

        public int getColumnIndexByHeaderName (String headerName){
            int columnIndex = -1;
            //Get all web elements with BaseTableHeader class name
            List<WebElement> tableHeaders = driver.findElements(By.className("BaseTableHeader"));

            for (int i = 0; i < tableHeaders.size(); i++) {

                if (tableHeaders.get(i).getText().trim().equals(headerName)) {
                    //Get the column index of the Site Name column
                    columnIndex = i;
                    break;
                }
            }
            return columnIndex;
        }


    public static File takeScreenShot(){
        return ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
    }

    public static byte[] takeScreenShotAsByteArray(){
        return ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
    }

    public void tearDown () {
        driver.close();
        driver.quit();

    }


    }


