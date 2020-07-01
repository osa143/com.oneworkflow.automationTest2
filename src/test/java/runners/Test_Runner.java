package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        plugin = {
                "pretty",
                "html:test-output/html",}, // for html report
        glue = {"steps", "cucumberHooks"},
        //dryRun = true,
        tags = {"@E2E_Security_Console"}

)
public class Test_Runner extends BaseTest {
}

