package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@Verify_status_of_BU_receiving_disturbance_information_in_Service_Info_tab"}
)

public class Test_Runner extends BaseTest {
}
