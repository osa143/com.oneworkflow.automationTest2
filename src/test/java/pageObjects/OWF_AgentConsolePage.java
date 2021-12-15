package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;
import utils.CommonUtils;

//import javax.xml.bind.SchemaOutputResolver;
import java.util.List;

public class OWF_AgentConsolePage extends BaseRecordPage {

    Actions action = new Actions(driver);
    private static final String menuForCONSOLE = "Console";
    private static final String menuForCREATE = "Create";
    private static final String menuForSEARCH = "Search";
    private static final String menuForADMINISTRATION = "Administration";
    private static final String menuForNAV_USERNAME = "Nav-Username";
    private static final String menuItemSID_CONSOLE = "SID Console";
    private static final String menuItemCHANGE_RECORD = "Change Record/Project/Freeze";
    private static final String menuItemPROBLEM_RECORD = "Problem Record";
    private static final String menuItemTROUBLE_EVENT = "Trouble Event";
    private static final String menuitemKNOWN_ERROR = "Known Error";
    private static final String menuItemLOGOUT = "Logout";
    private static final String txt_SEARCH= "arid_WIN_2_730000011";
    private static final String btnSEARCH = "WIN_0_700010480";
    private static final String btnCLEAR = "WIN_0_777501009";
    private static final String btnREFRESH_IMAGE = "WIN_0_8000903";
    private static final String btnHIDE_FUNCTIONS = "WIN_0_999000120";
    private static final String btnSAVE = "WIN_0_700010480";
    private static final String btnADD = "WIN_0_800006404";

    private static final String ddALL_TICKETS = "WIN_0_700010167";
    private static final String ddALL_ROLES = "WIN_0_700010200";
    private static final String dd_ALL_TICKETS= "arid_WIN_0_700010166";
    private static final String dd_STATUS= "Status";
    private static final String dd_ALL_ROLES= "Fld-RoleViewMenu";
    private static final String dd_ALL = "Fld-ViewTicketsID";
    private static final String ddValueMYASSIGNEE_PROFILE = "My Assignee Profile";
    private static final String ddValueCREATER_USER_LEVEL = "Creator (user level)";
    private static final String ddValueMY_OWNER_PROFILE = "My Owner Profile";
    private static final String ddValueWO_OP = "WO & OP";

