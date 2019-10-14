package runners;


import cucumber.api.CucumberOptions;
import runners.BaseTest;

@CucumberOptions(features = "classpath:features/",
        glue = {"steps", "cucumberHooks"},
        //dryRun = true,
        tags = {"@All_File_Types_Bulk_Loading_CTI_Details_trouble"}
)

public class Test_Runner extends BaseTest {
}
