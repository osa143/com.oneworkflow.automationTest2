package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        //dryRun = true,
        tags = {"@When_creating_workorder_a_proposal_of_default_technical_escalation_queue_should_appear"}
)
public class Test_Runner extends BaseTest {
}
