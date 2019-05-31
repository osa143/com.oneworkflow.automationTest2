package runners;

import cucumber.api.CucumberOptions;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@Timeline_Update"})

public class Timeline_Update_Runner extends BaseTest {
}
