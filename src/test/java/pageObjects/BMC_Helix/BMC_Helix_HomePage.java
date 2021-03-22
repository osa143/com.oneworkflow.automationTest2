package pageObjects.BMC_Helix;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import pageObjects.BasePage;

public class BMC_Helix_HomePage extends BasePage {

    private String applications_ID = "WIN_0_304316340";
    private String incident_Management_Xpath = "//div[@arid='app1628']";
    private String newIncident_Xpath = "//span[contains(text(),'New Incident')]";

    Actions actions = new Actions(driver);

    public void clickOnApplications()
    {
        clickElementById(applications_ID);
    }
    public void clickOnNewIncident()
    {
        WebElement incidentManagement = findElement(By.xpath(incident_Management_Xpath));
        moveToWebElement(incidentManagement);
        clickElementById(newIncident_Xpath);
    }
}
