package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import java.util.List;

public class OWF_AgentConsolePage extends BasePage {


    private static final String menuForCONSOLE = "Console";
    private static final String menuForCREATE = "Create";
    private static final String menuForSEARCH = "Search";
    private static final String menuForNAV_USERNAME = "Nav-Username";
    private static final String menuItemSID_CONSOLE = "SID Console";
    private static final String menuItemCHANGE_RECORD = "Change Record/Project/Freeze";
    private static final String menuItemPROBLEM_RECORD = "Problem Record";
    private static final String menuItemTROUBLE_EVENT = "Trouble Event";
    private static final String menuitemKNOWN_ERROR = "Known Error";
    private static final String menuItemLOGOUT = "Logout";
    private static final String txtSEARCH = "arid_WIN_3_730000011";
    private static final String btnSEARCH = "WIN_0_700010480";
    private static final String btnCLEAR = "WIN_0_777501009";
    private static final String btnREFRESH_IMAGE = "WIN_0_8000903";
    private static final String btnHIDE_FUNCTIONS = "WIN_0_999000120";
    private static final String btnSAVE = "WIN_0_700010480";
    private static final String btnADD = "WIN_0_800006404";

    private static final String ddALL_TICKETS = "WIN_0_700010167";
    private static final String ddALL_ROLES = "WIN_0_700010200";
    private static final String dd_ALL_TICKETS= "Fld-OfTypeID";
    private static final String dd_STATUS= "Status";
    private static final String dd_ALL_ROLES= "Fld-RoleViewMenu";
    private static final String dd_ALL = "Fld-ViewTicketsID";
    private static final String ddValueMYASSIGNEE_PROFILE = "My Assignee Profile";
    private static final String ddValueCREATER_USER_LEVEL = "Creator (user level)";
    private static final String ddValueMY_OWNER_PROFILE = "My Owner Profile";
    private static final String ddValueWO_OP = "WO & OP";

    private static final String table_ID = "T777000002";
    private static final String timeline_table_DIV_ID = "WIN_0_700508140";

    private static final String timeline_TABLE_ID = "T700508140";
    private static final String tabALARM_XPATH = "//a[contains(text(),'Alarms')]";
    private static final String btnCLOSE_ON_FRAME_XPATH = "//div[@class='f7']";
    private static final String imgCLOSED_ID = "ardivpcl";
    private static final String ddACTION = "Action";
    private static final String btnREFRESH_ALARM_TAB = "//a[contains(text(),'Refresh')]";
    private static final String tdROW1_XPATH = "//div[@id='WIN_0_999000005']//td[1]//nobr[1]";
    private static final String alarmTdROW1_XPATH = "//fieldset[@id='WIN_0_836889423']//tr[2]";
    private static final String txtALARM_NUMBER_ID = "arid_WIN_0_700511109";
    private static final String btnYES_ON_FRAME_ID = "WIN_0_700027904";
    private static final String fullView_TABLE_ID = "T860000008";
    private static final String btnOK_secondaryPrimary_onFRAME_XPATH = "//*[@id='PopupMsgFooter']/a";
    private static final String btn_MORE_FILTERS = "WIN_0_536889440";
    private static final String btn_APPLY = "WIN_0_600002902";
    private static final String fld_DETAILS= "WIN_0_600003303";
    private static final String fld_CTI_DETAILS= "WIN_0_600003302";
    private static final String txt_SEARCH_USER_MORE_FILTERS= "arid_WIN_0_600001011";
    private static final String btn_SEARCH_USER_MORE_FILTERS= "WIN_0_600002904";
    private static final String tableRow1_USER_MORE_FILTERS= "//*[@id='T600002201']/tbody/tr[2]/td";
    private static final String btn_ADD_USER_MORE_FILTERS = "WIN_0_600002905";
    private static final String txt_REFRESH_INTERVAL = "interval";
    private static final String btn_OK_REFRESH_INTERVAL= "//*[@id='PopupSearchesFooter']/a[1]";
    private static final String fld_ALERTS= "WIN_2_999000104";
    private static final String fld_NEW= "WIN_2_999000106";
    private static final String fld_ASSIGNED= "WIN_2_999000108";
    private static final String fld_WIP= "WIN_2_999000110";
    private static final String fld_CLEARED= "WIN_2_999000112";


   public String getAlerts(){
       String alerts= getTextByID(fld_ALERTS);
       System.out.println("Number of Alerts alerts: " +alerts );
       return alerts;

   }
    public String getNew(){
        String ticketsNew= getTextByID(fld_ALERTS);
        System.out.println("Number of New Tickets are: " + ticketsNew);
        return ticketsNew ;
    }
    public String getAssigned(){
        return getTextByID(fld_ASSIGNED);
    }
    public String getWip(){
        return getTextByID(fld_WIP);
    }
    public String getCleared(){
        return getTextByID(fld_CLEARED);
    }
    public void clickOk(){
        wait(500);
        clickElement(By.xpath(btn_OK_REFRESH_INTERVAL));
    }

