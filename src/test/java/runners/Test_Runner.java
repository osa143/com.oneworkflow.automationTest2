package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@02.14_Find_Newly_Created_Or_Implemented_Changes"}
)

public class Test_Runner extends BaseTest {
}
