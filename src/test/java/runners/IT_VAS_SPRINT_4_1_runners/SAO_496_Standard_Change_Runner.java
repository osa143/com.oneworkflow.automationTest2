package runners.IT_VAS_SPRINT_4_1_runners;

import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@SAO_496_Standard_Change"}
)

public class SAO_496_Standard_Change_Runner extends BaseTest {
}
