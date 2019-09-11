package steps.plaza_steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.testng.Assert;
import pageObjects.BasePage;
import pageObjects.plaza.Plaza_HomePage;
import utils.CommonUtils;

public class Plaza_HomePageSteps extends BasePage {
    Plaza_HomePage homePage= new Plaza_HomePage();
    @Then("user should see the plaza home page")
    public void userShouldSeeThePlazaHomePage() {
        Assert.assertEquals(homePage.getTitle_plazaHomePage(), "Home - Plaza");
    }

    @When("user clicks on {string}")
    public void userClicksOnButton(String text) {
        homePage.clickElementByContainsTextAndTagName("*", text);
    }

    @And("user clicks on IT Infrastructure dropdown")
    public void userClicksOnITInfrastructureDropdown() {
        clickElement(By.xpath("//*[@id='xcc61d55edb198b00b27fdb11ce961902']/div/div[2]/div[4]/a/span/i"));
    }

    @Then("user should see Finance & Assurance form")
    public void userShouldSeeFinanceAssuranceForm() {

    }

    @When("user selects role dropdown as {string}")
    public void userSelectsRoleDropdownAs(String arg0) {
      homePage.selectRoleDropdown(arg0);
    }

    @And("user enters {string} in the request field")
    public void userEntersInTheRequestField(String arg0) {
        homePage.enterRequest(arg0);
    }

    @And("user selects system dropdown as {string}")
    public void userSelectsSystemDropdownAs(String arg0) {
        homePage.selectSystemDropdown(arg0);
    }

    @And("user enters planned start time as current time")
    public void userEntersPlannedStartTimeAsCurrentTime() {
        homePage.enterPlannedStart(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @And("user enters planned end time as current time")
    public void userEntersPlannedEndTimeAsCurrentTime() {
        homePage.enterPlannedEnd(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @And("user enters plaza description as {string}")
    public void userEntersPlazaDescriptionAs(String arg0) {
        homePage.enterDescription(arg0);
    }

    @And("user enters additional comments as {string}")
    public void userEntersAdditionalCommentsAs(String arg0) {
        homePage.enterAdditionalComments(arg0);
    }

    @And("user clicks on order")
    public void userClicksOnOrder() {
        homePage.clickOrder();
    }

    @When("user clicks on Finance & Assurance")
    public void userClicksOnFinanceAssurance() {
        clickElement(By.xpath("//img[@alt='Finance & Assurance']"));
    }

    @And("user gets plaza request id")
    public void userGetsPlazaRequestId() {
       CommonUtils.plazaRequestID=homePage.getPlazaRequestNum();
    }

    @And("user clicks on plaza request id")
    public void userClicksOnPlazaRequestId() {
        homePage.clickPlazaRequestNum();
    }

    @Then("user should see service request form")
    public void userShouldSeeServiceRequestForm() {
    }

    @When("user opens new tab")
    public void userOpensNewTab() {
        homePage.openNewTab();
    }


    @When("user clicks on {string} pebble")
    public void userClicksOnPebble(String arg0) {
        homePage.clickPebble(arg0);
    }

    @Then("user should see CRM form")
    public void userShouldSeeCRMForm() {
        
    }

    @And("user selects service request name as {string}")
    public void userSelectsServiceRequestNameAs(String arg0) {
        homePage.selectServiceRequestName(arg0);
    }

    @And("user enters CRM request as {string}")
    public void userEntersCRMRequestAs(String arg0) {
       homePage.enterCRMRequest(arg0);
    }

    @And("user enters CRM planned start date as current date")
    public void userEntersCRMPlannedStartDateAsCurrentDate() {
        homePage.enterCRMPlannedStart(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @And("user enters CRM planned end date as current date")
    public void userEntersCRMPlannedEndDateAsCurrentDate() {
       homePage.enterCRMPlannedEnd(CommonUtils.getDateTime("yyyy-MM-dd HH:mm:ss", "Europe/Stockholm", 0));
    }

    @And("user enters CRM description as {string}")
    public void userEntersCRMDescriptionAs(String arg0) {
        homePage.enterCRMDescription(arg0);
    }

    @And("user selects CRM system as {string}")
    public void userSelectsCRMSystemAs(String arg0) {
       homePage.selectCRMSystemDropdown(arg0);
    }

    @Then("user should see {string} form")
    public void userShouldSeeForm(String arg0) {

    }

    @And("user enters C2B request as {string}")
    public void userEntersC2BRequestAs(String arg0) {
        homePage.enterC2B_Request(arg0);
    }

    @And("user selects C2B environment as {string}")
    public void userSelectsC2BEnvironmentAs(String arg0) {
        homePage.selectEnvironment(arg0);
    }

    @And("user enters C2B description as {string}")
    public void userEntersC2BDescriptionAs(String arg0) {
        homePage.enterC2B_Description(arg0);
    }

    @And("user selects select request as {string}")
    public void userSelectsSelectRequestAs(String arg0) {
        homePage.select_selectRequest(arg0);
    }

    @And("user enters C2B general request as {string}")
    public void userEntersCBGeneralRequestAs(String arg0) {
        homePage.enterC2B_generalRequest(arg0);
    }

    @And("user selects C2B general environment as {string}")
    public void userSelectsCBGeneralEnvironmentAs(String arg0) {
        homePage.selectC2B_GeneralEnvironment(arg0);
    }

    @And("user enters C2B general description as {string}")
    public void userEntersCBGeneralDescriptionAs(String arg0) {
        homePage.enterC2B_general_Description(arg0);
    }

    @And("user enters C2B service request as {string}")
    public void userEntersCBServiceRequestAs(String arg0) {
        homePage.enterC2B_serviceRequest(arg0);
    }

    @And("user enters C2B environment as {string}")
    public void userEntersCBEnvironmentAs(String arg0) {
        homePage.selectC2B_serviceEnvironment(arg0);
    }

    @And("user enters C2B service description as {string}")
    public void userEntersCBServiceDescriptionAs(String arg0) {
        homePage.enterC2B_service_Description(arg0);
    }

    @And("user enters BCCP request as {string}")
    public void userEntersBCCPRequestAs(String arg0) {
        homePage.enterC2B_BCPP_Request(arg0);
    }

    @And("user selects BCPP environment as {string}")
    public void userSelectsBCPPEnvironmentAs(String arg0) {
        homePage.selectBCPP_Environment(arg0);
    }

    @And("user enters Add ci as {string}")
    public void userEntersAddCiAs(String arg0) {
        homePage.selectsAddCi(arg0);
    }

    @And("user selects BCPP description as {string}")
    public void userEntersBCPPDescriptionAs(String arg0) {
        homePage.enterBCPP_Description(arg0);
    }
}
