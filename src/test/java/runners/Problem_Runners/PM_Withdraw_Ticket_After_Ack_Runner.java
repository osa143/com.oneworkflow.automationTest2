package runners.Problem_Runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@Withdraw_Ticket_After_Ack"}
)
public class PM_Withdraw_Ticket_After_Ack_Runner extends BaseTest {

}
