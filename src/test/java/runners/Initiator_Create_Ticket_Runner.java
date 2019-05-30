package runners;


import cucumber.api.CucumberOptions;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
      tags = {"@Initiator_Create_Ticket_Runner"}
)
public class Initiator_Create_Ticket_Runner extends BaseTest {

}
