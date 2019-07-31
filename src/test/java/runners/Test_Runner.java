package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@Filter_out_the_tickets_of_interest_for_you"}
)

public class Test_Runner extends BaseTest {
}
