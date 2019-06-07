package utils;

import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;

public class ReporterUtils {


    public static String getReportName(){
        return System.getProperty("user.dir") + CommonUtils.getProperty("paths.properties", "extentReportPath") + "ExtentReport_" + CommonUtils.getDateTime("yyyyMMdd_HHmmss", "", 0) + ".html";
    }

    public static String getScreenShotPath(){
        return System.getProperty("user.dir") + CommonUtils.getProperty("paths.properties", "screenshotPath") + "/Screenshots_" + CommonUtils.getDateTime("yyyyMMdd_HHmmss", "", 0);

    }

    public static File saveScreenShot(File screenshot){

        File file = new File(System.getProperty("user.dir") + CommonUtils.getProperty("paths.properties", "screenshotPath") + "ScreenShot_" + CommonUtils.getDateTime("yyyyMMdd_HHmmss", "", 0) + ".png");
        try {
            FileUtils.moveFile(screenshot, file);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return file;
    }


}
