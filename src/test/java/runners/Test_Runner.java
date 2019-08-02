package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@SAO_499_Change_Ticket_Linked_Location"}
)

public class Test_Runner extends BaseTest {
}
