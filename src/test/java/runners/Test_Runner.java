package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        //dryRun = true,

        tags = {"@Cleared_time_change_to_closed"}

)
public class Test_Runner extends BaseTest {
}


