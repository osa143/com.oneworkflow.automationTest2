package runners.IT_VAS_SPRINT_4_1_runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@LifeCycle_KE_and_Changes_To_KE"}
)

public class Test_Runner extends BaseTest {
}
