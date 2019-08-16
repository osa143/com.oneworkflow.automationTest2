package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        //dryRun = true,
        tags = {"@SAO-427-BR2865-Bulk_Loading_Summary_Trouble"}
)

public class Test_Runner extends BaseTest {
}
