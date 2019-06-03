package runners;
import cucumber.api.CucumberOptions;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@Close_Ticket"})
public class Close_Ticket_Runner extends BaseTest {
}
