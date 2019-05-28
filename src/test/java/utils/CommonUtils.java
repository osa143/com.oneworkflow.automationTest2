package utils;

import org.openqa.selenium.WebDriver;
import pageObjects.BasePage;

import java.io.File;
import java.io.FileInputStream;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Iterator;
import java.util.Properties;
import java.util.Set;
import java.util.TimeZone;

public class CommonUtils extends BasePage {

    public static void switchWindow(WebDriver driver, String windowType) {
        Set<String> handles = driver.getWindowHandles();
        Iterator<String> it = handles.iterator();
        String parentWindow = it.next();
        String childWindow = it.next();
        if ((windowType == "child")) {
            driver.switchTo().window(childWindow);
        }
        else
        {
            driver.switchTo().window(parentWindow);
        }
    }

    public static String getDateTime(String pattern, String timeZone, int minutes) {
        if (timeZone.equals(""))
            timeZone = ZoneId.systemDefault().getId();
        LocalDateTime startDateTime = null;
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern(pattern);
        LocalDateTime currentDateTime = LocalDateTime.now(TimeZone.getTimeZone(timeZone).toZoneId());
        if (minutes >= 0) {
            startDateTime = currentDateTime.plusMinutes(minutes);
        } else {
            startDateTime = currentDateTime.minusMinutes(Math.abs(minutes));
        }
        return dateTimeFormatter.format(startDateTime);

    }

    public static String getProperty(String fileName, String property){

        Properties prop = new Properties();
        FileInputStream fis = null;
        try {
            fis = new FileInputStream(System.getProperty("user.dir") + "/src/test/resources/configs/" + fileName);
            prop.load(fis);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return prop.getProperty(property);
    }



}
