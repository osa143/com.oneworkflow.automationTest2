package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        //dryRun = true,
        tags = {"@Bulk_Loading_Ignore_Duplicate_CI's_Trouble"}
)

public class Test_Runner extends BaseTest {
}
