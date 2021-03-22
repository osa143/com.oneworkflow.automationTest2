package steps.BMC_Helix_Steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import pageObjects.BMC_Helix.BMC_Helix_HomePage;

public class BMC_HelixHomePageSteps {
    
    BMC_Helix_HomePage bmc_helixHomePage = new BMC_Helix_HomePage();

    @When("I click on applications")
    public void iClickOnApplications() {
        bmc_helixHomePage.clickOnApplications();

    }

    @And("I click on incident management and click new incident")
    public void iClickOnIncidentManagementAndClickNewIncident() {
        bmc_helixHomePage.clickOnNewIncident();

    }
    
    
}
