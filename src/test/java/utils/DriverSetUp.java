package utils;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.safari.SafariDriver;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class DriverSetUp {


        public static WebDriver driver;
        public static Properties prop;


        public DriverSetUp(){
            try {
                prop = new Properties();
                try (FileInputStream ip = new FileInputStream(System.getProperty("user.dir") +
                        "\\src\\test\\resources\\configs\\paths.properties")) {
                    prop.load(ip);
                }
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }


        public static void initialization(){
            String browserName = prop.getProperty("browser");

            if(browserName.equals("chrome")){
                WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver();
            }
            else if(browserName.equals("FireFox")){
                WebDriverManager.firefoxdriver().setup();
                driver = new FirefoxDriver();
            }
            else if(browserName.equals("Internet Explorer")){
                WebDriverManager.iedriver().setup();
                driver = new InternetExplorerDriver();
            }
            else if(browserName.equals("Safari")){
                WebDriverManager.firefoxdriver().setup();
                driver = new SafariDriver();
            }


            driver.manage().window().maximize();
            driver.manage().deleteAllCookies();
            driver.manage().timeouts().pageLoadTimeout(WaitUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
            driver.manage().timeouts().implicitlyWait(WaitUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);

            driver.get(prop.getProperty("url"));

        }

    }

