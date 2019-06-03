package runners.Problem_Runners;

import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@Verification_of_ownership"})

public class Verification_Of_Ownership_Runner extends BaseTest {
}
