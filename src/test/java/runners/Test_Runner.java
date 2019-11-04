package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        //dryRun = true,
        tags = {"@04.04_Create_change_from_incident_using_Create_button_in_Linked_Items_tab"}
)

public class Test_Runner extends BaseTest {
}
