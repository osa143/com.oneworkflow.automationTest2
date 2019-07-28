package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@04.20_Create_a_new_incident_ticket_and_later_close_it_with_Event_End_time_in_history"}
)

public class Test_Runner extends BaseTest {
}
