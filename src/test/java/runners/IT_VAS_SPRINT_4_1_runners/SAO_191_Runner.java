package runners.IT_VAS_SPRINT_4_1_runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
      tags = {"@SAO_191"}  //@SAO_191
)
public class SAO_191_Runner extends BaseTest {

}
