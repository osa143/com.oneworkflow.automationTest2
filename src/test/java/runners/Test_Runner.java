package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@Validate_Behaviour_And_Options_For_Data_Field_Priority"}
)

public class Test_Runner extends BaseTest {
}