    private static final String table_ID = "T777000002";
    private static final String QuickSearch_table_ID= "T700010488";
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
    private static final String fld_ALERTS= "WIN_3_999000104";
    private static final String fld_NEW= "WIN_3_999000106";
    private static final String fld_ASSIGNED= "WIN_3_999000108";
    private static final String fld_WIP= "WIN_3_999000110";
    private static final String fld_CLEARED= "WIN_3_999000112";
    private static final String btn_QUICK_SEARCH= "WIN_0_999000675";
    private static final String txt_LOCATION_ID_PLUS= "arid_WIN_0_777031006";
    private static final String table_SELECT_LOCATION= "T700024013";
    private static final String btn_CANCEL_SELECT_LOCATION= "WIN_0_700000105";
    private static final String btn_CLEAR_SELECT_LOCATION= "WIN_0_700010521";
    private static final String txt_LOCATION_NAME_PLUS= "arid_WIN_0_777031430";
    private static final String txt_TITLE_MORE_FILTERS= "arid_WIN_0_600001002";
    private static final String btn_NEW= "WIN_0_700002008";
    private static final String row1_AUTO_ASSIGNMENT_RULES_TABLE= "//*[@id='T700002001']/tbody/tr[2]/td[1]";
    private static final String btn_OPEN= "WIN_0_700002009";
    private static final String txt_TITLE= "arid_WIN_3_800038101";
    private static final String fld_TIMEZONE= "//div[@arid='800004002']";
    private static final String btn_OK="//*[@id='PopupMsgFooter']/a";
    private static final String btn_CLOSE= "//a[@arid='777000001']";
    private static final String txt_TIMEZONE= "//div[@arid='799999958']/textarea";
    private static final String btn_SAVE_MY_ACCOUNT="//a[@arid='1003']";
    private static final String btn_Open_User = "WIN_0_700027095";
    private static final String btn_Add_Right = "WIN_3_800080011";
    private static final String btn_Close_User_Information = "//a[@arid='777000001']";
    private static final String btn_Remove_Left = "WIN_3_800080012";
    private static final String table_Available_Trust_Principles="T800080004";
    private static final String table_Selected_Trust_Principles="T800080007";
    private static final String txt_QUICK_CREATE_TITLE="arid_WIN_0_800007025";
    private static final String dd_QUICK_CREATE_REQUEST_TYPE="arid_WIN_0_800007026";
    private static final String txt_QUICK_CREATE_TROUBLE_DESCRIPTION="arid_WIN_0_800007027";
    private static final String btn_QUICK_CREATE_BUTTON="WIN_0_800007034";
    private static final String dd_QUICK_CREATE_SOURCE="arid_WIN_0_800007021";
    private static final String ERROR_POP_UP="pbartable";
    private static final String chkbx_SWEDEN="WIN_0_rc0id830000120";
    private static final String table_USER_INFORMATION= "T700028052";
    private static final String TableRow1 = "//*[@id='T777000002']/tbody/tr[2]/td[2]";
    private static final String SELECT_TICKET_LINKED_ITEMS = "//*[@id='T777506000']/tbody/tr[2]/td[2]/nobr/span";
    private static final String UNLINK_BUTTON = "WIN_4_777506010";
    private static final String btn_OK_LINKED_ITEMS = "//*[@id='PopupMsgFooter']/a";
    private static final String rbtn_CAB_REQUIRED_NO= "WIN_0_rc0id800000002";
    private static final String txt_CI_QUICK_CREATE_SEARCH= "arid_WIN_0_700050220";
    private static final String tdROW1_QUICK_SEARCH_RESULTS= "//*[@id='T700010488']/tbody/tr[2]/td[2]";
    private static final String btn_CREATE_DATE= "//*[@id='WIN_0_700010488']/div[2]/div/div[1]/div[7]";
    private static final String btn_SHOW_TEMPLATE= "WIN_0_700047004";
    private static final String txt_FIRST_NAME= "arid_WIN_0_700020043";
    private static final String txt_LAST_NAME= "arid_WIN_0_700020044";
    private static final String txt_EMAIL_ADDRESS= "arid_WIN_0_700020045";
    private static final String btn_ADD= "WIN_0_700020037";
    private static final String table_Contacts= "T700020029";
    private static final String btn_CANCEL= "WIN_0_777777852";
    private static final String btn_REMOVE_SELECTED_PERSON= "WIN_0_700020031";
    private static final String btn_NEW_ALERT = "WIN_0_700002008";
    private static final String txt_QUALIFICATION_NAME = "arid_WIN_3_8";
    private static final String dd_SCHEMA = "arid_WIN_3_700010002";
    private static final String txt_QUALIFICATION = "arid_WIN_0_500182000";
    private static final String btn_APPLY_QUALIFICATION = "WIN_0_900008001";
    private static final String txt_ALARM_MESSAGE = "arid_WIN_3_800040444";
    private static final String btn_MAKE_PRIMARY = "WIN_0_860000016";
    private static final String btn_DETACH = "WIN_0_860000011";
    private static final String btn_DETACH_AND_CREATE = "WIN_0_860000013";
    private static final String btn_OPEN_ALARM = "WIN_0_860000010";
    private static final String AlarmsTableRow1 = "//*[@id='T860000008']/tbody/tr[2]";
    private static final String AlarmsTableRow2 = "//*[@id='T860000008']/tbody/tr[3]";
    private static final String AlarmsTableRow3 = "//*[@id='T860000008']/tbody/tr[4]";
    private static final String AlarmsTableRow4 = "//*[@id='T860000008']/tbody/tr[5]";
    private static final String AlarmsTableRow5 = "//*[@id='T860000008']/tbody/tr[6]";

    public void clickOnAlarmsTableRow5(){
        clickElement(By.xpath(AlarmsTableRow5));
    }

