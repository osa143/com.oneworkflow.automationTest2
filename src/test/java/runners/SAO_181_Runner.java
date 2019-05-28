package runners;


import cucumber.api.CucumberOptions;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
      tags = {"@SAO_181"}
)
public class SAO_181_Runner extends BaseTest {

}
