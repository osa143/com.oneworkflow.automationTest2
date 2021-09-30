package runners;
import cucumber.api.CucumberOptions;
import org.testng.TestNG;
import org.testng.collections.Lists;
import java.util.List;

@CucumberOptions(features = "classpath:features/",
        plugin = { "pretty", "html:test-output/html",// for html report
                   "rerun:test-output/failedReRun.txt"}, // To rerun failed scenarios
        glue = {"steps", "cucumberHooks"},
        //dryRun = true,
        tags = {"@B2B_Test_Cases"}

)

public class Test_Runner extends BaseTest {

    public static void main(String[] args) {
//            TestNG testng = new TestNG();
//            List suites = Lists.newArrayList();
//            suites.add("src/test/resources/TestNG.xml");
//            testng.setTestSuites(suites);
//            testng.run();
        }
}
