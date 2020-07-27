package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        plugin = { "pretty", "html:test-output/html",}, // for html report
        glue = {"steps", "cucumberHooks"},
        //dryRun = true,
        tags = {"@Search_for_open_and_closed_incidents"}

)
public class Test_Runner extends BaseTest {
}

