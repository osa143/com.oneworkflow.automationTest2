package rough;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;
import java.util.Set;

public class CalendarLoginTest {

    public static void main(String args[]) throws InterruptedException {
        loginTest();

    }

    public static void loginTest() throws InterruptedException {
        WebDriverManager.chromedriver().setup();
        WebDriver driver =new ChromeDriver();
        driver.manage().window().maximize();
        WebDriverWait wait = new WebDriverWait(driver, 30);
        driver.get("http://localhost:8080/#/calendar");

        WebElement username= driver.findElement(By.xpath("//input[@placeholder='Username']"));
        wait.until(ExpectedConditions.elementToBeClickable(username)).sendKeys("ATestUser1");
        Thread.sleep(2000);

        WebElement passWord= driver.findElement(By.xpath("//input[@placeholder='Password']"));
        wait.until(ExpectedConditions.elementToBeClickable(passWord)).sendKeys("Test@1234");
        Thread.sleep(2000);

        WebElement loginButton= driver.findElement(By.xpath("//button[@class='login__btn']"));
        wait.until(ExpectedConditions.elementToBeClickable(loginButton)).click();
        Thread.sleep(5000);

       // WebElement month = driver.findElement(By.xpath("//button[contains(text(),'month']"));
        //WebElement month = driver.findElement(By.xpath("//button[@class='fc-month-button fc-button fc-state-default fc-state-active']"));
       // WebElement month = driver.findElement(By.cssSelector("div.main ani-calendar.ng-star-inserted:nth-child(2) div.calendar__fullCalendar div.negative-top.ng-star-inserted:nth-child(2) ng-fullcalendar.cosy.fc.fc-unthemed.fc-ltr div.fc-toolbar.fc-header-toolbar div.fc-right div.fc-button-group > button.fc-month-button.fc-button.fc-state-default.fc-state-active\n"));
         WebElement month = driver.findElement(By.xpath("/html[1]/body[1]/ani-main[1]/div[1]/div[2]/ani-calendar[1]/div[1]/div[2]/div[3]/div[1]/ng-fullcalendar[1]/div[1]/div[2]/div[1]/button[2]"));
        wait.until(ExpectedConditions.elementToBeClickable(month)).click();
        driver.findElement(By.xpath("//mat-icon[contains(text(),'menu')]")).click();
       Thread.sleep(2000);
        driver.findElement(By.xpath("//div[contains(text(),'Compact')]")).click();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//div[@class='fc-day-grid fc-unselectable']//div[1]//div[2]//table[1]//tbody[1]//tr[1]//td[1]//a[1]")).click();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//mat-dialog-container[@id='mat-dialog-3']")).sendKeys(Keys.ESCAPE);
        Thread.sleep(1000);



    }
}