    public void enterRefreshInterval(String time){

        enterTextByElement((By.id(txt_REFRESH_INTERVAL)), time);
    }
    public boolean verifySearchIsDisplayed(){
        return verifyElementIsDisplayed(By.id(txtSEARCH));
    }
    public void selectAll(String value){
        selectDropDownNameAndValue(dd_ALL, value, false);
    }
    public void clickAdd_userMoreFilters(){
       clickElement(By.id(btn_ADD_USER_MORE_FILTERS));
    }
    public void clickRow1(){
        clickElement(By.xpath(tableRow1_USER_MORE_FILTERS));
    }
    public void clickSearch_userMoreFilters(){
        clickElement(By.id(btn_SEARCH_USER_MORE_FILTERS));
    }

    public void enterSearch_userMoreFilters(String text){
      enterTextByElement(By.id(txt_SEARCH_USER_MORE_FILTERS),text);
    }
   public boolean verifyDetailsIsPresent(){
       return verifyElementIsDisplayed(By.id(fld_DETAILS));
   }
    public boolean verifyCtiDetailsIsPresent(){
        return verifyElementIsDisplayed(By.id(fld_CTI_DETAILS));
    }
   public void clickApply_userMoreFilters(){
       clickElement(By.id(btn_APPLY));
       wait(500);
   }

   public void clickMoreFilters(){
   clickElement(By.id(btn_MORE_FILTERS));
   }

   public void selectStatus(String value){
       selectDropDownNameAndValue(dd_STATUS, value, false);
   }

    public void selectAllTickets(String value){
        selectDropDownNameAndValue(dd_ALL_TICKETS, value, false);
    }

    public void clickYesonSecondaryPrimaryWarningFrame()
    {
       clickElement(By.xpath(btnOK_secondaryPrimary_onFRAME_XPATH));
    }
    public boolean checkIfAlarmsPresent()
    {
        int alarmsCount = getTableRows(By.id(fullView_TABLE_ID)).size();
        driver.switchTo().defaultContent();
        if (alarmsCount > 1)
            return true;
        return false;
    }
    public boolean validateTicketsAvailabilityInAgentConsoleTable(){
        int count= getTableRowsCount();
        System.out.println(count);
        if (count>50)
            return true;
        else return false;
        }

     public void selectCreateAsKnownError(){
        selectMainMenuAndMenuItem(menuForCREATE, menuitemKNOWN_ERROR);
     }

    String alarmId = "";

    public void clickSecondaryAlarm(){

        List<WebElement> elements = driver.findElement(By.id(timeline_TABLE_ID)).findElement(By.tagName("tbody")).findElements(By.tagName("tr"));
        //get index using this and use in the loop
        int columnIndex = getColumnIndexByHeaderName(By.id(timeline_TABLE_ID), "Primary-Secondary");

        for (int i = 1; i < elements.size(); i++)
        {
           List<WebElement> trElements = elements.get(i).findElements(By.tagName("td"));

            if (trElements.size() > 0) {
                if (trElements.get(2).getText().equals("Secondary")) {
                    trElements.get(2).click();
                    alarmId = trElements.get(1).getText();
                    return;
                }
            }

        }
    }

    public boolean verifySecondaryTurnsToPrimary(){

        List<WebElement> elements = driver.findElement(By.id(timeline_TABLE_ID)).findElement(By.tagName("tbody")).findElements(By.tagName("tr"));
        for (int i = 1; i < elements.size(); i++)
        {
            List<WebElement> trElements = elements.get(i).findElements(By.tagName("td"));

            if (trElements.size() > 0) {
                if (trElements.get(1).getText().equals(alarmId)) {
                    if (trElements.get(2).getText().equalsIgnoreCase("primary"))
                        return true;

                }
            }

        }
        return false;

    }

    public void clickOnYes(){
        clickElement(By.id(btnYES_ON_FRAME_ID));
    }



    Actions action = new Actions(driver);

    public void doubleClickOnAlarm(){
        WebElement element= findElement(By.xpath(alarmTdROW1_XPATH));
        action.doubleClick(element).perform();
    }
    public void clickFilterPreferences(){
        driver.findElement(By.id(timeline_TABLE_ID)).findElement(By.xpath(" //div[@id='WIN_0_700508140']//a[@class='Prefs btn btn3d TableBtn'][contains(text(),'Preferences')]")).click();
    }


    public void clickOnTicket(){
        clickElement(By.xpath(tdROW1_XPATH));
    }
    public void doubleClickOnTicket(){
        WebElement element= findElement(By.xpath(tdROW1_XPATH));
        action.doubleClick(element).perform();
    }

