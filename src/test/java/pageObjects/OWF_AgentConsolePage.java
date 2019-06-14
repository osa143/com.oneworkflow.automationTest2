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
    private static final String menuForADMINISTRATION = "Administration";

    private static final String menuForNAV_USERNAME = "Nav-Username";

    private static final String menuItemAGENT_CONSOLE = "Agent Console";
    private static final String menuItemALERT_CONSOLE = "Alert Console";
    private static final String menuItemSID_CONSOLE = "SID Console";
    private static final String menuItemCHANGE_RECORD = "Change Record/Project/Freeze";
    private static final String menuItemFROM_FILE = "From File";
    private static final String menuItemPROBLEM_RECORD = "Problem Record";
    private static final String menuItemTROUBLE_EVENT = "Trouble Event";
    private static final String menuItemWORK_ORDER = "Work Order";

    private static final String menuItemMY_ACCOUNT = "My Account";
    private static final String menuItemCHANGE_PASSWORD = "Change Password";
    private static final String menuItemHELP = "Help";
    private static final String menuItemABOUT = "About";
    private static final String menuItemLOGOUT = "Logout";

    private static final String txtSEARCH = "arid_WIN_3_730000011";

    private static final String btnSEARCH = "WIN_0_700010480";
    private static final String btnCLEAR = "WIN_0_777501009";
    private static final String btnREFRESH = "WIN_0_8000903";
    private static final String btnHIDE_FUNCTIONS = "WIN_0_999000120";
    private static final String btnMORE_FILTERS = "WIN_0_600002901";
    private static final String btnSAVE = "WIN_0_700010480";
    private static final String btnADD = "WIN_0_800006404";

    private static final String ddALL_TICKETS = "WIN_0_700010167";
    private static final String ddALL_ROLES = "WIN_0_700010200";
    private static final String ddALL = "WIN_0_700010165";

    private static final String ddValueALL_ROLES = "All Roles";
    private static final String ddValueINTERESTED_PARTIES = "Interested Parties";
    private static final String ddValueMYASSIGNEE_PROFILE = "My Assignee Profile";
    private static final String ddValueCREATER_USER_LEVEL = "Creator (user level)";
    private static final String ddValueMY_OWNER_PROFILE = "My Owner Profile";

    private static final String ddValueALL_TICKETS = "All Tickets";
    private static final String ddValueCHANGE_FREEZE = "Change Freeze";
    private static final String ddValueCHANGE_PROJECT = "Change Project";
    private static final String ddValueCHANGE_RECORD = "Change Record";
    private static final String ddValueKNOWN_ERROR = "Known Error";
    private static final String ddValuePB_OP_KE = "PB & OP & KE";
    private static final String ddValuePROBLEM = "Problem";
    private static final String ddValueTROUBLE_TICKET = "Trouble Ticket";
    private static final String ddValueWO_OP = "WO & OP";
    private static final String ddValueWO_OP_CR = "WO & OP & CR";
    private static final String ddValueWORK_ORDER = "Work Order";

    private static final String ddValueALL = "All";
    private static final String ddValueASIGNED_TO_ME = "Assigned To Me";
    private static final String ddValueCREATED_BY_ME = "Created by Me";
    private static final String ddValueOWNED_BY_ME = "Owned by Me";

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
    private static final String Alarm_Console_fullView_Table_ID = "bubble_tooltip";
    private static final String btnYES_ON_FRAME_ID = "WIN_0_700027904";
    private static final String secondary_ALARM_XPATH = "//td[@class='BaseTableCell BaseTableCellColor BaseTableStaticText']//span[contains(text(),'Secondary')]";
    private static final String fullView_TABLE_ID = "T860000008";

    public boolean checkIfAlarmsPresent()
    {
        int alarmsCount = getTableRows(By.id(fullView_TABLE_ID)).size();
        driver.switchTo().defaultContent();
        if (alarmsCount > 1)
            return true;
        return false;
    }

    public void clickSecondaryAlarm(){
        //driver.findElement(By.xpath(secondary_ALARM_XPATH)).click();
        List<WebElement> elements = driver.findElement(By.id(timeline_TABLE_ID)).findElements(By.tagName("tr"));
        for (int i = 0; i <= elements.size(); i++)
        {
           List<WebElement> trElements = elements.get(i).findElements(By.tagName("td"));
           for (int j = 0; j < trElements.size(); j++)
           {
               if (trElements.get(j).getText().equals("Secondary"))
               {
                   trElements.get(j).click();
                   return;
               }
           }
        }
    }
    public void clickOnYes(){
        driver.findElement(By.id(btnYES_ON_FRAME_ID)).click();
    }



    Actions action = new Actions(driver);

    public void doubleClickOnAlarm(){
        WebElement element= driver.findElement(By.xpath(alarmTdROW1_XPATH));
        action.doubleClick(element).perform();
    }
    public void clickFilterPreferences(){
        driver.findElement(By.id(timeline_TABLE_ID)).findElement(By.xpath(" //div[@id='WIN_0_700508140']//a[@class='Prefs btn btn3d TableBtn'][contains(text(),'Preferences')]")).click();
    }


    public void clickOnTicket(){
        driver.findElement(By.xpath(tdROW1_XPATH)).click();
    }
    public void doubleClickOnTicket(){
        WebElement element= driver.findElement(By.xpath(tdROW1_XPATH));
        action.doubleClick(element).perform();
    }

    public void clickRefresh_AlarmTab(){
        driver.findElement(By.xpath(btnREFRESH_ALARM_TAB)).click();
    }

    public void selectAction(String value){
        wait(1000);
        selectDropDownNameAndValue(ddACTION, value, false);
    }

    public void clickCloseButtonOnFrame(){
        driver.findElement(By.xpath(btnCLOSE_ON_FRAME_XPATH)).click();
    }
    public void clickOnCloseImage(){
        System.out.println("inside frame");
        //driver.findElement(By.id("WIN_0_860000010")).click();

       // driver.findElement(By.xpath("//button[@title='Close']")).click();
        driver.findElement(By.id(imgCLOSED_ID)).click();
    }

    public void clickAlarmTab(){
        driver.findElement(By.xpath(tabALARM_XPATH)).click();
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

    public void selectDdValueAll() {
        selectDropDownValue(ddValueALL);
    }

    public void selectDdValueAsignedToMe() {
        selectDropDownValue(ddValueASIGNED_TO_ME);
    }

    public void selectDdValueCreatedByMe() {
        selectDropDownValue(ddValueCREATED_BY_ME);
    }

    public void selectDdValueOWNED_BY_ME() {
        selectDropDownValue(ddValueOWNED_BY_ME);
    }


    public void selectDdValueAllTickets() {
        selectDropDownValue(ddValueALL_TICKETS);
    }

    public void selectDdValueChangeProject() {
        selectDropDownValue(ddValueCHANGE_PROJECT);
    }

    public void selectDdValueChangeFreeze() {
        selectDropDownValue(ddValueCHANGE_FREEZE);
    }

    public void selectDdValueChangeRecord() {
        selectDropDownValue(ddValueCHANGE_RECORD);
    }

    public void selectDdValueKnownError() {
        selectDropDownValue(ddValueKNOWN_ERROR);
    }

    public void selectDdValuePB_OP_KE() {
        selectDropDownValue(ddValuePB_OP_KE);
    }

    public void selectDdValueProblem() {
        selectDropDownValue(ddValuePROBLEM);
    }

    public void selectDdValueTroubleTicket() {
        selectDropDownValue(ddValueTROUBLE_TICKET);
    }

    public void selectDdValueWO_OP() {
        selectDropDownValue(ddValueWO_OP);
    }

    public void selectDdValueWO_OP_CR() {
        selectDropDownValue(ddValueWO_OP_CR);
    }

    public void selectDdValueWorkOrder() {
        selectDropDownValue(ddValueWORK_ORDER);
    }

    public boolean isColumnDisplayed(String columnName)
    {
        return isColumnDisplayedByDivId(columnName, timeline_table_DIV_ID);
    }

    public void enterSearch(String searchText) {
        wait(2000);
        driver.findElement(By.id(txtSEARCH)).sendKeys(searchText);
        driver.findElement(By.id(txtSEARCH)).sendKeys(Keys.ENTER);
    }


    public void clickCreateMenu() {

        selectMainMenu(menuForCREATE);


    }

    public void clickConsoleMenu() {

        selectMainMenu(menuForCONSOLE);

    }

    public void clickSearchMenu() {

        selectMainMenu(menuForSEARCH);

    }


    public void clickAdministrationMenu() {

        selectMainMenu(menuForADMINISTRATION);

    }

    public void clickNavUserMenu() {
        selectMainMenu(menuForNAV_USERNAME);

    }

    public void clickSearch() {
        driver.findElement(By.id(btnSEARCH)).click();
    }

    public void clickClear() {
        driver.findElement(By.id(btnCLEAR)).click();
    }

    public void clickRefresh() {
        driver.findElement(By.id(btnREFRESH)).click();
    }

    public void clickHideFunctions() {
        driver.findElement(By.id(btnHIDE_FUNCTIONS)).click();
    }

    public void clickMoreFilters() {
        driver.findElement(By.id(btnMORE_FILTERS)).click();
    }

    public void clickSave() {
        driver.findElement(By.id(btnSAVE)).click();
    }

    public void clickAdd() {
        driver.findElement(By.id(btnADD)).click();
    }

    public void clickMenuItemAgentConsole() {

        selectMenuItem(menuItemAGENT_CONSOLE);
    }

    public void clickMenuItemAlertConsole() {
        selectMenuItem(menuItemALERT_CONSOLE);
    }

    public void clickMenuItemSIDConsole() {
        selectMenuItem(menuItemSID_CONSOLE);
    }

    public void clickMenuItemChangeRecord() {
        selectMenuItem(menuItemCHANGE_RECORD);
    }

    public void clickMenuItemFromFile() {

        selectMenuItem(menuItemFROM_FILE);
    }

    public void clickMenuItemProblemRecord() {

        selectMenuItem(menuItemPROBLEM_RECORD);
    }

    public void clickMenuItemTroubleEvent() {

        selectMenuItem(menuItemTROUBLE_EVENT);
    }

    public void clickMenuItemWorkOrder() {
        selectMenuItem(menuItemWORK_ORDER);
    }

    public void clickMenuItemMyAccount() {
        selectMenuItem(menuItemMY_ACCOUNT);
    }

    public void clickMenuItemChangePassword() {
        selectMenuItem(menuItemCHANGE_PASSWORD);
    }

    public void clickMenuItemHelp() {
        selectMenuItem(menuItemHELP);
    }

    public void clickMenuItemAbout() {
        selectMenuItem(menuItemABOUT);
    }

    public void clickMenuItemLogout() {
        selectMenuItem(menuItemLOGOUT);
    }


    public void selectAllRoles() {
        selectDropDownValue(ddValueALL_ROLES);
    }

    public void selectInterestedParties() {
        selectDropDownValue(ddValueINTERESTED_PARTIES);
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
        driver.findElement(By.id(ddALL_TICKETS)).click();
    }

    public void clickAllRolesDropDown() {
        driver.findElement(By.id(ddALL_ROLES)).click();
    }

    public void clickAllDropDown() {
        driver.findElement(By.id(ddALL)).click();
    }

    public int getColumnIndexByHeaderName(String columnName) {
        return BasePage.getColumnIndexByHeaderName(By.id(table_ID), columnName);
    }

    public void selectSearchMenu(String menuItem){
        selectMainMenuAndMenuItem(menuForSEARCH, menuItem);
    }

    public String getAlarmNumber(){
        return driver.findElement(By.id(txtALARM_NUMBER_ID)).getAttribute("value");
    }



}