    public void clickOnAlarmsTableRow4(){
        clickElement(By.xpath(AlarmsTableRow4));
    }

    public void clickOnAlarmsTableRow3(){
        clickElement(By.xpath(AlarmsTableRow3));
    }

    //*[@id="T860000008"]/tbody/tr[3]

    public void clickOnAlarmTableRow2(){
        clickElement(By.xpath(AlarmsTableRow2));
    }

    public void clickOnAlarmTableRow1(){
        clickElement(By.xpath(AlarmsTableRow1));
    }

    public void clickOpenAlarm(){
        clickElementById(btn_OPEN_ALARM);
    }

    public void clickDetachAndCreate(){
        clickElementById(btn_DETACH_AND_CREATE);
    }

    public void clickDetachAlarmButton(){
        clickElementById(btn_DETACH);
    }

    public void clickMakePrimaryButton(){
        clickElementById(btn_MAKE_PRIMARY);
    }

    public void  enterAlarmMessage(String Message)
    {
        enterTextByElement(By.id(txt_ALARM_MESSAGE), Message);
    }

    public void clickApplyQualification(){
        clickElementById(btn_APPLY_QUALIFICATION);
    }

    public void enterQualification(String Qualification){
        enterTextByElement(By.id(txt_QUALIFICATION), Qualification);
    }

    public void selectSchemaDropdown(String value){
        selectDropDownNameAndValue(dd_SCHEMA, value, false );
    }

    public void enterQualificationName(String qualification){
        findElement(By.id(txt_QUALIFICATION_NAME)).clear();
        driver.findElement(By.id(txt_QUALIFICATION_NAME)).sendKeys(qualification);
    }

    public void  clickNewAlertButton(){
        clickElementById(btn_NEW_ALERT);
    }

    public void selectContactAndClicksRemoveSelectedPerson(String contact){
       WebElement contactEmail= getTableCellElement(By.id(table_Contacts), "Send Notification To", contact);
       contactEmail.click();
       clickElementById(btn_REMOVE_SELECTED_PERSON);
    }
    public void clickAddCancel(){
        clickElementById(btn_CANCEL);
    }
    public String getContacts(String columnName, int rowNum){
        return getTableCellData(By.id(table_Contacts), columnName, rowNum);
    }
    public void clickAdd_addPerson(){
        clickElementById(btn_ADD);
    }
    public void enterEmailAddress(String email){
        enterTextByElement(By.id(txt_EMAIL_ADDRESS), email);
    }
    public void enterLastName(String lastName){
        enterTextByElement(By.id(txt_LAST_NAME), lastName);
    }
    public void enterFirstName(String firstName){
        enterTextByElement(By.id(txt_FIRST_NAME), firstName);
    }
    public void clickShowTemplate(){
        clickElementById(btn_SHOW_TEMPLATE);
    }
    public void doubleClickOnTicket_QuickSearchResults(){
        WebElement element= findElement(By.xpath(tdROW1_QUICK_SEARCH_RESULTS));
        action.doubleClick(element).perform();
    }
    public String getQuickSearchResults_TableData(String colName, int rowNum){
        return getTableCellData(By.id(QuickSearch_table_ID), colName, rowNum);
    }
    public void clickOnCreateDate_ToSortTheTickets(){
       clickElement(By.xpath(btn_CREATE_DATE));
    }
    public void enter_CI_QuickSearch(String text){
        enterTextByElement(By.id(txt_CI_QUICK_CREATE_SEARCH), text);
    }
    public boolean verifyCabRequiredNoTickets(){
        WebElement element = findElement(By.xpath(TableRow1));
        action.doubleClick(element).perform();
        action.doubleClick(element).perform();
        CommonUtils.switchToChildWindow(driver, 2);
        wait(5000);
        selectTab("Schedule");
        return verifyIsElementSelected(By.id(rbtn_CAB_REQUIRED_NO));

    }
    public void clickOkButton(){
        switchToFrameByIndex(2);
        clickElementByContainsTextAndTagName("a", "OK");

    }

