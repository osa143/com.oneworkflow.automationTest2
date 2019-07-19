package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@01.05_Set_location_of_incident_origin"}
)

public class Test_Runner extends BaseTest {
}
