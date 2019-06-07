package driver.factory;

import bsh.Capabilities;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.ie.InternetExplorerOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.safari.SafariDriver;
import utils.TestContext;
import utils.WaitUtil;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class DriverFactory {

    private static WebDriver driver = null;

    private static DriverFactory instance = null;
    //private static DesiredCapabilities capabilities = null;
    private DriverFactory()
    {

    }

    public static DriverFactory getInstance() {
        if(instance == null)
            return new DriverFactory();
        else
            return instance;
    }

    public WebDriver getDriver() {
        if(driver == null){
            Properties prop = new Properties();
            FileInputStream ip = null;
            try {
                ip = new FileInputStream(System.getProperty("user.dir") +
                        "\\src\\test\\resources\\configs\\" + TestContext.getInstance().getEnv() + ".properties");
                prop.load(ip);
            } catch (Exception e) {
                e.printStackTrace();
            }

            String browserName = prop.getProperty("driver");

            switch (browserName.toUpperCase()) {

                case "CHROME":
                    WebDriverManager.chromedriver().setup();
                    driver = new ChromeDriver();
                    break;


                case "IE":
                    WebDriverManager.iedriver().setup();
                    InternetExplorerOptions options = new InternetExplorerOptions();
                    options.setCapability("ignoreProtectedModeSettings", true);

                    //capabilities = DesiredCapabilities.internetExplorer();
                    //capabilities.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS, true);
//                    capabilities.setCapability(InternetExplorerDriver., true);
                    driver = new InternetExplorerDriver(options);
                    break;

                case "FIREFOX":
                    WebDriverManager.firefoxdriver().setup();
                    driver = new FirefoxDriver();
                    break;

                case "SAFARI":
                    WebDriverManager.firefoxdriver().setup();
                    driver = new SafariDriver();
                    break;
                case "EDGE":
                    WebDriverManager.edgedriver().setup();
                    driver = new EdgeDriver();
                    break;
            }

            driver.manage().window().maximize();
            driver.manage().deleteAllCookies();
             driver.manage().timeouts().pageLoadTimeout(WaitUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
            driver.manage().timeouts().implicitlyWait(WaitUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
        }

        return driver;
    }

    public void quit(){
        if(driver!= null){
            driver.quit();
            driver = null;
        }
    }

}
