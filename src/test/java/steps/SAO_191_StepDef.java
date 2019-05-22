package steps;

import pageObjects.BasePage;
import pageObjects.OWF_SIDConsolePage;
import utils.CommonUtils;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import pageObjects.OWF_AgentConsolePage;
import pageObjects.OWF_LoginPage;
import utils.DriverSetUp;

import java.util.List;

public class SAO_191_StepDef extends DriverSetUp {


    WebDriver driver;

    OWF_LoginPage loginPage = new OWF_LoginPage(driver);
    BasePage basePage = new BasePage();
    OWF_AgentConsolePage agentConsolePage= new OWF_AgentConsolePage(driver);
    OWF_SIDConsolePage sidConsolePage = new OWF_SIDConsolePage();

    @Given("user is on OneWorkFlow login page")
    public void userIsOnOneWorkFlowLoginPage()
    {        String LoginPageTitle= driver.getTitle();
             System.out.println(LoginPageTitle);
        }
    @When("user logins with valid user credentials")
    public void userLoginsWithValidUserCredentials() throws InterruptedException {
        loginPage.doLogin("Tohall_copy", "Test@1234" );
        loginPage.wait(3000);
    }
    @Then("user successfully logged in to oneworkflow and agent console should be displayed")
    public void userSuccessfullyLoggedInToOneworkflowAndAgentConsoleShouldBeDisplayed() {
        String AgentConsolePageTitle= driver.getTitle();
        System.out.println(AgentConsolePageTitle);
    }
    @When("user selects SID console from agent console")
    public void userSelectsSIDConsoleFromAgentConsole() {
        agentConsolePage.clickConsoleMenu();
        agentConsolePage.clickMenuItemSIDConsole();
        CommonUtils.SwitchWindow(driver, "child");
    }
    @Then("SID console page should be opened")
    public void sidConsolePageShouldBeOpened() {
     String SIDConsolePageTitle= driver.getTitle();
System.out.println(SIDConsolePageTitle);
    }
    @When("user selects Category as Access")
    public void userSelectsCategoryAsAccess() {
        sidConsolePage.clickCategoryDd();
        sidConsolePage.selectDdValueAccess();;
    }
    @And("user selects Type as Radio Access Network")
    public void userSelectsTypeAsRadioAccessNetwork() {
        sidConsolePage.clickTypeMenu();
        sidConsolePage.selectDdValueAccessTransport();;
    }

    @And("user selects Item as GSMCell")
    public void userSelectsItemAsGSMCell() {
        sidConsolePage.clickItemMenu();
    }

    @And("user clicks on Search")
    public void userClicksOnSearch() throws InterruptedException {
        sidConsolePage.clickSearchButton();
        wait(2000);

    }

    @Then("ci details should be displayed")
    public void ciDetailsShouldBeDisplayed() {

    }

    @When("user verifies Site Name details avilable for all CI's")
    public void userVerifiesSiteNameDetailsAvilableForAllCIS() {

    }

    @Then("Site name should be displayed for all CI CTI search details")
    public void siteNameShouldBeDisplayedForAllCICTISearchDetails()
    {
        ValidateSiteNameDetails();
    }
    @And("user logouts and closes the browser")
    public void userLogoutsAndCloseTheBrowser() throws InterruptedException {
        CommonUtils.SwitchWindow(driver, "parent");
        agentConsolePage.clickNavUserMenu();
        wait(1000);
        agentConsolePage.clickMenuItemLogout();
        wait(1000);
        basePage.tearDown();
    }
    private void ValidateSiteNameDetails() {
        int columnIndex = BasePage.getColumnIndexByHeaderName("Site Name");

        //Get all the table rows by Id
        List<WebElement> tableRows = driver.findElement(By.id("T700009024")).findElements(By.tagName("tr"));
        String cellValue = null;
        if (columnIndex >= 0) {
            for (int i = 1; i < tableRows.size(); i++) {
                //Get all the cell values for Site Name column
                cellValue = tableRows.get(i).findElements(By.tagName("td")).get(columnIndex - 1).getText();
                //Check if Cell value is not null (if cell value is null, test should fail)
                Assert.assertNotNull(cellValue);
            }
        } else {
            //If we don't find the Site Name column, test should fail
            Assert.assertNotNull(cellValue);
        }

    }
}







