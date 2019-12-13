package steps;

import utils.CommonUtils;
import utils.TestContext;

import java.util.Properties;

public class BaseSteps {

    protected Properties envProperties;

    public Properties getProperties() {
        return TestContext.getInstance().getEnvironmentProperties();
    }



}