    public void verifyTicketIsUnlinked(){
        Assert.assertNotEquals(CommonUtils.UnlinkTicket, getTextByElement(By.xpath(SELECT_TICKET_LINKED_ITEMS)));
    }

    public void selectTicketAndUnlink(){
        CommonUtils.UnlinkTicket=getTextByElement(By.xpath(SELECT_TICKET_LINKED_ITEMS));
        clickElement(By.xpath(SELECT_TICKET_LINKED_ITEMS));
        clickElementById(UNLINK_BUTTON);
    }

    public void clickOnTableRow1_agentConsole(){
        clickElement(By.xpath(TableRow1));
    }

    public void enterTicketID(String ticket) {
        enterTextByElement(By.id(txt_SEARCH), ticket);
        driver.findElement(By.id(txt_SEARCH)).sendKeys(Keys.ENTER);
        wait(1000);
    }

    public boolean verifyUserProfiles(String colName, String colValue, boolean partialText){
        return verifyColumnValuesMultiple(By.id(table_USER_INFORMATION), colName, colValue, partialText );

    }
    public void clickQuickCreateSwedenCheckBox() {
        driver.findElement(By.id(chkbx_SWEDEN)).click();
    }

    public String getErrorPopUpText(){
        driver.switchTo().parentFrame();
        //driver.switchTo().frame(2);
        //driver.switchTo().frame(1);
        String error= findElement(By.id(ERROR_POP_UP)).getText();
        System.out.println("Error message is: " +error);
        return error;
    }

    public void selectQuickCreateTroubleSource(String requestType){
        clickElement(By.id(dd_QUICK_CREATE_SOURCE));
        selectDropDownValue(requestType);
    }

    public void clickQuickCreateButton(){
        clickElementById(btn_QUICK_CREATE_BUTTON);
    }

    public void enterQuickCreateTroubleTitle(String title) {
        findElement(By.id(txt_QUICK_CREATE_TITLE)).clear();
        driver.findElement(By.id(txt_QUICK_CREATE_TITLE)).sendKeys(title);
    }

    public void selectQuickCreateTroubleRequestType(String requestType){
        clickElement(By.id(dd_QUICK_CREATE_REQUEST_TYPE));
        selectDropDownValue(requestType);
    }

    public void enterQuickCreateTroubleDescription(String description) {
        findElement(By.id(txt_QUICK_CREATE_TROUBLE_DESCRIPTION)).clear();
        driver.findElement(By.id(txt_QUICK_CREATE_TROUBLE_DESCRIPTION)).sendKeys(description);
    }

    public Boolean getTrustPrinciplesAvailableCountry(int rowNum, String expectedCountry) {
        int count = getTableRowsCount(table_Selected_Trust_Principles);
        System.out.println("Trust Principles Available Country count is " + count);
        if (count <=1) {
            return false;
        }
        else
            {
            String actualCountry = getTableCellData(By.id(table_Selected_Trust_Principles), "TP Description", rowNum);
            System.out.println(actualCountry);
            System.out.println(expectedCountry);
            if (actualCountry.contains(expectedCountry)) {
            }
            return true;
        }
    }
    public boolean verifyAvailableTrustPrinciplesCountries(String countries) {
        int count = getTableRowsCount(table_Available_Trust_Principles);
        if (count > 5) {
            String[] country = countries.split(":");
            System.out.println("Trust principles country values are: " + country);
            for (int i = 0; i < country.length; i++) {
                verifyElementIsDisplayedByContainsTextAndTagName("span", country[i]);
            }
         return true;
        }
        else return false;
    }

    public void clickRemoveLeft(){
        clickElementById(btn_Remove_Left);
    }

    public void clickCloseUserInformation(){
        clickElement(By.xpath(btn_Close_User_Information));
    }

    public void  clickAddRight(){
        clickElementById(btn_Add_Right);
    }

    public void clickOpenUser(){
        clickElementById(btn_Open_User);
    }

    public void clickSaveButton_MyAccount(){
        clickElement(By.xpath(btn_SAVE_MY_ACCOUNT));
    }

