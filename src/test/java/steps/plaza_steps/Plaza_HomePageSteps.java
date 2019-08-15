package steps.plaza_steps;

import cucumber.api.java.en.Then;
import org.testng.Assert;
import pageObjects.plaza.Plaza_HomePage;

public class Plaza_HomePageSteps {
    Plaza_HomePage homePage= new Plaza_HomePage();
    @Then("user should see the plaza home page")
    public void userShouldSeeThePlazaHomePage() {
        Assert.assertEquals(homePage.getTitle_plazaHomePage(), "Home - Plaza");
    }
}
