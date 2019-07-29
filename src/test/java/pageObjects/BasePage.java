package pageObjects;

import driver.factory.DriverFactory;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import utils.CommonUtils;

import java.io.File;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class BasePage {

    private static final String txtEVENT_START_TIME = "arid_WIN_0_600001302";

    public static WebDriver driver;
    WebDriverWait webDriverWait = new WebDriverWait(DriverFactory.getInstance().getDriver(), 30);

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
    // To find element using webdriver wait
    public WebElement findElement(By element){
        return webDriverWait.until(ExpectedConditions.visibilityOfElementLocated(element));
    }

    public boolean verifyElementIsDisplayed(By element){
        return findElement(element).isDisplayed();
    }

    public boolean verifyElementIsDisplayedByContainsText(String textName){
        String element = String.format("//label[contains(text(),'%s')]", textName);
        System.out.println(element);
        return findElement(By.xpath(element)).isDisplayed();

    }
    public boolean verifyElementIsDisplayedByContainsTextAndTagNameSpan(String tagName, String textName){
        String element = String.format("//%s[contains(text(),'%s')]", tagName, textName);
        System.out.println(element);
        return findElement(By.xpath(element)).isDisplayed();

    }
    public void clickElementByContainsTextAndTagName(String tagName, String textName){
        String element = String.format("//%s[contains(text(),'%s')]", tagName, textName);
        System.out.println(element);
         findElement(By.xpath(element)).click();

    }

    public boolean verifyIsElementSelected(By element){
        return findElement(element).isSelected();
    }

    // To click any element by locator and element
    public void clickElement(By element){
        findElement(element).click();
    }

    public boolean verifyMenuItems(String items){
        String [] menuItems = items.split(":");
        for (int i=0; i<menuItems.length; i++){
            String mainMenuXpath = "//img[@alt='Menu for " + menuItems[i] + "']/..";
            WebElement element = driver.findElement(By.xpath(mainMenuXpath));
            boolean result= element.isEnabled();
            if(result==false)
                return false;
        }
        return true;
    }

    public boolean verifyDateTimeFormat(String format, String dateToValidate)
    {
        boolean valid = false;
        try
        {
            SimpleDateFormat formatter = new SimpleDateFormat(format);
            formatter.setLenient(false);
            Date parsedDate = formatter.parse(dateToValidate);
            System.out.println("Parsed date is: " + parsedDate.toString());
            valid = true;
        }
        catch (Exception ex)
        {
            valid = false;
        }
        return valid;
    }


    public void clickEscButton()
    {
        Actions action = new Actions(driver);
        action.sendKeys(Keys.ESCAPE).perform();
        wait(2000);

    }
    //To be used for all send keys methods.
    public void enterTextByElement(By element, String text)
    {
        findElement(element).sendKeys(text);
    }

    public String getAttributeValueById(String Id) {
        return findElement(By.id(Id)).getAttribute("value");
    }
    public String getTextByID(String id){
        return findElement(By.id(id)).getText();
    }

    public String calculateEstimatedReady(int time, String timeUnit){
        String estimatedTime = "";
        String format = "yyyy-MM-dd HH:mm:ss";
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(format);
        String eventStartTime = getEventStartTime();
        if(eventStartTime.isEmpty())
            eventStartTime  = CommonUtils.getDateTime(format, "Europe/Stockholm", 0);
        ;
        LocalDateTime dateTime = LocalDateTime.parse(eventStartTime, formatter);
        if(timeUnit.equals("days"))
        {
            estimatedTime = dateTime.plusDays(time).toString();
        }
        else if(timeUnit.equals("hours"))
        {
            estimatedTime = dateTime.plusHours(time).toString();
        }

        estimatedTime = estimatedTime.replace('T',' ');
        System.out.println("Estimated time is: " + estimatedTime);
        return estimatedTime;
    }

    public String getEventStartTime(){
        String eventStartTime=  getAttributeValueById(txtEVENT_START_TIME);
        System.out.println(eventStartTime);
        return eventStartTime;
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

    public void selectDropDownMenuForReadOnly(String DropDownMenu) {

        String mainMenuXpath = "//img[@alt='ReadOnly menu for " + DropDownMenu + "']/..";
        driver.findElement(By.xpath(mainMenuXpath)).click();
        wait(1000);
    }

    public void selectDropDownValue(String DropDownValue) {
        driver.findElement(By.className("MenuTableBody")).findElements(By.tagName("td")).stream()
                .filter(element -> element.getText().trim().equals(DropDownValue)).findFirst().orElse(null).click();

    }

    public void clickDropDownById(String id)
    {
        findElement(By.id(id)).click();
    }

    public List<String> getDropdownValues(String dropdownMenuName, String dropdownId)
    {
        List<String> dropdownValues = new ArrayList<String>();

        if (dropdownId.equals("readonly"))
            selectDropDownMenuForReadOnly(dropdownMenuName);
        else if (dropdownId.equals("notreadonly"))
            selectDropDownMenu(dropdownMenuName);
        else
             clickDropDownById(dropdownId);

        List<WebElement> elements = findElement(By.className("MenuTableBody")).findElements(By.tagName("td"));

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

            List<WebElement> elements = driver.findElements(By.className("MenuTableBody"));
            if (elements.size() > 0) {

                elements.get(i).findElements(By.tagName("td")).stream().filter(element -> element.getText().equals(temp)).findFirst().orElse(null).click();
            }
            wait(1000);
        }

    }
// index is used as there can be multiple MenuTableBody elements
    public void selectDropDownNameAndValueForMultipleMenuTableBodys(String dropdownName, String dropdownValue, boolean readonly, int index) {
        String dropdownXpath;
        if (readonly)
            dropdownXpath = "//img[@alt='ReadOnly menu for " + dropdownName + "']/..";
        else
            dropdownXpath = "//img[@alt='Menu for " + dropdownName + "']/..";

        driver.findElement(By.xpath(dropdownXpath)).click();
        wait(800);

        String arr[] = dropdownValue.split(":");
        for (int i = 0; i < arr.length; i++) {
            final String temp = arr[i];

            List<WebElement> elements = driver.findElements(By.className("MenuTableBody"));
            if (elements.size() > 0) {

                elements.get(i + index).findElements(By.tagName("td")).stream().filter(element -> element.getText().equals(temp)).findFirst().orElse(null).click();
            }
            wait(800);
        }

    }

    public void selectDropDownNameAndValueForInvisibleElements(String dropdownName, String dropdownValue, boolean readonly, String alphabet, int keyUpCount) {
        String dropdownXpath;
        if (readonly)
            dropdownXpath = "//img[@alt='ReadOnly menu for " + dropdownName + "']/..";
        else
            dropdownXpath = "//img[@alt='Menu for " + dropdownName + "']/..";

        driver.findElement(By.xpath(dropdownXpath)).click();
        driver.findElement(By.xpath(dropdownXpath)).sendKeys(Keys.DOWN);
        driver.findElement(By.xpath(dropdownXpath)).sendKeys(alphabet);
        for (int i = 0; i < keyUpCount; i++) {
            driver.findElement(By.xpath(dropdownXpath)).sendKeys(Keys.UP);
        }
        wait(1000);

        String arr[] = dropdownValue.split(":");
        for (int i = 0; i < arr.length; i++) {
            final String temp = arr[i];

          WebElement e =  driver.findElements(By.className("MenuTableBody")).get(i).findElements(By.tagName("td")).stream().filter(element -> element.getText().equals(temp)).findFirst().orElse(null);

            wait(1000);
            System.out.println("element name is: " + e.getAttribute("innerHTML"));

            e.click();
            wait(1000);
        }

    }

    //    preferences = "Menu1:Menu2"
    public void setPreferences(String preferences) {

        wait(1500);

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

    public boolean verifyTimelineUpdate(String actualMessage, String expectedMessage)
    {
        String[] containsText = expectedMessage.split(":");
        for (int i = 0; i < containsText.length; i++)
        {
            if (!actualMessage.contains(containsText[i]))
            {
                return false;
            }
        }
        return true;
    }

    public boolean checkIfControlIsReadonly(String Id) {
        String isReadOnly = findElement(By.id(Id)).getAttribute("readonly");
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
        List<WebElement> tableHeaders = findElement(By.id(divId)).findElement(By.className("BaseTableColHeaders")).findElements(By.className("BaseTableHeader"));

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
        List<WebElement> tableHeaders = findElement(By.className("BaseTableColHeaders")).findElements(By.className("BaseTableHeader"));

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

    //use this common method instead of top 2 methods
    //text = "Secondary"
    public String[] ClickTableElementByText(By table, String headerName, String text, boolean getText)
    {
        String[] texts = new String[6];
        List<WebElement> elements = findElement(table).findElement(By.tagName("tbody")).findElements(By.tagName("tr"));
        int columnIndex = getColumnIndexByHeaderName(table, headerName);
        wait(1000);
        for (int i = 1; i < elements.size(); i++)
        {
            wait(1000);
            List<WebElement> tdElements = elements.get(i).findElements(By.tagName("td"));

            if (tdElements.size() > 0) {
                if (tdElements.get(columnIndex).getText().equals(text)) {

                    System.out.println(tdElements.get(0).getText());

                    if(getText) {
                        texts[0] = tdElements.get(6).getText();
                        texts[1] = tdElements.get(1).getText();
                        texts[2] = tdElements.get(7).getText();
                        texts[3] = tdElements.get(8).getText();
                        texts[4] = tdElements.get(10).getText();
                        texts[5] = tdElements.get(11).getText();
                    }
                    tdElements.get(1).click();

                    return texts;
                }
            }

        }
        return null;
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
        System.out.println("Table cell value is :" + cellData);
        return cellData;
    }
    public void clickByCellData(By table, String columnName, int rowNum, String cellData){
        getTableCellData(table, columnName, rowNum);
    }
    public WebElement getTableCellElement(By table, String columnName, String cellData)
    {
        int colNum = getColumnIndexByHeaderName(table, columnName);
        List<WebElement> tableRows = getTableRows(table);

        if(tableRows.size() > 0){
            for (int i = 1; i < tableRows.size(); i++) {
                WebElement td = tableRows.get(i).findElements(By.tagName("td")).get(colNum);

                    if(td.getText().trim().equals(cellData))
                    {
                        System.out.println("Table cell value is :" + td.getText().trim());
                        return td;
                    }
            }
        }

        return null;
    }

    public boolean verifyColumnValues(By table, String columnName, String columnValue)
    {
        int colNum = getColumnIndexByHeaderName(table, columnName);
        List<WebElement> tableRows = getTableRows(table);
        System.out.println("Number of rows are: "+ tableRows.size());

        if(tableRows.size() > 0){
            for (int i = 1; i < tableRows.size(); i++) {
                WebElement td = tableRows.get(i).findElements(By.tagName("td")).get(colNum);
                System.out.println("Table cell value is: "+ td.getText().trim());
                if(!td.getText().trim().equals(columnValue))
                {
                    System.out.println("Table cell value is not as expected:" + td.getText().trim());
                    return false;
                }
            }
        }

        return true;
    }

    public void rightClickOnElement(WebElement element)
    {
        Actions action = new Actions(driver);
        action.contextClick(element).build().perform();
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

    public List<String> getTabValues()
    {
        List<String> tabValues = new ArrayList<String>();

        List<WebElement> elements = driver.findElements(By.className("Tab"));

        for (int i = 0; i < elements.size(); i ++)
        {
            tabValues.add(elements.get(i).getText().trim());
        }
        return tabValues;
    }

    public List<String> getTableHeaders(By table)
    {
        List<String> tabValues = new ArrayList<String>();

        List<WebElement> elements = driver.findElement(table).findElement(By.tagName("tbody")).findElements(By.tagName("tr")).get(0).findElements(By.tagName("th"));

        for (int i = 0; i < elements.size(); i++) {
            WebElement tableHeader = elements.get(i);
            tabValues.add(tableHeader.getAttribute("innerHTML").trim());
        }
        return tabValues;
    }

    public void switchToFrameByIndex(int frame_index) {
        int size= driver.findElements(By.tagName("iframe")).size();
        System.out.println("Number of frames are: " +size);
        driver.switchTo().frame(frame_index);
    }

    public void switchToFrameByName(String frameName){
        wait(1000);
        driver.switchTo().frame(frameName);
    }

    public void switchToFrameById(String id){
        driver.switchTo().frame(id);
    }

  public boolean verifyIsTabDisplayed(String tabName){
      return driver.findElements(By.className("Tab")).stream().filter(element -> element.getText().equals(tabName)).findFirst().orElse(null).isDisplayed();
  }
  public boolean verifyElementIsEnabledById(By element){

        return findElement(element).isEnabled();
  }
  public void switchToDefault(){
        driver.switchTo().defaultContent();
        wait(1000);
  }
    public void acceptAlert() {
        driver.switchTo().alert().accept();
    }


}


