package rough;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.testng.Assert;
import pageObjects.OWF_AgentConsolePage;
import pageObjects.OWF_ChangeRecordPage;
import pageObjects.OWF_CiSearchPage;
import pageObjects.OWF_SIDConsolePage;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.TimeZone;
import java.util.concurrent.TimeUnit;


public class Test1 {
    public static void main (String args[]) throws InterruptedException {
    test1();
       // System.out.println("========" + System.getProperty("user.dir"));
    }


    private static void test1() throws InterruptedException {

        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://td220lbf-mtint.ddc.teliasonera.net/arsys/shared/login.jsp?/arsys/home");
        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        driver.findElement(By.id("username-id")).sendKeys("Change_Automation_1");
        driver.findElement(By.id("pwd-id")).sendKeys("Test@1234");
        driver.findElement(By.id("login")).click();
        Thread.sleep(5000);
        driver.findElement(By.xpath("//img[@alt='Menu for Console']/..")).click();
//      driver.findElement(By.xpath("//div[@id='WIN_2_730000033']//a[@class='btn btn3d menu']")).click();
        Thread.sleep(2000);

        String menuItem = "SID Console";
        driver.findElement(By.className("MenuTableBody")).findElements(By.tagName("td")).stream().filter(element -> element.getText().equals(menuItem)).findFirst().orElse(null).click();

        // move to function to switch to particular tab
        Set<String> handles = driver.getWindowHandles();
        Iterator<String> it = handles.iterator();
        String parentWindow = it.next();
        String childWindow = it.next();
        driver.switchTo().window(childWindow);

        driver.findElement(By.xpath("//*[@id=\"WIN_0_200000003\"]/a")).click();
        //driver.findElement(By.className("MenuTableBody")).findElements(By.tagName("td")).stream().filter(x->x.getText().equals("Access")).findFirst().orElseThrow().click();
        driver.findElement(By.xpath("//div[@class='MenuOuter']//tr[2]//td[1]")).click();
        driver.findElement(By.xpath("//*[@id=\"WIN_0_200000004\"]/a")).click();
        //driver.findElement(By.className("MenuTableBody")).findElements(By.tagName("td")).stream().filter(x->x.getText().equals("Radio Access Network")).findFirst().orElseThrow().click();
        driver.findElement(By.xpath("//td[contains(text(),'Radio Access Network')]")).click();
        driver.findElement(By.xpath("//div[@id='WIN_0_200000005']//a[@class='btn btn3d menu']")).click();
        //driver.findElement(By.className("MenuTableBody")).findElements(By.tagName("td")).stream().filter(x->x.getText().equals("GSMCell")).findFirst().orElseThrow().click();
        driver.findElement(By.xpath("//td[contains(text(),'GSMCell')]")).click();
        driver.findElement(By.xpath("//a[@id='WIN_0_700009021']//div[@class='btntextdiv']")).click();
        Thread.sleep(3000);
        //System.out.println(driver.findElement(By.className("BaseTable")).findElements(By.tagName("td")).size());


//        driver.findElements(By.className("BaseTableHeader")).forEach(element -> System.out.println(element.getText()));

//        driver.findElement(By.id("T700009024")).findElements(By.tagName("th"));

        String reqdHeaderName = "Site Name";
        int columnIndex = -1;
        List<WebElement> tableHeaders = driver.findElements(By.className("BaseTableHeader"));

        //tableHeaders.forEach(element -> System.out.println(element.getText()));

        for (int i = 0; i < tableHeaders.size(); i++) {

            if (tableHeaders.get(i).getText().trim().equals(reqdHeaderName)) {
                columnIndex = i;
                break;
            }
        }

        List<WebElement> tableRows = driver.findElement(By.id("T700009024")).findElements(By.tagName("tr"));
//        tableRows.forEach(element -> System.out.println(element.getText()));

        String cellValue = null;
        if (columnIndex >= 0) {
            //System.out.println("Reqd column number === " + columnIndex);
            for (int i = 1; i < tableRows.size(); i++) {

                //tableRows.get(i).findElements(By.tagName("td")).forEach(element -> System.out.println(element.getText()));
                cellValue = tableRows.get(i).findElements(By.tagName("td")).get(columnIndex - 1).getText();
                //System.out.println("Required Value ==== " + cellValue);
                Assert.assertNotNull(cellValue);
            }

        } else {
            System.out.println("Invalid column name!!");
        }


        driver.switchTo().window(parentWindow);
        driver.findElement(By.cssSelector("#WIN_2_730000012 > a")).click();
        Thread.sleep(3000);
        driver.findElement(By.className("MenuTableBody")).findElements(By.tagName("td")).stream().filter(x -> x.getText().contains("Logout")).findFirst().orElse(null).click();
        Thread.sleep(3000);
        driver.close();
        driver.quit();
    }

