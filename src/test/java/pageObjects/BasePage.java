package pageObjects;

import driver.factory.DriverFactory;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.testng.Assert;
import utils.DriverSetUp;

import java.io.File;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class BasePage{

    public static WebDriver driver;


    protected BasePage()
    {
        driver = DriverFactory.getInstance().getDriver();
    }

    public WebDriver getDriver(){
        return driver;
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

        String mainMenuXpath = "//img[@alt='Menu for " + mainMenu + "']/..";
        driver.findElement(By.xpath(mainMenuXpath)).click();
        wait(500);
    }

    public void selectMenuItem(String menuItem) {
        driver.findElement(By.className("MenuTableBody")).findElements(By.tagName("td")).stream()
                .filter(element -> element.getText().equals(menuItem)).findFirst().orElse(null).click();

    }
    public void selectDropDownMenu(String DropDownMenu) {

        String mainMenuXpath = "//img[@alt='Menu for " + DropDownMenu + "']/..";
        driver.findElement(By.xpath(mainMenuXpath)).click();
        wait(1000);
    }

    public void selectDropDownValue(String DropDownValue) {
        driver.findElement(By.className("MenuTableBody")).findElements(By.tagName("td")).stream()
                .filter(element -> element.getText().trim().equals(DropDownValue)).findFirst().orElse(null).click();

    }

    public void selectDropDown(String dropdownName, String dropdownValue, boolean readonly) {
        String dropdownXpath;
        if (readonly)
            dropdownXpath = "//img[@alt='ReadOnly menu for " + dropdownName + "']/..";
        else
            dropdownXpath = "//img[@alt='Menu for " + dropdownName + "']/..";

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

        wait(1000);

        String arr[] = preferences.split(":");
        for (int i = 0; i < arr.length; i++) {
            final String temp = arr[i];
            driver.findElements(By.className("MenuTableBody")).get(i).findElements(By.tagName("td")).stream().filter(element -> element.getText().equals(temp)).findFirst().orElse(null).click();
            wait(500);
        }
    }

    public void setFilterPreferences(String preferences) {

        driver.findElement(By.id(preferences)).findElement(By.xpath("//a[contains(text(),'Preferences')]")).click();

        wait(500);

        String arr[] = preferences.split(":");
        for (int i = 0; i < arr.length; i++) {
            final String temp = arr[i];
            driver.findElements(By.className("MenuTableBody")).get(i).findElements(By.tagName("td")).stream().filter(element -> element.getText().equals(temp)).findFirst().orElse(null).click();
            wait(500);
        }
    }

        public  static int getColumnIndexByHeaderName (String headerName){
            int columnIndex = -1;
            //Get all web elements with BaseTableHeader class name
            List<WebElement> tableHeaders = driver.findElement(By.className("BaseTableColHeaders")).findElements(By.className("BaseTableHeader"));

            for (int i = 0; i < tableHeaders.size(); i++) {
                //System.out.println("=== " + i + " === " + tableHeaders.get(i).getAttribute("innerHTML").trim() + " ===");

               if (tableHeaders.get(i).getAttribute("innerHTML").trim().equals(headerName)) {
                    //Get the column index using headerName
                   System.out.println("=== " + i + " === " + tableHeaders.get(i).getAttribute("innerHTML").trim() + " ===");
                    columnIndex = i;
                   break;
               }
            }
            return columnIndex;
        }

        public List<WebElement> getTableRows(String tableId)
        {
            List<WebElement> tableRows = driver.findElement(By.id(tableId)).findElements(By.tagName("tr"));
            return tableRows;
        }

        public boolean checkIfColumnHasData( String tableId, String columnName, int columnIndex)
        {
            boolean columnHasData = false;
            //Get all the table rows by Id
            List<WebElement> tableRows = getTableRows(tableId);

            String cellValue = null;

            if (columnIndex >= 0) {
                for (int i = 1; i < tableRows.size(); i++) {
                    //Get cell values for specified column
                    //this step is failing.
                    List<WebElement> elements = null;
                    try {
                        elements = tableRows.get(i).findElements(By.tagName("td"));
                    }
                    catch (Exception ex)
                    {
                       continue;
                    }
                    WebElement element = elements.get(columnIndex - 1);
                    if (element != null) {
                        cellValue = element.getAttribute("innerHTML");
                        //return true if at least one row has got value
                        if (cellValue != null)
                            return true;
                    }
                }
            }
            else {
                //If we don't find the column, test should fail
                Assert.assertTrue(false, columnName + " Column not found.");
                return false;
            }
            return  columnHasData;
        }
   /* public void validateOpNextDueDateDetails() {
        int columnIndex = BasePage.getColumnIndexByHeaderName("Site Name");

        //Get all the table rows by Id
        List<WebElement> tableRows = driver.findElement(By.id("T700009024")).findElements(By.tagName("tr"));
        String cellValue = null;
        int rowsCount = 0;
        if (columnIndex >= 0) {
            for (int i = 1; i < tableRows.size(); i++) {
                //Get all the cell values for Site Name column
                cellValue = tableRows.get(i).findElements(By.tagName("td")).get(columnIndex - 1).getText();
                if (cellValue != null)
                    rowsCount++;
            }
        }
        if (rowsCount > 0)
        {
            Assert.assertTrue(true);
        }
        else {
            //If we don't find the Site Name column, test should fail
            Assert.assertTrue(false);
        }

    }
*/


    public static File takeScreenShot(){

        return ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
    }

    public static byte[] takeScreenShotAsByteArray(){
        return ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
    }

    public void tearDown () {
        driver.quit();

    }


    }


