package runners;


import cucumber.api.CucumberOptions;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
      tags = {"@Initiator_Runner"}
)
public class Initiator_Runner extends BaseTest {

}