    private static void test2() throws InterruptedException {
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://td220lbf-mtint.ddc.teliasonera.net/arsys/shared/login.jsp?/arsys/home");
        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        driver.findElement(By.id("username-id")).sendKeys("Tohall_copy");
        driver.findElement(By.id("pwd-id")).sendKeys("Test@1234");
        driver.findElement(By.id("login")).click();
        Thread.sleep(5000);
        driver.findElement(By.xpath("//*[@id='WIN_2_301394600']/a")).click();
        Thread.sleep(3000);
        driver.findElement(By.className("MenuTableBody")).findElements(By.tagName("td")).stream().filter(element -> element.getText().equals("Problem Record")).findFirst().orElse(null).click();

        Set<String> handles = driver.getWindowHandles();
        Iterator<String> it = handles.iterator();
        String parentWindow = it.next();
        String childWindow = it.next();
        driver.switchTo().window(childWindow);
        Thread.sleep(5000);
        driver.findElement(By.xpath("//div[@class='f1'][contains(text(),'Save')]")).click();
        Thread.sleep(3000);
        List<WebElement> errorElements = driver.findElement(By.xpath("//*[@id='pbartable']")).findElements(By.tagName("tr"));
        if (errorElements.size() > 0) {
            String warning = "Please select at least one country of impact for this problem";
            WebElement e = errorElements.stream().filter(x -> x.getText().contains(warning)).findFirst().orElse(null);
            if (e != null) {
                System.out.println("error is shown");
            }
        }
        driver.findElement(By.xpath("//*[@id='WIN_0_rc0id600002001']")).click();
        driver.findElement(By.xpath("//div[@class='f1'][contains(text(),'Save')]")).click();
        List<WebElement> errorElements1 = driver.findElement(By.xpath("//*[@id='pbartable']")).findElements(By.tagName("tr"));
        if (errorElements1.size() > 5) {
            System.out.println("multiple errors are shown");
        }
        //driver.close();
        // driver.quit();
    }

