package runners;
import cucumber.api.CucumberOptions;
import org.testng.TestNG;
import org.testng.collections.Lists;
import java.util.List;

@CucumberOptions(features = "classpath:features/",
        plugin = { "pretty", "html:test-output/html",}, // for html report
        glue = {"steps", "cucumberHooks"},
        //dryRun = true,
        tags = {"@Copy_to_New_02_CI"}

)
public class Test_Runner extends BaseTest {

    public static void main(String[] args) {
            TestNG testng = new TestNG();
            List suites = Lists.newArrayList();
            suites.add("src/test/resources/TestNG.xml");
            testng.setTestSuites(suites);
            testng.run();
        }
}

