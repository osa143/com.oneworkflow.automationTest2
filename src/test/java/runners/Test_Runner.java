package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@Validate_Incident_Record_Process_Artifact"}
)

public class Test_Runner extends BaseTest {
}
