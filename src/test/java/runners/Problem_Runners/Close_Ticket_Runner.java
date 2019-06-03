package runners.Problem_Runners;
import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@Close_Ticket"})
public class Close_Ticket_Runner extends BaseTest {
}
