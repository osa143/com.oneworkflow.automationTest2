package cucumberHooks;

import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import pageObjects.BasePage;
import utils.ReporterUtils;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import static java.nio.file.Files.readAllBytes;

public class Hooks {

    @After
    public void captureScreenShot(Scenario scenario) throws IOException, InterruptedException {
        File file = ReporterUtils.saveScreenShot(BasePage.takeScreenShot());

        Path p = Paths.get("Screenshots\\" + file.getName());
        scenario.embed(readAllBytes(p), "image/png");

    }
}
