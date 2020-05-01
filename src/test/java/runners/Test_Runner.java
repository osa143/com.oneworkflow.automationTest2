package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        //dryRun = true,
        tags = {"@E2E_Urgent_Critical_Change_Internal_Initiator"}

)
public class Test_Runner extends BaseTest {
}

