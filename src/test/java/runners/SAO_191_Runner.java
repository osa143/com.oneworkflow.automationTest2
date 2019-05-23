package runners;


import cucumber.api.CucumberOptions;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
      tags = {"@SAO_191"}
)
public class SAO_191_Runner extends BaseTest {

}
