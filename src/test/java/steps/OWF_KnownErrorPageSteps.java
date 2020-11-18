package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pageObjects.OWF_KnownErrorPage;
import utils.CommonUtils;

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

    @When("user selects error code as {string}")
    public void userSelectsErrorCodeAs(String arg0) {
       knownErrorPage.selectCloserCode(arg0);
    }

    @When("user enters closure code as {string}")
    public void userEntersClosureCodeAs(String arg0) {
     knownErrorPage.enterClosureCode(arg0);
    }


    @And("user should see known error code as read only")
    public void userShouldSeeKnownErrorCodeAsReadOnly() {
        Assert.assertTrue(knownErrorPage.verifyIsKnownErrorCodeIsReadOnly());

    }

    @When("user enters next assessment date as {int} days in the future")
    public void userEntersNextAssessmentDateAsDaysInTheFuture(int delay) {
          int newDelay= delay*24*60;
          knownErrorPage.enterNextAssessmentDate(CommonUtils.getDateTime("MM/DD/yyyy HH:mm:ss ", "Europe/London", newDelay));
    }

    @Then("{string} shouldn't be visible")
    public void shouldnTBeVisible(String fields) {
        Assert.assertTrue(knownErrorPage.verifyFieldsInvisible(fields));
    }

    @And("user gets known error ticket")
    public void userGetsKnownErrorTicket() {
        String ticket = knownErrorPage.getTicketValue();
        System.out.println("Stored ticket is " + ticket);
        CommonUtils.keTicket = ticket;
    }

    @And("user enters known error ticket")
    public void userEntersKnownErrorTicket() {
        knownErrorPage.enterTicket(CommonUtils.keTicket);
    }

    @And("user validates all fields are read only and not editable")
    public void userValidatesAllFieldsAreReadOnlyAndNotEditable() {
        Assert.assertTrue(knownErrorPage.verifyElementsAreReadOnly());
    }
}
