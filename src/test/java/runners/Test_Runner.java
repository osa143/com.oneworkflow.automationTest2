package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        //dryRun = true,
        tags = {"@03.04_Link_child_tickets_and_make_master_ticket"}
)
public class Test_Runner extends BaseTest {
}
