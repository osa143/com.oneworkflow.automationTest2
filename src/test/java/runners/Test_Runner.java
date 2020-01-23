package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        //dryRun = true,
        tags = {"@Auto_Assignment_For_Appropriate_Assignment_Group" +
                ""}
)
public class Test_Runner extends BaseTest {
}


