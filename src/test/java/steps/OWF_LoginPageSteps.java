package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pageObjects.OWF_LoginPage;
import pageObjects.SecurityConsolePage;
import utils.CommonUtils;

public class OWF_LoginPageSteps extends BaseSteps {

    OWF_LoginPage loginPage = new OWF_LoginPage();
    SecurityConsolePage securityConsolePage= new SecurityConsolePage();

    @Given("user is on the OneWorkflow login page")
    public void userIsOnTheOneWorkflowLoginPage() {
        loginPage.getURL(getProperties().getProperty("appURL"));
        String LoginPageTitle = loginPage.getPageTitle();
        System.out.println(LoginPageTitle);
        // Assert.assertEquals(LoginPageTitle, "BMC Remedy Mid Tier 9.1 - Login");
    }

    @When("user logs in with valid username {string} and password as {string}")
    public void userLogsInWithValidUsernameAndPasswordAs(String username, String password) {
        loginPage.doLogin(username, password);
        loginPage.wait(3000);

    }

    @When("user logs in with valid {string} and {string}")
    public void userLogsInWithValidAnd(String username, String password) {
        loginPage.doLogin(username, password);
        loginPage.wait(3000);
    }


    @When("user logs in with valid user and password")
    public void userLogsInWithValidUserAndPassword() {
        loginPage.doLogin(getProperties().getProperty("username"), getProperties().getProperty("password"));
        loginPage.wait(3000);
    }
    @When("user is on the OneWorkflow login page for security console")
    public void userIsOnTheOneWorkflowLoginPageForSecurityConsole() {
        loginPage.getURL(getProperties().getProperty("API_URL"));
    }

    @And("user validates security console is displayed")
    public void userValidatesSecurityConsoleIsDisplayed() {
        Assert.assertEquals("API:SYS:ADM:SecurityConsole (Search)", securityConsolePage.getPageTitle());
    }

    @When("user clicks on create new client button")
    public void userClicksOnCreateNewClientButton() {
        securityConsolePage.clickCreateNewClient();
    }

    @And("user enters client name as {string}")
    public void userEntersClientNameAs(String clientName) {
        securityConsolePage.enterClientName(clientName);
    }

    @When("user opens and selects {string} from {string} dropdown")
    public void userOpensAndSelectsFromDropdown(String dropDownValue, String dropDownName) {
          securityConsolePage.selectUserDropDown(dropDownName, dropDownValue);
    }

    @And("user validates chosen name {string} is in the user field")
    public void userValidatesChosenNameIsInTheUserField(String chosenName) {
          Assert.assertEquals(securityConsolePage.getChosenUser(), chosenName);
          securityConsolePage.wait(500);

    }

    @And("user validates old user value is cleared and new value {string} is set")
    public void userValidatesOldUserValueIsClearedAndNewValueIsSet(String newValue) {
        Assert.assertEquals(securityConsolePage.getChosenUser(), newValue);
    }

    @Then("user clears value in field and enters user as {string}")
    public void userClearsValueInFieldAndEntersUserAs(String text) {
        securityConsolePage.clearUserFieldAndEnterText(text);
    }

    @And("user validates user list is shown and selects user {string}")
    public void userValidatesUserListIsShownAndSelectsUser(String text) {
        securityConsolePage.EnterTextInUserAndSelectValue(text);
    }

    @And("user enters summary as {string}")
    public void userEntersSummaryAs(String summary) {
        securityConsolePage.enterSummary(summary);
    }

    @Then("user clicks on submit button")
    public void userClicksOnSubmitButton() {
        securityConsolePage.clickSubmit();
    }

    @And("user clicks close on confirmation window")
    public void userClicksCloseOnConfirmationWindow() {
        securityConsolePage.clickClose();
    }

    @Then("user validates created user {string} is present under {string} dropdown")
    public void userValidatesCreatedUserIsPresentUnderDropdown(String dropdownValues, String dropDownName) {
        securityConsolePage.verifyDropdownValues(dropdownValues, dropDownName, "notreadonly");
    }

    @When("user clicks create new operation button")
    public void userClicksCreateNewOperationButton() {
     securityConsolePage.clickCreateNewOperation();
    }

    @And("user enters operation name as {string}")
    public void userEntersOperationNameAs(String operationName) {
        securityConsolePage.enterOperationName(operationName);
    }

    @Then("user validates created operation {string} is present under {string} dropdown")
    public void userValidatesCreatedOperationIsPresentUnderDropdown(String dropdownValues, String dropDownName) {
        securityConsolePage.verifyDropdownValues(dropdownValues, dropDownName, "notreadonly");
    }

    @Then("user validates that {string} is present under user and readonly")
    public void userValidatesThatApitesterIsPresentUnderUserAndReadonly(String userValue) {
        Assert.assertEquals(securityConsolePage.getChosenUser(), userValue);
        Assert.assertTrue(securityConsolePage.verifyUserIsReadOnly());
    }

    @When("user clicks the pencil icon")
    public void userClicksThePencilIcon() {
        securityConsolePage.clickPencilIcon();
    }

    @Then("user validates client name is readonly")
    public void userValidatesClientNameIsReadonly() {
        Assert.assertTrue(securityConsolePage.verifyClientNameIsReadOnly());
    }

