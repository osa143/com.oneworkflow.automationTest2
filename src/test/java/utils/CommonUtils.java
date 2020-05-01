package utils;

import org.openqa.selenium.WebDriver;
import pageObjects.BasePage;

import java.awt.*;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.FileInputStream;
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.util.*;

public class CommonUtils extends BasePage {

    public static String ciDetailsBeforeUpdate;
    public static String opTicket;
    public static String pbTicket;
    public static String firstTicketBefore;
    public static String firstTicketAfterWait;
    public static String firstTicketAfterRefreshInterval;
    public static String changeTicket;
    public static String beforeAnswering_riskScore;
    public static String afterAnswering_riskScore;
    public static String requestStart;
    public static String requestEnd;
    public static String eventStartTime;
    public static String plazaRequestID;
    public static String OpTicket_plaza;
    public static String CI_Impact_From_Time;
    public static String CI_Impact_To_Time;

    // 0 - parent window
    // 1 - first child and so on
    public static void switchToChildWindow(WebDriver driver, int windowId) {
        Set<String> handles = driver.getWindowHandles();
        System.out.println(handles);
        int handlesCount = handles.size();
        if (handlesCount > 0)
        {
            Iterator<String> it = handles.iterator();
            for (int i = 0; i <= handlesCount - 1; i++)
            {
                if (it.hasNext()) {
                    String window = it.next();
                    if (i == windowId) {
                        driver.switchTo().window(window);
                        break;
                    }
                }
            }
        }
    }

    public static String getDate(String timeZone) {
        if (timeZone.equals(""))
            timeZone = ZoneId.systemDefault().getId();

        LocalDate currentDate = LocalDate.now(TimeZone.getTimeZone(timeZone).toZoneId());

        return currentDate.toString();

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
    public static String getDateAsTodayMidnight(int delayMinutes)
    {
        LocalTime midnight = LocalTime.MIDNIGHT;
        LocalDate today = LocalDate.now(ZoneId.of("Europe/Stockholm"));
        LocalDateTime todayMidnight = LocalDateTime.of(today, midnight);

        if (delayMinutes >= 0) {
            todayMidnight = todayMidnight.plusMinutes(delayMinutes);
        } else {
            todayMidnight= todayMidnight.minusMinutes(Math.abs(delayMinutes));
        }
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        return dateTimeFormatter.format(todayMidnight);

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


//    filename - full path of the file
    public static void uploadFile(String filename){

        StringSelection stringSelection = new StringSelection(filename);
        Toolkit.getDefaultToolkit().getSystemClipboard().setContents(stringSelection, null);

        try {
            Robot robot = new Robot();
            robot.delay(250);
            robot.keyPress(KeyEvent.VK_CONTROL);
            robot.keyPress(KeyEvent.VK_V);
            robot.keyRelease(KeyEvent.VK_V);
            robot.keyRelease(KeyEvent.VK_CONTROL);
            robot.keyPress(KeyEvent.VK_ENTER);
            robot.delay(50);
            robot.keyRelease(KeyEvent.VK_ENTER);
        } catch (AWTException e) {
            e.printStackTrace();
        }
    }




}
