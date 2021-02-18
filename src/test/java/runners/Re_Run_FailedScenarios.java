package runners;

import cucumber.api.CucumberOptions;


@CucumberOptions(
        glue = {"steps", "cucumberHooks"},
        features ={"@test-output/failedReRun.txt"}



)

public class Re_Run_FailedScenarios extends BaseTest {

}