    @And("user validates operation is readonly")
    public void userValidatesOperationIsReadonly() {
        Assert.assertTrue(securityConsolePage.verifyOperationIsReadOnly());
    }

    @And("user validates user is editable and not read only")
    public void userValidatesUserIsEditableAndNotReadOnly() {
        Assert.assertFalse(securityConsolePage.verifyUserIsReadOnly());
    }

    @When("user enters user as {string}")
    public void userEntersUserAs(String user) {
        securityConsolePage.enterUser(user);
    }

    @And("user clicks on the confirm button")
    public void userClicksOnTheConfirmButton() {
        securityConsolePage.clickConfirm();
    }

    @Then("user validates user as {string}")
    public void userValidatesUserAs(String userValue) {
        Assert.assertEquals(securityConsolePage.getChosenUser(), userValue);
    }

    @And("user clicks on the enable button")
    public void userClicksOnTheEnableButton() {
        securityConsolePage.clickEnable();
    }

    @Then("user validates {string} is present under the request table in row {int}")
    public void userValidatesIsPresentUnderTheRequestTable(String API_OperationName, int row) {
        Assert.assertEquals(securityConsolePage.get_API_operation("API Operation", row), API_OperationName);
    }

    @When("user selects {string} request in the table")
    public void userSelectsRequestInTheTable(String text) {
        securityConsolePage.clickElementByContainsTextAndTagName("span", text);
    }

    @And("user clicks on the Edit GUID button")
    public void userClicksOnTheEditGUIDButton() {
        securityConsolePage.clickEdit_Guid();
    }

    @Then("user validates {string} window shows")
    public void userValidatesWindowShows(String windowTitle) {
        Assert.assertEquals(securityConsolePage.getPageTitle(), windowTitle);
    }

    @And("user enters new GUID ID as {string}")
    public void userEntersNewGUIDIDAs(String new_guid_id_text) {
        securityConsolePage.enterNewGUID_ID(new_guid_id_text);
    }

    @And("user validates new GUID is shown as {string}")
    public void userValidatesNewGUIDIsShownAs(String expectedGuidID) {
       Assert.assertEquals(securityConsolePage.getCurrentGuidID(), expectedGuidID);
    }

    @And("user clicks on the disable button")
    public void userClicksOnTheDisableButton() {
        securityConsolePage.clickDisable();
    }

    @Then("user validates {string} request isnt present in the table")
    public void userValidatesRequestIsntPresentInTheTable(String API_OperationName) {
        Assert.assertNotEquals(securityConsolePage.get_API_operation("API Operation", 1), API_OperationName);
    }

    @When("user clicks on the reset button")
    public void userClicksOnTheResetButton() {
        securityConsolePage.clickReset();
    }

    @Then("all entries should be cleared from the table")
    public void allEntriesShouldBeClearedFromTheTable() {
        Assert.assertTrue(securityConsolePage.verifyAllEntriesAreCleared());
    }

    @Then("user validates {string} column is not present")
    public void userValidatesColumnIsNotPresent(String columnName) {
     Assert.assertFalse(securityConsolePage.isColumnDisplayed(columnName));
    }

    @Then("user validates {string} column is present")
    public void userValidatesColumnIsPresent(String columnName) {
        Assert.assertTrue(securityConsolePage.isColumnDisplayed(columnName));
    }

    @And("user clicks on remove client button")
    public void userClicksOnRemoveClientButton() {
        securityConsolePage.clickRemoveClient();
    }


    @Then("user validates {string} isnt present under the {string} drop down")
    public void userValidatesIsntPresentUnderTheDropDown(String clientName, String dropdownName) {
        Assert.assertFalse(securityConsolePage.verifyClientIsPresent(clientName, dropdownName, "notreadonly"));
    }

    @And("user clicks on removal operation button")
    public void userClicksOnRemovalOperationButton() {
        securityConsolePage.removeOperation();
    }

    @When("user clicks on home button")
    public void userClicksOnHomeButton() {
        securityConsolePage.clickHome();
        CommonUtils.switchToChildWindow(securityConsolePage.getDriver(), 2);
    }

    @Then("user validates the OW login page is displayed")
    public void userValidatesTheOWLoginPageIsDisplayed() {
        Assert.assertEquals("API:SYS:ADM:SecurityConsole (Search)", securityConsolePage.getPageTitle());
    }

    @When("user closes Edit GUID window")
    public void userClosesEditGUIDWindow() {
        securityConsolePage.switchToDefault();
        securityConsolePage.clickClose();
    }

    @When("user selects the preferences as {string}")
    public void userSelectsThePreferencesAs(String preferences) {
     securityConsolePage.selectPreferences(preferences);
    }


    @Then("user logs in with valid username {string} and password as {string} on new login page")
    public void userLogsInWithValidUsernameAndPasswordAsOnNewLoginPage(String username, String password) {
        loginPage.doNewLogin(username, password);
        loginPage.wait(3000);
    }

    @Then("user navigates back to login page using URL")
    public void userNavigatesBackToLoginPageUsingURL() {
//        loginPage.getURL(getProperties().getProperty("appURL"));
        loginPage.goBacktoLoginPage();
    }
}

