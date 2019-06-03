package runners.Problem_Runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@Pm_Withdraw_Ticket_Before_Ack"}
)
public class PM_Withdraw_Before_Ack_Runner extends BaseTest {

}
