package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@00.10_Validate_Urgency_field_availability_in_Incident_record"}
)

public class Test_Runner extends BaseTest {
}
