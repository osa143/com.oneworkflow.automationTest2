package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@Estimated_Ready_Date_Time_Availability"}
)

public class Test_Runner extends BaseTest {
}
