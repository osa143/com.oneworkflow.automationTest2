package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pageObjects.OWF_KnownErrorPage;

public class OWF_KnownErrorPageSteps {

    OWF_KnownErrorPage knownErrorPage= new OWF_KnownErrorPage();

    @Then("known error form should appear in new tab")
    public void knownErrorFormShouldAppearInNewTab() {
        //Title Assertion
    }



    @And("user clicks on add button under interested parties")
    public void userClicksOnAddButtonUnderInterestedParties() {
        knownErrorPage.clickAddButton_interestedParties();

    }

    @And("user selects type as {string} under interested parties")
    public void userSelectsTypeAsUnderInterestedParties(String arg0) {
       knownErrorPage.selectType(arg0);
    }

    @And("user clicks on radio button user")
    public void userClicksOnRadioButtonUser() {
        knownErrorPage.clickOnUserRadioButton();

    }

    @And("user selects request type as {string} on known error page")
    public void userSelectsRequestTypeAsOnKnownErrorPage(String arg0) {
      knownErrorPage.selectRequestType(arg0);
    }

    @And("user enters {string} in login name plus field")
    public void userEntersInLoginNamePlusField(String arg0) {
        knownErrorPage.enterLoginNamePlus(arg0);
    }

    @And("user enters {string} in first name plus field")
    public void userEntersInFirstNamePlusField(String arg0) {
        knownErrorPage.enterFirstNamePlus(arg0);
    }

    @And("user enters {string} in last name plus field")
    public void userEntersInLastNamePlusField(String arg0) {
        knownErrorPage.enterLastNamePlus(arg0);
    }

    @And("user clicks on search under add interested party")
    public void userClicksOnSearchUnderAddInterestedParty() {
        knownErrorPage.clickSearch_AddInterestedParties();
    }

    @And("user selects access radio button as read and write")
    public void userSelectsAccessRadioButtonAsReadAndWrite() {
        knownErrorPage.clickReadWrite_access();
    }

    @And("user selects auto notify radio button as yes")
    public void userSelectsAutoNotifyRadioButtonAsYes() {
        knownErrorPage.clickYes_notify();
    }

    @Then("known error ticket status should be {string}")
    public void knownErrorTicketStatusShouldBe(String arg0) {
        Assert.assertEquals(knownErrorPage.getStatusText(), arg0);
    }

    @Then("time tracking window should open")
    public void timeTrackingWindowShouldOpen() {
        knownErrorPage.switchToFrameByIndex(2);
    }

    @When("user selects activity dropdown as {string}")
    public void userSelectsActivityDropdownAs(String arg0) {
        knownErrorPage.selectActivity_WorkingOnTicket();
    }


    @And("user enters {string} in minutes field")
    public void userEntersInMinutesField(String arg0) {
        knownErrorPage.enterMins(arg0);
    }

}
