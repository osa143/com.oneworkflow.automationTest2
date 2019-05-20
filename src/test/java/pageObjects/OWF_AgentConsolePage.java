package pageObjects;

import org.openqa.selenium.By;

public class OWF_AgentConsolePage extends BasePage {

    public static final String menuForCONSOLE = "Console";
    public static final String menuForCREATE = "Create";
    public static final String menuForSEARCH = "Search";
    public static final String menuForADMINISTRATION = "Administartion";

    public static final String menuForNAV_USERNAME = "Menu for Nav-Username";

    public static final String menuItemAGENT_CONSOLE = "Agent Console";
    public static final String menuItemALERT_CONSOLE = "Alert Console";
    public static final String menuItemSID_CONSOLE = "SID Console";
    public static final String menuItemCHANGE_RECORD = "Change Record/Project/Freeze";
    public static final String menuItemFROM_FILE = "From File";
    public static final String menuItemPROBLEM_RECORD = "Problem Record";
    public static final String menuItemTROUBLE_EVENT = "Trouble Event";
    public static final String menuItemWORK_ORDER = "Work Order";

    public static final String menuItemMY_ACCOUNT = "My Account";
    public static final String menuItemCHANGE_PASSWORD = "Change Password";
    public static final String menuItemHELP = "Help";
    public static final String menuItemABOUT = "About";
    public static final String menuItemLOGOUT = "Logout";

    public static final String txtSEARCH = "WIN_2_730000011";

    public static final String btnSEARCH = "WIN_0_700010480";
    public static final String btnCLEAR = "WIN_0_777501009";
    public static final String btnREFRESH = "WIN_0_8000903";
    public static final String btnHIDE_FUNCTIONS = "WIN_0_999000120";
    public static final String btnMORE_FILTERS = "WIN_0_600002901";
    public static final String btnSAVE = "WIN_0_700010480";
    public static final String btnADD = "WIN_0_800006404";

    public static final String ddfilterForALL_TICKETS = "WIN_0_700010167";
    public static final String ddfiltetForALL_ROLES = "WIN_0_700010200";
    public static final String ddfilterforALL = "WIN_0_700010165";

    public static final String ddFilterValueALL_ROLES = "All Roles";
    public static final String ddFilterValueINTERESTED_PARTIES = "Interested Parties";
    public static final String ddFilterValueMYASSIGNEE_PROFILE = "My Assignee Profile";
    public static final String ddFilterValueCREATER_USER_LEVEL = "Creator (user level)";
    public static final String ddFilterValueMY_OWNER_PROFILE = "My Owner Profile";

    public void enterSearch(String searchTExt){
        driver.findElement(By.id(txtSEARCH)).sendKeys(searchTExt);
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
        selectDropDownValue(ddFilterValueALL_ROLES);
    }

    public void selectInterestedParties() {
        selectDropDownValue(ddFilterValueINTERESTED_PARTIES);
    }

    public void selectMyAssigneeProfile() {
        selectDropDownValue(ddFilterValueMYASSIGNEE_PROFILE);
    }

    public void selectMyCreaterUserLevel() {
        selectDropDownValue(ddFilterValueCREATER_USER_LEVEL);
    }

    public void selectMyOwnerProfile() {
        selectDropDownValue(ddFilterValueMY_OWNER_PROFILE);
    }

    public void clickAllTicketsFilter() {
        driver.findElement(By.id(ddfilterForALL_TICKETS)).click();
    }

    public void clickAllRolesFilter() {
        driver.findElement(By.id(ddfiltetForALL_ROLES)).click();
    }

    public void clickAllFilter() {
        driver.findElement(By.id(ddfilterforALL)).click();
    }


}
