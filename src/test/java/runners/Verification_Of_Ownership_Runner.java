package runners;

import cucumber.api.CucumberOptions;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@Verification_of_ownership"})

public class Verification_Of_Ownership_Runner extends BaseTest {
}
