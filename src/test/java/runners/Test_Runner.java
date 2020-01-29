package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        //dryRun = true,
        tags = {"@RiskQustion_Normal_Change_field_validation" +
                ""}
)
public class Test_Runner extends BaseTest {
}


