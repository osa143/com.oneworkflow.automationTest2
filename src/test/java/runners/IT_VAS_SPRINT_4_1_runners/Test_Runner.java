package runners.IT_VAS_SPRINT_4_1_runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@SAO_499_Change_Ticket_Title,@SAO_499_CI_Search_Location"}
)

public class Test_Runner extends BaseTest {
}
