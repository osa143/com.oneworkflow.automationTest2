package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        //dryRun = true,
        tags = {"@SAO-427-BR2430_CI_not_found_prompt_for_CI_Search_Trouble"}
)

public class Test_Runner extends BaseTest {
}
