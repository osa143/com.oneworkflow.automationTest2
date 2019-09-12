package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        //dryRun = true,
        tags = {"@Manual_Bulk_Loading_Primary_CI_Default_Settings_change"}
)

public class Test_Runner extends BaseTest {
}
