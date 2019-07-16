package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@BR_2965_Tieto_Assignment"}
)

public class Test_Runner extends BaseTest {
}
