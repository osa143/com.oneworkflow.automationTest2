package runners.IT_VAS_SPRINT_4_1_runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
      tags = {"@SAO_181"}
)
public class SAO_181_Runner extends BaseTest {

}
