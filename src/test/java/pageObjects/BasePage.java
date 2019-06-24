package pageObjects;

import driver.factory.DriverFactory;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import java.awt.*;
import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class BasePage {

    public static WebDriver driver;

    protected BasePage() {
        driver = DriverFactory.getInstance().getDriver();
    }

    public WebDriver getDriver() {
        return driver;
    }

    public void getURL(String appURL) {
        driver = DriverFactory.getInstance().getDriver();
        driver.get(appURL);
    }

    public String getPageTitle() {
        return driver.getTitle();
    }

    public void wait(int mills) {

        try {
            Thread.sleep(mills);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void clickEscButton()
    {
        Actions action = new Actions(driver);
        action.sendKeys(Keys.ESCAPE).perform();
        wait(2000);

    }
    //To be used for all send keys methods.
    public void enterTextBy(By textElement, String text)
    {
        driver.findElement(textElement).sendKeys(text);
    }

    public String getTextById(String Id) {
        return driver.findElement(By.id(Id)).getAttribute("value");
    }

    public void selectMainMenu(String mainMenu) {

        String mainMenuXpath = "//img[@alt='Menu for " + mainMenu + "']/..";
        driver.findElement(By.xpath(mainMenuXpath)).click();
        wait(1000);
    }

    public void selectMenuItem(String menuItem) {
        driver.findElement(By.className("MenuTableBody")).findElements(By.tagName("td")).stream()
                .filter(element -> element.getText().equals(menuItem)).findFirst().orElse(null).click();

    }


    public void selectMenuItemSplit(String menuItem) {
        String arr[] = menuItem.split(":");
        for (int i = 0; i < arr.length; i++) {
            final String temp = arr[i];
            driver.findElements(By.className("MenuTableBody")).get(i).findElements(By.tagName("td")).stream().filter(element -> element.getText().equals(temp)).findFirst().orElse(null).click();
            wait(1000);
        }
    }
    public void selectMainMenuAndMenuItem(String mainMenu, String menuItem){
        selectMainMenu(mainMenu);
        selectMenuItemSplit(menuItem);

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

    public List<String> getDropdownValues(String dropdownMenuName)
    {
        List<String> dropdownValues = new ArrayList<String>();
        selectDropDownMenu(dropdownMenuName);

        List<WebElement> elements = driver.findElement(By.className("MenuTableBody")).findElements(By.tagName("td"));

        for (int i = 0; i < elements.size(); i ++)
        {
            dropdownValues.add(elements.get(i).getText().trim());
        }

        return dropdownValues;

    }




    public void selectDropDownNameAndValue(String dropdownName, String dropdownValue, boolean readonly) {
        String dropdownXpath;
        if (readonly)
            dropdownXpath = "//img[@alt='ReadOnly menu for " + dropdownName + "']/..";
        else
            dropdownXpath = "//img[@alt='Menu for " + dropdownName + "']/..";

        driver.findElement(By.xpath(dropdownXpath)).click();
        wait(1000);

        String arr[] = dropdownValue.split(":");
        for (int i = 0; i < arr.length; i++) {
            final String temp = arr[i];
            driver.findElements(By.className("MenuTableBody")).get(i).findElements(By.tagName("td")).stream().filter(element -> element.getText().equals(temp)).findFirst().orElse(null).click();
            wait(1000);
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
        wait(1000);

        String arr[] = preferences.split(":");
        for (int i = 0; i < arr.length; i++) {
            final String temp = arr[i];
            driver.findElements(By.className("MenuTableBody")).get(i).findElements(By.tagName("td")).stream().filter(element -> element.getText().equals(temp)).findFirst().orElse(null).click();
            wait(500);
        }
    }

    public boolean checkIfControlIsReadonly(String Id) {
        String isReadOnly = driver.findElement(By.id(Id)).getAttribute("readonly");
        if (isReadOnly != null && isReadOnly.contains("true")) {
            return true;
        }
        return false;
    }


    public static int getColumnIndexByHeaderName(By table, String headerName) {
        int columnInfo = -1;
        //Get all web elements
        List<WebElement> tableHeaders = driver.findElement(table).findElement(By.tagName("tbody")).findElements(By.tagName("tr")).get(0).findElements(By.tagName("th"));

        for (int i = 0; i < tableHeaders.size(); i++) {
            tableHeaders = driver.findElement(table).findElement(By.tagName("tbody")).findElements(By.tagName("tr")).get(0).findElements(By.tagName("th"));
            //System.out.println("=== " + i + " === " + tableHeaders.get(i).getAttribute("innerHTML").trim() + " ===");
            WebElement tableHeader = tableHeaders.get(i);
            if (tableHeader.getAttribute("innerHTML").trim().equals(headerName)) {
                //Get the column index using headerName
                //System.out.println("=== " + i + " === " + tableHeaders.get(i).getAttribute("innerHTML").trim() + " ===");
                columnInfo = i;
                break;
            }
        }
        return columnInfo;
    }
// TO-DO method should be removed. use below method instead by passing div id
    public boolean isColumnDisplayedByDivId(String columnName, String divId){
//        left: 3508px; text-align: left; width: 89px;
        boolean columnDisplayed = false;

        //Get all web elements
        List<WebElement> tableHeaders = driver.findElement(By.id(divId)).findElement(By.className("BaseTableColHeaders")).findElements(By.className("BaseTableHeader"));

        for (int i = 0; i < tableHeaders.size(); i++) {
            // System.out.println("=== " + i + " === " + tableHeaders.get(i).getAttribute("innerHTML").trim() + " ===");
            WebElement tableHeader = tableHeaders.get(i);
            if (tableHeader.getAttribute("innerHTML").trim().equals(columnName)) {
                if(!tableHeader.getAttribute("style").trim().split(";")[2].trim().equals("width: 0px")){
                    columnDisplayed = true;
                    break;
                }
            }
        }
        return columnDisplayed;
    }

    public boolean isColumnDisplayed(String columnName){
//        left: 3508px; text-align: left; width: 89px;
        boolean columnDisplayed = false;

        //Get all web elements
        List<WebElement> tableHeaders = driver.findElement(By.className("BaseTableColHeaders")).findElements(By.className("BaseTableHeader"));

        for (int i = 0; i < tableHeaders.size(); i++) {
           // System.out.println("=== " + i + " === " + tableHeaders.get(i).getAttribute("innerHTML").trim() + " ===");
            WebElement tableHeader = tableHeaders.get(i);
            if (tableHeader.getAttribute("innerHTML").trim().equals(columnName)) {
                if(!tableHeader.getAttribute("style").trim().split(";")[2].trim().equals("width: 0px")){
                    columnDisplayed = true;
                    break;
                }
            }
        }
        return columnDisplayed;
    }


    public List<WebElement> getTableRows(By table) {
        List<WebElement> tableRows = driver.findElement(table).findElement(By.tagName("tbody")).findElements(By.tagName("tr"));
        return tableRows;
    }

    //use this method for only dynamic tables like table in Agent Console page
    //columnHasData
    public boolean columnHasData(String tableId, String columnName) {

        if(!isColumnDisplayed(columnName)){
            return false;
        }
        int columnIndex = getColumnIndexByHeaderName(By.id(tableId), columnName);
        boolean columnHasData = false;

        List<WebElement> tableRows = new ArrayList<>();
        tableRows = driver.findElement(By.id(tableId)).findElement(By.tagName("tbody")).findElements(By.tagName("tr"));

        String cellValue = null;

        if (columnIndex >= 0) {
            for (int i = 1; i < tableRows.size(); i++) {
                //Get cell values for specified column
                List<WebElement> elements = null;
                try {
                    tableRows = driver.findElement(By.id(tableId)).findElement(By.tagName("tbody")).findElements(By.tagName("tr"));
                    elements = tableRows.get(i).findElements(By.tagName("td"));
                } catch (Exception ex) {
                    continue;
                }
                WebElement element = elements.get(columnIndex).findElement(By.tagName("nobr")).findElement(By.tagName("span"));
                if (element != null) {
                    cellValue = element.getAttribute("innerHTML");
                    //return true if at least one row has got value
                    if (cellValue != null)
                        return true;
                }
            }
        } else {
            //If we don't find the column, test should fail
            Assert.assertTrue(false, columnName + " Column not found.");
            return false;
        }
        return columnHasData;
    }

    //use this method for only static tables like table in SID Console page
    public boolean validateIfAllColumnRowsHasData(String tableId, String columnName) {
        int columnIndex = getColumnIndexByHeaderName(By.id(tableId), columnName);
        //Get all the table rows by Id
        List<WebElement> tableRows = getTableRows(By.id(tableId));
        String cellValue = null;
        if (columnIndex >= 0) {
            for (int i = 1; i < tableRows.size(); i++) {
                //Get all the cell values for Site Name column
                cellValue = tableRows.get(i).findElements(By.tagName("td")).get(columnIndex - 1).getText();
                //Check if Cell value is not null (if cell value is null, test should fail)
                if (cellValue.equals("") || cellValue == null) {
                    return false;
                }
            }
        } else {
            //If we don't find the column, test should fail
            Assert.assertTrue(false, columnName + " Column not found.");
            return false;
        }
        return true;
    }

    // rowNum : 0 gives header row
    // rowNum : 1 gives first row
    public String getTableCellData(By table, String columnName, int rowNum){
       String cellData = null;
        int colNum = getColumnIndexByHeaderName(table, columnName);
        List<WebElement> getTableRows = getTableRows(table);

        if(getTableRows.size() > 0){
            cellData =  getTableRows.get(rowNum).findElements(By.tagName("td")).get(colNum).getText();
        }
        return cellData;
    }
    public static File takeScreenShot() {

        return ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
    }

    public static byte[] takeScreenShotAsByteArray() {
        return ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
    }



    public void selectTab(String tab) {
        driver.findElements(By.className("Tab")).stream().filter(element -> element.getText().equals(tab)).findFirst().orElse(null).click();

    }
    public void switchToFrameByIndex(int frame_index) {
        driver.switchTo().frame(frame_index);
    }

    public void switchToFrameByName(String frameName){
        driver.switchTo().frame(frameName);
    }

    public void switchToFrameById(String id){
        driver.switchTo().frame(id);
    }

  public boolean verifyIsTabDisplayed(String tabName){
      return driver.findElements(By.className("Tab")).stream().filter(element -> element.getText().equals(tabName)).findFirst().orElse(null).isDisplayed();
  }


}


