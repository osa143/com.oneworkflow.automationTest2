package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        //dryRun = true,
        tags = {"@SAO-427-BR2862-Bulk_Loading_Error_Message_Structure_Trouble"}
)

public class Test_Runner extends BaseTest {
}
