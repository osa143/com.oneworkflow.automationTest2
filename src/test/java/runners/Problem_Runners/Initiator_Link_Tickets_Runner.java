package runners.Problem_Runners;
import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@Initiator_Link_Tickets"})
public class Initiator_Link_Tickets_Runner extends BaseTest {

}
