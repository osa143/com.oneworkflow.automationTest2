package steps;

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

import java.util.List;

public class SAO_191_SiteNameDetailsStepDef {

    OWF_LoginPage loginPage = new OWF_LoginPage();
    OWF_AgentConsolePage agentConsolePage= new OWF_AgentConsolePage();
    OWF_SIDConsolePage sidConsolePage = new OWF_SIDConsolePage();

    WebDriver driver;
    String appURL = "https://td220lbf-mtint.ddc.teliasonera.net/arsys/shared/login.jsp?/arsys/";

    @Given("the application is OneWorkFlow")
    public void theApplicationIsOneWorkFlow() {
        loginPage.getURL(appURL);
    }


    @And("I login with valid user credentials")
    public void iLoginWithValidUserCredentials(){
        loginPage.doLogin("Tohall_copy", "Test@1234" );
        loginPage.wait(3000);
    }

    @When("I select SID console from agent console")
    public void iSelectSIDConsoleFromAgentConsole() {
        agentConsolePage.clickConsoleMenu();
        agentConsolePage.clickMenuItemSIDConsole();
        CommonUtils.SwitchWindow(driver, "child");
    }

    @And("I select Category as Access")
    public void iSelectCategoryAsAccess() {
        sidConsolePage.clickCategoryDd();
        sidConsolePage.selectDdValueAccess();;
    }

    @And("I select Type as Radio Access Network")
    public void iSelectTypeAsRadioAccessNetwork() {
       sidConsolePage.clickTypeMenu();
       sidConsolePage.selectDdValueAccessTransport();;
    }

    @And("I select Item as GSMCell")
    public void iSelectItemAsGSMCell() {
        sidConsolePage.clickItemMenu();

    }

    @And("I click on Search")
    public void iClickOnSearch() throws InterruptedException {
       sidConsolePage.clickSearchButton();
       wait(2000);

    }

    @Then("Site name should be displayed for all CI CTI search details")
    public void siteNameShouldBeDisplayedForAllCICTISearchDetails() {
        ValidateSiteNameDetails();
    }

    @And("I logout and close the browser")
    public void iLogoutAndCloseTheBrowser() throws InterruptedException {
        CommonUtils.SwitchWindow(driver, "parent");
        agentConsolePage.clickNavUserMenu();
        wait(1000);
        agentConsolePage.clickMenuItemLogout();
        wait(1000);
        loginPage.tearDown();
    }

    private void ValidateSiteNameDetails() {
        int columnIndex = loginPage.getColumnIndexByHeaderName("Site Name");

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



