package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@02.03_Check_impact_record"}
)

public class Test_Runner extends BaseTest {
}
