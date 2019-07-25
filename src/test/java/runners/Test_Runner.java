package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@Set_WO_to_cleared_add_End_date_and_time_and_close_WO"}
)

public class Test_Runner extends BaseTest {
}
