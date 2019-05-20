package runners;


import cucumber.api.CucumberOptions;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@testDemo"}
)
public class DemoRunner extends BaseTest {

}
