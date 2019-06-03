package runners.Problem_Runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@Initiator_Change_Description_After_Ack"}
)
public class Initiator_Change_Description_After_Ack_Runner extends BaseTest {

}
