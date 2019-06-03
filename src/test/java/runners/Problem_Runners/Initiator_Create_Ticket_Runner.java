package runners.Problem_Runners;
import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@Initiator_Create_Ticket_Runner"}
)
public class Initiator_Create_Ticket_Runner extends BaseTest {

}