    public void clickRefresh_AlarmTab(){
        clickElement(By.xpath(btnREFRESH_ALARM_TAB));
    }

    public void selectAction(String value){
        wait(1000);
        selectDropDownNameAndValue(ddACTION, value, false);
    }

    public void clickCloseButtonOnFrame(){
        clickElement(By.xpath(btnCLOSE_ON_FRAME_XPATH));
    }
    public void clickOnCloseImage(){
        System.out.println("inside frame");
        clickElement(By.id(imgCLOSED_ID));
    }

    public void clickAlarmTab(){
        clickElement(By.xpath(tabALARM_XPATH));
    }

    public void clickSearch_OpenSearch_ProblemRecord() {
        selectDropDownNameAndValue("Search", "Open Search Form:Problem Record", false);
    }

    public void clickPreferences() {
        driver.findElement(By.id(table_ID)).findElement(By.xpath("//a[contains(text(),'Preferences')]")).click();
    }

    public void acceptAlert(){
        driver.switchTo().alert().accept();
    }

    public int getTableRowsCount() {
        return getTableRows(By.id(table_ID)).size();
    }
    public int getAlarmTableRowsCount(){
        return getTableRows(By.id(timeline_TABLE_ID)).size();
    }

    public boolean validateOpNextDueDateInformation() {
        return columnHasData(table_ID, "OP Next Due Date");
    }

    public boolean validateOpTargetDateInformation() {
        return columnHasData(table_ID, "OP Target Date");
    }

    public void selectDdValueWO_OP() {
        selectDropDownValue(ddValueWO_OP);
    }

    public boolean isColumnDisplayedByDivId(String columnName)
    {
        return isColumnDisplayedByDivId(columnName, timeline_table_DIV_ID);
    }

    public void enterSearch(String searchText) {
        wait(1000);
        driver.findElement(By.id(txtSEARCH)).sendKeys(searchText);
        driver.findElement(By.id(txtSEARCH)).sendKeys(Keys.ENTER);
    }


    public void clickCreateMenu() {

        selectMainMenu(menuForCREATE);


    }

    public void clickConsoleMenu() {

        selectMainMenu(menuForCONSOLE);

    }


    public void clickNavUserMenu() {
        selectMainMenu(menuForNAV_USERNAME);

    }

    public void clickSearch() {
        clickElement(By.id(btnSEARCH));
    }

    public void clickClear() {
        clickElement(By.id(btnCLEAR));
    }

    public void clickRefresh_image() {
        clickElement(By.id(btnREFRESH_IMAGE));
    }

    public void clickHideFunctions() {
        clickElement(By.id(btnHIDE_FUNCTIONS));
    }

    public void clickSave() {
        clickElement(By.id(btnSAVE));
    }

    public void clickAdd() {
        clickElement(By.id(btnADD));
    }

    public void clickMenuItemSIDConsole() {
        selectMenuItem(menuItemSID_CONSOLE);
    }

    public void clickMenuItemChangeRecord() {
        selectMenuItem(menuItemCHANGE_RECORD);
    }

    public void clickMenuItemProblemRecord() {

        selectMenuItem(menuItemPROBLEM_RECORD);
    }

    public void clickMenuItemTroubleEvent() {

        selectMenuItem(menuItemTROUBLE_EVENT);
    }


    public void clickMenuItemLogout() {
        selectMenuItem(menuItemLOGOUT);
    }

    public boolean verifyFilteredStatus(String columnName, String columnValue)
    {
       return verifyColumnValues(By.id(table_ID), columnName, columnValue);
    }

    public void selectAllRoles(String value) {
        selectDropDownNameAndValue(dd_ALL_ROLES, value, false);
    }


    public void selectMyAssigneeProfile() {
        selectDropDownValue(ddValueMYASSIGNEE_PROFILE);
    }

    public void selectMyCreaterUserLevel() {
        selectDropDownValue(ddValueCREATER_USER_LEVEL);
    }

    public void selectMyOwnerProfile() {
        selectDropDownValue(ddValueMY_OWNER_PROFILE);
    }

    public void clickAllTicketsDropDown() {
        clickElement(By.id(ddALL_TICKETS));
    }

    public void clickAllRolesDropDown() {
        clickElement(By.id(ddALL_ROLES));
    }

    public int getColumnIndexByHeaderName(String columnName) {
        return BasePage.getColumnIndexByHeaderName(By.id(table_ID), columnName);
    }

    public void selectSearchMenu(String menuItem){
        selectMainMenuAndMenuItem(menuForSEARCH, menuItem);
    }

    public String getAlarmNumber(){
        return findElement(By.id(txtALARM_NUMBER_ID)).getAttribute("value");
    }



}
