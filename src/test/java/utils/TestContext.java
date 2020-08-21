package utils;

import java.io.FileInputStream;
import java.util.Properties;

public class TestContext {

    private static TestContext instance = null;
    private String env = null;
    private Properties envProperties = null;
    private TestContext(){
        env = System.getProperty("owf.env");
    }

    public static TestContext getInstance(){
        if(instance == null){
            return new TestContext();
        }else {
            return instance;
        }
    }

    public Properties getEnvironmentProperties(){
        if(envProperties == null){
            envProperties = new Properties();
            FileInputStream ip = null;
            try {
                ip = new FileInputStream(System.getProperty("user.dir") +
                        "\\src\\test\\resources\\configs\\" + env + ".properties");
                envProperties.load(ip);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return envProperties;
    }

    public String getEnv(){

        return env;
    }

}
