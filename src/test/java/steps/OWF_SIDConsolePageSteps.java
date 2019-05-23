package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import pageObjects.BasePage;
import pageObjects.OWF_SIDConsolePage;
import utils.CommonUtils;

import java.util.List;

public class OWF_SIDConsolePageSteps {
OWF_SIDConsolePage sidConsolePage = new OWF_SIDConsolePage();


    @Then("SID console page should be opened")
    public void sidConsolePageShouldBeOpened() {
        String SIDConsolePageTitle= sidConsolePage.getDriver().getTitle();
        System.out.println(SIDConsolePageTitle);
    }
    @When("user selects Category as Access")
    public void userSelectsCategoryAsAccess() {
        sidConsolePage.clickCategoryDropDown();
        sidConsolePage.selectDdValueAccess();;
    }
    @And("user selects Type as Radio Access Network")
    public void userSelectsTypeAsRadioAccessNetwork() {
        sidConsolePage.clickTypeDropDown();
        sidConsolePage.selectDdValueAccessTransport();;
    }

    @And("user selects Item as GSMCell")
    public void userSelectsItemAsGSMCell() {
        sidConsolePage.clickItemDropDown();
        sidConsolePage.selectDdValueGsmCell();
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

    private void ValidateSiteNameDetails() {
        int columnIndex = BasePage.getColumnIndexByHeaderName("Site Name");

        //Get all the table rows by Id
        List<WebElement> tableRows = sidConsolePage.getDriver().findElement(By.id("T700009024")).findElements(By.tagName("tr"));
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
