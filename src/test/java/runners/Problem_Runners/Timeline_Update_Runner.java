package runners.Problem_Runners;

import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@Timeline_Update"})

public class Timeline_Update_Runner extends BaseTest {
}
