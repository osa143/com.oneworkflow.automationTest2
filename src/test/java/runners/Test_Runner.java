package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@Verify_functionality_of_Service_Info_tab"}
)

public class Test_Runner extends BaseTest {
}
