package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@OLA_Target_Time_Availability"}
)

public class Test_Runner extends BaseTest {
}
