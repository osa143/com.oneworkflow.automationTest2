package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        //dryRun = true,
        tags = {"@Bulk_Loading_Format_Change_Manual_500CI's_1"}
)
public class Test_Runner extends BaseTest {
}
