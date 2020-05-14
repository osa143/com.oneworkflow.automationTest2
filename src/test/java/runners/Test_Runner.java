package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        //dryRun = true,
        tags = {"@PLAZA_PDB_Importance_Impact_logic"}

)
public class Test_Runner extends BaseTest {
}

