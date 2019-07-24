package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@04.05_Create_problem_candidate_from_incident_using_Create_button_in_Linked_Items_tab"}
)

public class Test_Runner extends BaseTest {
}
