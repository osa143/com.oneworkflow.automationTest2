package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        //dryRun = true,

        tags = {"@workorder_Resolved_Person_field_validation"}

)
public class Test_Runner extends BaseTest {
}


