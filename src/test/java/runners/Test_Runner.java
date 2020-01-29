package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        //dryRun = true,

        tags = {"@Resolved_Group_And_Person"}

)
public class Test_Runner extends BaseTest {
}


