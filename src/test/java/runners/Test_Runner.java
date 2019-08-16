package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        //dryRun = true,
        tags = {"@CSV_Bulk_Loading_Primary_CI_Default_Settings"}
)

public class Test_Runner extends BaseTest {
}