    public void enterTimeZone(String timeZone){
        WebElement TimeZoneTextBox= findElement(By.xpath(txt_TIMEZONE));
        TimeZoneTextBox.clear();
        TimeZoneTextBox.sendKeys(timeZone);
    }

    public void closeConfirmationMessageAndClickCloseButton(){
        wait(2000);
        switchToFrameByIndex(2);
        clickElement(By.xpath(btn_OK));
        clickElement(By.xpath(btn_CLOSE));
        switchToDefault();
    }

    public String getTimezone(){
        String TimeZone= getTextByElement(By.xpath(fld_TIMEZONE));
        System.out.println(TimeZone);
        return TimeZone;
    }
    public void selectMenuAndItem(String menu, String item){
        selectMainMenuAndMenuItem(menu, item);
    }

    public boolean verifyTitleDropdownValues(String options, String dropdownName ){
        return verifyDropdownValues(options, dropdownName, txt_TITLE);
    }



    public void clickOpen_AssignmentRules(){
        clickElement(By.id(btn_OPEN));
    }
    public void clickRow1_AssignmentRulesTable(){
        clickElement(By.xpath(row1_AUTO_ASSIGNMENT_RULES_TABLE));
    }
    public void clickNew_AssignmentRules(){
        clickElement(By.id(btn_NEW));
    }
    public void doLogout(){
        selectDropDownNameAndValue(menuForNAV_USERNAME, menuItemLOGOUT, false);
    }

    public void enterTitle_moreFilter(String text){
        enterTextByElement(By.id(txt_TITLE_MORE_FILTERS), text);
    }

    public void enterLocationNamePlus_selectLocation(String text){
        enterTextByElement(By.id(txt_LOCATION_NAME_PLUS), text);
    }
    public void enterSendKeysToLocationNamePlus(){
        enterSendKeys(By.id(txt_LOCATION_NAME_PLUS));
    }

    public void clickClear_selectLoaction(){
        clickElement(By.id(btn_CLEAR_SELECT_LOCATION));
    }

    public void clickCancel_selectLocation(){
        clickElement(By.id(btn_CANCEL_SELECT_LOCATION));
    }

   public boolean verifyLocation(String colName, String colValue, boolean partialText){
       return verifyColumnValuesMultiple(By.id(table_SELECT_LOCATION), colName, colValue, partialText );

   }
    public void enterLocationPlus(String text){
        enterTextByElement(By.id(txt_LOCATION_ID_PLUS), text);
    }



    public void clickQuickSearch(){
        clickElement(By.id(btn_QUICK_SEARCH));
        wait(3000);
    }

    public boolean verifyTicketsAssignedToCurrentUserProfile(String colName, String colValue, boolean partialText){
        return verifyColumnValuesMultiple(By.id(table_ID), colName, colValue, partialText );

    }
    public boolean verifyTicketsFilteredToSearch(String colName, String colValue, boolean partialText){
        return verifyColumnValuesMultiple(By.id(QuickSearch_table_ID), colName, colValue, partialText );
    }
    public String getAgentConsoleTableCellData(String columnName, int rowNum){
        return getTableCellData(By.id(table_ID), columnName, rowNum);
    }

   public String getAlerts(){
       String alerts= getTextByID(fld_ALERTS);
       System.out.println("Number of Alerts alerts: " +alerts );
       return alerts;

   }
    public String getNew(){
        String ticketsNew= getTextByID(fld_NEW);
        System.out.println("Number of New Tickets are: " + ticketsNew);
        return ticketsNew;
    }
    public String getAssigned()
    {
        String ticketsAssigned = getTextByID(fld_ASSIGNED);
        System.out.println("Number of Assigned Tickets are: " + ticketsAssigned);
        return ticketsAssigned;
    }
    public String getWip(){
        String ticketsWip = getTextByID(fld_WIP);
        System.out.println("Number of WIP Tickets are: " + ticketsWip);
        return ticketsWip;
    }
    public String getCleared(){
        String ticketsCleared = getTextByID(fld_CLEARED);
        System.out.println("Number of cleared Tickets are: " + ticketsCleared);
        return ticketsCleared;
    }
    public void clickOk(){
        wait(500);
        clickElement(By.xpath(btn_OK_REFRESH_INTERVAL));
    }

