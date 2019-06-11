package runners.IT_VAS_SPRINT_4_1_runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@SAO_52_TeMIP_Clear"}
)

public class Test_Runner extends BaseTest {
}
