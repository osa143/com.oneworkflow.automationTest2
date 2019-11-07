package runners;


import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import utils.CommonUtils;
import utils.ReporterUtils;

@CucumberOptions(
        strict = true, //it will check if any step is not defined in step definition file
        plugin = {"extentreports.cucumber.adapter.ExtentCucumberAdapter:"})

public class BaseTest extends AbstractTestNGCucumberTests {
    @BeforeClass
    public void setup(){
        System.setProperty("extent.reporter.html.start","true");
        System.setProperty("extent.reporter.logger.start","true");

        System.setProperty("extent.reporter.html.out", ReporterUtils.getReportName());
        System.setProperty("extent.reporter.logger.out", "ExtentReports/LoggerReport/");

        System.setProperty("screenshot.dir", ReporterUtils.getScreenShotPath());


    }

    @AfterClass
    public void teardown(){

    }


    }