    public void enterRefreshInterval(String time){
        enterTextByElement((By.id(txt_REFRESH_INTERVAL)), time);
    }
    public boolean verifySearchIsDisplayed(){
        return verifyElementIsDisplayed(By.id(txt_SEARCH));
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
        wait(500);
        selectDropDownNameAndValue(dd_ALL_TICKETS, value, false);
        wait(5000);
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
        int count= getTableRowsCount(table_ID);
        System.out.println(count);
        if (count>50)
            return true;
        else return false;
        }

     public void selectCreateAsKnownError(){
        selectMainMenuAndMenuItem(menuForCREATE, menuitemKNOWN_ERROR);
     }
    public void selectCreateMenu(String menuItem){
        selectMainMenuAndMenuItem(menuForCREATE, menuItem);
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
        wait(1000);
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
        wait(1000);
    }

    public void clickPreferences() {
        driver.findElement(By.id(table_ID)).findElement(By.xpath("//a[contains(text(),'Preferences')]")).click();
    }


    public void acceptAlert(){
        driver.switchTo().alert().accept();
    }

    public int getTableRowsCount(String tableID) {
        return getTableRows(By.id(tableID)).size();
    }
    public int getTableRowsCount() {
        return getTableRows(By.id(table_ID)).size();
    }

    public Boolean verifyAgentConsoleHasData(){
        int count= getTableRowsCount(table_ID);
        if(count>1)
            return true;
        else return false;
    }

    public int getAlarmTableRowsCount(){
        return getTableRows(By.id(timeline_TABLE_ID)).size();
    }

    public boolean validateOpNextDueDateInformation() {
        return columnHasData(table_ID, "OP Next Due Date");
    }
    public boolean verifyColumnHasData(String columnName) {
        return columnHasData(table_ID, columnName);
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
        driver.findElement(By.id(txt_SEARCH)).sendKeys(searchText);
        driver.findElement(By.id(txt_SEARCH)).sendKeys(Keys.ENTER);
        wait(2000);
    }


    public void clickCreateMenu() {
        selectMainMenu(menuForCREATE);
       wait(500);

    }

    public void clickConsoleMenu() {
        selectMainMenu(menuForCONSOLE);

    }

    public void clickNavUserMenu() {
        selectMainMenu(menuForNAV_USERNAME);
        wait(1000);

    }

    public void clickSearch() {
        clickElement(By.id(btnSEARCH));
    }

    public void clickClear() {
        clickElement(By.id(btnCLEAR));
    }

    public void clickRefresh_image() {
        clickElement(By.id(btnREFRESH_IMAGE));
        wait(2000);
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
        try{
            switchToFrameByIndex(2);
            clickElementByContainsTextAndTagName("*", "Yes");
        }
        catch (Exception e){

        }
        wait(2000);
    }

    public void clickMenuItemLogout_Hooks() {
        selectMenuItem(menuItemLOGOUT);
        wait(2000);
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
        wait(1000);
    }

    public void selectMyCreaterUserLevel() {
        selectDropDownValue(ddValueCREATER_USER_LEVEL);
        wait(1000);
    }

    public void selectMyOwnerProfile() {
        selectDropDownValue(ddValueMY_OWNER_PROFILE);
        wait(2000);
    }

    public void clickAllTicketsDropDown() {
        clickElement(By.id(ddALL_TICKETS));
        wait(1000);
    }

    public void clickAllRolesDropDown() {
        clickElement(By.id(ddALL_ROLES));
        wait(1000);
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

    public void enterSendKeysInSearchBox(){
        enterSendKeys(By.id(txt_SEARCH));
    }

    public void selectAdministrationMenu(String menuItem){
        selectMainMenuAndMenuItem(menuForADMINISTRATION, menuItem);
    }
}
