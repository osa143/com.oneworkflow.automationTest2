package driver.factory;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.safari.SafariDriver;
import utils.WaitUtil;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class DriverFactory {

    private DriverFactory()
    {

    }
    public enum BrowserType{
        chrome, firefox, ie, safari;
    }

    private static WebDriver driver;

    private static DriverFactory instance = new DriverFactory();

    public static DriverFactory getInstance() {
        return instance;
    }

    public WebDriver getDriver() {

        Properties prop = new Properties();
        FileInputStream ip = null;
        try {
            ip = new FileInputStream(System.getProperty("user.dir") +
                    "\\src\\test\\resources\\configs\\runtime.properties");
            prop.load(ip);
        } catch (Exception e) {
            e.printStackTrace();
        }

        String browserName = prop.getProperty("browser");

        switch (browserName.toUpperCase()) {

            case "CHROME":
                WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver();
                break;


            case "IE":
                WebDriverManager.iedriver().setup();
                driver = new InternetExplorerDriver();

                break;

            case "FIREFOX":
                WebDriverManager.firefoxdriver().setup();
                driver = new FirefoxDriver();
                break;

            case "SAFARI":
                WebDriverManager.firefoxdriver().setup();
                driver = new SafariDriver();
                break;

        }

        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().pageLoadTimeout(WaitUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(WaitUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
        return driver;
    }

}
