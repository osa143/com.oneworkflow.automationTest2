package cucumberHooks;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import driver.factory.DriverFactory;
import org.openqa.selenium.Keys;
import pageObjects.BasePage;
import pageObjects.OWF_AgentConsolePage;
import utils.CommonUtils;
import utils.ReporterUtils;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

public class Hooks {


    @After
    public void Teardown(Scenario scenario) throws IOException, InterruptedException {

        if (scenario.isFailed()) {
//            byte[] screenshot = BasePage.takeScreenShotAsByteArray();
//        File file = ReporterUtils.saveScreenShot(BasePage.takeScreenShot());
//        String relativePath = "." + "/" + "Screenshots" + "/" + file.getName();
//        Path p = Paths.get("Screenshots\\" + file.getName());
//            scenario.embed(screenshot, "image/png");
        }


//            OWF_AgentConsolePage agentConsolePage = new OWF_AgentConsolePage();
//            CommonUtils.switchToChildWindow(agentConsolePage.getDriver(), 1);
//            agentConsolePage.clickNavUserMenu();
//            agentConsolePage.clickMenuItemLogout_Hooks();
//            DriverFactory.getInstance().quit();

       }


    }

