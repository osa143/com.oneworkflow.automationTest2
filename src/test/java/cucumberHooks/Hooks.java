package cucumberHooks;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import pageObjects.BasePage;

import java.io.IOException;

//import extentreports_CucumberAdapter.cucumber.adapter.ExtentCucumberAdapter;

public class Hooks {

    @After
    public void Teardown(Scenario scenario) throws IOException, InterruptedException {

        if (scenario.isFailed()) {
            byte[] screenshot = BasePage.takeScreenShotAsByteArray();
//        File file = ReporterUtils.saveScreenShot(BasePage.takeScreenShot());
//        String relativePath = "." + "/" + "Screenshots" + "/" + file.getName();
//        Path p = Paths.get("Screenshots\\" + file.getName());
            scenario.embed(screenshot, "image/png");
        }

//            OWF_AgentConsolePage agentConsolePage = new OWF_AgentConsolePage();
//            CommonUtils.switchToChildWindow(agentConsolePage.getDriver(), 0);
//            agentConsolePage.clickNavUserMenu();
//            agentConsolePage.clickMenuItemLogout();
//            DriverFactory.getInstance().quit();

       }
    }

