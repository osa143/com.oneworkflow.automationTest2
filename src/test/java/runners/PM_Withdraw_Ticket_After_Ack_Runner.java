package runners;


import cucumber.api.CucumberOptions;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@Withdraw_Ticket_After_Ack"}
)
public class PM_Withdraw_Ticket_After_Ack_Runner extends BaseTest {

}
