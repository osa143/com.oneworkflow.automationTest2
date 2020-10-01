package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
//        plugin = { "pretty", "html:test-output/html",}, // for html report
        glue = {"steps", "cucumberHooks"},
        //dryRun = true,
        tags = {"@AdminChangeLocationSearch"}

)
public class Test_Runner extends BaseTest {
}

