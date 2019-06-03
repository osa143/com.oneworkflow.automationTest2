package runners.Problem_Runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@Assignee"}
)
public class Redirecting_And_Access_For_Assignee_Runner extends BaseTest {
}
