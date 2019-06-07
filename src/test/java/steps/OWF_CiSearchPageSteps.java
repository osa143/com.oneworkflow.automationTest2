package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.OWF_CiSearchPage;

public class OWF_CiSearchPageSteps {

    OWF_CiSearchPage ciSearchPage = new OWF_CiSearchPage();

    @Then("CI search tab should be opened")
    public void ciSearchTabShouldBeOpened() {

    }
    @And("user selects search for as {string}")
    public void userSelectsSearchForAs(String arg0) {
        ciSearchPage.clickSearchForDropdown();
        ciSearchPage.selectAllCiDdValue();
    }

    @And("user enters {string} in name field")
    public void userEntersInNameField(String arg0) {
        ciSearchPage.enterNamePlus(arg0);
    }

    @And("user clicks on search button on CI search window")
    public void userClicksOnSearchButtonOnCiSearchWindow() {
        ciSearchPage.clickCiSearchButton();

    }

    @And("user selects a CI from list")
    public void userSelectsACIFromList() {
        ciSearchPage.clickToSelectCi();
    }

    @And("user selects impact level as {string}")
    public void userSelectsImpactLevelAs(String level) {
        ciSearchPage.selectLevel(level);
    }

    @And("user clicks on relate CI")
    public void userClicksOnRelateCI() {
        ciSearchPage.clickRelateCiButton();
    }

    @And("user closes warning message and clicks on close button")
    public void userClosesWarningMessageAndClicksOnCloseButton() {
        ciSearchPage.acceptAlert();
        ciSearchPage.clickCloseButton();

    }
    @When("user clicks on clear button")
    public void userClicksOnClearButton() {
        ciSearchPage.clickClearButton();
    }


    @When("user clicks on linked items tab")
    public void userClicksOnLinkedItemsTab() {
        ciSearchPage.clickLinkedItems();
    }

    @And("user selects target application first dropdown as {string}")
    public void userSelectsTargetApplicationFirstDropdownAs(String arg0) {
     ciSearchPage.selectTargetApplicationFirst(arg0);
    }

    @And("user selects target application second dropdown as {string}")
    public void userSelectsTargetApplicationSecondDropdownAs(String arg0) {
        ciSearchPage.selectTargetApplicationSecond(arg0);
    }

    @When("user clicks on link button")
    public void userClicksOnLinkButton() {
        ciSearchPage.clickLink();
    }

    @Then("select target request window should open")
    public void selectTargetRequestWindowShouldOpen() {
        
    }

    @And("user enters ticket in ticket ID+ field")
    public void userEntersTicketInTicketIDField() {
        ciSearchPage.enterTicketIdPlus("here enter ticket previously created");
    }

    @And("user clicks ticket checkbox")
    public void userClicksTicketCheckbox() {
        ciSearchPage.clickToSelectCi();
    }

    @And("user clicks accept button")
    public void userClicksAcceptButton() {
        ciSearchPage.clickAcceptButton();
    }


    @Then("trouble ticket should be in list of linked items")
    public void troubleTicketShouldBeInListOfLinkedItems() {
        
    }

    @And("change ticket should be in list of linked items")
    public void changeTicketShouldBeInListOfLinkedItems() {
    }
}
