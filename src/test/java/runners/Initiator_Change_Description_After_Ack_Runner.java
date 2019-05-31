package runners;


import cucumber.api.CucumberOptions;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        tags = {"@Initiator_Change_Description_After_Ack"}
)
public class Initiator_Change_Description_After_Ack_Runner extends BaseTest {

}