    private static void test3() throws InterruptedException {
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://td220lbf-mtint.ddc.teliasonera.net/arsys/shared/login.jsp?/arsys/home");
        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        driver.findElement(By.id("username-id")).sendKeys("Change_Automation_1");
        driver.findElement(By.id("pwd-id")).sendKeys("Test@1234");
        driver.findElement(By.id("login")).click();
        Thread.sleep(5000);
        //driver.findElement(By.className("TableHdr ")).findElements(By.tagName("td")).stream().filter(x -> x.getText().equals("Preferences ")).findFirst().orElseThrow().click();
        WebElement preferences= driver.findElement(By.xpath(" //div[@id='WIN_0_777000002']//a[@class='Prefs btn btn3d TableBtn'][contains(text(),'Preferences')]"));
        preferences.click();
        driver.findElement(By.className("MenuTableBody")).findElements(By.tagName("td")).stream().filter(x -> x.getText().equals("Add Column")).findFirst().orElse(null).click();
        WebElement oPnextDueDate= driver.findElement(By.xpath("//td[contains(text(),'OP Next Due Date')]"));
        oPnextDueDate.click();
       /* String reqdHeaderName = "OP Next Due Date";
        int columnIndex = -1;
        //Get all web elements with BaseTableHeader class name
        List<WebElement> tableHeaders = driver.findElements(By.className("BaseTableHeader"));

        for (int i = 0; i < tableHeaders.size(); i++) {

            if (tableHeaders.get(i).getText().trim().equals(reqdHeaderName)) {
                //Get the column index of the Site Name column
                columnIndex = i;
                break;
            }
        }
        //Get all the table rows by Id
        List<WebElement> tableRows = driver.findElement(By.id("T777000002")).findElements(By.tagName("tr"));
        String cellValue = null;
        if (columnIndex >= 0) {
            for (int i = 1; i < tableRows.size(); i++) {
                //Get all the cell values for Site Name column
                cellValue = tableRows.get(i).findElements(By.tagName("td")).get(columnIndex - 1).getText();
                //Check if Cell value is not null (if cell value is null, test should fail)
                Assert.assertNotNull(cellValue);
            }
        } else {
            //If we don't find the Site Name column, test should fail
            Assert.assertNotNull(cellValue);
        }*/
        Thread.sleep(3000);
        //preferences.click();
        //driver.findElement(By.className("MenuTableBody")).findElements(By.tagName("td")).stream().filter(x -> x.getText().equals("Remove Column")).findFirst().orElse(null).click();
        //driver.findElement(By.xpath("//td[contains(text(),'OP Next Due Date')]")).click();


    }
    public static void test4() throws InterruptedException {


        WebDriverManager.chromedriver().setup();
        WebDriver driver =new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://td220lbf-mtint.ddc.teliasonera.net/arsys/shared/login.jsp?/arsys/home");
        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        driver.findElement(By.id("username-id")).sendKeys("Tohall_copy");
        driver.findElement(By.id("pwd-id")).sendKeys("Test@1234");
        driver.findElement(By.id("login")).click();
        Thread.sleep(5000);
        driver.findElement(By.xpath("//img[@alt='Menu for Create']/..")).click();
        Thread.sleep(3000);
        String menuItem = "Change Record/Project/Freeze";
        driver.findElement(By.className("MenuTableBody")).findElements(By.tagName("td")).stream().filter(element -> element.getText().equals(menuItem)).findFirst().orElse(null).click();
        OWF_SIDConsolePage sidConsolePage = new OWF_SIDConsolePage();
        OWF_CiSearchPage ciSearchPage = new OWF_CiSearchPage();
        OWF_ChangeRecordPage changeRecordPage = new OWF_ChangeRecordPage();

        // move to function to switch to particular tab
        Set<String> handles = driver.getWindowHandles();
        Iterator<String> it = handles.iterator();
        String parentWindow = it.next();
        String childWindow = it.next();
        driver.switchTo().window(childWindow);
        Thread.sleep(3000);
        changeRecordPage.selectRequestType("Normal change");

       // driver.findElement(By.xpath("//*[@id=\"WIN_0_777031002\"]/a"));
        Thread.sleep(3000);
        //driver.findElement(By.xpath("/html/body/div[8]/div[2]/table/tbody/tr[1]/td[1]")).click();
        driver.findElement(By.className("MenuTableBody")).findElements(By.tagName("td")).stream().filter(element -> element.getText().equals("Normal Change")).findFirst().orElse(null).click();
        driver.findElement(By.xpath("//img[@alt='ReadOnly menu for Template']/..")).click();
        Thread.sleep(1000);
        driver.findElement(By.className("MenuTableBody")).findElements(By.tagName("td")).stream().filter(element -> element.getText().equals("All")).findFirst().orElse(null).click();
        Thread.sleep(2000);
       // driver.findElement(By.className("MenuTableBody")).findElements(By.tagName("td")).stream().filter(element -> element.getText().equals("Deploy to AWS")).findFirst().orElseThrow().click();
        Thread.sleep(2000);

        //String value = "All:IT:DK | Data Insight:Deploy to AWS";
        String value = "All:Mobile:RAN - Externals:RAN Connectivity";

        String arr[] = value.split(":");
        for (int i = 0; i < arr.length; i++) {
            final String temp = arr[i];
            driver.findElements(By.className("MenuTableBody")).get(i).findElements(By.tagName("td")).stream().filter(element -> element.getText().equals(temp)).findFirst().orElse(null).click();
            Thread.sleep(500);
        }
        driver.findElement(By.id("arid_WIN_0_600001054")).sendKeys("Change_Automation_1");
        DateTimeFormatter dft = DateTimeFormatter.ofPattern("MM/dd/yyyy HH:mm:ss");
        LocalDateTime st = LocalDateTime.now(TimeZone.getTimeZone("Europe/Stockholm").toZoneId());
        LocalDateTime startDateTime = st.plusMinutes(5);
        LocalDateTime endDateTime = startDateTime.plusMinutes(5);

        //calling Get time methods
        //BasePage basePage = new BasePage();
        //String startDatetime = basePage.GetStartDateTime("MM/dd/yyyy HH:mm:ss", "Europe/Stockholm", 5);
        //String endDateTime = basePage.GetEndDateTime(startDatetime, "MM/dd/yyyy HH:mm:ss", 5);


        driver.findElement(By.id("arid_WIN_0_777021160")).sendKeys(dft.format(startDateTime));
        driver.findElement(By.id("arid_WIN_0_777021161")).sendKeys(dft.format(endDateTime));
        driver.findElement(By.id("arid_WIN_0_900000019")).sendKeys("5");
        driver.findElement(By.id("WIN_0_700025244")).click();
        Thread.sleep(5000);
        //driver.findElement(By.xpath("//a[contains(text(),'Diagnosis')]")).click();
       driver.findElement(By.className("OuterOuterTab")).findElements(By.tagName("dl")).stream().filter(element -> element.getText().equals("Diagnosis")).findFirst().orElse(null).click();
        driver.findElement(By.id("WIN_0_999000229")).click();

        sidConsolePage.clickClearButton();
        sidConsolePage.clickSearchFor();
        sidConsolePage.selectDropDownValueAllCis();
        sidConsolePage.clickNamePlusTextBox("One Workflow Automation system test");
        sidConsolePage.clickSearchButton();
        ciSearchPage.clickToSelectCi();
        ciSearchPage.clickLevelDropdown();
        ciSearchPage.selectDegradationOfServiceDropdownValue();
        ciSearchPage.clickRelateCiButton();
        driver.switchTo().alert().accept();
        ciSearchPage.clickCloseButton();
        System.out.println(driver.findElement(By.id("WIN_0_600002905")).isEnabled());
        changeRecordPage.clicksendButton();
        System.out.println(driver.findElement(By.id("WIN_0_777504152")).isEnabled());
        changeRecordPage.clickSave();





    }

}
