package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@01.08_Set_the_service_impact"}
)

public class Test_Runner extends BaseTest {
}
