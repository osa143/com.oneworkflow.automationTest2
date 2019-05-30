package runners;


import cucumber.api.CucumberOptions;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@Pm_Withdraw_Ticket_Before_Ack"}
)
public class PM_Withdraw_Before_Ack_Runner extends BaseTest {

}
