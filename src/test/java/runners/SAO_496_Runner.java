package runners;


import cucumber.api.CucumberOptions;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
      tags = {"@SAO_496"}
)
public class SAO_496_Runner extends BaseTest {

}
